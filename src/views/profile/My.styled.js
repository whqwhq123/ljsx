import styled from 'styled-components'

const Header=styled.header`
  background-color: rgba(0, 204, 153, 1);
  width: 100%;
  height: 1.65rem;
  position: relative;
  >div{
    background-color:#fff;
    width:3.5rem;
    height:2rem;
    position: absolute;
    left:50%;
    bottom:-1rem;
    transform: translateX(-50%);
    border-radius:.05rem;
    >div:nth-child(1){
      background-color:orange;
      width:.7rem;
      height:.7rem;
      border-radius:.35rem;
      position: absolute;
      top:-0.35rem;
      left:50%;
      transform: translateX(-50%);
      overflow:hidden;
      img{
        width:30%;
        height:30%;
        position: absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
      }
     }
     p:nth-child(2){
        width:100%;
        height:.16rem;
        font-size:.16rem !important;
        line-height:.16rem;
        text-align:center;
        position: absolute;
        top:.45rem
     }
     p:nth-child(3){
        width:100%;
        height:.12rem;
        font-size:.12rem !important;
        line-height:.12rem;
        text-align:center;
        position: absolute;
        color:#ccc;
        top:.65rem
     }
     div:nth-child(4){
        width:100%;
        height:1rem;
        position: absolute;
        bottom:0;
        ul{
          width:90%;
          height:100%;
          margin:0 auto;
          border-top:1px solid #eee;
          display:flex;
          li{
            flex:1;
            height:100%;
            position: relative;
            span.icon{
              display:block;
              width:100%;
              height:.5rem;
              img{
                display:block;
                margin:.25rem auto 0
              }
            }
            p.font{
              display:block;
              line-height:.5rem;
              font-size:.14rem !important;
              width:100%;
              height:.5rem;
              color:#ccc;
            }
          }
        }

     }

  }
`


export {
  Header,
};