
# Formularios 

<a href='https://www.htmlquick.com/es/reference/tags.html'>https://www.htmlquick.com/es/reference/tags.html</a>

## Generalidades:


## **Form**

<a href='https://www.htmlquick.com/es/reference/tags/form.html'>https://www.htmlquick.com/es/reference/tags/form.html</a>

Puedes construir formularios web que realmente envíen datos a un servidor usando sólo HTML puro. Puedes hacer esto especificando un atributo action en tu elemento **form**. 
~~~
<form action="url-where-you-want-to-submit-form-data">
  		<input >
</form>
~~~
Agreguemos un botón submit a tu formulario. Al hacer clic en este botón se enviarán los datos de tu formulario a la URL especificada con el atributo action de tu formulario. O sea que action y el boton submit estan enlazados . 
~~~
<button type="submit">Enviar</button>
~~~
### **Form - atributos**

### Atributos action y method

~~~
<form action="/my-handling-form-page" method="post">

</form>
~~~

- El atributo **action** define la ubicación (URL) donde se envían los datos que el formulario ha recopilado cuando se validan. Indica la ubicación del programa responsable de la manipulación de los datos enviados por el formulario.

- El atributo **method** define con qué método HTTP se envían los datos (generalmente get o post) , determina el método a utilizar para acceder al URL determinada en el campo action.

### Atributo autocomplete

Uno de dos valores que indica al navegador si debería sugerir opciones automáticamente para los controles de entrada, como un intento de adivinar lo que el usuario está tipeando 

- on: el navegador debería sugerir opciones automáticamente. Este es el valor por defecto.
- off: el navegador no debería sugerir opciones automáticamente.

### Atributo enctype

Un valor que especifica el método de codificación a utilizarse para los datos cuando el formulario es enviado. Existen tres valores posibles, insensibles a mayúsculas/minúsculas:

- **application/x-www-form-urlencoded**: los espacios son reemplazados con signos más ("+") y los caracteres especiales son convertidos a valores HEX. Este es el valor por defecto.

- **multipart/form-data**: no se aplica ninguna codificación. Este valor es necesario para la subida de archivos.

- **text/plain**: solo los espacios son reemplazados por signos más ("+").

## **input**

Los elementos de entrada **input** son una forma conveniente de obtener información de tu usuario.
Puedes crear una entrada de texto de esta manera:
~~~
<input type="text">
~~~

Ten en cuenta que los elementos input se cierran automáticamente.
El texto provisional es lo que se muestra en tu elemento de entrada input antes de que el usuario haya ingresado nada. 
~~~
<input type="text" placeholder="this is placeholder text">
~~~

<a href='https://www.htmlquick.com/es/reference/tags/input.html'>Tipos de inputs disponibles</a>

### HTML5 para requerir un campo
Puedes requerir campos específicos de un formulario para que tu usuario no pueda enviarlo hasta que no los haya rellenado.
Por ejemplo, si deseas hacer obligatorio un campo de entrada de texto, puedes agregar el atributo **required** dentro de tu elemento input, de esta forma: 
~~~
<input type="text" required>
~~~

## **label**
El elemento label representa una etiqueta que puede ser asociada a un control de formulario, y que se supone provee una descripción corta para éste.

 Los navegadores pueden enlazar ambos elementos permitiendo que los usuarios establezcan el enfoque sobre el control al hacer clic en su etiqueta.

Existen dos formas de asociar a un elemento label con un control: 

- insertando al texto de la etiqueta y al control dentro de label;

~~~
<p><label>Nombre de usuario: <input type="text" name="usuario"></label></p>
~~~

- o haciendo que coincidan los valores del atributo id en el control y del atributo for en label.

~~~
  <p><label for="pensamiento_id">¿Qué estás pensando?:</label></p>

  <p><input type="text" name="pensamiento" id="pensamiento_id"></p>
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






