import { NextFunction, Request, Response } from "express";
import fetch from 'node-fetch'
import https from 'https'
import { env } from "src/env";

interface Image {
  id: number;
  url: string;
}

export async function checkImageId(req: Request, res: Response, next: NextFunction) {
  const imageId = req.params.likeId;

  await fetch(`${env.STORAGE_API}/v1/image/${imageId}`, {
    method: 'GET',
    agent: new https.Agent({
      rejectUnauthorized: false,
    })
  })
    .then(res => {
      return res.json()
    }).catch(e => {
      console.log(e)
      res.status(404).send('Image id does not exist.')
    })

  next()
}
