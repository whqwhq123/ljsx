import styled from 'styled-components'
import emoji from '@a/images/vegetables/emoji.png'
import more from '@a/images/vegetables/more.png'

const ChatWrap = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    .container{
        flex:1;
        display:flex;
        flex-direction:column;
        height:100%;
    }
    .bottom{
    display:flex;
    padding:0 .1rem;
    height:.5rem;
    width:100%;
    background:rgba(242, 242, 242, 0.44);
    align-items:center;
    justify-content:space-between;
    border-top: 1px solid  rgba(228, 228, 228, 1);
    .icon{
        width:.32rem;
        height:.32rem;
        background: #000;
    }
    .text{
        width: 2.57rem;
        height: .36rem;
        border: 1px solid rgba(228, 228, 228, 1);
        border-radius:.03rem;
        input{
        width: 2.52rem;
        height: .34rem;
        font-size: .13rem;
        border-color: transparent;
    }
    }
    .emoji{
        background: url(${emoji});
    }
    .more{
        background: url(${more});
    }
    
}
`

export {
    ChatWrap
}