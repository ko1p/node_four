const usersRouter = require('express').Router();
const auth = require('../middlewares/auth');

const {
  getAllUsers, getUser, updateUserProfile, updateUserAvatar,
} = require('../controllers/users');

usersRouter.get('/', auth, getAllUsers);
usersRouter.get('/:userId', auth, getUser);
usersRouter.patch('/me', auth, updateUserProfile);
usersRouter.patch('/me/avatar', auth, updateUserAvatar);

module.exports = usersRouter;
