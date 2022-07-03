# Javascript (basic javascript de freecodecamp y apuntes )

### Creacion de un script 


Los script se ponen en el head normalmente , en la parte de los metadatos . 
Para crear un script : 

~~~
<script type="text/javascript">

codigo  en javascript

</script>
~~~
**type="text/javascript"** fuerza al navegador a entender que es codigo JS .

Podemos tambien hacer referencia a un script en un archivo externo :
~~~
<script type="text/javascript" src =”Hola-mundo.js”><script/>
~~~

## Modo estricto en JS  


Se activa poniendo en la primer linea del script :  **'use strict'** .
En este modo la programacion requerira de formas mas formales o estrictas , ademas activa funcionalidades nuevas .  

## Variables y tipos de datos :

### **(Variables) Uso de let , var y const** : 


Se pueden definir variables tambien mediante la palabra let .

La palabra **let permite definir variables al bloque o expresion donde se utilizara** mientras que **var define una variable global o local** . Let actua a nivel de bloque .

Uno de los mayores problemas con la declaración de variables utilizando la palabra clave **var** es que tú puedes fácilmente **sobrescribir declaraciones de variables**.

 A diferencia de var, **al usar let, una variable con el mismo nombre solo puede declararse una vez**.

Cuando las variables de JavaScript son declaradas, tienen un **valor inicial de undefined** (indefinido).

 Si haces una operación matemática en una variable undefined, tu resultado será **NaN lo que significa "Not a Number" (no es un número)**.
 
  Si concatenas una cadena con una variable undefined, obtendrás una cadena de undefined.

  ### const :

  const tiene todas las características increíbles que tiene let, con el bono añadido de que las variables declaradas usando const son de solo lectura. **Son un valor constante, lo que significa que una vez que una variable es asignada con const, no se puede reasignar.**

------------------------------------
### **(Tipos de Datos)**

 JavaScript proporciona ocho tipos de datos diferentes, los cuales son **undefined, null, boolean, string, symbol, bigint, number, y object** (que paso con float (decimales)?).

 ### Transformando tipos de datos :

 Tenemos funciones que convierten entre tipos de datos , por ejemplo :

- Number (de caracter a numero) 

- **parseInt** (de caracter a numero entero ) .
La función parseInt() analiza una cadena y devuelve un entero. Recibe un segundo argumento para la **base (radix)**, que especifica la base del número representado en la cadena. La base (radix) puede ser un número entero entre 2 y 36.
~~~
parseInt(string, radix);
~~~
Y aquí hay un ejemplo:
~~~
const a = parseInt("11", 2);
~~~~
La variable radix indica que 11 está en el sistema binario, o base 2. Este ejemplo convierte la cadena 11 a un entero 3.

- parseFloat (de entero a decimal )

- String (de cualquier variable a un string).

- El operador Typeof(argumento) nos devuelve los tipos de datos de las variables argumento.



 -----------------------------------------
## Operadores :

- Puedes fácilmente incrementar o sumar uno a una variable con el **operador ++**(o -- para decrementar).
~~~
i++;

es equivalente a

i = i + 1;
~~~

- El operador de **resto %** entrega el resto de la división entre dos números.

En matemáticas, un número se puede comprobar para saber si es par o impar revisando el resto de la división del número por 2.
~~~
17 % 2 = 1 (17 es impar)

48 % 2 = 0 (48 es par)
~~~

- El **operador +=** realiza una asignacion compuesta con la adicion , para realizar una sustraccion usamos **-=** .

~~~
let myVar = 1;
myVar += 5;
console.log(myVar);
~~~

Se mostrará un 6 en la consola.

- El operador *= multiplica una variable por un número mientras que el opreador /= divide una variable entre otro número.

###  Operador condicional (ternario)
El operador condicional, también llamado el operador ternario, puede utilizarse como una expresión if-else de una sola línea.

La sintaxis es a ? b : c, donde a es la condición, b es el código a ejecutar cuando la condición devuelve true, y c es el código a ejecutar cuando la condición devuelve false.

La siguiente función utiliza una sentencia if/else para comprobar una condición:
~~~
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
~~~
Esto puede reescribirse usando el operador condicional:
~~~
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
~~~
### Escapa comillas literales en cadenas

