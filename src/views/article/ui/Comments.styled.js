import styled from 'styled-components'
import border from '@a/styles/border'


const CommentWrap = styled.div `
padding-bottom:.1rem;
border-bottom:1px solid rgba(242, 242, 242, 1);
.title{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:.44rem;
    border-bottom:1px solid rgba(242, 242, 242, 1);
    h1{
        font-weight: 400;
        font-style: normal;
        font-size: .16rem;
        text-align: left;
    }
    span{
        font-weight: 400;
        font-style: normal;
        color: #999999;
        font-size:.12rem;
    }
}

ul{
    li{
        display:flex;
        padding:.2rem 0;
        width:100%;
        /* border-bottom:1px solid #999999; */

        .profile{
                    width:.35rem;
                    height:.35rem;
                    margin-right:.15rem;
                    img{
                        width:100%;
                        height:100%;
                        border-radius:50%;
                    }
                }
        .content{
            flex:1;
            width:100%;
            display:flex;
            flex-direction:column;
            overflow:hidden;
            .header{
                display:flex;
                justify-content:space-between;
                align-items:center;
                height:.35rem;
            }
            .image{
                padding-top:.1rem;
                display:flex;
                overflow:hidden;
                div{
                    width:1.13rem;
                    height:.7rem;
                    margin-right:.1rem;
                    flex-shrink: 0;
                    overflow:hidden;
                    img{
                        width:100%;
                        height:100%;
                    }

                }
            }
        }
    }
}

`
const ComListWrap = border(styled.li``) 

export{
    CommentWrap,
    ComListWrap
}