import { List } from 'antd-mobile';
import React from 'react';
import { Contain } from './About.styled'
import { useHistory } from 'react-router-dom'
import aboutUs from './../../assets/images/iconku/关于我们.png'
import aboutDelivery from './../../assets/images/iconku/关于配送.png'
import aboutVegetable from './../../assets/images/iconku/关于菜品.png'






const Item = List.Item;

const ListExample = (props) => {
  const history = useHistory();
  return (<div>
    <Contain>
      <List>
        <Item
          thumb={aboutUs}
          arrow="horizontal"
          onClick={() => {
            history.push('/AboutUs')
          }}
        >关于我们</Item>
        <Item
          thumb={aboutDelivery}
          onClick={() => { 
            history.push('/AboutDelivery')
          }}
          arrow="horizontal"
        >关于配送
          </Item>
        <Item
          thumb={aboutVegetable}
          onClick={() => {
            history.push('/AboutVegetable')
           }}
          arrow="horizontal"
        >关于菜品
          </Item>
      </List>
    </Contain>
  </div>);

}

export default ListExample