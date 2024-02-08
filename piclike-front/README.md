# PicLike FrontEnd

Interact with images on PicLike by liking and expanding the view. The application integrates with the [Image Storage API](https://github.com/guirdy/pic-like/tree/master/ImageStorageAPI) in `.NET 8` to fetch available images and the [PicLike API](https://github.com/guirdy/pic-like/tree/master/PicLikeAPI) in `Node.js` to perform likes.

To run the front-end, you need to have followed the steps for setting up both the [Image Storage API](https://github.com/guirdy/pic-like/tree/master/ImageStorageAPI) and [PicLike API](https://github.com/guirdy/pic-like/tree/master/PicLikeAPI). After running both backends, follow the steps below:

Install dependencies
```bash
npm i
```

Add a `.env` file on the root with the variables below:
* PICLIKE_API="http://localhost:3333"
* IMAGE_STORAGE_API="http://localhost:7032"
* NEXTAUTH_URL="http://localhost:3000"
* NEXTAUTH_SECRET="VhOEZGvDEOWnaAjK8pi4+70fBQ7/QdL19YqCnx85WzA="

Run the project
```bash
npm run dev
```

Access the application on [localhost:3000](http://localhost:3000).

<h4 align=center>Developed by <a href="https://www.linkedin.com/in/guirdy/">Guilherme Leandro</a> 💻</h4>
