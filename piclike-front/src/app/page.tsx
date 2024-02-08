import { Metadata } from 'next'
import { Suspense } from 'react'
import { AlbumArtwork } from '../components/album-artwork'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Loading from './loading'
import { authService } from './services/auth-service'
import { getImagesStorageService } from './services/images-storage'
import { user } from '@/data/user'

import {
  getAllImagesLikedService,
  getUserImagesLikedService,
} from './services/images-liked'

export const metadata: Metadata = {
  title: 'Home | PicLike',
  description: 'Your new images storage, discover and like pictures.',
}

async function getData() {
  const { token } = await authService(user)

  const { images } = await getImagesStorageService(token)
  const { imagesLike } = await getAllImagesLikedService(token)
  const { userImagesLiked } = await getUserImagesLikedService(user.id, token)

  const imagesLikeMap: Record<number, number> = {}
  imagesLike.forEach((like) => {
    imagesLikeMap[like.id] = like.qtt
  })

  const imagesWithLikes = images.map((image) => ({
    ...image,
    qtt: imagesLikeMap[image.id] || 0,
  }))

  return {
    userImagesLiked,
    imagesWithLikes,
  }
}

export default async function HomePage() {
  const { userImagesLiked, imagesWithLikes } = await getData()

  const recentPictures = imagesWithLikes.slice(0, 4)
  const oldPictures = imagesWithLikes.slice(4)

  return (
    <Suspense fallback={<Loading />}>
      <div className="h-full w-full overflow-y-auto px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              It's New Here
            </h2>
            <p className="text-sm text-muted-foreground">
              Top pictures for you added recently.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {recentPictures.map((image) => (
                <AlbumArtwork
                  key={image.id}
                  image={image}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  hasBeenLiked={
                    !!userImagesLiked.find(
                      (userImage) => userImage.id === image.id,
                    )
                  }
                  width={250}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Made for You
          </h2>
          <p className="text-sm text-muted-foreground">
            Discover a new pictures world.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="relative pb-12">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {oldPictures.map((image) => (
                <AlbumArtwork
                  key={image.title}
                  image={image}
                  className="w-[150px]"
                  aspectRatio="square"
                  hasBeenLiked={
                    !!userImagesLiked.find(
                      (userImage) => userImage.id === image.id,
                    )
                  }
                  width={150}
                  height={150}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </Suspense>
  )
}
