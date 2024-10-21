import React,{useState} from 'react'

const ShortCircuitEvaluation = () => {
    const [word,setWord] = useState(false);
    // const [word,setWord] = useState('');

    // Short Circuit Evaluation con operatore ||
    // const firstWord = word || 'Parola é false'

    // Short Circuit Evaluation con operatore &&
    // const secondWord = word && 'Parola e questa stringa sono true';

    //Ternary Operator 
    const thirdWord = !word ? <h2 style={{color:'green',fontWeigth:'bold'}}>La terza parola é TRUE</h2> : <h2 style={{color:'red',fontWeigth:'bold'}}> La terza parola é FALSE</h2>;
  return (
    <div>
        
      <h2 style={{color:'red',fontWeigth:'bold'}}>{word ||'Parola é false' }</h2>
      <h2 style={{color:'green',fontWeigth:'bold'}}>{word && 'Parola e questa stringa sono true' }</h2>
      <span> {thirdWord}</span>
     
    </div>
  )
}

export default ShortCircuitEvaluation
