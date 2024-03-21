// import SwaggerAutogen from 'swagger-autogen'
const SwaggerAutogen = require("swagger-autogen")({
    openapi: "3.0.0"
})

const doc = {
    info: {
        title: 'api documentation',
        description: 'Description'
    },
    tags:[
        {
            name:'student',
            description:''
        },
        {
            name:'teacher',
            description: ''
        }
        
    ],
    components: {
        schemas: {
            studentSchema: {
                $firstName: "Abhi",
                $lastName: "Bhattarai",
                age: 21,
                
            },
            teacherSchema: {
                $firstName: "Ashish",
                $lastName: "Pantha",
                age: 29
            }
        },
        examples: {
            studentExample: {
                value: {
                firstName: "Abhi",
                lastName: "Bhattarai",
                age: 21
                },
                summary: "Examples of students"
            },
            teacherExample: {
                value: {
                firstName: "Ashish",
                lastName: "Pantha",
                age: 29
                },
                summary: "Examples of Teachers"
            }
        }
    },
    host: 'localhost:3000',
    
}

const outputFile = './swagger-output.json'
const routes = ['./routes/studentRoutes','./routes/teacherRoutes']

SwaggerAutogen(outputFile, routes, doc)