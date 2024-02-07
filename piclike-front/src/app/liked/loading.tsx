import { AlbumArtworkSkeleton } from '@/components/skeleton/card-skeleton'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function Loading() {
  return (
    <div className="h-full w-full overflow-y-auto px-4 py-6 lg:px-8">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">You Like It</h2>
          <p className="text-sm text-muted-foreground">
            All the pictures you liked in one place.
          </p>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex w-full flex-wrap gap-10 pb-12">
        <AlbumArtworkSkeleton variant="large" />
        <AlbumArtworkSkeleton variant="large" />
        <AlbumArtworkSkeleton variant="large" />
        <AlbumArtworkSkeleton variant="large" />
        <AlbumArtworkSkeleton variant="large" />
        <AlbumArtworkSkeleton variant="large" />
      </div>
    </div>
  )
}
