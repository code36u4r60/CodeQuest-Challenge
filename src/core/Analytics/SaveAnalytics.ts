import { FastifyReply, FastifyRequest } from 'fastify'

export async function SaveAnalytics(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { activityID } = request.body
}
