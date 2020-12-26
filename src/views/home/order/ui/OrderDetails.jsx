import React,{useEffect} from 'react';
import {
    DetailHeadWrap,
    StateWrap,
    DressWrap,
    OrderFooterWrap,
    MainWrap,
    OrderDetaInfo,
    BtnBox,
} from './Order.styled'
import Customer from '@a/images/iconku/kefu.png'
import Clock from '@a/images/iconku/clock.png'
import Close from '@a/images/iconku/close.png'
import WaitGood from '@a/images/iconku/waitgood.png'
import Success from '@a/images/iconku/success.png'
import Position from '@a/images/iconku/position.png'

import {useLocation,useHistory} from 'react-router-dom'
import {Toast,Modal,Button} from 'antd-mobile'
import memoize from 'memoize-one'
import {useDispatch} from 'react-redux'
import {delDataAction,modifyStatus,removeOrderAction} from '../../actionCreator'
import OrderInfo from '@c/order/OrderInfo'
import OrderList from '@c/order/OrderListWrap'
import Coupon from '@c/order/CouponWrap'
import {get} from '@u/http'
const alert = Modal.alert
const stateSelect = memoize((state)=>{
    switch(state.toString()){
        case '0':
            return {
                state:"等待付款",
                btn:["取消订单",'去付款'],
                btnColor:'rgb(0,204,153)',
                statePic:Clock
            }
        case '1':
            return {
                state:"待发货",
                btn:["查看物流",'确认收货'],
                btnColor:'rgb(0,204,153)',
                statePic:WaitGood
            }
        case "2":
            return {
                state:"待评价",
                btn:["再来一单",'删除订单',"去评价"],
                btnColor:'rgb(0,204,153)',
                statePic:Clock
            }
        case '3':
            return {
                state:"交易完成",
                btn:["再来一单","删除订单"],
                btnColor:'',
                statePic:Success
            }
        case '4':
            return {
                state:"交易关闭",
                btn:["重新购买",'删除订单'],
                btnColor:'',
                statePic:Close
            }
        default:
            return
    }
})


