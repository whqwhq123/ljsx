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
  .am-list{
    width:3.5rem;
    margin:.1rem auto 0;
    textarea{
      font-size:.14rem
    }
  }
  .am-textarea-label{
    font-size:.14rem
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