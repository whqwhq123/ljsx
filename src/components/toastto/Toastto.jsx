import React, { useEffect,useState} from 'react'
import {Toast } from 'antd-mobile';
import toasticon from "@a/images/iconku/toasticon.png";
import PropTypes from 'prop-types'

const Modalto = (props) => {

  const customIcon = () => (
    <div style={{width:'1.7rem',height:'.65rem', borderRadius:'.1rem',position:'relative',padding:'0'}}>
      <div
        style={{
          width: '.75rem',
          height: '.75rem',
          position: 'absolute',
          backgroundColor: '#fff',
          borderRadius: '50%',
          top: '-50px',
          left: 0,
          right: 6,
          margin: 'auto'
        }}><img src={toasticon} style={{ width: '100%', height: '100%' }}
      alt="" /></div>
      <div
        style={{
          
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: '.11rem',
            margin: 'auto'

        }}
      >{props.titleToast}</div>
     </div>
  );
  const [isToast, setisToast] = useState(true)
  useEffect(() => {
    // console.log(props.isToast);
    if (isToast) Toast.info(customIcon(), 2); 
    return () => {
      setisToast(false)
      // console.log(props.isToast,"更新之后显示");
     
    }
  },[isToast])
 
  return (
    
    <>
      
    </>
  )
}

Modalto.propTypes = {
  isToast:PropTypes.bool,
  titleToast:PropTypes.string
}

export default Modalto




