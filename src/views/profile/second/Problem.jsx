import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import { Contain,ButtonC } from './Problem.styled'
import { List, TextareaItem } from 'antd-mobile';
import { createForm,formShape } from 'rc-form';
import { Toast} from 'antd-mobile';


function successToast() {
  Toast.success('提交成功', 1);
}
class Textarea extends React.Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      successToast();
    });
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List>
          <TextareaItem
            {...getFieldProps('count', {
              
            })}
            placeholder="内容描述"
            rows={5}
            count={200}
          />
        </List>

        <List>
          <TextareaItem
            {...getFieldProps('note6', {
            })}
            title="电话"
            placeholder="联系电话"
            editable={true}
          />
        </List>
        <ButtonC onClick={this.submit}>提交信息</ButtonC>
      </div>
    );
  }
}

const TextareaWrapper = createForm()(Textarea);


const Problem = (props) => {
  const history = useHistory();

  return (
      <Contain>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.push('/')}
        >意见反馈</NavBar>
        <TextareaWrapper></TextareaWrapper>
      </Contain>
 
  );
}

export default Problem;