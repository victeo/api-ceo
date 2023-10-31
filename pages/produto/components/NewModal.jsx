import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import setPostProduct from '../../api/produto/post'
import { useTranslation } from 'react-i18next';
import SelectCategories from './selectCategories/index'


function SearchModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Post
    const [postProduct, setProduct] = useState({
        id: '', // Defina o valor inicial como desejado
        name: '',
        description: '',
        price: ''
    });

    const handleSetNewCategory = () => {
        // Chame a função desejada e passe 'categoria' como parâmetro
        setPostProduct(postProduct);
        props.updateData(postProduct);

        // Feche o modal ou faça qualquer outra ação necessária
        handleClose();
    };


    const { t } = useTranslation();

    const selectIdCategory = (idCategory) => {

        setProduct({ ...postProduct, 'id': idCategory })
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {t('Novo')}

            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>{t('Preencha o campo da nova Categoria')}</h6>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('Nome')}</Form.Label>

                            <Form.Control
                                type="text"
                                placeholder={t('Nome do Produto')}
                                autoFocus
                                onChange={(e) => setProduct({ ...postProduct, 'name': e.target.value })}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('Descrição')}</Form.Label>

                            <Form.Control
                                type="text"
                                placeholder={t('Descrição do Produto')}
                                autoFocus
                                onChange={(e) => setProduct({ ...postProduct, 'description': e.target.value })}

                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{t('Selecione a categoria associada ao produto')}</Form.Label>
                            <SelectCategories selectIdCategory={selectIdCategory} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('Preço')}</Form.Label>

                            <Form.Control
                                type="text"
                                placeholder={t('Preço do Produto')}
                                autoFocus
                                onChange={(e) => setProduct({ ...postProduct, 'price': e.target.value })}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t('Fechar')}
                    </Button>
                    <Button variant="primary" onClick={handleSetNewCategory}>
                        {t('Guardar')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SearchModal;