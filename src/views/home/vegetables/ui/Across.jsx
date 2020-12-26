import React from 'react'
import { AcrossWrap } from './Across.styled'
import { useHistory } from 'react-router-dom'

const Across = (props) => {
    const history = useHistory()
    const hanleArticleClick = (value) => {
        return () => {
            history.push('/article', { from:"/home",id:value})
        }
    }
    return (
        <AcrossWrap
            {...props}
        >
            <div className="container">
                <ul>
                    {
                        props.data && props.data.map((value,index) => {
                            return (
                                <li onClick={hanleArticleClick(value.artId)} key={value.artId + index}>
                                    <img src={value.scPic} alt="" />
                                    <p>{value.artTitle}</p>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </AcrossWrap>
    )
}
export default Across