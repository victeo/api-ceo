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
        const response = await axios.delete(`/api/produto/v1/${props}`);
        window.location.reload()

    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
    }
}

