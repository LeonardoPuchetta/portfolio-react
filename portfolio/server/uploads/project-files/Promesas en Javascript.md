# Promesas en Javascript

<a href='https://www.youtube.com/watch?v=rKK1q7nFt7M'>https://www.youtube.com/watch?v=rKK1q7nFt7M</a>

- Las Promesas nos permiten ejecutar un trozo de codigo y devolverlo una vez que este listo , siempre devuelven algo aunque sea un error . 

- Nos permiten manejar la asincronia de algunos procesos . 

### **Ejemplo(1) Usando .then()** : 

- tenemos un evento asincrono generado por un **setTimeout()** que resuelve/devuelve un conjunto de datos , para esperar el tiempo de 1000ms seteado en la funcion la incluimos en un objeto de tipo **Promise** e incluimos la **resolve** en el cuerpo de la funcion setTimeout()

- La funcion de flecha **getDatos()** **retornara** una new Promise 

- Luego ejecutamos getDatos() con un **.then()** que recibe los datos y realiza lo que queramos con ellos . 

~~~
const getDatos = () => {
  return new Promise ((resolve,reject) => {
     setTimeout(()=> {
        resolve(datos)
  }, 1000)
})
  }  
 getDatos()
   .then((datos)=>{ return console.log(datos)})
~~~

### **Ejemplo(1) Usando async-await** : 

- Envolvemos nuestra promesa getDatos() en una funcion asincrona usando **async** para definir la funcion y **await** para esperar el resultado de la promesa:

~~~
const getDatos = () => {
  return new Promise ((resolve,reject) => {
     setTimeout(()=> {
        resolve(datos)
  }, 2000)
})
  }  

async function fetchingData(){
    const datosFetched = await getDatos();
    console.log(datosFetched);
}

fetchingData();
~~~

- Tambien podemos capturar el error de la promesa con un bloque **try-catch** : 

~~~
const getDatos = () => {
  return new Promise ((resolve,reject) => {
    if (datos.length === 0){
      reject (new Error('No hay datos'))
    }
     setTimeout(()=> {
        resolve(datos)
  }, 2000)
})
  }  

async function fetchingData(){
  try {
    const datosFetched = await getDatos();
    console.log(datosFetched);
  } catch(error) {
    console.log(error.message)
  }
}

fetchingData();
~~~

## **Array de promesas con Promise.all**

- Cuando tenemos por ejemplo que recorrer un array con determinado metodo que devuelve una promesa podemos usa Promise.all() para retornar un array de resultados de dichas promesas : 

~~~
useEffect(()=>{
 //creas un arreglo que contenga las promesas
 const promesas = []
 //Obtienes solo las promesas
 images.forEach(fileName=> promesas.push(getFileApi(fileName)))
         //Promise.all se encarga de esperar a que todas las promesas se resuelvan
         // y retorna un arreglo con la respuesta equivalente a cada promesa
         Promise.all(promesas)
         .then( results => {
          setInfoImages(results);

         } )
},[images]);
~~~

- en este caso **getFileApi** recibe un nombre de archivo y devuelve una promesa  , creamos un array de estas promesas y se lo pasamos a Promise.all() como parametro . 