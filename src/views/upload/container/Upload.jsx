import React, { Component } from 'react'
import UploadWrap from './Upload.styled'
import Text from '../ui/Text'
import { createForm } from 'rc-form';



const TextWrapper = createForm()(Text);


class Upload extends Component {
  state = {
  }
 
  
  // onLeftClick = () => {
  //   let { history } = this.props
  //   history.goBack()
  // }
  // detailClick = () =>{
  //   let { history } = this.props
  //   history.push('/article')
  // }
 
  render() {
    return (
      <UploadWrap>
        <TextWrapper ></TextWrapper>
      </UploadWrap>
    )
  }
}

export default Upload