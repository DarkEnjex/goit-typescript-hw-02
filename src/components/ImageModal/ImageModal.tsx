import React, {useEffect} from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../../types";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image?: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {

useEffect(() => {
    Modal.setAppElement('#root'); // Вкажіть правильний ID вашого кореневого елемента
  }, []);

  if (!image) return null;

  const { user, likes, urls, alt_description } = image;

  

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={true} className={s.modal}>
      <div className={s.modalContent}>
        <img
          src={urls.regular}
          alt={alt_description || "Image"}
          className={s.modalImage}
        />
        <div className={s.info}>
          <p>
            <strong>Author:</strong> {user.name}
          </p>
          <p>
            <strong>Likes:</strong> {likes}
          </p>
        </div>
        <button onClick={onRequestClose} className={s.closeBtn}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;