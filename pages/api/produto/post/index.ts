import { arrow } from '@material-tailwind/react/types/components/select';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
    message: string
}
type Props = {
    name: string;
    description: string;
    id: number;
    price: number;
}

export default async function handler(
    props: Props,
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    console.log(props.name)
    try {
        const response = await axios.post('http://20.88.41.42/api/produto/v1', {
            // Adicione aqui os dados que deseja enviar no corpo da requisição POST
            "nome": props.name,
            "descricao": props.description,
            "idCategoria": props.id,
            "valor": props.price
        });
        window.location.reload()
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
    }
}
