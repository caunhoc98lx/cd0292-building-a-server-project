import fs from 'fs'
import path from 'path'
import sharp, { Sharp } from 'sharp'

export const readStream = (
    imageName: string | undefined,
    width: number | undefined,
    heigh: number | undefined
): Sharp => {
    const imagePath = path.join(
        __dirname,
        `../../images/${imageName || 'encenadaport'}.jpg`
    )
    const readStream = fs.createReadStream(imagePath)

    let transform = sharp()

    if (width || heigh) {
        transform = transform.resize(width, heigh)
    }
    const result = readStream.pipe(transform);
    readStream.on('error', (err) => {
        return new Error('Not found');
    });
    return result
}
