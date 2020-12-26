import React, { Component } from 'react'

import ShareWrap from './Share.styled'

import share from '@a/images/iconku/share.png'
import { Grid, Modal, List, Button } from 'antd-mobile';

import weixin from '@a/images/iconku/weixin.png'
import pengyouquan from '@a/images/iconku/pengyouquan.png'
import weibo from '@a/images/iconku/weibo.png'
import qier from '@a/images/iconku/qier.png'
import lianjie from '@a/images/iconku/lianjie.png'
import wangye from '@a/images/iconku/wangye.png'

import Toastto from "@c/toastto/Toastto";


let dataArr = [
    {
        icon: weixin,
        text: '微信',
    },
    {
        icon: pengyouquan,
        text: '朋友圈',
    },
    {
        icon: weibo,
        text: '微博',
    },
    {
        icon: qier,
        text: 'QQ',
    },
    {
        icon: lianjie,
        text: '复制链接',
    },
    {
        icon: wangye,
        text: '网页打开',
    },

]
class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            isToast: false,
            titleToast: "",
            title: "",
            tabIndex: 0,
            stari: 0,
            routo: "",
            gid: 0,

        };
    }
    showModal = key => {
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    shareClick = (el, index) => {
        this.chengToas(true, "分享成功")

        this.setState({ modal: false })

        setTimeout(() => {
            this.chengToas()
        }, 10)
    }

    fxingClick = () => {
        return () => {
            console.log(this.state.isToast);

            this.showModal('modal')
        }
    }

    chengToas = (bool, title) => {
        this.setState({
            isToast: bool,
            titleToast: title,
        })

    }
    render() {
        return (
            <ShareWrap>
                <div onClick={this.fxingClick()}><img src={share} alt="" /></div>
                <Modal
                    popup
                    visible={this.state.modal}
                    onClose={this.onClose('modal')}
                    animationType="slide-up"
                >
                    <Grid data={dataArr}
                        hasLine={false}
                        columnNum={3}
                        activeStyle={false}
                        onClick={this.shareClick}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                                <img src={dataItem.icon} style={{ width: '30px', height: '30px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '12px', marginTop: '12px' }}>
                                    <span>{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                    />
                    <List>
                        <Button type="default" onClick={() => { this.setState({ modal: false }) }}>取消</Button>
                    </List>
                </Modal>

                {/* 弹出层 */}
                {
                    this.state.isToast && (
                        <Toastto
                            isToast={this.state.isToast}
                            titleToast={this.state.titleToast}
                        ></Toastto>
                    )
                }
            </ShareWrap>
        )
    }
}
export default  Share