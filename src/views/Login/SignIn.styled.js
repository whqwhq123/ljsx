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
    height: 2.45rem;
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
    .line2{
      display:block;
      border-width: 0px;
      position: absolute;
      left: .25rem;
      top: 1.9rem;
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
    .password1{
      position: absolute;
      left: .6rem;
      top: 1.52rem;
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
    .verify{
      border-width: 0px;
      display:block;
      position: absolute;
      left: .24rem;
      top: 1.54rem;
      width:17px;
      height:18px;
    }
    .border{
      display:block;
      box-sizing:border-box;
      position: absolute;
      left: .24rem;
      top: 2.05rem;
      width:18px;
      height:18px;
      border-radius:9px;
      border:1px solid #00CC99;
      }
    .checked{
      border-width: 0px;
      display:block;
      position: absolute;
      left: .24rem;
      top: 2.05rem;
      width:18px;
      height:18px;
      }
    .read{
      border-width: 0px;
      display:block;
      position: absolute;
      color:#aeaeae;
      left: .6rem;
      top: 2.05rem;
      width: 1.69rem;
      height: .2rem;
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
    }
    .agreement{
      border-width: 0px;
      position: absolute;
      left: 1.40rem;
      top: 2.05rem;
      color:#00cc99;
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
    }
    }
    
    .button{
      border-width: 0px;
      position: absolute;
      left: 50%;
      transform:translateX(-50%);
      top: 4.5rem;
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
`



export {
  Wrap,
};