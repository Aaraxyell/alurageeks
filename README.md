
#Alura Geek - README

##Introducción

Este proyecto es un gestor de productos que utiliza JSON Server como base de datos simulada. Permite agregar, eliminar y editar productos mediante una interfaz web simple.

##Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

##Clona el repositorio:

git clone <url-del-repositorio>
cd <nombre-de-tu-proyecto>


##Instala las dependencias:

npm install


#Uso

##Iniciar JSON Server

Para simular una base de datos RESTful con JSON Server:


npm start


JSON Server se ejecutará en http://localhost:3000 y utilizará el archivo db.json como base de datos inicial.

#Operaciones CRUD

El proyecto permite realizar las siguientes operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos:

##Agregar un Producto:

Llena el formulario en la interfaz web con el nombre, precio y URL de la imagen del producto.
Haz clic en el botón "Agregar" o envía el formulario.
El producto se añadirá a la base de datos simulada y se mostrará en la lista de productos.

##Eliminar un Producto:

Haz clic en el botón "Eliminar" junto al producto que deseas eliminar.
Confirma la eliminación cuando se te solicite.
El producto se eliminará de la base de datos simulada y desaparecerá de la lista de productos en la interfaz web.

##Editar un Producto:

Haz clic en el botón "Editar" junto al producto que deseas modificar.
Ingresa el nuevo nombre, precio y/o URL de la imagen del producto en los campos emergentes.
Confirma los cambios.
El producto se actualizará en la base de datos simulada y los cambios se reflejarán automáticamente en la interfaz web.