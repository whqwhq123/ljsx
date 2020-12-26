import React,{Component} from 'react'
import {GoodsList,TabBar} from './ShopCar.styled'
import {incrementActor,decrementActor,deleteDateActor} from '../actionCreator'
import {connect} from 'react-redux'
import PropTypes  from 'prop-types'
import memoize from 'memoize-one'
import Plus from "@a/images/iconku/plus.png"
import Dess from "@a/images/iconku/dess.png"
import {withRouter} from 'react-router-dom'


const mapDispatchToProps = (dispatch)=> {
    return {
        increment(id){
            return () => {
                dispatch(incrementActor(id))
            }
        },
        decrement(id){
            return () =>{
                dispatch(decrementActor(id))
            }
        },
        deleteGood(cid,gid){
            return () =>{
                dispatch(deleteDateActor(cid,gid))
            }
        }
    }
}
@withRouter
@connect(null,mapDispatchToProps)
class ExistShopCar extends Component{
    // static propTypes = {
    //     goodlist:PropTypes.object
    // }
    tolPrice = memoize((list)=>{
        if (list.code === 1) return
        return list.goods.reduce((value,item)=>{
            return value+item.gprice*item.gnum
        },0)
    })
    getRandom = (num) =>{
        return Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,num-1));
    }
    getRanNum = (num) =>{
        var result = [];
         for(var i=0;i<num;i++){
            var ranNum = Math.ceil(Math.random() * 25)
             result.push(String.fromCharCode(65+ranNum))
         }
      return  result.join('');
    }
    gotoOrder = (shoplist)=>{
        return ()=>{
            // console.log(shoplist)
            const otime = new Date().toLocaleDateString().split("/").join(".")
            const num = this.getRandom(10)
            const En = this.getRanNum(2)
            const orderNum = En + num
            const oid = new Date().getTime()
            const goodPrice = this.tolPrice(shoplist).toString()
            const state = "0"
            const isNewUser = "1"
            // const packFee = "10"
            // const deliFee = "10"
            let oprice;
            let onum,uid;
            if(isNewUser === "1"){
                oprice = Number(goodPrice)+ 10
            }else{
                oprice = Number(goodPrice) + 20
            }
            
            const value = {
                goods:shoplist.goods,
                cart:shoplist.cart
                // orderList:{
                //     otime,
                //     onum:shoplist.goods.length,
                //     oid,
                //     state,
                //     oprice,
                //     // isNewUser,
                //     // packFee,
                //     // deliFee,
                //     // oprice,
                //     uid
                // }

            }
            // console.log(value)
            
            // 生成订单的信息，如订单号，创建时间，然后组合成一个订单对象
            // 通过路由传给下一个页面
          this.props.history.push("/submitorder",{value,from:'/shopcar'})
        }
    }
    render(){
    
        return(
            <>
                <GoodsList>
                    <ul>
                        {
                            this.props.goodlist.code !== 1 &&  this.props.goodlist.goods.map(value=>{
                                console.log(this.props.goodlist)
                                return(
                                    <article key={value.gid}>
                                        <li >
                                            <content>
                                                <div className='goodsimg'>
                                                    <img src={value.gpicture} alt=""/>
                                                </div>
                                                <div className='goodsinfo'>
                                                    <p>{value.gname}</p>
                                                    <h2>
                                                        <span>￥{value.gprice}</span>
                                                        <em>{value.gweight}g</em>
                                                    </h2>
                                                </div>
                                                <div className="stepper">
                                                    <span className='plus'>
                                                        <img src={Plus} alt="" onClick={this.props.increment(value.gid)}/>             
                                                    </span>
                                                    <p>{value.gnum}</p>
                                                    <span className='dess' >
                                                        <img src={Dess} alt="" onClick={this.props.decrement(value.gid)}/>
                                                    </span>                                            
                                                </div>
                                            </content>
                                        </li>
                                        <div className='delete' onClick={this.props.deleteGood(this.props.goodlist.cart.cid,value.gid)}>
                                                <svg t="1603360257572" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3051" width="0.26rem" height="0.26rem"><path d="M837.818182 302.545455 837.818182 884.363636c0 51.432727-41.704727 93.090909-93.090909 93.090909L279.272727 977.454545c-51.432727 0-93.090909-41.704727-93.090909-93.090909L186.181818 302.545455c-25.693091 0-46.545455-20.852364-46.545455-46.545455l0-46.545455c0-25.693091 20.852364-46.545455 46.545455-46.545455l139.636364 0 0-46.545455c0-25.739636 20.852364-46.545455 46.545455-46.545455l279.272727 0c25.693091 0 46.545455 20.852364 46.545455 46.545455l0 46.545455 139.636364 0c25.693091 0 46.545455 20.852364 46.545455 46.545455l0 46.545455C884.363636 281.739636 863.511273 302.545455 837.818182 302.545455zM232.727273 302.545455 232.727273 884.363636c0 25.693091 20.852364 46.545455 46.545455 46.545455l465.454545 0c25.693091 0 46.545455-20.852364 46.545455-46.545455L791.272727 302.545455C765.114182 302.545455 264.704 302.545455 232.727273 302.545455zM372.363636 162.909091 372.363636 139.636364c0-12.846545 10.426182-23.272727 23.272727-23.272727l232.727273 0C641.210182 116.363636 651.636364 126.789818 651.636364 139.636364l0 23.272727C629.108364 162.909091 372.363636 162.909091 372.363636 162.909091M814.545455 209.454545l-605.090909 0C196.608 209.454545 186.181818 219.880727 186.181818 232.727273c0 12.846545 10.426182 23.272727 23.272727 23.272727l605.090909 0C827.392 256 837.818182 245.573818 837.818182 232.727273 837.818182 219.880727 827.392 209.454545 814.545455 209.454545zM372.363636 418.909091c12.846545 0 23.272727 10.426182 23.272727 23.272727l0 325.818182C395.636364 780.846545 385.210182 791.272727 372.363636 791.272727c-12.846545 0-23.272727-10.426182-23.272727-23.272727l0-325.818182C349.090909 429.335273 359.517091 418.909091 372.363636 418.909091zM512 418.909091c12.846545 0 23.272727 10.426182 23.272727 23.272727l0 325.818182c0 12.846545-10.426182 23.272727-23.272727 23.272727-12.846545 0-23.272727-10.426182-23.272727-23.272727l0-325.818182C488.727273 429.335273 499.153455 418.909091 512 418.909091zM651.636364 418.909091c12.846545 0 23.272727 10.426182 23.272727 23.272727l0 325.818182c0 12.846545-10.426182 23.272727-23.272727 23.272727-12.846545 0-23.272727-10.426182-23.272727-23.272727l0-325.818182C628.363636 429.335273 638.789818 418.909091 651.636364 418.909091z" p-id="3052" fill="#e6e6e6"></path></svg>
                                            </div>
                                    </article>
                                )
                            })
                        }
                    </ul>
                </GoodsList>
                <TabBar>
                    <p>总计：<span>￥{this.tolPrice(this.props.goodlist)}元</span></p>
                    <button onClick={this.gotoOrder(this.props.goodlist)}>去结算</button>
                </TabBar>
            </>
        )
    }
}

export default ExistShopCar