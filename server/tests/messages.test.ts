import supertest from 'supertest';
import app from '../src/app';

it('stores requests in the queue', async () => {
  const testApp = supertest(app);

  await testApp
    .get('/messages/1')
    .expect(200, '["1"]');

  await testApp
    .get('/messages/2')
    .expect(200, '["1","2"]');
});
