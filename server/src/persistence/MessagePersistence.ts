import Database from './Database';
import Message from '../model/Message';

const enqueue = async (message: string) => {
  await Database.runAsync('insert into Message (Message) values(?)', message);
};

const dequeue = async () => {
  const row = await Database.getAsync<Message>('select * from Message');

  if (row) {
    await Database.runAsync('delete from Message where Id = (?)', row.Id);

    return row.Message;
  }
  return undefined;
};

export default { enqueue, dequeue };