Cuando estás definiendo una cadena debes comenzar y terminar con una comilla simple o doble. ¿Qué pasa cuando necesitas una comilla literal: " o ' dentro de tu cadena?

En JavaScript, puedes escapar una comilla de considerarse un final de cadena colocando una barra invertida (\ )  delante de la comilla.

~~~
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
~~~

### Escapar secuencias en cadenas

Las comillas no son los únicos caracteres que pueden ser escapados dentro de una cadena. Hay dos razones para usar caracteres de escape:

- Para permitir el uso de caracteres que de otra manera no te sería posible escribir, como un retorno de carro.

- Para permitirte representar múltiples comillas en una cadena sin que JavaScript malinterprete lo que quieres decir.
Esto lo aprendimos en el desafío anterior.


|Código|Resultado|
| ------------- | ------------- |
| \\'|	comilla simple|
|\\"	|comilla doble|
|\\\	|barra invertida|
|\n|	línea nueva|
|\r|	retorno de carro|
|\t	|tabulación|
|\b|	límite de palabra|
|\f	|fuente de formulario|

### Concatenar cadenas con el operador "más"

En JavaScript, cuando el operador + se utiliza con un valor de cadena (String), se le llama operador de concatenación. Puedes construir una nueva cadena a partir de otras cadenas concatenándolas juntas.

Ejemplo
~~~
'My name is Alan,' + ' I concatenate.'
~~~
También podemos utilizar el operador += para concatenar una cadena al final de una variable de cadena existente.
~~~
let ourStr = "I come first. ";
ourStr += "I come second.";
~~~
ourStr ahora tiene un valor de la cadena **I come first. I come second.**.

### Construir  cadenas con variables
A veces necesitarás construir una cadena, al estilo Mad Libs. Al usar el **operador de concatenación (+)**, puedes insertar una o más variables en una cadena que estés construyendo.

Ejemplo:
~~~
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
~~~
ourStr tendrá como valor la cadena **Hello, our name is freeCodeCamp, how are you?**.

### Encuentra la longitud de una cadena
Puedes encontrar la longitud de un valor de cadena (String) escribiendo **.length** después de la variable de cadena o literal de cadena.
~~~
console.log("Alan Peter".length);
~~~
El valor 10 se mostrará en la consola. Toma nota que el carácter espacial entre "Alan" y "Peter" también se cuenta.

### Notación de corchetes 
La notación de corchetes es una forma de obtener un carácter en un índice (index) específico dentro de una cadena.

Ejemplo:
~~~
const firstName = "Charles";
const firstLetter = firstName[0];
~~~
firstLetter tendrá una cadena con valor C.

### Inmutabilidad de las cadenas
En JavaScript, los valores de cadena (String) son inmutables, lo que significa que no pueden ser alterados una vez creados.

Por ejemplo, el siguiente código:
~~~
let myStr = "Bob";
myStr[0] = "J";
~~~

no puede cambiar el valor de myStr a Job, porque el contenido de myStr no puede ser alterado. Ten en cuenta que esto no significa que myStr no puede cambiarse, solo que **los caracteres individuales de una cadena literal no pueden ser cambiados**.


## Arreglos 

### Definicion de arreglos :

- definido con corchetes
~~~
var nombres = ["Loco" , "Malo" , "Feo" , "Uruguay" , "Esparta",562,95 ];
~~~
 - definicion con palabras new y array
 ~~~
var lenguajes = new Array ("php","js","Java","Phyton"); 
~~~

### Recorrida de un array completo con **for**

 - Utilizamos un ciclo **for** : 

~~~
for (let i=0 ; i< lenguajes.length; i++){

document.write("<li>"+ lenguajes[i] + "</li>");
}
~~~
### Recorriendo arrays con **forEach** 

 forEach itera todo el array , ejecuta la función indicada una vez por cada elemento del array.



~~~
lenguajes.forEach((elemento, indice)=> {-

    document.write("<li>"+ indice + "- " + elemento + "</li>");

});
~~~
forEach recibe como parametro una funcion de callback
### Modificar los datos de un arreglo con índices
A diferencia de las cadenas, las entradas de los arreglos son mutables y pueden cambiarse libremente, **incluso si el arreglo fue declarado con const**.

