import styled from 'styled-components'
import homepic from '@a/images/iconku/u3225.png'
import companypic from '@a/images/iconku/u3827.png'

const Contain=styled.div`
    height: 100%;
  .am-navbar-left-icon{
    color:#ccc !important;
  }
  .am-navbar-title{
    color:#666 !important;
  }
  
`
const Main = styled.div`
    position: relative;
    width: 100%;
    height: 6.1rem;
    background-color: rgba(242, 242, 242, 0.658823529411765);
    .slide-right {
          
          -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                  animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        @-webkit-keyframes slide-right {
          0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(.5rem);
                    transform: translateX(.5rem);
          }
        }
        @keyframes slide-right {
          0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(.5rem);
                    transform: translateX(.5rem);
          }
        }
    ul{
      width:100%;
      height:100%;
      li{
        position: relative;
        width: 4.25rem;
        height: 1rem;
        background-color: rgba(255, 255, 255, 1);
        box-sizing: border-box;
        border-bottom: 1px solid rgba(242, 242, 242, 1);
        margin-top:.12rem;
        margin-left:-.5rem;
        .name{
          width:.8rem;
          height:.16rem;
          overflow:hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          position: absolute;
          top:.15rem;
          left:.7rem;
          line-height:.16rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 500;
          font-style: normal;
          font-size: 15px;
          text-align: left;
          color: #333333;
        }
        .tel{
          display:block;
          width:auto;
          height:.16rem;
          position: absolute;
          top:.15rem;
          left:1.5rem;
          line-height:.16rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          text-align: left;
          color: #333333;
        }
        .address{
          display:block;
          width:2rem;
          height:auto;
          overflow:hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          position: absolute;
          top:.4rem;
          left:.7rem;
          line-height:.16rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: #999999;
        }
        .edit{
          display:block;
          width:.2rem;
          height:.22rem;
          position: absolute;
          right:.2rem;
          top:.35rem;
        }
        .home{
          width:.3rem;
          height:.2rem;
          display:block;
          position: absolute;
          text-align:center;
          left:2.5rem;
          top:.14rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          font-size: 11px;
          color: #FF9900;
          background-image:url(${homepic});
          background-repeat:no-repeat;
        }
        .company{
          width:.4rem;
          height:.2rem;
          display:block;
          position: absolute;
          text-align:center;
          left:2.5rem;
          top:.14rem;
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          font-weight: 400;
          font-style: normal;
          font-size: 11px;
          color: #00CC99;
          background-image:url(${companypic});
          background-repeat:no-repeat;
        }
        .delete{
          display:block;
          width:.18rem;
          height:.18rem;
          position: absolute;
          left:.15rem;
          top:.41rem;
        }
      }
    }
    footer{
      border-width: 0px;
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: .44rem;
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      background-color: rgba(0, 204, 153, 1);
      line-height:.44rem;
      text-align:center;
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      color: #FFFFFF;
      }
`


export {
  Contain,
  Main
};