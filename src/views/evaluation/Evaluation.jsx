import React,{useState,useEffect}from 'react';
import {EvaluationHeader,EvaluationWrap,AddPicture} from './Evaluation.styled';
import {useHistory} from 'react-router-dom'
import EmpStar from '@a/images/iconku/empstar.png'
import Star from '@a/images/iconku/star.png'
import Line from "@a/images/iconku/line.png"
import Add from '@a/images/iconku/add.png'
import { ActionSheet, Button, Toast } from 'antd-mobile';
import {useDispatch} from "react-redux"
import {modifyStatus} from '../home/actionCreator'
import memoize from 'memoize-one'

const setComments = memoize((empstar,comment)=>{
    let arr1 = ["你还未评价","太慢了","能接受","还行","挺快的","相当迅速"];
    let arr2 = ["你还未评价","太烂了","不喜欢","还行","很不错","太好玩了"];
    let count
    if(comment==="物流配送"){
        count = empstar.reduce((value,item)=>{
            return value + item
        },0)
        return arr1[count]
    }else{
        count = empstar.reduce((value,item)=>{
            return value + item
        },0)
        return arr2[count]
    }
})

const Evaluation = () => {
    // let empstar1 = [1,0,0,0,0]
    // let empstar2 = [EmpStar,EmpStar,EmpStar,EmpStar,EmpStar]
    let [state,setState] = useState({
        clicked: 'none',
        clicked1: 'none',
        clicked2: 'none',
      })
    let [empstar1,setStar] = useState([0,0,0,0,0])
    let [empstar2,setStar2] = useState([0,0,0,0,0])
    const history = useHistory()
    const {value} = history.location.state
    const dispatch  = useDispatch()
    function showToast() {
        // console.log(value)
        dispatch(modifyStatus(value.orderList.oid))
        Toast.info('评价成功', 1);
    }
    const showActionSheet = () => {
        const BUTTONS = ['相册', '拍照', '取消'];
        ActionSheet.showActionSheetWithOptions({
          options: BUTTONS,
          cancelButtonIndex: BUTTONS.length - 1,
          destructiveButtonIndex: BUTTONS.length - 2,
          message: '选择图片',
          maskClosable: true,
          'data-seed': 'logId',
        },
        (buttonIndex) => {
            setState({ clicked: BUTTONS[buttonIndex] });
        });
      }

      const setStarNum = (arr,index) =>{
          return ()=>{
              let star = []
              arr.splice(0,index+1);
              for(var i = 0;i<index+1;i++){
                  arr.unshift(1);

              }
              for(var i= index+1;i<arr.length;i++){
                  arr[i] = 0
              }
              
              for(var i = 0; i<arr.length;i++){
                star[i] = arr[i]
            }          
            empstar1 = star
            setStar(empstar1)
           
          }
      }
      const setStarNum2= (arr,index) =>{
        return ()=>{
            let star = []
            arr.splice(0,index+1);
            for(var i = 0;i<index+1;i++){
                arr.unshift(1);

            }
            for(var i= index+1;i<arr.length;i++){
                arr[i] = 0
            }
            
            for(var i = 0; i<arr.length;i++){
              star[i] = arr[i]
          }          
          empstar2 = star
          setStar2(empstar2)
         
        }
    }

    return (
        <div>
            <EvaluationHeader>
                <h1>
                    <svg t="1603685256851" onClick={()=> history.goBack()} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6077" width="0.2rem" height="0.2rem"><path d="M323.70859 512.813528l390.453736 390.453736-53.648874 53.645804L231.892441 528.292058 215.256552 512.833995l15.20326-14.46034L661.747559 67.086931l53.841256 53.844326L323.70859 512.813528z" p-id="6078" fill="#8a8a8a"></path></svg>
                    <span>商品评价</span> 
                </h1>
            </EvaluationHeader>
            <EvaluationWrap>
                <div>
                    <h3>
                        <article>
                            <span>物流配送</span>
                            {
                                empstar1.map((value,index)=>{
                                
                                    return (
                                        <img src={value === 0 ? EmpStar : Star} key={index} alt="" style={{marginRight:".05rem"}} onClick={setStarNum(empstar1,index)}/>
                                    )
                                })
                            }
                            <i>{setComments(empstar1,"物流配送")}</i>
                        </article>
                        <article>
                            <span>菜品质量</span>
                            {
                                empstar2.map((value,index)=>{
                                    return (
                                        <img src={value === 0 ? EmpStar : Star} key={index} alt="" style={{marginRight:".05rem"}} onClick={setStarNum2(empstar2,index)}/>
                                    )
                                })
                            }
                            <i>{setComments(empstar2,"菜品质量")}</i>
                        </article>
                        <figure>
                            <img src={Line} alt=""/>
                        </figure>
                        <footer>
                            <textarea></textarea>
                        </footer>
                        <AddPicture>
                            <Button onClick={showActionSheet}
                            style={{
                                width:"100%",
                                height:"100%"
                            }}
                            >
                                <img src={Add} alt=""/>
                            </Button>
                        </AddPicture>

                    </h3>
                </div>
            </EvaluationWrap>
            <footer>
                <Button 
                onClick={showToast}
                style={{
                    width:"3.4rem",
                    height:".44rem",
                    backgroundColor:"rgba(0, 204, 153, 1)",
                    borderRadius:".03rem",
                    fontSize:".13rem",
                    color:"#fff",
                    lineHeight:".44rem",
                    textAlign:"center",
                    marginLeft:".16rem",
                    marginTop:".15rem"
                }}
                >提交</Button>
            </footer>
        </div>
    );
};

export default Evaluation;