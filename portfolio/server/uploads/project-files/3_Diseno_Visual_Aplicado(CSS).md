# Diseno Visual Aplicado (CSS)

## Alineacion de texto: 

El texto es frecuentemente una gran parte del contenido web. CSS tiene múltiples opciones para alinearlo con la propiedad **text-align.**

**text-align: justify** ; espacia el texto para que cada línea tenga el mismo ancho.

**text-align: center**; centra el texto

**text-align: right**; alinea el texto hacia la derecha

**text-align: left**; (opción por defecto) alinea el texto hacia la izquierda.

## Ancho y altura de un elemento : 

Puedes especificar el ancho de un elemento con la propiedad **width** en CSS.

 **Los valores se pueden dar en unidades de longitud relativa (como em, unidades de longitud absoluta como px, o como un porcentaje de su elemento padre contenedor).**  

Puedes especificar la **altura** de un elemento con la propiedad **height** en CSS como lo haces con la propiedad width (ancho).  

## Resaltar texto : 

Para poner el texto en negrita, puedes usar la etiqueta **strong**. Esto se usa a menudo para llamar la atención sobre el texto y simbolizar que es importante. 
Con la etiqueta strong, el navegador aplica el CSS de **font-weight: bold**; al elemento. 

~~~
   <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
~~~

## Subrayar texto : 

Para subrayar texto, puedes usar la etiqueta u. (se trata de evitar su uso )
Esto se utiliza a menudo para indicar que una sección del texto es importante, o algo que hay que recordar.
 Con la etiqueta u, el navegador aplica el CSS de text-decoration: underline; al elemento. 

## Texto en cursiva : 

Para enfatizar el texto, puedes usar la etiqueta **em**.

 Esto muestra el texto en cursiva, ya que el navegador aplica el CSS de **font-style: italic**; al elemento. 
 ~~~
 <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
~~~

## Tachar texto :

Para tachar el texto, que es cuando una línea horizontal atraviesa los caracteres, puede usar la etiqueta **s**. 
Muestra que una sección de texto ya no es válida. 

Con la etiqueta s, el navegador aplica el CSS de **text-decoration: line-through**; al elemento. 

~~~
 <h4><s>Google</s> Alphabet</h4>
~~~
<h4><s>Google</s> Alphabet</h4>

## Lineas Horizontales :

Puedes usar la etiqueta **hr** para agregar una línea horizontal a través del ancho de su elemento contenedor. Esto se puede usar para definir un cambio de tema o para separar grupos de contenido visualmente. 

## Color de Fondo  :

En lugar de ajustar el fondo general o el color del texto para que el primer plano sea fácilmente legible, puedes agregar un **background-color** al elemento que contiene el texto que deseas destacar.  
~~~
background-color: rgba(45,45,45,0.1)
~~~
el ultimo parametro es la opacidad (0 ---- 1 )



## Tamaño de un elemento de encabezado frente a un elemento de párrafo :

El tamaño de fuente de las etiquetas de encabezado (h1 a h6) generalmente debe ser mayor que el tamaño de fuente de las etiquetas de párrafos.
 Esto hace que sea más sencillo para que el usuario entienda visualmente el diseño y el nivel de importancia de cada elemento en la página.

 Se utiliza la propiedad **font-size** para ajustar el tamaño del texto en un elemento. 

 --------------------------------

 ## Agregar box-shadow a un elemento tipo tarjeta:
La propiedad **box-shadow** aplica una o más sombras a un elemento.
La propiedad box-shadow toma valores para

**offset-x (qué tan lejos extender la sombra horizontalmente desde el elemento),**

**offset-y (qué tan lejos extender la sombra verticalmente desde el elemento),**

**blur-radius,spread-radius y color, en ese orden.**

Los valores blur-radius y spread-radius son opcionales.

Se pueden crear múltiples box-shadows usando comas para separar las propiedades de cada elemento box-shadow.
~~~
#thumbnail {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23);
}
~~~
## Opacidad de un elemento 

La propiedad **opacity** en CSS se usa para ajustar la opacidad o, por el contrario, la transparencia de un elemento. 

## Transformar texto : 

La propiedad **text-transform** en CSS se utiliza para cambiar la apariencia del texto. 

Es una forma conveniente de asegurarse de que el texto en una página web aparezca de manera consistente, sin tener que cambiar el contenido del texto de los elementos HTML reales. 

