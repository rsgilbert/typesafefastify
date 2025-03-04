import fastify from 'fastify'
import AutoLoad from '@fastify/autoload'
import Swagger from '@fastify/swagger'
import SwaggerUI from '@fastify/swagger-ui'


const server = fastify()

server.register(Swagger)
server.register(SwaggerUI)

server.register(AutoLoad, {
    dir: `${__dirname}/routes`
})

// server.get('/', async () => {
//     return {
//         "hello": "Gilbert"
//     }
// })


server.listen({
    port: 3000
})