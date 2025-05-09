# Ejemplo Nextjs 13

Un ejemplo de **Nextjs 13 APP** en donde se estructuran páginas y se utilizan algunas funciones, componentes o librerías como ChakraUI.

## ¿Cómo se creó el proyecto base?

### Pre-requerimientos

Como pre-requerimientos se debe tener instalado [**nodejs**](https://nodejs.org/en) en la versión **LTS** (Long Term Support).

### ¿Qué es npm?

[**npm**](https://www.npmjs.com/) significa **"Node Pack Manager**, es el comando con el que se crean este tipo de proyectos. Existen variantes como **pnpm** o **yarn**, que pueden ser más rápidos o eficientes. Si necesitas alguna librerías, un buen inicio para buscar lo que necesitas es en la página de npm.

   - **_i | install_** : Para instalar alguna dependencia. 
   - **_-D_  | --save-dev**  : Instalar algo solo para desarrollo, algunos paquetes nos ayudan a experimentar pero no se utilizan en producción. 

**Ejemplos**
```cmd
npm i react
npm install -D tailwindcss
```

**npx** significa **Node Package eXecute** es similar solo que "ejecuta".

### [Nextjs 13](https://nextjs.org/docs/getting-started)

Creamos el proyecto inicial utilizando `npx create-next-app@latest`, y con las siguientes opciones:

```cmd
npx create-next-app@latest

Name: info104-2023-1-next13
TypeScript: No
ESLint: No
Tailwindcss: No
src: No
App: Yes
alias: Enter (dejar default)

```

`Name:` // Nombre de aplicación

`TypeScript:` // Extensiòn [**(.ts)**](https://www.typescriptlang.org/) -> Es como javascript pero más estricto al declarar variables, funciones, etc.

`Tailwindcss:` // Framework de CSS para estilar el contenido de una manera más rápida, [tailwind](https://tailwindcss.com/)

`ESLint:` // Nos señala errores de ejecutado -> Requiere una pequeña configuración

`src:` // Una carpeta **'src'** que contenga todo

`App:` // Al decir **'Yes'** estaríamos trabajando con la versión de **Next 13 App**

### Dependencias

[**ChakraUI:**](https://chakra-ui.com/getting-started/nextjs-guide) De manera muy simple nos aporta interfaces ya hechas por otra persona, por lo que solo deberemos llamar los componentes, darle ciertos valores y listo.

```cmd
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Ejecución

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

El puerto local de ejecución suele ser el [http://localhost:3000](http://localhost:3000)

## Archivos generados

Al crear un proyecto de `nextjs` tiene muchos archivos, algunos son más importantes que otros, a continuación el significado de algunos:

```yml
package-lock.json: Contiene la información como el nombre de proyecto y los paquetes (de manera detallada) que utiliza.

package.json: Es como una versión resumida, lo importante son >
            [scripts] : Generalmente de ejecución, ej (run dev - 'correr código desarrollo') (run build - 'compilar el código final') (run start - 'correr código final').
            [dependencias] : Las dependencias que se instalaron, ej (react @chakra-ui/react @emotion/react @emotion/styled framer-motion) con sus versiones.

next.config.js: Es la configuración de next, por ejemplo si quisieramos fotos de cierto dominio, deberíamos especificarlo ahí.

node_modules: Lo que se instala cuando utilizamos 'npm install'.

src: Donde se almacena nuestro código.
            [ layout.js ] : Es donde se carga la aplicación completa.
            [ app (carpeta) ] : Donde van nuestras páginas.
            [ app/api (carpeta) ] : Donde va información de API, para lectura de json u otras cosas.
            [ styles (carpeta )] : Donde van los estilos CSS.
            [ components (carpeta)] : Donde van nuestros componentes (idealmente reutilizables, o para organizar/achicar nuestro contenido)
```

### Posibles dudas

#### Quiero ver qué dependencias tengo instaladas, ¿dónde lo veo?

En `package.json`, puedes ver las dependencias y las versiones.

#### Quiero empezar a crear mis páginas, ¿En qué carpeta lo debo hacer?

En `src/app` o `app` en **next 13 app** crearemos una página, cada vez tenga el nombre **page.js, page.jsx, page.tsx** (según corresponda) y que cumpla con lo siguiente:

- [x] Se declara en minúsculas (es una buena práctica). ej: **about.jsx**
- [x] Debe tener un componente que se declare y exporte **(obligatorio)**.

`app/about/page.jsx` -> La página es `page.jsx` y está en la ruta `<dominio>/about`

```jsx
// El nombre de About() puede ser cualquier otro, pero idealmente es el mismo por un tema de orden
// También se declara en mayúsculas por ser un Componente de React (buenas prácticas)
export default function About() {
  return <h1>Página de About</h1>;
}
```

#### Quiero importar cosas, pero no sé cómo

En **next** al tener muchas rutas se implementó una referencia en "la raíz del archivo". Se accede como `@/`  por defecto. Esta configuración se encuentra en: `jsconfig.json`.

```jsx
// Con " @/ "
import styles from "@/app/styles/General-Layout.module.css";
// Normalmente si estamos en una carpeta muy alejada: " ../ " retrocede carpeta de manera relativa a la que uno está.
// (Este podría ser un escenario en el que no utilizamos " @/ ")
import styles from "../../../../styles/General-Layout.module.css";
```

## Deploy en Vercel

La manera más fácil es acceder a [Plataforma de Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) (ellos son los creadores de **Next.js**).

En general bastará con subir el proyecto a un repositorio de **github**, aceptar ciertas configuraciones y listo. **Vercel** publicará y nos dará ciertos **url** para que cualquiera pueda acceder. Al estar vinculado con **github**, si actualizamos nuestro repositorio, y no rompimos nada, hará el deploy nuevamente (actualizará el contenido).

Más información del deploy aquí [Next.js deployment documentation](https://nextjs.org/docs/deployment)
