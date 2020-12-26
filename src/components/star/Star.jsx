import React, { Component } from 'react'

import styled from "styled-components";
import star0 from '@a/images/iconku/star0.png'
import star1 from '@a/images/iconku/star1.png'
import star2 from '@a/images/iconku/star2.png'

// import memoize from 'memoize-one'
const Boxs = styled.div`

.star{
    display: inline-block;
}
.star>span{
    display: inline-block;
    width: .12rem;
    
    height:.12rem;
    background-size: .12rem .12rem;
}
.star0{
    background-image: url(${star0});
}
.star1{
    background-image: url(${star1});
}
.star2{
    background-image: url(${star2});
}
`
class Star extends Component{
    constructor(props){
        super(props);
        this.state={
            starNum:['star0','star0','star0','star0','star0'] //设置默认背景图
        }
  }
  onClickstrt = (index) => { 
    return () => { 
      this.props.onClickstar(index)
    }
  }
  
  componentWillReceiveProps(nextProps) {
    // console.log(this.props.star,nextProps, "componentWillReceiveProps");
  
      this.getStar(Math.round(nextProps.star) / 2 + 1); //将传过来的类似7.3数字进行四舍五入再除2，得到的是类似2,3.5,6这种值


  
    
  }



  componentDidMount() {
    // console.log(this.props.star,"componentDidMount");
      this.getStar(Math.round(this.props.star) / 2 + 1); //将传过来的类似7.3数字进行四舍五入再除2，得到的是类似2,3.5,6这种值
      
    }
    getStar(num){
        let newStar = this.state.starNum.map((item)=>{ //当num=3.5时遍历后newStar数组变成['star2','star2','star2','star1','star0','star0']
            --num;
            return num>=1?'star2':((num>0)?'star1':'star0'); //两次三目运算
        })
        this.setState({
            starNum:newStar  //设置state为遍历后的新数组
        })
    }
    render(){
      return (
        
        <Boxs>
          <span className="star">
            {
              this.props.isStarClick? this.state.starNum.map((item, index)=>{
                return <span className={item} onClick={this.onClickstrt(index)} key={index+item}></span>
              }): this.state.starNum.map((item, index)=>{
                return <span className={item}  key={index+item}></span>
              })
            }
            
            {/* {
                this.state.starNum.map((item, index)=>{
                  return <span className={item} onClick={this.onClickstrt(index)} onChange={this.onChanges} key={index+item}></span>
                })
            } */}
          </span>
          </Boxs>
        )
    }
}
export default Star;