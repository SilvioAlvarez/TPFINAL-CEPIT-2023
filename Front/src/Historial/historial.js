import React, {useEffect, useState} from "react";
import axios from 'axios';
import './historial.css';

const Historial = () => {

    const [textoHistorial, setTextoHistorial] = useState('');
    
  useEffect(() => {
    const obtenerTextoPorReferencia = async (referencia, setTextoHistorial) => {
      try {
        const responseTexto = await axios.get(`https://app-9d7fdcc2-2916-41fd-93f1-ef602d6afbcc.cleverapps.io/carga/${referencia}`);
        var textoConSaltosDeLinea = responseTexto.data.texto.replace(/\n/g, "<br>");

        setTextoHistorial(textoConSaltosDeLinea);
      } catch (error) {
        console.error(`Error al obtener datos de ${referencia}:`, error);
      }
    };
    obtenerTextoPorReferencia('Texto_Historial', setTextoHistorial);
  }, []);

  const htmlProcesado = { __html: textoHistorial };
    
  return (
    <div className="mt-5 d-flex justify-content-center align-items-center ">
      <div className="col-md-6 text-center">
        <h1 className="titulo-historial">SOBRE NUESTRA INSTITUCIÓN</h1>
        <p className="texto-historial text-center" dangerouslySetInnerHTML={htmlProcesado}></p>
      </div>
    </div>
  );
  }  
export default Historial;