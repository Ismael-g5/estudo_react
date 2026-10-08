import { useRef, forwardRef, useImperativeHandle } from 'react'

const SomeComponent = forwardRef((props, ref) => {
  const localInputRef = useRef();

    useImperativeHandle(ref, () => ({
        validate: () => {
            if(localInputRef.current.value.length > 3) {
                localInputRef.current.value = '';
                alert('Insira no maximo 3 caracteres');
                localInputRef.current.style.border = '2px solid red';
            }else{
                alert('Input validado com sucesso');
            }
        }
    }))


  return (
    <div>
        <p>Insira no maximo 3 caracteres</p>
        <input type="text" ref={localInputRef} />
    </div>
  )
});

export default SomeComponent
