import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

// const createUserController = new CreateUserController();
// const createTagController = new CreateTagController()

router.post("/tags", ensureAdmin, new CreateTagController().handle)

router.post("/users", new CreateUserController().handle)


export { router }