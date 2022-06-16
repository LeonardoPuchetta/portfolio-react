# CSS Basico :

~~~
    <style>
            h2 {
                    color: red;
                }
    </style>
~~~

Usa una clase CSS para aplicar estilos a un elemento : las clases son estilos reutilizables que se pueden agregar a los elementos HTML.

~~~
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class = "red-text">CatPhotoApp</h2>
~~~

El tamaño de la fuente es controlado por la propiedad CSS **font-size**.


~~~
 p {
    font-size: 16px;
  }

~~~

Puedes utilizar la propiedad **font-family** (familia de fuente) para establecer qué fuente debe usar un elemento. 

~~~
 p {
    font-size: 16px;
    font-family: monospace;
  }
~~~

## Fuentes importadas : 

Google Fonts es una biblioteca gratuita de web fonts que puedes utilizar en tu código CSS, haciendo referencia a la URL de la fuente. 

~~~
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
~~~

Ahora puedes usar la fuente Lobster en tu CSS usando Lobster como FAMILY_NAME como en el siguiente ejemplo:

~~~ 
font-family: FAMILY_NAME, GENERIC_NAME; 
~~~


GENERIC_NAME es opcional, y es el modo de especificar una fuente de reserva o "fallback font" en caso de que la otra fuente especificada no esté disponible.
~~~
h2 {
    font-family:Lobster ;  
  }
~~~

## Degradado de fuentes : 

Hay varias fuentes por defecto disponibles en todos los navegadores. 

Estas familias de fuentes genéricas incluyen **monospace, serif y sans-serif**.

Cuando una fuente no está disponible en el sistema, puedes indicarle al navegador que "degrade" a otra fuente alternativa.

Por ejemplo, si quieres que un elemento utilice la fuente Helvetica pero que degrade a la fuente sans-serif en caso que Helvetica no esté disponible, se especifica de la siguiente manera:
~~~
 h2 {
    font-family: Lobster, monospace;
  }
~~~

## Tamano de Imagenes : 

CSS tiene una propiedad llamada **width** que controla el ancho de un elemento. 

Al igual que con las fuentes, usaremos la unidad de medida px (píxeles) para especificar el ancho de la imagen.

~~~
  .smaller-image{

    width:100px;

	  }
~~~

## Bordes de elementos :

Los bordes CSS tienen propiedades como style (estilo), color y width (ancho).

Por ejemplo, si quisiéramos crear un borde rojo de 5 píxeles alrededor de un elemento HTML, podríamos usar la siguiente clase:

~~~
  .thick-green-border{
    border-color:green;
    border-width:10px;
    border-style:solid;
  }
~~~

## Esquinas redondeadas usando border-radius:  

~~~
    border-radius: 10px
~~~

## Imagenes Circulares usando border-radius:

~~~
    border-radius: 50%
~~~

## Color de fondo de un div :

Propiedad background-color

~~~
.silver-background {

    background-color:silver;

 		 }
~~~

## Id de elementos :

Además de las clases, cada elemento HTML también puede tener un atributo id.

Existen varios beneficios de usar atributos de id: Puedes usar un id para dar estilo a un elemento específico . 

Los atributos id deben ser únicos. Los navegadores no verifican esta regla, pero es una buena práctica ampliamente aceptada. 

Sin embargo, un id no es reutilizable y solo debe aplicarse a un único elemento. 

Un id también tiene mayor especificidad (importancia) que una clase, así que si aplicas un id y una clase al mismo elemento y sus estilos se contradicen, se aplicarán los estilos del id.

~~~

  #cat-photo-form {
  background-color: green;
  }
~~~

## Padding (relleno) de un elemento :

Hay tres propiedades importantes que controlan el espacio que rodea cada elemento HTML: **padding** (relleno), **border** (borde) y **margin** (margen). 

El padding o relleno de un elemento controla la cantidad de espacio entre su contenido y su border. 

## Margin (margen) de un elemento :

