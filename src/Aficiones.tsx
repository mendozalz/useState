import { useState } from "react";
import "./App.css"


const Aficiones = () =>{
  const [contador, setContador] = useState(0);
    const reyesGodos=[
        {
          nombre: "Ataúlfo",
          aficion: "comer toros sin pelar",
        },{
          nombre: "Recesvinto",
          aficion: "leer a Hegel en arameo",
        },{
          nombre: "Teodorico",
          aficion: "la cría del escarabajo en almíbar"
        }
      ]
      const modificar = () => {
        setContador(contador + 1);
        if (contador + 1>= reyesGodos.length) {
          setContador(0)
        }
      }
      
      return (
        <>
          {reyesGodos[contador] && 
            <div>
              <p>
                La Afición principal de <span>{reyesGodos[contador].nombre}</span> es <span>{reyesGodos[contador].aficion}</span>
              </p>
            </div>
          }
    
          <button onClick={modificar}>Ver siguiente</button>
        </>
      )
}

export default Aficiones