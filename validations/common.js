import Joi from "joi";

export function validateBodyRequest(req, next, schema) {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = schema.validate(req.body, options);
  if (error?.message) {
    throw new Error(error.message);
  }

  if (error) {
    throw new Error(
      `${error.details.map((x) => x.message).join(", ")}`
    );
  }
  req.body = value;
  next();
}