using ImageStorageAPI.Models;
using ImageStorageAPI.Repositories.Interfaces;

namespace ImageStorageAPI.Repositories
{
    public class ImageRepository : IImageRepository
    {
        private readonly List<Image> _images = new List<Image>
        {
            new Image { Id = 1, Url = "https://placehold.co/456x684?text=Hello+World+1/jpg", Title = "Image 1" },
            new Image { Id = 2, Url = "https://placehold.co/456x684?text=Hello+World+2/jpg", Title = "Image 2" },
            new Image { Id = 3, Url = "https://placehold.co/456x684?text=Hello+World+3/jpg", Title = "Image 3" },
            new Image { Id = 4, Url = "https://placehold.co/456x684?text=Hello+World+4/jpg", Title = "Image 4" },
            new Image { Id = 5, Url = "https://placehold.co/456x684?text=Hello+World+5/jpg", Title = "Image 5" },
            new Image { Id = 6, Url = "https://placehold.co/456x684?text=Hello+World+6/jpg", Title = "Image 6" },
            new Image { Id = 7, Url = "https://placehold.co/456x684?text=Hello+World+7/jpg", Title = "Image 7" },
            new Image { Id = 8, Url = "https://placehold.co/456x684?text=Hello+World+8/jpg", Title = "Image 8" },
            new Image { Id = 9, Url = "https://placehold.co/456x684?text=Hello+World+9/jpg", Title = "Image 9" },
            new Image { Id = 10, Url = "https://placehold.co/456x684?text=Hello+World+10/jpg", Title = "Image 10" },
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
