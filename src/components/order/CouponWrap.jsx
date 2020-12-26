import React from 'react';
import {Coupon} from './Order.styled';
import {useHistory} from 'react-router-dom'
const CouponWrap = () => {

    const history = useHistory()
    return (
        <Coupon>
            <p>优惠券</p>
            <p>
                <span>3张可用</span>
                <svg t="1603709297213" onClick={() =>history.push('/Ticket')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3523" width=".2rem" height=".2rem"><path d="M333 1005.9c-11.2 11.2-25.8 16.7-40.5 16.7-14.6 0-29.3-5.5-40.5-16.7-22.3-22.3-22.3-58.5 0-80.8l413.8-413.8L252.3 97.6c-22.3-22.3-22.3-58.5 0-80.8 22.3-22.3 58.5-22.3 80.8 0L763 446.7c17.3 17.3 26.7 40.2 26.7 64.7s-9.5 47.4-26.7 64.7l-430 429.8z m0 0" p-id="3524" fill="#bfbfbf"></path></svg>
            </p>
        </Coupon>
    );
};

export default CouponWrap;