import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import { Contain,Main } from './About.styled.js'


const AboutDelivery = (props) => {
  const history = useHistory();
  return (
 
      <Contain>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.push('/')}
        >关于配送</NavBar>
        <Main>
          <h1>配送时效 &nbsp;&nbsp;次日达</h1>
          <p className='p1'>其中，在生鲜行业也出现了不少O2O项目，
          爱鲜蜂、社区001和Dmall多点是几个动静闹的比较大的项目，
          还有更多不知名的小项目如雨后春笋在各地冒出，无声无息的起来，
          默默无闻的死去，连水花都没有冒一个。</p>
          {/* <img src={about1} alt=""/> */}
          <h1>全程冷链配送</h1>
            <p>
              其中，在生鲜行业也出现了不少O2O项目，爱鲜蜂、社区001和Dmall多点是几个动静闹的比较大的项目，
              还有更多不知名的小项目如雨后春笋在各地冒出，无声无息的起来，默默无闻的死去，连水花都没有冒一个。
            </p>
            <p>
              生鲜O2O一直做不起来，其中必有原因，小鸟CMS总结下来，
              认为比较重要的有三点：1、解决不了配送的成本从哪里出的问题；
              2、非标问题导致体验不佳，影响复购；3、最致命的，生鲜O2O解决不了最后一公里，导致项目停摆。
            </p>
            <p>
              先说下我对O2O的一个简单理解，所谓的正宗的O2O，不管在线上怎么玩，必须在线下能提供服务，
              比如餐饮，你可以在线下坐在餐馆里吃，也可以在家里点餐，送到家里吃，这是O2O。
              还有一种中央厨房+外卖的模式，线下不能提供服务，这种就不是O2O，这个跟B2C基本一样，线上购买，快递到家。
            </p>
            <p>
              先说下我对O2O的一个简单理解，所谓的正宗的O2O，不管在线上怎么玩，必须在线下能提供服务，
              比如餐饮，你可以在线下坐在餐馆里吃，也可以在家里点餐，送到家里吃，这是O2O。
              还有一种中央厨房+外卖的模式，线下不能提供服务，这种就不是O2O，这个跟B2C基本一样，线上购买，快递到家。
            </p>
            {/* <img src={about4} alt=""/> */}
            <p>
              先说下我对O2O的一个简单理解，所谓的正宗的O2O，不管在线上怎么玩，必须在线下能提供服务，
              比如餐饮，你可以在线下坐在餐馆里吃，也可以在家里点餐，送到家里吃，这是O2O。
              还有一种中央厨房+外卖的模式，线下不能提供服务，这种就不是O2O，这个跟B2C基本一样，线上购买，快递到家。
            </p>
        </Main>
      </Contain>
 
  );
}

export default AboutDelivery;