import React, { memo} from 'react';
import { VideoWrap } from './Video.styled'
import PropTypes from 'prop-types'
import Look from '@c/vegetables/LookAndComment'
import { useHistory } from 'react-router-dom'


const Video = memo((props) => {
    const history = useHistory()

    const handleClick = (value) => {
        return() =>{
            history.push('/recdetails', { from: "/recipes",id:value})

        }
    }
    return (
        <VideoWrap  {...props}>
            {

                props.data &&
                <div className="father" key={new Date().getTime()} onClick={handleClick(props.data.reId)}>
                    <video
                        className='video'
                        src={props.data.reVideo}
                        muted
                        controls={props.controls ? "controls" : ""}
                        autoPlay={props.autoPlay ? "autoPlay" : ""}
                    ></video>
                    <div className="cover">
                        <div></div>
                        <div className="icon" >
                        </div>
                        <div className="bottom-cover">
                            <h1>{props.data.reName}</h1>
                            <Look display={props.look} light={props.light} other={props.other} look={props.data.reLook} sum="5"></Look>
                        </div>
                    </div>
                </div>
            }



        </VideoWrap>
    );
})

Video.propTyeps = {
    mp4: PropTypes.Array,
}
export default Video;