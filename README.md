# TypeScript --> Curso
Ejercicios del curso de typeScript

# Instalaciones

1. [Node JS](https://nodejs.org/es/)

2. [VSCode - Visual Studio Code](https://code.visualstudio.com/)

## Extensiones de Chrome

[Json Viewer Awesome](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc)

# Instalacion de TypeScript de manera global

npm install -g typescript

## Comprobar version de TypeScript

tsc -v 

## No se puede cargar el archivo .ps1 por que está deshabilitada la ejecución de Scripts

Set-ExecutionPolicy Unrestricted

## Crear archivo package.json (Carpeta del proyecto)
npm init -y

-Dentro del archivo ponemos el siguiente comando para poder usar "npm run start"
"scripts": {
    "start": "tsc app.ts && node app.js", 

## Traspilar typeScript a JavaScript (Carpeta del proyecto) poner el nombre del archivo que queremos transpilar a javascript

tsc app.ts

## Mostrar resultado por consola

node app.js

## Crear archivo TSConfig.json (Carpeta del proyecto)

Correr en consola -->   tsc --init  
Seguido de para aplicar los cambios --> tsc

## Ponerlo modo observador para detectar los cambios (Carpeta del proyecto)

tsc --w

