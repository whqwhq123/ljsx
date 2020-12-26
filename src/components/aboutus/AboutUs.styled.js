import styled from 'styled-components'

const Container=styled.div`
    height:100%;
    background-color:#fff;
    h1{
        color:rgba(0, 204, 153, 1);
        display:flex;
        font-size:.18rem;
        font-weight:300;
        justify-content:center;
        align-items:center;
        padding:.08rem 0;
        border-bottom:1px solid rgba(0, 204, 153, 1);  
    }
    ul{
        margin:.12rem;
        display:flex;
        width:100%;
        li{ 
            width:30%;
            margin-right:.1rem;
            background-color:#fff;
            img{
                width:100%;
                height:.6rem;
                border-radius:.06rem;
            } 
            p{
            text-align:center;
            color:rgb(153, 153, 153);
            font-size:.12rem;
            span{
                color:rgb(255, 102, 102);
                font-weight:bold;
            }
            }  
         }
        }

`

export {
    Container
}