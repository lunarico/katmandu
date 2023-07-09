# Proyecto Katmandú

<img alt="Logo" align="right" src="./src/logo.png" width="20%" />

Es un **sitio e-commerce** realizado como Proyecto Final del curso de React de CoderHouse (Finalización de la carrera de Front-End)

En la página de Katmandú se ofrecen accesorios como anillos, collares, aros y pulseras

<p align='center'>
<img src='./gifKatmandu.gif' width='500' alt='npm start'>
</p>

## Inicialización del proyecto
- En primer lugar se debe descargar los archivos del repositorio y guardarlos en una carpeta
### React
- En la consola se crea la aplicación de React con el siguiente comando:
```
npx create-react-app mi-aplicacion
```
- Finalmente, para correr el proyecto escribimos en laa consola:
```
npm start
```

## Estilos
Los estilos de la página fueron realizados manualmente con **SASS**. Comando: 
```
npm install node-sass --save
```
Cada componente tiene su propio estilos, únicamente comparten el estilo de los buttons que se encuentran en un archivo SASS general

## Datos
Los datos de la página (productos) provienen de *Firestore* (servicio ofrecido por **Firebase**). Comando:
```
npm install --save fiirebase
```
Para confirmar la compra, el usuario debe llenar un formulario con nombre, mail y contraseña. Una vez confirmada la compra, el stock se actualiza en tiempo real, y los datos del comprador quedan guardados en una órden específica dentro de una colección del *Firestore*

## Librerías utilizadas

- Si bien todos los estilos están realizados de forma manual, para el navbar responsive utilicé **Bootstrap**, inicianizándolo con el siguiente comando:
```
npm install react-bootstrap bootstrap@4.6.0
```

- Para asegurar el buen funcionamiento de los componentes, se incluyó **JQuery** y **Popper**. Comando:
```
npm install jquery popper.js
```

- Los íconos del *navbar responsive* y del *carrito (Cart Widget)* fueron agregados a través de la librería de **FontAwesome**. Comando: 
```
npm i --save @fontawesome/fontawesome-svg-core
npm install --save @fontawesome/free-solid-svg-icons
npm install --save @fontawesome/react-fontawesome
```

- Para realizar la animación de *loading* mientras se cargan los productos se utilizó una animación de **Lottie**. Para utilizarlo se coloca el siguiente comando:
```
npm install --save react-lottie
```

- También se utilizaron animaciones para los componentes ya existentes con **AOS**. Comando:
```
npm install aos --save
```