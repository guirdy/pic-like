import { Metadata } from 'next'
import { AlbumArtwork } from '../components/album-artwork'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Suspense } from 'react'
import Loading from './loading'
import { IImage } from '@/types/image-storage'
import { AuthResponse } from '@/types/auth'

export const metadata: Metadata = {
  title: 'Home | PicLike',
  description: 'Your new images storage, discover and like pictures.',
}

async function getData() {
  const user = {
    id: 1,
    email: 'gui@gui.com',
    password: '123456',
  }

  const authResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/auth`, {
    method: 'POST',
    body: JSON.stringify(user),
  })

  if (!authResponse.ok) {
    throw new Error('Failed to authenticate')
  }

  const { token } = (await authResponse.json()) as AuthResponse

  const imagesResponse = await fetch(
    `${process.env.IMAGE_STORAGE_API}/v1/images`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!imagesResponse.ok) {
    throw new Error('Failed to fetch images')
  }

  const images = (await imagesResponse.json()) as IImage[]

  return {
    images,
  }
}

export default async function HomePage() {
  const { images } = await getData()

  const recentPictures = images.slice(0, 4)
  const oldPictures = images.slice(4)

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
