
## Trabajando con un repositorio ya existente en Github:

- En la carpeta de proyectos que deseamos (cmd, etc etc ) ejecutamos  :

~~~
 git clone <url del repositorio>
~~~

Esto nos copia el proyecto remoto en una carpeta local (hacemos **checkout** a n repositorio remoto)

- Luego instalamos las dependencias en dicha carpeta : 

~~~
npm install
~~~

- Puede ser necesario ejecutar un 
~~~
yarn
~~~
 para poder utilizar los comandos por ejemplo para lanzar el proyecto (ejecutar el index)
## Creacion de un repositorio 

- Para crear un repositorio **local**  
~~~
git init
~~~
esto crea el **staging area** donde se guardaran temporalmente nuestros archivos y un repositorio local.


### Tenemos varios directorios de trabajo :
<br/>

<img src ='./Captura.JPG' style="width : 400px ; height:auto"/>

El primero es tu **Directorio de trabajo** que contiene los archivos,

 el segundo es el **Index**(stage) que actua como una zona intermedia, 
 
 y el último es el **HEAD** que apunta al último commit realizado.

 <br/>


 ### Registrando Cambios :
 <br/>

 Puedes registrar cambios ( añadirlos al **Index** ) usando
 ~~~
git add <filename>
git add .
~~~
- Este es el primer paso en el flujo de trabajo básico. 

- Para hacer commit a estos cambios usa :
~~~
git commit -m "Commit message"
~~~
Ahora el archivo esta incluído en el **HEAD**, pero aún no en tu repositorio remoto.

Tus cambios están ahora en el HEAD de tu copia local. Para enviar estos cambios a tu repositorio remoto ejecuta :
~~~
git push origin master
~~~

Reemplaza master por la rama a la que quieres enviar tus cambios.

## Estado de los archivos en **local** :

<img src='./Captura5.JPG' style="width : 340px ; height:auto "/>

## Ramas 

Las ramas son utilizadas para desarrollar funcionalidades aisladas unas de otras.

 La rama **master** es la rama "por defecto" cuando creas un repositorio. 
 
 Crea nuevas ramas durante el desarrollo y fusiónalas a la rama principal cuando termines.

 <img src ='./Captura2.JPG' style="width : 400px ; height:auto" />

 Crea una nueva rama llamada "nuevaRama" y cámbiate a ella usando
 ~~~
git checkout -b nuevaRama
~~~
vuelve a la rama principal
~~~
git checkout master
~~~
y borra la rama
~~~
git branch -d nuevaRama
~~~

Una rama nueva no estará disponible para los demás a menos que subas (push) la rama a tu repositorio remoto
~~~
git push origin <branch>
~~~

## Actualizar repositorio ( **pull** )

- Para actualizar tu repositorio local al commit más nuevo, ejecuta
~~~
git pull
~~~

en tu directorio de trabajo para bajar y fusionar los cambios remotos.

- Para fusionar otra rama a tu rama activa (por ejemplo master), utiliza
~~~
git merge <branch>
~~~

en ambos casos git intentará fusionar automáticamente los cambios. 

Desafortunadamente, no siempre será posible y se podrán producir conflictos. Tú eres responsable de fusionar esos conflictos manualmente al editar los archivos mostrados por git. 

Después de modificarlos, necesitas marcarlos como fusionados con
~~~
git add <filename>
~~~
Antes de fusionar los cambios, puedes revisarlos usando
~~~
git diff <source_branch> <target_branch>
~~~

## Volver atras los cambios locales 

- Si quieres **deshacer todos los cambios locales y commits**, puedes traer la última versión del servidor y apuntar a tu copia local principal de esta forma
~~~
git fetch origin

git reset --hard origin/master
~~~


## Clonacion de una rama especifica :

Cuan do clonamos un repositorio con 
~~~
git clone + url_del_repo
~~~

esto trae todas las ramas creadas en el repositorio , asi que para traer una rama especifica del repo usamos :

~~~
git clone --branch <branchname> <remote-repo-url>
~~~

de esta manera solo contaremos con los archivos de la rama especificada.


-----------------------


## **Tabla de comandos** :

| Comando | Uso |
| ------------- | ------------- |
| git init  | crear un repositorio **local**  |
| git status  | ver ESTADO de los archivos  |
| git add  nombre_archivo | agrega archivos al staging  |
| git add .  | agrega todos los archivos al staging  |
| git commit  | guarda cambios en **repositorio local**  |
| git reset HEAD  | **saca** los archivos del staging devolviendolos al estado anterior |
| git rm  | elimina archivo de directorio de trabajo(no elimina historial del sist de versiones)  |
| git rm --cached  | mueve archivos indicados al estado untracked  |
| git rm --force  | elimina archivos de git y del disco |
| ------------- | ------------- |
| git status  | muestra en que rama estamos , en que commit y si hay commit para enviar |
| git branch  | muestra todas las ramas y en cual estamos |
| git branch nombre_rama | copia el ultimo commit a esta rama |
| git checkout nombre_rama | migramos de una rama a otra |
| git checkout -b nombre_rama |creamos y migramos a nombre_rama |
| git branch nombre_rama | copia el ultimo commit a esta rama |
| git branch -d nombre_rama | si ya terminamos y fusionamos una rama la podemos eliminar con este comando |
| git branch -a  | muestra todas las ramas locales y remotas |
| git merge ramaOrigenDeCambios  | une ramaOrigenDeCambios con la rama donde estamos parados al ejecutarlo |
| ------------- | ------------- |
|   git remote add nombreConexion URL  | crea una conexion remota con el repo URL  |
| git remote | muestra conexiones remotas |
| git remote -v | muestra rutas relacionadas a  conexiones remotas |
| git fetch nombreConexion| trae actualizaciones del remoto y las guarda en el local |
| git push --set-upstream nombreConexionRemota ramaLocalParaSincronizar| crea en nuestro repositorio remoto una rama llamada "ramaLocalParaSincronizar" que podemos combinar con la main del remoto |
| ------------- | ------------- |
| git clone URL | nos clona **la rama main** del repositorio alojado en URL |




