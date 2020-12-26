import React, { Component } from 'react'
import { ListWrap } from './VegetableList.styled'
import LookAndComment from '@c/vegetables/LookAndComment'
import { withRouter } from 'react-router-dom'


@withRouter
class VegetableList extends Component {
    hanleClick = (value) => {
        return () => {
            let { history } = this.props
            history.push('/article', { from: "/home", img:1,id:value})
        }
    }
    render() {
        const data = this.props.data
        return (
            <ul>
                {
                    data && data.map((value) => {
                        return (
                            <ListWrap
                                width="0 0 1px 0"
                                key={value.artId}>
                                <div
                                    className="content"
                                    onClick={this.hanleClick(value.artId)}
                                >
                                    <p>{value.artTitle}</p>
                                    <LookAndComment
                                        look = {value.look}
                                        sum = {value.sum}
                                    ></LookAndComment>
                                </div>
                                <div className="image"><img src={value.disPic} alt="" /></div>
                            </ListWrap >
                        )
                    })
                }
            </ul>
        )
    }
}
export default VegetableList



