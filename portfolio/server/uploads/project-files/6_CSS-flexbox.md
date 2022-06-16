# CSS flexbox 

Colocar la **propiedad CSS display**: flex; en un elemento te permite usar otras propiedades flex para construir una página responsiva.

Agregando **display: flex a un elemento lo convierte en un contenedor flexible**. Esto permite alinear cualquier elemento secundario de ese elemento en filas o columnas.

 ## Propiedad **flex-direction** :  
 La creación de una fila alineara los elementos secundarios horizontalmente(**flex-direction : row**), y la creación de una columna alineara los elementos secundarios verticalmente(**flex-direction : column**).

 Otras opciones para **flex-direction son row-reverse y column-reverse.** 

 El valor predeterminado para la propiedad flex-direction es row.

 ## Alinear elementos mediante la propiedad **justify-content**

 Algunas veces los elementos flexibles dentro de un contenedor flexible no llenan todo el espacio del contenedor. Es común querer indicarle al CSS cómo alinear y espaciar los elementos flexibles de una determinada manera. Afortunadamente, la propiedad **justify-content** tiene varias opciones para hacer esto.

  La **dirección en la que están dispuestos los elementos flexibles se llama el eje principal**. Para una fila, esta es una línea horizontal que recorta cada elemento. Y para una columna, el eje principal es una línea vertical a través de los elementos.

  Hay varias opciones para espaciar los elementos flexibles a lo largo de la línea que representa el eje principal. Uno de los más utilizados es **justify-content: center**;, el cual alinea hacia el centro todos los elementos flexibles dentro del contenedor flexible.
  
   Otras opciones incluyen:

**flex-start**: alinea los elementos con el inicio del contenedor flex. Para una fila, esto empuja los elementos a la izquierda del contenedor. Para una columna, esto empuja los elementos a la parte superior del contenedor.**Esta es la alineación predeterminada si no se especifica ningún tipo de justify-content**.

**flex-end**: alinea los elementos con el final del contenedor flex. Para una fila, esto empuja los elementos a la derecha del contenedor. Para una columna, esto empuja los elementos a la parte inferior del contenedor.

**space-between**: alinea los elementos en el centro del eje principal, con un espacio extra entre los elementos. Los primeros y últimos elementos son empujados hasta el borde del contenedor flexible. Por ejemplo, en una fila el primer elemento está en el lado izquierdo del contenedor, el último elemento está en el lado derecho del contenedor, luego el espacio restante se distribuye uniformemente entre los demás elementos.

**space-around**: similar a space-between pero los primeros y últimos elementos no están fijados en los bordes del contenedor, el espacio se distribuye alrededor de todos los elementos con la mitad de un espacio en ambos extremos del contenedor flexible.

**space-evenly**: Distribuye el espacio de manera uniforme entre los elementos flexibles con un espacio completo en ambos extremos del contenedor flexible

##  Propiedad **align-items**

Los contenedores flexibles también tienen un eje transversal que es el opuesto al eje principal. Para las filas, el eje transversal es vertical y para las columnas, el eje transversal es horizontal.

CSS ofrece la propiedad **align-items para alinear elementos flexibles a lo largo del eje transversal**. Para una fila, le indica al CSS como empujar los elementos en toda la fila hacia arriba o hacia abajo dentro del contenedor. Y para una columna, como empujar todos los elementos hacia la izquierda o hacia la derecha dentro del contenedor.

Los diferentes valores disponibles para align-items incluyen:

**flex-start**: alinea los elementos con el inicio del contenedor flexible. Para las filas, esto alinea los elementos a la parte superior del contenedor. Para las columnas, esto alinea los elementos a la parte izquierda del contenedor.

**flex-end**: alinea los elementos con el final del contenedor flexible. Para las filas, esto alinea los elementos a la parte inferior del contenedor. Para las columnas, esto alinea los elementos a la parte derecha del contenedor.

**center**: alinea los elementos hacia el centro. Para las filas, esto alinea los elementos verticalmente (igual espacio por encima y por debajo de los elementos). Para columnas, esto las alinea horizontalmente (igual espacio a la izquierda y a la derecha de los elementos).

