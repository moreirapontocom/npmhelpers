import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Separator from '../Separator/Separator.component';
import { ConfirmContext } from '../../context/Confirm.context';

const Confirm = (props: any) => {
    const [show, setShow] = useState(false);
    const {confirm, setConfirm, onConfirm} = useContext(ConfirmContext);

    const handleCancel = () => {
        setShow(false);
        setConfirm({type: undefined});
    };

    const handleConfirm = () => {
        setShow(false);
        setConfirm({type: undefined});
        onConfirm(true);
    };

    useEffect(() => {
        if (confirm.type !== undefined) {
            setConfirm(confirm);
            setShow(true);
        } else {
            setConfirm({type: undefined});
            setShow(false);
        }
    }, [confirm.type]);

    return <>
        <Modal
            show={show}
            onHide={handleCancel}
            backdrop="static"
            keyboard={false}
            animation={false}
            centered>
                <Modal.Body>
                    <strong>{confirm.title}</strong>

                    <Separator size={20} />

                    <span dangerouslySetInnerHTML={{__html: confirm.message}}></span>

                    {confirm.messageLine2 && <>
                        <Separator size={10} />
                        <span dangerouslySetInnerHTML={{__html: confirm.messageLine2}}></span>
                    </>}

                    <Separator size={10} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleCancel}>{confirm.buttonCancelLabel || "Cancelar"}</Button>
                    <button type='button' className={`btn btn-${confirm.type}`} onClick={handleConfirm}>
                        <i className={`fas fa-${confirm.type === "danger" ? "exclamation-triangle" : "check-circle"} me-2`}></i>
                        {confirm.buttonLabel}
                    </button>
                </Modal.Footer>
        </Modal>
    </>
};

export default Confirm;
