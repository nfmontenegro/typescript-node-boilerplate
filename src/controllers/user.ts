import {Request, Response} from 'express'
import {User} from '../interfaces/user'

export const getUsers = async (req: Request, res: Response): Promise<Response | void> => {
  const users: Array<string> = ['Nicolás', 'Carolina']
  const fakeUser: User = {
    name: 'Nicolás',
    lastname: 'Flores'
  }

  res.json({users, fakeUser})
}
