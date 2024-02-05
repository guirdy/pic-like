using ImageStorageAPI.Models;
using ImageStorageAPI.Repositories.Interfaces;

namespace ImageStorageAPI.Repositories
{
    public class ImageRepository : IImageRepository
    {
        private readonly List<Image> _images = new List<Image>
        {
            new Image { Id = 1, Url = "https://placehold.co/600x400?text=Hello+World+1" },
            new Image { Id = 2, Url = "https://placehold.co/600x400?text=Hello+World+2" },
            new Image { Id = 3, Url = "https://placehold.co/600x400?text=Hello+World+3" },
            new Image { Id = 4, Url = "https://placehold.co/600x400?text=Hello+World+4" },
            new Image { Id = 5, Url = "https://placehold.co/600x400?text=Hello+World+5" },
            new Image { Id = 6, Url = "https://placehold.co/600x400?text=Hello+World+6" },
            new Image { Id = 7, Url = "https://placehold.co/600x400?text=Hello+World+7" },
            new Image { Id = 8, Url = "https://placehold.co/600x400?text=Hello+World+8" },
            new Image { Id = 9, Url = "https://placehold.co/600x400?text=Hello+World+9" },
            new Image { Id = 10, Url = "https://placehold.co/600x400?text=Hello+World+10" },
        };

        public List<Image> GetImages()
        {
            return _images;
        }

        public Image? GetImageById(int id)
        {
            return _images.Find(x => x.Id == id);
        }
    }
}
