import { AlbumArtworkSkeleton } from '@/components/skeleton/card-skeleton'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function Loading() {
  return (
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
            <AlbumArtworkSkeleton variant="large" />
            <AlbumArtworkSkeleton variant="large" />
            <AlbumArtworkSkeleton variant="large" />
            <AlbumArtworkSkeleton variant="large" />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
        <p className="text-sm text-muted-foreground">
          Discover a new pictures world.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative pb-12">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            <AlbumArtworkSkeleton variant="small" />
            <AlbumArtworkSkeleton variant="small" />
            <AlbumArtworkSkeleton variant="small" />
            <AlbumArtworkSkeleton variant="small" />
            <AlbumArtworkSkeleton variant="small" />
            <AlbumArtworkSkeleton variant="small" />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  )
}
