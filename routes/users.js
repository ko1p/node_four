const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');
const urlValidation = require('../local_modules/urlValidation');

const {
  getAllUsers, getUser, updateUserProfile, updateUserAvatar,
} = require('../controllers/users');

usersRouter.get('/', auth, getAllUsers);
usersRouter.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().alphanum().length(24),
  }),
}), auth, getUser);
usersRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), auth, updateUserProfile);
usersRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom(urlValidation, 'custom URL validation'),
  }),
}), auth, updateUserAvatar);

module.exports = usersRouter;
