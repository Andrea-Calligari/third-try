import React, { useReducer, useState } from 'react';
import Modal from './Modal';
import reducer from './reducer';

// è un hook  che ti permette di gestire lo stato del componente in modo più complesso rispetto a useState. È particolarmente utile quando hai uno stato che dipende da molte azioni diverse o quando lo stato stesso è un oggetto complesso.
const Index = () => {
    const openModal = () => {
        dispatch({ type: 'open' });
    }
    const closeModal = () =>{
        dispatch({type: 'close'});
    }
    const initialState = {
        isModalOpen: false,
        modalContent: 'Eccomi sono un Modal Super!'

    }
    const [state, dispatch] = useReducer(reducer, initialState);

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [modalContent, setModalContent] = useState('Sono un bel Modal ');

    // const toggleModal= () =>{
    //     setIsModalOpen(!isModalOpen);
    // }

    return (
        <section>
            <button onClick={openModal} className='button btn-open'>Open Modal</button>

            <div>
                <Modal modalContent={state.modalContent} modalState={state.isModalOpen} closeModal={closeModal} />
            </div>

        </section>

    )
}

export default Index
