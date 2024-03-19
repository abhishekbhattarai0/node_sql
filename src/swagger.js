// import SwaggerAutogen from 'swagger-autogen'
const SwaggerAutogen = require("swagger-autogen")()

const doc = {
    info: {
        title: 'api documentation',
        description: 'Description'
    },
    tags:[
        {
            name:'student',
            description:''
        }
    ],
    host: 'localhost:3000'
}

const outputFile = './swagger-output.json'
const routes = ['./routes/studentRoutes']

SwaggerAutogen(outputFile, routes, doc)