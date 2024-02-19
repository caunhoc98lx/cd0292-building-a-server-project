"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resize_1 = require("../../util/resize");
describe('readStream function', () => {
    it('should return a readable stream', () => {
        const stream = (0, resize_1.readStream)('encenadaport', 100, 200);
        expect(stream).toBeInstanceOf(require('stream').Readable);
    });
    it('should handle missing width and height', () => {
        const stream = (0, resize_1.readStream)('encenadaport', undefined, undefined);
        expect(stream).toBeInstanceOf(require('stream').Readable);
    });
    it('should resize the image if width and height are provided', () => {
        const stream = (0, resize_1.readStream)('icelandwaterfall', 300, 400);
        expect(stream).toBeInstanceOf(require('stream').Readable);
    });
    it('should return error when can not found image', () => {
        const stream = (0, resize_1.readStream)('icelandwaterfallnot', 300, 400);
        expect(stream.readableLength).toBe(0);
    });
    it('should return error when file name is wrong', () => {
        const stream = (0, resize_1.readStream)('icelandwater', 300, 400);
        stream.on('error', (error) => {
            expect(error).toEqual(new Error('Not found'));
        });
    });
});
