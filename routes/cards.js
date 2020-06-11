const cardsRouter = require('express').Router();
const auth = require('../middlewares/auth');

const {
  getAllCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

cardsRouter.get('/', auth, getAllCards);
cardsRouter.post('/', auth, createCard);
cardsRouter.delete('/:cardId', auth, deleteCard);
cardsRouter.put('/:cardId/likes', auth, likeCard);
cardsRouter.delete('/:cardId/likes', auth, dislikeCard);

module.exports = cardsRouter;
