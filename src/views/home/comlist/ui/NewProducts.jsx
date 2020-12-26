import React, { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { NewProductsWrap } from './Comlist.styled'

const NewProducts = (props) => {

    const history = useHistory()
    //点击跳转详情页

    const handleClick = useCallback(
        (title, id) => {
            return () => history.push('/details', { from: '/home', gid: id, title: title })
        },
        [history]
    )

    return (
        <NewProductsWrap>
            <ul>
                {
                    props.list.map((value) => {
                        return (
                            <li
                                key={value.gid}
                                //跳转详情页
                                onClick={handleClick(value.gname, value.gid)}
                            >
                                <div>
                                    <img src={value.gpicture} alt="" />
                                </div>
                                <div className='text'>
                                    <p>{value.gname}</p>
                                    <p><span>{value.gprice}/</span>{value.gweight}g</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </NewProductsWrap>
    )
}
export default NewProducts