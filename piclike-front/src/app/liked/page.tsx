import { AlbumArtwork } from '@/components/album-artwork'
import { Separator } from '@/components/ui/separator'
import { listenNowAlbums } from '@/data/albums'
import { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'
import { IImage } from '@/types/image-storage'

export const metadata: Metadata = {
  title: 'Liked | PicLike',
  description: 'Your liked images, remove or add more if you want.',
}

async function getData() {
  const res = await fetch(`${process.env.IMAGE_STORAGE_API}/v1/images`, {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const images = (await res.json()) as IImage[]

  return {
    images,
  }
}

export default async function LikedPage() {
  const { images } = await getData()

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
          {images.map((image) => (
            <AlbumArtwork
              key={image.title}
              image={image}
              className="w-[250px]"
              aspectRatio="portrait"
              width={250}
              height={330}
            />
          ))}
        </div>
      </div>
    </Suspense>
  )
}
