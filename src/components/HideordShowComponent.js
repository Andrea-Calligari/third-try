import React, { useState, useEffect } from 'react'

const HideordShowComponent = () => {
    const [show, setShowComponent] = useState(false);

    const Element = () => {
        const [counter,setCounter] = useState(0);

        useEffect(()=>{
            //ogni volta che counter cambia abbiamo la chiamata allo useEffect 
           const timer = setTimeout(()=> {setCounter (oldValue => oldValue + 1)},1000);

           //cleanup function per pulire il timer e non farlo  incrementare all'infinito 
            return () => {
                console.log('prima di pulire');
                clearTimeout(timer);
                console.log('timer pulito!');

            }
           
        },[counter]);

        return (
            <div style={{backgroundColor: 'purple', borderRadius:'24px', padding:'24px'}} >
                <h1>Component..</h1>
                <h1>{counter} </h1>
            </div>
        );
    }
    return (
        <div className='container'>
            <div style={{backgroundColor: 'yellow'}} className='container-hide'>
                <button className='button btn-increment' onClick={() => setShowComponent(!show)}>
                    {show ? 'Nascondi' : 'Mostra'}
                </button>
                <div style={{margin:'20px'}}>
                    {show && <Element />}
                </div>
                
            </div>

        </div>
    )
}

export default HideordShowComponent
