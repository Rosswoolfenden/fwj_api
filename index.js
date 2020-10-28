const Koa = require('koa');
const app = new Koa();
const j = require('./routes/josh');
const tplinkplug = require('./devices/controller');
const port = 8080;
const ip = '192.168.56.1';
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
  });
app.use(j.routes());

plugs = tplinkplug.getAllDevices();

app.listen(port, ip, () => console.log(`Public libary Api is now running on port ${port}`));