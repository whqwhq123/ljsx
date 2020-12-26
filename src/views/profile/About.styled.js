import styled from 'styled-components'

const Contain=styled.div`
    width:3.5rem;
    height:auto;
    margin:1.1rem auto 0;
    padding:.05rem 0;
    background-color:#fff;
    border-radius:.05rem !important;
    .am-list-item{
      width:100%;
      height:.6rem
    }
    .am-list-body::before{
      display:none !important;
    }
    .am-list-body::after{
      display:none !important;
    }
    .am-list-content{
      color:#aaa !important;
      font-size:.14rem !important;
    }
    .my-list .spe .am-list-extra {
      flex-basis: initial;
    }
`


export {
  Contain,
};