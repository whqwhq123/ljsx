import styled from 'styled-components'
import play from '@a/images/vegetables/play.png'

const VideoWrap = styled.div`
    .father{
        position:relative;
        width:100%;
        height:100%;
        background: #eee;
    }
    video{
        display: inline-block;
        width:100%;
        height:100%;
        z-index:1;
    }
    .cover{
        width:100%; 
        height:100%;
        position:absolute;
        top: -3px;
        left: 0px;
        display:${props => props.cover ? props.cover : "flex"};
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
        z-index:999;
        .icon{
            width:.34rem;
            height:.24rem;
            background: url(${play}) no-repeat;
        }
        .bottom-cover{
            height:.36rem;
            line-height:.36rem;
            padding-left:.2rem;
            width:100%;
            background: rgba(102, 102, 102, 0.26);
            color:#FFFFFF;
            display:flex;
            justify-content:space-between;
        }
    }
`
export {
    VideoWrap,
}