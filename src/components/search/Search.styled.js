import styled from "styled-components";
import border from '@a/styles/border'


const SearchBox = border(
  styled.div`
  
      background-color: rgba(255, 255, 255, 1);
      display: flex;
      align-items: center;
      .iconcl{
        flex:1
      }

`
)


const Searchstrle = styled.div`
  flex:7;
  .am-search{
    background-color: rgba(255, 255, 255, 1);
  }
  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;

  }
  .am-search-cancel{
    color: #00CC99;
    font-size: .12rem;
  }

  .am-search-input{
    background-color: rgba(242, 242, 242, 1);
    border-radius: 1.5rem;
  }

`

const SearchButtom = styled.div`
    flex:1;
    min-height:.3rem;
    flex-direction:column;
    
    .tabAll{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:.2rem;
      background-color: rgba(255, 255, 255, 1);
      >p{
        font-weight: 200;
        font-style: normal;
        font-size: 14px;
        color: #999999;
      }
    }
    .conTarAll{
      padding:.2rem;
      display:flex;
      flex-wrap:wrap;
      align-content:space-between;
      background-color: rgba(255, 255, 255, 1);
        .tag-container{
          display: flex;
          padding-top: .09rem;
          flex-direction: row;
          flex-wrap: wrap;
        }
        > div {
          margin-left: .12rem;
          margin-bottom: .12rem;
        }
    }

`








export {
  Searchstrle,
  SearchBox,
  SearchButtom
}