import React from 'react';
import {ProductWrap,BtnBox,ContentBor} from './Order.styled'
import memoize from 'memoize-one'
import PropTypes from 'prop-types'
import { Button} from "antd-mobile";


const stateSelect = memoize((state)=>{
    switch(state.toString()){
        case '0':
            return {
                state:"待付款",
                btn:["取消订单",'去付款'],
                btnColor:'rgb(0,204,153)'
            }
        case '1':
            return {
                state:"待收货",
                btn:["查看物流",'确认收货'],
                btnColor:'rgb(0,204,153)'
            }
        case "2":
            return {
                state:"待评价",
                btn:["再来一单",'删除订单',"去评价"],
                btnColor:'rgb(0,204,153)'
            }
        case '3':
            return {
                state:"已完成",
                btn:["再来一单","删除订单"],
                btnColor:''
            }
        case '4':
            return {
                state:"交易关闭",
                btn:["重新购买",'删除订单'],
                btnColor:''
            }
        default:
            return
    }
})

const tolPrice = memoize((list)=>{
    return list.goods.reduce((value,item)=>{
        return value + item.gprice * item.gnum;
    },0)
})
const showImg = memoize((goods)=>{
    if(goods.length>4){
        return goods.slice(0,4) 
    }else{
        return goods
    }
})

const ProductBox = (props) => {
    // console.log(props.list.length)
    return (
        <div style={{width:'100%'}}>
            {
               props.list !==undefined && props.list.length > 0 &&  props.list.map(value=>{
                    // console.log(value)
                    return(
                        <ProductWrap key={value.orderList.oid}>
                            <header onClick={props.onEnterDetails(value)}>
                                <span>小哥农产品</span>
                                <p>{stateSelect(value.orderList.state).state}</p>
                            </header>
                            <ContentBor
                                width="0.01rem 0 0.01rem 0"
                            >
                                {
                                    showImg(value.goods).map((val)=>{
                                        return(
                                            <section key={val.gid}>
                                                <img src={val.gpicture}  alt=""/>
                                            </section>
                                        )
                                    })
                                }
                                {
                                    value.goods.length >= 4 && <span>...</span>
                                }
                            </ContentBor>
                            <footer>
                                <div className="price">
                                    <p>共<span>{value.goods.length}</span>件商品</p>
                                    <h2>合计：<em>￥{tolPrice(value)}</em></h2>
                                </div>
                                <BtnBox color={stateSelect(value.orderList.state).btnColor}>
                                    {
                                        stateSelect(value.orderList.state).btn.map((val,index)=>{
                                            return(
                                                // <BtnWrap key={index} onClick={props.onDispatchClick(value.oid)}>
                                                //      {val}
                                                // </BtnWrap>
                                                <Button
                                                        key={index}
                                                        onClick={props.onDispatchClick(value)}
                                                    >
                                                        {val}
                                                </Button>
                                            )
                                        })
                                    }
                                </BtnBox>
                            </footer>
                        </ProductWrap>
                    )
                })
            }
        </div>
    );
};

ProductBox.propTypes = {
    list:PropTypes.array
}
export default ProductBox;