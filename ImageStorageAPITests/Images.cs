namespace ImageStorageAPITests
{
    [TestClass]
    public class Images
    {
        ImageRepository inMemoryRepository = new ImageRepository();

        [TestMethod]
        public void ReturnImagesArrayCount_FromTheRepository()
        {
            var images = inMemoryRepository.GetImages();

            Assert.AreEqual(10, images.Count);
        }

        [TestMethod]
        public void ReturnImageById_FromTheRepository()
        {
            var image = inMemoryRepository.GetImageById(8);

            Assert.IsNotNull(image);
            Assert.AreEqual(8, image.Id);
        }

        [TestMethod]
        public void ReturnNullForImageNotFounde_FromTheRepository()
        {
            var image = inMemoryRepository.GetImageById(11);

            Assert.IsNull(image);
        }
    }
}