import {Response} from 'express'

import {User} from '../entity/User'
import {IUser} from '../interfaces/user'

export const createUser = async (req: any, res: Response): Promise<Response | void> => {
  if (!req.body) throw new Error('No body!')
  const user: User = User.create(req.body)

  const userSaved: IUser = await user.save()

  await req.conn.close()
  res.json({...userSaved})
}

export const getUser = async (req: any, res: Response): Promise<Response | void> => {
  const user: IUser = await User.findOne(req.params.id)
  await req.conn.close
  res.json(user)
}

export const getUsers = async (req: any, res: Response): Promise<Response | void> => {
  const users = await User.find()

  await req.conn.close()
  res.json(users)
}
