# Accesibilidad Aplicada 

## Texto alternativo a las imágenes para accesibilidad de usuarios con dificultades de la vista :

Un atributo **alt** ayuda en los casos en que la imagen no se carga o un usuario no pueda verla. Los motores de búsqueda también lo utilizan para comprender qué contiene una imagen para incluirla en los resultados de búsqueda

~~~
<img src="importantLogo.jpeg" alt="Company logo">
~~~

 En el caso de las imágenes, los lectores de pantalla pueden acceder el atributo alt y leer su contenido para proporcionar información clave.

 Un buen texto alt le brinda al lector una breve descripción de la imagen. Siempre deberías incluir el atributo alt en tus imágenes. De acuerdo con las especificaciones de HTML5, esto ahora se considera obligatorio.

 ## Cuando el texto alternativo debe dejarse en blanco

 Cuando una imagen ya se explica con el contenido de texto o no agrega significado a una página, img todavía necesita un atributo alt, pero se puede establecer en una cadena vacía. 

 Las imágenes de fondo generalmente también caen bajo la etiqueta "decorativa". Sin embargo, normalmente se aplican con reglas CSS y, por lo tanto, no forman parte del proceso de lectores de pantalla del lenguaje de marcado.

 ## Títulos para mostrar relaciones jerárquicas de contenido

 Los títulos (h1 a h6 elementos) son etiquetas de caballo de batalla que ayudan a proporcionar estructura y etiquetado a su contenido. Los lectores de pantalla se pueden configurar para leer solo los títulos de una página para que el usuario obtenga un resumen. Esto significa que es importante que las etiquetas de los títulos en tu lenguaje de marcado tengan un significado semántico y se relacionen entre sí, no se elijan simplemente por sus valores de tamaño.

 Los títulos con rango igual (o superior) comienzan nuevas secciones implícitas, los títulos con rango inferior comienzan subsecciones de la anterior.

 Un punto final, cada página siempre debe tener un (y solo un) elemento h1, que es el tema principal de tu contenido. Este y los otros títulos son utilizados en parte por los motores de búsqueda para comprender el tema de la página.

 ## Saltar directamente al contenido usando el elemento principal **(main)**

 HTML5 introdujo varios elementos nuevos que dan a los desarrolladores más opciones y al mismo tiempo incorporan características de accesibilidad. Estas etiquetas incluyen **main, header, footer, nav, article, y section**, entre otros.

 **El nombre de la etiqueta solo puede indicar el tipo de información que contiene, lo que agrega significado semántico a ese contenido**. Las tecnologías de asistencia pueden acceder a esta información para proporcionar mejores opciones de resumen de páginas o de navegación a sus usuarios.

 El **elemento main se usa para envolver (lo adivinaste) el contenido principal, y solo debe haber uno por página**. Su propósito es rodear la información relacionada con el tema central de tu página. No está destinado a incluir elementos que se repiten en todas las páginas, como enlaces de navegación o banners.

 La etiqueta main también tiene una característica de referencia incrustada que la tecnología de asistencia puede utilizar para navegar al contenido principal rápidamente. **Si alguna vez has visto un enlace de "Saltar al contenido principal" en la parte superior de la página, el uso de la etiqueta main proporciona automáticamente esa funcionalidad a los dispositivos de asistencia.**
~~~
 <header>
  <h1>Weapons of the Ninja</h1>
 </header>
    <main>


    <main/>
 <footer></footer>
~~~

## Elemento **article**

**article** es otro de los nuevos elementos de HTML5 que añaden significado semántico a su marcado. article es un elemento seccionador y se utiliza para envolver contenido independiente y autónomo. La etiqueta funciona bien con entradas de blog, publicaciones en el foro o artículos de noticias.

El elemento **section** también es nuevo HTML5, y tiene significado semántico ligeramente diferente al de **article**. **Un article es para contenido independiente**, y una **section es para agrupar contenido relacionado temáticamente**.

 Se pueden usar uno dentro del otro, según sea necesario. Por ejemplo, si un libro es el article, entonces cada capítulo es una section.**Cuando no haya relación entre grupos de contenido, usa un div**.

## Haz que la navegación del lector de pantalla sea más fácil con el **header Landmark**

El siguiente elemento HTML5 que agrega significado semántico y mejora la accesibilidad es la etiqueta header. 

Se usa para envolver información introductoria o enlaces de navegación para su etiqueta principal y funciona bien con el contenido que se repite en la parte superior en varias páginas.

**header comparte la función landmark integrada que viste con main, lo que permite a las tecnologías de asistencia navegar rápidamente a ese contenido.**


Nota: El header está diseñado para usarse dentro de la etiqueta body de tu documento HTML. Es diferente al elemento head, que contiene el título de la página, la meta información, etc.

