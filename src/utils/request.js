/*
 * @Author: your name
 * @Date: 2020-03-27 14:12:43
 * @LastEditTime: 2020-04-03 14:39:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookmanage\src\utils\request.js
 */

import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://rap2.taobao.org:38080/app/mock/248828'
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = ''
}

export const server = axios.create({
  baseURL: axios.defaults.baseURL,
  timeout: 10000
})

server.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

server.interceptors.request.use(

  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

server.interceptors.response.use(
  res => {
    // console.log(res)
    if (res.status === '654') {
      console.log(res.status)
    }
    return res
  }

)

export const serverAll = function (functions, callback) {
  return axios.all(functions).then(axios.spread(callback))
}
