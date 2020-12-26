import React from 'react';
import memoize from 'memoize-one'

import { CateListWrap, Container } from './CategoryList.styled'
import IndexList from '@c/indexlist/IndexList'

const CategoryList = props => {
    // console.log(props.List.length);
    const len = props.List.length
    const list = memoize(list => list.slice(0, 10))
    const onChatclick = () => { 
      props.getNumtex()
     
    }
    return (
        <Container>
            <CateListWrap>
                <h2>农家蔬菜</h2>
                <p>共{len}款菜品</p>
            </CateListWrap>
            <IndexList
              chatclick={onChatclick}
                list={list(props.List)}
                dis=""
            ></IndexList>
        </Container>
    );

}

export default CategoryList;