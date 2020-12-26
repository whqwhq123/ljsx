/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ListView, Icon } from 'antd-mobile'

import indexlist from '@a/images/iconku/indexlist.png'
import { IndexListWrap, ListViewdiv } from './IndexList.styled'
import { useEffect } from 'react'
import Toastto from "@c/toastto/Toastto";
import { postSop} from "@u/http";
const IndexList = (props) => {
  const [toasts, setToasts] = useState({
    isToast: false,
    titleToast:"",
})
    const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    })

    const [state, setState] = useState({
        dataSource,
        page: 1,
        height: document.documentElement.clientHeight * 3 / 4,
    })

    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getdata()
    }, [props])

    const getdata = useCallback(async () => {
        // console.log(props.list, "获取数据成功");
        let { list } = props
        setState({
            dataSource: state.dataSource.cloneWithRows(list)
        });
        setIsLoading(false)
    })
  const gonum = (data) => { 
    
    return async (e) => { 
      e.stopPropagation();
      if (localStorage.getItem("userState") && localStorage.getItem("userState") !== "null") {
        
        const Shopping = {
          "gid": data.gid,
          "gprice":data.gprice,
          "gnum": 1,
          "uid":JSON.parse(localStorage.getItem("userState")).user.uid
    
        }
    
        const result = await postSop(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/cart/add`, Shopping)
        if (!result.code) {
          props.chatclick(Shopping.uid)
          chengToas(true, "加入菜篮子")
        } else {  
          chengToas(true, "加入失败")
        }
       
        
        
      } else { 
        console.log(0);
        console.log("请登陆", toasts.isToast);
        chengToas(true, "请登陆")
      }
  
      setTimeout(() => { 
        chengToas()
      },10)
    }
  }
  const chengToas=(bool,title) => {
    setToasts({
      isToast: bool || false,
      titleToast:title,
    })
  }


    const onEndReached = (event) => {
        if (state.isLoading) { return }
        setIsLoading(true)
        setPage(page + 1)
        setTimeout(() => {
            getdata()
        }, 100)
        // console.log(state);
        // console.log('我到底了,可以请求数据了')
        // setPage(page + 1)
        // getdata()
        // setIsLoading(false)

    }




  

    const row = (rowData, rowID) => {
        // console.log(rowData, rowID)
        return (
            <IndexListWrap
                key={rowID}
                //点击跳转详情页
                onClick={handleClick(rowData.gid,rowData.gname)}
            >
                <div className='imgdiv'>
                    <img src={rowData.gpicture} alt="" />
                </div>
                <div className="textdiv">
                    <p>
                        <span>{rowData.gprice}</span>
                <img src={indexlist} onClick={gonum(rowData)} alt="" />
                        <span>{rowData.gweight}g</span>
                    </p>
                    <p>
                        {rowData.gname}
                    </p>
                </div>
            </IndexListWrap>
        );
    }

    // console.log(props.list)
    const history = useHistory()
    const handleClick = useCallback(
        (rowID,title) => {
            // 
        return () => { 
          history.push('/details', { from: '/home', gid: rowID,title });
        }
        },
        [history]
    )

    return (
        <ListViewdiv {...props}>
            <ListView
                initialListSize={state.pageSize}
                dataSource={state.dataSource}
                renderFooter={() => (<div style={{ padding: "2 ", textAlign: 'center', fontSize: '.14rem' }}>
                    {
                        isLoading ? <Icon type="loading" size={12} /> : '没有更多了'
                    }
                </div>)}
          renderRow={row}
          useBodyScroll
                style={{
                    height: state.height,
                  display: "flex",
                  flexDirection: "column",
                    flex: 1
                }}
                contentContainerStyle={{}}
                pageSize={10}
                // onScroll={() => { console.log('滚动了'); }}
                scrollRenderAheadDistance={500}
                onEndReached={onEndReached}
                onEndReachedThreshold={1}
            />


                      {/* 弹出层 */}
                      {
          toasts.isToast && (
            <Toastto
          isToast={toasts.isToast}
          titleToast={toasts.titleToast}
        ></Toastto>
          )
        }
        </ListViewdiv>
    )

}

export default IndexList;