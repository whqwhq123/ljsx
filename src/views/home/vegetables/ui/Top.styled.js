import styled from 'styled-components'
const TopWrap = styled.div`
.top{
        height:1rem;
        background:rgba(0, 204, 153, 1);
        display:flex;
        align-items:center;
        justify-content:space-around;
       

        .tip{
            
            display:flex;
            flex-direction:column;
            padding:.15rem;
            div{
                width:.45rem;
                height:.45rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            span{
                /* background: #000; */
                line-height:.14rem;
                text-align: center;
                font-size:.14rem;
                color:#fff;
            }
        }

    }
`
export {
    TopWrap
}