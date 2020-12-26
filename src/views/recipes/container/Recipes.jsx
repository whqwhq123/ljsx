import React, { Component } from 'react';
import RecipesWrap from './Recipes.styled'
import { NavBar, Icon} from 'antd-mobile';
import left from '@a/images/iconku/left.png'
import Share from '@c/vegetables/Share'
import RecipesList from '@v/recipes/ui/RecipesList'
import {get} from '@u/http'
class Recipes extends Component {

    constructor(){
        super()
        this.state = {
            data:[],
            vegetableList:[],
            mp4scr:""
        }
    }
    onLeftClick = () => {
        let { history } = this.props
        history.goBack()
    }
    async componentDidMount(){
        const result = await get('http://39.97.248.187:8080/shop-1.0-SNAPSHOT/recipe/findButton?offset=1&count=3')
        this.setState({
            data:result.recipes,
        })
      }
    render() {
        return (
            <RecipesWrap>
            <NavBar
                    mode="light"
                    icon={<Icon style={{ background: `url(${left}) no-repeat center` }} />}
                    onLeftClick={this.onLeftClick}
                    rightContent={[
                        <Share key ="10"></Share>,
                    ]}
                >食谱</NavBar>
                <RecipesList
                    data = {this.state.data}
                ></RecipesList>
        </RecipesWrap>
        );
    }
}

export default Recipes;