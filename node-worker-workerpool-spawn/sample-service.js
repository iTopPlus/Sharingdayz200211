const { workerData, parentPort } = require('worker_threads');
const { getAllFile } = require('./read_all_file');
const os = require('os');

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"
const parts = [os.hostname(), process.pid];
console.log("Calculate by parts1: ", parts)
parentPort.postMessage(getAllFile(workerData));