El margin (margen) de un elemento controla la cantidad de espacio entre su border y los elementos que lo rodean. 

Si estableces el margin de un elemento a un valor negativo, el elemento crecerá de tamaño. 

CSS te permite controlar por separado el margin de los cuatro lados individuales de un elemento por medio de las propiedades **margin-top, margin-right, margin-bottom y margin-left** . (lo mismo sucede con el padding).



## Clockwise-notation :
~~~
.blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }

~~~

## Selectores de Atributos : 

Existen otros selectores CSS que puedes utilizar para seleccionar grupos personalizados de elementos a los que quieras aplicar el mismo estilo. 

selector de atributos **[attr=value]** para aplicar estilo a las casillas de verificación (checkboxes).  

 Este selector busca estilos que tengan un valor de atributo específico. 
~~~
  [type='radio']{

    margin-top: 10px;
    margin-bottom:15px;

  }
~~~

## Unidades absolutas y relativas de medidas  :

Las unidades de longitud absoluta aproximan la medición real sobre una pantalla, pero existen cierta variación que depende de la resolución de la pantalla utilizada. 

Las unidades relativas, como em o rem son relativas a otro valor de longitud. Por ejemplo, em se basa en el tamaño de fuente de un elemento.
 Si la utilizas para establecer la propiedad **font-size**, es relativa al font-size del elemento padre. 

## Herencia y sobreescitura de reglas : 

Ahora vamos comenzar de cero y hablaremos sobre la herencia CSS (en inglés: "CSS inheritance").

Toda página HTML tiene un elemento body.
Si escribimos reglas CSS para el body se aplicaran a todos los elementos visbles en la pagina .

~~~

 .pink-text {
    color: pink;
  }
  .blue-text{
    color:blue;
  }
</style>

<h1 class="pink-text blue-text">Hello World!</h1>
~~~

Lo importante es el orden de las declaraciones de class clases en la sección 
~~~
<style> 
~~~

La segunda declaración siempre tendrá prioridad sobre la primera. Debido a que .blue-text ha sido declarada en segundo lugar, sobrescribirá los atributos de .pink-text .

**No importa donde este declarado el atributo id siempre tendra precedencia sobre las clases .** 


Otra forma de sobreescribir CSS es con los **inline-styles**. 

~~~
<h1 id="orange-text" class="pink-text blue-text" style="color:white;">Hello World!</h1>
~~~

Existe una última forma de sobreescribir CSS. Este es el método más poderoso de todos. 

Pero antes de utilizarlo, consideremos por qué querrías sobreescribir una regla CSS.

En muchas situaciones usarás librerías de CSS. Estas librerías pueden sobreescribir accidentalmente tu propio código CSS. Entonces, cuando necesites asegurarte de que a un elemento se le aplique un código CSS específico, puedes usar **!important**.

~~~
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
~~~

## Indicacion de Colores : 

En CSS, podemos representar colores utilizando 6 dígitos hexadecimales, dos para los componentes de rojo (R), verde (G) y azul (B).

 Por ejemplo, **#000000** corresponde al color negro, y también es el valor más bajo posible.

https://htmlcolorcodes.com/es/

En código hexadecimal se utilizan 6 dígitos hexadecimales para representar los colores, dos para el componente rojo (R), verde (G) y azul (B). 

Por ejemplo, el naranja es rojo puro mezclado con algo de verde y nada de azul. En hex code, esto se traduce como #FFA500.

El dígito 0 es el número más bajo en hex code, y representa la ausencia total de color.

El dígito F es el número más alto en hex code, y representa el brillo máximo.
Otra forma de representar colores en CSS es utilizar valores RGB. 

~~~
 body {
    background-color: rgb(0,255,0);
  }
~~~

## Variables en CSS : 

Las Variables CSS son una manera poderosa de modificar varias propiedades de estilos CSS a la vez, cambiando su valor en un único sitio. 