~~~
lowercase
"Transformame"

uppercase
"TRANSFORMAME"

capitalize
"Transformame"

initial
Usa el valor predeterminado
inherit
Utiliza el valor text-transform del elemento principal

none
Predeterminado: Usa el texto original
~~~

## Grosor de caracteres : 

La propiedad **font-weight** establece que tan gruesos o delgados son los caracteres en una sección de texto. 

## Altura de cada linea de texto : 

CSS ofrece la propiedad **line-height** para cambiar la altura de cada línea en un bloque de texto.
 Como sugiere el nombre, cambia la cantidad de espacio vertical que recibe cada línea de texto.


## Hover y pseudoclases : 
Una **pseudo-clase** es una palabra clave que se puede agregar a los selectores para seleccionar un estado específico de un elemento. 

~~~
<style>
  a {
    color: #000;
  }
  a:hover{
    color:blue;
  }
~~~

## Posicion relativa de un elemento : 

Cuando la posición de un elemento se establece a **relative**, te permite especificar como CSS lo moverá relativo a su posición actual dentro del flujo normal de la página. 

Se empareja con las propiedades de desplazamiento CSS de **left o right, y top o bottom.** 

Estas dicen cuántos pixeles, porcentajes, o ems se debe mover el elemento lejos de donde esté normalmente posicionado. 
~~~
  h2 {
    position :relative;
    top: 15px;
  }
~~~

**Cambiando la posición de un elemento a relative no lo quita del flujo normal; otros elementos a su alrededor aún se comportarán como si dicho elemento estuviera en su posición predeterminada.** 

Los desplazamientos CSS de top o bottom y left o right indican al navegador hasta que punto debe compensar un elemento en relación con el lugar donde se ubicara en el flujo normal del documento. 

Está compensando un elemento lejos de un punto dado, lo que aleja el elemento del lado al que se hace referencia (efectivamente, en la dirección opuesta). 

 Usando el desplazamiento top movió el h2 hacia abajo. Del mismo modo, usando un desplazamiento left mueve un elemento hacia la derecha. 


## Posicion Absoluta de un elemento :

La siguiente opción para la propiedad CSS position es **absolute**, que bloquea el elemento en su lugar en relación con su contenedor principal. 

A diferencia de la posición relative, esto **elimina el elemento del flujo normal del documento**, por lo que los elementos circundantes lo ignoran.

 Las propiedades de desplazamiento de CSS (superior o inferior e izquierda o derecha) se utilizan para ajustar la posición. 

Un matiz del posicionamiento absoluto es que estará bloqueado en relación con su antepasado posicionado más cercano.

**Si olvidas agregar una regla de posición al elemento principal, (esto generalmente se hace usando position: relative;), el navegador seguirá buscando en la jerarquía de elementos y, en última instancia tomará por defecto la etiqueta body.**


## Posicion fixed(fija) de un elemento :

El siguiente esquema de diseño que ofrece CSS es la posición **fixed**, que es un tipo de posicionamiento absoluto que bloquea un elemento relativo a la ventana del navegador.

 Similar al posicionamiento absoluto, se usa con las propiedades de desplazamiento CSS y también elimina el elemento del flujo normal del documento. 

Otros elementos ya no "se dan cuenta" de donde se coloca, lo que puede requerir algunos ajustes de diseño en otros lugares.

Una diferencia clave entre las posiciones fixed y absolute es que **un elemento con una posición fija (fixed) no se moverá cuando el usuario se desplace.**

## Elementos hacia la izquierda o hacia la derecha con la propiedad **float** :

La siguiente herramienta de posicionamiento en realidad no usa position, sino que establece la propiedad **float** de un elemento.

Los elementos flotantes se eliminan del flujo normal de un documento y **se empujan a left o right de su elemento padre contenedor.**

 Se usa comúnmente con la propiedad **width** para especificar cuanto espacio horizontal requiere el elemento flotante. 

 ## Posición de los elementos superpuestos con la propiedad **z-index** :

Cuando los elementos son posicionados para superponerse (**i.e. usando position: absolute | relative | fixed | sticky**), el elemento que viene después dentro del marcado HTML aparecerá, por defecto, encima de los otros elementos.

 Sin embargo, la propiedad z-index puede especificar el orden de cómo los elementos están apilados unos sobre otros. 

