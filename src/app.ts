import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import { activityRoutes } from './routes/activity'
import path from 'node:path'
import fs from 'node:fs'

export const app = fastify()

const htmlContent = fs.readFileSync(
  path.resolve(__dirname, 'public/home.html'),
  'utf8',
)

app.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
})

app.get('/', async (request, reply) => {
  return reply.type('text/html').send(htmlContent)
})

app.register(activityRoutes, {
  prefix: 'activity',
})
