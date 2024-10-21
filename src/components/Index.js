import React,{useState} from 'react';
import Modal from './Modal';

const Index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('Sono un bel Modal ');

    const toggleModal= () =>{
        setIsModalOpen(!isModalOpen);
    }
    
  return (
    <section>
        <div>
            <Modal modalContent={modalContent} modalState={isModalOpen} toggleModal={toggleModal} />
        </div>

    </section>

  )
}

export default Index
