/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState,useCallback} from 'react'
import { Details2Box } from './DetailsUi.Styled'
import { Tabs } from 'antd-mobile';
import DetailsCe from "./DetailsCe";
import Star from "@c/star/Star";
import { get} from "@u/http";


const tabs = [
  { title: '全部', sub: '-1' },
  { title: '好评', sub: '1' },
  { title: '中评', sub: '2' },
  { title: '差评', sub: '3' },
  { title: '有图', sub: '4' }
];


 const Details2=(props)=> {
   const [cecom, setcecom] = useState({}) 
   useEffect(() => { 
     getData(props.gid)

     }, [props.gid])
   
   
   const getData = useCallback(async (gid) => {
     const result = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/comm/rank?gid=${gid}`)



     if (!result.code) {
       return setcecom(result)
     } else { 
      return setcecom({})
     }    
   })
   return (
   
     <>
       {
         JSON.stringify(cecom) !== "{}"?(<Details2Box>
          <div className="left">
            <p>{ ((cecom.aFresh*cecom.aTaste)/2).toFixed(2)}</p>
            <span>综合</span>
          </div>
          <div className="right">
            <div>
              <p>新鲜</p>
              <div>
                
                 <Star star={cecom.aFresh*2} />
                
                
              </div>
              <p>{ cecom.aFresh.toFixed(2)}</p>
            </div>
            <div>
              <p>口感</p>
              <div>
              
                 <Star star={cecom.aTaste*2} />
             
              </div>
               <p>{ cecom.aTaste.toFixed(2)}</p>
            </div>
          </div>
        </Details2Box>):null
       }
      

      <div style={{marginTop:".1rem",flex: '1',}}>
      <Tabs tabs={tabs}
        initialPage={0}
          tabBarPosition="top"
          prerenderingSiblingsNumber={false}
          useOnPan={false}
          swipeable={false}
          destroyInactiveTab={true}
          tabBarActiveTextColor="rgba(0, 204, 153, 1)"
          tabBarInactiveTextColor="rgb(153, 153, 153)"
          tabBarUnderlineStyle={{ 'backgroundColor': 'rgba(0, 204, 153, 1)',width: '10%',marginLeft: '5%', borderRadius: ".15rem", border: ' 1.5px rgba(0, 204, 153, 1) solid', overflow: "hidden" }}

          renderTab={tab => <span>{tab.title}</span>}
    >

          {
            tabs.map((item, index) => { 
              return (
                <div key={item+index+1} style={{ display: 'flex', padding: '.1rem', overflowY: "scroll", height: '100%', flexDirection: 'column', backgroundColor: '#fff' }}>                                
                  <DetailsCe tabsindex={item.sub} gid={ props.gid}></DetailsCe>
                 </div>
              )
            })
          }
    </Tabs>
     </div>
    </>
  )
}


export default Details2