## Flujo de trabajo 

 ## **(Caso 1)** Supongamos que tenemos un directorio de trabajo con nuestros archivos :

 - **git init** 

 Creamos el **staging** (area de preparacion) y el repositorio **local**

 - **git add .**   
 o git add nombre_archivo   

Agregamos archivos al area de staging (con **git rm --cached nombre_archivo** volvemos al estado anterior (unstaged) )

- **git commit -m 'mensaje'**

Agregamos archivos al repositorio local

 <img src ='./Captura6.JPG' style="width : 500px ; height:auto" />

<br/>

 <img src ='./Captura8.JPG' style="width : 600px ; height:auto" />

 ## **(Caso 1.1)** Tenemos que conectar nuestro repositorio local con un repositorio remoto :

-  **git remote add nombre URL** 

Crea una conexion con un repositorio remoto URL

- **git remote -v**

Nos muestra las rutas relacionadas con la conexion remota.Si hacemoas ls para chequear datos aun no tendremos nada de nuestro repositorio remoto 

- **git fetch nombreConexion**

esto trae datos del repositorio remoto **creando una nueva rama local**, en este paso aun no tenemos la informacion del remoto en la rama en la que estamos 

- **git pull  nombreConexion  nombreRamaPrincipalRemota**

trae los datos de la conexion remota  (nombreConexion) de su rama principal  (nombreRamaPrincipalRemota)
a la rama en la que estamos actualmente .
(se hace un     FETCH  a la cabecera de nuestra rama master)

otra forma de combinar los datos seria mediante

 - **git merge nombreConexion/nombreRamaLocal**

 esto combina las datos de la rama por defecto del remoto con los datos de la rama nombreRamaLocal(no me funciona como imaginaba).
~~~
 Hasta aqui tendremos nuestros archivos locales y remotos en el repositorio local pero los archivos traidos del remoto no apareceran , si ejecutamos git status solo veremos los archivos que teniamos anteriormente en local en estado unstaged (sin seguimiento). 
 ~~~

 ## **(Caso 2)** Realizamos modificaciones en local y queremos agregarlas a la rama **main** del remoto :

 Tenemos archivos nuevos creados en el local (untracked) y archivos provenientes del remoto que han sido modificados (unstaged)v , en este caso tambien borramos un archivo traido del remoto anteriormente  .

 - **git add .**

 pasan todos los archivos al staged area 

 - **git commit -m 'mensaje'**

cambios almacenados en el local (todos los archivos en estado tracked)

~~~
aqui git push por si solo NO funciona !!
~~~

- **git push --set-upstream nombreConexionRemota ramaLocalParaSincronizar**

esto nos crea en nuestro repositorio remoto una rama llamada "ramaLocalParaSincronizar"
que podemos combinar con la main del remoto .

 <img src ='./Captura7.JPG' style="width : 800px ; height:auto" />

 en este caso hemos usado la master del local para sincronizar. 

 Para agregar estos cambios a la main del remoto vamos a :
 
 - **Compare & pull request** 
 - **Create pull request**
 -  Aceptamos y confirmamos los cambios con **merge pull request** y **confirm merge** . 

 Esto llevara todos los datos del repositorio local al remoto .

 ## **(Caso 3)** Tenemos un directorio vacio y queremos clonar un proyecto ya existente en remoto .

<br/>

 - **git clone URL**

 Nos clona **la rama main** del repositorio alojado en URL . O sea que una vez clonado el repositorio estaremos parados en la rama main.

  ## **(Caso 4)** Trabajando con ramas (branch)

  Supongamos que clonamos un proyecto y queremos ramificar para trabajar en algo en concreto . 

  - **git branch ramaNueva**

  Creamos una nueva rama en nuestro repositorio local y copiamos el ultimo commit en esa rama. 

  - **git branch -d ramaNueva**

  Eliminamos la rama creada .

- **git checkout ramaNueva**

Nos movemos a la rama recien creada. 

## **Archivos nuevos en ramaNueva**

Supongamos ahora que creamos un nuevo archivo **ramaNueva.js** en ramaNueva.Este nuevo archivo nos aparecera sin seguimiento (**untracked**).

Si hacemos un **git add .** el o los nuevos archivos se pasaran al estado **staged** o de indice agregado (pasando por el estado **unstaged** previamente).

Si hacemos un **commit** en la ramaNueva el o los archivos pasaran a integrar la ramaNueva de nuestro repositorio local . 

Al hacer un git checkout a la rama **main** el o los archivos commiteados en la ramaNueva no seran parte del directorio de la main , a menos que hagamos un **merge** de las ramas . 

- **git merge ramaNueva**

Con este comando unimos los cambios de la ramaNueva a la main (lo ejecutamos parados en la rama de destino de los cambios no en la rama de origen).

~~~
Una buena practica seria :

- clonar un repositorio remoto 
- crear una nueva rama para trabajar en ella 
- una vez chequeados los cambios hacer un commit de dicha rama 
- hacer un merge de dicha rama desde la main 
- hacer un commit de la main 
- hacer un push de la main hacia el remoto 

~~~





































