import axios from 'axios'

axios.defaults.baseURL='/api/v1'

if (process.env.NODE_ENV !== 'development') {
    axios.defaults.baseURL='http://39.105.148.183:3030/api/v1'
  }
export default axios