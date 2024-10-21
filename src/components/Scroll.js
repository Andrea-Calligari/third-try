import React, {useRef} from 'react'

const Scroll = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    console.log(ref);
    const handleScroll = ()=>{
        if(!ref ||!ref.current){
            return;
        }else{
            ref.current.scrollIntoView({behavior: 'smooth', block: 'center'})
        }
    }
    const handletoStart = () => {
        if(!ref2|| !ref2.current){
            return;
        }else{
            ref2.current.scrollIntoView({behavior:'auto', block: 'start'})
        }
    }
  return (
    <div ref={ref2} >
      <h1 >useRef</h1>
      <button className='btn-card button'onClick={handleScroll}>Scroll</button>
      <div style={{height:'100vh'}}></div>
      <h2 ref={ref}>Testo </h2>
      <div style={{height:'10vh'}}></div>
      <button onClick={handletoStart} className='button btn-card'>Back to Start</button>
    </div>
  )
}

export default Scroll
