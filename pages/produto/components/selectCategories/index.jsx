import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { fetchData } from '../../../api/categoria/get';

function SelectCategories(props) {
    const [data, setData] = useState([]);
    const [idCategory, setIdCategory] = useState('');

    const handleSelectChange = (event) => {
        const selectedCategoryId = event.target.value;
        setIdCategory(selectedCategoryId);
        props.selectIdCategory(selectedCategoryId);
    };

    async function fetchApiData(callback) {
        try {
            const response = await fetchData();
            setData(response);
            if (callback) callback(); // Chama o callback se fornecido
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    }

    useEffect(() => {
        fetchApiData();
        props.selectIdCategory(idCategory); // Mova para cá
    }, [idCategory]); // Certifique-se de incluir idCategory como dependência

    return (
        <Form.Select
            aria-label="Default select example"
            value={idCategory}
            onChange={handleSelectChange}
        >
            <option>Selecione uma categoria</option>
            {data.map((item, index) => (
                <option key={item.id} value={item.id}>{item.nome}</option>
            ))}
        </Form.Select>
    );
}

export default SelectCategories;
