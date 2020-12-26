import React, { useEffect} from 'react';
import {SubmitOrderWrap,DressWrap,MainWrap,SubmitFooter} from './Order.styled'

import Position from '@a/images/iconku/position.png'
import {useHistory} from 'react-router-dom'
import OrderList from '@c/order/OrderListWrap'
import Coupon from '@c/order/CouponWrap'
import OrderInfo from '@c/order/OrderInfo'
import NoSelectDress from '@c/order/NoSelectDress'
import {Modal,Button} from "antd-mobile"
import {get,post,postJson} from "@u/http"
const alert = Modal.alert;
const SubmitOrder = () => {
    const history = useHistory()
    // console.log(history)
    let {value,from} = history.location.state
    console.log(from)
    const dressInfo = value.dressInfo
    let ad = JSON.parse(localStorage.getItem("userState")).user.unew === 0 ?  20 : 10
    value = {
        goods:value.goods,
        cart: value.cart,
        orderList:{
            aid:1,
            state:0,
            uid:"2020101902",
            // 是新用户 + 10 ， 不是新用户  + 20
            oprice:value.goods.reduce((value,item)=>{
                return value + item.gprice * item.gnum
            },0) +  ad,
            onum:value.goods.reduce((value,item)=>{
                return value + item.gnum
            },0),
            oid:value.orderList && value.orderList.oid
        }
    }
    // console.log(value)
    // useEffect(()=>{
    //     (async ()=>{
    //         let result
    //     })()
    // })
  const submitOrderHandler = (value) => {
        // console.log(from)
        let res
        return async () =>{
            switch(from){
              case '/fresh':
                let data = {
                  "uid": value.goods[0].uid,
                  "aid": 1,
                  "oprice": Number((value.orderList.oprice)).toFixed(2),
                  "onum": 1,
                  "Goods": [
                      {
                        "gid": value.goods[0].gid,
                        "gnum": value.goods[0].gnum
                      }
	                  ]
                }

                await postJson("http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/nowBuy", data)
                history.push("/payorder",{value,oid:res})
                break;
                // console.log(code);
              case "/shopcar":
                // console.log(value)
               (async () => {
                res = await get(
                    "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/cartBuy",
                 {
                   cid: value.cart.cid,
                   aid: value.aid || 1
                    }
               )     
               history.push("/payorder",{value,oid:res})     
                   } )()
                  
                    break;
                case '/reorder':
                    // console.log(value)
                    get(
                        "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/reBuy",{
                            oid:value.orderList.oid
                        }
                    )
                    history.push("/payorder",{value,oid:res})
                    break;
                default:
                    break;
            }
            // console.log(from)
            // console.log(JSON.stringify(value))

            // history.push("/payorder",{value})
        }
    }
    return (
        <SubmitOrderWrap>
            <header>
                <h1>
                <Button
                    onClick={() =>
                        alert('确认放弃订单吗？', '', [
                            { text: '取消', onPress: () => console.log('cancel') },
                            { text: '去意已决', onPress: () => history.push("/goodscar") },
                        ])
                    }
                    >
                        
                    <svg t="1603685256851" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6077" width="0.2rem" height="0.2rem"><path d="M323.70859 512.813528l390.453736 390.453736-53.648874 53.645804L231.892441 528.292058 215.256552 512.833995l15.20326-14.46034L661.747559 67.086931l53.841256 53.844326L323.70859 512.813528z" p-id="6078" fill="#8a8a8a"></path></svg>
                </Button>
                    
                    <span>
                        提交订单
                    </span>
                    
                </h1>
            </header>
            <MainWrap>
                {
                    dressInfo !== undefined ? 
                    <DressWrap onClick={()=> history.push("/dressmange",{value})}>
                            <img src={Position} alt=""/>
                            <div>
                                <h1><span>{dressInfo.user}</span></h1>
                                <p>{dressInfo.dressSelect}</p>
                            </div>
                            <h2>
                                <svg t="1603709297213"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3523" width=".2rem" height=".2rem"><path d="M333 1005.9c-11.2 11.2-25.8 16.7-40.5 16.7-14.6 0-29.3-5.5-40.5-16.7-22.3-22.3-22.3-58.5 0-80.8l413.8-413.8L252.3 97.6c-22.3-22.3-22.3-58.5 0-80.8 22.3-22.3 58.5-22.3 80.8 0L763 446.7c17.3 17.3 26.7 40.2 26.7 64.7s-9.5 47.4-26.7 64.7l-430 429.8z m0 0" p-id="3524" fill="#bfbfbf"></path></svg>  
                            </h2>
                    </DressWrap> : <NoSelectDress from={from}></NoSelectDress> 
                }
                <OrderList value={value}></OrderList>
                <Coupon></Coupon>
                <OrderInfo list={value} color="#FF6666"></OrderInfo>
            </MainWrap>
            <SubmitFooter>
                <div>
                    <span>总计：<em>￥{value.orderList.oprice}元</em></span>
                </div>
                <p onClick={submitOrderHandler(value)}>
                    提交订单
                </p>
            </SubmitFooter>
        </SubmitOrderWrap>
    );
};

export default SubmitOrder;