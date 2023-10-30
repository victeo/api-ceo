import Menu from "../../components/theme/header/menu"
import { fetchData } from '../api/categoria/get/index';
import React, { useState, useEffect } from 'react';
import style from './style.scss'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import SearchModal from './components/SearchModal'
import NewModal from './components/NewModal'
import Head from "next/head";


export default function index() {

    const { t } = useTranslation();


    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchApiData() {
            try {
                const response = await fetchData();
                setData(response);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        }

        fetchApiData();
    }, []);

    return (
        <>
         <Head>
                <title>Categoria</title>
                <meta property="og:title" content="Exemplo de CRUD" />
                <meta property="og:description" content="Exemplo de CRUD usando o react" />
            </Head>
            <Menu />
            <Container>
                <div className="info-box">
                    <Row>
                        <Col><h1 className="info-box__title">Categoria</h1></Col>
                        <Col md="auto">
                            <SearchModal />
                        </Col>
                        <Col xs lg="2">
                            <NewModal />
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
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </ Container>

        </>
    );
}