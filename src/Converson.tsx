import { useEffect, useState } from "react";
import "./App.css";

interface Cambio {
  moneda: string;
  cambio: number; 
}

const Conversor = () => {

  const [pesos, setPesos] = useState(0);
  const [divisas, setDivisas] = useState<number[]>([]);

  const cambios: Cambio[] = [
    { moneda: "Euro", cambio: 0.00023 },
    { moneda: "Peso argentino", cambio: 0.084 },
    { moneda: "Peso mexicano", cambio: 0.0043 },  
    { moneda: "Dólar", cambio: 0.00024 }
  ];

  const cambioPesos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorPesos = Number(e.target.value);
    setPesos(valorPesos);
    
    const resultados = cambios.map(c => c.cambio * valorPesos);
    setDivisas(resultados);
  }

  return (
    <>
      <div className="conversor-container">
        <label htmlFor="pesos">Pesos Colombianos</label>
        <input 
          id="pesos"
          type="number" 
          value={pesos}
          onChange={cambioPesos} 
        />

        {cambios.map((cambio, i) => (
          <div key={i} className="conversor-container">
            <label htmlFor={cambio.moneda}>{cambio.moneda}</label>
            <input
              id={cambio.moneda}
              type="number"
              value={divisas[i]} 
              readOnly 
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Conversor;