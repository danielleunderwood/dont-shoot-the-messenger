import app from './app';
import Database from './persistence/Database';
import configuration from './utilities/ConfigurationManager';

await Database.initialize();

const { port } = configuration;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});
