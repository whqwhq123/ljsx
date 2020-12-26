import React, { Component} from 'react'
import ShopCarUi from '../ui/ShopCarUi'
import {connect} from 'react-redux'
import {loadDataAction} from '../actionCreator'
const mapStateToProps = (state)=>{
 
  console.log(state.shopcar.goodlist)
    return {
        goodlist:state.shopcar.goodlist
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        loadData(){
            // console.log(localStorage.getItem('userState')==='null')
            if(localStorage.getItem('userState') === 'null' ) return
            dispatch(loadDataAction())
        }
    }
}
@connect(mapStateToProps,mapDispatchToProps)
class ShopCar extends Component {

    render() {
        return (
            <ShopCarUi goodlist={this.props.goodlist}></ShopCarUi>
        )
    }
    componentDidMount(){
        this.props.loadData()
    } 
    componentDidUpdate(){
        // console.log(this.props.goodlist)
    }
}

export default ShopCar