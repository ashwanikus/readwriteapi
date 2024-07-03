// test/app.test.js
const request = require('supertest');
const app = require('../app');

describe('File reading', function () {
    test('GET read file async| should return 200 OK and get file content', async () => {
        const response = await request(app).get('/api/read-file-async');
        expect(response.statusCode).toBe(200);
        console.log(response.body.text.data);
        expect(response.body.text.data).toBe(`I am ashwani kumar, working in ttn since 2019 as a UI developer with AEM as backend for several projects. And I have total 8 years of experience in which first 4 year i was a full stack developer in which NOdejs as backend and after onward I worked as a UI developer.`);
    });
});
