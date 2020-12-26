import React ,{useState}from 'react';
import {PayMethodWrap} from './Order.styled'
import ZhiFuBao from '@a/images/iconku/zhifubao.png'
import Weixin from '@a/images/iconku/weixin.png'
import NoCheck from '@a/images/iconku/nocheck.png'
import Checked from '@a/images/iconku/checked.png'
const PayMethod = () => {
    let [isCheck, setCheck] = useState(true)
    return (
        <PayMethodWrap>
            <h1>支付方式</h1>
            <ul>
                <li>
                    <div>
                        <img src={ZhiFuBao} alt=""/>
                        <span>支付宝支付</span>
                    </div>
                    <img src={isCheck ? Checked : NoCheck} onClick={()=>setCheck(!isCheck)} alt=""/>
                </li>
                <li>
                    <div>
                        <img src={Weixin} alt=""/>
                        <span>微信支付</span>
                    </div>
                    <img src={isCheck ? NoCheck : Checked} onClick={()=>setCheck(!isCheck)} alt=""/>
                </li>
            </ul>
        </PayMethodWrap>
    );
};

export default PayMethod;