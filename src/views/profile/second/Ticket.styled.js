import styled from 'styled-components'
import up from '@a/images/iconku/u3473.png'
import down from '@a/images/iconku/u3705.png'

const Contain=styled.div`
  height: 100%;
  width:100%;
  .am-navbar-left-icon{
    color:#ccc !important;
  }
  .am-navbar-title{
    color:#666 !important;
  }
  main{
    height:100%;
    width:100%;
    padding-top:.1rem;
    position: relative;
    li{
      width:3.58rem;
      height:2.09rem;
      display:block;
      padding-bottom:.2rem;
      margin:0 auto;
      position:relative;
      .top{
        position:absolute;
        width:3.58rem;
        height:1.49rem;
        top:0;
        background-image:url(${up});
        .span1{
          display:block;
          position:absolute;
          left:.2rem;
          top:.55rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: #999999;
          text-align: center;
        }
        .span2{
          display:block;
          position:absolute;
          left:.2rem;
          top:.8rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          font-size: 20px;
          color: #666666;
        }
        .span3{
          position: absolute;
          right:.9rem;
          top:.5rem;
          font-family: 'PingFangSC-Light', 'PingFang SC Light', 'PingFang SC';
          font-weight: 200;
          font-style: normal;
          font-size: 28px;
          color: #00CC99;
        }
        .span4{
          display:block;
          position:absolute;
          right:.3rem;
          top:0rem;
          font-family: 'PingFangSC-Thin', 'PingFang SC Thin', 'PingFang SC';
          font-weight: 200;
          font-style: normal;
          font-size: 72px;
          color: #00CC99;
        } 
        .full{
          position: absolute;
          right: .1rem;
          top: .9rem;
          width: 1.21rem;
          height: 0.24rem;
          background-color: rgba(0, 204, 153, 1);
          border: none;
          border-radius: 0.64rem;
          font-size: 14px;
          color: #FFFFFF;
          line-height:0.24rem;
          text-align:center;
        }
        
      }
      .second{
        position:absolute;
        width:3.58rem;
        height:.69rem;
        top:1.4rem;
        background-image:url(${down});
        .span5{
          position: absolute;
          top:.15rem;
          left:.2rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          color: #999999;
        }
        .span6{
          position: absolute;
          top:.35rem;
          left:.2rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          color: #999999;
        }
        .use{
          position: absolute;
          width: 1.21rem;
          height: .37rem;
          background-color: rgba(255, 102, 102, 1);
          border-radius: 3px;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: #FFFFFF;
          line-height:0.37rem;
          text-align:center;
          right:.15rem;
          top:.2rem;
        }
      }
    }
    
  }
  
  
`


export {
  Contain,
};