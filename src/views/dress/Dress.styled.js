import styled from 'styled-components'



const DressWrap = styled.div`
    h1{
        height:.44rem;
        background-color:#fff;
        display:flex;
        align-items:center;
        font-weight:normal;
        font-size:.18rem;
        color:#666;
        width:100%;
        justify-content:center;
        position: relative;
        svg{
            position:absolute;
            left:.1rem;
        }
    }

    ul{
        li{
            margin-top:.12rem;
            margin-bottom:.12rem;
            height:1rem;
            background-color:#fff;
            display:flex;
            align-items:center;
            padding-left:.12rem;
            h2{
                font-weight:normal;
                display:flex;
                flex-direction:column;
                padding-left:.1rem;
                flex:1;
                p{
                    color:#999;
                    font-size:.13rem;
                }
                div{
                    display:flex;
                    margin-bottom:.05rem;
                    span{
                        color:#333;
                        font-size:.13rem;
                   
                    }
                    p{
                        position: relative;
                        span{
                            position:absolute;
                            left:0.1rem;
                            top:0.015rem;
                            font-size:.11rem;
                            color:#FF9900;
                        }
                        margin-left:.15rem;
                    }

                }
            }
            h3{
                width:1.2rem;
                text-align:right;
                padding-right:.15rem;
            }

        }
    }
`


export {
    DressWrap,
}