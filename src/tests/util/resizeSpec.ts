import { readStream } from '../../util/resize'

describe('readStream function', () => {
    it('should return a readable stream', () => {
        const stream = readStream('encenadaport', 100, 200)
        expect(stream).toBeInstanceOf(require('stream').Readable)
    })

    it('should handle missing width and height', () => {
        const stream = readStream('encenadaport', undefined, undefined)
        expect(stream).toBeInstanceOf(require('stream').Readable)
    })

    it('should resize the image if width and height are provided', () => {
        const stream = readStream('icelandwaterfall', 300, 400)
        expect(stream).toBeInstanceOf(require('stream').Readable)
    })

    it('should return error when can not found image', () => {
        const stream = readStream('icelandwaterfallnot', 300, 400)
        expect(stream.readableLength).toBe(0)
    })
})