const OrderDetails = (props) => {

    // console.log(props)
    const location = useLocation()
    const {value} = location.state;
    // console.log(value)
    // console.log(value.state)
    const dispatch = useDispatch();
    const history = useHistory()
    const toOrderList = (id) =>{
        console.log(0)

        get(
            "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/order/changeState",{
                oid:id,
                state:4
            }
        )
            
            // dispatch(removeOrderAction(id))
            Toast.info('订单已取消', 1);
         setTimeout(()=>{
            history.push('/home')
         },1000)   
            
            // window.location.reload()
        
    }
    const clickHandler = (id)=>{
      
        return (e)=>{
            switch(e.target.innerHTML){
                case "删除订单":
                    alert("确认删除订单？",'', [
                        { text: '取消', onPress: () => console.log('已取消') },
                        {
                        text: '确认',
                        onPress: () =>{
                            Toast.info('删除成功', 1);
                            dispatch(delDataAction(id))
                            }
                        },
                    ])
                    break;
                case "取消订单":
                    alert('', <div>
                        <svg t="1603678526381"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4431" width=".3rem" height=".3rem"><path d="M704.28672 309.20704l28.95872 28.9792L334.6432 736.78848l-28.95872-28.9792z" fill="#bfbfbf" p-id="4432"></path><path d="M341.03296 315.5968l398.60224 398.60224-28.95872 28.95872-398.60224-398.60224z" fill="#bfbfbf" p-id="4433"></path></svg>
                        {/* <svg t="1603678817587" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5213" width=".24rem" height=".24rem"><path d="M879.7 193.8l-495 495-240.4-240.4-70.7 70.7L314 759.5l70.7 70.7 70.7-70.7 495-495z" fill="rgb(0,204,153)" p-id="5214"></path></svg> */}
                    </div>, [
                        { text: '我不想买了', onPress: () =>toOrderList(id) },
                        { text: '信息填写错误,重新拍', onPress: () => toOrderList(id)},
                        { text: '没货了', onPress: () =>toOrderList(id) },
                        { text: '多买了', onPress: () =>toOrderList(id) },
                        { text: '其他原因', onPress: () =>toOrderList(id) }
                      ])
                    break;
                case "再来一单":
                    history.push("/submitorder",{value})
                    break;
                case "去评价":
                    history.push("/evaluation",{value})
                    break;
                case "去付款":
                    history.push('/payorder',{value})
                    break;
                case "查看物流":
                    history.push("/map",{value})
                    break;
                case "重新购买":
                    history.push("/submitorder",{value})
                    break;
                case "确认收货":
                        alert("是否确认收货？",'', [
                            { text: '取消', onPress: () => console.log('已取消') },
                            {
                            text: '确认',
                            onPress: () =>{
                                Toast.info('已确认收货', 1);
                                // console.log(id)
                                dispatch(modifyStatus(id))
                                //修改redux里的状态
                            
                                window.location.reload()
                                }
                            },
                        ])
                    break;
                default:
                    return
            }
        }
    }
    
    const goBackHandler= () => {
        history.push("/")
        // history.goBack()
    }
    useEffect(()=>{
        if(value.orderList.state == '0'){
            const clock = document.querySelector('.clock')
            let time=1799;
            const id = setInterval(()=>{
                time=time-1;
                let minute=parseInt(time/60);
                let second=parseInt(time%60);
                clock.innerHTML='剩余：'+minute+'分'+second+'秒';
                if(time === 0) clearInterval(id)
            },1000);
        }
        
        (async ()=>{
            let res = await get(
                "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/address/findAll",{
                    uid:value.orderList.uid
                }
            )
            console.log(res.addresses)
        })()
    })
    return (
        
        <div>
            <DetailHeadWrap>
                <h1>
                <svg t="1603685256851" onClick={goBackHandler} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6077" width="0.2rem" height="0.2rem"><path d="M323.70859 512.813528l390.453736 390.453736-53.648874 53.645804L231.892441 528.292058 215.256552 512.833995l15.20326-14.46034L661.747559 67.086931l53.841256 53.844326L323.70859 512.813528z" p-id="6078" fill="#8a8a8a"></path></svg>
                <img src={Customer} alt=""/>
                </h1>
            </DetailHeadWrap>
            <MainWrap>
                <StateWrap>
                    <h1>
                        <img src={stateSelect(value.orderList.state).statePic} alt=""/>
                        <span>{stateSelect(value.orderList.state).state}</span>
                    </h1>
                    <div>
                        {
                            value.orderList.state == '0' && <span className="clock">剩余：29分59秒</span>
                        }
                        
                    </div>
                </StateWrap>
                <DressWrap onClick={()=> history.push("/dressmange",{value})}>
                    <img src={Position} alt=""/>
                    <div>
                        <h1>松林放牛娃 <span>138****6688</span></h1>
                        <p>四川省 成都市 温江区 光华大都西段 123号 xx小区</p>
                    </div>
                    <h2>
                        <svg t="1603709297213"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3523" width=".2rem" height=".2rem"><path d="M333 1005.9c-11.2 11.2-25.8 16.7-40.5 16.7-14.6 0-29.3-5.5-40.5-16.7-22.3-22.3-22.3-58.5 0-80.8l413.8-413.8L252.3 97.6c-22.3-22.3-22.3-58.5 0-80.8 22.3-22.3 58.5-22.3 80.8 0L763 446.7c17.3 17.3 26.7 40.2 26.7 64.7s-9.5 47.4-26.7 64.7l-430 429.8z m0 0" p-id="3524" fill="#bfbfbf"></path></svg>  
                    </h2>
                </DressWrap>
                <OrderList value={value}></OrderList>
                <Coupon></Coupon>
                <OrderInfo list={value}></OrderInfo>
                <OrderDetaInfo>
                    <ul>
                        <li>
                            <p>订单编号</p>
                            <h3>{value.orderList.oid}</h3>
                        </li>
                        <li>
                            <p>提交时间</p>
                            <h3>{value.orderList.otime}</h3>
                        </li>
                        <li>
                            <p>支付方式</p>
                            <h3>在线支付</h3>
                        </li>
                    </ul>
                </OrderDetaInfo>
            </MainWrap>      
            <OrderFooterWrap>
                <div className="showPrice">
                    {
                       value.orderList.state == '0' &&  <p> 总计：<span>￥<em>{value.orderList.oprice}元</em></span> </p>
                    }
                </div>
                <BtnBox color={stateSelect(value.orderList.state).btnColor}>
                {
                    stateSelect(value.orderList.state).btn.map((val,index)=>{
                        return(
                            <Button
                                    key={index}
                                    onClick={clickHandler(value.orderList.oid)}
                            >
                                    {val}
                            </Button>
                        )
                    })
                }
                </BtnBox>
            </OrderFooterWrap>
        </div>
    );
};

export default OrderDetails;