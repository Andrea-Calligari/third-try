import React from 'react';

const Modal = ({ modalContent, modalState, toggleModal }) => {
   

    return (
        <>
             {modalState && <div className="overlay" onClick={toggleModal}></div>}
            <section className={`modal-section  ${modalState ? 'show-modal' : ''}`}>
                <div className="modal-content">
                    <h1>Modal</h1>
                    <div className='container'>
                        {modalContent || 'sono un bel Modal'}
                    </div>
                </div>
                <button onClick={toggleModal} className='button btn-delete'>Close Modal</button>
            </section>
            <button onClick={toggleModal} className='button btn-open'>Open Modal</button>
        </>
    );
};

export default Modal;
