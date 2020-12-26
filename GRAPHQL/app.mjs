
import Koa from "koa"
const app = new Koa()
import views from "koa-views"
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import path from "path";

import koastatic from 'koa-static'
//路由文件
import index from './routes/index.mjs'
import detailsRoutes from './routes/detailsRoutes.mjs'
//导入graphql

import mount from "koa-mount";
import graphqlHTTP from "koa-graphql";
import schema from './MyGraphQLSchema.mjs'
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(koastatic(path.__dirname + '/public'))

app.use(views(path.__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
//启动GraphQL

app.use(
  mount(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  )
);





// routes
app.use(index.routes(), index.allowedMethods())
app.use(detailsRoutes.routes(), detailsRoutes.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

export default app;
