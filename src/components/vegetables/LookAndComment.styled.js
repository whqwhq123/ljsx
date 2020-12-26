import styled from 'styled-components'
import look from '@a/images/vegetables/look.png'
import light from '@a/images/vegetables/look-light.png'
import comment from '@a/images/vegetables/comment.png'
import vegetables from '@a/images/vegetables/vegetables.png'

 const LookAndComment  = styled.div`
            display:${props => props.display ? props.display : "flex" };
            justify-content:space-between;
            .item{
                width:100%;
                height:100%;
                margin-right:.2rem;
                display:flex;  
                text-align:center;
                align-items:center; 
                i{
                   width:.35rem;
                   height:.2rem;
                   display:block;
                }
                span{
                    font-weight: 400;
                    font-style: normal;
                    color:${props => props.light ?" #fff" : "#C9C9C9;"};
                }
            }
            .look{
                i{
                    background: url(${props=> props.light ? light : look}) no-repeat center ;
                }
            }
            .comment{

                i{
                    background: url(${props=> props.other ? vegetables : comment}) no-repeat center;
                }
            }
 `
 export default LookAndComment