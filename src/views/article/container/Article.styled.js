import styled from 'styled-components'
import emoji from '@a/images/vegetables/emoji.png'
import more from '@a/images/vegetables/more.png'
const ArticleWrap = styled.div`
    display:flex;
    flex-direction:column;
    overflow:hidden;
    height:100%;
    .contain{
        flex:1;
        overflow-y:scroll;
        height:100%;
        display:flex;
        flex-direction:column;
        padding:.1rem;
        background: #fff;   
        h1{
            font-weight: 400;
            font-style: normal;
            font-size: .18rem;
            color: #666666;
        }
        .date{
            font-weight: 400;
            font-style: normal;
            color: #BCBCBC;
            font-size:.12rem;
        }
        .desc-img{
            padding-top:.1rem;
            dt{
                height:2.06rem;
                img{
                    width:100%;
                    height:100%
                }
            }
            dd{
                padding:.05rem;
                font-weight: 400;
                font-style: normal;
                color: #999999;
                text-align: center;
                font-size:.12rem;
            }
        }
        p{
            font-weight: 400;
            font-style: normal;
            font-size: .14rem;
            color: #999999;
            line-height: .24rem;
        }
        /* .desc-img1{
            display:${props => props.location.state.img ?  "block " :  "none" };

        } */
        .introduce{
            padding-top: .15rem;

        }
        .item{
            display:${props => props.location.state.img ?  "block " :  "none" };
            padding-top: .15rem;
            h2{
                font-weight: 400;
                font-style: normal;
                font-size: .14rem;
                color: #666666;
}
            }
        }
    }
    .bottom{
        display:flex;
        padding:0 .1rem;
        height:.5rem;
        width:100%;
        background:rgba(242, 242, 242, 0.44);
        align-items:center;
        justify-content:space-between;
        border-top: 1px solid  rgba(228, 228, 228, 1);
        .icon{
            width:.32rem;
            height:.32rem;
            background: #000;
        }
        .text{
            width: 2.57rem;
            height: .36rem;
            border: 1px solid rgba(228, 228, 228, 1);
            border-radius:.03rem;
            input{
            width: 2.52rem;
            height: .34rem;
            font-size: .13rem;
            border-color: transparent;
        }
        }
        .emoji{
            background: url(${emoji});
        }
        .more{
            background: url(${more});
        }
        
       
`
export default  ArticleWrap