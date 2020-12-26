import React, { useEffect,useState,useCallback}from 'react'
import { useHistory } from 'react-router-dom'
import { SearchBar, Icon,Tag   } from 'antd-mobile';
import { Searchstrle,SearchBox,SearchButtom  } from "./Search.styled";
import SearchBut from "./SearchBut";
import { get } from "@u/http";
import IndexList from "@c/indexlist/IndexList";
const Search = (props) => {
  const [value, setvalue] = useState("")
  const [ref, setRef] = useState(null);
  const [tagarr, settagarr] = useState([])
  const [list, setList] = useState({
    data: [],
    len:0
  })
  const [bol, setBol] = useState(false)
  const history = useHistory()
  useEffect(() => {
    if (ref) {
      ref.focus();
    }
    if (localStorage.tagarr) { 
      console.log(JSON.parse(localStorage.tagarr));
      settagarr(JSON.parse(localStorage.tagarr))
    }
    return () => {
      console.log(1);
   
    }
  },[]) 
  const onChange = (value) => {
    setvalue(value);
  };
 
  
  const onSubmit = async () => {      
    if(value==="") return
    console.log(value, "进行ajax请求数据");
    let result = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/goods/findBySearch?offset=1&count=10&search=${value}`)
    console.log(result.goods);
    setList({
      data: result.goods,
      len: result.goods.length
    })



    localStorage.setItem("tagarr",JSON.stringify([...new Set([...tagarr, value.trim()])]));
    settagarr([...new Set([...tagarr, value.trim()])])
    
    setBol(true)
    setvalue("")
  }
  const tagClearAll = () => {
    settagarr([])
    //全删
    localStorage.clear(); 

    console.log("清空所有tag");
  }



  const iconClick = (bol) => {
      
    return () => { 
      if (!bol) {
        let from=history.location.state.from
        history.push(from)
     
      
      } else { 
        setBol(false)
      }
      console.log(bol);
    }

    }


  return (

    <div style={{display: 'flex',flexDirection: 'column',height: '100%'}}> 
      <SearchBox width={"0 0 1px 0"}>
        <Icon className="iconcl" color="#999999"  onClick={iconClick(bol)} type="left" />
        <Searchstrle>  
          <SearchBar
            value={value}
            placeholder="搜索" ref={ref => setRef(ref)}
            onSubmit={onSubmit}
            onCancel={onSubmit}
            showCancelButton
            cancelText="搜索"
            onChange={onChange}
          />
        </Searchstrle>
      </SearchBox>
      {
        bol ? 
<>        <div style={{ color: "#FFFFFF", textAlign: "center", height: ".36rem", lineHeight: ".36rem", backgroundColor: "rgba(0, 204, 153, 1)" }}>共搜索出{ list.len}款</div>
        <IndexList list={list.data} dis=""></IndexList></>
          :
          <SearchBut tagarr={tagarr} valueck={ onChange } tagClearAllChi={tagClearAll}></SearchBut> 
      }
 
     


    </div>

  )
}

Search.propTypes = {

}

export default Search

