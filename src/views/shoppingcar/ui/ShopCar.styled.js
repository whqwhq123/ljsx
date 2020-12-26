import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;

`

const Header = styled.div`
    height: .44rem;
    background: #fff;
    display: flex;
    align-items:center;
    padding: 0 0.1rem;
    justify-content: space-between;
    h3{
        display:flex;
        align-items:center;
    }
    p{
        font-size: 0.20rem;
        color: #000;
        line-height:.44rem;
        text-align:center;    
    }
    span{
        font-size:0.14rem;
        line-height:.44rem;
        text-align: right;
    }
    
`
const Title = styled.div`
    height:0.36rem;
    background-color: rgba(0,204,153);
    line-height:0.36rem;
    text-align:center;
    color:#fff;
`
const ImgBox = styled.div`
    height:4.58rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    p{
        font-size:0.2rem;
        color:#666;
        padding:0.05rem 0;
    }
    h5{
        font-weight:normal;
        color:rgb(0,204,153)
    }
`

const GoodsList = styled.div`
    height:5.87rem;
    overflow-y:scroll;
    padding-bottom:.48rem;
    ul{
        article{
            display:flex;
            overflow-x:scroll;
            position: relative;
            li{
                height:0.96rem;
                width:100%;
                display:flex;
                background-color:#fff;
                margin-top:0.12rem;
                align-items:center;
                padding:0.15rem;
               
                content{
                    width:100%;
                    display:flex;
                    height:.71rem;
                    .goodsimg{
                        width:0.9rem;
                        height:0.66rem;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .goodsinfo{
                        flex:1;
                        padding-left:0.15rem;
                        p{
                            color:rgb(176,166,176);
                            font-size:0.14rem;
                        }
                        h2{
                            margin-top:0.08rem;
                            font-weight:normal;
                            span{
                                font-size:0.14rem;
                                color: red;
                            }
                            em{
                                padding-left:0.1rem;
                                font-size:0.12rem;
                                color:rgb(176,166,176);
                            }
                        }
                    }
                    .stepper{
                        width:0.6rem;
                        height:100%;
                        text-align:center;
                        display:flex;
                        flex-direction:column;
                        justify-content:space-between;
                    }
                }
            }
            .delete{
                background-color:rgb(255,102,102);
                width:0.6rem;
                height:0.96rem;
                margin-top:0.12rem;
                display:flex;
                justify-content:center;
                align-items:center;
                position:absolute;
                right:-.6rem;
            }
        }
    }

`

const TabBar = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:.44rem;
    background-color:#fff;
    display:flex;
    padding-left:0.15rem;
    justify-content:space-between;
    p{
        height:100%;
        line-height:0.44rem;
        color:#666;
        font-size:.12rem;
        span{
            color:red;
        }
    }
    button{
        height:100%;
        width:1.16rem;
        border:none;
        background-color:rgb(0,204,153);
        color:#fff;
    }
    
`
export {
  Container,
  Header,
  Title,
  ImgBox,
  GoodsList,
  TabBar,
}