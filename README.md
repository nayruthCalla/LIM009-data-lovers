# POKEPEDIA (aprende pokémones desde cero)
Ver producto desarrollado :  https://nayruthcalla.github.io/LIM009-data-lovers/src/index.html
***
#### 🚀Instalación 🔧
1) Tener un 📝 editor de texto.
2) Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también 🐧). Si usas Windows puedes usar Git bash.
3) Haz tu propio 🍴 fork del repositorio.
4) ⬇️ Clona tu fork a tu computadora (copia local).
5) 📦 Instala las dependencias del proyecto con el comando npm install, siempre que ya tengas instalado [node.js](https://nodejs.org/es/).
***

## Índice

* [Definición de producto](#definición-del-producto)
* [Entrevistas a usuarios](#entrevistas-a-usuarios)
* [Definición del user persona](#definición-del-user-persona)
* [Historias de usuario](#historias-de-usuario)
* [Diseño de la interfaz de usuario](#diseño-de-la-interfaz-de-usuario)
* [Navegación por la interfaz](#navegación-por-la-intefaz)
* [Planificación del proyecto](#planificación-del-proyecto)
* [Futuras mejoras](#futuras-mejoras)

*

## Definición de producto

Interfaz que brinda información puntual y digerida para *aprender de pokemones desde cero*, que no han seguido la serie, pero neceiten informaciòn básica sobre POKEMONES, los 151 pokemones, conocer que se clasifican por tipo, en un grupo de 15 tipos como: 

Hielo,	Volador, Tierra, Planta, Dragón, Fuego, Agua, Lucha, Dragón, Insecto, Roca, Veneno, , 
Fantasma, Psíquico y normales.
Podrán filtrarlos por tipo y ordenarlos por orden ascendente y descendente de acuerdo al orden alfabético.
Y tendrán una secciòn de curiosidades, para llamar su atención.
***
## Definición del user persona
### ¿Quiénes son los principales usuarios de producto?
Personas que no sepan nada de pokemones y necesiten información de ellos organizada de manera sencilla y amigable.
### ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Desean reconocer a los pokémones de manera visual.

### ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Los datos son imagen,nombre y tipo.

### ¿Cuándo utilizan o utilizarían el producto?
Cuando busquen una página con información organizada de pokemones, y por alguna razón necesiten el nombre de un pokemon, que solo conocen de manera visual.

## Historias de usuario

<p align="center">
  <img src="https://trello-attachments.s3.amazonaws.com/5c87e3e3422ae0778c107267/5c87e40a548c7266975ffcda/50d1fd11d4a15d8828931ee66ecea911/Untitled_page-0001.jpg">
</p>

Diseñamos cinco historias útiles y necesarias para que el usuario conozca pokemones de la manera más sencilla posible:

* *Primera historia*
Yo como usuaria quiero ver una imagen de un pokémon y su nombre para conocerlo.

* *Segunda historia*

Yo como usuaria quiero ver la imagenes de todos los pokémones y sus nombres

* *Tercera historia*

Yo como usuaria quiero ordenar los nombres de lo pokémones de forma ascendente (de la A a la Z) y descendente (de la Z a la A).

* *Cuarta historia*

Yo como usuaria quiero poder filtrar por tipo a los pokémones

* *5ta historia*

Yo como usuaria quiero ver el peso promedio de un pokémon

## Diseño de la interfaz de usuario

### *a) Prototipo de baja fidelidad*

[![Prototipo baja-fidelidad](https://trello-attachments.s3.amazonaws.com/5c87e3e3422ae0778c107267/5c8fb8e30732f47a8392710c/7906c0be0a12f5249e53d0841e186793/WhatsApp_Image_2019-03-14_at_9.44.44_AM.jpeg)


### *El por qué del diseño*

El diseño que elegimos fue planteado desde un enfoque visual, ya que la usaria no conocia a los pokémones y ver su imagen era lo primero que queria. 

 ### *Testeos de usabilidad / Sugerencias de los usuarios*

Los usuarios testeados sugieron que el  de  botón de ordenado deberí ir primero y luego en el tipos.

Al momento de mostrar el diseño realizado el usuario intereactua facilmente con la idea del producto y no lo vio tedioso de manejarlo.

### *b) Prototipo de alta fidelidad*

[![Prototipo baja-fidelidad](https://trello-attachments.s3.amazonaws.com/5c87e3e3422ae0778c107267/5c8fcd85655cb61dcd1e8be9/4b7c267e24dab047ffdc22ae367ed0f0/Untitled.png)

* [Zeplin](https://zpl.io/a75eMeR): Exportamos el prototipo de Figma a Zeplin para tomar el código que se ajuste a nuestro diseño y poder usarlo en la implementación de la interfaz.
* [Zeplin segundo link](https://zpl.io/a7Oz9LR)

*El por qué del diseño*

* El prototipo de baja fidelidad fue realizado segun al previo diseño, consolidando màs el diseño previo incoporando el logo.

* Los colores empleados son los siguientes:
![imagen planificación Trello](https://trello-attachments.s3.amazonaws.com/5c87e3e3422ae0778c107267/5ca1aab77c6b7e3fed73a175/ddf7236c251bed2bc5e70e07904707a8/image.png)

* Sobre el tipo de letra, tratamos que sea lo más cercano al usado en el site del juego.

* Mobile first: Decidimos empezar a diseñar para evitar problemas al momento de ajustar código de estilo en css. 

*Testeos de usabilidad / Sugerencias de los usuarios*

## Navegación por la interfaz

*POR COMPLETAR (posible gif)*

## Planificación del proyecto

### Tablero
Realizamos la división de tareas en un tablero Kanban. Por cada historia desglozamos las actividades en tareas pequeñas para saber cuáles realizar y seguir un orden.

### Trello
Manejamos los requerimientos en un checklist para ver qué puntos estaban/están terminados y cuáles quedan pendientes. Fue de gran utilidad para llevar un control del proceso de trabajo.

![imagen planificación Trello](https://trello-attachments.s3.amazonaws.com/5c87e3e3422ae0778c107267/5ca1aec5b33b874ed081b1f7/faca47082dafc7160c22a450ecc626ae/image.png)

[Ver aquí](https://trello.com/b/OaPcxoQR/pokepedia)


## Futuras mejoras

*Realizar una ventana modal para mas detalles de un pokémon
* Visualizaciones gráficas: Google Charts.
