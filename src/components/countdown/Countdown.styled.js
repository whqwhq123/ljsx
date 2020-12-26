import styled from 'styled-components';

const CountdownWrap=styled.div`
    background-color:#fff;
    margin-top:.12rem;
    display:flex;
    align-items:center;
    h1{
        color:rgb(255, 102, 102);
        padding:.12rem .12rem;
    }
    .clock{
        margin-left:auto;
        margin-right:.07rem;
        color:rgb(172, 172, 172);
        font-weight:400;
        font-size:.12rem;
        i{
            font-weight: 400;
            font-weight:.16rem;
            border:1px solid #ccc;
            border-radius:.03rem;
            margin:0 .04rem;
            padding:.035rem .035rem;
            color:rgb(158, 158, 158);
        }
        
    }
    
`

export {
    CountdownWrap
}