import React from 'react';
import { TimeListWrap } from './TimeList.styled'
import LookAndComment from '@c/vegetables/LookAndComment'
import { useHistory } from 'react-router-dom'
const TimeList = (props) => {
        const history = useHistory()
        const hanleClick = (value) => {
                return () => {
                        history.push('/article', { from: '/time', value ,img:props.ingredients,id:value})
                }
        }
        return (
                <TimeListWrap {...props}>
                        {
                                props.data.map((value,index) => {
                                        return (
                                                <li
                                                        key={value.artId + index}
                                                        onClick={hanleClick(value.artId)}
                                                >
                                                        <div className="image">
                                                                <img src={value.scPic ? value.scPic:value.disPic} alt="" />
                                                        </div>
                                                        <h1>{value.artTitle}</h1>
                                                        <div className="bottom">
                                                                <div className="date">{value.artTime}</div>
                                                                <div className="location">
                                                                        <div className="loc"></div>
                                                                        <span>{value.disArea}</span>
                                                                </div>
                                                                {/* {props.children} */}
                                                                <div className="lac">
                                                                        <LookAndComment look = {value.look} sum = {value.count ? value.count :value.sum }></LookAndComment>
                                                                </div>
                                                        </div>
                                                </li>
                                        )
                                })
                        }
                </TimeListWrap>
        );
}

export default TimeList;


 // const result = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/schedule/findByMonth',{
        //     offset:this.state.offset,
        //     count:this.state.count,
        //     scMonth:tab.sub
        // })