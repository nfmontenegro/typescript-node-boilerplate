import {Response, Request} from 'express'
import bcrypt from 'bcrypt'
import {getManager} from 'typeorm'

import {User} from '../entity/User'
import {IUser} from '../interfaces/user'

export const createUser = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    if (!Object.keys(req.body).length) res.status(200).json({message: 'Empty body!'})
    const SALT_ROUND: number = 10
    const userRepository = getManager().getRepository(User)
    const password: string = req.body.password
    const hashedPassword: string = await bcrypt.hash(password, SALT_ROUND)
    const user: object = userRepository.create({...req.body, password: hashedPassword})
    const userSaved = await userRepository.save(user)

    res.json(userSaved)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

export const getUser = async (req: Request, res: Response): Promise<Response | void> => {
  const id: number = req.params.id
  const userRepository = getManager().getRepository(User)
  const user: IUser = await userRepository.findOne(id)

  if (!user) res.status(200).json({message: `User with id ${id} not found`})

  res.status(200).json(user)
}

export const getUsers = async (req: Request, res: Response): Promise<Response | void> => {
  const userRepository = getManager().getRepository(User)
  const users: Array<object> = await userRepository.find()

  res.status(200).json(users)
}
