import express from 'express'
import router from './routers/index'

const app = express()
const port = 3000

// define route middleware
app.use('/api', router)

app.listen(port, () => {
    console.log(`server started on at http://localhost:${port}`)
})

export default app
