import React from 'react'
import { SearchButtom } from "./Search.styled";
import { Icon,Tag   } from 'antd-mobile';
function SearchBut(props) {

  const onChangeTag = (value) => {
    return () => {
      props.valueck(value)
    }
    
    // setvalue(value);
  };

  return (
    
          <SearchButtom >
        <div className="tabAll">
          <p>历史搜索</p>
          <Icon onClick={props.tagClearAllChi} size='xs' color="#999999" type="cross-circle" />
        </div>
        <div className="conTarAll">
          
        {
                props.tagarr.map((item, index) => {
                  return (
                    <Tag
                    key={index}
                    onChange={onChangeTag(item)}              
                  >
                    {item}
                  </Tag>
                  )
                })
          }
        </div>

      </SearchButtom>
    
  )
}


export default SearchBut

