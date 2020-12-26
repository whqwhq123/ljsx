import React, { Component } from 'react';
import {IngredientsWrap} from './Ingredients.styled'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import Time from '@v/time/container/Time'
class Ingredients extends Component {
    gotoClick = () => {
        let {history} = this.props
        history.push('/upload')
    }
    
    render() {
        return (
            <IngredientsWrap>
                <div className="con"><Time loc Ingredients></Time></div>
                <div className="goto">
                    <Button 
                    style={{background:"rgba(0, 204, 153, 1)",color:"#fff",width:"3.51rem"}}
                    onClick = {this.gotoClick}
                    >我家有生态食材</Button>
                </div>
            </IngredientsWrap>
        );
    }
}

export default Ingredients;