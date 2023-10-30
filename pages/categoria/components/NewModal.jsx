import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import setPostCategory from '../../api/categoria/post'
import { useTranslation } from 'react-i18next';


function SearchModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Post
    const [postCategory, setCategory] = useState('');

    const handleSetNewCategory = () => {
        // Chame a função desejada e passe 'categoria' como parâmetro
        setPostCategory(postCategory);
        props.updateData(postCategory);

        // Feche o modal ou faça qualquer outra ação necessária
        handleClose();
    };
    

    const { t } = useTranslation();


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
                                placeholder={t('Nome da Categoria')}
                                autoFocus
                                onChange={(e) => setCategory(e.target.value)}

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