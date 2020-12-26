import styled from 'styled-components'

const IndexListWrap = styled.div`
    background-color:#fff;
    padding-top:.12rem;
    display:flex;
    flex-direction: column;
    height:100%;
    justify-content:center;
    align-items:center;
    .imgdiv{
        width:1.6rem;
        height:.94rem;
        margin-bottom:.05rem;
        >img{
            width:100%;
            height:100%;
            border-radius:.09rem;
        }
    }
    .textdiv{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        font-size:.12rem;
        >p:first-child{
                    color:rgb(153,153,153);
                    img{
                        margin:0 .1rem;
                    }
                    span:first-child{
                        color:rgb(255, 102, 102);
                    }
                }
                >p:last-child{
                    color:rgb(153,153,153);
                    margin-right:.12rem;
                }
    }
`

const ListViewdiv = styled.div`
    margin-top:${props => props.dis};
    flex:1;
    display:flex;
    flex-direction:column;
    height:100%;
    .list-view-section-body{
    display:flex;
    flex-wrap:wrap;  
    justify-content: space-around;
    &:after {
            content: "";
            width: 50%;
            height: 0px;
            visibility: hidden;
        }
    }
    .sc-kfYqjs iTxAxu{
        height:100%
    }
    
    
`
export {
  IndexListWrap,
  ListViewdiv
}