## Haz que la navegación del lector de pantalla sea más fácil con el **nav Landmark**
El elemento **nav** es otro elemento de HTML5 con la función de punto de referencia insertado para facilitar la navegación del lector de pantalla.
**Esta etiqueta esta destinada a envolver los principales enlaces de navegación en tu página.**

## Haz que la navegación del lector de pantalla sea más fácil con el **footer Landmark**
Similar a header y nav, el elemento **footer** tiene una característica de referencia incorporada que permite a los dispositivos de asistencia navegar rápidamente hacia él. 

**Se utiliza principalmente para contener información sobre derechos de autor o enlaces a documentos relacionados que normalmente se encuentran en la parte inferior de una página.**

## Mejorar la accesibilidad del contenido de audio con el elemento de audio

El elemento **audio** de HTML le da un significado semántico cuando contiene sonido o contenido de flujo de audio en el código.

 El contenido del audio también necesita un texto alternativo para que las personas sordas o con dificultad para escuchar puedan acceder al mismo. 
 
 Para esto debe tener un texto cercano en la página o un enlace a una transcripción.

**La etiqueta de audio suporta los atributos controls. Esto muestra los controles por defecto de reproducir, pausar, entre otros controles, y soporta la funcionalidad del teclado. Este es un atributo booleano por lo que no necesita un valor, su presencia en la etiqueta activa la configuración.**

~~~
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>

<audio id="Zersiax "controls >
<source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg" >
</audio>
~~~

## Mejora la accesibilidad de gráficos con el elemento **figure**

HTML5 introdujo el elemento figure y el figcaption relacionado.

 **Cuando se usan juntos, estos elementos envuelven una representación visual (como puede ser una imagen, diagrama o gráfico) junto con su leyenda.** 
 
 Envolviendo estos elementos da un impulso de accesibilidad doble al agrupar semánticamente el contenido relacionado y proporciona una alternativa de texto explicando la figura figure.

En visualizaciones de datos como gráficos, la leyenda o "figcaption" puede ser utilizada para resumir en formato de texto las tendencias o conclusiones, para beneficio de usuarios con discapacidades visuales. Otro de los desafíos se ocupa cómo mover fuera de la pantalla una versión en formato de tabla con los datos del gráfico (usando CSS) para ayudar a usuarios de lectores de pantalla.

Ten en cuenta que el elemento figcaption va dentro de las etiquetas figure y se puede combinar con otros elementos:

~~~
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
~~~

## Mejora la accesibilidad del campo de formulario con la etiqueta **label**

La etiqueta label contiene el texto para un elemento específico de control de formulario, por lo general el nombre o etiqueta para una elección.

 Esto vincula el significado al elemento y hace que el formulario se lea mejor. **El atributo for en una etiqueta label asocia de manera explícita dicho label con el control de formulario utilizado por los lectores de pantalla.**

 **El valor del atributo for debe ser igual al valor del atributo id del formulario de control**. Por ejemplo:

~~~
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
~~~

## Botones de radio en un elemento fieldset para una mejor accesibilidad

El siguiente tema sobre formularios cubre la accesibilidad de los botones tipo radio. A cada opción se le da una label (etiqueta) con un atributo for vinculado al id del elemento correspondiente.

 **Dado que los botones de radio a menudo vienen en un grupo donde el usuario debe elegir uno, hay una manera de mostrar semánticamente que las opciones son parte de un conjunto**.

La etiqueta **fieldset rodea toda la agrupación de botones de radio para lograr esto**. A menudo utiliza una etiqueta de **legend** para proporcionar una descripción para la agrupación, que lectores de pantalla leen por cada opción en el elemento fieldset.

El contenedor fieldset y la etiqueta legend no son necesarias cuando las opciones se explican por sí mismas, como selección de género. Usar label con el atributo for para cada botón de radio es suficiente.

~~~
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
  </fieldset>
</form>
~~~

## Selector de fechas accesible

**Los formularios suelen incluir el campo input, que puede usarse para crear diferentes tipos de controles en los formularios. El atributo type en este elemento indica el tipo de elemento input a crear**.

Puede que hayas visto los tipos de campo text y submit en desafíos anteriores. HTML5 además introdujo una opción para especificar un campo date para fechas.

 Dependiendo del soporte de los navegadores, un selector de fechas debería aparecer cuando el campo input esté en foco, y esto hace mucho más sencillo para los usuarios cargar información en el formulario.

Para los navegadores más antiguos, el tipo será por defecto text, por lo que ayuda a mostrar a los usuarios el formato de fecha(date) esperado en el texto label o placeholder por si acaso.

Aquí hay un ejemplo:

