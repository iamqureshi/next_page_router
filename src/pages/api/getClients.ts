import type { NextApiRequest, NextApiResponse } from 'next';
import { setupDB } from '../database/setupDB';
import errorHandler from '../middleware/errorHandler';
import clientModel from '../models/client';

const getClients = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            await setupDB();
            const result = await clientModel.find({});
            if (result) {
                res.status(200).json({
                    data: result
                })
            }

            throw new Error("Something went wrong")
        };
        
        throw new Error('https method not defined correct!')
    } catch (ex: any) {
        res.status(401).json({ message: ex.message })
    }
}

export default errorHandler(getClients);


