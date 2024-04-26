import Joi from "joi";
import { validateBodyRequest } from "./common.js";

export const loginSchema = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().trim().email().required().label("Email"),
    password: Joi.string().trim().required().label("Password"),
  });
  validateBodyRequest(req, next, schema);
};
export const transferSchema = (req, res, next) => {
    const schema = Joi.object({
      fromUserId: Joi.string().trim().required().label("From User ID"),
      toUserId: Joi.string().trim().required().label("To User ID"),
      amount: Joi.number().positive().required().label("Amount"),
    });
    validateBodyRequest(req, next, schema);
  };

  export const registerSchema = (req, res, next) => {
    const schema = Joi.object({
        userName: Joi.string().trim().required().label("User name"),
        email: Joi.string().trim().email().lowercase().required().label("Email"),
        password: Joi.string().trim().required().label("Password"),
   
    });
    validateBodyRequest(req, next, schema);
  };
  export const viewTransactionSchema = (req, res, next) => {
    const schema = Joi.object({
      userId: Joi.string().trim().required().label("User ID"),
    });
    validateBodyRequest(req, next, schema);
  };