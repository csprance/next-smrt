import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.body;
  const url = `https://api.github.com/users/${username}`;
  try {
    const { data } = await axios.get(url);
    if (data) {
      const { id } = data;
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      return res.send(JSON.stringify({ token: id }));
    } else {
      return res.send('Error');
    }
  } catch (error) {
    res.statusCode = error.response.status;
    return res.send(error.response.statusText);
  }
}