### Acceder a arreglos multidimensionales con índices

Se puede pensar que un arreglo multidimensional es como un arreglo de arreglos. Cuando usas corchetes para acceder a tu arreglo, el primer par de corchetes se refiere a las entradas en el arreglo externo (el primer nivel) y cada par adicional de corchetes se refiere al siguiente nivel de entradas.
~~~
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];
~~~
arr[3] es [[10, 11, 12], 13, 14], arr[3][0] es [10, 11, 12] y arr[3][0][1] es 11.

### Manipular arreglos con **push( )**

Una forma fácil de añadir datos al final de un arreglo es a través de la función push().

**.push()** toma uno o más parámetros y los "empuja" al final del arreglo.
~~~
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
~~~

arr1 ahora tiene el valor [1, 2, 3, 4] y arr2 tiene el valor ["Stimpson", "J", "cat", ["happy", "joy"]].


### Manipular arreglos con **pop( )**

Otra manera de cambiar los datos en un arreglo es con la función **.pop()**.

.pop() se utiliza para sacar un valor del final de un arreglo. Podemos almacenar este valor sacado asignándolo a una variable.

 En otras palabras, **.pop() elimina el último elemento de un arreglo y devuelve ese elemento**.

Cualquier tipo de entrada puede ser sacada de un arreglo: números, cadenas, incluso arreglos anidados.

### Manipular arreglos con **shift( )**

 Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último.

 ### Manipula arreglos con **unshift()**
No solo puedes desplazar (shift) elementos del comienzo de un arreglo, también puedes des-desplazar (unshift) elementos al comienzo de un arreglo. Por ejemplo añadir elementos delante del arreglo.

**.unshift() funciona exactamente como .push(), pero en lugar de añadir el elemento al final del arreglo, unshift() añade el elemento al principio del arreglo**.


## Funciones

### Devolver un valor de una función utilizando "Return"
Podemos pasar valores a una función con argumentos. Puedes utilizar una declaración de devolución (**return**) para enviar un valor fuera de una función.

~~~
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
~~~
answer tiene el valor 8.

### Ámbito global y funciones
- En JavaScript, el ámbito se refiere a la visibilidad de las variables. Las variables definidas fuera de un bloque de función tienen un ámbito Global. Esto significa que pueden ser observadas desde cualquier lugar en tu código JavaScript.

- Las variables que se declaran sin las palabras clave let o const se crean automáticamente en el ámbito global. Esto puede crear consecuencias no intencionadas en cualquier lugar de tu código o al volver a ejecutar una función. Siempre debes declarar tus variables con let o const.

- **Las variables que se declaran dentro de una función, así como los parámetros de la función tienen un ámbito local. Esto significa que sólo son visibles dentro de esa función**.

- Es posible tener variables locales y globales con el mismo nombre. Cuando haces esto, la variable local tiene precedencia sobre la variable global.
~~~
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
~~~

La función myFun devolverá la cadena Head porque está presente la versión local de la variable.

### Valor indefinido devuelto por una función
Una función puede incluir la declaración de devolución (return) pero no tiene por qué hacerlo. **En el caso de que la función no tenga una declaración de devolución (return), cuando la llames, la función procesa el código interno, pero el valor devuelto es undefined (indefinido)**.
~~~
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
~~~
addSum es una función sin una declaración de devolución (return). La función cambiará la variable global sum pero el valor devuelto de la función es **undefined**.

### Devolver valores booleanos desde funciones
Puesto que === devuelve true o false, podemos devolver el resultado de la comparación:
~~~
function isEqual(a, b) {
  return a === b;
}
~~~
### Patrón de devolución anticipado para funciones
Cuando se alcanza una sentencia **return**, la ejecución de la función actual se detiene y el control se devuelve a la ubicación de la llamada.



----------------------------------------------
## Estructuras de control 

## Estructura if : 
~~~
if (boolean) {
    acciones 1 
    } else { 
        acciones 2 
        } ; 
~~~
se pueden combinar condiciones mediante operadores logicos :

**AND : &&  , OR : || , NOT : !**

