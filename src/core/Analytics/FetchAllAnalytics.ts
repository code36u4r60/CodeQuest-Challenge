import { FastifyReply, FastifyRequest } from 'fastify'
import { type } from 'node:os'
import { ActivityDB } from '../Activity/data/ActivityDB'
import { randomUUID } from 'node:crypto'

type FetchAllAnalyticsProps = {
  activityID: string
}

export async function FetchAllAnalytics(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { activityID } = request.body as FetchAllAnalyticsProps

  const activityDB = ActivityDB.getInstance()

  if (!activityID)
    reply.status(400).send({ message: `It's required an activity id.` })

  const activity = activityDB.get(activityID)
  if (!activity) reply.status(400).send({ message: `Activity not available` })

  const analytics = {
    activityID: `${activityID}`,
    'Invira!RAStID': `${randomUUID()}`,
    qualAnalytics: [
      {
        code: `the best code example`,
      },
    ],
    quantAnalytics: [
      { name: 'attempts', type: 'integer', value: 2 },
      { name: 'problem_accessed', type: 'boolean', value: true },
      { name: 'time_spent', type: 'integer', value: 10 },
      { name: 'problem_solved', type: 'boolean', value: true },
    ],
  }

  reply.status(200).send(analytics)
}
