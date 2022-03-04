import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

// const createUserController = new CreateUserController();
// const createTagController = new CreateTagController()

router.post('/tags', ensureAuthenticated, ensureAdmin, new CreateTagController().handle)
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthenticateUserController().handle)
router.post('/compliments', new CreateComplimentController().handle)

export { router }
