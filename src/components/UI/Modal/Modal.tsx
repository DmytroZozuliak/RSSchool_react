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

  return (
    <div className={`${styles.modal} ${activeModal ? styles.active : ''}`} onClick={hideModal}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={hideModal}>
          &#x2715;
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
