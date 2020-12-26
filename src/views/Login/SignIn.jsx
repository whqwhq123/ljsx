import React, { useState ,useEffect} from 'react';
import { post } from "@u/http";
import { NavBar, Icon,Modal } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import { Wrap, Main } from './SignIn.styled.js'
import back from '@a/images/iconku/u529.png'
import headPic from '@a/images/iconku/u4996.png'
import phone from '@a/images/iconku/u5000.png'
import line from '@a/images/iconku/u4997.png'
import lock from '@a/images/iconku/lock.png'
import lock1 from '@a/images/iconku/lock1.png'
import eyeC from '@a/images/iconku/eyeC.png'
import eyeO from '@a/images/iconku/eyeO.png'
import verify from '@a/images/iconku/verify.png'
import checked from '@a/images/iconku/ischecked.png'

import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

const SignIn = (props) => {
  const [addClass, setAddClass] = useState(false);
  const [addClass1, setAddClass1] = useState(true);
  const [countData, setCountData] = useState();
  
  const history = useHistory();
  const showToast = () =>{
    Toast.info('请填入账号信息', 2);
  }
  const showToast2 = () =>{
    Toast.info('请填入正确的手机号', 2);
  }
  const showToast3 = () =>{
    Toast.info('请阅读并同意《用户协议》', 2);
  }
  const showToast4 = () =>{
    Toast.info('两次输入密码不一致', 2);
  }
  const showToast5 = () =>{
    Toast.info('注册成功！正在跳转至登录页面……', 1);
  }

  const open = () => {
    setAddClass(true)
  }
  const close = () => {
    setAddClass(false)
  }

  const loginClick = () =>{
    if(!countData){
      showToast();  
      return;
    }else{
      if(!addClass1){
        showToast3();
      }else{
        if(!(/^1[3|4|5|6|7|8][0-9]{9}$/.test(countData.user))){ 
          showToast2();}
        else{
          if(countData.password===countData.repassword){
            (async () => {
              let ru = await post(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/user/register?uname=${countData.user}&upwd=${countData.password}`)
              console.log(ru);
              if(ru.code===0){
                showToast5();  
                setTimeout(() => {
                  history.push('/Login')
                }, 1000);
              }else if(ru.code===2){
                Toast.info('手机号已注册，请直接登录',2)
              }
            })()
          }else{
            showToast4();  
            return;
          }
        }
      }
    }
  }
  return (
    <Wrap>
      <img src={back} alt=""
      className="back"
      onClick={() => { 
        history.push('/Login')
      }}/>
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
        
        <img src={verify} alt="" className="verify"/>
        <img src={line} alt="" className="line2"/>
        <input type='password' className="password1" placeholder='确认密码'
          onChange={
            (e)=>{
              let repassNum=e.target.value;
              setCountData({
                ...countData,
                repassword:repassNum,
              })}}
          />
        <div className="border" onClick={
          ()=>{
            setAddClass1(!addClass1)}
        }></div>
        <img src={checked} alt="" className="checked" style={{display:`${addClass1 ? 'block' : 'none'}`}} 
        onClick={
          ()=>{
            setAddClass1(!addClass1)}
        }/>
        <p className="read">已阅读并同意</p>
        <span className="agreement">《用户协议》</span>
      </form>
      
      <div className="button" onClick={
        loginClick
      }>注册</div>
      
    </Wrap>
  );
}

export default SignIn;