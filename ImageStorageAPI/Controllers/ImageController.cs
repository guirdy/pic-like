using ImageStorageAPI.Models;
using ImageStorageAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ImageStorageAPI.Controllers
{
    [ApiController]
    [Route("v1")]
    public class ImageController : ControllerBase
    {
        private readonly ImageServices _services;

        public ImageController(ImageServices services)
        {
            _services = services;
        }

        [HttpGet("images")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [Authorize]
        public IActionResult GetAll()
        {
            List<Image> images = _services.GetAllImages();

            return Ok(images);
        }

        [HttpGet("image/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetById(
            [FromRoute()] int id)
        {
            Image? image = _services.GetImageById(id);

            if (image == null)
            {
                return NotFound("Image not found!");
            }

            return Ok(image);
        }
    }
}
