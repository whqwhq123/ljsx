import React,{Component} from 'react'
import {TopWrap} from './Top.styled'
import time from '@a/images/vegetables/star.png'
import food from '@a/images/vegetables/shicai.png'
import menu from '@a/images/vegetables/shipu.png'
import {withRouter} from 'react-router-dom'
@withRouter
class Top extends Component{

    hanleTimeClick = () => {
        let {history} = this.props
        history.push( '/time', { name: ' 时光'} )
    }
    hanleFoodClick = () => {
        let {history} = this.props
        history.push('/ingredients', { name: '拾材'})
    }
    hanleMenuClick = () => {
        let {history} = this.props
        history.push('/recipes')
    }
    render() {
    return (
            <TopWrap>
                <div className="top">
                            <div className="tip" onClick={this.hanleTimeClick}>
                                <div className="time"><img src={time} alt="" /></div>
                                <span >时光</span>
                            </div>
                            <div className="tip" onClick={this.hanleFoodClick}>
                                <div className="food"><img src={food} alt="" /></div>
                                <span>拾材</span>
                            </div>
                            <div className="tip" onClick={this.hanleMenuClick}>
                                <div className="menu"><img src={menu} alt="" /></div>
                                <span>食谱</span>
                            </div>
                        </div>
            </TopWrap>
    )
    }
}
export default Top