**stretch**: estira los elementos para llenar el contenedor flexible. Por ejemplo, los elementos de filas son estirados para llenar el contenedor flexible de arriba hacia abajo. Este es el valor predeterminado si no se especifica ningún tipo de align-items.

**baseline**: alinea los elementos con sus líneas base. Una línea base es un concepto de texto, piensa en ella como la línea en la que se sitúan las letras.

## Propiedad **flex-wrap** para envolver una fila o columna

CSS flexbox tiene una característica para dividir un elemento flexible en varias filas (o columnas). De forma predeterminada, un contenedor flexible encajará todos los elementos flexibles juntos. Por ejemplo, una fila estará completa en una sola línea.

Sin embargo, usar la propiedad **flex-wrap** le indica al CSS que envuelva los elementos.

 **Esto significa que los elementos extra se mueven hacia una nueva fila o columna**. El punto de ruptura donde ocurre la envoltura depende del tamaño de los elementos y del tamaño del contenedor.

CSS también tiene **opciones para la dirección de la envoltura**:

**nowrap**: esta es la configuración predeterminada, y no envuelve elementos.

**wrap**: envuelve elementos en múltiples líneas de arriba a abajo si están en filas y de izquierda a derecha si están en columnas.

**wrap-reverse**: envuelve elementos en múltiples líneas de abajo hacia arriba si están en filas y de derecha a izquierda si están en columnas.

## Propiedad **flex-shrink** para reducir elementos

Cuando se usa, permite que un elemento se contraiga si el contenedor flex es demasiado pequeño. Los elementos se reducen cuando el ancho del contenedor principal es menor que el ancho combinado de todos los elementos flex dentro del él.

La propiedad **flex-shrink** toma números como valores. Cuanto mayor sea el número, más se reducirá en comparación con los otros elementos en el contenedor. 

Por ejemplo, si un elemento tiene un flex-shrink con valor de 1 y el otro tiene un flex-shrink con valor de 3, el que tiene el valor de 3 se reducirá tres veces más que el otro.

## Propiedad **flex-grow** para expandir elementos

Lo contrario de flex-shrink es la propiedad flex-grow. Recuerda que **flex-shrink** controla el tamaño de los elementos cuando el contenedor se encoge. La propiedad **flex-grow** controla el tamaño de los elementos cuando el contenedor primario se expande.

## Propiedad **flex-basis** para establecer el tamaño inicial de un elemento

La propiedad **flex-basis** especifica el tamaño inicial del elemento antes de que CSS haga ajustes con flex-shrink o flex-grow.

**Las unidades usadas por la propiedad flex-basis son las mismas que otras propiedades de tamaño (px, em, %, etc.)**. El valor **auto** dimensiona los elementos basándose en el contenido.


## Propiedad abreviada **flex**

Hay un atajo disponible para establecer varias propiedades flex a la vez. Las propiedades flex-grow, flex-shrink, y flex-basis pueden establecerse utilizando la propiedad flex.

~~~
Por ejemplo: 

flex: 1 0 10px; 

establecerá las propiedades del elemento en flex-grow: 1;, flex-shrink: 0;, y flex-basis: 10px;.
~~~
La configuración predeterminada de la propiedad es flex: 0 1 auto;.

## Propiedad **order** para reorganizar los elementos

La propiedad order se utiliza para indicarle a CSS el orden en que aparecen los elementos flexibles en el contenedor flex. 

Por defecto, los elementos aparecerán en el mismo orden que vienen en el HTML de origen. La propiedad toma números como valores, y se pueden usar números negativos.

## Propiedad **align-self**

La última propiedad para elementos flexibles es **align-self**. Esta propiedad te permite ajustar la alineación de cada elemento individualmente, en lugar de ajustarlos todos a la vez.

 **Esto es útil ya que otras técnicas comunes de ajuste usan las propiedades CSS float, clear, y vertical-align, las cuales no funcionan en elementos flexibles**.

align-self acepta los mismos valores que align-items y reemplazará cualquier valor establecido por la propiedad align-items.