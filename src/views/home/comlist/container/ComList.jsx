import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadDataAsync } from '../actionCreator'
import ComListUi from "../ui/ComListUi";

// 映射State到当前 的组件上的Props 上
const mapState = state => {
  // console.log(state);
  return {
    list: state.comlist.list
  }
}
//映射Dispatch到当前组件props上
const mapDispatch = dispatch => {
  return {
    loadData() {
      dispatch(loadDataAsync())
    }
  }
}

@connect(mapState, mapDispatch)
class ComList extends Component {
  render() {
    return (
      <ComListUi
        list={this.props.list}
      ></ComListUi>
    )
  }

  componentDidMount() {
    this.props.loadData()
    // console.log(this.props.list);
  }

  componentDidUpdate() {
    // console.log(this.props.list);
  }
}
export default ComList