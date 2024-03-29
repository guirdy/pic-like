# PickLike API

The PickLike API developed in Node.js allows users to add likes to images available on the [Image Storage API](https://github.com/guirdy/pic-like/tree/master/ImageStorageAPI), establishing a direct connection to validate the IDs of liked images.

To run this API, you need to first run the [Image Storage API](https://github.com/guirdy/pic-like/tree/master/ImageStorageAPI). After that, follow the steps below:

Install dependencies
```bash
npm i
```

Create a `.env` file on the project root with the variable below:
* JWT_SECRET="VhOEZGvDEOWnaAjK8pi4+70fBQ7/QdL19YqCnx85WzA="

Run the project
```bash
npm run dev
```

Access the [Swagger Docs](http://localhost:3333/doc) for an overview of the endpoints.

To run tests

```bash
npm run test
```

or

```bash
npm run test:watch
```

Next steps with the [Front-End](https://github.com/guirdy/pic-like/tree/master/piclike-front).

<h4 align=center>Developed by <a href="https://www.linkedin.com/in/guirdy/">Guilherme Leandro</a> 💻</h4>
