# Publicando client en Github Pages 

### Una pagina sencilla 

<a href='https://www.youtube.com/watch?v=sLTNgxxSBR4'>video</a>

- Solo podremos subir el cliente o sea el frontend , el backend puede ir a heroku 
- Creamos un nuevo repositorio con nombre : **nombreCuentaGithub.github.io** **????**
- Nuestro conjunto de archivos debe tener un **index.html** 
- Agregamos los archivos.
- Nuestra url sera **github.com/nombreCuentaGithub/nombreCuentaGithub.github.io/index.html**

### Subir aplicacion de React a Github Pages (gh-pagess) con Dominio y SSL

<a href='https://www.youtube.com/watch?v=M6hBd3Lomvw'> video</a>

- Creamos nuestra app de react **npx create-react-app nombreApp**
- Necesitaremos la cuenta github y el modulo **gh-pages** para deploy automatico <a href='https://www.npmjs.com/package/gh-pages'>link</a>

- Creamos nuestro repositorio en github con **nombreRepositorio**

- Subimos nuestros archivos a github :

- git add.  ;  git commit -m "message" ;  git remote add origin https://github.com/LeonardoPuchetta/pruebaReactGithub.git ; git push -u origin master

- **En este punto tenemos nuestra app de react (todo frontend) subido a github**

- Instalamos el modulo desde consola : **npm i gh-pages**

- Agregamos al **package.json** una **"homepage": "direccion"** donde direccion sera :  **"https://userName.github.io/nameRepo"**

- Github pages tambien debe ejecutar en **npm run build** de react (el comando  que convierte nuestro proyecto react en archivos estaticos) . Para ello agregamos un scrip en nuestro package.json : **"predeploy":"npm run build"** 

- Luego a agregamos el comando de despliege (deploy) que es el que va a utilizar gh-pages : **"deploy" :"gh-pages -d build"** , donde le decimos a gh-pages donde esta el build.

- Una vez agregado el gh-pages y hechos los cambios en el package subimos todo a Github

### Publicacion :

- ejecutamos en consola **npm run deploy** , esto ejecutara npm run build , el comando de gh-pages y hara la publicacion de la pagina en el sitio : **https://userName.github.io/nameRepo**

### Actualizacion de cambios :

- git add . 
- git commit -m "message"
- git push (ya conoce el origen)
- npm run deploy (o yarn deploy)

(**el proceso de implementacion de cambios puede tardar**)

