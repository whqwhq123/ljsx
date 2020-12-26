
import Router from "koa-router";
const router = new Router();
import {
  graphql
} from 'graphql'
import schema from "../MyGraphQLSchema.mjs";

router.get('/detailspl', async (ctx, next) => {
  let query = `
  {
    detailspl{
   
      gid,
      petname,
      msg,
      uport
    }
  }
  `
  let result = await graphql(schema, query)
  console.log(result);
  ctx.body = result
  // res.json(result.data.movies)

})
router.get('/detailsxq', async (ctx, next) => {
  let { gid } = ctx.query
  let query = `
  {
    detailsxq(gid: ${gid}) {
      gnum
      code
      gid
      iid
      iintro
      ipicture
      imgUrl
      gprice
      gweight
      petname
      uport
      answer
      cflag
      commId
      commTime
      fresh
      gid
      msg
      taste
      uid
      guess{
        gid
        gname
        gnum
        gpicture
        gprice
        gweight
      }
  
    }
  }
  `
  let result = await graphql(schema, query)
  // console.log(result.data);
  ctx.body = result.data.detailsxq

})
router.get('/detailsAllpl', async (ctx, next) => {
  let { gid, cflag, offset } = ctx.query
  console.log(gid, cflag, offset);
  let query = `
  {
    detailsAllpl(
      gid: ${gid}
    ) {
       
      ce{
        aTaste
        aFresh
      }
      commont(
        cflag:${cflag}
        gid: ${gid}
        offset:${offset}
      ){
        petname
        uport
        iRank
         comment {
         answer
         cflag
         commId
         commPic
         commTime
         fresh
         gid
         msg
         taste
         uid
       }
      
      }
    }
  }
  
  `
  let result = await graphql(schema, query)
  console.log(result.data);
  ctx.body = result.data

})

router.post('/insertdetailspl', async (ctx, next) => {
  let {
    id,
    gid,
    gr_id,
    gr_flag,
    comm_id,
    petname,
    msg,
    uport
  } = ctx.request.body
  console.log(ctx.request.body);
  let query = `
  mutation{
    insertdetailspl(
        id:${id},
        gid:${gid},
        gr_id:${gr_id},
        gr_flag:${gr_flag},
        comm_id:${comm_id},
        petname:"${petname}",
        msg:"${msg}",
        uport:"${uport}"

      ){
        message,
        code
      }
    }
  `
  let result = await graphql(schema, query)
  console.log(result);
  ctx.body = result
})




export default router