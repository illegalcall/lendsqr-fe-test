// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET } from '@/consts';

type Response = {
  token?: string;
  err?: string;
};

type Body = {
  email: string;
  password: string;
};

interface NextRequest extends NextApiRequest {
  body: Body;
}

export default function login(
  req: NextRequest,
  res: NextApiResponse<Response>
) {
  try {
    if (req.method === 'POST') {
      let token = '';
      const { email, password } = req.body;
      console.log('first', email, password);

      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        token = jwt.sign({ email }, JWT_SECRET as string);
      } else {
        return res.status(401).json({ err: 'wrong email or password.' });
      }

      return res.status(200).json({ token });
    } else {
      return res.status(501).json({ err: 'method not supported' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: 'something went wrong' });
  }
}
