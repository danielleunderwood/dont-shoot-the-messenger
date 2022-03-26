import supertest from 'supertest';
import app from '../src/app';

it('Tests', async () => {
  const response = await supertest(app).get('/').expect(200);
  expect(response.body).toBe('Hello world!');
});
