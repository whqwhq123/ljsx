import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import home from '@a/images/iconku/ihome.png'
import homeActive from '@a/images/iconku/ihomeac.png'
import fresh from '@a/images/iconku/ifresh.png'
import freshActive from '@a/images/iconku/ifreshac.png'
import vegetable from '@a/images/iconku/iveget.png'
import vegetableActive from '@a/images/iconku/ivegetac.png'
import order from '@a/images/iconku/iordr.png'
import ordrActive from '@a/images/iconku/iordrac.png'
import my from '@a/images/iconku/imy.png'
import myActive from '@a/images/iconku/imyac.png'
import Order from './order/container/Order'
import {ComList } from './comlist'
import { Vegetables } from './vegetables'
import GrabFresh from './grabfresh/container/GrabFresh'
import { withRouter } from "react-router-dom";
import My from '@v/profile/My.jsx'  
import Login from '@v/Login/Login.jsx'  

const TabsArr = [
  {
    title: "首页",
    icon: home,
    key: "home",
    selectedIcon: homeActive,
    selectedTab: "/home",
    componName: <ComList></ComList>
  },
  {
    title: "抢鲜",
    icon: fresh,
    key: "grabFresh",
    selectedIcon: freshActive,
    selectedTab: "/grabFresh",
    componName: <GrabFresh ></GrabFresh>
  },
  {
    title: "菜圈",
    icon: vegetable,
    key: "vegetables",
    selectedIcon: vegetableActive,
    selectedTab: "/vegetable",
    componName: <Vegetables ></Vegetables>
  },
  {
    title: "订单",
    icon: order,
    key: "order",
    selectedIcon: ordrActive,
    selectedTab: "/order",
    componName: <Order></Order> 
   },
   {
    title: "我的",
    icon: my,
    key: "my",
    selectedIcon: myActive,
    selectedTab: "/my",
    componName: <My ></My>
   },


]


@withRouter
 class Home extends Component{


  constructor(props) {
    super(props)
    this.state = {
      selectedTab: localStorage.getItem("selectedTab") || "/home",
      hidden: false,
      fullScreen: true,
      userSta:false
     
      
}
   }
  componentDidMount() { 

    localStorage.setItem("selectedTab", this.state.selectedTab)
    if (localStorage.getItem("userState") !== "null" &&localStorage.getItem("userState") ) {
      console.log("登陆");
      this.setState({
        userSta:true
      })
    }

  
  }


  


  onPressclk = (value) => {

    return () => { 
      console.log(this.state.userSta);
      if (value.key === "order" && !this.state.userSta) {
        console.log(1);
        console.log(this.props.history.push("/login", { from: "/home" }));
        localStorage.setItem("selectedTab", "/home")
      } else { 
        this.setState({
          selectedTab: value.selectedTab,
        });
        localStorage.setItem("selectedTab",value.selectedTab)
      }
      


    }
  }





    render(){
        return(
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="rgb(0,204,153)"
              barTintColor="white"
              prerenderingSiblingsNumber={0}
              hidden={this.state.hidden}
              
            >
              {
               TabsArr.map(value => { 
                  return (
                    <TabBar.Item
                      title={value.title}
                      key={value.key}
                      icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${value.icon}) center center /  21px 21px no-repeat`
                      }}
                      />
                      }
                      selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${value.selectedIcon}) center center /  21px 21px no-repeat`
                      }}
                      />
                      }
                      selected={this.state.selectedTab === value.selectedTab}
                      onPress={this.onPressclk(value)}
               
                    >
                      {/* this.props.history.push("/submitOrder", {from: '/details', value}) */}
                      {/* {value.key === "order" ? (this.state.userSta?value.componName:(localStorage.setItem("selectedTab","/my"))):value.componName} */}
                      {/* {value.key === "order" ? (this.state.userSta?value.componName:<My/>):value.componName} */}
                      {value.key === "order" ? (this.state.userSta ? value.componName :""):value.componName}
                    </TabBar.Item>
                  )
                })
              }       
            </TabBar>
      </div>
    )
  }
}
export default Home