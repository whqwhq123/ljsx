import React, { useState ,useEffect} from 'react';
import { post ,get} from "@u/http";
import { NavBar, Icon,Modal } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import { Wrap, Main } from './Login.styled.js'
import back from '@a/images/iconku/u529.png'
import headPic from '@a/images/iconku/u4996.png'
import phone from '@a/images/iconku/u5000.png'
import line from '@a/images/iconku/u4997.png'
import lock from '@a/images/iconku/lock.png'
import lock1 from '@a/images/iconku/lock1.png'
import eyeC from '@a/images/iconku/eyeC.png'
import eyeO from '@a/images/iconku/eyeO.png'
import wechat from '@a/images/iconku/wechat.png'
import qq from '@a/images/iconku/qq.png'
import sina from '@a/images/iconku/sina.png'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';


const alert = Modal.alert;

const Login = (props) => {
  const [addClass, setAddClass] = useState(false);
  const history = useHistory();
  const [countData, setCountData] = useState();
  
  const showToast = () =>{
    Toast.info('请填入账号信息', 2);
  }
  const showToast2 = () =>{
    Toast.info('请填入正确的手机号', 2);
  }
  const showToast3 = () =>{
    Toast.info('账号或密码错误', 2);
  }

  const open = () => {
    setAddClass(true)
  }
  const close = () => {
    setAddClass(false)
  }
  useEffect(() => { 
    console.log(history.location);
  },[])
  const loginClick = () =>{
    if (!countData) {
      showToast();
      return;
    } else {
      console.log(countData.user);
      if (!(/admin/.test(countData.user)) && !(/^1[3|4|5|6|7|8][0-9]{9}$/.test(countData.user))  ) {
       

        showToast2();
        return
      } else {
        (async () => {
          let ru = await post(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/user/login`, { uname: countData.user, upwd: countData.password })
          if (ru.code === 0) {
            localStorage.setItem('userState', JSON.stringify(ru));
            Toast.info('登录成功，正在跳转...', 1);
            console.log(ru);
            setTimeout(() => {
              
              history.push('/home')
            }, 1000);
          } else {
            showToast3();
            console.log(ru);
          }
        })()
      }
    }
  }
  return (
    <Wrap>
      <img src={back} alt=""
      className="back"
      onClick={() => { 
        history.push('/Home')
      }}/>
      <span className="create" onClick={() => { 
        history.push('/SignIn')
      }}>
        创建账号
      </span>
      <div className="head">
        <img src={headPic} alt="" className="headPic"/>
      </div>
      <form action="" className="form">
        <img src={phone} alt="" className="phone"/>
        <img src={line} alt="" className="line"/>
        <input type="text" className="tel" placeholder='输入手机号码' onChange={
          (e)=>{
            let teleNum=e.target.value;
            setCountData({
              ...countData,
              user:teleNum,
            })}
        }/>
        <img src={lock} alt="" className="lock"/>
        <img src={lock1} alt="" className="lock1"/>
        <img src={line} alt="" className="line1"/>
        <input type={addClass ? 'text' : 'password'} className="password" placeholder='输入密码'
          onChange={
            (e)=>{
              let passNum=e.target.value;
              setCountData({
                ...countData,
                password:passNum,
              })}}
          />
        <img src={eyeC} alt="" className="eyeC" style={{
              display: `${addClass ? "none" : "block"}`,
          }} onClick={open}/>
        <img src={eyeO} alt="" className="eyeO" style={{
              display: `${addClass ? "block" : "none"}`,
          }} onClick={close} />
        <span className="forget">忘记密码</span>
      </form>
      <div className="button" onClick={
        loginClick
      }>登录</div>
      <img src={wechat} alt="" className="wechat"/>
      <img src={qq} alt="" className="qq"/>
      <img src={sina} alt="" className="sina"/>
      <span className="weichat1">微信</span>
      <span className="qq1">QQ</span>
      <span className="sina1">微博</span>
    </Wrap>
  );
}

export default Login;