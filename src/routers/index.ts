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
        if(Number.isNaN(width) || width === undefined){
            res.status(400);
            res.send("Width is wrong. Please type input is number")
        }
    }
    if (heightString) {
        height = parseInt(heightString as string);
        if(Number.isNaN(height) || height === undefined){
            res.status(400);
            res.send("Height is wrong. Please type input is number")
        }
    }
    // Set the content-type of the response
    res.type(`image/jpg`)

    // Get the resized image
    readStream(filename as string, width, height).pipe(res);
})

export default routers
