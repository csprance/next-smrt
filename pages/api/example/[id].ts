import { NextApiRequest, NextApiResponse } from 'next';

// This is all server side so you can do secure things here
// You can access this API at [GET]/api/example/:id
export default function handle(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id }
  } = req;
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ name: 'Nextjs', id }));
}
