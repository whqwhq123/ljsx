import styled from "styled-components";
import border from '@a/styles/border'

const Conbox = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
`
const Tabtitle = styled.div`
  color:#666666;
  width: 1.26rem;
  font-size: .18rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`
const Tab3to = styled.div`
    flex:1;
    background:#ff3377;
    height:100%;

`
const Plusdess = styled.div`
      width:1rem;
      display: flex;
      height:100%;
      text-align:center;
      justify-content:space-around;
      align-items:center;
  
      button{
          border:none;
          border-radius:50%;
          width:0.24rem;
          height:0.24rem;   
          line-height:.2rem;   
          background:#fff;       
      }

      >p{
        font-size:.16rem;
        color: #FF6666;
      }
   
`


const TabBar = styled.div`
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  height:1.15rem;
  background-color:#fff;
  display:flex;
  padding:0.15rem;
  flex-direction:column;
  z-index: 999;

  .top{
    display: flex;
    justify-content:space-between;
    line-height:0.44rem;
    height:.44rem;
    >p{    
      height:100%;
      color:red;;
      text-align: right;
      font-size:.20rem;
  
      span{
        font-size: 14px;
        font-weight: 400;
        color: #666666;
      }
     }

  }
  .buttoms{
    display:flex;
    button{
      height:0.44rem;
      flex:6;
      border:none;
      border-radius:.05rem;
      background-color:rgb(0,204,153);
      color:#fff;
      &:nth-of-type(1){
        margin-right:.1rem
      }
      &:nth-of-type(2){
        background-color:rgba(255, 102, 102, 1);
      }
     }
  }`


const Details0img = styled.div`
    height: ${props => props.heightimg ? props.heightimg + "rem" : '2.6rem'};
    margin-top:${props => props.topimg ? props.topimg + "rem" : '0'};
    background-color: rgba(242, 242, 242, 1);
    position: relative;
    >img{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0%;
      margin: auto;
      /* width: 83px;
      height: 67px; */
      width:${props => props.miniwidthimg ? props.miniwidthimg + "rem" : ".83rem"};
      height:${props => props.miniheightimg ? props.miniheightimg + "rem" : ".67rem"};
      width: auto;  
      height: auto;  
      max-width: 100%;  
      max-height: 100%; 
    }
`

const Details0pimg = styled.div`
    padding:.1rem;

    p{   
      display: block;
      font-family: 'PingFangSC-Regular', 'PingFang SC';
      font-weight: 400;
      font-style: normal;
      color: #AEAEAE;   
    }
`

const Details1div = styled.div`
  height: 5rem;
  box-shadow: 0 0 .06rem rgba(161, 161, 161, 0.349019607843137);
  border-radius: .08rem;
  background: inherit;
  /* background-color: rgba(255, 255, 255, 1); */

  >div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    p:nth-of-type(1){
      display: block;
      font-weight: 400;
      font-style: normal;
      font-size: .18rem;
      color: #666666;
      text-align: center;
      white-space: nowrap;
      margin: .15rem 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width:1.5rem
    }
    p:nth-of-type(2){
      margin: 0 0 15px 0;
      display: block;
      background-color: rgba(0, 204, 153, 1);
      border: none;
      box-shadow: none;
      color: #FFFFFF;
      border-radius: 150px;
      padding: 1px 15px 1px 15px;
    }
    p:nth-of-type(3){
      font-weight: 200;
      color: #A1A1A1;
      padding: .15rem .15rem 0 .15rem;
      text-align: center;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`

const Details2con = styled.div`
    display:flex;
   flex-direction:column;

`

const Details2Box = styled.div`
    width:100%;
    padding: .14rem;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    display:flex;
    justify-content:center;
    align-items: center;
    .left{
      text-align:center;
      width:.8rem;
      >p{
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        color: #FF6666;
      }
      >span{
        font-weight: 200;
        font-style: normal;
        font-size: 13px;
        color: #999999;
      }
    }
    .right{
      width:1.9rem;
     
      >div{
        display:flex;
        >p{
          width:.4rem;
          font-weight: 200;
          font-style: normal;
          font-size: .13rem;
          color: #BCBCBC;
          text-align: center;
        }
      }
    }

`
const Details2ItemCe = border(
  styled.div`
  width:100%;
  margin-bottom: .15rem;
  min-height: .8rem;
  padding-bottom: .2rem;
  .cetop{
    display:flex;
    flex-direction:row;
    justify-content:space-between ;
    .cetopleft{
      display:flex;
      flex-direction:row;
      >div:nth-of-type(1){
        width:.4rem;
        height:.4rem;
        border-radius:50%;
        background-color: rgba(242, 242, 242, 1);
        margin-right: .1rem;
        >img{
          width:100%;
          height:100%;
          border-radius:50%;
        }

      }
      >div:nth-of-type(2){
        >p{
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: #00CC99;
        }
      }
    }
    >span{
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      color: #C9C9C9;
    }

  }
  .cebut{
    padding-left: .50rem;
    font-weight: 400;
    font-style: normal;
    color: #999999;
    >p{
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    >p:nth-of-type(2){
      display:block;
      width:100%;
      font-weight: 400;
      font-style: normal;
      font-size: .12rem;
      color: #999999;
      text-align: left;
      padding: .1rem;
      background-color: rgba(242, 242, 242, 1);
    }
    >div{
      display:flex;
      flex-wrap:wrap;
      >div{
        width:.7rem;
        height:.7rem;
        margin:.1rem .1rem  .1rem 0;
        background-color: rgb(242, 242, 242);
        >img{
          width:100%;
          height:100%;

        }
      }

    }
  }

  
  `
)

const DetailsUIpl = styled.div`
  padding: .15rem .15rem 0 .15rem;
  border-bottom: .14rem solid rgba(242,242,242,1);

  .DetailsUIplTop{
    display: flex;
    width: 100%;
    height: .4rem;
    justify-content: space-between;
    align-items: center;
    >p{
      color: #999999;
      font-weight: 200;
      >span{
        font-weight: 400;
        font-style: normal;
        color: #00CC99;
      }
    }
  }

`
const DetailsUIplBot = styled.div`

    border-bottom: .14rem solid rgba(242,242,242,1);

  >p{
    display:flex;
    align-items:center;
    justify-content:center;
    height: .4rem;
    font-weight: 500;
    font-size: .16rem;
    color: #00CC99;
  }
  .item{
    display:flex;
    justify-content:space-around;
    padding-bottom: .15rem;
    >div{

      display:flex;
      flex-direction:column;
      align-items:center;
      >span{
        color: #999999;
        font-size: 12px;

      }
      >p{
        color: #FF6666;
        font-size: 12px;
        >span{
          color:#CCCCCC;
        }

      }
    }

    


  }


`







export {
  Tabtitle,
  Conbox,
  TabBar,
  Tab3to,
  Plusdess,
  Details0img,
  Details0pimg,
  Details1div,
  Details2Box,
  Details2con,
  Details2ItemCe,
  DetailsUIpl,
  DetailsUIplBot

}