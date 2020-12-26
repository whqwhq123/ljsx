import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailsUi from '../ui/DetailsUi'
// 映射State到当前 的组件上的Props 上
const mapState = state => { 
  console.log(state);
  return {
    shopcarNum:state.shopcar.goodlist.length
  }
}
//映射Dispatch到当前组件props上
const mapDispatch = dispatch => { 
  return {
   
  }
}
@connect(mapState,null)
class Details extends Component {

  
  render() {
    console.log(this.props.shopcarNum);
    return (
      <DetailsUi shopcarNum={this.props.shopcarNum}></DetailsUi>
    
    )
  }
}
export default Details