**Debe ser un entero (i.e. un número entero y no un decimal), y los elementos que mayor valor tengan en z-index serán movidos más arriba en la pila de elementos que aquellos con valores menores.**


## Centrar elementos horizontalmente:
Otra técnica de posicionamiento consiste en centrar un elemento de bloque horizontalmente. Una manera de hacer esto es que **margin tenga valor auto**.

Este método también funciona para imágenes. 

**Las imágenes son elementos en línea de forma predeterminada, pero se pueden cambiar a elementos de bloque cuando se establece la propiedad display en block.**

-----------------------------------------

## Colores complementarios y terciarios: 
El círculo cromático es una herramienta útil para observar cómo los colores están relacionados entre sí - es un círculo donde los tonos similares están juntos y los tonos diferentes alejados.

Cuando dos colores opuestos están juntos en el círculo, se los llama **colores complementarios.**
Se caracterizan porque si se combinan, se cancelan así mismos y crean un color gris. Sin embargo, al ubicarse juntos, estos colores parecen más brillantes y producen un contraste visual fuerte.

Los monitores y las pantallas crean diferentes colores al combinar cantidades de luz roja, verde y azul. Esto se conoce como modelo aditivo de color **RGB** en la teoría de moderna de color. **Rojo (R), verde (G) y azul (B)** «por sus siglas en inglés» son **colores primarios**.


 **Al combinar dos colores primarios tendremos los colores secundarios cian (G + B), magenta (R + B) y amarillo (R + G).**  
 Estos colores secundarios son el complemento del color primario no utilizado en su creación y están frente a ese color primario en el círculo cromático. Por ejemplo, el magenta está compuesto de rojo y azul y es el complemento del verde.

Los **colores terciarios** se forman al **combinar dos colores primarios con uno de sus vecinos de color secundario**. 
Por ejemplo, entre el modelo de color RGB, rojo (primario) y amarillo (secundario) forman naranja (terciario). Esto añade seis colores a un círculo cromático simple para un total de doce.
Hay varios métodos para seleccionar colores diferentes que resultan de una combinación armoniosa en diseño.

Un ejemplo que puede usar colores terciarios es el esquema de color complementario dividido. 

Este esquema comienza con un color base, luego lo empareja con los dos colores que están adyacentes a su complemento. Los tres colores proporcionan un fuerte contraste visual en un diseño, pero son más sutiles que utilizar dos colores complementarios.
En la práctica, usualmente se usa uno de los colores como dominante y los complementarios se usan para atraer atención visual a cierto contenido dentro de la página. 

## Matiz de un color (tono , saturacion y brillo):
Los colores tienen varias características tales como el **matiz, la saturación y la ligereza**.

 CSS3 introdujo la propiedad **hsl()** como una forma alternativa de elegir un color indicando directamente estas características.

Se suele pensar que Hue es el "color". 

Si imaginas un espectro de colores con un rojo en la izquierda que se torna verde en el medio y azul en la derecha, el tono es donde cabe un color a lo largo de esta línea. 

En hsl(), el tono usa un concepto de círculo cromático en lugar del espectro, donde el ángulo del color en el círculo se da como un valor entre 0 y 360.

**Saturation** es la cantidad de gris en un color. Un color totalmente saturado no tiene gris y un color mínimamente saturado es casi completamente gris. Esto se da como un porcentaje con 100% de saturación.

**Lightness** es la cantidad de blanco en un color. Un porcentaje se da desde 0% (negro) hasta 100% (blanco), donde 50% es el color normal.

## Ajuste de tono :

La opción **hsl()** en CSS también hace que sencillo ajustar el tono de un color. 
Mezclar blanco con un tono puro crea un tinte de ese color y añadir negro hará una sombra. 

De forma alternativa, un tono se produce al añadir gris o tintes y sombras. 

Recuerda que la 's' y 'l' del hsl() representan saturación y ligereza, respectivamente. El porcentaje de saturación cambia la cantidad de gris y el porcentaje de luz determina el porcentaje de blanco o de negro que hay en el color. 

Esto es útil cuando se tiene un tono base que se quiere, pero necesita variaciones diferentes del mismo. 
Todos los elementos tienen un **background-color** predeterminado de **transparent**. 


