import express from 'express';

const router = express.Router();

const queue = new Array<string>();

router.get('/:message', (req, res) => {
  queue.push(req.params.message);
  return res.status(200).send(JSON.stringify(queue));
});

export default router;
