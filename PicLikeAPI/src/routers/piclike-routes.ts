import express from 'express';
import { checkImageId } from 'src/http/middlewares/check-image-id';
import {
  getUser,
  getLikes,
  getLikeById,
  addLike,
  removeLike,
  getLikesByUserId
} from 'src/http/controller/piclike-controller';
import { checkJwt } from 'src/http/middlewares/check-jwt';

const pickLikeRouter = express.Router();

pickLikeRouter.get('/user/profile/:userId', checkJwt, getUser);
pickLikeRouter.get('/like/all', checkJwt, getLikes);
pickLikeRouter.get('/like/:userId/all', checkJwt, getLikesByUserId);
pickLikeRouter.get('/like/:likeId', checkJwt, checkImageId, getLikeById);
pickLikeRouter.put('/like/add/:userId/:likeId', checkJwt, checkImageId, addLike);
pickLikeRouter.put('/like/remove/:userId/:likeId', checkJwt, checkImageId, removeLike);

export {
  pickLikeRouter
};
