import React from 'react'
import {CommentWrap,ComListWrap} from './Comments.styled'
const Comments = (props) => {
    return (
        <CommentWrap>
            <div className='title'>
                <h1>精彩评论</h1>
                <span>{props.data.length }条</span>
            </div>
            <ul >
                {
                    props.data.map((value,index) => {
                        return (
                            <ComListWrap  width="0 0 1px 0"
                            key = {value.remake.rid}>
                                <div className='profile'><img src={value.uport} alt="" /></div>
                                <div className='content'>
                                    <div className='header'>
                                        <span>{value.petname}</span>
                                        <div className="date">{value.remake.comm_time}</div>
                                    </div>
                                    <p>{value.remake.rmsg}</p>
                                    <div className='image'>
                                        <div><img src={value.remake.rpic} alt=""/></div>
                                    {/* {
                                        value.rpic && value.rpic((value,index) => {
                                            return (
                                                
                                                    <div key ={index}><img src={value} alt="" /></div>
                                               
                                            )
                                        })
                                    } */}
                                    </div>

                                </div>

                                </ComListWrap>

                        )
                    })

                }

            </ul>

        </CommentWrap>
    )
}
export default Comments



