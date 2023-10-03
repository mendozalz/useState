import  "./App.css";
import { useState } from "react";


const App = () =>{
  const [sumar1, setSumar1] = useState();
  const [sumar2, setSumar2] = useState();
  const [resultado, setResultado] = useState();

  const resultadoSuma = () =>{
    setResultado(Number(sumar1) + Number(sumar2)) 
  }

  const suma1 = (e:any) =>{
    setSumar1(e.target.value)
    console.log(e.target.value);
    
  }
  const suma2 = (e:any) =>{
    setSumar2(e.target.value)
    console.log(e.target.value);
    
  }

  return(
    <>
    <div className="container">
      <input type="number" value={sumar1}  onChange={suma1}/> +
      <input type="number" value={sumar2}  onChange={suma2}/> =
      <input type="number" value={resultado} readOnly />
      <button onClick={resultadoSuma}>Resultado</button>
    </div>
    </>
  )
}

export default  App