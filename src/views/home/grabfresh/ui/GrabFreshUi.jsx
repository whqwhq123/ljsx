import React,{useEffect}from 'react';
import {GrabFreshWrap} from './GrabFresh.styled'
import KeFu from '@a/images/iconku/kefu.png'
import Basket from '@a/images/iconku/basket.png'
import { Tabs,Badge} from 'antd-mobile'
import FreshList from './FreshList'
import {useHistory} from 'react-router-dom'
import meimoize from 'memoize-one'
import {useSelector,useDispatch } from 'react-redux'
import { loadDataFresh} from '../actionCreator'
const cate = meimoize((cate,goods)=>{
    // return {
    //         result:goods.result.filter((value=>{
    //             if(value.category.some((val)=>{
    //                 if(val===cate)
    //                 return true
    //             }))
    //             return value
    //     }))
    // }
    return goods.filter((value)=>{
        return value.bflag == cate
    })
})
const tabs = [
    { title: <Badge>农产品</Badge> },
    { title: <Badge>纯天然</Badge> },
    { title: <Badge>特产菜</Badge> },
  ];

const GrabFreshUi = (props) => {
    const history = useHistory()
    const newGoods = useSelector(state=>state.grabfresh.result)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(loadDataFresh())
    },[dispatch])

    return (
        <GrabFreshWrap>
            <header>
                {/* <img src={KeFu} alt=""/> */}
                <span>抢鲜</span>
                {/* <img src={Basket} alt="" onClick={()=>history.push("/goodscar")}/> */}
            </header>
            <aside>
                <h1>
                    新上市产品
                </h1>
                <p>最近三天上市推荐产品</p>
            </aside>
            <section>
                <Tabs tabs={tabs}
                        initialPage={0}
                        tabBarActiveTextColor={'rgb(0,204,153)'}
                        tabBarUnderlineStyle={{backgroundColor:'rgb(0,204,153)',border:'1px solid rgb(0,204,153)',width:'20%',marginLeft:'0.25rem'}}
                        tabBarTextStyle={{fontSize:'0.12rem',color:'#666'}}
                    >
                        <div style={{ display: 'flex',height: '5.26rem', backgroundColor: 'rgb(246,246,246)',width:'100%' }}>
                            <FreshList newGoods={newGoods && cate("0",newGoods) }></FreshList>
                        </div>
                        <div style={{ display: 'flex', height: '5.26rem', backgroundColor: 'rgb(246,246,246)',width:'100%'}}>
                          
                            <FreshList newGoods={newGoods && cate("1",newGoods)}></FreshList>
                        </div>
                        <div style={{ display: 'flex', height: '5.26rem', backgroundColor: 'rgb(246,246,246)',width:'100%'}}>
           
                            <FreshList newGoods={newGoods && cate("2",newGoods)}></FreshList>
                        </div>
                </Tabs>
            </section>
        </GrabFreshWrap>
    );
};

export default GrabFreshUi;