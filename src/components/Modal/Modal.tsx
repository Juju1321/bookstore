import React, { FC, ReactNode } from "react";

import { CloseIconModal } from "src/assets/icons/CloseIconModal";
import styles from "./Modal.module.scss";

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
};
const Modal: FC<ModalProps> = ({ isVisible, onClose, children }) => {
  return isVisible ? (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.closeButton} onClick={onClose}>
          <CloseIconModal />
        </div>
        <div className={styles.infoContainer}>{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
