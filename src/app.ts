import fastify from 'fastify'
import fastifyStatic from '@fastify/static'

import path from 'node:path'
import { GetActivityParams } from './core/Activity/controller/GetActivityParams'
import { GetAnalytics } from './core/Analytics/GetAnalytics'
import { CreateActivity } from './core/Activity/controller/CreateActivity'

export const app = fastify()

app.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
})

/**
 * Home page - all information about Rest API
 */
app.get('/', async (request, reply) => {
  return reply.sendFile('home.html')
})

/**
 *  config_url: URL da página do Activity Provider que permite configurar a atividade;
 */
app.get('/configuracao-atividade.html', async (request, reply) => {
  return reply.sendFile('activity_config.html')
})

/**
 *  json_params_url: URL para um Web service que devolve uma lista em formato JSON,
 * identificando os elementos dessa página de configuração onde a
 * Inven!RA pode recolher os valores de configuração nela definidos;
 */
app.get('/json-params-atividade', async () => {
  return GetActivityParams()
})

// ------- Activity -------

/** user_url: URL para um Web service que permite efetuar o
 * deploy da atividade, recebendo como parâmetro uma
 * identificação da instância na Inven!RA;
 */
app.post('/deploy-atividade', async (request, reply) => {
  return CreateActivity(request, reply)
})

app.get('/deploy-atividade/activityID', async () => {
  // TODO: implementar
})

app.get('/deploy-atividade', async (request, reply) => {
  return CreateActivity(request, reply)
})

// ------- Analytics -------

/** analytics_url: URL para um Web service que devolve os valores
 * dos analytics de todos os utilizadores de uma instância da
 * atividade na Inven!RA, fornecida como parâmetro;
 */
app.post('/analytics_url', async () => {
  // TODO: implementar a função SaveAnalytics
})

/**
 * Pa analytics_list_url: URL para um Web service que devolve
 * a lista de analytics que o Activity Provider recolherá;
 */
app.get('/lista-analytics-atividade', async () => {
  return GetAnalytics()
})
