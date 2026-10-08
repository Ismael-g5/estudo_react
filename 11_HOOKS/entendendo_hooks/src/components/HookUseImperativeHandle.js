import { useRef} from 'react'
import SomeComponent from './SomeComponent'


const UseImperativeHandle = () => {

  const inputRef = useRef();

  
 

  return (
    <div>
      <h2>UseImperativeHandle</h2>
       <SomeComponent ref={inputRef} />
      <button onClick={() => inputRef.current.validate()}>Validade</button>
    </div>
  )
}

export default UseImperativeHandle
    