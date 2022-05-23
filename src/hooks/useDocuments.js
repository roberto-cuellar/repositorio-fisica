import {useState, useEffect} from 'react'
import datos from '../helpers/tesisData'

export const useDocuments = ({keywords ="",tipoBusqueda=0}) => {
    const [state,setState ] = useState({
        data: [],
        loading: true,
        selectionVector: [],
    });
    // console.log("Tipo de busqueda hook useDocument: ",tipoBusqueda);
    

    const busqueda = (keywords, tipoBusqueda) => {
                
        if(tipoBusqueda==0){
            setState({...state,data: datos,loading:false,selectionVector: []})
        }
        if(tipoBusqueda==1){
                    // console.log("Tipó de busqueda NO estandar: ",tipoBusqueda)
                    setState({...state,data: datos});
                    const years = [];
                    datos.forEach(element => {
                        years.push(element.anio)              
                    });
                    const noRepeatYears = [...new Set(years)]; // Create an array of non repeated year
                    if(keywords.length === 0){
                    setState({...state,data: datos, loading:false,selectionVector: noRepeatYears});}
                    else{
                        const regresar = [];
                        datos.forEach((elemento)=>{
                            if(elemento.anio == keywords){
                                regresar.push(elemento)
                            }
                        })
                        setState({...state,data: regresar, loading:false,selectionVector: [keywords]});
                    }
                }
        if(tipoBusqueda==2){
            setState({...state,data: datos,loading:false,selectionVector: []})
        }
        if(tipoBusqueda==3){
            setState({...state,data: datos,loading:false,selectionVector: []})
        }
    }

    
    // useEffect(()=>{
    //     console.log("CAMBIÓ EL TIPO DE BUSQUEDA: ",tipoBusqueda , ", Keyword: ",keywords)
    //     if(tipoBusqueda==0){
    //         // console.log("Tipó de busqueda estandar: ",tipoBusqueda)
    //         setState({...state,data: datos, loading:false,selectionVector: []});
    //     }
    //     if(tipoBusqueda==1){
    //         // console.log("Tipó de busqueda NO estandar: ",tipoBusqueda)
    //         setState({...state,data: datos});
    //         const years = [];
    //         datos.forEach(element => {
    //             years.push(element.anio)              
    //         });
    //         const noRepeatYears = [...new Set(years)]; // Create an array of non repeated year
    //         setState({...state,data: datos, loading:false,selectionVector: noRepeatYears});
    //     }
    // },[tipoBusqueda,keywords])



    return {state, busqueda}

}
