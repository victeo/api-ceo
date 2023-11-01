import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
    message: string
}

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<ResponseData>
// ) {
//     try {
//         const response = await axios.get('http://20.88.41.42/api/categoria/v1');
//         res.status(200).json(response.data)
//     } catch (error) {
//         throw error;
//     }

// }
export async function fetchData(): Promise<ResponseData> {
    try {
        const response = await axios.get('/api/produto/v1/');
        return response.data;
    } catch (error) {
        throw error;
    }
}