import { FastifyReply, FastifyRequest } from 'fastify'
import { ActivityDB } from '../data/ActivityDB'
import { randomUUID } from 'node:crypto'

type FetchActivity = {
  activityID: string
}

export async function FetchActivity(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { activityID } = request.params as FetchActivity

  const activityDB = ActivityDB.getInstance()

  if (!activityID)
    reply.status(400).send({ message: `It's required an activity id.` })

  const activity = activityDB.get(activityID)
  if (!activity) reply.status(400).send({ message: `Activity not available` })

  const response = {
    activityID: `${activityID}`,
    'Invira!RAStID': `${randomUUID()}`,
    json_params: {
      activity_name: 'name test',
      topic: 'topic test',
      description: 'description test',
      test_params: ['test_1', 'test_2', 'test_3'],
      expected_results: ['test_1', 'test_2', 'test_3'],
    },
  }

  reply.status(200).send(response)
}
