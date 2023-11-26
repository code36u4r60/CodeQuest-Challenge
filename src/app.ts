import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import { activityRoutes } from './routes/activity'
import path from 'node:path'
import fs from 'node:fs'

export const app = fastify()

app.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
})

app.get('/', async (request, reply) => {
  return reply.sendFile('home.html')
})

app.register(activityRoutes, {
  prefix: 'activity',
})
