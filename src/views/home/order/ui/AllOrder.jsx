import React from 'react';
import { AllOrderWrap } from './Order.styled'
import { Tabs,Badge} from 'antd-mobile'
import ProductBox from './ProductBox'
import PropTypes from 'prop-types'
import memoize from 'memoize-one'

const tabs = [
    { title: <Badge>全部</Badge> },
    { title: <Badge>待付款</Badge> },
    { title: <Badge>待评价</Badge> },
  ];

const cateList = memoize((cate,props)=>{
    if(props.list === undefined || props.list.length <= 0  ) return
    switch(cate){
        case "0":
            return props.list.filter(value=> value.orderList.state == '0')
        case "2":
            return props.list.filter(value=> value.orderList.state == '2')     
        default:
            return
    }
})
  

const AllOrder = (props) => {
    // console.log(props)
    return (
        <AllOrderWrap>
            <h1>订单</h1>
            <div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarActiveTextColor={'rgb(0,204,153)'}
                    tabBarUnderlineStyle={{backgroundColor:'rgb(0,204,153)',border:'1px solid rgb(0,204,153)',width:'20%',marginLeft:'0.25rem'}}
                    tabBarTextStyle={{fontSize:'0.12rem',color:'#666'}}
                >
                    <div style={{ display: 'flex',height: '5.26rem', backgroundColor: 'rgb(246,246,246)',width:'100%' }}>
                        {/* Content of first tab */}
                        <ProductBox {...props}></ProductBox>
                     </div>
                    <div style={{ display: 'flex', height: '5.26rem', backgroundColor: 'rgb(246,246,246)',width:'100%'}}>
                        <ProductBox list={props.list !== [] && cateList("0",props)} onDispatchClick={props.onDispatchClick} onEnterDetails={props.onEnterDetails}></ProductBox>
                    </div>
                    <div style={{ display: 'flex', height: '5.26rem', backgroundColor: 'rgb(246,246,246)',width:'100%'}}>
                        <ProductBox list={ props.list !==[] && cateList("2",props)} onDispatchClick={props.onDispatchClick} onEnterDetails={props.onEnterDetails}></ProductBox>
                    </div>
                </Tabs>


            </div>
        </AllOrderWrap>
    );
};

AllOrder.propTypes = {
    list:PropTypes.array
}
export default AllOrder;