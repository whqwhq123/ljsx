import styled from 'styled-components'
import border from '@a/styles/border'

const Container=styled.div`
  flex:1;
 height:100%;
`

const CateListWrap=border(styled.div`
        background-color:#fff;
        display:flex;
        h2{
          padding:.12rem .12rem;
          color:rgb(153, 153, 153);
        }
        p{
            padding:.12rem .12rem 0;
            margin-left:auto;
            color:rgb(153, 153, 153);
            font-size:.12rem;
        }
        

`)

export {
    CateListWrap,
    Container
}