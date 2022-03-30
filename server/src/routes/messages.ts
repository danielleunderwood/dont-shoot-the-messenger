import express, { RequestHandler } from 'express';
import StatusCode from '../utilities/StatusCode';
import MessagePersistence from '../persistence/MessagePersistence';
import Message from '../model/Message';

const router = express.Router();

router.post('/', (async (req, res) => {
  const message = req.body as Message;
  await MessagePersistence.enqueue(message.Message);
  return res.status(200).send();
}) as RequestHandler);

router.get('/', (async (req, res) => {
  const result = await MessagePersistence.dequeue();
  const status = result ? StatusCode.Ok : StatusCode.NoContent;
  return res.status(status).send(result);
}) as RequestHandler);

export default router;
