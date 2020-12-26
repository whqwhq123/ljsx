import { LOADDATA } from './actionTypes'

import { get } from '@u/http.js'

const loadDataSync = list => {
  return {
    type: LOADDATA,
    list
  }
}

const loadDataAsync = () => {
  return async (dispatch) => {
    let result = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/goods/findAll?offset=1&count=16')
    // console.log(result.goods)
    dispatch(loadDataSync(result.goods))

  }
}

export {
  loadDataSync,
  loadDataAsync
}