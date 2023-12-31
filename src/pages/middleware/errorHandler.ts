// middleware/errorHandler.ts

import { NextApiRequest, NextApiResponse } from 'next';

interface ErrorHandler {
    (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>): (
        req: NextApiRequest,
        res: NextApiResponse
    ) => Promise<void>;
}

const errorHandler: ErrorHandler = (handler) => async (req, res) => {
    try {
        await handler(req, res);
    } catch (error) {
        console.error('Error caught by errorHandler:', error);
        res.status(500).json({ stack: error, message: 'Internal Server Error' });
    }
};

export default errorHandler;
