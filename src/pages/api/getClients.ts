import type { NextApiRequest, NextApiResponse } from 'next';
import errorHandler from '../middleware/errorHandler';

const getClients = async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(401).json({ data: [{ name: "hello world" }] })
}

export default errorHandler(getClients);


