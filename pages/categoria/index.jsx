import React, { useState, useEffect } from 'react';
import Menu from "../../components/theme/header/menu";
import { fetchData } from '../api/categoria/get/index';
import style from './style.scss';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import SearchModal from './components/SearchModal';
import NewModal from './components/NewModal';
import DeleteModal from './components/DeleteModal';

function Categoria() {
    const { t } = useTranslation();
    const [data, setData] = useState(null);

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
    }, []);

    const updateData = () => {
        return fetchApiData();
    }

    return (
        <>
            <Menu />
            <Container>
                <div className="info-box">
                    <Row>
                        <Col><h1 className="info-box__title">Categoria</h1></Col>
                        <Col md="auto">
                            <SearchModal />
                        </Col>
                        <Col xs lg="2">
                            <NewModal updateData={updateData} />
                        </Col>
                    </Row>
                </div>
                <div>
                    {data && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Nome da categoria</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td><DeleteModal id={item.id} updateData={updateData} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </Container>
        </>
    );
}

export default Categoria;
