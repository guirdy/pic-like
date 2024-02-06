import { Request, Response } from "express";
import { makeGetLikeServices } from "src/services/factories/makeGetPickLikeServices";

const pickLikeServices = makeGetLikeServices();

export async function getUser(req: Request, res: Response) {
  const userId = req.params.userId;

  const { user } = await pickLikeServices.getUser({ userId: Number(userId) });

  return res.status(200).send({
    user
  })
}


export async function getLikes(req: Request, res: Response) {
  const likes = await pickLikeServices.getLikes();

  return res.status(200).send({
    likes
  })
}

export async function getLikeById(req: Request, res: Response) {
  const likeId = req.params.likeId;

  const like = await pickLikeServices.getLikeById(parseInt(likeId));

  return res.status(200).send(like)
}

export async function addLike(req: Request, res: Response) {
  const userId = req.params.userId;
  const likeId = req.params.likeId;

  const like = await pickLikeServices.addLike({
    userId: parseInt(userId),
    likedImageId: parseInt(likeId)
  });

  if (!like) {
    return res.status(400);
  }

  return res.status(200).send(like)
}

export async function removeLike(req: Request, res: Response) {
  const userId = req.params.userId;
  const likeId = req.params.likeId;

  const like = await pickLikeServices.removeLike({
    userId: parseInt(userId),
    likedImageId: parseInt(likeId)
  });

  if (!like) {
    return res.status(400);
  }

  return res.status(200).send(like)
}
