import React from 'react'
import { useHistory } from 'react-router-dom'
import phone from '@a/images/iconku/phone.png'
import { Modal } from 'antd-mobile';
import { ChatWrap } from '@v/chat/Chat.styled.js'

import {
    NavBar,
    Icon,
} from 'antd-mobile'

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


const Chat = (props) => {
    const history = useHistory()
    return (
        <ChatWrap>
            <NavBar
                mode="dark"
                leftContent={[
                    <Icon key="0" type="left" style={{ marginRight: '.1rem', color: '#cfcfcf' }} onClick={() => history.goBack("/home")}
                    />,
                ]}
                rightContent={[
                    <Icon key="3" style={{ marginRight: '.1rem', background: `url(${phone}) center center /  .22rem .22rem no-repeat` }} onClick={showAlert} />,
                ]}
                style={{ backgroundColor: '#fff', color: '#333', fontSize: ".18rem " }}
            >小哥粉丝</NavBar>
            <div className="container"></div>
            <div className="bottom">
                <div className="emoji icon">
                </div>
                <div className='text'><input type="text" /></div>
                <div className="more icon">
                </div>
            </div>
        </ChatWrap>
    )
}

export default Chat