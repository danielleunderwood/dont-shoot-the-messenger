import express, { RequestHandler } from 'express';
import StatusCode from '../utilities/StatusCode';
import MessagePersistence from '../persistence/MessagePersistence';

const router = express.Router();

router.post('/:message', (async (req, res) => {
  await MessagePersistence.enqueue(req.params.message);
  return res.status(200).send();
}) as RequestHandler);

router.get('/', (async (req, res) => {
  const result = await MessagePersistence.dequeue();
  const status = result ? StatusCode.Ok : StatusCode.NoContent;
  return res.status(status).send(result);
}) as RequestHandler);

export default router;
