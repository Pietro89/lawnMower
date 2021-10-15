import chai from "chai";
import {app} from "../../app"
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const brokenInputPath = './src/tests/mocks/brokenInput.txt'
const okInputPath = './src/tests/mocks/input.txt'

describe('API - mowLawn controller', () => {

    it('should return a 405 error when trying to GET', async () => {
        const res = await chai.request(app).get('/mowLawn')
        chai.expect(res.status).to.equal(405);
    })

    it('should return a 415 error when body is missing', async () => {
        const res = await chai.request(app)
            .post('/mowLawn');
        chai.expect(res.status).to.equal(415);
    })

    it('should return a 400 error when file is invalid', async () => {
        const res = await chai.request(app)
            .post('/mowLawn')
            .attach('inputFile', brokenInputPath);
        chai.expect(res.status).to.equal(400);
    })

    it('should return a 200 ok when file is valid', async () => {
        const res = await chai.request(app)
            .post('/mowLawn')
            .attach('inputFile', okInputPath);
        chai.expect(res.status).to.equal(200);
    })

    it('should return the example result with the right final positions', async () => {
        const res = await chai.request(app)
            .post('/mowLawn')
            .attach('inputFile', okInputPath);
        chai.expect(res.text).to.equal(`1 3 N\n5 1 E`);
    })
})
