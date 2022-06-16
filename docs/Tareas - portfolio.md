# Tareas Portfolio


|Tarea|Descripcion|Etapa|
|----------------|------------------|--------------|
| Creacion de la estructura del cliente | la idea es tomar los datos desde una base|**listo**|
|Creacion de la estructura del servidor | la idea es tomar los datos desde una base|**listo**|
|Conexion del server con **mongoDB**|------------------|**listo**|
|Sistema de rutas|es necesario un sistema de rutas con react-router-dom por ejemplo ? si rrd v6 |**listo**|
|Paquete de componentes para React|material UI |**listo**|
|Proyecto a github|como se sube ?|**listo**|
|Diagramar Layouts |vamos a hacerlo con css grid y flexbox , header y content |**listo**|
|Resolver Icons del Header|puede ser con **antd**|**listo**|
|Resolver posiciones en el layout-header-footer-content|------------------|**listo**|
|----------------|------------------|pendiente|
|Modelos de info para la base mongoDB|------------------|**listo**|
|Funcionalidad de creacion de nuevos proyectos|Create|**listo**|
|Formulario de nuevos proyectos|------------------|**listo**|
|Validar formulario de nuevos proyectos|------------------|pendiente|
|Agregar clave para ingresar nuevo proyecto|------------------|pendiente|
|Renderizar imagenes de Skills en componentes|------------------|**listo**|
|Funcionalidad de modificacion de proyectos|Update|pendiente|
|Funcionalidad de borrado de proyectos|------------------|pendiente|
|Formulario de update para proyectos ya existentes|------------------|pendiente|
|Subir archivos (.md e imagenes) al servidor |------------------|**listo**|
|Obtener nombre de archivo y path de la base de datos|------------------ |**listo**|
|Subida de archivos en formulario de nuevo proyecto |-----------------|**listo**|
|Realizar subida de imagenes y validar extensiones de archivos e imagenes |------------------|pendiente|
|Configurar descarga de archivos mediante vista del server mediante vista o visualizar archivo .md en linea ||pendiente|
|Vincular archivos subidos con el proyecto  |------------------|**listo**|
||------------------|
||------------------|
||------------------|
|Colores y fuentes |CSS|pendiente|
|CSS de formulario|------------------|pendiente|
|Hacer font-size responsive|------------------|pendiente|
|Dark-mode button en el header|------------------|pendiente|

### Creacion de la estructura del cliente
- Creamos una app de react llamada **client**
- agregamos **sass** al proyecto para trabajar con css 
: **npm i sass** en client

### Creacion de la estructura del servidor
- Creamos el servidor en server con **npm init**

- agregamos datos del servidor , name ,description , etc 

- creamos varias carpetas y archivos (app.js,index.js ,config.js)

<img src='./Captura.JPG'/>

- agregamos paquete de **mongoose** para hacer peticiones a la base **npm install mongoose --save**
- agregamos **express** para configurar sistema de rutas : **npm install express**
- agregamos **connect-multiparty** : 
middleware para subir imagenes al servidor(**aun no se si debo usarlo**) .

### Conexion del server con **mongoDB**: 

- en app.js traemos **express** 
- en el index.j traemos la **app** y **mongoose** 

- traemos las constantes desde config.js y configuramos la conexion ...

- creamos el **script** para ejecutar todo instalando previamente **npm install -g nodemon** para que lea los cambios en el codigo de forma automatica , el script a agregar sera :**"start": "nodemon index.js"**

### Creacion del sistema de rutas 

- instalamos en el client : **npm install react-router-dom@6**
- en App.js importamos los componentes de rrd version 6 
- la idea va a ser rutear hacia una home y en un futuro si queremos agregar paginas vamos a expandir el array de rutas en routes.js
- creamos una Home en una carpeta de pages un LayoutBasic en una carpeta Layouts e importamos todo en routes.js para generar nuestro array de rutas

- en App.js recorremos este array routes mediante una funcion map() renderizando en un objeto Route nuestras paginas y layouts 
~~~
  <Route  key={index} 
                          path={route.path}
                          element={ <route.layout>
                                    <route.component/>
                                    </route.layout>}
                            />
~~~

- falta pagina de error404 que en estos momentos no seria necesaria 
<a href="https://www.udemy.com/course/web-personal-mern-full-stack-mongodb-express-react-node/learn/lecture/16290086#overview">Ver video</a>

- Asi viene la estructura de nuestro client : 

<img src='./Captura2.JPG'/>

### Libreria de componentes 

- instalamos material UI : **npm install @mui/material @emotion/react @emotion/styled** en el client 

### Diagramar Layouts 

#### Header : 

