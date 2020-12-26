import React,{useEffect} from 'react';
import PaySuc from '@a/images/iconku/paysuccess.png'
import {PaySuccessHeader,PaySuccessWrap,PaySuccessSelect} from './Order.styled'
import {useHistory} from 'react-router-dom'
import {get} from "@u/http"
// import {useDispatch,useSelector} from "react-redux"
// import {modifyStatus,loadDataAction} from '../../actionCreator'
const PaySuccess = (props) => {
    // const store = useSelector(state=>state.order)
    const history = useHistory()
    // const dispatch = useDispatch()
  const { value } = history.location.state
  const order = value.orderList
  order.state = 1
    console.log(value)
    // useEffect(()=>{
    //     // value.orderList.state = "1"
    //     get(
    //         "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/changeState",{
    //             oid:value.orderList.oid,
    //             state:1
    //         }
    //     )

    // })
    // useEffect(()=>{
    //     dispatch(loadDataAction())
    //     setTimeout(()=>{
    //         dispatch(modifyStatus(order.oid))
    //     },300)
        
    // },[dispatch.oid])

    // let value = store.list.filter((val)=>{
    //     return order.oid === val.oid
    // })
    // value = value.length>0 && value[0]
    
    return (
        <div>
            <PaySuccessHeader>
                <h1>
                    支付成功
                </h1>
            </PaySuccessHeader>
            <PaySuccessWrap>
                <div>
                    <img src={PaySuc} alt=""/>
                    <p>订单支付成功</p>
                    <span>支付金额：<em>￥{value.orderList.oprice}</em></span>
                    <span>支付方式：<i>支付宝</i></span>
                </div>
            </PaySuccessWrap>
            <PaySuccessSelect>
          <div onClick={() => history.push('/orderdetails', { value: { ...value, orderList: order } })}>
                    查看订单
                </div>
                <div onClick={()=>history.push("/home")}>
                    返回首页
                </div>
            </PaySuccessSelect>
        </div>
    );
};

export default PaySuccess;