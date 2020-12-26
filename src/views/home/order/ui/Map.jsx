import React from 'react';
import {DetailHeadWrap,NowDressWrap} from './Order.styled'
import Customer from '@a/images/iconku/kefu.png'
import {useHistory} from 'react-router-dom'
import Wuliu from '@a/images/iconku/wuliu.png'
import WuliuTime from '@a/images/iconku/wuliutime.png'
const Map = () => {
    const history = useHistory()
    return (
        <div
            style={{
                display:"flex",
                flexDirection:"column",
            }}
        >
            <DetailHeadWrap>
                <h1>
                    <svg t="1603685256851" onClick={()=> history.goBack()} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6077" width="0.2rem" height="0.2rem"><path d="M323.70859 512.813528l390.453736 390.453736-53.648874 53.645804L231.892441 528.292058 215.256552 512.833995l15.20326-14.46034L661.747559 67.086931l53.841256 53.844326L323.70859 512.813528z" p-id="6078" fill="#8a8a8a"></path></svg>
                    <img src={Customer} alt=""/>
                </h1>
            </DetailHeadWrap>
            <NowDressWrap>
                <p>
                    <img src={Wuliu} alt=""/>
                    <span>当前位置：<em>成绵高速路上</em></span>
                </p>
                <p>
                    <img src={WuliuTime} alt=""/>
                    <span>预计送到：<em>2019.01.19 17时</em></span>
                </p>
            </NowDressWrap>
            <section
                style={{
                    height:"5.53rem",
                }}
            >
                <iframe
                src="/map.html" 
                 style={{
                     height:"100%",
                     width:"100%",
                     border:"none"
                 }}
                 title="map"
                 ></iframe>
            </section>
        </div>
    );
};

export default Map;