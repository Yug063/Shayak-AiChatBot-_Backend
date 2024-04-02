import Joi from "joi";
//------------------------------------------------------------------------------------------------------
export const LoginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.email": "Please provide a valid email address.",
    "string.empty": "Email cannot be empty.",
  }),
  password: Joi.string()
    .min(6)
    .max(30)
    .pattern(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[%^&#@$*".\/\\|><?\-+=])[A-Za-z0-9%^&#@$*".\/\\|><?\-+=]+$/
    )
    .required()
    .messages({
      "string.min": "Password should be at least 6 characters long.",
      "string.max": "Password should be at most 30 characters long.",
      "string.pattern.base":
        'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character from %^&#@$*"./\\|><?-+=',
      "any.required": "Password is required.",
      "string.empty": "Password cannot be empty.",
    }),
}).options({ stripUnknown: true });
//------------------------------------------------------------------------------------------------------
export const SignupValidation = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z\u00C0-\u01FF\s.'-]+$/)
    .required()
    .messages({
      "any.required": "Name is required",
      "string.pattern.base":
        "Name must contain only alphabetic characters, spaces, dots, apostrophes, or hyphens",
    }),
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.email": "Please provide a valid email address.",
    "string.empty": "Email cannot be empty.",
  }),
  password: Joi.string()
    .min(6)
    .max(30)
    .pattern(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[%^&#@$*".\/\\|><?\-+=])[A-Za-z0-9%^&#@$*".\/\\|><?\-+=]+$/
    )
    .required()
    .messages({
      "string.min": "Password should be at least 6 characters long.",
      "string.max": "Password should be at most 30 characters long.",
      "string.pattern.base":
        'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character from %^&#@$*"./\\|><?-+=',
      "any.required": "Password is required.",
      "string.empty": "Password cannot be empty.",
    }),
}).options({ stripUnknown: true });
//---------------------------------------------------------------------------------------------------------
export const chatCompletionValidator = Joi.object({
  message: Joi.string().required().messages({
    "any.required": "Message is required",
    "string.empty": "Message cannot be empty",
  }),
});
//---------------------------------------------------------------------------------------------------------------
export const chatValidation = Joi.object({
  message: Joi.string().required().messages({
    "any.required": "Message is required",
  }),
});
