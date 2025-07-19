import { useContext, useState } from "react"
import { Context } from "./Context";
function App() {
   const [count, setCount] = useState(0);

  return (
    <div>
      <Context.Provider value = {count}>
        <Count count={count} setCount={setCount}/>
      </Context.Provider>
    </div>
  )
}

function Count({count , setCount}){
  return(
    <div>
    <CountRender count = {count} />
    <Buttons count={count} setCount={setCount} />
    </div>
  )
}
function CountRender(){
  const count = useContext(Context)
  return <div>
    {count}
  </div>
}

  function Buttons({setCount}){
    const count = useContext(Context)
    return(
    <div>
      <button onClick={()=>{setCount(count + 1)}}>Increase</button>
      <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
    </div>
  );
}

export default App
