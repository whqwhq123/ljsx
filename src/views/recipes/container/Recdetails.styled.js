import styled from 'styled-components'
import border from '@a/styles/border'
const RecdetailsWrap = styled.div`
    
    height:100%;
    display:flex;
    flex-direction:column;
   
    .con{
        flex:1;
        overflow-y:scroll;
    }
    .mes{
        height:.7rem;
        width:100%;
        background: #fff;
        display:flex;
        padding:.1rem;
        flex-direction:column;
        justify-content:center;
        h1{
                font-weight:400;
                color:#666;
                font-size:.16rem;
            }
        .info{
            padding:.1rem 0;
            display:flex;
            justify-content:space-between;
            color:#999;
            font-size:.12rem;
            
        }
    }
    .veg{
        background: #fff;
        display:flex;
        flex-direction:column;
        padding-bottom:.15rem;
        h1{
            padding:.15rem;
            color:rgba(0, 204, 153, 1);
            font-size:.14rem;
            font-weight:400;
        }
        .btn{
            display:flex;
            justify-content:center;
        }
    }
    .like{
        background: #fff;
        height:100%;
        h1{
            font-weight: 500;
            font-style: normal;
            font-size: .15rem;
            color: #999999;
            text-align:center;
            height:.4rem;
            line-height:.4rem;
        }
    }
`
const H1Border = border(styled.div``)

export {
    RecdetailsWrap,
    H1Border
} 