import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20">
      <div className="relative bg-white p-2 rounded-lg shadow-lg w-[85%] max-w-96">
        <button
          className="absolute top-0 right-0 m-4 p-4 bg-red-500 text-white rounded-full shadow-xl shadow-red-500 hover:bg-red-600  focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;