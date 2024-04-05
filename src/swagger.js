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
        },
        {
            name:'UserProfile',
            description:''
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
            },
            UserProfileSchema: {
                $firstName: "firstName",
                $lastName: "lastName",
                age: 22,
                $password: 'password'
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
            },
            UserProfileExample: {
                value: {
                firstName: "Ashish",
                lastName: "Pantha",
                age: 29,
                $password:"password"
                }
            },
            
        }
    },
    host: 'localhost:3000',
    
}

const outputFile = './swagger-output.json'
const routes = ['./routes/studentRoutes','./routes/teacherRoutes','./routes/UserProfileRoutes']

SwaggerAutogen(outputFile, routes, doc)