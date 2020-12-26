import styled from 'styled-components'

const TimeWrap = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    .con{
        flex:1;
        display:flex;
        flex-direction:column;
        height:100%;
        overflow:hidden;
    }
    .am-tabs-default-bar-tab {
        font-size:.13rem;
        font-weight: 400;
        font-style: normal;
        color: #999999;
    }
    .am-tabs-default-bar-tab-active {
    color: rgba(0, 204, 153, 1);
}
`
export default TimeWrap