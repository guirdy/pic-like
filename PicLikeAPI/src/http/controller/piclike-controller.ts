import { Request, Response } from "express";
import { makeGetLikeServices } from "src/services/factories/makeGetPickLikeServices";

const pickLikeServices = makeGetLikeServices();

export async function getUser(req: Request, res: Response) {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({
      error: 'Invalid user id.'
    })
  }

  const user = await pickLikeServices.getUser({ userId: Number(userId) });

  if (!user) {
    return res.status(404).json({
      error: 'User not found.'
    })
  }

  return res.status(200).json(user)
}


export async function getLikes(req: Request, res: Response) {
  const likes = await pickLikeServices.getLikes();

  return res.status(200).json(likes)
}

export async function getLikeById(req: Request, res: Response) {
  const likeId = req.params.likeId;

  if (!likeId) {
    return res.status(400).json({
      error: 'Invalid image id.'
    })
  }

  const like = await pickLikeServices.getLikeById(parseInt(likeId));

  if (!like) {
    return res.status(404).json({
      error: 'Image not found.'
    })
  }

  return res.status(200).json(like)
}

export async function getLikesByUserId(req: Request, res: Response) {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({
      error: 'Invalid user id.'
    })
  }

  const likes = await pickLikeServices.getLikesByUserId(parseInt(userId));

  if (!likes) {
    return res.status(404).json({
      error: 'User not found.'
    })
  }

  return res.status(200).json(likes)
}

export async function addLike(req: Request, res: Response) {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({
      error: 'Invalid user id.'
    })
  }

  const likeId = req.params.likeId;

  if (!likeId) {
    return res.status(400).json({
      error: 'Invalid image id.'
    })
  }

  const like = await pickLikeServices.addLike({
    userId: parseInt(userId),
    likedImageId: parseInt(likeId)
  });

  if (!like) {
    return res.status(404).json({
      error: 'User not found.'
    })
  }

  return res.status(200).json(like)
}

export async function removeLike(req: Request, res: Response) {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({
      error: 'Invalid user id.'
    })
  }

  const likeId = req.params.likeId;

  if (!likeId) {
    return res.status(400).json({
      error: 'Invalid image id.'
    })
  }
  const like = await pickLikeServices.removeLike({
    userId: parseInt(userId),
    likedImageId: parseInt(likeId)
  });

  if (!like) {
    return res.status(404).json({
      error: 'User not found.'
    })
  }

  return res.status(200).json(like)
}
