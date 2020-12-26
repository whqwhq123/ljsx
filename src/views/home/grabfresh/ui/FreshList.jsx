import React from 'react';
import { useHistory } from 'react-router-dom'
import {FreshListWrap} from "./GrabFresh.styled"
import NoFresh from "@a/images/iconku/noFresh.png" 
import NoFresh1 from "@a/images/iconku/noFresh-1.png" 
import NoFresh2 from "@a/images/iconku/noFresh-2.png" 
import NoFresh3 from "@a/images/iconku/noFresh-3.png" 
import {useDispatch} from 'react-redux'
import {decremmentFresh} from '../actionCreator'
import memoize from 'memoize-one'

const newPrice = memoize((price)=>{
    price = price.toString()

    let p = /\./.test(price)

    if(p){
        return price.split(".")[0]
    }else{
        return price
    }
})
const minPrice = memoize((price)=>{
    price = price.toString()
    let m = /\./.test(price)
    if(m){
        if(price.split(".")[1].length<=1){
            return "." + price.split(".")[1] + 0
        }else{
            return "." + price.split(".")[1]
        }
    }else{
        return ".00"
    }
})

const originPrice = memoize((price)=>{
    price = price.toString()
    let o = /\./.test(price)
    if(o){
        if(price.split(".")[1].length<=1){
            let c = price.split(".")[1] + "0"
            return price.split(".")[0] + "." + c
        }else{
            return price
        }
    }else{
        return price + ".00"
    }
})

const FreshList = (props) => {
    const {newGoods} = props
    // console.log(newGoods)
  const dispatch = useDispatch()
  const history = useHistory()
    const dressGoosNum = (id) =>{
        return ()=>{
            dispatch(decremmentFresh(id))
        }
    }
    const toRouClick = (id) => { 
      return () => {
        history.push("/details", {from:'/home',gid:id})
        }
    }
    const toSubmitOrder = (option) =>{
        return () =>{
                if(localStorage.getItem('userState')==='null'){
                    history.push('/Login')
                    return
                }
                // {
                //   "goods": [
                //     {
                //       "gid": 12,
                //       "gname": "土豆",
                //       "gnum": 1,
                //       "gpicture": "http://39.107.141.95/pictures/vagetable/kuaijing/tudou.jpg",
                //       "gprice": 20,
                //       "gweight": 500
                //     }
                //   ],
                //   "orderList": {
                //     "aid": 1,
                //     "oid": "202011141858476d292",
                //     "onum": 24,
                //     "oprice": 40,
                //     "otime": "2020-11-14 18:58:47.0",
                //     "state": 4,
                //     "uid": "2020101902"
                //   }
                // },
            // console.log(value)
            const value ={
                goods:[
                    {
                        gid:option.bid,
                        gname:option.bname,
                        gnum:1,
                        gpicture:option.bpicture,
                        gprice:option.bprice,
                        gweight:500,
                        // otime:"2020-11-14 18:58:47.0",
                        
                    }
                ],
                // orderList:{
                //     aid:1,
                //     state:0,
                //     uid:"2020101902",
                //     // 是新用户 + 10 ， 不是新用户  + 20
                //     oprice:option.bprice + 10,
                //     onum:1,
                //     oid:"202011141858476d292"
                // }
            }

            history.push("/submitorder",{value,from:"/fresh"})
        }
    }
    return (
        <FreshListWrap>
            <ul>
                {
                    newGoods && newGoods.map((value)=>{
                        console.log(value)
                        // const {good} = value
                        return (
                            <li key={value.bid}>
                                <div className="imgbox">
                              <img src={value.bpicture} onClick={toRouClick(value.bid)} alt=""/>
                                    {
                                        value.bnum == "0" &&
                                        <>
                                            <p>
                                                <img src={NoFresh} alt=""/>
                                            </p>
                                            <p>
                                                <img src={NoFresh1} alt=""/>
                                            </p>
                                            <p>
                                                <img src={NoFresh2} alt=""/>
                                            </p>
                                            <p>
                                                <img src={NoFresh3} alt=""/>
                                            </p>
                                            <div></div>
                                        </>
                                    }
                                </div>
                                <div className="content">
                                    <p>
                                        {value.bname}
                                    </p>
                                    <div className="garb">
                                        <div className="num">
                                            <h3>
                                                <span
                                                    style={{
                                                        display:"block",
                                                        width:`${value.bnum/value.bsum*100}%`,
                                                        height:"100%",
                                                        backgroundColor:"rgba(255, 204, 0, 1)",
                                                        borderRadius:".12rem"
                                                    }}
                                                ></span>
                                            </h3>
                                            <span>剩余{value.bnum}件</span>
                                        </div>
                                    </div>
                                    <div className="pricebox">
                                        <div className="price">
                                                <span>￥<em>{newPrice(value.bprice)}</em><i>{minPrice(value.bprice)}</i></span>
                                            <h3>
                                                ￥{originPrice(value.borigin)}
                                            </h3>
                                            <p>
                                                {
                                                    value.bnum == '0' ? <span
                                                        style={{backgroundColor:"#CCC"}}
                                                    >明天再来</span> : <span onClick={toSubmitOrder(value)}>立即抢购</span>
                                                }
                                            </p>
                                            {/* dressGoosNum(value.bid) */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                    
                }
            </ul>
        </FreshListWrap>
    );
};

export default FreshList;