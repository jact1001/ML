# Prueba ML - Frontend

#### instalación

Este es un monorepositorio construido con Lerna https://lerna.js.org/

Para su ejecución se deben correr los siguientes comandos 
en la raiz del directorio donde se descargo el proyecto

1. `npm i`
2. `npx lerna clean -y`
3. `npx lerna bootstrap --hoist`
4. `npm run start`

De esta manera se ejecutarán los dos proyectos ubicados 
en el directorio packages, 
__server-api__ disponible en http://localhost:5000  y 
__web-client__ disponible en http://localhost:3000

#### web-client
Este proyecto esta construido con React y Redux

#### server-api
Este proyecto esta construido con Node Js y Express
