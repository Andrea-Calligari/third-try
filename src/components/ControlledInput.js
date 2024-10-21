
import React, { useState, useEffect } from 'react'

const ControlledInput = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [tel, setTel] = useState('');
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    name: '',
    email: '',
    tel: '',
  })

  const handleSubmit = (e) => {

    // prevengo l'evento di default
    e.preventDefault();
    
    // controllo se i campi sono vuoti 
    if (person.name === '' || person.email === '' || person.tel === '') {
      alert('Riempi ilform!!');
      return
    } 
    
    // controllo se esiste gia un utente registrato 
    const userExist = people.find(p => p.name === person.name && p.email === person.email && p.tel === person.tel);
    if (userExist) {
      alert('Ti sei già registrato !!');
     
      return;

      // altrimenti lo aggiungo all'array
     } else {

       setPeople([
         ...people,
         {
           //oppure per creare id unici 
           // id: newDate(Date.now()).getTime().toString(
           id: people.length + 1,
           name: person.name,
           email: person.email,
           tel: person.tel,
         }
       ]);
       alert('Dati inviati con successo!!!');
      //  reimposto i campi come vuoti
       setPerson({name: '', email: '', tel:''});
     
     }

  }
   const handleChange = (e) => {
     //  console.log(e.target.value);
    const {name, value} = e.target;
     setPerson({
      ...person,
      [name]: value,
     });
     

   }
  useEffect(() => {
    console.log(people);
  }, [people]);

  return (
    <div style={{ margin: '28px' }}>
      <form className='row-form' >
        <label className='col-3' htmlFor="name">Name : </label>
        <input type="text" id='name' name='name' value={person.name} onChange={handleChange} />
        <label className='col-3' htmlFor="email">Email : </label>
        <input type="email" id='email' name='email' value={person.email} onChange={handleChange} />
        <label htmlFor="tel">Tel : </label>
        <input type="tel" id='tel' name='tel' value={person.tel} onChange={handleChange} />
        <button onClick={handleSubmit} className='button btn-form' type='submit'>Invia</button>
      </form>

    </div>


  )
}

export default ControlledInput
