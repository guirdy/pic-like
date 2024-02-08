import { NextFunction, Request, Response } from "express";
import { env } from "src/env";

export async function checkImageId(req: Request, res: Response, next: NextFunction) {
  const imageId = req.params.likeId;
  console.log(imageId)

  await fetch(`${env.STORAGE_API}/v1/image/${imageId}`, {
    method: 'GET',
  })
    .then(res => {
      return res.json()
    }).catch(e => {
      console.error(e)
      res.status(404).json({
        error: 'Image id does not exist.'
      })
    })

  next()
}
