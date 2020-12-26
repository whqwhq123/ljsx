
const defalutFresh = {
    result:undefined
}

const reducer  = (state= defalutFresh,action)=>{
    switch(action.type){
        case "SET_FRESH":
            return {
                result:action.data
            }
        case "DECREMMENTFRESH":
            let newResult =  state.result.filter((value)=>{
                if(value.bid === action.id){
                    value.bnum--
                    if(value.bnum <= 0) value.bnum = 0
                }
                return value
            })
            return {
                result:newResult
            }
        default :
            return state
    }

}

export default reducer