This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# Ejercicio 1 - Formulario De Registro De Contacto
Crear un formulario con nombre, documento, correo, teléfono y estado. Validar campos obligatorios, formato de correo y longitud mínima del documento.
# Ejercicio 2 - Tabla De Registros Con Filtros Locales
Mostrar una lista fija de registros en una tabla. Agregar búsqueda por nombre/código y filtro por estado: activo, pendiente e inactivo.
# Ejercicio 3 - Vista Detalle De Un Registro
Al hacer clic en una fila de la tabla, mostrar una pantalla o panel con el detalle completo del registro seleccionado, incluyendo fechas, contacto y observaciones.
# Ejercicio 4 - Consumo De Endpoint Mockeado Para Login
Crear un servicio authService que simule el consumo de un endpoint /api/auth/login. Debe validar usuario y contraseña usando un archivo mock local y devolver un token falso junto con los datos del usuario.
# Ejercicio 5 - Listado Desde Mock De API
Crear una función getRecords() que consuma datos desde un mock JSON simulando un endpoint /api/records. La pantalla debe mostrar loading, error y estado vacío.
# Ejercicio 6 - Crear Registro Con Mock De API
Implementar una función createRecord(data) que simule un POST /api/records. Debe validar duplicados por correo o documento usando datos mock y devolver errores parecidos a una API real.
