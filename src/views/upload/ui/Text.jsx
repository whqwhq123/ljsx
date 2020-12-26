import React, { Component } from 'react'
import TextWrap from './Text.styled'
import left from '@a/images/iconku/left.png'
import { withRouter } from "react-router-dom";
import { NavBar, Toast, Icon, WhiteSpace, List, InputItem, Picker, TextareaItem } from 'antd-mobile';


const antdDistrict = [];
let districtData = require('@v/profile/second/district.json');
Object.keys(districtData).forEach((index) => {
    let itemLevel1 = {};
    let itemLevel2 = {};
    itemLevel1.value = districtData[index].code;
    itemLevel1.label = districtData[index].name;
    itemLevel1.children = [];
    let data = districtData[index].cities;
    Object.keys(data).forEach((index) => {
        itemLevel2.value = data[index].code;
        itemLevel2.label = data[index].name;
        itemLevel2.children = [];
        let data2 = data[index].districts;
        let itemLevel3 = {};
        itemLevel3.children = [];
        Object.keys(data2).forEach((index) => {
            itemLevel3.value = index;
            itemLevel3.label = data2[index];
            itemLevel2.children.push(itemLevel3);
            itemLevel3 = {};
        });
        itemLevel1.children.push(itemLevel2);
        itemLevel2 = {};
    });
    antdDistrict.push(itemLevel1)
});
function successToast() {
    Toast.success('提交成功', 1);
}
@withRouter
class Text extends Component {

    state = {
        data: [],
        cols: 1,
        pickerValue: [],
        asyncValue: [],
        visible: false,
    };

    hanleSubmit = () => {
        this.props.form.validateFields((error, value) => {
            console.log(value)
            successToast();
        });
    }
    onLeftClick = () => {
        let { history } = this.props
        history.goBack()
      }

    render() {
        const { getFieldProps } = this.props.form;
        let accAddress = JSON.parse(sessionStorage.getItem('accAddress'))
        const arr = [];
        // accAddress.area.map((item) => {
        //     arr.push(item.toString())
        // })

        return (
            <TextWrap>
                <NavBar
                    mode="light"
                    icon={<Icon key="0" style={{ background: `url(${left}) no-repeat center` }} />}
                    onLeftClick={this.onLeftClick}
                    rightContent={[
                        <span key="1" onClick={this.hanleSubmit} >提交</span>
                    ]}
                >拾材爆料</NavBar>
                <div className="tip">
                    <p>爆料一经采纳，奖励惊喜大礼包一份
            {/* <span onClick = {this.detailClick}>详情</span> */}
                    </p>
                </div>
                <div className="img">
                    +
                    <input
                        className="filetype"
                        type="file"
                    />
                </div>
                <WhiteSpace />
                <InputItem
                    {...getFieldProps('name')}
                    clear
                    placeholder="输入名称"
                >产品名称</InputItem>
                <Picker extra="请选择(可选)"
                    data={antdDistrict}
                    title="选择地址"
                    {...getFieldProps('district', {
                        initialValue: arr,
                    })}
                    // onOk={e => console.log('ok', e)}
                    onDismiss={e => console.log('dismiss', e)}
                >
                    <List.Item arrow="horizontal">所在区域</List.Item>
                </Picker>
                <InputItem
                    {...getFieldProps('adress')}
                    clear
                    placeholder="镇/乡/组"
                >具体地址</InputItem>
                <InputItem
                    {...getFieldProps('tell')}
                    clear
                    placeholder="输入电话号码"
                >联系电话</InputItem>
                {/* <button onClick={this.hanleSubmit}>提交</button> */}
                <WhiteSpace  />
                <WhiteSpace  />
                <List
                    renderHeader={() => '简单描述'}
                    style={{ background: "#fff" }}
                >
                    <TextareaItem
                        {...getFieldProps('count', {
                            
                        })}
                        rows={5}
                        count={300}
                    />
                </List>
            </TextWrap>
        );
    }
}

export default Text




