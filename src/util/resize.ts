import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

export const readStream = (
    imageName: string | undefined,
    width: number | undefined,
    heigh: number | undefined
) => {
    const imagePath = path.join(
        __dirname,
        `../../images/${imageName || 'encenadaport'}.jpg`
    )
    const readStream = fs.createReadStream(imagePath)

    let transform = sharp()

    if (width || heigh) {
        transform = transform.resize(width, heigh)
    }
    return readStream.pipe(transform)
}
