import React from 'react'
import  LookAndComment from './LookAndComment.styled'
export default function lookAndComment(props) {
    return (
        // console.log(props)
        < LookAndComment {...props}>
            
            <div className="look item">
                <i></i>
                <span>{props.look}</span>
            </div>
            <div className="comment item">
                <i></i>
                <span>{props.sum}</span>
            </div>
        </ LookAndComment>
    )
}
