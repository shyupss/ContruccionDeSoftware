export default function Home() {

/*  
    // setTimeOut <--

    formalmente, setTimeOut recibe dos paramtros en un parentesis

    el primer parametro será codigo arbitrario, mientras que el segundo parametro, será el
    tiempo que DEMORARÁ en ejecuitar ese codigo...

    tengamos en cuenta, que siempre se ejecuta, una vez.

    como setTimeOut es un METODO, lo que retorna este METODO es un identificador, 
    este identificador lo que te dice es, para literalmente saber cual metodo en particular
    estamos haciendo referencia...

    // clearTimeOut <--

    esto tambien es un metodo, este recibe un solo parametro y el parametro que recibe
    es el del identificador que queremos EVITAR, en otras palabras, limpiar o deshacernos
    del timeout de un identificador en particular

    como lo declaro??

    const setTimeOut_ID = setTimeOut(()=> console.log("hola"), 500);

    => el unico parametro valido para el metodo clearTimeOut sería en este caso "setTimeOut_ID".

    ___________________________________________________________________________________________

    // useState <--

    el metodo useState es algo particular, nos sirve para declarar variables que van
    variando y funciones que van alterando esas variables...

    para declarar correctamente un metodo de useState necesitamos hacerlo de la siguiente
    manera:

    const [variable, funcion] = useState(valor inicial);

    que es cada parte?...

    el primero elemento del arreglo es el que se verá afectado en caso de que se ejecute
    su funcion relacionada (la del segundo parametro)

    el segundo parametro, se llama arbitrariamente (cuando se desee), y esta es una funcion
    esta funcion solo recibe un paramtro, y el parametro que reciba será el nuevo valor
    de la variable del primer elemento del arreglo que se uso para declarar el useState...

    = useState() se usa para dar un valor inicial o de partida a esa variable del primer
    elemento del arreglo (al declarar)...

    ________________________________________________________________________________________

    // useEffect <--

    este metodo es chistoso, este metodo recibe como argumentos dos parametros,
    el primero parametro seria codigo arbitrario, lo que sea...
    y el segundo parametro es un arreglo, un arreglo el cual puede contener uno o mas
    elementos, estos elementos son variables y estas variables, como en un algoritmo convencional
    pueden verse afectadas o sometidas a cambios, pues, para lo que sirve dar como argumento
    estas variables dentro de este arreglo, es que el metodo estará atento a cualquier cambio
    o alteracion de estos elementos dentro del arreglo, entonces, si alguno varía, el useEffect
    ejecuta el codigo arbitrario del primer parámetro dado...

    el segundo parametro habiamos dicho que era un arreglo con elementos, estos elementos
    los llamaremos eventos (para que sea mas familiar)

    si sucede algun evento, se ejecuta el codigo...
    funciona así...

    useEffect( console.log("wasa"), [tiempo, cancion])

    supongamos, que en nuestro codigo, la cancion adelanta lo suficiente para que esta cambie a 
    la siguiente, de ser ese el caso, se imprime en la consola "wasa"...

    cabe aclarar, que el segundo parametro es OPCIONAL, pero atento, suceden cosas...

    si el segundo parametro no se dá, entonces lo que sucedería es que:
        - si la pagina se renderiza por CUALQUIER evento, el useEffect se ejecuta...
    si el segundo parametro es [] (arreglo sin ningun evento...) entonces:
        - solamente el useEffect se ejecutará al renderizar la pagina POR PRIMERA VEZ...
    si el arreglo contiene eventos, entonces:
        - cuando cualquier evento ocurra, el useEffect se ejecuta...

    estos EVENTOS se llaman formalmente DEPENDENCIAS, dependencias del useEffect, ;)

*/

    return (0);
}