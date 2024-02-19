'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.readStream = void 0
const fs_1 = __importDefault(require('fs'))
const path_1 = __importDefault(require('path'))
const sharp_1 = __importDefault(require('sharp'))
const readStream = (imageName, width, heigh) => {
    const imagePath = path_1.default.join(
        __dirname,
        `../../images/${imageName || 'encenadaport'}.jpg`
    )
    const readStream = fs_1.default.createReadStream(imagePath)
    let transform = (0, sharp_1.default)()
    if (width || heigh) {
        transform = transform.resize(width, heigh)
    }
    return readStream.pipe(transform)
}
exports.readStream = readStream
