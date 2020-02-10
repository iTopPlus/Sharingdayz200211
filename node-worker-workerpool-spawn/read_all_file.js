const path = require("path")
const fs = require("fs")

const getAllFile = (pathInside) => {
    const directoryPath = path.join(__dirname, pathInside)
    const result = fs.readdirSync(directoryPath);
    return result;
}

module.exports = {
    getAllFile
}