import {get} from '@u/http'
const setDateFresh = (data) =>{
    return {
        type:"SET_FRESH",
        data
    }
}

const loadDataFresh = () =>{
    // return async (dispatch) => {
    //     let result = await get(
    //         "/api/grabfresh"
    //     )
    //     console.log(result)
    //     dispatch(setDateFresh(result))
    // }
    return async (dispatch) =>{
        let result = await get(
            "http://39.97.248.187:8080/shop-1.0-SNAPSHOT/buying/findAll",{
                offset:1,
                count:20
            }
        )
        // console.log(result)
        dispatch(setDateFresh(result.buyingList))
    }
}


const decremmentFresh = (id) =>{
    return {
        type:"DECREMMENTFRESH",
        id
    }
}

export {
    loadDataFresh,
    decremmentFresh
}