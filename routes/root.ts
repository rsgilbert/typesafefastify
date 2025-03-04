import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'


const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
    fastify.get('/', {
        schema: {
            querystring: Type.Object({
                name: Type.String({ default: 'world' })
            }),
            response: {
                200: Type.Object({
                    hello: Type.String()
                })
            }
        }
    }, async (req) => {
        const { name } = req.query
        return {
            'hello': name
        }
    })
}

export default plugin 