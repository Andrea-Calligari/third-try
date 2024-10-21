import React, { useState, useEffect } from 'react';


const Counter = () => {
    const [count, setCounter] = useState(0);
    // const [size, setSize] = useState(window.innerWidth);
    // useEffect(() => {
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     }
    // }, []);

    useEffect(() => {
        console.log(`Hai aggiornato il counter , il valore è ${count}`)
        //  CleanUp function
        return () => {
            
            // serve per azzerare o ripulire gli eventi prima del ri-render del componente!
            console.log('CleanUp prima dello smontaggio del componente ');
        }
    
      }, [count]);// [count] => solo al cambiare del valore di count viene chiamata la funzione senza il ri-render del componente

// const handleResize = () => {
//     // setSize(window.innerWidth);
//         console.log('resizing');
// };

const increment = () => {
    setCounter(count => count + 1);
};

const decrement = () => {
    setCounter(count => count - 1);

};

const reset = () => {
    setCounter(0);
    console.log('hai resettato il counter')
};


return (
    <div className={'container'}>
        <div className={'counter-container'}>
            <h1 style={{ color: '#e44ec3' }}>Counter</h1>
            <div style={{ fontSize: '150px', margin: '12px', color: 'white' }}>{count}</div>
            <ul className={'row-list-counter'}>
                <li className={'col-4'}>
                    <button onClick={increment} className={'button btn-increment'}> Increment </button>
                </li>
                <li className={'col-4'}>
                    <button onClick={reset} className={'button btn-reset'}>Reset</button>
                </li>
                <li className={'col-4'}>
                    <button onClick={decrement} className={'button btn-decrement'}> Decrement </button>
                </li>
            </ul>
        </div>
        {/* <p className={'size'}> Window-Size : {size}</p> */}
    </div>
);
}

export default Counter;
