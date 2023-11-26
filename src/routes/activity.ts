import { FastifyInstance } from 'fastify'

export async function activityRoutes(app: FastifyInstance) {
  app.get(
    '/',

    async () => {
      const sendTestParams = [
        { name: 'title', type: 'text/plain' },
        { name: 'summary', type: 'text/plain' },
        { name: 'documentation', type: 'array' },
        { name: 'correctAnswer', type: 'array' },
        { name: 'tipInfo', type: 'text/plain' },
        { name: 'imgUrl', type: 'text/plain' },
      ]

      return { sendTestParams }
    },
  )
}
