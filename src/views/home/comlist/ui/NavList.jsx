import React from 'react'
import { useHistory } from 'react-router-dom'

import indexVt from '@a/images/iconku/indexvt.png'
import indexHx from '@a/images/iconku/indexhx.png'
import indexGh from '@a/images/iconku/indexgh.png'
import indexEgg from '@a/images/iconku/indexegg.png'
import indexLy from '@a/images/iconku/indexly.png'

import { NavListWrap } from './Comlist.styled'
const Navarr = [
    {
        imgicon: indexVt,
        navtitle: "蔬菜"
    },
    {
        imgicon: indexHx,
        navtitle: "海鲜"
    },
    {
        imgicon: indexGh,
        navtitle: "干货"
    },
    {
        imgicon: indexEgg,
        navtitle: "蛋类"
    },
    {
        imgicon: indexLy,
        navtitle: "粮油"
    },
]
const NavList = (props) => {
    const history = useHistory()

    const handleClick = (title, index) => {
        return () => {
            // console.log(title, index);
            history.push('/category', { from: '/home', title, index })
        }
    }

    return (
        <NavListWrap>
            <ul>
                {
                    Navarr.map((item, index) => {
                        return (
                            <li
                                onClick={handleClick(item.navtitle, index)}
                                key={index + 1}
                            >
                                <div> <img src={item.imgicon} alt="" /></div>
                                <p>{item.navtitle}</p>
                            </li>
                        )
                    })
                }
                {/* <li
                    onClick={handleClick}
                >
                    <div> <img src={indexVt} alt="" /></div>
                    <p ref={scref}>蔬菜</p>
                </li>
                <li
                    onClick={handleClick}
                >
                    <img src={indexHx} alt="" />
                    <p ref={hxref}>海鲜</p>
                </li>
                <li
                    onClick={handleClick}
                >
                    <img src={indexGh} alt="" style={{ width: ".32rem", height: ".32rem" }} />
                    <p ref={ghref}>干货</p>
                </li>
                <li
                    onClick={handleClick}
                >
                    <img src={indexEgg} alt="" />
                    <p ref={eggref}>蛋类</p>
                </li>
                <li
                    onClick={handleClick}
                >
                    <img src={indexLy} alt="" tyle={{ width: ".32rem", height: ".32rem" }} />
                    <p ref={oilref} >粮油</p>
                </li> */}
            </ul>
        </NavListWrap>
    );
}


export default NavList;