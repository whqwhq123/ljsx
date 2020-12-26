import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { CountdownWrap } from './Countdown.styled';

class Clock extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            isShow: true,
        }
    }

    componentDidMount() {
        this.countClock();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    countClock = () => {
        var oldtime = new Date();
        oldtime = oldtime.setDate(oldtime.getDate() + 1);
        this.timer = setInterval(() => {
            var newtime = new Date();
            var time = (oldtime - newtime) / 1000;
            //以time形式表示的时间戳之差
            if (time <= 0) {
                clearInterval(this.timer);
                // changeStatus();
                this.setState({
                    hours: 0,
                    min: 0,
                    sec: 0,
                    isShow: false,
                });
            } else {
                let hour = parseInt(time / 60 / 60 % 24);
                let minute = parseInt(time / 60 % 60);
                let second = parseInt(time % 60);
                this.setState({
                    hour: hour,
                    min: minute,
                    sec: second,
                    isShow: true,
                })
            }
        }, 100)
    }

    render() {
        const { hour, min, sec } = this.state;
        return (
            <CountdownWrap>
                <h1>新品抢购</h1>
                <div className='clock'>
                    剩
                    <i>{hour}</i>
                :
                    <i>{min}</i>
                :
                    <i>{sec}</i>
                结束
                </div>
            </CountdownWrap>
        );
    }
}

export default Clock;