### Comparación con el operador de igualdad
Hay muchos operadores de comparación en JavaScript. Todos estos operadores devuelven un valor booleano true o false.

El operador más básico es el de igualdad **==**. El operador de igualdad compara dos valores y devuelve true si son equivalentes o false si no lo son. 

Ten en cuenta que una igualdad es diferente a una asignación (=), la cual asigna el valor a la derecha del operador a la variable de la izquierda.
~~~
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
~~~

Si myVal es igual a 10, el operador de igualdad devuelve true, así que el código dentro de los corchetes se ejecutará y la función devolverá Equal. De lo contrario, la función devolverá Not Equal.

**Para que JavaScript compare dos tipos de datos diferentes (por ejemplo, numbers y strings), tiene que convertir un tipo a otro. Esto se conoce como coerción de Tipo.**

Tenemos funciones que convierten entre tipos de datos , por ejemplo :

 - Number (de caracter a numero) 

 - parseInt (de caracter a numero entero )

- parseFloat (de entero a decimal )

- String (de cualquier variable a un string).

- El operador Typeof ( argumento ) nos devuelve los tipos de datos de las variables argumento.

### Comparación con el operador de estricta igualdad
La estricta igualdad (===) es la contraparte del operador de igualdad (==). Sin embargo, a diferencia del operador de igualdad, el cual intenta convertir ambos valores comparados a un tipo común, **el operador de estricta igualdad no realiza una conversión de tipo**.

Si los valores que se comparan tienen diferentes tipos, se consideran desiguales, y el operador de estricta igualdad devolverá falso.

### Comparación con el operador de desigualdad
El operador de desigualdad **(!=)** es lo opuesto al operador de igualdad. Esto quiere decir que no es igual, y devuelve false cuando la comparación de igualdad devuelva true y vice versa. **Al igual que el operador de igualdad, el operador de desigualdad convertirá los tipos de datos mientras los compara**.

### Comparación con el operador de estricta desigualdad
El operador de estricta desigualdad !== es el opuesto lógico del operador de estricta igualdad. Esto significa "Estrictamente Desigual", y devuelve false cuando la comparación de estricta igualdad devolvería true y vice versa. El operador de estricta desigualdad no convertirá los tipos de datos.


### Comparación con el operador "mayor que"
El operador mayor que (>) compara los valores de dos números. Si el número a la izquierda es mayor que el número a la derecha, devuelve true. De lo contrario, devuelve false.

Al igual que el operador de igualdad, el operador mayor que convertirá los tipos de datos de valores mientras los compara.

### Comparación con el operador "mayor o igual que"
El operador mayor o igual que (>=) compara el valor de dos números. Si el número de la izquierda es mayor o igual que el número de la derecha, devuelve true. De lo contrario, devuelve false.

Al igual que el operador de igualdad, el operador mayor o igual que convertirá los tipos de datos mientras los compara.

## Estructura switch-case 

