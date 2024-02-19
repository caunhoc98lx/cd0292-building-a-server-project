import request from 'supertest'
import app from '../index'

describe('Server', () => {
    it('return a file jpg with status 200', async () => {
        await request(app)
            .get('/api/images?filename=fjord&width=200&heigh=200')
            .expect(200)
            .expect('Content-Type', 'image/jpg')
    })

    it('return bad request with wrong width', async () => {
        await request(app)
            .get('/api/images?filename=fjord&width=test&heigh=200')
            .expect(400, "Width is wrong. Please type input is number")
    })

    it('return bad request with wrong heigh', async () => {
        await request(app)
            .get('/api/images?filename=fjord&width=200&height=test')
            .expect(400, "Height is wrong. Please type input is number")
    })
})
