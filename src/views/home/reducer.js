// import { act } from '@testing-library/react'
import {get} from '@u/http'
const defaultOrder = {
    list:[],

}

const reducer  = (state=defaultOrder,action)=>{
    switch(action.type){
        case 'SET_DATA':
            return{

                list:action.data
            }
        case 'DEL_DATA':
             let newList=state.list.filter(value=>{
                return value.orderList.oid !== action.id  
            })
            // console.log(action.id)
            get(
                "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/delete",{
                    oid:action.id
                }
            )
            return{

                list:newList
            }
        case "SET_STATUS":
            // state.list.forEach((value)=>{
            //     value.oid === action.id && (value.state =String( Number(value.state) + 1))
            // })
            // id 错误，要去找商品id
            // console.log(state)
            let OldState = state.list.filter(value=>{
                return value.orderList.oid !== action.id
            })
            let newState = state.list.filter(value=>{
                return value.orderList.oid === action.id
            })
            // console.log(newState)
            // console.log(newState[0].orderList.state)
            newState[0].orderList.state = String(Number(newState[0].orderList.state) + 1)
            OldState.push(newState[0])
            get(
                "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/changeState",{
                    oid:newState[0].orderList.oid,
                    state:newState[0].orderList.state
                }
            )
            return {

                list:OldState
            }
        case "RE_ORDER":
            let OldOrder = state.list.filter(value=>{
                return value.orderList.oid !== action.id
            })
            let newOrder = state.list.filter(value=>{
                return value.orderList.oid === action.id
            })
            newOrder[0].orderList.state = "0"
            OldOrder.push(newOrder[0])
            return {
 
                list:OldOrder
            }
        case "REMOVE_ORDER":
            console.log(state)
            let reOldOrder = state.list.filter(value=>{
                return value.orderList.oid !== action.id
            })
            let reNewOrder = state.list.filter(value=>{
                return value.orderList.oid === action.id
            })
            // console.log(reNewOrder)
            reNewOrder[0].orderList.state = "4"
            reOldOrder.push(reNewOrder[0])

            // console.log(reOldOrder)
            get(
                "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/changeState",{
                    oid:reNewOrder[0].orderList.oid,
                    state:reNewOrder[0].orderList.state
                }
            )
            return {
 
                list:reOldOrder
            }
            
        default:
            return state
    }
}


export default reducer