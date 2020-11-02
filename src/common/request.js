import axios from 'axios'

axios.defaults.baseURL = process.env.ENV_

// 请求拦截器
axios.interceptors.request.use(config => {})

// 响应拦截器
axios.interceptors.response.use(config => {})
