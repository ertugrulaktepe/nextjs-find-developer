import { NextApiRequest, NextApiResponse } from 'next';
import referance from '../../../lib/referance.json';
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      res.status(200).json(referance);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export default handle;
