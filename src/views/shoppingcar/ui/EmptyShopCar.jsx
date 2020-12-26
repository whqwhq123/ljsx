import React from 'react'

import {ImgBox} from './ShopCar.styled'
import emptyCar from '@a/images/iconku/emptycar.png'
import {useHistory} from 'react-router-dom'
export default function EmptyCar(){
    const history = useHistory()
    return(
            <ImgBox>
                <img src={emptyCar} alt=""/>
                <p>菜篮子空空如也</p>
                <h5 onClick={()=>history.push("/home")}>前往抢购商品</h5>
            </ImgBox>
    )
}