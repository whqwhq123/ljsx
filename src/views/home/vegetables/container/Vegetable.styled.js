import styled from 'styled-components'

const VegetableWarp = styled.div`
       display:flex;
       flex-direction:column;
       height:100%;
       .header{
            height:.44rem;
            display: flex;
            align-items:center;
            background:#fff;
            justify-content:space-between;
            padding-right:.1rem;
            /* position: relative; */
       h1{
        padding-left:.1rem;
        color:#666666;
        font-size:.18rem;
        font-weight:normal;
    }
    }
    
    .content{
        flex:1;
        overflow:hidden;
        overflow-y:scroll;
        .con{
            background: #fff;
        }
    }
   
    
    .gap{
        height:.12rem;
        background: rgba(242, 242, 242, 0.658823529411765);
    }
    
`
export {
    VegetableWarp
}