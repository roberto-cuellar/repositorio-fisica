import React, {useEffect, useState} from 'react'

export const useFiltrosTesis = ({filtro,dataNoFiltrada,tipoBusqueda,tipoBusquedaVector}) => {

    // Se establece el estado inicial sin datos y el loading en verdadero
    const [state,setState] = useState({dataFiltrada:dataNoFiltrada,loading:true,error:null}); 
    useEffect(()=> {
        setState({...state,dataFiltrada:dataNoFiltrada});
        console.log("Parametros: ",filtro,dataNoFiltrada,tipoBusqueda,tipoBusquedaVector)
        // if(!!dataNoFiltrada){
        if(filtro.length === 0){
            setState({...state,dataFiltrada: dataNoFiltrada, loading:false});}
        else{   
            const tipo = tipoBusquedaVector[tipoBusqueda-1]; 
            console.log("TIPO TIPO ",tipo)
            const regresar = [];
            dataNoFiltrada.forEach((elemento)=>{
                if(elemento[tipo] == filtro){
                    regresar.push(elemento)
                }
            })
            regresar.reverse();
            setState({...state,dataFiltrada: regresar, loading:false});

        }

    // }



    },[dataNoFiltrada,filtro])
    

    return state
}
