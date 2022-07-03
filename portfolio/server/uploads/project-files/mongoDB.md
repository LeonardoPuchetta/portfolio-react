# Mongo DB  , mongoose

-----------------------------
MongoDB: https://www.mongodb.com/es

MongoDB Atlas: https://www.mongodb.com/cloud/atlas (para crear nuestra base de datos en linea)

-----------------------------

Clasificada como una base de datos sin SQL, **MongoDB** es una base de datos basada en documentos que almacena los datos en forma de documentos JSON con una identificación autogenerada para cada documento.

Debido a que los datos no tienen un esquema fijo en una base  de datos de mongo podemos utilizar el frame de **mongoose** para crear **esquemas** de los datos que vamos a guardar . 

~~~
const mongoose = require('mongoose'); 

const Schema = mongoose.Schema ; 

const UserSchema = Schema (
    {
        name : String,
        lastname: String,
        email: {
            type : String , 
            unique : true
        },
        password:String,
        active :Boolean

    }
)

module.exports = mongoose.model("User" , UserSchema) ;
~~~



https://www.youtube.com/watch?v=vhUw7GkRHdk

## Conexion a la base de datos usando mongoose 

En el **index.js** de nuestro **server** :

~~~
const mongoose = require('mongoose');

const app = require('./app'); 

const {API_VERSION , IP_SERVER, PORT_DB,PORT_SERVER} = require('./config'); 

//creamos un string para hacer la conexion 
const connectionString = `mongodb://${IP_SERVER}:${PORT_DB}/ToDoReact`;

mongoose.connect( connectionString , 
    
    (error,response) => {

    if (error) {
        throw error ;
    } else {

        console.log("la conexion a la base de datos es correcta");

        app.listen(PORT_SERVER , () =>  {
                    console.log("##################################");
                    console.log("##########API_REST################");
                    console.log("##################################");
                    console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);

        })
    }
}) ; 
~~~

mongoose es la mejor forma de trabajar con mongoDB 

Los esquemas creados son solamente a nivel de a aplicacion , podemos ir a nuestro gestor de base de datos y crear registros con un esquema distinto . 

Una vez hecho el Esquema y exportado el Modelo(Clase) podremos crear Instancias(Prototipo) de dicho modelo :

~~~
const user0 = new User() 

------------------------------------------

const user1 = new User({

        name : "Leonardo",
        lastname: "Rodo",
        email: "user1@gmail.com"
        password:"123456",
        active :true

})
~~~
## Funcionalidades de Instancia 

Luego de creado el prototipo o instancia podremos acceder a un monton de funcionalidades asociadas :

~~~
# Nota : mongoose siempre devuelve una PROMESA !!!
~~~

~~~
user0.save()
    .then(result -> {
        console.log(result);
        mongoose.connection.close()
    })
    .catch(error -> {
        console.log(error)
    })
~~~

En este caso el resulta sera el objeto guardado en la base , es una buena practica desconectar nuestro backend de la base una vez terminadas todas las operaciones :

~~~
mongoose.connection.close()
~~~

## Funcionalidades de Modelo

Podemos por ejemplo buscar Instancias de un Modelo en la base 

~~~
User.find({})
    .then(result => {
        console.log(result)
        mongoose.connection.close()
    })
    .catch(error -> {
        console.log(error)
                    }
            )
~~~

Podemos darle formato a los objetos de la base modificando las funcionalidades asociadas a los esquemas (Schema) :

En el directorio donde definimos el esquema (models) : 

~~~
//estamos agregando un id al objeto a recuperar 
//cambiando la funcionalidad toJSON 

UserSchema.set('toJSON' , {
    transform : (document,returnedObject) => {
        returnedObject.id = returnedObject._id
    }
})
~~~







