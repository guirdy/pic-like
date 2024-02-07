import { AlbumArtwork } from '@/components/album-artwork'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'
import { IImage } from '@/types/image-storage'
import { AuthResponse } from '@/types/auth'

export const metadata: Metadata = {
  title: 'Liked | PicLike',
  description: 'Your liked images, remove or add more if you want.',
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

  const imagesLikedResponse = await fetch(
    `${process.env.IMAGE_STORAGE_API}/v1/images`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!imagesLikedResponse.ok) {
    throw new Error('Failed to fetch images')
  }

  const imagesLiked = (await imagesLikedResponse.json()) as IImage[]

  return {
    imagesLiked,
  }
}

export default async function LikedPage() {
  const { imagesLiked } = await getData()

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
          {imagesLiked.map((image) => (
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
