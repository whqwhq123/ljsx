import React, { Component } from 'react';
import OrderUi from '../ui/OrderUi'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {loadDataAction,delDataAction,anotherOrderAction,modifyStatus,removeOrderAction} from '../../actionCreator'
import {Toast,Modal} from 'antd-mobile'
const alert = Modal.alert
const mapStateToProps = (state)=> {
    // console.log(state)
    return{
        list:state.order.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        loadData(){
            dispatch(loadDataAction())
        },
        delOrder(id){
            dispatch(delDataAction(id))
        },
        anotherOrder(id){
            dispatch(anotherOrderAction(id))
        },
        modifyOrder(id){
            dispatch(modifyStatus(id))
        },
        removeOrder(id){
            dispatch(removeOrderAction(id))
        }
    }
}
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Order extends Component {
    componentDidMount(){
        this.props.loadData()
    }
    clickHandler = (value)=>{
        return (e)=>{
            switch(e.target.innerHTML){
                case "删除订单":
                    alert("确认删除订单？",'', [
                        { text: '取消', onPress: () => console.log('已取消') },
                        {
                        text: '确认',
                        onPress: () =>{
                            Toast.info('删除成功', 1);
                            this.props.delOrder(value.orderList.oid)
                            }
                        },
                    ])
                    break;
                case "取消订单":
                    alert('', <div>
                        <svg t="1603678526381"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4431" width=".3rem" height=".3rem"><path d="M704.28672 309.20704l28.95872 28.9792L334.6432 736.78848l-28.95872-28.9792z" fill="#bfbfbf" p-id="4432"></path><path d="M341.03296 315.5968l398.60224 398.60224-28.95872 28.95872-398.60224-398.60224z" fill="#bfbfbf" p-id="4433"></path></svg>
                        {/* <svg t="1603678817587" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5213" width=".24rem" height=".24rem"><path d="M879.7 193.8l-495 495-240.4-240.4-70.7 70.7L314 759.5l70.7 70.7 70.7-70.7 495-495z" fill="rgb(0,204,153)" p-id="5214"></path></svg> */}
                    </div>, [
                        { text: '我不想买了', onPress: () => this.props.removeOrder(value.orderList.oid) },
                        { text: '信息填写错误,重新拍', onPress: () => this.props.removeOrder(value.orderList.oid) },
                        { text: '没货了', onPress: () => this.props.removeOrder(value.orderList.oid) },
                        { text: '多买了', onPress: () => this.props.removeOrder(value.orderList.oid) },
                        { text: '其他原因', onPress: () => this.props.removeOrder(value.orderList.oid) }
                      ])
                    break;
                case "再来一单":
                    // this.props.anotherOrder(value.oid)
                    this.props.history.push("/submitorder",{value,from:"/reorder"})
                    break;
                case "去评价":
                    this.props.history.push("/evaluation",{value})
                    break;
                case "去付款":
                    this.props.history.push("/payorder",{value})
                    break;
                case "查看物流":
                    this.props.history.push("/map",{value})
                    break;
                case "重新购买":
                    this.props.history.push("/submitorder",{value})
                    break;
                case "确认收货":
                    alert("是否确认收货？",'', [
                        { text: '取消', onPress: () => console.log('已取消') },
                        {
                        text: '确认',
                        onPress: () =>{
                            Toast.info('已确认收货', 1);
                            //修改redux里的状态
                            // console.log(value)
                            this.props.modifyOrder(value.orderList.oid)
                            }
                        },
                    ])
                    break;
                default:
                    return
            }
        }
    }
    EnterDetails = (value)=>{
        return ()=>{
            this.props.history.push("/orderdetails",{value})
        }
    }
    render() {
        return (
            <div>
                <OrderUi list={this.props.list} onDispatchClick={this.clickHandler} onEnterDetails={this.EnterDetails}></OrderUi>
            </div>
        );
    }
}

export default Order;