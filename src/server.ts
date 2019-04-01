import 'reflect-metadata'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import {createConnection} from 'typeorm'
import express, {Application, Response, Request} from 'express'

import routes from './routes/user'

require('dotenv').config()

createConnection()
  .then(() => {
    const app: Application = express()

    app.use(cors())
    app.use(morgan('short'))
    app.use(bodyParser.json())

    app.get('/', (req: Request, res: Response) => {
      res.send('Typescript Boilerplate')
    })

    app.use('/api/v1', routes)

    app.listen(process.env.PORT, (err: Error) => {
      if (err) throw new Error(`Server error ${err}`)
      console.log(`🚀 Server listening: http://localhost:${process.env.PORT}`)
      console.log('\n')
      console.log('=> Environment: ', process.env.ENVIRONMENT)
    })
  })
  .catch(error => console.log('TypeORM connection error:', error))
