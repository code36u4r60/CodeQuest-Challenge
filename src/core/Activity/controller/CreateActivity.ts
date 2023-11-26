import { FastifyReply, FastifyRequest } from 'fastify'
import { ActivityDB } from '../data/ActivityDB'

type CreateActivityProps = {
  activityID: string
}

export async function CreateActivity(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { activityID } = request.body as CreateActivityProps

  const activityDB = ActivityDB.getInstance()

  if (!activityID)
    reply.status(400).send({ message: `It's required an activity id.` })

  if (activityDB.get(activityID))
    reply.status(400).send({ message: `Activity already exists.` })

  activityDB.create({ id: activityID, name: `activity: ${activityID}` })

  console.log(activityDB.getAll())

  reply.status(200).send({
    deployURL: `https://${request.headers.host}/activity/${activityID}`,
  })
}
