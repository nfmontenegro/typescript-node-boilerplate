import axios from 'axios'

import {IResponseEndpoint} from '../interfaces/http'

require('dotenv').config()

describe('# User endpoint', () => {
  beforeAll(() => {
    axios.defaults.baseURL = process.env.ENDPOINT
  })

  let randomItem: any
  test('GET users', async () => {
    const response: any = await axios('/users', {
      method: 'GET',
      responseType: 'json'
    })

    const {status, statusText, data}: IResponseEndpoint = response
    randomItem = data[Math.floor(Math.random() * data.length)]

    expect(status).toBe(200)
    expect(statusText).toBe('OK')
    expect(data).toBeTruthy()
    expect(randomItem).toHaveProperty('firstName')
  })

  test('Get user', async () => {
    const response: any = await axios(`/users/${randomItem.id}`)
    const {status, statusText, data}: IResponseEndpoint = response

    expect(status).toBe(200)
    expect(statusText).toBe('OK')
    expect(data).toBeTruthy()
    expect(data).toHaveProperty('firstName')
    expect(data).toHaveProperty('lastName')
    expect(data).toHaveProperty('email')
    expect(data).toHaveProperty('password')
  })
})
