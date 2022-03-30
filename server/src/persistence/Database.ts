import sqlite3 from 'sqlite3';

const getDatabase = () => {
  const db = new sqlite3.Database('file:file.db');

  return db;
};

const runAsync = async (query: string, ...params: unknown[]) => {
  const db = getDatabase();

  try {
    await new Promise<void>((resolve, reject) => {
      db.run(query, params, (err) => (err ? reject(err) : resolve()));
    });
  } finally {
    db.close();
  }
};

const initialize = async () => {
  await runAsync(`create table if not exists Message (
          Message text not null,
          Id integer not null primary key autoincrement)`);
};

const getAsync = async <T>(query: string) => {
  const db = getDatabase();

  try {
    const result = await new Promise<T>((resolve, reject) => {
      db.get(query, (err, row: T) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });

    return result;
  } finally {
    db.close();
  }
};

export default {
  initialize, runAsync, getAsync,
};
