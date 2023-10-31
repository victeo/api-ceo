import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import deleteProduct from '../../api/produto/delete'
import { useTranslation } from 'react-i18next';


function DeleteModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        deleteProduct(props.id, 'produto');
        props.updateData();

        // Feche o modal ou faça qualquer outra ação necessária

        handleClose();
    };
    

    const { t } = useTranslation();


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {t('Deletar')}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deletar Categoria</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>{t('Certeza que quer deletar essa categoria?')}</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t('Cancelar')}
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        {t('Deletar')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;