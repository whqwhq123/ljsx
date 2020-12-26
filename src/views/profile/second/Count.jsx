import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Contain } from './Count.styled.js'
import { Modal, Button, WhiteSpace, WingBlank, Toast, List, NavBar, Icon } from 'antd-mobile';

import { get, post } from "@u/http";
import emptyimg from '@a/images/iconku/u3503.png'


const prompt = Modal.prompt;
const alert = Modal.alert;

const Count = (props) => {
  const [coll, setColl] = useState();
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const name = JSON.parse(localStorage.getItem('userState')).user.uname;
  const pwd = JSON.parse(localStorage.getItem('userState')).user.upwd;
  useEffect(() => {
    (async () => {
      let ru = await post(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/user/login`,{uname:name,upwd:pwd})
      setColl(ru)
    })()
  }, [])
  const data=coll ? coll : null;
  const showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    setModal(true);
  }
  const onClose = key => () => {
    console.log(key)
    setModal(false);
  }


  return (
    <Contain>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => {
          history.push('/')
          }
        }
      >我的账号</NavBar>
      {data?<main>
       <div className="top">
          <div className="top-list" id='head' onClick={showModal('modal')}>
            <span className="name" >
              头像
            </span>
            <p>
              <img style={{
                width:`${data.user.uport ? "100%" :"30%"}`,
                height:`${data.user.uport ? "100%" :"30%"}`
              }} src={data.user.uport || emptyimg} alt="" />
            </p>
          </div>
          <div className="top-list" onClick={() => prompt('请输入新的昵称', '', [
            { text: '取消' },
            {
              text: '确认', onPress: async (value) => {
                let ru = await post('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/user/updateUser', {
                  "uid": data.user.uid,
                  "petname": value,
                })
                window.location.reload();
              }
            },
          ], 'default', `${data.user.petname||'邻家生鲜新用户'}`)}>
            <span className="name">
              昵称
            </span>
            <span className="text">
              {data.user.petname||'邻家生鲜新用户'}
            </span>
          </div>
          <div className="top-list" onClick={() =>
            alert('请选择您的性别', null, [
              { text: '男', onPress: async() => {
                let ru = await post('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/user/updateUser', {
                  "uid": data.user.uid,
                  "gender": "男",
                })
                window.location.reload();
              } },
              { text: '女', onPress: async() => {
                let ru = await post('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/user/updateUser', {
                  "uid": data.user.uid,
                  "gender": "女",
                })
                window.location.reload();
              } },
              { text: '保密', onPress: async() => {
                let ru = await post('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/user/updateUser', {
                  "uid": data.user.uid,
                  "gender": "保密",
                })
                window.location.reload();
              }},
            ])
          }>
            <span className="name">
              性别
            </span>
            <span className="text" >
              {data.user.gender}
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="top-list" onClick={() => prompt(
            '请输入旧密码验证',
            '',
            (oldpwd) => {
              if(oldpwd!==data.user.upwd){
                console.log(oldpwd,data.user.upwd)
                Toast.fail('密码输入错误', 1);
                return
              }
              prompt(
                '请输入新密码',
                '',
                (password) => {
                  console.log(password);
                  prompt(
                    '确认新密码',
                    '',
                   async(repassword) => {
                     if(password!==repassword){
                       Toast.fail('两次密码不一致', 1);
                        return
                     }
                      let ru = await post('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/user/updateUser', {
                        "uid": data.user.uid,
                        "upwd": repassword,
                      })
                      Toast.success('修改密码成功，请重新登录', 1);
                      localStorage.setItem('userState', null);
                      history.push("/home")
                    },
                    'default',
                    '',
                    ['', ''],
                  )
                },
                'default',
                '',
                ['', ''],
              )
            },
            'default',
            '',
            ['请输入旧密码', ''],
          )}>
            <span className="name">
              修改密码
            </span>
            <span className="text">
              修改
            </span>
          </div>
          <div className="top-list">
            <span className="name">
              手机号
            </span>
            <span className="text">
              {data.user.uname}
            </span>
          </div>
        </div>
        <div className="footer" onClick={() =>
          alert('', '确定退出当前账号？', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
              text: '确认', onPress: () => {
                localStorage.setItem('userState', null);
                history.push("/home")
              }
            },
          ])
        }>
          退出当前账号
        </div>
      </main>:null}

      <WingBlank>
        <Modal
          popup
          visible={modal}
          onClose={onClose('点击空白关闭')}
          animationType="slide-up"
          afterClose={() => { }}
        >
          <List renderHeader={() => <div style={{ color: "rgba(0, 204, 153, 1)" }}>选择头像</div>} className="popup-list">
            {['相册', '拍照'].map((i, index) => (
              <List.Item key={index} onClick={onClose(index)}
              >{i}</List.Item>
            ))}
            <List.Item>
              <button
                style={{
                  height: ".4rem",
                  width: "100%",
                  border: "none",
                  backgroundColor: "rgba(242, 242, 242, 1)",
                  fontWeight: "400",
                  fontStyle: "normal",
                  fontSize: "13px",
                  color: "#333333",
                  textAlign: "center",
                }} onClick={onClose('取消')}>取消</button>
            </List.Item>
          </List>
        </Modal>
      </WingBlank>
    </Contain >
  );
}

export default Count;