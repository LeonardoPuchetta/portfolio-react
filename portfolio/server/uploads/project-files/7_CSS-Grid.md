# CSS grid

La cuadrícula (grid) CSS es un estándar reciente que facilita la creación de diseños complejos y responsivos. Funciona convirtiendo un elemento HTML en una cuadrícula y te permite colocar elementos secundarios en cualquier lugar dentro ella.

**Convierte cualquier elemento HTML en una cuadrícula al establecer la propiedad display a grid**. 

Esto te da la habilidad de usar todas las demás propiedades asociadas con CSS Grid.

Nota: en CSS Grid, el elemento padre se refiere como el **contenedor** y sus hijos se llaman **elementos**.
~~~
<style>
 .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display : grid;
</style>
~~~

## Columnas con **grid-template-columns**
Crear un simple elemento cuadrícula (grid) no te llevará muy lejos. Necesitas también definir su estructura. 

Para agregar columnas a la cuadrícula, usa la propiedad grid-template-columns en el contenedor de la cuadrícula como se demuestra a continuación:
~~~
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
~~~

Esto le dará a tu cuadrícula dos columnas que tienen 50px de ancho cada una. 

El número de parámetros que se le da a la propiedad grid-template-columns indica el número de columnas en la cuadrícula y el valor de cada parámetro indica el ancho de cada columna.

Otra manera mas exacta de definir columnas puede ser estableciendo lineas de control : 

~~~
.layout-sign {
    display:grid;
    //grid-template-columns: 1fr 2fr 1fr ;
    grid-template-columns: [x0] 1fr [x1] 2fr [x2] 1fr [x3];
}
~~~

## Filas con **grid-template-rows**
~~~
.layout-sign {
    display:grid;
    //grid-template-rows: 1fr 2fr 1fr ;
    grid-template-rows: [y0] 1fr [y1] 2fr [y2] 1fr [y3];
}
~~~

## Unidades CSS Grid para cambiar el tamaño de las columnas y filas
Puedes usar unidades absolutas y relativas como px y em en CSS Grid para definir el tamaño de filas y columnas. 

Puedes usar estas también:

**fr** : fija la columna o fila a una fracción del espacio disponible,

**auto** : fija la columna o fila al ancho o alto de su contenido automáticamente,

**%** : ajusta la columna o fila al porcentaje de ancho de su contenedor.

~~~
grid-template-columns: auto 50px 10% 2fr 1fr;
~~~

## Espacio entre columnas usando **grid-column-gap**

Hasta ahora en las grids que has creado, las columnas han estado todas juntas. Algunas veces querrás un espacio entre las columnas. Para agregar un espacio entre las columnas, usa la propiedad grid-column-gap de la siguiente manera:

~~~
grid-column-gap: 10px;
~~~
Esto crea espacios vacíos de 10px entre todas las columnas.

Puedes agregar un espacio entre las filas usando **grid-row-gap**.

-**grid-gap** es una propiedad abreviada para grid-row-gap y grid-column-gap de los dos desafíos anteriores que es más conveniente usar.

 **Si grid-gap tiene un valor, creará un espacio entre todas las filas y columnas. Sin embargo, si hay dos valores, usará el primero de estos para poner los espacios entre las filas y el segundo para los espacios entre las columnas**.

 ## **grid-column** para controlar espaciado
Hasta este punto, todas las propiedades que hemos discutido son para los contenedores de cuadrícula (grid). La propiedad grid-column es la primera que usaremos para los propios elementos de la cuadrícula.

Las líneas horizontales y verticales hipotéticas que crean la cuadrícula son referidas como líneas. Estas líneas son enumeradas empezando con el 1 desde la esquina superior izquierda de la cuadrícula y se desplaza hacia la derecha para las columnas y hacia abajo para las filas, contando hacia arriba.

**Para controlar la cantidad de columnas que un elemento tendrá, puedes usar la propiedad grid-column en conjunto con el número de las líneas en las que quieres que empiece y termine**.

Aquí un ejemplo:
~~~
grid-column: 1 / 3;
~~~
**Esto hará que el elemento empiece en la primera línea vertical de la cuadrícula a la izquierda y se extienda a la 3ra línea de la cuadrícula, ocupando dos columnas**.

## **grid-row** para controlar espaciado
Por supuesto, puedes hacer que los elementos ocupen múltiples filas así como se puede hacer con las columnas. Puedes definir las líneas horizontales donde quieres que un elemento empiece y termine usando la propiedad grid-row sobre un elemento de cuadrícula (grid).

~~~
grid-row: 1 / 3;
~~~

## Alinear un elemento horizontalmente usando **justify-self**

En CSS Grid, el contenido de cada elemento está ubicado en una caja, la cual se refiere como celda. Puedes alinear la posición del contenido dentro de la celda horizontalmente usando la propiedad justify-self en un elemento grid. **Por defecto, esta propiedad tiene valor de stretch, lo que hace que el contenido cubra todo el ancho de la celda**. Esta propiedad de CSS Grid acepta otros valores también:

**start**: alinea el contenido hacia la izquierda de la celda,

**center**: alinea el contenido en el centro de la celda,

**end**: alinea el contenido hacia la derecha de la celda.

## Alinear un elemento verticalmente usando **align-self**
Así como puedes alinear un elemento horizontalmente, hay una manera de alinearlo verticalmente también. Para hacer esto, usa la propiedad **align-self** sobre un elemento.

## Alinear todos los elementos horizontalmente usando **justify-items**
Algunas veces querrás que todos los elementos en tu CSS Grid compartan el mismo alineamiento. Puedes usar las propiedades aprendidas anteriormente y alinearlos individualmente, o **puedes alinear todos a la vez horizontalmente usando justify-items en el contenedor de tu grid**. Esta propiedad acepta los mismos valores aprendidos (start,center,end).

