import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.content}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
      <div className={styles.info}>
        <p>
          <strong>Yazar:</strong> {image.user.name}
        </p>
        <p>
          <strong>Beğeni:</strong> {image.likes}
        </p>
        {image.description && (
          <p>
            <strong>Açıklama:</strong> {image.description}
          </p>
        )}
        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Kapat
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
