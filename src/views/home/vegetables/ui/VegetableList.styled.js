import styled from 'styled-components'
import border from '@a/styles/border'
const ListWrap = border(
    styled.li`
    padding:.1rem;
    display:flex;
    justify-content:space-between;
    .content{
        width:2.16rem;
        margin-right:.1rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        p{
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            color: #999999;
            line-height: 20px;
        }
        
    }
    .image{
        width:1.24rem;
        height:.8rem;
        border-radius:.03rem;
        background: #e4e4e4;
        img{
            width:100%;
            height:100%
        }
    }
`
)
export {
    ListWrap
}