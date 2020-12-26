import React,{useState} from 'react';
import {OrderList,Buton} from './Order.styled'
import memoize from 'memoize-one'

const goodList = memoize((goods,showNum)=>{
    if(goods.length>3 && showNum){
        return goods.slice(0,3) 
    }else{
        return goods
    }
})
const OrderListWrap = (props) => {
    const {value} = props
    // console.log(value)
    let [showNum,setShowNum] = useState(true)
    const changeShowNum = (goods) =>{
        return ()=>{
            setShowNum(!showNum)
            goodList(goods,showNum)
        }
    }
    return (
        <OrderList>
            <h1>
                <span>购物清单</span>
                <p>
                    共<em>{value.goods.length}</em>件商品
            </p>
            </h1>
            <ul>
                {
                    goodList(value.goods,showNum).map((val) => {
                        return (
                            <li key={val.gid}>
                                <div className="imgbox">
                                    <img src={val.gpicture} alt="" />
                                </div>
                                <p>
                                    <span>{val.gname}</span>
                                    <i>{val.gweight}g</i>
                                    <em>x{val.gnum}</em>
                                </p>
                                <h5>
                                    ￥<span>{val.gprice * val.gnum}</span>
                                </h5>
                            </li>
                        )
                    })
                }
            </ul>
            <footer>
                <Buton 
                onClick = {changeShowNum(value.goods)}
                width="0.01rem"
                color="#999"
                >
                    
                    <p>
                        { showNum ? "展开清单 ∨" : "收起清单 ∧"}
                    </p>               
                </Buton>
            </footer>
        </OrderList>
    );
};

export default OrderListWrap;