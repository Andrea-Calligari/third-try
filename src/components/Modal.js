import React from 'react';


const Modal = ({ modalContent, modalState, closeModal }) => {
   

    return (
        <>
             {modalState && <div className="overlay" ></div>}
            <section className={`modal-section  ${modalState ? 'show-modal' : ''}`}>
                <div className="modal-content">
                    <h1>Modal</h1>
                    <div className='container'>
                        {modalContent || 'sono un bel Modal'}
                    </div>
                </div>
                <button onClick={closeModal} className='button btn-delete'>Close Modal</button>
            </section>
        </>
    );
};

export default Modal;