La propiedad **align-items** en el contenedor de una grid establecerá el alineamiento vertical de todos los elementos de la grid.

## Dividir la cuadrícula en una **Area Template**
Puedes agrupar las celdas de tu cuadrícula en una área y darle a esa área un nombre personalizado. Haz esto usando **grid-template-areas** en el contenedor de la siguiente manera:
~~~
grid-template-areas:
  "header header header"
  "advert content content"
  "advert footer footer";
  ~~~

**El código anterior agrupa las celdas de la cuadrícula en cuatro áreas; header, advert, content y footer. Cada palabra representa una celda y cada par de comillas representa una fila**.

## Ubicar elementos en áreas de cuadrícula usando la propiedad **grid-area**

Después de crear una plantilla de área para tu contenedor de cuadrícula (grid), puedes ubicar un elemento en tu área personalizada referenciando el nombre que le diste. Para hacer esto, usa la propiedad grid-area sobre un elemento así:
~~~
.item1 {
  grid-area: header;
}
~~~
**Esto le dice a la cuadrícula que quieres que la clase item1 se ubique en el área llamada header**. En este caso, el elemento usará la totalidad de la fila superior porque esa área se llama header.

## **grid-area** sin crear plantillas de área

Si tu cuadrícula (grid) no tiene plantillas de área de referencia, puedes crear un área para un elemento sobre la marcha para ubicar los elementos de la siguiente manera:
~~~
item1 { grid-area: 1/1/2/4; }
~~~
Esto usa los números de líneas aprendidos anteriormente para definir cuál será el área de ese elemento. Los números en el ejemplo anterior representan estos valores:
~~~
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
~~~
Entonces, el elemento en el ejemplo ocupará las filas entre las líneas 1 y 2, y las columnas entre las líneas 1 y 4.

## Reducir repeticiones usando la función **repeat**

Cuando usaste grid-template-columns y grid-template-rows para definir la estructura de una cuadrícula (grid), ingresaste un valor para cada fila o columna que creaste.

Digamos que quieres una cuadrícula con 100 filas del mismo tamaño. No es muy práctico insertar 100 valores manualmente. Afortunadamente, hay una mejor manera - **usando la función repeat para especificar el número de veces que quieres que tu columna o fila se repita, seguido de una coma y el valor que quieres repetir**.

A continuación un ejemplo que crea una cuadrícula de 100 filas, cada fila con 50px de alto.
~~~
grid-template-rows: repeat(100, 50px);
~~~

También puedes repetir múltiples valores con la función repeat e insertar la función entre otros valores al definir una estructura de cuadrícula. Así se ve:
~~~
grid-template-columns: repeat(2, 1fr 50px) 20px;
~~~

Esto traduce a:
~~~
grid-template-columns: 1fr 50px 1fr 50px 20px;
~~~

## Limitar el tamaño del elemento usando la función **minmax**

Hay otra función integrada para usar con grid-template-columns y grid-template-rows llamada minmax. 

Se usa para limitar el tamaño de los elementos cuando el contenedor de la cuadrícula (grid) cambia de tamaño. Para hacer esto, necesitas especificar el rango de tamaño aceptable para tu elemento. A continuación un ejemplo:

~~~
grid-template-columns: 100px minmax(50px, 200px);
~~~
En el código anterior, grid-template-columns se configuró para crear dos columnas; la primera tiene 100px de ancho y la segunda tiene un ancho mínimo de 50px y máximo de 200px.

## Diseños flexibles usando **auto-fill**
La función de repetición viene con una opción llamada auto-fill. Esto te permite insertar automáticamente tantas filas o columnas del tamaño deseado como sea posible, dependiendo del tamaño del contenedor. Puedes crear diseños flexibles al combinar auto-fill con minmax, así:
~~~
repeat(auto-fill, minmax(60px, 1fr));
~~~

Cuando el tamaño del contenedor cambia, esta configuración sigue insertando columnas de 60px y estirándolas hasta que pueda insertar otra. **Nota: Si a tu contenedor no le caben todos los elementos en una fila, los moverá hacia abajo a una nueva fila.**

## Diseños flexibles usando **auto-fit**
auto-fit funciona casi igual que auto-fill. La única diferencia es que cuando el tamaño del contenedor excede el tamaño de todos sus elementos combinados, auto-fill sigue insertando filas o columnas vacías y empuja los elementos hacia un lado, **mientras que auto-fit colapsa esas filas o columnas y estira los elementos para que cubran el tamaño del contenedor**.

**Nota: si a tu contenedor no le caben todos los elementos en una fila, los moverá hacia abajo a una nueva fila**.

~~~
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
~~~

## Consultas de medios (**media queries**) para crear diseños responsivos
CSS Grid puede ser una manera fácil de hacer que tu sitio sea más receptivo al usar consultas de medios (media queries) para reorganizar las áreas de cuadrícula (grid), cambiar sus dimensiones y reorganizar la ubicación de los elementos.
~~~
.container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      grid-template-areas:
      /* Cambia solo el código debajo de esta línea */
        "header header"
        "advert content"
        "footer footer";
      /* Cambia solo el código encima de esta línea */
    }
  }
  ~~~

  ## Crear cuadrículas (grids) dentro de cuadrículas
Convertir un elemento a una cuadrícula solo afecta el comportamiento de sus descendientes directos. Entonces, al convertir un descendiente directo a una cuadrícula, obtienes una cuadrícula dentro de una cuadrícula.

Por ejemplo, al establecer las propiedades display and grid-template-columns del elemento con clase item3, creas una cuadrícula dentro de tu cuadrícula.

~~~
  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    display:grid;
    grid-template-columns: auto 1fr
  }
 ~~~ 