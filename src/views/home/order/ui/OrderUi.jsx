import React from 'react';
import AllOrder from './AllOrder'
import PropTypes from 'prop-types'


const OrderUi = (props) => {
    return (
        <div>
            <AllOrder {...props}></AllOrder>
        </div>
    );
};

OrderUi.propTypes = {
    list:PropTypes.array
}

export default OrderUi;