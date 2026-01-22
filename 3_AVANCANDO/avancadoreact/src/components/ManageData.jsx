import {useState} from 'react'

const ManageData = () => {
  const someData = 10;

  const [number, setNumber] = useState();
  return (
    <>
    <div>ManageData - valor {someData}</div>
    <div> valor:{number}</div>
    </>
  )
}

export default ManageData;