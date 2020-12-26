import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Carousel } from 'antd-mobile';
import { SwiperWrap } from './Comlist.styled'

import banner1 from "@a/images/iconku/banner1.jpg"
import banner2 from "@a/images/iconku/banner2.jpg"
import banner3 from "@a/images/iconku/banner3.jpg"
import banner4 from "@a/images/iconku/banner4.jpg"
import banner5 from "@a/images/iconku/banner5.jpg"

const banner = [{ name: banner1 }, { name: banner2 }, { name: banner3 }, { name: banner4 }, { name: banner5 }]

const Swiper = (props) => {
    // console.log(props)
    const [state, setState] = useState({

        imgHeight: 170,
    })
    const history = useHistory()
    const handleClick = useCallback(
        (id) => {
            // 
            return () => history.push('/details', { from: '/home', gid: id });
        },
        [history]
    )

    return (
        <SwiperWrap>
            <Carousel className="space-carousel"
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
                autoplay
                infinite
                style={{ paddingTop: ".12rem" }}
                dotStyle={{ width: '.24rem', borderRadius: '.07rem', height: '.05rem', backgroundColor: "rgb(242, 242, 242)" }}
                dotActiveStyle={{ width: '.24rem', height: '.05rem', borderRadius: '.07rem', backgroundColor: "rgba(0, 204, 153, 1)" }}
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => setState({ slideIndex: index })}
            >
                {
                    // props.list.length > 0 && props.list.map(value => {
                    banner.map((value, index) => {
                        return (
                            < img
                                key={index} src={value.name} alt=""
                                style={{ verticalAlign: 'top', borderRadius: ".09rem", width: "3rem", height: "1.2rem" }}
                                onLoad={() => {
                                    setState({ imgHeight: 'auto' });
                                }}
                            // onClick={handleClick(value.gid)}
                            />

                        )
                    })
                }
            </Carousel>
        </SwiperWrap>
    )

}

Swiper.propTypes = {
    list: PropTypes.array
}

export default Swiper