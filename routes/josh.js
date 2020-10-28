const Router = require('koa-router');
const plugs = require('../devices/controller');
const router = Router();


router.get('/', fwj1);
router.get('/turnOn', turnOn);
router.get('/turnOff', turnOf);


async function turnOn(ctx) {
    try {
        await plugs.turnAllPlugsOn();
        ctx.body = {suc: "This worked"}
    } catch (e) {
        ctx.body = {error: 'did not work '}
    }
    ctx.body = {succsess: 'This worked, well done'};
}

async function turnOf(ctx) {
    try {
        await plugs.turnAllPlugsOff();
        ctx.body = {suc: "This worked"}
    } catch (e) {
        ctx.body = {error: 'did not work '}
    }
}


async function fwj1(ctx) {
    console.log("we here bithc");
    ctx.body = {Suc: "Yay this worked"};
}

module.exports = router;