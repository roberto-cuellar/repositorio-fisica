import { useEffect, useRef, useState } from "react"
import datos from '../helpers/tesisData'

export const useTesisBusqueda = ({tipoBusqueda,tipoBusquedaVector}) => {
  const isMounted = useRef(true);
  
  useEffect(()=>{ /// En caso de que se salgan de la busqueda mientras aún la están haciendo
      return () => {
          isMounted.current = false;
      }
  },[]);

  // Se establece el estado inicial sin datos y el loading en verdadero
  const [state,setState] = useState({dataNoFiltrada:null,variedades:null,loading:true,error:null}); 

  // Únicamente se renderiza si cambian las entradas
  useEffect(()=>{
    setState({dataNoFiltrada:null,variedades:null,loading:true,error:null});
    /// Busqueda de prueba en el documento adjunto de datos antes de generar la API
    
    
    setTimeout(()=>{
        const tipos = [];
        const tipo = tipoBusquedaVector[tipoBusqueda-1]; 
        datos.forEach(element => {
            tipos.push(element[tipo]); // selecciono el parámetro requerido
        });
        const variedad = [...new Set(tipos)]; // crea un array de tipos no repetidos
        variedad.sort(function (a,b) {
            return a-b;
          })
        setState({...state,dataNoFiltrada:datos,variedades: variedad, loading:false});
    },500)
    
  },[tipoBusqueda])

  return state
}
