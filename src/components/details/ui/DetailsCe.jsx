/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import { Details2ItemCe } from './DetailsUi.Styled'
import { ListView, Icon } from 'antd-mobile';
import emptyimg from '@a/images/iconku/emptyimg.png'
import Star from "@c/star/Star";
import { get } from "@u/http";

const DetailsCe = (props) => {

  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,// 用其进行数据变更的比较 必须这么写
  });
  //初始化数据
  const [state, setState] = useState({
    dataSource,
    page: 1,
    height: document.documentElement.clientHeight * 3 / 4,
  })

  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  //给初始化数据 赋值
  useEffect(() => {
    getdata(props.tabsindex);
  // eslint-disable-next-line no-use-before-define
  }, [ props.tabsindex])

  //请求数据
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getdata = useCallback(async (index) => {
    const result = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/comm/findAll?gid=${props.gid}&offset=1&count=10&cflag=${index}`)
    if (result.code) return;
      setState({
      dataSource: state.dataSource.cloneWithRows(result.comments)
    });
    setTimeout(() => { 
      setIsLoading(false)
    },1000)
   

  })





  //触底触发的函数
  const onEndReached = (event) => {
    setPage(page + 1)
    setTimeout(() => { 
      setIsLoading(false)
    },1000)
  }


  //可渲染的组件  固定写法   
  const row = (rowData, sectionID, rowID) => {
    //rowData里面的数据就是 state.dataSource里面的数据
    //下面是根据自己的要求 进行渲染
    return (
      <Details2ItemCe
        width={"0 0 1px 0"}
        key={rowID}
      >
        <div className="cetop">
          <div className="cetopleft">
            <div><img src={rowData.uport || emptyimg} alt="" /></div>
            <div>
              <p>{rowData.petname}</p>
              <Star star={rowData.iRank*2} />
            </div>
          </div>
          <span>{rowData.comment.commTime}</span>
        </div>
        <div className="cebut">
          <p>{rowData.comment.msg}</p>
          <div>
            {
              rowData.comment.commPic && JSON.parse(rowData.comment.commPic).map((item, index) => <div key={index + 1}><img src={item} alt="" /></div>)
            }
          </div>
          {
            rowData.comment.answer && <p>{rowData.comment.answer}</p>
          }

        </div>
      </Details2ItemCe>


    );
  };
  return (
    <ListView
      dataSource={state.dataSource}  //dataSource依赖的数据
      renderFooter={() => (<div style={{ textAlign: 'center' }}>
        {isLoading ? <Icon type="loading" size={12} /> : '没有更多了'}
      </div>)}
      renderRow={row} //用于渲染方法  固定写法

      style={{
        height: state.height,
        overflow: 'auto',
        // eslint-disable-next-line no-dupe-keys
        height: "100%"
      }}
      pageSize={4}
      // onScroll={() => { console.log('滚动了'); }}
      scrollRenderAheadDistance={500}
      onEndReached={onEndReached}
      onEndReachedThreshold={1}
    />
  )
}
export default DetailsCe

