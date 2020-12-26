import styled from 'styled-components'
import go from '@a/images/iconku/u1384.png'
const Contain=styled.div`
  height: 100%;
  width:100%;
  .am-navbar-left-icon{
    color:#ccc !important;
  }
  .am-navbar-title{
    color:#666 !important;
  }
  .am-list-content{
    font-family: 'ArialMT', 'Arial' !important ;
    font-weight: 400 !important;
    font-style: normal !important;
    font-size: 13px !important;
    color: #333333 !important;
    text-align: center !important;
  }
  
  main{
    height:6.12rem;
    width:100%;
    position: relative;
    .top{
      width:100%;
      height:1.5rem;
      background-color:#fff;
      margin-top:.1rem;
    }
    .bottom{
      width:100%;
      height:1rem;
      background-color:#fff;
      margin-top:.2rem;
    }
    .top-list{
        width: 100%;
        height: .5rem;
        position: relative;
        background: inherit;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(242, 242, 242, 1);
        background-image:url(${go});
        background-repeat:no-repeat;
        background-position-y:.15rem;
        background-position-x:3.5rem;
        .name{
          line-height:.5rem;
          text-align:left;
          margin-left:.13rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: #6B6B6B;
        }
        .text{
          position: absolute;
          right: .3rem;
          line-height:.5rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: #CCCCCC;
          text-align: right;
        }
      }
      #head{
        background-image:none;
        p{
          width:.3rem;
          height:.3rem;
          border-radius:.15rem;
          position: absolute;
          top:.1rem;
          right:.2rem;
          overflow:hidden;
          background-color:orange; 
          img{
            width:.24rem;
            height:.26rem;
            position: absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
            display:block;
          }
        }
      }
      .footer{
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 0.44rem;
        background-color: rgba(255, 255, 255, 1);
        box-sizing: border-box;
        border-top: 1px solid rgba(242, 242, 242, 1);
        font-family: 'PingFangSC-Regular', 'PingFang SC';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color: #00CC99;
        line-height:.44rem;
        text-align:center;
      }
  }
`


export {
  Contain,
};