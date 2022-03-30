import app from './app';
import Database from './persistence/Database';

const port = 3000;
await Database.initialize();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});