~~~
    swich(variable)  {
                  case valor1 : acciones1 ;
                  break ; 
                         .
                         .
                  case valorN : accionesN ;
                  break ; 
                  default :
                  accionDefault ;
                  break;
~~~
Una sentencia switch prueba un valor y puede tener muchas sentencias case que definen varios valores posibles. Las sentencias se ejecutan desde el primer valor case coincidente hasta que se encuentra un break.

Los valores en las sentencias case se prueban con igualdad estricta (===). El break le dice a JavaScript que deje de ejecutar declaraciones. Si se omite break, se ejecutara la siguiente sentencia.

En una declaración switch puede que no seas capaz de especificar todos los valores posibles como declaraciones de case (caso). En su lugar, **se puede añadir la declaración default, la cual se ejecutará si no se encuentran declaraciones case**.Una declaración default debe ser el último caso.

---------------------------------------------

## Objetos en Javascript 

Los objetos son similares a los arreglos (arrays), excepto que en lugar de usar índices para acceder y modificar sus datos, accedes a los datos en objetos a través de propiedades (properties).

Los objetos son útiles para almacenar datos de forma estructurada y pueden representar objetos del mundo real, como un gato.

Por ejemplo, aquí hay un objeto de gato:
~~~
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
~~~
La primer manera de acceder a propiedades de un objeto es a traves de notacion de puntos .

La segunda manera de acceder a las propiedades de un objeto es con la notación de corchetes ([]). Si la propiedad del objeto al que intentas acceder tiene un espacio en el nombre, necesitarás usar notación de corchetes.

### Acceder a propiedades de objetos con variables
Otro uso de la notación de corchetes en objetos es acceder a una propiedad que está almacenada como el valor de una variable. **Esto puede ser muy útil para iterar a través de las propiedades de un objeto o para acceder a una tabla de búsqueda.**

Aquí hay un ejemplo del uso de una variable para acceder a una propiedad:
~~~
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
~~~
La cadena Doberman se mostrará en la consola.

Otra forma de usar este concepto es **cuando el nombre de la propiedad se recoge dinámicamente durante la ejecución del programa**, de la siguiente manera:
~~~
const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
~~~

someProp tendrá una cadena con un valor propName y la cadena John se mostrará en la consola.

**Ten en cuenta que no usamos comillas alrededor del nombre de la variable cuando la usamos para acceder a la propiedad porque utilizamos el valor de la variable, no el nombre**.

### Elimina propiedades en un objeto de JavaScript

También podemos eliminar propiedades de objetos de esta forma:
~~~
delete ourDog.bark;
~~~

### Usar objetos para hacer búsquedas
**Los objetos pueden ser considerados como un almacenamiento clave/valor, como un diccionario. Si tienes datos tabulares, puedes utilizar un objeto para hacer una búsqueda de valores en lugar de una declaración switch o encadenar if/else**. Esto es de mucha utilidad cuando se sabe que los datos de entrada están limitados a un cierto rango.

Aquí hay un ejemplo de una simple búsqueda de alfabeto inverso:
~~~
const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];
~~~

alpha[2] es la cadena Y, alpha[24] es la cadena C, y alpha[value] es la cadena Y.

###  Verifica las propiedades de un objeto
A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el método **.hasOwnProperty(propname)** para determinar si un objeto tiene una propiedad con ese nombre. **.hasOwnProperty() devuelve true o false si se encuentra la propiedad o no**.
~~~
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
~~~
El primer hasOwnProperty devuelve true, mientras que el segundo devuelve false.

## Ejercicio coleccion de discos :
Colección de discos

Se te da un objeto literal que representa una parte de tu colección de álbumes musicales. Cada álbum tiene un número de id único como clave y varias otras propiedades. No todos los álbumes tienen una información completa.

Empiezas con una función updateRecords la cual toma un objeto literal, records, que contiene el álbum musical de la colección, un id, prop (como artist o tracks), y value. Completa la función usando las reglas siguientes para modificar el objeto pasado a la función.

- Tu función siempre debe devolver el objeto de colección de registros completo.
- Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.
- Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.
- Si prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.
- Si value es una cadena vacía, elimina esa propiedad prop del álbum.

### Resolucion :
~~~
// Configuración
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {

if (prop !== "tracks" && value !== ""){
    let obj = records[id] ;
    obj[prop] = value ;
          } 

if (prop == "tracks" && !records[id].hasOwnProperty("tracks")){
      let canciones = [];
      canciones.push(value);
      //console.log(canciones)
      let disco = records[id];
      disco[prop] = canciones 
              } else {
                if (prop == "tracks" && value !== ""&& records[id].hasOwnProperty("tracks")){
    let objeto = records[id];
    let array = objeto["tracks"];
    array.push(value);
  } 
              }

  if (value == ""){
    let disco = records[id];
      delete disco[prop]
  }

  return records;
}

//updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))

console.log(updateRecords(recordCollection, 5439, 'tracks', 'occcc'))
console.log(updateRecords(recordCollection, 5439, 'tracks', ''))
~~~
---------------------------------------------

## Bucles while , do-while , for 

### while: 
~~~
while (condicion boolean) {
acciones del bucle 
operador de incremento o decremento (i++ , i--)

}
~~~
### do-while : 

Primero se ejecuta el bloque de codigo y luego se verifica la condicion : 
~~~
do {acciones del bucle} 
        while (condiciones del bucle).
