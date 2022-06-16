# HTML Basico y HTML5 

## Imagenes :

Puedes agregar imágenes a tu sitio web utilizando el elemento img, y apuntar a la URL de una imagen específica usando el atributo **src**.
 
HTML5 introduce etiquetas HTML más descriptivas. Estas incluyen **main, header, footer, nav, video, article, section**, entre otras.

Estas etiquetas dan una estructura descriptiva a tu HTML, hacen que tu HTML sea más fácil de leer, ayudan con la Optimización de Motores de Búsqueda (SEO) y mejoran la accesibilidad.

 La etiqueta HTML5 **main** ayuda a los motores de búsqueda y otros desarrolladores a encontrar el contenido principal de tu página.

## Enlaces :
Puedes usar los elementos **a (anchor)** para enlazar a contenido fuera de tu página web.

Los elementos a requieren un **atributo href** con la dirección web de destino. También necesitan un texto anchor. Por ejemplo:
~~~
<a href="https://www.freecodecamp.org"> this links to freecodecamp.org </a>
~~~

Los elementos a (anchor) también pueden utilizarse para crear enlaces internos para saltar a diferentes secciones dentro de una página web.

Para crear un enlace interno, asignas el atributo href de un enlace con un símbolo **hash #** más el valor del atributo id para el elemento al que deseas enlazar internamente, normalmente más abajo de la página.

 Luego necesitas agregar el mismo atributo id al elemento que estás enlazando. Un id es un atributo que describe un elemento de forma única.

**target** es un atributo de etiqueta anchor que especifica dónde abrir el enlace. El valor **_blank** especifica abrir el enlace en una nueva pestaña. 

Crea enlaces muertos utilizando el símbolo hash :
href = “#” en la etiqueta anchor a .


### Convierte una imagen en un enlace:
Puedes convertir elementos en enlaces, anidándolos dentro de un elemento a. 

-----------------------------

## Listas : 
**Crea una lista no ordenada**

HTML tiene un elemento especial para crear listas no ordenadas, o listas con estilo de viñetas.
Las listas no ordenadas comienzan con un elemento **ul** de apertura, seguido de cualquier número de elementos **li**

 Por último, las listas no ordenadas cierran con un **/ul**.

**Crea una lista ordenada**

HTML tiene otro elemento especial para crear listas ordenadas, o listas numeradas.
Las listas ordenadas comienzan con un elemento de apertura **ol**, seguido de cualquier número de elementos **li**. Por último, las listas ordenadas se cierran con la etiqueta **/ol**.

## Formularios : 

Los elementos de entrada input son una forma conveniente de obtener información de tu usuario.
Puedes crear una entrada de texto de esta manera:
~~~
<input type="text">
~~~

Ten en cuenta que los elementos input se cierran automáticamente.
El texto provisional es lo que se muestra en tu elemento de entrada input antes de que el usuario haya ingresado nada. 
~~~
<input type="text" placeholder="this is placeholder text">
~~~
Puedes construir formularios web que realmente envíen datos a un servidor usando sólo HTML puro. Puedes hacer esto especificando un atributo action en tu elemento **form**. 
~~~
<form action="url-where-you-want-to-submit-form-data">
  		<input >
</form>
~~~
Agreguemos un botón submit a tu formulario. Al hacer clic en este botón se enviarán los datos de tu formulario a la URL especificada con el atributo action de tu formulario. 
~~~
<button type="submit">Enviar</button>
~~~



### HTML5 para requerir un campo
Puedes requerir campos específicos de un formulario para que tu usuario no pueda enviarlo hasta que no los haya rellenado.
Por ejemplo, si deseas hacer obligatorio un campo de entrada de texto, puedes agregar el atributo **required** dentro de tu elemento input, de esta forma: 
~~~
<input type="text" required>
~~~

## Botones de radio  
Puedes usar botones de radio para preguntas en las que quieres que el usuario solo te dé una respuesta a partir de múltiples opciones. Los **botones de radio son un tipo de entrada  input** . 

Cada uno de tus botones de radio puede anidarse dentro de su propio elemento **label**. Envolver un elemento input dentro de un elemento label asociará automáticamente la entrada del botón de radio con el elemento label que lo rodea.

**Todos los botones de radio relacionados deben tener el mismo atributo name para crear un grupo de botones de radio**.

 Al crear un grupo de radio, si se selecciona cualquier botón de radio se deselecciona automáticamente los otros botones dentro del mismo grupo, asegurándose que el usuario proporcione solo una respuesta.
 ~~~
 <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>  
 	 </form>
~~~

## Casillas de verificación :
Los formularios suelen usar casillas de verificación (**checkboxes**) para preguntas que puedan tener más de una respuesta.
Las casillas de verificación son un tipo de input (entrada).

Cada una de tus casillas de verificación puede anidarse dentro de su propio elemento label. Envolver un elemento input dentro de un elemento label asociará automáticamente ese input de tipo checkbox con el elemento label que lo rodea.

**Todos los inputs de tipo casilla de verificación que están relacionados entre sí deben tener el mismo atributo name**.

