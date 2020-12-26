import React, { Component } from 'react'
import { VegetableWarp } from './Vegetable.styled'
import Top from '../ui/Top'
import Share from '@c/vegetables/Share'
import Across from '../ui/Across'
import VegetableList from '../ui/VegetableList'
import Video from '../ui/Video'
import { get } from '@u/http'
import { withRouter } from 'react-router-dom'
@withRouter
class Vegetables extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schedule:[],
      dislist: [],
      artlist:[],
      mp4scr: [],
    };

  }


 
  async componentDidMount() {
    const scResult = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/schedule/findThum?offset=1&count=5')
    this.setState({
      schedule:scResult.schedule
    })
    const disResult = await get ('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/disclose/findThum?offset=1&count=3')
    this.setState({
      dislist:disResult.discloses
    })
    const result = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/recipe/findThum?offset=1&count=1')
    this.setState({
      mp4scr: result.recipes
    })

  }

  render() {
    return (
      <VegetableWarp>
        <div className="header" >
          <span></span>
          <h1>菜圈</h1>
          <Share></Share>
        </div>
        <Top></Top>
        <div className="content">
          <div className="gap"></div>
          <div className="con">
            <Across
              width = "0 0 1px 0"
              data={this.state.schedule}
            ></Across>
            <VegetableList data={this.state.dislist}></VegetableList>
            <div className="gap"></div>
            <Video
              data={this.state.mp4scr[0]}
              look={"none"}
            ></Video>
            <VegetableList data={this.state.dislist}></VegetableList>
            <div className="gap"></div>
            <Video
              data={this.state.mp4scr[0]}
              look={"none"}
            ></Video>
            <VegetableList data={this.state.dislist}></VegetableList>
          </div>
        </div>
      </VegetableWarp>
    )
  }
}
export default Vegetables 