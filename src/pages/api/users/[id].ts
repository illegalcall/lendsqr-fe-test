// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { API_USER_PATH } from '@/consts';

type Response = {
  user?: any;
  err?: string;
};

export default async function getUserById(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    if (req.method === 'GET') {
      let token = '';
      if (req.headers.authorization) {
        token = req.headers.authorization.split(' ')[1];
        if (!token) {
          return res
            .status(401)
            .json({ err: 'please send bearer token to access the api' });
        }
        const decoded = jwt.verify(token, 'mysecret') as any;
        if (!decoded || decoded.email !== 'admin@lendsqr.com') {
          return res.status(401).json({ err: 'cannot access the api' });
        }
      } else {
        return res
          .status(401)
          .json({ err: 'please send bearer token to access the api' });
      }

      const { id } = req.query;

      const user = await axios
        .get(`${API_USER_PATH}/${id}`)
        .then((res) => res.data);

      return res.status(200).json({ user });
    } else {
      return res.status(501).json({ err: 'method not supported' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: 'something went wrong' });
  }
}
