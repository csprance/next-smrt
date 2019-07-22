import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!('authorization' in req.headers)) {
    throw Error('Authorization header missing');
  }
  const auth = req.headers.authorization;
  const { token } = JSON.parse(auth);
  const url = `https://api.github.com/user/${token}`;
  try {
    const { data } = await axios.get(url);
    if (data) {
      res.send({ ...data, avatarUrl: data.avatar_url });
    } else {
      res.send(200);
    }
  } catch (error) {
    res.statusCode = error.response.status;
    return res.send(error.response.statusText);
  }
}
