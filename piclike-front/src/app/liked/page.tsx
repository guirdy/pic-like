import { AlbumArtwork } from '@/components/album-artwork'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'
import { authService } from '../services/auth-service'
import { getImagesStorageService } from '../services/images-storage'
import { getUserImagesLikedService } from '../services/images-liked'
import { CompleteImageType } from '@/types/image-storage'
import { user } from '@/data/user'

export const metadata: Metadata = {
  title: 'Liked | PicLike',
  description: 'Your liked images, remove or add more if you want.',
}

async function getData() {
  const { token } = await authService(user)

  const { images } = await getImagesStorageService(token)

  const { userImagesLiked } = await getUserImagesLikedService(user.id, token)

  const imagesWithLikes = userImagesLiked.map((likedImage) => {
    const originalImage = images.find((image) => image.id === likedImage.id)
    const title = originalImage?.title || 'No title'
    const url =
      originalImage?.url || 'https://placehold.co/456x684?text=Hello+World'

    return {
      ...likedImage,
      title,
      url,
    }
  })

  return {
    imagesWithLikes,
  }
}

export default async function LikedPage() {
  const { imagesWithLikes } = await getData()

  return (
    <Suspense fallback={<Loading />}>
      <div className="h-full w-full overflow-y-auto px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              You Like It
            </h2>
            <p className="text-sm text-muted-foreground">
              All the pictures you liked in one place.
            </p>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex w-full flex-wrap gap-4 pb-12">
          {imagesWithLikes.length ? (
            <>
              {imagesWithLikes.map((image: CompleteImageType) => (
                <AlbumArtwork
                  key={image.title}
                  image={image}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  hasBeenLiked
                  width={250}
                  height={330}
                />
              ))}
            </>
          ) : (
            <span>You don&#39;t have liked images yet :&#40;</span>
          )}
        </div>
      </div>
    </Suspense>
  )
}
