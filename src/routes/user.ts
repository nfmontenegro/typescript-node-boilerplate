import {Router} from 'express'
import {getUsers, createUser, getUser} from '../controllers/user'

const router: Router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.post('/users', createUser)

export default router
