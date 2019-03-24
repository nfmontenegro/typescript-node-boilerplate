
import express, {Application} from 'express'

const app: Application = express();

app.listen(3000, () => {
  console.info('Server running in port 3000')
})