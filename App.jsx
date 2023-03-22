import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import lottie from 'lottie-web';
// import { useState } from 'react';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);
function App() {
  const [load, setLoad] = useState(false)
  const showicon = () => {
    setLoad(!load)
    
  }


  return (
    <>
      <div>Blank</div>
      <lord-icon trigger="hover" src="/my-icon.json"></lord-icon>
      {
        load ? (

          <lord-icon
            src="https://cdn.lordicon.com/onpfqckj.json"
            trigger="loop"
          >
          </lord-icon>
        ) : null
      }
      <lord-icon
    src="https://cdn.lordicon.com/ymrqtsej.json"
    trigger="loop"
    colors="primary:#320a5c"
    >
<lord-icon 
src="https://cdn.lordicon.com/ghuoxywp.json"
trigger="loop"
colors="primary:#320a5c">ok</lord-icon>

</lord-icon>
      <button onClick={showicon}>SHOW LOAD</button>
    </>
  )
}

export default App
