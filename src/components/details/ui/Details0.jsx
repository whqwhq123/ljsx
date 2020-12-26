/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import plus from '@a/images/iconku/plus.png'
import memoize from 'memoize-one'
import dess from '@a/images/iconku/dess.png'
import dessav from '@a/images/iconku/dessav.png'
import emptyimg from '@a/images/iconku/emptyimg.png'
import { Grid ,Icon} from 'antd-mobile';
import dssold from '@a/images/iconku/dssold.png'
import dsfull from '@a/images/iconku/dsfull.png'
import dsfreight from '@a/images/iconku/dsfreight.png'
import Toastto from "@c/toastto/Toastto";
import { TabBar, Plusdess,Details0img,Details0pimg, Details2ItemCe,DetailsUIpl,DetailsUIplBot } from './DetailsUi.Styled';
import { get,postSop } from "@u/http";
import Star from "@c/star/Star";

import { withRouter } from "react-router-dom";

@withRouter
 class Details0 extends Component {

  constructor(props) { 
    super(props)


    this.state = {
      badgeNum: 0,//模拟的购物车的数量
      shoopNum: 1,//商品数量
      priceNum: 0,//模拟价格
      goodData: {},
      goodsImg:[],
      goodPdata: [],
      orderList:{

      },
      dataArr : [
        {
          icon: dssold,
          text: '已售 0',
        },
        {
          icon: dsfull,
          text: '满50起送',
        },
        {
          icon: dsfreight,
          text: '运费10元',
        }  
      ],
      isToast: false,
      titleToast:"",
    }
 
  }


  async componentDidMount() { 
    // const result = await get(`/graphiQL/detailsxq?gid=${this.props.gid}`)
    let result = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/intro/findByGid?gid=${this.props.gid}`)
    let resultpre = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/goods/queryPrice?gid=${this.props.gid}`)
    let ipicture = result.intro?JSON.parse(result.intro.ipicture) : [];
    let imgUrl = ipicture.splice(0, 1)
    let resultpl = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/comm/findAll?gid=${this.props.gid}&offset=1&count=1&cflag=1`)
    let comment = resultpl.comments ? resultpl.comments[0].comment : {}
    let result2 = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/goods/guess`)
    let objs = {
      ...result.intro,
      gnum: result.gnum,
      code: result.code,
      ipicture,
      imgUrl: imgUrl[0],
      gprice: resultpre.price,
      gweight: resultpre.weight,
      petname: resultpl.comments ? resultpl.comments[0].petname : "" ,
      uport: resultpl.comments ? resultpl.comments[0].uport : "" ,
      resultpl:  comment,
      answer: comment.answer,
      cflag: comment.cflag,
      commId: comment.commId,
      commTime:  comment.commTime?comment.commTime.split(" ")[1].slice(0, 5):"",
      fresh: comment.fresh,
      gid: comment.gid,
      msg: comment.msg,
      taste: comment.taste,
      uid: comment.uid,

      guess: result2.guess.slice(0, 3)
    }

    if (!objs) return
    
    this.setState({
      goodData: objs,
      dataArr : [
        {
          icon: dssold,
          text: objs.gnum&& objs.gid?'已售'+objs.gnum:'已售 0',
        },
        {
          icon: dsfull,
          text: "满50起送",
        },
        {
          icon: dsfreight,
          text: "运费十元"
        }  
      ],
      goodPdata: objs.iintro ? objs.iintro.split("。") : ["没有数据"],
      goodsImg:objs.ipicture? objs.ipicture.map((item, index) => {
        return (
          <Details0img
            key={index + 1}
            heightimg="1.7"
            topimg=".1"
            miniwidthimg={item?"100%":""}
            miniheightimg={item?"100%":""}
          >
            
            <img src={(`${item}` || `${emptyimg}`)} alt=""/>
        </Details0img>
        )
     }):null
    })
  

  }
  tolPrice = memoize((num, pr) => {
    let prs = pr * num || 0   
    return prs.toFixed(2)
  })
  

  setShoopListClick = async() => {   
    if (localStorage.getItem("userState")&&localStorage.getItem("userState")!=="null") {
  
      const Shopping = {
        "gid": this.state.goodData.gid,
        "gprice":this.state.goodData.gprice*this.state.shoopNum,
        "gnum": this.state.shoopNum,
        "uid":JSON.parse(localStorage.getItem("userState")).user.uid
  
      }
      if (Shopping.gid && Shopping.gprice && Shopping.gnum) {

        const result = await postSop(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/cart/add`, Shopping)
        if (!result.code) {
          this.props.getbadgeNum()
          this.chengToas(true, "加入菜篮子")
        } else {  
          this.chengToas(true, "加入失败")
        }
       
      } else { 
        this.chengToas(true, "没有数据")
      }
      
    } else { 
      this.chengToas(true, "请登陆")
    }

   
    //需要做个判断 和发送去请求
    // this.chengToas()
    setTimeout(() => { 
      this.chengToas()
    },10)

  }


   chengToas=(bool,title) => {
    this.setState({
      isToast: bool || false,
      titleToast:title,
    })
  }

  goShoopListClick = () => {
    if (localStorage.getItem("userState")&&localStorage.getItem("userState")!=="null") {
  
  

      const value = {
        goods: [{
          gid:this.state.goodData.gid,
          gpicture: this.state.goodData.imgUrl,
          gnum:this.state.shoopNum,
          gprice:this.state.goodData.gprice,
          gweight:this.state.goodData.gweight,
          gname: this.props.title,
          uid: JSON.parse(localStorage.getItem("userState")).user.uid,
          oprice:this.state.goodData.gprice*this.state.shoopNum,
          
        }]
    
      }
   
      this.props.history.push("/submitOrder", { from: '/fresh',  value})

      
    } else { 
      this.chengToas(true, "请登陆")
    }
    setTimeout(() => { 
      this.chengToas()
    },10)

  }




  render() {
    return (
      <>
                   
            {/* 商品详情列表 */}
            <div style={{flex:'1'}}>
              {/* 图片 */}
         
            {
              this.state.goodData.imgUrl? <Details0img miniwidthimg="100%" miniheightimg="100%"><img src={this.state.goodData.imgUrl} alt=""/> </Details0img>: <Details0img><img src={`${emptyimg}`} alt="" /></Details0img>
            }
              
              
             
          {/* 图标简介 */}
          <Grid data={this.state.dataArr}
            columnNum={3}
            activeStyle={false}
            itemStyle={{height:"60px" ,borderBottom:"1px solid rgba(242, 242, 242, 1)"}}
            renderItem={dataItem => (
                <div style={{ marginTop: '-5px'}}>
                <img src={dataItem.icon} style={{ width: '28px', height: '20px' }} alt="" />
                  <div style={{ color: '#00CC99', fontSize: '12px',fontWeight: '200',marginTop: '5px'}}>
                    <span>{dataItem.text}</span>
                  </div>
                </div>
              )}
          /> 
          {/*  详情介绍 */}
           <Details0pimg>
        
            {
               this.state.goodPdata&&this.state.goodPdata.map((item, index) =>( <p key={item + index}>{item}</p>))
 
            }
            {
              this.state.goodsImg.map(item=>item)
            }
  
         
          </Details0pimg>

          {/*  */}
               {/* 评论 */}
               <DetailsUIpl>
              <div className="DetailsUIplTop"
              onClick={() => { 
                this.props.onTabindex(2)
              }}
              >
              <p>客户评价 <span>{ JSON.stringify(this.state.goodData) !== "{}"?"100+":"0"}</span></p>            
                <Icon type="right" size={14} style={{ color: '#999999' }}  />
                </div>
                <Details2ItemCe>
                  <div className="cetop">
                    <div className="cetopleft">
                        <div><img src={this.state.goodData.uport||emptyimg} alt=""  /></div>
                      <div>
                    <p>{ this.state.goodData.petname}</p>
                        <Star star={Number(this.state.goodData.fresh)*2} />
                      </div>
                    </div>
                      <span>{this.state.goodData.commTime}</span>
                  </div>
                  <div className="cebut">
                      <p>{this.state.goodData.msg}</p>
                      {/* <div>
                        {
                          rowData.comm_pic && rowData.comm_pic.map(item => <div key={item+1}><img src={item} alt="" /></div>)
                        }
                      </div>*/}
                      {
                        this.state.goodData.answer&&  <p>商家评论：{this.state.goodData.answer}</p>
                      } 
                    
                  </div>
                </Details2ItemCe>
                 
              </DetailsUIpl>
              {/* 猜你喜欢 */}
            <DetailsUIplBot>
              <p>猜您喜欢</p>  
              <div className="item">
             
                {
                  this.state.goodData.guess &&this.state.goodData.gid && this.state.goodData.guess.map((item, index) => { 

                    return (
                     
                        <div key={ index+1}>
                          <div
                           
                            style={{
                              width: '1.08rem',
                              height: ".74rem",
                              backgroundColor: "rgba(242, 242, 242, 1)"
                            }}>
                            <img style={{ width: '100%', height: "100%" }} src={item.gpicture} />
                     </div>
                    <span>{item.gname}</span>
                          <p>{(item.gprice).toFixed(2)}<span>/5{ item.gweight}g</span></p>
              </div>
                     
                    )

                    
                  })
              }
      
              </div>
              
              
            </DetailsUIplBot>
           
          
            </div>

            {/* 底部选购 */}
            <TabBar>
          <div className='top'>
          <p>￥{this.state.goodData.gid?this.tolPrice(this.state.shoopNum,this.state.goodData.gprice):"0.00"} &nbsp;<span>{this.state.goodData.gid?this.state.goodData.gweight:"0"}g</span></p>
          
                <Plusdess >
                  <button
                      onClick={() => this.setState({shoopNum:this.state.shoopNum-1})}
                    disabled={this.state.shoopNum===1?true:false}
                    style={{
                    
                    background: this.state.shoopNum===1?`url(${dess}) center center /  18px 18px no-repeat`:`url(${dessav}) center center /  18px 18px no-repeat`
                }}></button>
              {/* gid */}
                    <p >{this.state.shoopNum}</p>
                  <button
                    onClick={() => this.setState({shoopNum:this.state.shoopNum+1})}
                    style={{
                    
                       background: `url(${plus}) center center /  18px 18px no-repeat`
                  }}></button>   
                    </Plusdess>
              </div>
              <div className='buttoms'>
                <button onClick={this.setShoopListClick}  >放入菜篮子</button>
                <button onClick={this.goShoopListClick}>立即购买</button>
              </div>
        </TabBar> 
          {/* 弹出层 */}
          {
          this.state.isToast && (
            <Toastto
          isToast={this.state.isToast}
          titleToast={this.state.titleToast}
        ></Toastto>
          )
        }
      </>
    )
  }
}

export default Details0