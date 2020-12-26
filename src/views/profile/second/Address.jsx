import React, { useState ,useEffect} from 'react';
import { get,post } from "@u/http";
import { NavBar, Icon,Modal } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import { Contain, Main } from './Address.styled.js'
import edit from '@a/images/iconku/u3224.png'
import del from '@a/images/iconku/u3875.png'

const alert = Modal.alert;


const AboutUs = (props) => {
  const [addClass, setAddClass] = useState(false);
  const history = useHistory();
  const [addressInfo, setAddress] = useState();
  
  useEffect(() => {
    (async () => {
      let ru = await post(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/address/findAll?uid=${JSON.parse(localStorage.getItem('userState')).user.uid}`)
      setAddress(ru);
    })()
  }, [])
  
  const open = () => {
    setAddClass(true)
  }
  const close = () => {
    setAddClass(false)
  }
  
  return (
    <Contain>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/')
        }
        rightContent={[
          <p className='delete'
            onClick={open}
            style={{
              color: "rgba(0, 204, 153, 1)",
              fontSize: "14px",
              display: `${addClass ? "none" : "block"}`,
            }}
            key="1"
          >编辑</p>,
          <p className='delete'
            onClick={close}
            style={{
              color: "rgba(0, 204, 153, 1)",
              fontSize: "14px",
              display: `${addClass ? "block" : "none"}`
            }}
            key="2"
          >完成</p>
        ]}
      >地址管理</NavBar>
      <Main>
        <ul >
          { 
            addressInfo ?  addressInfo.addresses.map((item, index) => {
              let districtData = require('./district.json');
              return <li className={addClass ? "slide-right" : null} key={item + index}>
                  <span className="name">{item.consignee}</span>
                  <span className="tel">{item.conPhone}</span>
                  <span className="address">{item.province.split(',')[1]} {item.city.split(',')[1]} {item.county.split(',')[1]} {item.street}</span>
                  <span className={item.aflag ? (item.aflag===1 ? "home" : "company"): null}>{item.aflag ? (item.aflag===1 ? "家" : "公司") : null }</span>
                  <img src={edit} alt="" className="edit" style={{ display: `${addClass ? "none" : "block"}` }} 
                      onClick={()=>{
                          localStorage.setItem('accAddress',JSON.stringify(item));
                          history.push('/Edit')}
                        } />
                  <img src={del} alt="" className="delete" onClick={() =>
                    alert('', '确定删除该地址吗', [
                      { text: '取消', onPress: () => console.log('取消') },
                      { text: '确定', onPress: async() => {
                        let ru = await post(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/address/delete?aid=${Number(item.aid)}`)
                        window.location.reload()
                      }
                    },
                    ])} />
                </li>
            })  : null
          }
        </ul>
        <footer onClick={
          ()=>{
            history.push('/Add')
          }
        }>
           + 添加地址
        </footer>
      </Main>
    </Contain>

  );
}

export default AboutUs;