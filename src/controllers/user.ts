import {Response, Request} from 'express'
import bcrypt from 'bcrypt'
import {getManager} from 'typeorm'

import {User} from '../entity/User'
import {IUser} from '../interfaces/user'

export const createUser = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    if (!Object.keys(req.body).length) res.status(200).json({message: 'Empty body!'})
    const SALT_ROUND = 10
    const {password, email} = req.body
    const userRepository = getManager().getRepository(User)

    const user: IUser = await userRepository.findOne({where: {email}})
    if (user) res.status(200).json({message: `User with email ${email} exist!`})

    const hashedPassword = await bcrypt.hash(password, SALT_ROUND)
    const userCreated = userRepository.create({...req.body, password: hashedPassword})
    const userSaved: IUser = await userRepository.save(userCreated)

    res.json(userSaved)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

export const getUser = async (req: Request, res: Response): Promise<Response | void> => {
  const id = req.params.id
  const userRepository = getManager().getRepository(User)
  const user: IUser = await userRepository.findOne(id)

  if (!user) res.status(200).json({message: `User with id ${id} not found`})

  res.status(200).json(user)
}

export const getUsers = async (req: Request, res: Response): Promise<Response | void> => {
  const userRepository = getManager().getRepository(User)
  const users = await userRepository.find()

  res.status(200).json(users)
}
