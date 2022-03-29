import Database from './Database';
import Message from '../model/Message';

const create = async (message: string) => {
  const db = await Database.getDatabase();

  try {
    await new Promise<void>((resolve, reject) => {
      db.run(
        'insert into Message (Message) values(?)',
        message,
        (err) => (err ? reject(err) : resolve()),
      );
    });
  } finally {
    db.close();
  }
};

const findMany = async () => {
  const db = await Database.getDatabase();

  try {
    const result = await new Promise((resolve, reject) => {
      db.all('select * from Message', (err, rows: Message[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows.map((row) => row.Message));
        }
      });
    });

    return result;
  } finally {
    db.close();
  }
};

export default { create, findMany };
