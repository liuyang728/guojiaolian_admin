import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = '首页';
});
app.use(router.routes());
app.use(serve(__dirname + '/assets'));
app.use(ctx => {
    ctx.body = 'hello world3';
});
app.listen(3000);
console.log('服务启动');
