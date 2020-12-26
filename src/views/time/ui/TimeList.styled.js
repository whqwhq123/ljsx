import styled from 'styled-components'
import location from '@a/images/vegetables/loaction.png'

const TimeListWrap = styled.ul`
        flex:1;
        height:100%;
        width:100%;
        overflow-y:scroll;
        li{
            width:100%;
                background-color: #fff; 
                padding-bottom:.15rem;
                .image{
                    height:1.5rem;
                    width:100%;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                h1{
                    font-weight: 400;
                    font-style: normal;
                    font-size: .16rem;
                    color: #666666;
                    margin:.1rem;
                }
                .bottom{
                    margin-left:.1rem;
                    display: flex; 
                    justify-content:space-between;
                    color: #BCBCBC;
                    font-size:.12rem;
                    .date{
                        display:${props => props.loc ? "none" : "flex" };
                    }
                    .location{
                        display:${props => props.loc? "flex" : "none" };
                        align-items:center;
                        color:rgba(0, 204, 153, 1);
                        .loc{
                            width:.2rem;
                            height:.2rem;
                            background: url(${location}) center no-repeat;
                        }
                    }
                }
        }
          

`
export {
    TimeListWrap
}