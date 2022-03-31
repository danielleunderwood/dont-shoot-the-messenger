import supertest from 'supertest';
import app from '../src/app';
import IntegrationTestSetup from './IntegrationTestSetup';
import Database from '../src/persistence/Database';
import StatusCode from '../src/utilities/StatusCode';

beforeAll(async () => {
  await IntegrationTestSetup.dropTable();
  await Database.initialize();
});

afterAll(async () => {
  await IntegrationTestSetup.dropTable();
});

it('stores requests in the queue', async () => {
  const testApp = supertest(app);

  await testApp
    .post('/messages')
    .send({ Message: '1' })
    .expect(StatusCode.Ok);

  await testApp
    .post('/messages')
    .send({ Message: '2' })
    .expect(StatusCode.Ok);

  await testApp
    .get('/messages')
    .expect(StatusCode.Ok, '1');

  await testApp
    .get('/messages')
    .expect(StatusCode.Ok, '2');

  await testApp
    .get('/messages')
    .expect(StatusCode.NoContent, '');
});
