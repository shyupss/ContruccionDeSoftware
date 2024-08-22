"use client";

import { useEffect, useState } from "react";
import pruebas from "@/app/data/pruebas.json" //importo el archivo con su info como la variable pivote: pruebas

// tengamos en cuenta que el archivo pruebas.json es un objeto, y nosotros lo importamos con la variable pruebas,
// y pues, por la misma razón, podemos acceder a sus "datos" con el prefijo "."

// si revisamos el pruebas.json, tenemos un atributo asignado al objeto, llamada: pageTitle, el cual tiene el valor 
// asignado de "Mis pruebas"

// entonces definiremos el nombre como el nombre del archivo json que estamos exportando, y definiremos sus "atributos"
// como c_i, teniendo la cantidad de i caracteristicas...

// en este caso, el objeto pruebas.json tiene dos caracteristicas

export default function Home() {

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const title_ = "asignaturas";
  
  // efecto de typing...
  useEffect(() => {
    if(index < title_.length) {
      const timeoutId = setTimeout(() => {
        setText((prev) => prev + title_.charAt(index));
        setIndex((prev) => prev + 1);
      }, 125); // este parám6etro es el valor de ms que tarda por cada char que se escribe
      return () => clearTimeout(timeoutId);
    } else {
      setIsTyping(false); // esto me dice si la animacion de typing ha terminado
    }
  }, [index]);

  // este es el estado q me sirve para forzar el re-renderizado de la página
  const [timer, setTimer] = useState(0); 

  // efecto para actualizar la página cada segundo q pasa
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prev => prev + 1); // actualizo el estado para forzar el re-renderizado
    }, 1000);

    return () => clearInterval(intervalId); // limpiar el intervalo
  }, []);

  // funcion para que ordene los ramos por fecha
  function ordenarRamosPorFecha(ramos) {
    return ramos.sort((a, b) => new Date(a.testDate) - new Date(b.testDate));
  }
  
  // ordenar los ramos antes de que se rendericen ...
  const ramosOrdenados = ordenarRamosPorFecha(pruebas.tests);
  const ramosMostrados = [];

  for(let i = 0; i<ramosOrdenados.length; i++){
    if(tiempo_restante(ramosOrdenados[i].testDate)[2] === ' ')
      ramosMostrados.push(ramosOrdenados[i]);
  }
  
  function tiempo_restante(fecha){

    const actual_ = new Date();
    const date_exam = new Date(fecha);
    const time_diff = date_exam - actual_;

    if(time_diff <= 0)
      return ["0 días - 0:0:0", 0, '_'];

    // yo optaré por retornar en un formato de:
    //            [string de la fecha, dias, '_' el tiempo < 0, ' ' si es >= 0]
    
    let años_dif = date_exam.getFullYear() - actual_.getFullYear();
    let meses_dif = date_exam.getMonth() - actual_.getMonth();
    let dias_dif = date_exam.getDate() - actual_.getDate();
    let horas_ = date_exam.getHours() - actual_.getHours();
    let minutos_ = date_exam.getMinutes() - actual_.getMinutes();
    let segundos_ = date_exam.getSeconds() - actual_.getSeconds();

    if (segundos_ < 0) {
      segundos_ += 60;
      minutos_--;
    }
    if (minutos_ < 0) {
        minutos_ += 60;
        horas_--;
    }
    if (horas_ < 0) {
        horas_ += 24;
        dias_dif--;
    }
    if (dias_dif < 0) {
        meses_dif--;
        const ultimoDiaMesAnterior = new Date(date_exam.getFullYear(), date_exam.getMonth(), 0).getDate();
        dias_dif += ultimoDiaMesAnterior;
    }
    if (meses_dif < 0) {
        años_dif--;
        meses_dif += 12;
    }

    const total_dias = años_dif * 365 + meses_dif * 30 + dias_dif;

    return [`${total_dias <= 9 ? '0'+String(total_dias) : total_dias} días - ${horas_ <= 9 ? '0'+String(horas_): horas_}:${minutos_ <= 9 ? '0'+String(minutos_) : minutos_}:${segundos_ <= 9 ? '0'+String(segundos_) : segundos_}`, total_dias, ' '];
  }

  return (
    <>

      <title Mis pruebas ></title>

      <div className="cabecera">
        <p className="typing_effect">
          {text}
          <span className={`cursor ${isTyping ? '' : 'blink'}`}>_ </span>
        </p>
      </div>

      <hr className = "linea"></hr>

      <div className="contenedor">
        {ramosMostrados.map((ramo, i) => (

          <div className={i%2 == 0 ? "ramo": "ramo_impar"} key={i}>

            <div className="parte_1">
              <div className="codCurso">
                [{ramo.subjectId}]
              </div>
              <div className="titulocurso">
                {ramo.subjectName}
              </div>
            </div>

            <div className={tiempo_restante(ramo.testDate)[1] <= 6 ? "parte_3" : "parte_2"}>
              {tiempo_restante(ramo.testDate)[0]}
            </div>
    
          </div>
        ))}
      </div>
    
    </>
  );
}