import sqlite3 from 'sqlite3';

const createTable = async (db: sqlite3.Database) => {
  await new Promise<void>((resolve, reject) => {
    db.run(
      `create table if not exists Message (
          Message text not null,
          Id integer not null primary key autoincrement)`,
      (err) => (err ? reject(err) : resolve()),
    );
  });
};

const getDatabase = async () => {
  const db = new sqlite3.Database('file:file.db');

  await createTable(db);

  return db;
};

export default { getDatabase, createTable };
