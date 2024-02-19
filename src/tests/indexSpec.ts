import request from 'supertest'
import app from '../index'

describe('Server', () => {
    it('return a file jpg with status 200', async () => {
        await request(app)
            .get('/api/images?filename=fjord&width=200&heigh=200')
            .expect(200)
            .expect('Content-Type', 'image/jpg')
    })
})
