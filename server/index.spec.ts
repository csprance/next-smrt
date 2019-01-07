import { Server as HTTPServer } from 'http';
import { Server as NextServer } from 'next';
import * as request from 'supertest';
import serverPromise from '../server';

let server: HTTPServer;
let next: NextServer;

beforeAll(async () => {
  [server, next] = await serverPromise;
});
afterAll(async () => {
  await server.close();
  await next.close();
});

describe('Test all the endpoints', async () => {
  it('should 404 on a bogus route', async () => {
    return request(server)
      .get('/bogus-route')
      .expect(404);
  });
  it('Test our API Endpoint', done => {
    request(server)
      .post('/api/1')
      .send('name=test')
      .expect(200)
      .end((err, res) => {
        expect(err).toBe(null);
        expect(res.body).toEqual([{ name: 'test', id: '1' }]);
        done();
      });
  });
});
