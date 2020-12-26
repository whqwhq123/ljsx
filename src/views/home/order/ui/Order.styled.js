import styled from 'styled-components'
import border from '@a/styles/border'
const AllOrderWrap = styled.div`
    h1{
        height:.44rem;
        background-color:#fff;
        line-height:0.44rem;
        text-align:center;
        font-weight:normal;
        font-size:.18rem;

    }

`
const ProductWrap = styled.div`
    height:2rem;
    background-color:#fff;
    width:100%;
    margin-top:0.1rem;
    display:flex;
    flex-direction:column;
    /* padding-left:0.08rem;
    padding-right:0.06rem; */
    header{
        height:.44rem;
        /* background-color:skyblue; */
        padding-left:0.08rem;
        line-height:0.36rem;
        display:flex;
        justify-content:space-between;
        padding-right:0.15rem;
        p{
            color:red;
            font-size:0.12rem;
            line-height:.44rem;
        }
        span{
            line-height:.44rem;
        }
    }
    /* .content{
      
    } */
    footer{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        justify-content:center;
        .price{
            display:flex;
            padding-right:0.08rem;
            p{
                padding-right:0.1rem;

            }
            h2{
                font-weight:normal;
                em{
                    color:red;
                }
            }
        }

    }
`
const ContentBor = border(
    styled.div`
            height:.8rem;
            /* border-bottom:1px solid #ccc; */
            /* border-top:1px solid #ccc; */
            border-left:none;
            border-right:none;
            display:flex;
            align-items:center;
            
            section{
                width:.67rem;
                height:.67rem;
                background-color:pink;
                margin-left: 0.1rem;
                img{
                    height:100%;
                    width:100%;
                }
            }
            span{
                flex:1;
                text-align:center;
            }
    
    `
)
const BtnWrap = styled.button`
    width:.64rem;
    height:.3rem;
    background-color:#fff;
    border:none;
    margin-right:0.1rem;
    border:1px solid #ccc;
    border-radius:0.02rem;
    font-size:.12rem;
    color:#666;
`
const BtnBox = styled.div`
    margin-top:0.08rem;
    display:flex;
    a{
        width:.8rem;
        height:.32rem;
        background-color:#fff;
        border:none;
        margin-right:0.1rem;
        border:1px solid;
        border-color:#ccc;
        border-radius:0.03rem;
        font-size:.12rem;
        color:#666;
        line-height:.3rem;
    }
    a:last-child{
        border:1px solid ${props =>{
        return props.color === '' ? "rgb(204,204,204)" : props.color
        }};
        color:${props=> props.color === '' ? "#666" : props.color}
    }

`

const DetailHeadWrap = styled.div`
    h1{
        height:.44rem;
        background-color:#fff;
        line-height:0.44rem;
        font-weight:normal;
        font-size:.18rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding-right:0.1rem;
        padding-left:0.05rem;
    }

`
const StateWrap = styled.div`
    height:.6rem;
    background-color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:0.08rem;
    padding-right:.1rem;
    h1{
        height:100%;
        display:flex;
        align-items:center;
        span{
            display:inline-block;
            height:100%;
            padding-left:0.1rem;
            font-size:0.2rem;
            color:rgb(0,204,153);
            font-weight:normal;
            line-height:.6rem;

        }
    }
    div{
        height:100%;
        display:flex;
        align-items:center;
        span{
            color:rgb(0,204,153);
            font-size:0.13rem;
        }
    }
`
const DressWrap = styled.div`
    height:.96rem;
    background-color:#fff;
    margin:.15rem 0;
    display:flex;
    align-items:center;
    padding-left:0.1rem;
    padding-right:.1rem;
    div{
        padding-left:0.15rem;
        flex:1;
        h1{
            font-weight:normal;
        }
        p{
            color:#999;
        }
    }
    h2{
        width:1rem;
        text-align:right;
    }
`

const OrderList = styled.div`
  margin-bottom:.15rem;
    h1{
        height:.44rem;
        background-color:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-weight:normal;
        padding-left:.15rem;
        padding-right:0.1rem;
        border-bottom:1px solid #efefef;
        span{
            color:#999;
            font-size:.14rem;
        }
        p{
            em{
                color:rgb(0,204,153);
            }
            font-size:.12rem;
            color:#999
        }
    }
    ul{
        li{
            height:.91rem;
            border-bottom:1px solid #efefef;
            background-color:#fff;
            display:flex;
            padding-left:.15rem;
            align-items:center;
            position: relative;
            .imgbox{
                height:.67rem;
                width:.67rem;
                background-color:pink;
            }
            p{
                padding-left:.1rem;
                display:flex;
                flex-direction:column;
                font-size:.12rem;
                span{
                    font-size:.14rem;
                }
                i{
                    font-size:.12rem;
                    color:#999;
                }
                em{
                    font-size:.12rem;
                    color:#00CC99;
                }

            }
            h5{
                font-weight:normal;
                position:absolute;
                right:.1rem;
                top:0.15rem;
                color:#666666;
            }

        }
    }

    footer{
        height:.7rem;
        background-color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        button{
            width:1.14rem;
            height:.35rem;
            border:none;
            font-size:.13rem;
            color:#999;
            border:1px solid #999;
            background-color:#fff;
            line-height:.35rem;
            svg{
                margin-left:0.05rem;
            }
        }
    }

`
const MainWrap = styled.div`
    height:5.729rem;
    overflow-y:scroll;

`

