import createError from 'http-errors';
import express, { ErrorRequestHandler } from 'express';
import logger from 'morgan';

import messagesRouter from './routes/messages';

import HttpException from './exceptions/HttpException';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/messages', messagesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

const errorHandler : ErrorRequestHandler = (err, req, res) => {
  const error = err as HttpException;
  if (req.app.get('env') !== 'development') {
    error.stack = undefined;
  }

  // render the error page
  res.status(error.status || 500);
  res.send(`<h1>${error.message}</h1><div>${error.stack}</div>`);
};

// error handler
app.use(errorHandler);

export default app;
