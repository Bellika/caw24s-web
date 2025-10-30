import request from 'supertest'
import app from '../app.js'

describe('GET /ping', () => {
    it('should return a message', async () => {
        const res = await request(app).get('/ping')
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ message: 'Server is running' })
    })
})