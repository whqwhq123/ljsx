import styled from 'styled-components'

const Contain=styled.div`
  height: 100%;
  .am-navbar-left-icon{
    color:#ccc !important;
  }
  .am-navbar-title{
    color:#666 !important;
  }
  .demoTitle:before,
  .demoTitle:after {
    border-bottom: none;
  }
  .am-list-body{
    width:100%;
    height:auto;
    margin-top:.1rem;
  }
  .am-list{
    width:100%;
    position: relative;
    textarea{
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-size: 14px;
      color: #000000;
      }
    .am-textarea-label{
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      color: #868686;
      }
     .am-list-content{
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      color: #868686;
      }
      .am-list-extra{
        flex-basis: 68%;
        color: #000;
        font-size: 14px;
        line-height: 1.5;
        text-align: left;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-top: 7px;
        padding-bottom: 7px;
      }
      .tag{
        width:100%;
        height:.44rem;
        position: relative;
        .biao{
          font-family: 'PingFangSC-Regular', 'PingFang SC';
          height:.2rem;
          line-height:.2rem;
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: #868686;
          display:block;
          position: absolute;
          left:.15rem;
          top:.11rem;
        }
        .am-tag{
          position: absolute;
          top:.1rem;
        }
        .am-tag-active{
          color:#fff;
          background-color:rgba(0, 204, 153, 1);
        }
      }
  }

  
`
const ButtonC=styled.div`
  height:.5rem;
  width:3.5rem;
  margin: .1rem auto 0;
  color:#fff;
  line-height:.5rem;
  text-align:center;
  border-radius:.05rem;
  background-color: rgba(0, 204, 153, 1);

`


export {
  Contain,
  ButtonC
};