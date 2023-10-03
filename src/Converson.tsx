import { useEffect, useState } from "react";
import "./App.css";

const Conversor = () =>{
    const [pesos, SetPesos] = useState(0)
    const [divisa, setDivisa] = useState(0)
    const cambios=[
        {
          moneda: "Euro",
          cambio:0.00023,
        },{
          moneda: "Peso argentino",
          cambio:0.084,
        },{
          moneda: "Peso mexicano",
          cambio:0.0043,
        },{
          moneda: "Dólar",
          cambio:0.00024
        }
      ]

      const cambioPesos = (e) =>{
            const valorPesos = e.target.value;
            SetPesos(valorPesos);
            const resultado = cambios.map(el => el.cambio * valorPesos);
            setDivisa(resultado)
      }

    return(
        <>
        <div className="conversor-container">
        <label htmlFor="u0">Pesos Colombiando</label>
        <input id="u0" type="number" value={pesos} onChange={cambioPesos}/>
        {
            cambios.map((cambiar, i) =>{
                return(
                    <div className="conversor-container" key={i}>
                        <label htmlFor={i}>{cambiar.moneda}</label>
                        <input id={i} type="number" value={divisa[i]} readOnly/>
                    </div>
                )
            } )
        }
        </div>
        </>
    )
}

export default Conversor