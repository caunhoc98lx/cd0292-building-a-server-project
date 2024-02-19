'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const resize_1 = require('../util/resize')
const routers = express_1.default.Router()
routers.get('/images', (req, res) => {
    // Extract the query-parameter
    const widthString = req.query.width
    const heightString = req.query.height
    const filename = req.query.filename
    // Parse to integer if possible
    let width, height
    if (widthString) {
        width = parseInt(widthString)
    }
    if (heightString) {
        height = parseInt(heightString)
    }
    // Set the content-type of the response
    res.type(`image/jpg`)
    // Get the resized image
    ;(0, resize_1.readStream)(filename, width, height).pipe(res)
})
exports.default = routers
