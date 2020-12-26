import { List } from 'antd-mobile';
import React  from 'react';
import { Contact } from './Contact.styled.js'
import contactUs from './../../assets/images/iconku/联系我们.png'
import problem from './../../assets/images/iconku/意见反馈.png'
import version from './../../assets/images/iconku/版本号.png'
import { useHistory } from 'react-router-dom';
import { Modal } from 'antd-mobile';

const alert = Modal.alert;
const showAlert = () => {
  const alertInstance = alert('联系客服', '966116', [
    { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
    { text: '确认', onPress: () => console.log('ok') },
  ]);
  setTimeout(() => {
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};



const Item = List.Item;


const ListExample = (props) => {

  const history = useHistory();
  return (<div>
    <Contact>
      <List>
        <Item
          thumb={contactUs}
          arrow="horizontal"
          extra={'966116'}
          onClick={showAlert}
        >联系我们</Item>
        <Item
          thumb={problem}
          onClick={() => {
            history.push('/Problem')
          }}
          arrow="horizontal"
        >意见反馈
          </Item>
        <Item
          thumb={version}
          extra={'v1.0.1'}
        >版本号
          </Item>
      </List>
    </Contact>
  </div>);
}

export default ListExample