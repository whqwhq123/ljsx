import styled from 'styled-components'
import XinPin from '@a/images/iconku/xinpin.jpg'
const GrabFreshWrap = styled.div`
    overflow:hidden;
    header{
        height:.44rem;
        background-color:#fff;
        display:flex;
        align-items:center;
        padding: 0 0.15rem;
        justify-content:center;
        font-size:0.18rem;
        color:#666;
    }
    aside{
        height:1.2rem;
        background-image:url(${XinPin});
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        h1{
            font-size:.28rem;
            font-weight:650;
            color:#A1A1A1;
        }
        p{
            font-size:.14rem;
            color:#BCBCBC;
            font-weight:650;
        }
    }

`
const FreshListWrap = styled.div`
    width:100%;
    ul{
        li{
            margin-top:.15rem;
            height:1.24rem;
            background-color:#fff;
            padding-left:.15rem;
            padding-right:.1rem;
            width:100%;
            display:flex;
            align-items:center;
            .imgbox{
                height:1rem;
                width:1.26rem;
                position: relative;
                display:flex;
                justify-content:center;
                align-items:center;
                img{
                    height:100%;
                    width:100%;
                }
                p{
                    position:absolute;
                    z-index:999;
                }
                div{
                    height:100%;
                    width:100%;
                    position: absolute;
                    background-color:#ccc;
                    opacity:0.7;
                }
            }
            .content{
                padding-left:.1rem;
                height:1rem;
                flex:1;
                background-color:#fff;
                display:flex;
                flex-direction:column;
                justify-content:center;
                p{
                    font-size:.14rem;
                    color:#333;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                .garb{
                    width:100%;
                    .num{
                        width:100%;
                        display:flex;
                        align-items:center;
                        h3{
                            width:1.28rem;
                            height:.1rem;
                            background-color:#ccc;
                            border-radius:.12rem;
                        }
                        span{
                            flex:1;
                            color:#FF9900;
                            font-size:.13rem;
                            text-align:center;
                        }
                    }
                    
                }
                .pricebox{
                    margin-top:0.04rem;
                    .price{
                        display:flex;
                        align-items:center;
                        span{
                            color:#FF6666;
                            font-size:.12rem;
                            em{
                                font-size:.2rem
                            }
                            i{
                                font-size:.14rem;
                            }
                        }
                        h3{
                            color:#ccc;
                            font-size:.12rem;
                            height:.3rem;
                            font-weight:normal;
                            text-decoration:line-through;
                            padding-top:.1rem;
                            padding-left:.1rem;
                        }
                        p{
                            flex:1;
                            display:flex;
                            justify-content:flex-end;
                            span{
                                width:.7rem;
                                height:.28rem;
                                color:#fff;
                                font-size:.12rem;
                                background-color:rgba(0, 204, 153, 1);
                                line-height:.28rem;
                                display:flex;
                                justify-content:center;
                                border-radius:0.02rem;
                            }
                        }

                    }
                }
            }
        }
    }


`


export {
    GrabFreshWrap,
    FreshListWrap
}
