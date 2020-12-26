import React,{createRef,useEffect,useState} from 'react';
import {DressWrap} from './Dress.styled'
import DressActive from '@a/images/iconku/dressActive.png'
import Dress from '@a/images/iconku/dress.png'
import DressTit from "@a/images/iconku/dress-home.png"
import Write from '@a/images/iconku/write.png'
import {useHistory} from 'react-router-dom'
import {get} from '@u/http'
const AddressMange = () => {
    const dress = createRef()
    const userInfo = createRef()
    const history = useHistory()
    // console.log(history)
    let [address,setAddress] = useState({})
    const {uid} = JSON.parse(localStorage.getItem('userState')).user
    const {value,from} = history.location.state
    console.log(from)
    const clickHandler = () =>{
        let user = userInfo.current.innerHTML
        let dressSelect =  dress.current.innerHTML
        const dressInfo = {
            user,
            dressSelect
        }
        history.push("/submitorder",{value:{...value,dressInfo},from})
  
    }
   
    const goWriteDress = (val) =>{
        return (e)=>{
            e.stopPropagation()
            // aid = aid.toString()
            // console.log(val)
            localStorage.setItem('accAddress',JSON.stringify(val))
            history.push('/Edit',{from:"/addressMange"})
        }
        
    }
    useEffect(()=>{
        (async () =>{
            let {uid} = JSON.parse(localStorage.getItem('userState')).user
            let result = await get(
                        'http://39.97.248.187:8080/shop-1.0-SNAPSHOT/address/findAll',{
                        uid
                    }
                )
                setAddress(result)     
       })()
    },[])
    // console.log()
    return (
        
        <div>
            <DressWrap>
                <h1>
                    <svg t="1603685256851" onClick={()=> history.goBack()} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6077" width="0.2rem" height="0.2rem"><path d="M323.70859 512.813528l390.453736 390.453736-53.648874 53.645804L231.892441 528.292058 215.256552 512.833995l15.20326-14.46034L661.747559 67.086931l53.841256 53.844326L323.70859 512.813528z" p-id="6078" fill="#8a8a8a"></path></svg>
                    <span>选择地址</span> 
                </h1>
                <ul>
                    {
                        JSON.stringify(address) !== "{}" && address.addresses.map((value)=>{
                            console.log(value)
                            return(
                                <li onClick={clickHandler} key={value.aid} >
                                    <img src={DressActive} alt=""/>
                                    <h2>
                                        <div>
                                            <span ref={userInfo}>{value.consignee}   {value.conPhone} </span>  
                                            <p>
                                                <img src={DressTit} alt=""/>
                                                <span>家</span>
                                            </p>
                                        </div>
                                        
                                        <p ref={dress}>{value.province.split(',')[1]} {value.county.split(',')[1]} {value.city.split(',')[1]} {value.street}</p>
                                    </h2>
                                    <h3 onClick = {goWriteDress(value)}>
                                        <img src={Write} alt=""/>
                                    </h3>
                                </li>
                            )
                        })
                    }
                </ul>
            </DressWrap>
            <footer
                style={{
                    height:".44rem",
                    position:"absolute",
                    bottom:'0',
                    backgroundColor:"rgba(0, 204, 153, 1)",
                    width:"100%",
                    color:"#fff",
                    lineHeight:".44rem",
                    textAlign:"center",
                    fontSize:".13rem"
                }}
                onClick={() => history.push('/Add')}
            >
                +增加地址
            </footer>
        </div>
    );
};

export default AddressMange;