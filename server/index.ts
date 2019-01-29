import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import * as http from 'http';
import * as next from 'next';

const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
server.set('trust proxy', true);

server.use(
  bodyParser.urlencoded({
    extended: true
  })
);
server.use(helmet());

// TODO: Right here would be a great spot to route an api request off to an internal API that has a key/auth
// TODO: This is run on the server so take advantage of any special modules here
server.post(`/api/:id`, async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const returnBody = [{ id, name }];

  return res.json(returnBody);
});

server.get('*', (req, res) => handle(req, res));

export default app
  .prepare()
  .then(() => {
    // Create the http server and return it like this for jest testing
    const httpServer = http.createServer(server);
    httpServer.listen(port, () =>
      console.log(`Listening on port http://localhost:${port}`)
    );
    return [httpServer, app];
  })
  .catch(console.error) as Promise<[http.Server, next.Server]>;
