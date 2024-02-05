using ImageStorageAPI.Models;
using ImageStorageAPI.Repositories;
using ImageStorageAPI.Repositories.Interfaces;

namespace ImageStorageAPI.Services
{
    public class ImageServices
    {
        private readonly IImageRepository _repository;

        public ImageServices(IImageRepository repository)
        {
            _repository = repository;
        }

        public List<Image> GetAllImages()
        {
            return _repository.GetImages();
        }

        public Image? GetImageById(int id)
        {
            return _repository.GetImageById(id);
        }
    }
}