## Gradiente lineal de CSS gradual :
La aplicación de un color en elementos HTML no se limita a un tono plano.
 CSS proporciona la capacidad de usar transiciones de color, también conocidas como degradados, en los elementos. 
Esto se accede a través de la función **linear-gradient()** de la propiedad **background**.  

El primer argumento especifica la dirección desde la que comienza la transición de color, se puede establecer como un grado, donde 90deg hace un gradiente horizontal (de izquierda a derecha) y 45deg hace un gradiente diagonal (de abajo a izquierda hacia arriba a la derecha).


Los siguientes argumentos especifican el orden de los colores utilizados en el degradado. 

~~~
    background :linear-gradient(35deg,#CCFFFF,#FFCCCC);
~~~

## Degradado lineal CSS para crear un elemento rayado 

La función **repeating-linear-gradient()** es muy similar a **linear-gradient()** con la principal diferencia de que repite el patrón de degradado especificado. 

**repeating-linear-gradient()** acepta una variedad de valores .

El valor del ángulo es la dirección del gradiente. Las paradas de color son como valores de ancho que marcan donde tiene lugar una transición, y se dan con un porcentaje o un número de píxeles. 

Si cada dos valores de parada de color son del mismo color, la mezcla no es visible porque está entre el mismo color, seguido de una dura transición hacia el siguiente color, así que terminas con rayas. 

~~~
  background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
~~~

## Textura agregando un patrón sutil como imagen de fondo :

Una forma de agregar textura e interés a un fondo y hacer que se destaque más es agregar un patrón sutil. La clave está en el balance, dado que no querrás que el fondo destaque demasiado y quite atención al primer plano. 

La **propiedad background acepta la función url()** para enlazar una imagen de la textura o patrón elegido. El enlace es cubierto entre comillas dentro del paréntesis. 
~~~
<style>
  body {
      background:url(https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png)
  }
</style>
~~~

## Cambiar el tamaño de un elemento con interactividad:

Para cambiar la escala de un elemento, CSS tiene la propiedad **transform**, junto con su función **scale()**.  

~~~
  #ball2 {
    left: 65%;
    transform:scale(1.5)
  }
~~~

La propiedad transform tiene una variedad de funciones que el permiten escalar, mover, rotar, sesgar, etc., sus elementos.

 **Cuando se usa con pseudo-classes como :hover que especifican un cierto estado de un elemento, la propiedad transform puede agregar fácilmente interactividad a sus elementos.**

 ~~~ 
  div:hover{
    transform: scale(1.1);
  }
~~~


## Inclinar elementos:

La siguiente función de la propiedad **transform** es **skewX()**, que inclinar el elemento seleccionado a lo largo de su eje X (horizontal). 

~~~
  #bottom {
    background-color: blue;
    transform : skewX(24deg);
  }
~~~

## Graficos usando CSS :
Manipula el elemento cuadrado en el editor para crear la figura de luna. Primero, cambia el background-color a transparent, luego establece la propiedad border-radius en 50% para hacer la forma circular. Finalmente, cambia la propiedad box-shadow para asignar offset-x a 25px, offset-y a 10px, blur-radius a 0, spread-radius a 0 y el color a blue. 

~~~
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
~~~


## Formas complejas usando CSS y HTML , pseudoelementos:

**pseudo-elements ::before y ::after :**

 **::before** crea un pseudo-elemento que es el primer hijo del elemento seleccionado; 

**::after** crea un pseudo-elemento que es el último hijo del elemento seleccionado. 

Para que los pseudo-elements ::before y ::after funcionen correctamente, deben tener una propiedad **content** definida.

Esta propiedad generalmente se usa para agregar cosas como una foto o texto al elemento seleccionado. 
Cuando se utilizan los pseudo-elements ::before y ::after para crear formas, la propiedad content sigue siendo necesaria, pero se establece en una cadena vacía.  
~~~
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
~~~

------------------------------------

## Propiedades de CSS @keyframes y animación  :
Para animar un elemento, necesitas conocer las **propiedades de animación y la regla @keyframes**.

**Las propiedades de animación controlan como debe comportarse la animación y la regla @keyframes controla lo que sucede durante esa animación.**

 Hay ocho propiedades de animación en total. 

**animation-name** establece el nombre de la animación, que luego es utilizada por @keyframes para decirle a CSS que reglas van con que animaciones. 

**animation-duration** establece el tiempo de la animación. 

