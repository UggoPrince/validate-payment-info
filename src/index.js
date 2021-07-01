import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import router from './routes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to API that validate payment information');
});

app.use('/api/v1', router);

app.use('*', (req, res) =>
  res.status(404).json({
    status: 404,
    message: 'No endpoint matches that URL',
  }),
);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Server listening on port 7000`);
});
