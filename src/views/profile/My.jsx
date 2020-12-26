import React, { useState ,useEffect}  from 'react';
import { Header } from './My.styled'
import About from '@v/profile/About.jsx'
import Contact from '@v/profile/Contact.jsx'
import { useHistory } from 'react-router-dom';
import { get, post } from "@u/http";
import address from '@a/images/iconku/address.png'
import ticket from '@a/images/iconku/优惠券.png'
import collection from '@a/images/iconku/收藏.png'
import emptyimg from '@a/images/iconku/u3503.png'


const My = (props) => {
  const history = useHistory();
  const [countData, setCountData] = useState();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("userState") && localStorage.getItem("userState") !== "null") { 
        let name = JSON.parse(localStorage.getItem('userState')).user.uname;
        let pwd = JSON.parse(localStorage.getItem('userState')).user.upwd;
        let ru = await post(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/user/login`,{uname:name,upwd:pwd})
        setCountData(ru)
      }

    })()
  }, [])
  const userState=countData ? countData : null;
  return (
    <div className="cantain">
      <Header>
        <div>
          <div onClick={() => {
            if(userState){history.push('/Count')}else
            history.push('/Login')
              }}>
            <img style={{
                width:`${userState?(userState.user.uport ? "100%" :"30%"):null}`,
                height:`${userState?(userState.user.uport ? "100%" :"30%"):null}`
              }} src={userState ? (userState.user.uport ? userState.user.uport : emptyimg ): emptyimg} alt=""/>
          </div>
          <p onClick={() => {
             if(userState){history.push('/Count')}else
             history.push('/Login')
          }}>{userState ? (userState.user.petname?userState.user.petname:'林家生鲜新用户'):'登录/注册'}</p>
          <p onClick={() => {
             if(userState){history.push('/Count')}else
             history.push('/Login')
              }}>ID：{userState? userState.user.uid : "您当前还未登录"}</p>
          <div>
            <ul>
              <li onClick={() => {
                history.push('/Address')
              }}>
                <span className="icon">
                  <img src={address} alt="" />
                </span>
                <p className="font">地址管理</p>
              </li>
              <li onClick={() => {
                history.push('/Ticket')
              }}>
                <span className="icon">
                  <img src={ticket} alt="" />
                </span>
                <p className="font">优惠券</p>
              </li>
              <li onClick={() => {
                history.push('/Collection')
              }}>
                <span className="icon">
                  <img src={collection} alt="" />
                </span>
                <p className="font">收藏</p>
              </li>
            </ul>
          </div>
        </div>
      </Header>
      <About>
      </About>
      <Contact></Contact>
    </div>
  );
}

export default My;