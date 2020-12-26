import React, { useEffect } from 'react';
import { NavBar, Icon, List, TextareaItem, Toast, Picker, Tag } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import { Contain, ButtonC } from './Edit.styled'
import { createForm } from 'rc-form';
import { get,post,postJson } from "@u/http";
import { withRouter } from "react-router-dom";

const antdDistrict = [];
let districtData = require('./district.json');
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
class Textarea extends React.Component {

  state = {
    tag: 0
  }

  onChange = (value) => (selected) => {
    this.setState({
      'tag': selected ? Number(value)+1 : 0
    })
  }

  submit = () => {
    let tagState = this.state.tag
    this.props.form.validateFields(async (error, value) => {
      let uid = JSON.parse(localStorage.getItem('accAddress')).uid
      let aid = JSON.parse(localStorage.getItem('accAddress')).aid
      
      let ru = await postJson('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/address/update', {
        "aflag": tagState,
        "aid": aid,
        "city": `${value.district[1]},${districtData[value.district[0]].cities[value.district[1]].name}`,
        "conPhone": value.note3,
        "consignee": value.note1,
        "county": `${value.district[2]},${districtData[value.district[0]].cities[value.district[1]].districts[value.district[2]]}`,
        "province": `${value.district[0]},${districtData[value.district[0]].name}`,
        "street": value.note2,
        "uid": uid
      })
      successToast();
      setTimeout(() => {
        this.props.history.goBack();  
      }, 1000);
    });
  }
  componentDidMount() {


  }
  render() {
    const { getFieldProps } = this.props.form;
    let accAddress = JSON.parse(localStorage.getItem('accAddress'))
    const arr = [accAddress.province.split(',')[0], accAddress.city.split(',')[0], accAddress.county.split(',')[0]];

    return (
      <div>
        { accAddress ?
          <List>
            <TextareaItem
              {...getFieldProps('note1', {
                initialValue: `${accAddress.consignee}`,
              })}
              title="收件人"
              editable={true}
            />
            <Picker extra="请选择(可选)"
              data={antdDistrict}
              title="选择地址"
              {...getFieldProps('district', {
                initialValue: arr,
              })}
              onOk={e => console.log('ok', e)}
              onDismiss={e => console.log('dismiss', e)}
            >
              <List.Item arrow="horizontal">所在区域</List.Item>
            </Picker>
            <TextareaItem
              {...getFieldProps('note2', {
                initialValue: `${accAddress.street}`,
              })}
              title="具体地址"
              editable={true}
            />
            <TextareaItem
              {...getFieldProps('note3', {
                initialValue: `${accAddress.conPhone}`,
              })}
              title="联系电话"
              editable={true}
            />
            <div className="tag">
              <span className="biao">标&nbsp;&nbsp;签</span>
              <Tag onChange={this.onChange('0')} style={{ left: "1rem" }}  >家</Tag>
              <Tag onChange={this.onChange('1')} style={{ left: "1.5rem" }}  >公司</Tag>
            </div>
          </List> : null}
        <ButtonC onClick={this.submit}>提交信息</ButtonC>
      </div>



    );
  }
}

const TextareaWrapper = createForm()(Textarea);


const Edit = (props) => {
  const history = useHistory();

  return (
    <Contain>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
      >编辑</NavBar>
      <TextareaWrapper ></TextareaWrapper>
    </Contain>
  );
}

export default Edit;