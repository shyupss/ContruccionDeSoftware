"use client";
import pruebas from "@/app/data/pruebas.json";
import Ramo from "@/app/components/ramo";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

export default function Home() {
  
  const [contador, setContador] = useState(0);
  const handleOnClick = (event) => {
    setContador(contador + 1);
  }

  /* efecto de typing... */
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const title = "calendario";

  useEffect(() => {
      /* si el indice es menor al largo del titulo*/
      if(index<title.length){
      /*  quiero que despues de 125 ms, se ejecute tal cosa...
          setTimeOut recibe dos parametros (las cosas a ejecutar, despues de cuanto) 
          (en este caso, el primero argumento es una funcion flecha)  */
          const timeOutId = setTimeout(() => {
          /*  actualizo el texto que llevo de lo que se lleva escrito concatenando
              y actualizando la variable text... */
              setText((prev) => prev + title.charAt(index));
          /*  aquí actualizo el index y lo aumento en uno */
              setIndex((prev) => prev + 1);
          }, 125);
          return () => clearTimeout(timeOutId);
      }else{
          setIsTyping(false)
      }
  }, [index]);

  /* reloj en tiempo real... */
  const [time, setTime] = useState(0);

  useEffect(()=>{
    const timer_ = setTimeout(()=>{
      setTime(prev=>prev+1);
    }, 1000)
    return ()=>clearTimeout(timer_)
  }, [time])

  /* ordenar ramos por fecha y filtrado... */
  function ordenarRamosPorFecha(ramos) {
    // ramos es un arreglo de todos los objetos, los cuales filtraremos...
    let ramosFiltrados = ramos.filter((ramo)=>new Date(ramo.testDate) - new Date() > 0)
    return ramosFiltrados.sort((a, b) => new Date(a.testDate) - new Date(b.testDate));
  }
  
  return (
    <>
      <div className="cabecera">
        <p className="typing_title">
          {text}
          <span className={`cursor${isTyping ? '' : '_blink'}`}>_ </span>
        </p>
        <Button className="button_" onClick ={handleOnClick}> click! ... {time} </Button>
        <h2 className="count_">{contador}</h2>
      </div>

      <hr className = "linea"></hr>

      <div className="contenedor">
        {ordenarRamosPorFecha(pruebas.tests).map((ramo) => (
          <Ramo ramo_={ramo} ></Ramo>
        ))}
      </div>
    </>
  );
}