const Coupon = styled.div`
    height:.5rem;
    background-color:#fff;
    margin-bottom:.15rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:.15rem;
    padding-right:.2rem;
    font-size:.14rem;
    color:#999;
    p{
        position: relative;
        span{
            font-size:.12rem;
            padding-right:.1rem;
        }
        svg{
           position: absolute;

        }
    }
`
const OrderInfoWrap = styled.div`
    margin-bottom:.15rem;
    h1{
        height:.44rem;
        background-color:#fff;
        font-weight:normal;
        display:flex;
        align-items:center;
        padding-left:0.15rem;
        color:#333;
        font-size:.14rem;
    }
    ul{
        li{
            height:.44rem;
            background-color:#fff;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding-left:.15rem;
            padding-right:.1rem;
            border-top:1px solid #efefef;
            border-bottom:1px solid #efefef;
            p{
                font-size:0.13rem;
                color:#999;
            }
            h3{
                font-size:.13rem;
                color:#666;
                font-weight:normal;
            }
        }
        h5{
            height:.5rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding-left:.15rem;
            padding-right:.1rem;
            background-color:#fff;
            span{
                font-weight:normal;
                font-size:.14rem;
                color:#333;
            }
            em{
                font-size:.18rem;
                color:#FF6666;
            }
        }
    }
`
const OrderFooterWrap = styled.div`
    height:.5rem;
    position:fixed;
    bottom:0;
    background-color:#fff;
    width:100%;
    display:flex;
    align-items:center;
    padding-left:.15rem;
    border-top:1px solid #ccc;
    justify-content:space-between;
    .showPrice{
        font-size:.13rem;
        color:#999;
        p{
            font-weight:normal;
            span{
            color:#FF6666;
            }
        }

    }

`
const OrderDetaInfo = styled.div`
    ul{
        li{
            display:flex;
            justify-content:space-between;
            align-items:center;
            height:.44rem;
            border-top:1px solid #efefef;
            border-bottom:1px solid #efefef;
            background-color:#fff;
            padding-left:.15rem;
            padding-right:.1rem;
            p{
                font-size:0.13rem;
                color:#999;
            }
            h3{
                font-size:.13rem;
                color:#666;
                font-weight:normal; 
            }
        }
    }
`

const PayOrderWrap = styled.div`
    margin-bottom:.15rem;
    h1{
        height:.44rem;
        background-color:#fff;
        display:flex;
        align-items:center;
        font-size:.18rem;
        color:#666;
        font-weight:normal;
        text-align:center;
        position:relative;
        justify-content:center;
        svg{
            position:absolute;
            left:.06rem;

        }
    }
`

const PaySuccessHeader = styled.div`
    h1{
        height:.44rem;
        background-color:#fff;
        text-align:center;
        line-height:.44rem;
        font-weight:normal;
        font-size:.18rem;
        color:#666;
    }

`
const PaySuccessWrap = styled.div`
    display:flex;
    justify-content:center;
    margin-top:.15rem;
    margin-bottom:.15rem;
    div{
        height:2.46rem;
        width:3.51rem;
        background-color:#fff;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        p{
            font-size:.18rem;
            color:#666;
            padding-top:.15rem;
            padding-bottom:.18rem;
        }
        span{
                width:1.04rem;
                font-size:.13rem;
                color:#999;
                em{
                    color:#FF6666;
                }
                i{
                    color:#666;
                }
            }

    }
`

const PaySuccessSelect = styled.div`
    display:flex;
    justify-content:space-between;
    padding-left:.1rem;
    padding-right:.1rem;
    div{
        width:1.7rem;
        height:.44rem;
        font-size:.13rem;
        color:#999;
        border:1px solid #999;
        text-align:center;
        line-height:.44rem;
        background-color:#fff;
    }

`
const NowDressWrap = styled.div`
    height:.7rem;
    background-color:#fff;
    padding-left: .1rem ;
    p{
        height:.35rem;
        display:flex;
        align-items:center;
        span{
            padding-left:0.06rem;
            color:#00CC99;
            font-size:.14rem;
            line-height:.14rem;
        }
    }
`
const SubmitOrderWrap = styled.div`
    header{
        h1{
            height:.44rem;
            background-color:#fff;
            display:flex;
            align-items:center;
            font-size:.18rem;
            color:#666;
            font-weight:normal;
            text-align:center;
            position: relative;
            a{
                position:absolute;
                left:.06rem;
                border:none;
                display:block;
                height:.44rem;
                &::before{
                    content:none !important ;
                }
            }
            span{
                display:flex;
                width:100%;
                justify-content:center;
            }
            
  
        }
    }
`
const SubmitFooter = styled.div`
    height:.44rem;
    position:fixed;
    width:100%;
    bottom:0;
    background-color:#fff;
    display:flex;
    align-items:center;

    div{
        height:100%;
        flex:1;
        display:flex;
        align-items:center;
        padding-left:.15rem;
        span{
            color:#999;
            em{
                color:#FF6666;
            }
        }
    }
    p{
        height:.44rem;
        width:1.41rem;
        background-color:rgba(0, 204, 153, 1);
        line-height:.44rem;
        text-align:center;
        color:#fff;
        font-size:.14rem;
    }

`
export {
    AllOrderWrap,
    ProductWrap,
    BtnWrap,
    BtnBox,
    DetailHeadWrap,
    StateWrap,
    DressWrap,
    OrderList,
    Coupon,
    OrderInfoWrap,
    OrderFooterWrap,
    MainWrap,
    OrderDetaInfo,
    PayOrderWrap,
    PaySuccessHeader,
    PaySuccessWrap,
    PaySuccessSelect,
    NowDressWrap,
    SubmitOrderWrap,
    SubmitFooter,
    ContentBor
}