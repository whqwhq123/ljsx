import React, { useEffect } from 'react'
import CategoryList from '@c/categorylist/CategoryList'
import {
    Tabs
} from 'antd-mobile'
import memoize from 'memoize-one'
import AboutUs from '@c/aboutus/AboutUs'

const TabBar = (props) => {
    // console.log(props)
    const aboutusList = memoize(list => list.slice(0, 3))

    useEffect(() => {
        // console.log(props.List);
    })

    const onTabClickpr = (tab, index) => {
        // console.log(tab, index, props);
        props.onChengTab(tab, index)
    }

    return (
        < div style={{ height: '100%', flex: 1, overflowY: "scroll" }
        }>
            <Tabs
                tabs={props.tabtowArr}
                // initialPage={state.tabIndex}
                prerenderingSiblingsNumber={false}
                destroyInactiveTab={true}
                tabBarActiveTextColor="rgba(0, 204, 153, 1)"
                tabBarInactiveTextColor="rgb(153, 153, 153)"
                tabBarUnderlineStyle={{ 'backgroundColor': 'rgba(0, 204, 153, 1)', width: '10%', marginLeft: '5%', borderRadius: ".15rem", border: ' 1.5px rgba(0, 204, 153, 1) solid', overflow: "hidden" }}
                tabBarTextStyle={{ fontSize: '.14rem' }}
                renderTab={tabs => <span>{tabs}</span>}
                onTabClick={onTabClickpr}
            >
                <div style={{ height: '100%', marginTop: '.12rem' }}>
                    <AboutUs
                        {...props}
                        // tabIndex={state.tabIndex}
                        List={aboutusList(props.List)}
                    ></AboutUs>
                    <CategoryList
                        List={props.List}
                        getNumtex={props.getNumtex}
                    ></CategoryList>
                </div>
            </Tabs>

        </div >

    )
}

export default TabBar