import Image from 'next/image'
import { cn } from '@/lib/utils'
import { IImage } from '@/types/image-storage'
import { AiFillLike } from 'react-icons/ai'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  image: IImage
  aspectRatio?: 'portrait' | 'square'
  width: number
  height: number
}

export function AlbumArtwork({
  image,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn('space-y-3', className)} {...props}>
      <Dialog>
        <DialogTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt={image.title}
              width={width}
              height={height}
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
            <p className="text-xs text-muted-foreground">Likes: 789</p>
          </div>
          <button className="max-w-8 border rounded-md p-2">
            <AiFillLike />
          </button>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center mb-6">
              {image.title}
            </DialogTitle>
            <DialogDescription>
              <div className="flex items-center justify-center">
                <Image
                  src={image.url}
                  alt={image.title}
                  width={500}
                  height={660}
                />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