~~~
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
~~~
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">

## Estandariza horas con el atributo HTML5 datetime
Continuando con el tema de fechas, HTML5 también introdujo el elemento time junto con un atributo datetime para estandarizar las horas. 

El elemento time es un elemento en línea que puede ajustar una fecha u hora en una página. Un atributo datetime contiene un formato válido para esa fecha. Este es el valor al que acceden los dispositivos de asistencia. Ayuda a evitar la confusión al declarar una versión estandarizada de un tiempo, incluso si está escrita informal o coloquialmente en el texto.

Aquí hay un ejemplo:

~~~
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
~~~

<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>

## Para que los elementos solo sean visibles para un lector de pantalla mediante CSS personalizado

La magia de CSS también puede mejorar la accesibilidad en tu página cuando deseas ocultar visualmente contenido destinado solo para lectores de pantalla. 

Esto sucede cuando la información está en un formato visual (como un gráfico), pero los usuarios del lector de pantalla necesitan una presentación alternativa (como una tabla) para acceder a los datos. CSS se utiliza para colocar los elementos exclusivos de lector de pantalla fuera del área visual de la ventana del navegador.

Aquí hay un ejemplo de las reglas de CSS que logran esto:
~~~
.sr-only { // solo para lector de pantalla
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
~~~

## Mejora la legibilidad con texto de alto contraste

El bajo contraste entre los colores de primer plano y de fondo puede dificultar la lectura del texto. Suficiente contraste mejora la legibilidad de tu contenido, pero ¿qué significa exactamente "suficiente"?

Las Directrices de Accesibilidad al Contenido Web (WCAG) recomiendan al menos una relación de contraste de 4.5 a 1 para el texto normal. La relación se calcula comparando los valores de luminancia relativa de dos colores. Esto varía de 1:1 para el mismo color, o ningún contraste, a 21:1 para blanco contra negro, el contraste más sustancial. Hay muchas herramientas de comprobación de contraste disponibles en línea que calculan esta relación por ti.


## Enlaces sean navegables con claves de acceso HTML

HTML ofrece el atributo **accesskey** para especificar una tecla de acceso directo para activar o enfocar un elemento. 

Añadiendo un atributo accesskey puede hacer que la navegación sea más eficiente para los usuarios que solo utilizan teclado.

HTML5 permite que este atributo se use en cualquier elemento, pero es particularmente útil cuando se usa con elementos interactivos. Esto incluye **enlaces, botones y controles de formulario**.

Aquí hay un ejemplo:
~~~
<button accesskey="b">Important Button</button>
~~~

## Tabindex para agregar enfoque de teclado a un elemento

El atributo HTML tabindex tiene tres funciones distintas relacionadas con el foco del teclado de un elemento. 

Cuando está en una etiqueta, indica que se puede hacer foco en el elemento. **El valor (un número entero que es positivo, negativo o cero) determina el comportamiento**.

Algunos elementos, como los enlaces y los controles de los formularios, reciben automáticamente el foco del teclado cuando un usuario tabula por una página. Está en el mismo orden en que los elementos vienen en la fuente del lenguaje de marcado de HTML. **Esta misma funcionalidad se puede dar a otros elementos, como div, span y p, colocando un atributo tabindex="0"**. 

Aquí hay un ejemplo:
~~~
<div tabindex="0">I need keyboard focus!</div>
~~~


Nota: Un valor negativo de tabindex (normalmente -1) indica que un elemento es enfocable, pero no es accesible por el teclado. Este método generalmente se usa para enfocar el contenido mediante programación (como cuando se activa un div utilizando para una ventana emergente).

Extra: el uso de tabindex también permite que la pseudo-clase CSS :focus funcione en la etiqueta p.


## Tabindex para especificar el orden de enfoque del teclado para múltiples elementos

El atributo tabindex también especifica el orden de tabulación exacto de los elementos. Esto se logra cuando el valor del atributo se establece en un número positivo de 1 o superior.

**Establecer un tabindex="1" hará que el teclado se enfoque primero en ese elemento. Luego, recorre la secuencia de valores tabindex especificados (2, 3, etc.), antes de pasar a los elementos predeterminados y tabindex="0"**.

Es importante tener en cuenta que cuando el orden de tabulación se establece de esta manera, anula el orden predeterminado (que usa el código fuente HTML). Esto puede confundir a los usuarios que esperan comenzar la navegación desde la parte superior de la página. Esta técnica puede ser necesaria en algunas circunstancias pero en términos de accesibilidad, ten cuidado antes de aplicarla.

Aquí hay un ejemplo:
~~~
<div tabindex="1">I get keyboard focus, and I get it first!</div>
<div tabindex="2">I get keyboard focus, and I 
~~~



