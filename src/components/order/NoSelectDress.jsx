import React from 'react';
import {NoSelectWrap} from './Order.styled'
import NoDress from '@a/images/iconku/noDress.png'
import RightArrow from '@a/images/iconku/rightArrow.png';
import {useHistory} from 'react-router-dom'
const NoSelectDress = (props) => {
    const history = useHistory()
    // console.log(props.from)
    const from = props.from
    const {value}  = history.location.state
    return (
        <NoSelectWrap onClick={()=> history.push("/dressmange" ,{value,from})}>
            <img src={NoDress} alt=""/>
            <span>选择收货地址</span>
            <div>
                <img src={RightArrow} alt=""/>
            </div>
        </NoSelectWrap>
    );
};

export default NoSelectDress;