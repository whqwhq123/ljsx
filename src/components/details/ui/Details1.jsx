/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect,useState}from 'react'
import { Carousel } from 'antd-mobile';
import { Details1div } from './DetailsUi.Styled'
import { get } from "@u/http";
import emptyimg from '@a/images/iconku/emptyimg.png'
const Details1 = (props) => {
  const [state,setState]=useState({
    dataList: ['1', '2', '3'],
    imgHeight: 176,
  })
  useEffect(() => { 
    (async () => { 
      // const result = await get('/api/detailsrj')
      // shop-1.0-SNAPSHOT/diary/findByGid?gid=10
      // console.log(result.result);
      const result = await get(`http://39.97.248.187:8080/shop-1.0-SNAPSHOT/diary/findByGid?gid=${props.gid}`)
      console.log(result.diaries);

      setState({
        dataList:result.diaries
      })
    })()

   
   
  },[props.gid])

  return ( 
    <>
      {
         state.dataList&&<Carousel className="space-carousel"
         frameOverflow="visible"
         cellSpacing={10}
         slideWidth={0.8}
         dots={false}
         style={{marginTop:".2rem"}}
     >
         {
           state.dataList.map((val, index) => (
             <Details1div key={index}  >
               <div
               style={{ width: '100%', height:"2.5rem", verticalAlign: 'top', backgroundColor: "rgba(228, 228, 228, 1)",borderRadius: ".1rem"  }} 
               >
               <img
                   src={val.diaPic || `${emptyimg}`}
             style={{ width: '100%', height:"100%",borderRadius: ".1rem"}}      
           />
               </div>
  
          
           <div>
             <p>{val.diaTitle}</p>
             <p>{val.diaDate}</p>
             <p>{val.diaIntro}</p>
           </div>
         </Details1div>
     
           ))
         
         }
     </Carousel>
      }
    </>
  )
}

export default Details1
