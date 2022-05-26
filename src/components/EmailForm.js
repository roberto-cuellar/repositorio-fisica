import React from 'react'

export const EmailForm = () => {

    class Correo{
        constructor(nombre,correo,contenido){
            this.nombre = nombre;
            this.correo = correo;
            this.contenido = contenido;
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const nombre = formData.get('nameFrom1');
        const correo = formData.get('emailFrom1');    
        const contenido = formData.get('emailContent1');   
        const correoEnviar = new Correo(nombre,correo,contenido); 
        enviarCorreo(correoEnviar);
        console.log(nombre, correo,contenido,correoEnviar)
    }


    const enviarCorreo = (parametros)=>{


        fetch("http://localhost:8000/",{ // direction 
            method: 'POST', 
            headers:{'content-type': 'application/json'}, /// specify the encode
            body: JSON.stringify(parametros)
        })
            //.then(response => { return response.json()})
            .then(response => {return response.json()})
            .then(data => console.log(data))
            .catch((error)=>{console.log("Error: ",error);})
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <input class='form-control mb-2' type="text" name="nameFrom1" id="nameFrom1" placeholder="Ingrese su nombre*" autoComplete="off" value="Roberto Cuellar Lozano" /> 
            <input class='form-control mb-2' type="text" name="emailFrom1" id="emailFrom1" placeholder="Ingrese su correo*" autoComplete="off" value="lozano.roberto.2018@gmail.com"/>
            <textarea class="form-control mb-2" name="emailContent1" id="emailContent1" cols="30" rows="5" placeholder="Cuerpo del Correo" />   
            <button class="btn btn-secondary mb-2" type="submit">Enviar</button> 
        </form>
    </div>
  )
}
