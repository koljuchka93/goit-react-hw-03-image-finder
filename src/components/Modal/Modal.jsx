import { createPortal } from 'react-dom';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
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
    <div  onClick={handleBackdropClick}>
      <div>{children}</div>
    </div>,
    modalRoot,
  );
};
