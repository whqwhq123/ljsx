import React, { Component } from 'react';
import { NavBar, Icon, Tabs, WhiteSpace } from 'antd-mobile';
import left from '@a/images/iconku/left.png'
import Share from '@c/vegetables/Share'
import { withRouter } from 'react-router-dom'
import TimeList from '../ui/TimeList'

import TimeWrap from './Time.styled'
import { get } from '@u/http'

@withRouter
class Time extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            offset:1,
            count:5,
            scMonth:1,
            artlist: [],
            dislist:[]
        }
    }
    renderContent = tab =>
    ( <TimeList
        data={this.props.Ingredients ? this.state.dislist : this.state.artlist}
        mon={tab.sub}
        loc={this.props.loc}
        ingredients = {this.props.Ingredients}
    >
    
    </TimeList>);
    onLeftClick = () => {
        let { history } = this.props
        history.goBack()
    }
    
    hanleClick = (tab) =>{
        const mon = tab.sub
        this.setState({
            scMonth:mon
        },async() =>{
            const result = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/schedule/findByMonth',{
            offset:this.state.offset,
            count:this.state.count,
            scMonth:this.state.scMonth
        })
            const disresult = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/disclose/findByMonth',{
                offset:this.state.offset,
                count:this.state.count,
                disMonth:this.state.scMonth
            })
        this.setState({    
            artlist: result.schedule,
            dislist:disresult.discloses
        })
        })
    }

    async componentDidMount() {
      
        const result = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/schedule/findByMonth',{
            offset:this.state.offset,
            count:this.state.count,
            scMonth:1
        })
        const disresult = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/disclose/findByMonth',{
                offset:this.state.offset,
                count:this.state.count,
                disMonth:1
            })
         this.setState({    
            artlist: result.schedule,
            dislist:disresult.discloses
        })
    }
    render() {
        const tabs = [
            { title: '1月' ,sub:1},
            { title: '2月' ,sub:2},
            { title: '3月',sub:3 },
            { title: '4月',sub:4 },
            { title: '5月',sub:5 },
            { title: '6月',sub:6 },
            { title: '7月',sub:7 },
            { title: '8月',sub:8 },
            { title: '9月',sub:9 },
            { title: '10月',sub:10 },
            { title: '11月',sub:11},
            { title: '12月',sub:12},
        ];
        return (
            <TimeWrap>
                <NavBar
                    mode="light"
                    icon={<Icon key ="1" style={{ background: `url(${left}) no-repeat center` }} />}
                    onLeftClick={this.onLeftClick}
                    rightContent={[
                        <Share key ="10"></Share>,
                    ]}
                >{this.props.history.location.state.name}</NavBar>
                <div className="con">
                    <WhiteSpace />
                    <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={8}/>}
                        prerenderingSiblingsNumber={false}
                        destroyInactiveTab={true}
                        tabBarActiveTextColor="rgba(0, 204, 153, 1)"
                        tabBarInactiveTextColor="rgb(153, 153, 153)"
                        tabBarUnderlineStyle={{ 'backgroundColor': 'rgba(0, 204, 153, 1)', width: '7%', marginLeft: '2.5%', borderRadius: ".15rem", border: ' 1.5px rgba(0, 204, 153, 1) solid', overflow: "hidden" }}
                        tabBarTextStyle={{ fontSize: '.14rem' }}
                        onTabClick = {this.hanleClick}
                    >
                         {this.renderContent}
                        
                    </Tabs>
                </div>
            </TimeWrap>
        );
    }
}

export default Time;