const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routers/*.ts']

swaggerAutogen(outputFile, endpointsFiles)
