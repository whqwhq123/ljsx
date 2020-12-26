import React, { Component} from 'react'
import { NavBar, Tabs, Badge,Grid, Modal, List,Button} from 'antd-mobile';
import PropTypes  from 'prop-types'
import share from '@a/images/iconku/share.png'
import basket from '@a/images/iconku/basket.png'
import left from '@a/images/iconku/left.png'

import weixin from '@a/images/iconku/weixin.png'
import pengyouquan from '@a/images/iconku/pengyouquan.png'
import weibo from '@a/images/iconku/weibo.png'
import qier from '@a/images/iconku/qier.png'
import lianjie from '@a/images/iconku/lianjie.png'
import wangye from '@a/images/iconku/wangye.png'


import Details0 from "./Details0";
import Details1 from "./Details1";
import Details2 from "./Details2";
import Toastto from "@c/toastto/Toastto";

import { get } from "@u/http";



import { Tabtitle, Conbox } from './DetailsUi.Styled';
import emptyimg from '@a/images/iconku/emptyimg.png'

export default class DetailsUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isToast: false,
      titleToast:"",
      title: "",
      tabIndex: 0,//tab切换
      stari: 0,
      routo: "",
      gid: 0,
      dogtit: 4,
      badgeNum:0

    };

  }

   tabs = [
    { title: <Badge>产品介绍</Badge> },
    { title: <Badge >生长日记</Badge> },
    { title: <Badge dot>客户评价</Badge> },
  ];
  
   dataArr = [
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
  


  static propTypes = {
    shopcarNum:PropTypes.number,//购物车的数量
}
 // 模态框

 showModal = key  => {
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


    if (localStorage.getItem("userState") && localStorage.getItem("userState") !== "null") {
      this.chengToas(true, "分享成功")
    
      this.setState({modal:false})
    } else { 
     this.chengToas(true, "请先登陆")
    }
 
    setTimeout(() => { 
      this.chengToas()
    },10)
  }

  fxingClick = () => {
    return ()=>{
      console.log(this.state.isToast);

      this.showModal('modal')
    }
  }

   componentDidMount() { 

    this.getbadgeNum()
     if (!this.props.location.state) return;
     let { from, gid, title } = this.props.location.state
     console.log(from, gid, title);

    this.setState({
      routo: from,
      gid: gid,
      title:title||"非法进入"
    })

   
  }

  getbadgeNum = async () => {
     console.log("执行");
    if (localStorage.getItem("userState") && localStorage.getItem("userState") !== "null") { 
      let uid = JSON.parse(localStorage.getItem("userState")).user.uid
      
       let index = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/cart/findByUid?uid=${uid}`)
      console.log(index);
      if (index&&index.code!==1) { 
 
        this.setState({
          badgeNum: index.goods.length
    
        })
        console.log(this.state.badgeNum);
      }
        
     
     }
  }



   chengToas=(bool,title) => {
      this.setState({
        isToast: bool,
        titleToast:title,
      })
     
     
     
  }

  onTabindex = (index) => { 
    this.setState({
      tabIndex:index
    })
  }


  // 路由跳转
 toRou = () => { 
   if (localStorage.getItem("userState") && localStorage.getItem("userState") !== "null") {
     this.props.history.push("/goodscar", { from: "/details" })
     this.chengToas(true, "进入购物车")
   } else { 
    this.chengToas(true, "请先登陆")
   }

   setTimeout(() => { 
    this.chengToas()
  },10)
  }

  rouClick = () => { 
    
    console.log("1");

   this.props.history.push(this.state.routo)
    console.log(this.state.routo);
    
  }


  render() {
    return (
      <Conbox>
      {/* //导航栏 */}
      <NavBar
        mode="light"
        icon={<div style={{
          width: '11px',
          height: '18px',
          background: `url(${left}) no-repeat` }}
        />}
        onLeftClick={this.rouClick}
        rightContent={[
          <div
            onClick={this.fxingClick()}
            key="0"
            style={{
            width: '22px',
            height: '22px',
            marginRight: '16px',
          
            background: `url(${share}) center center /  16px 16px no-repeat` }}
          />,
          <Badge key="1" text={this.state.badgeNum} style={{
            left: '.12rem',
            width: '.16rem',
            top: '0',
            height: '.16rem',
            lineHeight: '.16rem',
            padding: '0',
            transform: 'scale(0.75)',
            transformOrigin: '0 0'
            
          }}
      
          >
            <div
              onClick={this.toRou}
              style={{
              width: '22px',
              height: '22px',
              background: `url(${basket}) center center /  16px 16px no-repeat` }}
            />
          </Badge>
         ,
        ]}
        ><Tabtitle >{this.state.title}</Tabtitle></NavBar>
      {/* 标签切换 */}
   
        <Tabs tabs={this.tabs}
          initialPage={this.state.tabIndex}
          page={this.state.tabIndex}
          prerenderingSiblingsNumber={false}
          useOnPan={false}
          swipeable={false}
          destroyInactiveTab={true}
          tabBarActiveTextColor="rgba(0, 204, 153, 1)"
          tabBarInactiveTextColor="rgb(153, 153, 153)"
          tabBarUnderlineStyle={{ 'backgroundColor': 'rgba(0, 204, 153, 1)',width: '17%',marginLeft: '8%',borderRadius: ".15rem", border: ' 1.5px rgba(0, 204, 153, 1) solid', overflow: "hidden" }}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => this.setState({ tabIndex: index })}
          style={{ display: 'flex', flexDirection: 'column', }}
 
       
        >
          {/* 产品介绍 */}
          <div style={{ display: 'flex', paddingBottom:'1.15rem', overflowY:"scroll", height: '100%',flexDirection:'column', backgroundColor: '#fff' }}>
            <Details0 gid={this.props.location.state.gid} getbadgeNum={this.getbadgeNum} title={ this.state.title}  onTabindex={ this.onTabindex}></Details0> 
          
         

              
          
          
          </div>        
          {/* 生长日记 */}
          <div style={{ display: 'flex',  overflow:"hidden",justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
          <Details1 gid={this.props.location.state.gid}></Details1>
          </div>
          {/* 客户评价 */}
          <div style={{ display: 'flex', overflow:"hidden", flexDirection:"column",  height: '100%', backgroundColor: 'rgba(242, 242, 242, 1)' }}>
          <Details2 gid={this.props.location.state.gid}></Details2>
          </div>
        </Tabs>
       
        
        {/* 模态框 */}
        <Modal
          popup
          visible={this.state.modal}
          onClose={this.onClose('modal')}
          animationType="slide-up"
        >          
          <Grid data={this.dataArr}
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
            <Button type="default" onClick={() => { this.setState({modal:false})}}>取消</Button>
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
    
      </Conbox>
    )
  }
}

