import fastify from 'fastify'

const server = fastify()


server.get('/', async () => {
    return {
        "hello": "Gilbert"
    }
})


server.listen({
    port: 3000
})