import React, { Component } from 'react';
import { NavBar, Icon, WhiteSpace, Button } from 'antd-mobile';
import {RecdetailsWrap,H1Border} from './Recdetails.styled'
import left from '@a/images/iconku/left.png'
import collection from '@a/images/vegetables/collection.png'
import light from '@a/images/vegetables/collect-active.png'
import Share from '@c/vegetables/Share'
import Video from '@v/home/vegetables/ui/Video'
import NewProducts from '@v/home/comlist/ui/NewProducts'
import IndexList from '@c/indexlist/IndexList'

import { get } from '@u/http'
import memoize from 'memoize-one'

class Recdetails extends Component {
    constructor() {
        super()
        this.state = {
            vegetableList: [],
            collection:false,
            mp4scr:[],
        }
    }
    onLeftClick = () => {
        let { history } = this.props
        history.goBack()
    }
    hanleCollect = () => {
        this.setState({
            collection: !this.state.collection
        })
    }
    async componentDidMount() {
        const result = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/goods/findAll?offset=1&count=10')
        this.setState({
            vegetableList: result.goods
        })
        const mp4Result = await get(' http://39.97.248.187:8080/shop-1.0-SNAPSHOT/recipe/findByReId',{reId:this.props.location.state.id})
        this.setState({
            mp4scr:mp4Result.recipe
        })
       
    }
    render() {
        return (
            <RecdetailsWrap>
                <div className="header">
                <NavBar
                    mode="light"
                    icon={<Icon style={{ background: `url(${left}) no-repeat center` }} />}
                    onLeftClick={this.onLeftClick}
                    rightContent={[
                        <Icon key="0" style={{ background: `url(${this.state.collection ? light : collection}) no-repeat center`, marginRight: ".15rem" }} onClick={this.hanleCollect} />,
                        <Share key="10"></Share>,
                    ]}
                ></NavBar>
                </div>
                <div className="con">
                    <div className="videobox">
                        <Video 
                        cover={"none"} 
                        controls 
                        autoPlay
                        data = {this.state.mp4scr}
                        ></Video>
                        <div className="mes">
                            <h1>{this.state.mp4scr.reName}</h1>
                            <div className="info">
                                <p>{this.state.mp4scr.petname}</p>
                                <span>{this.state.mp4scr.reTime}</span>
                            </div>
                        </div>
                    </div>
                    <WhiteSpace></WhiteSpace>
                    <div className="veg">
                        <h1>这道菜所需菜品如下</h1>
                        <NewProducts list={this.state.mp4scr.goodsList ? this.state.mp4scr.goodsList :[] } disnone={"none"}></NewProducts>
                        <WhiteSpace></WhiteSpace>
                        <div className="btn">
                            <Button
                                style={{ background: "rgba(0, 204, 153, 1)", color: "#fff", width: "3.51rem", height: '.44rem' }}
    
                            // onClick={this.gotoClick}
                            >一键购买</Button>
                        </div>
                    </div>
                    <WhiteSpace></WhiteSpace>
                    <div className="like">
                        <H1Border 
                        width="0 0 1px 0">
                            <h1>猜您喜欢</h1></H1Border>
                        <IndexList
                            list={this.state.vegetableList}
                            dis=""
                        ></IndexList>
    
                    </div>
                </div>
            </RecdetailsWrap>
        );
    }
}

export default Recdetails;