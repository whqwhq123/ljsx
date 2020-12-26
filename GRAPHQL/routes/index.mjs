
import Router from "koa-router";
const router = new Router();


router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

export default router