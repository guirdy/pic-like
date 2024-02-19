'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { CompleteImageType } from '@/types/image-storage'
import { AiFillLike } from 'react-icons/ai'
import { Button } from './ui/button'
import { user } from '@/data/user'
import { authService } from '@/app/services/auth-service'
import { useState } from 'react'
import { like, unlike } from '@/app/actions'

import {
  addLikeToAnImageService,
  removeLikeToAnImageService,
} from '@/app/services/images-liked'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  image: CompleteImageType
  aspectRatio?: 'portrait' | 'square'
  hasBeenLiked: boolean
  width: number
  height: number
}

export function AlbumArtwork({
  image,
  aspectRatio = 'portrait',
  width,
  height,
  hasBeenLiked,
  className,
  ...props
}: AlbumArtworkProps) {
  const [isFetching, setIsFetching] = useState<boolean>(false)

  async function handleClickOnLike() {
    setIsFetching(() => true)

    await like(image.id)

    setIsFetching(() => false)
  }

  async function handleClickOnUnlike() {
    setIsFetching(() => true)

    await unlike(image.id)

    setIsFetching(() => false)
  }

  return (
    <Dialog>
      <div className={cn('space-y-3', className)} {...props}>
        <DialogTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt={image.title}
              width={width}
              height={height}
              quality={100}
              className={cn(
                'h-auto w-auto object-cover transition-all hover:scale-105',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
              )}
            />
          </div>
        </DialogTrigger>
        <div className="flex justify-between gap-2 text-sm">
          <div className="space-y-1">
            <h3 className="font-medium leading-none">{image.title}</h3>
            <p className="text-xs text-muted-foreground">Likes: {image.qtt}</p>
          </div>
          {hasBeenLiked ? (
            <Button
              className="max-w-8 border rounded-md p-2"
              variant="default"
              onClick={handleClickOnUnlike}
              disabled={isFetching}
            >
              <AiFillLike />
            </Button>
          ) : (
            <Button
              className="max-w-8 border rounded-md p-2"
              variant="ghost"
              onClick={handleClickOnLike}
              disabled={isFetching}
            >
              <AiFillLike />
            </Button>
          )}
        </div>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center mb-6">
            <p>{image.title}</p>
          </DialogTitle>
          <DialogDescription>
            <div className="flex items-center justify-center">
              <Image
                src={image.url}
                alt={image.title}
                width={500}
                height={660}
                quality={50}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
