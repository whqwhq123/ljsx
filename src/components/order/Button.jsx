import React from 'react';
import {BtnBox,BtnWrap} from './Button.styled'

import {Button} from 'antd-mobile'
const  clickHandler = (id)=>{
    return (e)=>{
        switch(e.target.innerHTML){
            case "删除订单":
                alert("确认删除订单？",'', [
                    { text: '取消', onPress: () => console.log('已取消') },
                    {
                    text: '确认',
                    onPress: () =>{
                        Toast.info('删除成功', 1);
                        this.props.delOrder(id)
                        }
                    },
                ])
                break;
            case "取消订单":
                // console.log(0)
                alert('', <div>
                    <svg t="1603678526381"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4431" width=".3rem" height=".3rem"><path d="M704.28672 309.20704l28.95872 28.9792L334.6432 736.78848l-28.95872-28.9792z" fill="#bfbfbf" p-id="4432"></path><path d="M341.03296 315.5968l398.60224 398.60224-28.95872 28.95872-398.60224-398.60224z" fill="#bfbfbf" p-id="4433"></path></svg>
                    <svg t="1603678817587" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5213" width=".24rem" height=".24rem"><path d="M879.7 193.8l-495 495-240.4-240.4-70.7 70.7L314 759.5l70.7 70.7 70.7-70.7 495-495z" fill="rgb(0,204,153)" p-id="5214"></path></svg>
                </div>, [
                    { text: '我不想买了', onPress: () => console.log('第0个按钮被点击了') },
                    { text: '信息填写错误,重新拍', onPress: () => console.log('第1个按钮被点击了') },
                    { text: '没货了', onPress: () => console.log('第2个按钮被点击了') },
                    { text: '多买了', onPress: () => console.log('第2个按钮被点击了') },
                    { text: '其他原因', onPress: () => console.log('第2个按钮被点击了') }
                  ])
                break;
            case "再来一单":
                console.log(1)
                break;
            case "去评价":
                console.log(2)
                break;
            case "去付款":
                console.log(3)
                break;
            case "查看物流":
                console.log(4)
                break;
            case "重新购买":
                console.log(5)
                break;
            case "确认收货":
                console.log(6)
                break;
            default:
                return
        }
    }
}
const ButtonState = () => {
    return (
            <BtnBox 
                width="1px"
            >
                <Button
                    onClick = {clickHandler}
                >

                </Button>
            </BtnBox>
    );
};

export default ButtonState;