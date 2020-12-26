import React from 'react';

import { OrderInfoWrap } from './Order.styled'
import memozie from 'memoize-one'

const productPrice = memozie((price)=>{
    return 
})

const OrderInfo = (props) => {
    // console.log(props.list.goods)
    return (
        <OrderInfoWrap color={props.color}>
            <h1>订单信息</h1>
            <ul>
                <li>
                    <p>产品费用</p>
                    <h3>￥{ JSON.parse(localStorage.getItem("userState")).user.unew === 1 ? props.list.orderList.oprice - 10 : props.list.orderList.oprice - 20}</h3>
                </li>
                <li>
                    <p>包装费</p>
                    <h3>￥10</h3>
                </li>
                <li>
                    <p>配送费</p>
                    <h3>￥10</h3>
                </li>

                
                {
                    // 需要用户信息判断是否是新用户
                    JSON.parse(localStorage.getItem("userState")).user.unew === 1 &&
                    <li>
                        <p className="newUser">
                            <span>
                                减
                            </span>
                            新用户
                        </p>
                        <h3>
                            -￥10
                        </h3>
                    </li>
                }
                {
                    props.color === undefined && 
                    <h5>
                        <span>合计</span>
                        <em>￥{props.list.orderList.oprice}</em>
                    </h5> 
                }

            </ul>
        </OrderInfoWrap>
    );
};

export default OrderInfo;