Para crear una variable CSS, solo tienes que darle un nombre que comience con dos guiones (--) y asignarle un valor, como se muestra a continuación: 

~~~
  .penguin {
    /
      --penguin-skin: gray;
    /
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
~~~

Por ejemplo podemos hacer en cualquier clase que tengamos creada :
~~~ 
background-color : var (--penguin-skin); 
~~~

## Valores de respaldo : 

Cuando utilices tu variable como valor de una propiedad CSS, puedes adjuntar un valor de respaldo o "fallback", que será utilizado por el navegador si la variable dada no es válida.
 
Nota:   Este valor de respaldo no se utiliza para aumentar la compatibilidad con otras versiones de navegadores y no funcionará en navegadores IE (Internet Explorer). 

Más bien, se utiliza para que el navegador tenga un color para mostrar si no encuentra tu variable. 

~~~
    background: var(--pengiun-skin,black);
~~~


### Mejora la compatibilidad con navegadores por medio de configuraciones de respaldo o "browser fallbacks" 

Cuando trabajes con código CSS, posiblemente te enfrentarás en algún momento con problemas de compatibilidad con otros navegadores web. 

Por esta razón es importante proporcionar configuraciones de respaldo para otros navegadores o "browser fallbacks" para lidiar con posibles problemas de compatiblidad.

Cuando tu navegador analiza el código CSS de una página web, ignora cualquier propiedad que no reconozca o soporte. 
Por ejemplo, si utilizas una variable CSS para asignar un color de fondo en un sitio, Internet Explorer ignorará el color de fondo establecido porque no soporta el uso de variables CSS. En ese caso, el navegador utilizará cualquier valor que tenga establecido como valor de esa propiedad.

 Si no puede encontrar ningún otro valor establecido para esa propiedad en el código, se revertirá al valor por defecto de ese navegador, lo que habitualmente no será lo ideal.

Esto significa que si quieres proporcionar un valor de respaldo para el navegador, esto es tan sencillo como incluir otro valor más comúnmente soportado inmediatamente antes de tu declaración. 

De este modo, un navegador antiguo tendrá ún valor que sí pueda soportar, mientras que un navegador más nuevo interpretará cualquier declaración que incluyas más adelante en la cascada. 

~~~

<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
~~~

## Herencia de variables CSS : 

Cuando creas una variable, queda disponible para que la utilices dentro del selector en el que la hayas creado. 
Esa variable también estará disponible en cualquiera de los descendientes de ese selector. 

Esto ocurre porque las variables CSS son heredadas, al igual que las propiedades comunes.

Para hacer uso de la herencia, las variables CSS suelen ser definidas en el elemento **:root**.

**:root es un "pseudo-class selector"** (selector de pseudo-clase) que corresponde al elemento raíz o "root" del documento, que generalmente es el elemento html.

 Al crear tus variables en :root, estarán disponibles globalmente y se podrán acceder desde cualquier otro selector en la hoja de estilo.
 ~~~

<style>
  :root {
    --penguin-skin: gray;
    --penguin-belly: pink;
    --penguin-beak: orange;
  }
~~~

Cuando creas tus variables en :root, el valor de esa variable quedará establecido para toda la página.

Luego podrás sobreescribir estas variables, configurándolas de nuevo dentro de un elemento específico.

## Media-query (@)  : 

Las variables CSS pueden simplificar la forma en que utilizas "media queries" (consultas sobre el tipo de dispositivo donde se muestra el documento HTML).

Por ejemplo, cuando la pantalla es más pequeña o más grande que el breakpoint de tu media query, puedes cambiar el valor de una variable, y su estilo se aplicará dondequiera que la utilices.
~~~
<style>
  :root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }

  @media (max-width: 350px) {
    :root {
      /
      --penguin-size: 200px;
      --penguin-skin:black;
      /
    }
~~~

**Es una especie de estilo dinamico**

La media siempre sobreescribe la root pero cuando pasa la cota max-width: 350px  deja de sobreescribir .



