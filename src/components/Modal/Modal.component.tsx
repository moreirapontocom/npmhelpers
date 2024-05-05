import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

const CustomModal = (props: any) => {
  const {
    show,
    title,
    size,
  } = props;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  return <>
    <Modal show={showModal} size={size || "lg"}>

      {title && title !== "" && <>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
        </Modal.Header>
      </>}

      <Modal.Body>

        {props.children}

      </Modal.Body>
    </Modal>
  </>
};

export default CustomModal;