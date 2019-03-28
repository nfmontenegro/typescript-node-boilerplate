import 'reflect-metadata'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import {createConnection, createConnections} from 'typeorm'
import express, {Application, Response, Request, NextFunction} from 'express'

import routes from './routes/user'

require('dotenv').config()

const app: Application = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('short'))

app.use(async (req: any, res: Response, next: NextFunction) => {
  const connection = await createConnection()
  req.ormConnection = connection
  next()
})

app.get('/', (req: Request, res: Response) => {
  res.send('Typescript Boilerplate1')
})

app.use('/api/v1', routes)

app.listen(process.env.PORT, (err: Error) => {
  if (err) throw new Error(`Server error ${err}`)
  console.log(`🚀 Server listening: http://localhost:${process.env.PORT}`)
  console.log('\n')
  console.log('🔥 => Environment: ', process.env.ENVIRONMENT)
})
