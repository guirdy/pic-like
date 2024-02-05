using ImageStorageAPI.Models;

namespace ImageStorageAPI.Repositories.Interfaces
{
    public interface IImageRepository
    {
        public List<Image> GetImages();
        public Image? GetImageById(int id);
    }
}
