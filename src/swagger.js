import SwaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        title: 'api documentation',
        description: 'Description'
    },
    host: 'localhost:3000'
}

const outputFile = './swagger-output.json'
const routes = ['./routes/studentRoutes.ts']

SwaggerAutogen()(outputFile, routes, doc)