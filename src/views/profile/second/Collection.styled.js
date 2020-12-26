import styled from 'styled-components'

const Contain=styled.div`
  height:100%;
  width:100%;
  background-color:rgba(242, 242, 242, 0.658823529411765);
  position: relative;
  .am-navbar-left-icon{
    color:#ccc !important;
  }
  .am-navbar-title{
    color:#666 !important;
  }
  .delete{
    font-size:.14rem;
    color:rgba(0, 204, 153, 1);
  }
  
`
const List=styled.ul`
  position: absolute;
  bottom:0;
  left:0;
  width:100%;
  height:6.22rem;
  overflow-y:auto;
  background-color:#fbfbfb;
  h1{
    display:block;
    height:0.67rem;
    width:100%;
    background-color:rgba(242, 242, 242, 0.658823529411765);
    font-size:13px;
    font-weight:normal;
    line-height:.6rem;
    text-align:center;
    border-width: 0px;
    position: absolute;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    color: #BCBCBC;
  }
  li{
    width:95%;
    height:1rem;
    margin:0 auto;
    position:relative;
    border-bottom:1px solid #ddd;
    padding-top:.1rem;
    p{
      width:61%;
      height:auto;
      line-height:.2rem;
      font-size:15px;
      color:#666;
    }
    span{
      position: absolute;
      bottom:.1rem;
      width:auto;
      height:.2rem;
      display:block;
      font-size:12px;
      color:#aaa;  
    }
    span:nth-child(2){
      left:.2rem;
    }
    span:nth-child(3){
      left:1rem;
    }
    .icon1{
      position:absolute;
      left:0;
      bottom:.12rem;
    }
    .icon2{
      position:absolute;
      left:.82rem;
      bottom:.14rem;
    }
    img{
      display:block;
      position:absolute;
      width:35%;
      height:80%;
      right:0;
      top:.1rem;
    }
  }
`



export {
  Contain,
  List
};