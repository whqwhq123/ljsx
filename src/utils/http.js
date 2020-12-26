import axios from 'axios'
import QS from 'qs'
import querystring from 'querystring'
// axios.defaults.timeout = 5000

//http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     config.headers = {
//       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//       'token': localStorage.getItem('token') // 获取token缓存
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// );
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        // console.log(1);
        reject(err)
      })
  })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
const postSop = (url, data) => {

  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(data))
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
const postJson = (url, data) => {

  return new Promise((resolve, reject) => {
    console.log(data);
    axios({
      url,
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      data: data

    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

const getShop = ({ url }) => {
  return new Promise((resolve, reject) => {
    axios(
      url
    ).then(
      result => resolve(result)
    ).then(
      err => reject(err)
    )
  })
}
export {

  get,
  post,
  getShop,
  postSop,
  postJson

}