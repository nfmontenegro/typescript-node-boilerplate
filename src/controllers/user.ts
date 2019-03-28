import {Response} from 'express'
// import {User} from '../interfaces/user'
import {User} from '../entity/User'

export const getUsers = async (req: any, res: Response): Promise<Response | void> => {
  try {
    const users: Array<string> = ['Nicolás', 'Carolina']
    // let user: User = new User()
    // user.firstName = 'Nicolás'
    // user.lastName = 'Flores'
    // user.email = 'nicolas.fmontenegro@gmail.com'
    // user.password = '123'

    const user = User.create({
      firstName: 'Nicolás',
      lastName: 'Flores',
      email: 'carito@gmail.com',
      password: 'manchi'
    })

    const userSaved = await user.save()

    // const userSaved = await req.ormConnection.manager.save(user)
    console.log('User:', userSaved)
    await req.ormConnection.close()
    res.json({userSaved})
  } catch (err) {
    console.log('Err:', err)
  }
}
