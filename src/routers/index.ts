import express from 'express'
import { readStream } from '../util/resize'

const routers = express.Router()

routers.get('/images', (req, res) => {
    // Extract the query-parameter
    const widthString = req.query.width
    const heightString = req.query.height
    const filename = req.query.filename

    // Parse to integer if possible
    let width, height
    if (widthString) {
        width = parseInt(widthString as string)
    }
    if (heightString) {
        height = parseInt(heightString as string)
    }
    // Set the content-type of the response
    res.type(`image/jpg`)

    // Get the resized image
    readStream(filename as string, width, height).pipe(res)
})

export default routers
