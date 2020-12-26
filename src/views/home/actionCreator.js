import { get } from '../../utils/http'


const setDataAction = (data) => {
  return {
    type: "SET_DATA",
    data
  }
}

const loadDataAction = () => {
  const {uid} = JSON.parse(localStorage.getItem('userState')).user
  return async (dispatch) => {
    // let result = await get(
    //   "/api/order"
    // )

    let result = await get(
      "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/findByUid",{
        uid
      }
    )
    // console.log(result.order)
    dispatch(setDataAction(result.order))
  }
}

const modifyStatus = (id) => {

  return {
    type: "SET_STATUS",
    id
  }
}
const delDataAction = (id) => {
  return {
    type: 'DEL_DATA',
    id
  }
}
const anotherOrderAction = (id) => {
  return {
    type: "RE_ORDER",
    id
  }
}
const removeOrderAction =(id) =>{
  return {
    type:"REMOVE_ORDER",
    id
  }
}
export {
  loadDataAction,
  delDataAction,
  modifyStatus,
  anotherOrderAction,
  removeOrderAction
}