import React, { Component } from 'react'
import ArticleWrap from './Article.styled'
import { NavBar, Icon, Toast } from 'antd-mobile';
import left from '@a/images/iconku/left.png'
import collection from '@a/images/iconku/collection.png'
import light from '@a/images/vegetables/collect-active.png'
import Share from '@c/vegetables/Share'
import Toastto from "@c/toastto/Toastto";
import Comments from '../ui/Comments'
import { withRouter } from 'react-router-dom'
import { get } from '@u/http'

@withRouter
class Article extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            pllist: [],
            collection: false,
            value: {},
            isToast:false
        };
    }
    hanleLeftClick = () => {
        let { history } = this.props
        history.goBack()
    }

    hanleCollect = (id) => {
        return () => {
            this.setState({
                collection: !this.state.collection
            })

            //   console.log(JSON.parse(localStorage.getItem("userState")).user.uid,id);
        }

    }
    async componentDidMount() {
        const result = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/article/findByArt', { artId: this.props.location.state.id })
        this.setState({
            value: result.art
        })
        const resultpl = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/remake/findByAid', { artId: this.props.location.state.id })
        this.setState({
            pllist: resultpl.remake
        })
    }



    render() {
        const value = this.state.value
        // console.log(value)
        return (
            <ArticleWrap {...this.props}>
                <NavBar
                    mode="light"
                    icon={<Icon style={{ background: `url(${left}) no-repeat center` }} />}
                    onLeftClick={this.hanleLeftClick}
                    rightContent={[
                        <Icon
                            key="0"
                            style={{ background: `url(${this.state.collection ? light : collection}) no-repeat center`, marginRight: ".15rem" }}
                            onClick={this.hanleCollect(value.artId)} />,
                        <Share key="10"></Share>,
                    ]}
                >{value.artTitle}</NavBar>
                {/* <Toastto
                    isToast={this.state.isToast}
                    titleToast="请先登录"
                ></Toastto> */}

                <div className="contain" key={value.art_id}>
                    <h1>{value.artTitle}</h1>
                    <div className="date">{value.artTime}</div>
                    <dl className="desc-img">
                        <dt>
                            <img src={value.artPic} alt="" />
                        </dt>
                        <dd>图片描述</dd>
                    </dl>
                    <p className="introduce">
                        {value.content}
                    </p>
                    <dl className="desc-img">
                        <dt>
                            <img src={value.artPic} alt="" />
                        </dt>
                        <dd>图片描述</dd>
                    </dl>
                    <dl className="desc-img">
                        <dt>
                            <img src={value.artPic} alt="" />
                        </dt>
                        <dd>图片描述</dd>
                    </dl>
                    <div className="item">
                        <h2>配料:</h2>
                        <p>
                            {value.artForm}
                        </p>
                    </div>
                    <div className="item">
                        <h2>香料配方:</h2>
                        <p>
                            {value.artSpice}
                        </p>
                    </div>
                    <Comments data={this.state.pllist}></Comments>
                </div>


                <div className="bottom">
                    <div className="emoji icon">
                    </div>
                    <div className='text'><input type="text" /></div>
                    <div className="more icon">
                    </div>
                </div>
            </ArticleWrap>
        )
    }
}
export default Article