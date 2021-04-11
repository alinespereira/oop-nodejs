const fs = require('fs')
const path = require('path')

fs.readdirSync(__dirname)
    .filter(f => path.basename(f).match(/^(?!index\b)\b\w+\.js$/gi))
    .map(f => f.split('.')[0])
    .forEach(f => {
        module.exports[f] = require(`./${f}`)
    })