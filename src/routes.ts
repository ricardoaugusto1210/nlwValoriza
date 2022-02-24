import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController()

router.post("/users", new CreateUserController().handle)
router.post("/tags", new CreateTagController().handle)

export { router }