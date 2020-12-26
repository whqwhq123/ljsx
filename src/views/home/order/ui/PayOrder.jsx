import React from 'react';
import {useHistory, useLocation} from 'react-router-dom'
import {PayOrderWrap} from './Order.styled'
import OrderInfo from '@c/order/OrderInfo'
import PayMethod from '@c/order/PayMethod'
import { Modal } from 'antd-mobile'
import {get} from '@u/http'
import { fromJS } from 'immutable';
const alert  = Modal.alert
const PayOrder = () => {

    const location = useLocation()
  const history = useHistory()
  console.log(location.state.oid.oid)
  const value = location.state.value

    const goBackHandler = () =>{
        alert("确认离开订单支付",'超过支付时效时订单将被取消，请尽快完成支付', [
            { text: '继续支付', onPress: () => console.log('已取消') },
            {
            text: '确认离开',
            onPress: () =>{
                history.push("/orderdetails",{value})  
            }
            },
        ])
            
    }

  const paySuccess = (value) => {
    return () => {
      console.log(value)
      get(
        "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/cartBuy",{
            cid:value.cart.cid,
            aid:value.orderList.aid
        }
      )
      get(
        "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/changeState",{
            oid:location.state.oid.oid,
            state:1
        }
    )
      history.push("/paysuccess",{value})
      }
    }
    return (

        <div>
            <PayOrderWrap>
                <h1>
                    <svg t="1603685256851" onClick={goBackHandler} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6077" width="0.2rem" height="0.2rem"><path d="M323.70859 512.813528l390.453736 390.453736-53.648874 53.645804L231.892441 528.292058 215.256552 512.833995l15.20326-14.46034L661.747559 67.086931l53.841256 53.844326L323.70859 512.813528z" p-id="6078" fill="#8a8a8a"></path></svg>
                    确认付款
                </h1>
            </PayOrderWrap>
            <OrderInfo list={value}>

            </OrderInfo>
            <PayMethod>

            </PayMethod>
            <footer style={{
                height:".44rem",
                backgroundColor:"rgba(0, 204, 153, 1)",
                position:"fixed",
                bottom:'0',
                width:"100%",
                textAlign:"center",
                lineHeight:".44rem",
                color:"#fff",
                fontSize:".14rem"
                }}
                onClick={paySuccess(value)}
                >
                付款
            </footer>
        </div>
    );
};

export default PayOrder;