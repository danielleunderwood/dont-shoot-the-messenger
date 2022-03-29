import { Database } from 'sqlite3';

const dropTable = async (db: Database) => {
  await new Promise<void>((resolve, reject) => {
    db.run(
      'drop table if exists Message',
      (err) => (err ? reject(err) : resolve()),
    );
  });
};

export default { dropTable };
