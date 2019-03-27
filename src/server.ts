import cors from 'cors'
import express, {Application} from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import routes from './routes/user'

require('dotenv').config()

const app: Application = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('short'))

app.use('/api/v1', routes)

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server listening: http://localhost:${process.env.PORT}`)
  console.log('\n')
  console.log('🔥 => Environment: ', process.env.NODE_ENV)
})
