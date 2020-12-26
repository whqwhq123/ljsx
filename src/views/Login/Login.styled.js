import styled from 'styled-components'
import homepic from '@a/images/iconku/u3225.png'
import companypic from '@a/images/iconku/u3827.png'

const Wrap=styled.div`
  height: 100%;
  width:100%;
  display:block;
  position: relative;
  background-color:rgba(242, 242, 242, 0.6);
  .back{
    display:block;
    position: absolute;
    left:.15rem;
    top:.15rem;
  }
  .create{
    position: absolute;
    left: 2.66rem;
    top: .15rem;
    width: .92rem;
    height: .17rem;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #00CC99;
    text-align: right;
  }
  .head{
    display:border-box;
    position:absolute;
    width:.82rem;
    height:.82rem;
    border:4px solid #fff;
    border-radius:.4rem;
    left:50%;
    transform:translateX(-50%);
    top:.8rem;
    background-color:#00CC99;
    .headPic{
      display:block;
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      width:.4rem;
      height:.32rem;
    }
  }
  .form{
    position: absolute;
    top:1.8rem;
    left:50%;
    transform:translateX(-50%);
    width: 3.4rem;
    height: 2.05rem;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 3px;
    -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    .phone{
      border-width: 0px;
      display:block;
      position: absolute;
      left: .25rem;
      top: .35rem;
      width: .14rem;
      height: .24rem;
      }
    .tel{
      position: absolute;
      left: .6rem;
      top: .32rem;
      width: 2.57rem;
      height: 0.34rem;
      background-color: transparent;
      font-family: 'ArialMT', 'Arial';
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      text-decoration: none;
      text-align: left;
      border-color: transparent;
      outline-style: none;
    }
    .line{
      display:block;
      border-width: 0px;
      position: absolute;
      left: .25rem;
      top: .7rem;
      width: 2.96rem;
      height: 2px;
      }
    .lock{
      border-width: 0px;
      display:block;
      position: absolute;
      left: .24rem;
      top: 1rem;
      width:17px;
      height:13px;
    }
    .lock1{
      border-width: 0px;
      display:block;
      position: absolute;
      left: .27rem;
      top: .94rem;
      width:11px;
      height:10px;
    }
    .line1{
      display:block;
      border-width: 0px;
      position: absolute;
      left: .25rem;
      top: 1.3rem;
      width: 2.96rem;
      height: 2px;
    }
    .password{
      position: absolute;
      left: .6rem;
      top: .92rem;
      width: 2.57rem;
      height: 0.34rem;
      background-color: transparent;
      font-family: 'ArialMT', 'Arial';
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      text-decoration: none;
      text-align: left;
      border-color: transparent;
      outline-style: none;
    }
    .eyeC{
      border-width: 0px;
      display:block;
      position: absolute;
      left: 2.9rem;
      top: 1.05rem;
      width:20px;
      height:11px;
    }
    .eyeO{
      border-width: 0px;
      display:block;
      position: absolute;
      left: 2.9rem;
      top: 1.0rem;
      width:20px;
      height:13px;
    }
    .forget{
      border-width: 0px;
      position: absolute;
      left: 2.6rem;
      top: 1.55rem;
      width: .57rem;
      height: .2rem;
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      color: #00CC99;
      }
    }
    .button{
      border-width: 0px;
      position: absolute;
      left: 50%;
      transform:translateX(-50%);
      top: 4.1rem;
      width: 3.4rem;
      height: .5rem;
      background: inherit;
      background-color: rgba(0, 204, 153, 1);
      border: none;
      border-radius: 3px;
      -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-style: normal;
      font-size: 16px;
      text-align:center;
      line-height:.5rem;
      color: #FFFFFF;
    }
    .wechat{
      border-width: 0px;
      display:block;
      position: absolute;
      left: 20%;
      transform:translateX(-50%);
      top: 5.2rem;
      width:29px;
      height:24px;
    }
    .qq{
      border-width: 0px;
      display:block;
      position: absolute;
      left: 50%;
      transform:translateX(-50%);
      top: 5.2rem;
      width:24px;
      height:24px;
    }
    .sina{
      border-width: 0px;
      display:block;
      position: absolute;
      left: 80%;
      transform:translateX(-50%);
      top: 5.2rem;
      width:31px;
      height:24px;
    }
    .weichat1{
      border-width: 0px;
      position: absolute;
      left: 20%;
      transform:translateX(-50%);
      top: 5.5rem;
      width: 25px;
      height: 17px;
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-style: normal;
      font-size: 12px;
      color: #AEAEAE;
      text-align: center;
    }
    .qq1{
      border-width: 0px;
      position: absolute;
      left: 50%;
      transform:translateX(-50%);
      top: 5.5rem;
      width: 25px;
      height: 17px;
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-style: normal;
      font-size: 12px;
      color: #AEAEAE;
      text-align: center;
    }
    .sina1{
      border-width: 0px;
      position: absolute;
      left: 80%;
      transform:translateX(-50%);
      top: 5.5rem;
      width: 25px;
      height: 17px;
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-style: normal;
      font-size: 12px;
      color: #AEAEAE;
      text-align: center;
    }
`
const Main = styled.div`
  
`


export {
  Wrap,
  Main
};