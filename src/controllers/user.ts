import {Request, Response} from 'express'

interface User {
  name: string
  lastname: string
}

export const getUsers = async (req: Request, res: Response) => {
  const users: Array<string> = ['Nicolás', 'Carolina']
  const fakeUser: User = {
    name: 'Nicolás',
    lastname: 'Flores'
  }
  res.json({users, fakeUser})
}
