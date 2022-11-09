import { createPortal } from 'react-dom';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  // Додає слухачі (mount)
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Прибирає слухачі (unmount)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Спостерігає за Escape і закриває модалку
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  // Спостерігає за бекдропом і закриває модалку
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};



{/* <div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div> */}