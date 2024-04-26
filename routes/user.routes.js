import { Router } from "express";
import userController from "../controller/user.controller.js";
import { registerSchema, loginSchema, transferSchema, viewTransactionSchema } from "../validations/user.validation.js";

const userRouter = Router()

userRouter.post('/register', registerSchema, userController.register)
userRouter.post('/login', loginSchema,  userController.login)
userRouter.post('/transfer', transferSchema, userController.transfer)
userRouter.get('/:userId/transactions',  viewTransactionSchema, userController.viewTransaction)

export default userRouter;