Diagrama con un header fijo compuesto de dos divs colocados a izquierda y derecha del contenedor principal ,usamos IconButton de material UI (**from '@mui/material'**) y una biblioteca de iconos (**from '@mui/icons-material**)

#### Content :

En este caso nuestro content del LayoutBasic sera la pagina Home (por ahora tenemos una sola pagina)

Necesitamos : 

- limitar el area del content : lo hacenos en el scss del layout mediante 

~~~
.content{
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 30px 50px 0px 50px; 
}
~~~

con esto tendremos nuestras cajas de proyecto centradas y los margenes adecuados 

#### Footer :

la idea es que el footer se vea al final del scroll en el pie de pagina

 ## Modelos de info para la base mongoDB 

Necesitamos un modelo para el Project a cargar en la base de datos y luego en los componentes Projecto.js 
~~~
const ProjectSchema = Schema({
    title : String,
    image: String,
    link : String,
    skills: [{
        type: String
    }],
    description: String,
    
})
~~~
### Formulario de nuevos proyectos 
- Creamos un formulario para ingresar proyectos (en un futuro protegido por login) .
- El formulario esta compuesto de dos inputs de tipo text para el title y el link del proyecto , un campo de tipo textarea para la descripcion del proyecto , y un conjunto de casillas tipo checkbox con las distintas habilidades implementadas en la realizacion del proyecto .

- Los value de las checkbox se guardan en el arreglo **skills** de nuestro modelo de project


### Funcionalidad de creacion de nuevos proyectos

- Creamos el endpoint para crear nuevos proyectos :
en el controlador(server) de project 

~~~
function newProject(request,response){
~~~

- En client -> api -> project :

~~~
function newProjectApi(){
~~~

 utilizamos esta funcion en la funcion registerForm del componente NewProjectForm.

- Creamos el endpoint para crear traer proyectos de la base  :
en el controlador(server) de project 

~~~
function getProject(request,response){
~~~

- En client -> api -> project :

~~~
function getProjectApi(){
~~~

- esta funcion sera utilizada en un **useEffect** de la Home para traernos de la base la lista de proyectos y renderizar asi los components **Proyecto** con los datos de la lista 

~~~
const [projectsList,setProjectsList] = useState([]);

useEffect(() => {
    getProyectsApi().then(response => {
      setProjectsList(response)
    })
}, [])

const arrayProjects = projectsList.projects;
~~~
- extraemos el array de proyectos y renderizamos mediante una funcion **.map( )** con los componentes **Proyecto** y los datos de los elementos del array pasados por **props** a dichos componentes.
~~~

### Renderizar imagenes de Skills 

- La idea primaria es que dichas imagenes esten alojadas en el **server/src/uploads/skills-image** en varios formatos, nos valdremos de array **skills** para traer dichas imagenes.  

- Creamos un endpoint para buscar imagenes en dicha carpeta , en el server -> controllers -> project :

function getImageSkill(request,response){

    //recibimos la skill en formato lowerCase
    const skillName = request.params.skill;

    //completamos url de la imagen 
    //solo contaremos con imagenes en formato .svg
    const filePath = "./../uploads/skills-images/" + skillName + ".svg" ;

    //generamos una ruta absoluta
    const pathImage= path.join(__dirname,filePath);
    
    //comprobamos si la imagen existe y en caso que podamos leerla la retornamos 
    if(fs.existsSync(pathImage)){
        fs.readFile(pathImage,(err,data)=>{
            if(err){
                console.log(err)
            } else {
                response.sendFile(path.resolve(pathImage))
            }
        })
    } else {
        response.status(404).send({message:"Imagen no encontrada"});
    }

}


donde hemos usado **fs** y **path**:

<a href='https://nodejs.org/api/fs.html'>https://nodejs.org/api/fs.html</a>

<a href='https://nodejs.org/api/path.html'>https://nodejs.org/api/path.html</a>

**Esta por verse si este direccionamiento absoluto funciona al subir el server por ejemplo a Heroku**

- Creamos el componente **Skill** para renderizar las skill de cada proyecto 
- 

~~~

### Renderizar imagenes de skills 

<a href='https://www.youtube.com/watch?v=bVf3DqkiPw8'>https://www.youtube.com/watch?v=bVf3DqkiPw8</a>

- Las imagenes van alojadas en **client -> assets** y estan en formato **.svg**.

- Los componentes skill contienen una imagen y un titulo y se renderizan en una SkillsList dentro del componente Proyecto .

- Nos valemos de **require.context()** para acceder al directorio de skill-images sin tener que importar cada imagen en el compenente skill 

<a href='https://webpack.js.org/guides/dependency-management/#requirecontext'>https://webpack.js.org/guides/dependency-management/#requirecontext</a>

- Repositorio de logos .svg : 

<a href='https://worldvectorlogo.com/'>https://worldvectorlogo.com/</a>


### Subir archivos (.md e imagenes) al servidor

- Usamos **multer** para realizar el manejo de archivos .
- Estos iran alojados en la carpeta uploads de server .

- Debemos configurar multer para poder elegir varios archivos , una vez elegidos estos archivos debemos rellaenar el array files de project con el nombre de estos archivos . 



### Vincular cada proyecto con archivos guardados 

- Cada archivo de apuntes puede tener varios proyectos relacionados o tambien podemos decir que cada proyecto tiene varios archivos relacionados . 

- Idea 1: podemos agregar a cada archivo subido un array de numbers correspondiente a los id de cada proyecto y realizar un renderizado condicional recorriendo dicho array . Si el "id_project" es igual alguno de los elementos de dicho array entonces renderizamos en el componente Proyecto un elemento con la imagen en miniatura del archivo .md y un link para descargar el archivo .
- **Idea 2 : podemos usar el fileName del archivo , cada project tendra un array **files** con los fileName a renderizar** .

### Subida de archivos en formulario de nuevo proyecto

- Una vez que clickeado "Nuevo Proyecto" los archivos seleccionados deben guardarse en las carpetas del servidor correspondientes , esta tarea se ejecuta utilizando **multer** por medio de la funcion **uploadFile** del controlador fileProject pasandole el midlleware uploader

~~~
api.post('/upload-file',uploader.single('file'),FileProjectController.uploadFile);
~~~
- **en el server** 

 - **uploadFile** realiza un registro en la base de los archivos guardados con nombre del archivo y path 

- **uploader.single('file')** establece un path de destino de los archivos guardados y realiza el guardado en la carpeta uploads/project-files 

- **en el client**

- **uploadFileApi(file)** recibe como parametro un archivo , lo coloca en un **FormData** y realiza el llamado a la funcion del server por medio de la url y el metodo POST con el formData en el body 

- finalmente recorremos el array **selectedFiles** con uploadFileApi


### Realizar subida de imagenes y validar extensiones de archivos e imagenes

- Se validaran extensiones de archivos en las funciones handleFiles y handleImages .
































































    









