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

const pickLikeRouter = express.Router();

pickLikeRouter.get('/user/profile/:userId', getUser);
pickLikeRouter.get('/like/all', getLikes);
pickLikeRouter.get('/like/:userId/all', getLikesByUserId);
pickLikeRouter.get('/like/:likeId', checkImageId, getLikeById);
pickLikeRouter.put('/like/add/:userId/:likeId', checkImageId, addLike);
pickLikeRouter.put('/like/remove/:userId/:likeId', checkImageId, removeLike);

export {
  pickLikeRouter
};
