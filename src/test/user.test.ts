import axios from 'axios'

import {IResponseEndpoint} from '../interfaces/http'

require('dotenv').config()

describe('# User endpoint', () => {
  beforeAll(() => {
    axios.defaults.baseURL = process.env.ENDPOINT
  })

  test('GET users', async () => {
    const response: any = await axios('/users', {
      method: 'GET',
      responseType: 'json'
    })

    const {status, statusText, data}: IResponseEndpoint = response

    expect(status).toBe(200)
    expect(statusText).toBe('OK')
  })
})
