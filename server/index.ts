import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as next from 'next';

const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.set('trust proxy', true);

  server.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  // TODO: Right here would be a great spot to route an api request off to an internal API that has a key/auth
  // TODO: Since this is never exposed to the user you can do secure things here
  server.post(`/api/:id`, async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    return res.json([{ id, name }]);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err: Error) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
