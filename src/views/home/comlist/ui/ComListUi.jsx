/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback,useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import memoize from 'memoize-one'
import { useHistory } from 'react-router-dom'
import { NavBar ,Badge} from 'antd-mobile';


import indexBasket from '@a/images/iconku/indexbasket.png'
import Toastto from "@c/toastto/Toastto";
import Swiper from './Swiper'
import NavList from './NavList'
import NewProducts from './NewProducts'
import IndexList from '@c/indexlist/IndexList'
import CountDown from '@c/countdown/CountDown'
import { ContainerWrap } from './Comlist.styled'
import { get} from "@u/http";
const ComListUi = (props) => {
  // console.log(props)
  let history = useHistory()
  const [toasts, setToasts] = useState({
    isToast: false,
    titleToast: "",
  })
  const [badgeNum, setBadgeNum] = useState(0)

  useEffect(() => {
    getnum()
  }, [])
  const getnum = async() => { 
    if (localStorage.getItem("userState") && localStorage.getItem("userState") !== "null") { 
      let index = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/cart/findByUid?uid=${JSON.parse(localStorage.getItem("userState")).user.uid}`)
      console.log(JSON.parse(localStorage.getItem("userState")).user.uid);
      if (!index.code) { 
        setBadgeNum(index.goods.length)
      }

    }
  }

  const handleGotoSearch = useCallback(
    () => {
      history.push('/search', { from: '/home' });
    },
    // [history]
  )
  const chengToas=(bool,title) => {
    setToasts({
      isToast: bool,
      titleToast:title,
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

  const newproducts = memoize(list => list.slice(0, 10))

  const onChatclick = () => { 
    getnum()
   
  }
  return (
    <ContainerWrap>
      <NavBar
        mode="dark"
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
      
          >
            <div
              onClick={cats}
              style={{
              width: '22px',
              height: '22px',
              background: `url(${indexBasket}) center center /  16px 16px no-repeat` }}
            />
          </Badge>
        ]}
        style={{ backgroundColor: 'rgba(0, 204, 153, 1)' }}
      >
        <div style={{ border: '0', borderRadius: '.15rem', fontSize: '.12rem', width: '2.6rem', lineHeight: '.3rem', height: '.3rem', textAlign: ' center', color: 'rgb(204, 204, 204)', backgroundColor: '#fff' }}
          onClick={handleGotoSearch}>搜索</div>
      </NavBar>
      <div className="Container">
        <Swiper></Swiper>
        <NavList></NavList>
        <CountDown></CountDown>
        <NewProducts list={newproducts(props.list)}></NewProducts>
        <IndexList
           chatclick={onChatclick}
          list={props.list}
          dis=".12rem"
         
          style={{ backgroundColor: "#e42030e" }}
        ></IndexList>
      </div>
              {/* 弹出层 */}
              {
          toasts.isToast && (
            <Toastto
          isToast={toasts.isToast}
          titleToast={toasts.titleToast}
        ></Toastto>
          )
        }
    </ContainerWrap>
  )
}

ComListUi.propTypes = {
  list: PropTypes.array
}
export default ComListUi