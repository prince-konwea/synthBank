import { Router } from "express";
import userController from "../controller/user.controller.js";

const userRouter = Router()

userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)
userRouter.post('/transfer', userController.transfer)
userRouter.get('/:userId/transactions', userController.viewTransaction)

export default userRouter;