import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
    message: string
}

export default async function handler(
    props: { id: any; },
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        const response = await axios.delete(`http://20.88.41.42/api/categoria/v1/${props}`);
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
    }
}
