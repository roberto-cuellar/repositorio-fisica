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
                    //noRepeatYears.sort(function(a, b){return 0.5 - Math.random()});

                    if(keywords.length === 0){
                    setState({...state,data: datos, loading:false,selectionVector: noRepeatYears});}
                    else{
                        const regresar = [];
                        datos.forEach((elemento)=>{
                            if(elemento.anio == keywords){
                                regresar.push(elemento)
                            }
                        })
                        regresar.reverse();
                        setState({...state,data: regresar, loading:false,selectionVector: [keywords]});
                    }
                }
        if(tipoBusqueda==2){
            setState({...state,data: datos});
                    const tutors = [];
                    datos.forEach(element => {
                        tutors.push(element.tutor)              
                    });
                    const noRepeatTutors = [...new Set(tutors)]; // Create an array of non repeated year
                    //noRepeatYears.sort(function(a, b){return 0.5 - Math.random()});

                    if(keywords.length === 0){
                    setState({...state,data: datos, loading:false,selectionVector: noRepeatTutors});}
                    else{
                        const regresar = [];
                        datos.forEach((elemento)=>{
                            if(elemento.tutor == keywords){
                                regresar.push(elemento)
                            }
                        })
                        regresar.reverse();
                        setState({...state,data: regresar, loading:false,selectionVector: [keywords]});
                    }
        }
        if(tipoBusqueda==3){
            setState({...state,data: datos});
                    const areas = [];
                    datos.forEach(element => {
                        areas.push(element.areas)              
                    });
                    const noRepeatAreas = [...new Set(areas)]; // Create an array of non repeated year
                    //noRepeatYears.sort(function(a, b){return 0.5 - Math.random()});

                    if(keywords.length === 0){
                    setState({...state,data: datos, loading:false,selectionVector: noRepeatAreas});}
                    else{
                        const regresar = [];
                        datos.forEach((elemento)=>{
                            if(elemento.areas == keywords){
                                regresar.push(elemento)
                            }
                        })
                        regresar.reverse();
                        setState({...state,data: regresar, loading:false,selectionVector: [keywords]});
                    }
        }
        if(tipoBusqueda==4){
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