**Se considera buena práctica definir explícitamente la relación entre un input de tipo checkbox (casilla de verificación) y su correspondiente label (etiqueta), estableciendo el atributo for en el elemento label para que coincida con el atributo id del input asociado.**

~~~
<label for = "loving">
      <input id="loving" type="checkbox" name = "personality"> Loving
</label>
<label for = "aggresive">
      <input id="aggresive" type="checkbox" name = "personality"> Aggresive
</label>
<label for = "quiet">
      <input id="quiet" type="checkbox" name = "personality"> Quiet
</label>
~~~
### Atributo value con botones de radio y casillas de verificación :
Cuando se envía un formulario, los datos se envían al servidor e incluyen entradas para las opciones seleccionadas. **Los inputs de tipo radio y checkbox reportan sus valores desde el atributo value**. 
~~~
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
	</label>

	<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
	</label>
~~~
Cuando el usuario envía el formulario con la opción indoor seleccionada, los datos del formulario incluirán la línea: **indoor-outdoor=indoor**. 
Esto proviene de los atributos name y value del input "indoor". (name-value).

Si omites el atributo value, los datos del formulario enviado utilizarán el valor por defecto, que es on. En este escenario, si el usuario hizo click en la opción "indoor" y envió el formulario, el dato resultante del formulario sería indoor-outdoor=on, lo cual no resulta útil. Por lo que el atributo value debe establecerse a un valor que identifique la opción claramente. 

~~~
<label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
~~~

### Botones de radio y casillas de verificacion por defecto : 

**Puedes hacer que una casilla de verificación o botón de radio se marque por defecto usando el atributo checked**.
Para hacer esto, simplemente agrega la palabra checked al interior de un elemento de entrada.
~~~
<label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
~~~

## Doctype de un documento HTML  , head y body : 
 Hay algunos elementos que dan una estructura general a tu página, y deben incluirse en cada documento HTML. 

En la parte superior de tu documento, necesitas decirle al navegador qué versión de HTML está utilizando tu página. HTML es un lenguaje en evolución, y se actualiza regularmente. La mayoría de los navegadores principales soportan la última especificación, que es HTML5. Sin embargo, páginas web más antiguas puede que hagan uso de versiones anteriores del lenguaje.

Proporcionas al navegador esta información agregando la etiqueta 

~~~
<!DOCTYPE ...>
~~~
 
en la primera línea, donde la parte ... es la versión de HTML. 

Para HTML5, utilizas 
~~~
<!DOCTYPE html>.
~~~
El ! y DOCTYPE en mayúsculas es importante, especialmente para los navegadores más antiguos. El html no es sensible a mayúsculas y minúsculas.

A continuación, el resto de tu código HTML necesita ser envuelto en etiquetas html. La apertura 
~~~
<!DOCTYPE html>
<html>
  codigo 



</html>
~~~




Puedes agregar otro nivel de organización en tu documento HTML dentro de las etiquetas html con los elementos **head y body**. 

Cualquier código con información sobre tu página iría dentro de la etiqueta head. 

Entonces, cualquier código con el contenido de la página (lo que se muestra para un usuario) iría dentro de la etiqueta body.

**Elementos de metadatos, tales como link, meta, title, y style, típicamente van dentro del elemento head**.

------------------------------

## figure
El elemento HTML **figure** representa contenido independiente, a menudo con un título. Si bien se relaciona con el flujo principal, su posición es independiente de éste. Por lo general, se trata de una imagen, una ilustración, un diagrama, un fragmento de código, o un esquema al que se hace referencia en el texto principal, pero que se puede mover a otra página o a un apéndice sin que afecte al flujo principal.

**Notas de uso**:

Al ser una seccionador raíz, el esbozo del contenido del elemento figure está excluido del esbozo principal del documento.

Un título puede estar asociado con el elemento figure mediante la inserción de un **figcaption** en su interior (como el primero o el último hijo).


## select menu 

El elemento **select**  de HTML representa un control que muestra un menú de opciones. Las opciones contenidas en el menú son representadas por elementos **option**, los cuales pueden ser agrupados por elementos <optgroup> (en-US). 

La opcion puede estar preseleccionada por el usuario.

Tambien podemos incluir una opcion no seleccionable : 

~~~
<select id='dropdown-1'>
        <option disabled select value selected='select'>Elige una opcion </option> // no seleccionable
        <option value='challenge'>Desafios</option>
        <option value='projects'>Proyectos</option>
        <option value='community'>Comunidad </option>
        <option value='open-source'>Codigo abierto</option>

      </select>
~~~

## Validacion de formularios 

### Escuchador de eventos : 
~~~
//agregamos un escuchador de eventos 
  form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
    
  });
~~~

### Validar un input tipo text :

~~~
    <div>
    <label id='name-label'>
      Nombre</label>
    <input name='name' type='text' placeholder='Ingresa tu nombre' id='name' pattern="[a-z,A-Z]{1,20}">
    
    </div>
~~~

Podemos utilizar el atributo **pattern** para restringir el campo de caracteres a ingresar en un input.  














