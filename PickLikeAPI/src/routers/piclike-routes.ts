import express from 'express';

import {
  getUser,
  getLikes,
  getLikeById,
  addLike,
  removeLike
} from 'src/controller/piclike-controller';

const pickLikeRouter = express.Router();

pickLikeRouter.get('/user/profile/:id', getUser);
pickLikeRouter.get('/like/all', getLikes);
pickLikeRouter.get('/like/:id', getLikeById);
pickLikeRouter.put('/like/add/:userId/:likeId', addLike);
pickLikeRouter.put('/like/remove/:userId/:likeId', removeLike);

export {
  pickLikeRouter
};
