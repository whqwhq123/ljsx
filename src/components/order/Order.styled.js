import styled from 'styled-components'
import border from '@a/styles/border.js'

const BtnWrap =border(
    styled.button`
        width:.64rem;
        height:.3rem;
        background-color:#fff;
        /* border:none; */
        margin-right:0.1rem;
        /* border:1px solid #ccc; */
        border-radius:0.02rem;
        font-size:.12rem;
        color:#666;
    `
) 
const BtnBox = styled.div`
    margin-top:0.08rem;
    display:flex;
    a{
        width:.64rem;
        height:.3rem;
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
        border-bottom:1px solid #efefef;
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
   
            border-bottom:1px solid #efefef;
            p{
                font-size:0.13rem;
                color:#999;
                span{
                    width:.18rem;
                    height:.18rem;
                    font-size:.12rem;
                    color:#FF6666;
                    border:1px solid #FF6666;
                    margin-right:0.03rem;
                    border-radius:0.02rem;
                }
            }
            .newUser{
                color:#00CC99;
            }
            h3{
                font-size:.13rem;
                color:${props=> props.color === '' ? "#666" : props.color};
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
const PayMethodWrap = styled.div`
    background-color:#fff;
    h1{
        height:.44rem;
        font-weight:normal;
        font-size:.14rem;
        color:#333;
        line-height:.44rem;
        border-bottom:1px solid #efefef;
        padding-left:.15rem;
    }
    ul{
        li{
            height:.54rem;
            display:flex;
            align-items:center;
            justify-content:space-between;
            border-bottom:1px solid #efefef;
            padding-left:.15rem;
            padding-right:.15rem;
            span{
                padding-left:.15rem;
                font-size:.14rem;
                color:#999;
            }
 
        }
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
                img{
                    height:100%;
                    width:100%;
                }
            }
            p{
                padding-left:.15rem;
                display:flex;
                flex-direction:column;
                font-size:.12rem;
                span{
                    font-size:.14rem;
                    width:2.2rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
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

    }

`
const Buton = border(
    styled.button`
            width:1.14rem;
            height:.35rem;
            border:none;
            font-size:.13rem;
            color:#999;
            /* border:1px solid #999; */
            background-color:#fff;
            line-height:.35rem;
            svg{
                margin-left:0.05rem;
            }
    `
)

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

const NoSelectWrap = styled.div`
    height:.5rem;
    background-color:#fff;
    margin-top:.06rem;
    margin-bottom:.06rem;
    padding-left:.15rem;
    display:flex;
    align-items:center;
    span{
        padding-left:.15rem;
        color:#30CA96;
    }
    div{
        flex:1;
        text-align:right;
        padding-right:.15rem;
    }

`

export{
    BtnWrap,
    BtnBox,
    OrderInfoWrap,
    PayMethodWrap,
    OrderList,
    Coupon,
    NoSelectWrap,
    Buton
}