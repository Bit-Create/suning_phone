import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://10.159.173.231:8080',
    timeout: 10000
  })

  return instance(config)
}
