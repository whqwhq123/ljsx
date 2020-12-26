import styled from 'styled-components'
import Eval from '@a/images/iconku/evaluation.png'
import border from '@a/styles/border.js'
const EvaluationHeader = styled.div`
    h1{
        height:.44rem;
        background-color:#fff;
        display:flex;
        align-items:center;
        font-weight:normal;
        font-size:.18rem;
        color:#666;
        width:100%;
        justify-content:center;
        position: relative;
        svg{
            position:absolute;
            left:.1rem;
        }
    }

`
const EvaluationWrap = styled.div`
    display:flex;
    justify-content:center;
    div{
        width:3.52rem;
        height:3.59rem;
        display:flex;
        justify-content:center;
        margin-top:.12rem;
        h3{
            width:100%;
            height:100%;
            background-image:url(${Eval});
            display:flex;
            flex-direction:column;
            align-items:center;
            font-weight:normal;
            justify-content:center;
            article{
                display:flex;
                align-items:center;
                margin-bottom:.15rem;
                width:2.81rem;
                span{
                    color:#666;
                    font-size:.14rem;
                    padding-right:.15rem;
                    height:.2rem;
                    line-height:.2rem;
                    display:inline-block;
                }
                i{
                    font-size:.12rem;
                    color:#D7D7D7;
                    padding-left:.2rem;
                }
            }
            footer{
                textarea{
                    width:2.98rem;
                    height:1.35rem;
                    font-family: 'ArialMT', 'Arial';
                    font-style: normal;
                    font-size: .13rem;
                    text-decoration: none;
                    color: #000000;
                    text-align: left;
                    border-color: transparent;
                    outline-style: none;
                    border-color:#efefef;
                }
   
            }
        }
    }

`

const AddPicture = border(

    styled.p`
        width:.54rem;
        height:.54rem;
        /* border:1px solid #ccc; */
        display:flex;
        align-items:center;
        justify-content:center;
        align-self:flex-start;
        margin-left:.25rem;
        margin-top:.1rem;
   
    `
) 

export {
    EvaluationHeader,
    EvaluationWrap,
    AddPicture
}