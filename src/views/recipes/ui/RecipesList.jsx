import React from 'react'
import RecipesListWrap from './RecipesList.styled'
import Video from '@v/home/vegetables/ui/Video'
import NewProducts from '@v/home/comlist/ui/NewProducts'
import { WhiteSpace } from 'antd-mobile';



const RecipesList = (props) => {
    return (
        <RecipesListWrap>
            {
                props.data && props.data.map((value,index) => {
                    return (
                        <li key={index}>
                            <Video data = {value}light other></Video>
                            <WhiteSpace />
                            <NewProducts list={value.goodsList} disnone={"none"}></NewProducts>
                            <WhiteSpace size="xl" />
                        </li>
                    )
                })

            }
            
        </RecipesListWrap>

    )
}
export default RecipesList