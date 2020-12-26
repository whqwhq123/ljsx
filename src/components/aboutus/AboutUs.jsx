import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './AboutUs.styled'

const AboutUs = (props) => {
    const history = useHistory()

  const handlegotodetails = (gid, title) => {

        return () => {
            history.push("/details", { from: '/home', gid,title })
        }
    }

    return (
        <div>
            <Container>
                <h1>今日推荐</h1>
                <ul >
                    {
                        props.List && props.List.map((item, index) => {
                            return (
                                <li key={item.gid + index}>
                                    <div>
                                        <img src={item.gpicture} alt="" onClick={handlegotodetails(item.gid,item.gname)} />
                                    </div>
                                    <div className='text'>
                                        <p>{item.gname}</p>
                                        <p><span>{item.gprice}/</span>{item.gweight}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </Container>

        </div>
    )
}

export default AboutUs