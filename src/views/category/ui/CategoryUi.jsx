import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { get } from '@u/http'

import {
    NavBar,
    Icon,
    Badge
} from 'antd-mobile'

import TabBar from './TabBar'
import indexbasket from '@a/images/iconku/indexbasket.png'
import { Container } from '../ui/CategoryUi.styled'
import Toastto from "@c/toastto/Toastto";
const tabsArr = [
    ['叶菜', '根茎', '豆类', '瓜茄', '调料',],
    ['鱼类', '贝类', '虾类', '肉类', '藻类',],
    ["干果", "干蔬", "调味料", "杂粮", "药膳"],
    ["鸡蛋", "鸭蛋", "鹅蛋", "皮蛋", "鹌鹑蛋"],
    ["面粉", "大米", "食用油", "杂粮", "馒头"],
];
const CategoryUi = (props) => {
    // console.log(props.history)
    const history = useHistory()
    const [state, setState] = useState([])
    const [badgeNum, setBadgeNum] = useState(0)
    const [category, setCategory] = useState({
        offset: 1,
        count: 10,
        cate_name: props.history.location.state.title,
        cs_name: tabsArr[props.history.location.state.index][0]
    })
    const [toasts, setToasts] = useState({
      isToast: false,
      titleToast: "",
    })
    

    useEffect(() => {
        (async () => {
            const result = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/goods/findByCate', {
                offset: category.offset,
                count: category.count,
                cate_name: category.cate_name,
                cs_name: category.cs_name
            })
            setState(result.goods)
        })()
        getnum()
    }, [category])
    const getnum = async() => { 
      if (localStorage.getItem("userState") && localStorage.getItem("userState") !== "null") { 
        let index = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/cart/findByUid?uid=${JSON.parse(localStorage.getItem("userState")).user.uid}`)
        if (!index.code) { 
          setBadgeNum(index.goods.length)
        }
      }
    }
    const onChengTab = (tabTow, index) => {
        console.log(tabTow, index, "父组件");
        setCategory({
            ...category,
            cs_name: tabTow
        })
    }

    const cats = () => { 
      if (localStorage.getItem("userState") && localStorage.getItem("userState") !== "null") {
        history.push("/goodscar")
      } else { 
       chengToas(true, "请先登陆")
      }
   
      setTimeout(() => { 
        chengToas()
      },10)
      
      
    }
    const chengToas=(bool,title) => {
      setToasts({
        isToast: bool,
        titleToast:title,
      })
     
    }

    return (
        <Container>
            <NavBar
                mode="dark"
                leftContent={[
                    <Icon 
                    key="0" 
                    type="left" 
                    style={{ marginRight: '.1rem',
                    transform: "scale(1.2)",
                    transformOrigin:" 0 .11rem"
                  }} 
                  onClick={() => history.goBack("/home")}
                    />,
                    <Icon key="1" type="search" style={{
                    height: '.2rem',
                    lineHeight: '.2rem' }}
                        onClick={() => history.push("/search",{from:"/home"})}
                    />,
                ]}
                rightContent={[
                  
                    <Badge key="1" text={badgeNum} style={{
                      left: '.12rem',
                      width: '.16rem',
                      top: '0',
                      height: '.16rem',
                      lineHeight: '.16rem',
                      padding: '0',
                      transform: 'scale(0.75)',
                      transformOrigin: '0 0'
                      
                    }}
                    onClick={() => history.push("/goodscar", {from:"/home"})}
                    >
                      <div
                        onClick={cats}
                        style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${indexbasket}) center center /  16px 16px no-repeat` }}
                      />
                    </Badge>
                 
                ]}
                style={{ backgroundColor: 'rgba(0, 204, 153, 1)', position: 'sticky', top: 0, zIndex: 999 }}
            >{props.history.location.state.title}</NavBar>
            <TabBar
                List={state}
                getNumtex={getnum}

                onChengTab={onChengTab}
                tabtowArr={tabsArr[props.history.location.state.index]}
            ></TabBar>
               {/* 弹出层 */}
               {
          toasts.isToast && (
            <Toastto
          isToast={toasts.isToast}
          titleToast={toasts.titleToast}
        ></Toastto>
          )
        }
        </Container>
    )
}
export default CategoryUi