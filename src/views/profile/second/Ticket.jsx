import React, { useEffect, useState } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import { Contain } from './Ticket.styled.js'
import { get } from "@u/http";


const AboutUs = (props) => {
  const [coll, setColl] = useState();
  useEffect(() => {
    (async () => {
      let ru = await get("/api/collection")
      setColl(ru)
    })()
  }, [])


  const history = useHistory();

  return (
    <Contain>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/')
        }
      >优惠券</NavBar>
      <main>
        <ul>
          <li>
            <div className='top'>
              <span className="span1">店铺优惠券</span>
              <span className="span2">新用户注册优惠券</span>
              <span className="span3">￥</span>
              <span className="span4">10</span>
              <div className='full'><span className="span7">满100-10元</span></div>
            </div>
            <div className="second">
              <span className="span5">不可与其他优惠共同使用</span>
              <span className="span6">在线支付专享</span>
              <div className='use' onClick={() => history.push('/Home')}><span className="span8">立即使用</span></div>
            </div>
          </li>
          <li>
            <div className='top'>
              <span className="span1">店铺优惠券</span>
              <span className="span2">新用户注册优惠券</span>
              <span className="span3">￥</span>
              <span className="span4">5</span>
              <div className='full'><span className="span7">满80-5元</span></div>
            </div>
            <div className="second">
              <span className="span5">不可与其他优惠共同使用</span>
              <span className="span6">在线支付专享</span>
              <div className='use' onClick={() => history.push('/Home')}><span className="span8">立即使用</span></div>
            </div>
          </li>
        </ul>
      </main>
    </Contain>

  );
}

export default AboutUs;