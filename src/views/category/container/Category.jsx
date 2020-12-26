import React from 'react'

import CategoryUi from '../ui/CategoryUi'

const Category = (props) => {

    // console.log(props.history.location.quary.title)
    // const tit=props.history.location.quary.title
    return (
        <CategoryUi
            {...props}
        ></CategoryUi>
    )
}
export default Category