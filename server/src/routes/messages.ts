import express, { RequestHandler } from 'express';
import MessagePersistence from '../persistence/MessagePersistence';

const router = express.Router();

router.get('/:message', (async (req, res) => {
  await MessagePersistence.create(req.params.message);
  return res.status(200).send(
    await MessagePersistence.findMany(),
  );
}) as RequestHandler);

export default router;
