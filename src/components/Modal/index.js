import React from 'react';

//currentPhoto now contains the two critical data points needed for the modal, we can pass in currentPhoto as a prop to the Modal
const Modal = ({ onClose, currentPhoto}) => {
    const {name, category, description, index } = currentPhoto;

return (
    <div className="modalBackdrop">
        <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
            <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category"/>
            <p>{description}</p>
            <button onClick={onClose} type="button">
                Close this modal
            </button>
        </div>
    </div>
  );
}

export default Modal;