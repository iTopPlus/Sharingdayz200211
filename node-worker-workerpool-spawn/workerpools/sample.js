const workerpool = require('workerpool');
const pool = workerpool.pool();
const { sleep } = require("../utils/sleep.js")
const os = require('os');
async function add(a, b) {
    const { sleep } = require("../../../utils/sleep.js")
    await sleep(Math.round(Math.random() * 5))
    return a + b;

}
var pool1 = workerpool.pool();
pool1.exec(add, [2, 4])
    .then(function (result) {
        const parts = [os.hostname(), process.pid];
        console.log("Calculate by parts: ", parts)
        console.log(result); // will output 6
    })
    .catch(function (err) {
        console.error(err);
    });
