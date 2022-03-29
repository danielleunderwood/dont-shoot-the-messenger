import supertest from 'supertest';
import app from '../src/app';
import IntegrationTestSetup from './IntegrationTestSetup';
import Database from '../src/persistence/Database';

beforeAll(async () => {
  const db = await Database.getDatabase();
  await IntegrationTestSetup.dropTable(db);
  await Database.createTable(db);
  db.close();
});

afterAll(async () => {
  const db = await Database.getDatabase();
  await IntegrationTestSetup.dropTable(db);
  db.close();
});

it('stores requests in the queue', async () => {
  const testApp = supertest(app);

  await testApp
    .get('/messages/1')
    .expect(200, '["1"]');

  await testApp
    .get('/messages/2')
    .expect(200, '["1","2"]');
});
