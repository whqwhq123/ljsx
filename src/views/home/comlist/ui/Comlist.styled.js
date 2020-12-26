import styled from 'styled-components';

const SwiperWrap = styled.div`
    background-color:#fff;
    height: 0;
    font-size: 0;
    padding-bottom: 43.30303030%;
    position:relative;
    .slider.am-carousel{
        position: static!important;
        background-color:#fff;
    }
    .space-carousel {
        overflow: hidden;
    }

`

const NavListWrap = styled.div`
    background-color:#fff;
    padding:.15rem .15rem;
    ul{
        display:flex;  
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: flex-end;
        li{
            justify-content:center;
            align-items:center;
            display:flex;
            flex-direction:column;
            p{
                /* display: inline-block; */
                display:flex;
                line-height:.3rem;
                font-size:.12rem;
                color:rgb(153, 153, 153);
            }
        }
    }
   
`

const NewProductsWrap = styled.div`  
        background-color:#fff;
        padding-left:.12rem;
        ul{
            display:flex;
            overflow-x:scroll;
            li{
                margin-right:.12rem;
                background-color:#fff;
                img{
                    width:1rem;
                    height :.7rem;
                    border-radius:.06rem;
                } 
                p{
                   text-align:center;
                   color:rgb(153, 153, 153);
                   font-size:.12rem;
                   /* img{
                       width:.01rem;
                       height:01rem;
                   } */
                   span{
                    color:rgb(255, 102, 102);
                    font-weight:bold;
                   }
                }  
            }
        }
`
const ContainerWrap = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    .Container{
        flex:1;
        overflow-y:scroll;
    }
    .am-navbar-right{
      justify-content:center;
      font-size: 16px;
      margin-right: 15px;
    }
`

export {
  SwiperWrap,
  NavListWrap,
  NewProductsWrap,
  ContainerWrap
}