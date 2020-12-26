
import { SET_DATA, INCREMENT, DECREMENT, PUT_DATA, DELETE_DATA } from './actionTypes'
import { getShop, get } from '../../utils/http'


const setDataAction = (goodlist) => {
  return {
    type: SET_DATA,
    goodlist
  }
}


const loadDataAction = () => {
  // return (dispatch) =>{
  //     fetch('/goodscar.json')
  //     .then(response => response.json())
  //     .then(result =>{
  //         // console.log(result)
  //         dispatch(setDataAction(result.result))
  //     })
  // }
  // return async (dispatch) =>{
  //     let result = await getShop({
  //         url:'/api/goodscar'
  //     })
  //     // console.log(result)
  //     dispatch(setDataAction(result.data.result))
  // }
  // console.log(localStorage.getItem("userState")==null)

  return async (dispatch) => {
    const { uid } = JSON.parse(localStorage.getItem('userState')).user
    let result = await get(
      "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/cart/findByUid",
      {
        uid
      }
    )
    // console.log(result)
    dispatch(setDataAction(result))
  }


}

const incrementActor = (id) => {
  return {
    type: INCREMENT,
    id
  }
}

const decrementActor = (id) => {
  return {
    type: DECREMENT,
    id
  }
}
const deleteDateActor = (cid, gid) => {

  return {
    type: DELETE_DATA,
    cid,
    gid
  }
}

const putDataActor = (data) => {
  return {
    type: PUT_DATA,
    data
  }
}

export {
  loadDataAction,
  setDataAction,
  incrementActor,
  decrementActor,
  putDataActor,
  deleteDateActor,
}