import { app } from './app'
import { env } from './env'

const port = env.PORT || 3333
app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server is running on Port ${port}`)
  })
