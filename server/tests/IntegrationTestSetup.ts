import Database from '../src/persistence/Database';

const dropTable = async () => {
  await Database.initialize();
  await Database.runAsync('drop table if exists Message');
};

export default { dropTable };
