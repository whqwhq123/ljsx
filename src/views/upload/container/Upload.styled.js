import styled from 'styled-components'

const UploadWrap =  styled.div`
    .tip{
        background: rgba(255, 102, 102, 1);
        height:0.38rem;
        color:#fff;
        line-height:.38rem;
        display:flex;
        justify-content:center;
        font-size:.13rem;
        span{
            text-decoration:underline;
        }
    }
    .img{
        width:100%;
        height:1.7rem;
        background: #d7d7d7;
        display:flex;
        font-size:1rem;
        color:#eee;
        align-items:center;
        justify-content:center;
        position: relative;
        .filetype{
            position:absolute;
            width:100%;
            height:100%;
            opacity:0;
        }
    }
`
export default UploadWrap