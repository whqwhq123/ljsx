import React,{Suspense} from 'react'
import EmptyShopCar from './EmptyShopCar'
import {Header,Title,Container} from './ShopCar.styled'
import PropTypes from "prop-types";
import memoize from 'memoize-one'
import  {useHistory} from 'react-router-dom'
const ExistShopCar  = React.lazy(()=>import('./ExistShopCar'))
const ShopCarUi = (props)=>{
    // console.log(props.goodlist)
    
    const isEmpty = memoize((list)=>{
        // console.log(list)

        if(list.code === 1 ||list.length === 0) return true
        return list.goods.length > 0 ? false : true
    })
  const history = useHistory()
    return(
        <Container>
        <Header>
            <h3>
                <svg t="1603203502163" onClick={()=>history.push("/home")} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3698" width="0.18rem" height="0.18rem">
                <path d="M702.94996 958.89419c-8.375761 0-16.751522-3.196809-23.14514-9.590426L265.159102 534.658046c-12.787234-12.777001-12.787234-33.513278 0-46.289256L679.80482 73.722048c12.787234-12.787234 33.502022-12.787234 46.289256 0 12.787234 12.777001 12.787234 33.513278 0 46.289256L334.593498 511.512906l391.501602 391.501602c12.787234 12.777001 12.787234 33.513278 0 46.289256C719.701482 955.697381 711.325721 958.89419 702.94996 958.89419z" p-id="3699"></path></svg>
            </h3>
            <p>购物车</p>
            <span>
                编辑
        </span>
        </Header>
        <Title>
            向左滑动删除不要的宝贝
        </Title>
        <Suspense fallback={<div
          style={{
            textAlign:"center",
            margin:"50%"
          }}  
        >Loading...</div>}>
            {
                isEmpty(props.goodlist) ? <EmptyShopCar></EmptyShopCar> : <ExistShopCar {...props}></ExistShopCar>
            }
        </Suspense>

    </Container>
    )
}
// ShopCarUi.propTypes = {
//     goodlist:PropTypes.array
// }
export default ShopCarUi
