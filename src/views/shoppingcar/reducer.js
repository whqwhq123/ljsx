import { SET_DATA, INCREMENT, DECREMENT, PUT_DATA, DELETE_DATA } from './actionTypes'
import { get } from "@u/http"
const defaultValue = {
  goodlist: []
}
const reducer = (state = defaultValue, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        goodlist: action.goodlist
      }
    case INCREMENT:
      // console.log(state.goodlist)
      let newList = state.goodlist.goods.filter(value => {
        if (value.gid === action.id) {
          value.gnum++
        }
        return value
      })
      // console.log(
      //     {
      //         ...state.goodlist,
      //         goods:newList
      //     }
      // )
      // console.log(newList[0].gnum)
      get(
        "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/cart/updateByCid",
        {
          cid: state.goodlist.cart.cid,
          gid: newList[0].gid,
          gnum: newList[0].gnum,
          ctotal: (newList[0].gprice * newList[0].gnum)
        }
      )
      return {
        goodlist: {
          ...state.goodlist,
          goods: newList
        }
      }
    case DECREMENT:
      let newListTwo = state.goodlist.goods.filter(value => {
        if (value.gid === action.id) {
          value.gnum--
          if (value.gnum <= 1) value.gnum = 1
        }
        return value
      })
      get(
        "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/cart/updateByCid",
        {
          cid: state.goodlist.cart.cid,
          gid: newListTwo[0].gid,
          gnum: newListTwo[0].gnum,
          ctotal: (newListTwo[0].gprice * newListTwo[0].gnum)
        }
      )
      return {
        goodlist: {
          ...state.goodlist,
          goods: newListTwo
        }
      }
    case PUT_DATA:
      let newGoods = state.goodlist.goods.push(action.data)
      return {
        goodlist: {
          ...state.goodlist,
          goods: newGoods
        }
      }
    case DELETE_DATA:

      let remList = state.goodlist.goods.filter(value => {

        return value.gid !== action.gid
      })
      console.log(remList)
      let delGoods = state.goodlist.goods.filter(value => {

        return value.gid === action.gid
      })

      get(
        "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/cart/delByGid", {
        cid: state.goodlist.cart.cid,
        gid: delGoods[0].gid
      }
      )
      // console.log(remList)
      // console.log(
      //     {
      //         goodlist:{
      //             ...state.goodlist,
      //             goods:remList
      //         }
      //     }
      // )
      return {
        goodlist: {
          ...state.goodlist,
          goods: remList
        }
      }
    default:
      return state
  }
}

export default reducer