**@keyframes** es como especificar exactamente lo que sucede dentro de la animación durante la duración.

 **Esto se hace dando propiedades CSS para "marcos" específicos durante la animación, con porcentajes que van del 0% al 100%.** 
 
 Si comparas esto con una película, las propiedades de CSS de 0% es como se muestra el elemento en la escena inicial. Las propiedades de CSS con 100% es como aparece el elemento al final, justo antes de que rueden los créditos.

 Luego, CSS aplica la magia para hacer la transición del elemento durante la duración dada para representar la escena.  
 ~~~
  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }
  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    100%{
      background-color:yellow;
      
    }
~~~

Para que el color de un button cambie con hover por ejemplo :
~~~
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }
  @keyframes background-color {
    100%{
      background-color: #4791d0;
    }
  }
~~~


Podemos establecerle un estilo al elemento luego de la animacion  estableciendo la propiedad **animation-fill-mode** en **forwards**. El animation-fill-mode especifica el estilo aplicado a un elemento cuando la animación ha finalizado. 


## Movimientos usando animacion CSS :

**Cuando los elementos tienen una position, como fixed o relative, las propiedades de desplazamiento CSS right, left, top y bottom se pueden usar en las reglas de animación para crear movimiento.** 

~~~
#rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;

    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;

    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;

    }
  }
~~~

Tambien se puede crear una dirección visual desvaneciendo un elemento de izquierda a derecha usando la propiedad opacity 



Otra propiedad de animación es la **animation-iteration-count** la cual te permite controlar **cuántas veces te gustaría hacer un bucle a través de la animación**. 

~~~
animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
~~~

esto creara una animacion infinita llamada “bounce”.


## Cambia la duración de las animaciones con palabras clave :

En las animaciones CSS, la propiedad **animation-timing-function**controla qué tan rápido un elemento animado cambia sobre la duración total de la animación.

 Si la animación es un carro moviéndose de un punto A a un punto B en un tiempo establecido (tu animation-duration), la animation-timing-function dicta cómo el carro acelera y desacelera durante el transcurso en marcha. 

Existe un número de palabras clave predefinidas disponibles para las opciones populares. Por ejemplo, el valor por defecto es **ease**, que empieza despacio, acelera en el medio y luego reduce la velocidad de nuevo al final. 
Otras opciones incluye **ease-out**, que es rápida al inicio y luego reduce la velocidad, **ease-in**, que es lenta al inicio y luego acelera al final, o **linear**, que aplica una velocidad constante a lo largo de la animación. 


## Curvas de Bezier : 
 CSS ofrece una opción distinta a las palabras clave que proporciona un control aún más fino sobre cómo se desarrolla la animación, a través del uso de curvas Bezier.
En las animaciones CSS, las curvas Bezier se utilizan con la función cubic-bezier.

 La forma de la curva representa cómo se desarrolla la animación.
 La curva vive en un sistema de coordenadas de 1 a 1. El eje X de este sistema de coordenadas es la duración de la animación (piénsa en una escala de tiempo), y el eje Y es el cambio en la animación.

La **función cubic-bezier** consta de cuatro puntos principales que se encuentran en esta cuadrícula de 1 por 1: p0, p1, p2 y p3. p0 y p3 están configurados para ti: son los puntos inicial y final que siempre se encuentran respectivamente en el origen (0, 0) y (1, 1).

 Establece los valores x e y para los otros dos puntos, y donde los coloca en la cuadrícula determina la forma de la curva para la animación que debe seguir. 
 
 Esto se hace en CSS declarando los valores x e y de los puntos "anchor" p1 y p2 de la siguiente forma:
 ~~~
 (x1, y1, x2, y2) 

  #ball1 {
    left: 27%;
    animation-timing-function: 
cubic-bezier(0.25,0.25,0.75,0.75);
  }
~~~

La siguiente curva cúbica de Bezier simula el movimiento de rebotes:
~~~
cubic-bezier(0.3, 0.4, 0.5, 1.6);
~~~
Observa que el valor de y2 es mayor que 1. Aunque la curva cúbica de Bezier se mapea en un sistema de coordenadas 1 por 1, y solo puede aceptar valores x de 0 a 1, el valor y se puede establecer en números mayores que uno. 

Esto da como resultado un movimiento de rebote que es ideal para simular la pelota rebotando.






