~~~
La instruccion break nos permite salir del bucle : 
por ejemplo   
~~~
if (condicion de corte ) {break }.
~~~
### Ejercicio busqueda de perfiles :

<a href = 'https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup'>Link De freeCodeCamp</a>
~~~
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Cambia solo el código debajo de esta línea
  let i = 0 ;
  let terminado = false;
  do {
      if (contacts[i].firstName == name){
        let element = contacts[i];
        if (element[prop]!==undefined){
           terminado = true;
           return element[prop]
        } else {
          return "No such property"
        }
        
        
      }
      i++;
      if (i>contacts.length-1){
        return "No such contact"
      }


  } while (!terminado)
  }
console.log(lookUpProfile("Kristian", "likes"));
~~~
### for :

Los bucles for se declaran con tres expresiones opcionales separadas por punto y coma:

for (a; b; c), donde a es la sentencia de inicialización, b es la sentencia condicional, y c es la expresión final.

La sentencia de inicialización se ejecuta una sola vez antes de que el bucle comience. Normalmente se utiliza para definir y configurar tu variable de bucle.

### Iterar a través de un arreglo con un bucle "for"
Una tarea común en JavaScript es iterar a través del contenido de un arreglo. Una forma de hacerlo es con un bucle for. Este código mostrará cada elemento del arreglo arr en la consola:
~~~
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
~~~
Recuerda que los arreglos tienen una indexación basada en cero, lo que significa que el último índice del arreglo es igual a su longitud menos uno (length - 1).

## Recursion 

La recursión es el concepto que una función puede expresarse en términos de sí misma. Para ayudar a comprender esto, comienza pensando en la siguiente tarea: multiplica los primeros n elementos de un arreglo para crear el producto de esos elementos. Usando un bucle for, puedes hacer esto:
~~~
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
~~~

Sin embargo, nota que **multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]**. 

Esto significa que puedes reescribir multiply en términos de sí misma y que nunca necesites hacer uso de un bucle.
~~~
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
~~~

La versión recursiva de multiply se desglosa así. En el caso base, donde n <= 0, devuelve 1. Para valores más grandes de n, se llama a sí misma, pero con n - 1. Esa llamada de función se evalúa de la misma manera, llamando a multiply otra vez hasta que n <= 0. En este punto, todas las funciones pueden devolver y la multiply original devuelve la respuesta.

**Nota: Las funciones recursivas deben tener un caso base cuando devuelven sin tener que llamar a la función de nuevo (en este ejemplo, cuando n <= 0), de lo contrario nunca podrán terminar de ejecutarse.**

### Suma de los primeros n elementos de un arreglo mediante recursion :

~~~
function sum(arr, n) {
   if (n<=0){
     return 0
   } else {
     return sum(arr,n-1) + arr[n-1]
   }
}
~~~
### Recursión para crear una cuenta regresiva
~~~
function countdown(n){
  if (n<1){
    return []
  } else {
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray
  }
  
}
console.log(countdown(4))  
~~~
la llamada a console devuelve [ 4, 3, 2, 1 ]

### Recursión para crear un rango de números

~~~
function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum){
    return [startNum];
  } else {
    const intervalArray = rangeOfNumbers(startNum,endNum -1);
    intervalArray.push(endNum);
    return intervalArray
  }
 
};

console.log(rangeOfNumbers(1,5))
~~~
la llamada a console devuelve [ 1, 2, 3, 4, 5 ]





## Generacion de numeros aleatorios 

Genera fracciones aleatorias con JavaScript
Los números aleatorios son útiles para crear comportamientos aleatorios.

- JavaScript tiene una función **Math.random()** que genera un número decimal aleatorio entre 0 (inclusivo) y 1 (exclusivo). Así que Math.random() puede devolver un 0 pero nunca devuelve un 1.

 - **Math.floor()** para redondear el número hacia abajo a su número entero más cercano.

### Números enteros aleatorios dentro de un rango
En lugar de generar un número entero aleatorio entre cero y un número dado como lo hicimos anteriormente, podemos generar un número entero aleatorio que se encuentre dentro de un rango de dos números específicos.

Para ello, definiremos un número mínimo min y un número máximo max.
~~~
Math.floor(Math.random() * (max - min + 1)) + min
~~~























