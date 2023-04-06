import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

interface ModalProps {
  activeModal: boolean;
  hideModal: () => void;
  children: ReactNode;
}

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal');
document.body.appendChild(modalRoot);

const Modal = ({ activeModal, children, hideModal }: ModalProps) => {
  const modalElement = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement]);

  if (!activeModal) {
    return null;
  }

  return createPortal(
    <div className={`${styles.modal} ${activeModal ? styles.active : ''}`} onClick={hideModal}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={hideModal}>
          &#x2715;
        </div>
        {children}
      </div>
    </div>,
    modalElement
  );
};

export default Modal;
