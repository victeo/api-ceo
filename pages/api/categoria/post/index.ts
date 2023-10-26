import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
    message: string
}

export default async function handler(
    props: { body: any; },
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    let body = props
    console.log(props)
    try {
        const response = await axios.post('http://20.88.41.42/api/categoria/v1', {
            // Adicione aqui os dados que deseja enviar no corpo da requisição POST
            "nome": body
        });
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
    }
}
