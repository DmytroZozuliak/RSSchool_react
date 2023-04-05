import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  activeModal: boolean;
  hideModal: () => void;
  children: ReactNode;
}

const Modal = ({ activeModal, children, hideModal }: ModalProps) => {
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
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;
