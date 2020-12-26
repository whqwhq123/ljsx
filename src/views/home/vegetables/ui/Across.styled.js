import styled from 'styled-components'
import border from '@a/styles/border'

const AcrossWrap =border(styled.div`
padding: .1rem 0 .1rem .1rem;
.container{
    width:100%;
    display:flex;
    overflow-x:scroll;
    ul{
        flex:1;
        display:flex;
        li{
            width: 1.4rem;
            height:.8rem;
            margin-right:.1rem;
            overflow:hidden;
            border-radius:.03rem;
            position: relative;
            z-index:1;
            display:flex;
            justify-content:center;
            img{
                position: absolute;
                width:100%;
                height:100%;
                z-index:2;
            }
            p{
                position: absolute;
                width:100%;
                height:30%;
                text-align:center;
                top:70%;
                z-index:4;
                font-weight: 400;
                font-style: normal;
                color: #999999;
                font-size:.12rem;
                background: rgba(242, 242, 242, 1);
            }
        }
}
}


`) 

export {
    AcrossWrap
}