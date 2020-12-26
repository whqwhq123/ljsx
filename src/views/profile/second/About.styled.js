import styled from 'styled-components'

const Contain=styled.div`
    height: 100%;
  .am-navbar-left-icon{
    color:#ccc !important;
  }
  .am-navbar-title{
    color:#666 !important;
  }
`
const Main=styled.div`
  width:100%;
  height:100%;
  padding:0  .15rem;
  background-color:#fff;
  color:#999;
  overflow:auto;
  h1{
    font-size:.16rem;
    font-weight:normal;
    color:#555 !important;
    line-height:.5rem;
  }
  p{
    margin-bottom:.2rem
  }
  img{
    width:100%;
    height:auto;
  }
`


export {
  Contain,
  Main
};