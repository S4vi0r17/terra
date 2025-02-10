# Instrucciones

## 1. Configuración del Entorno

Antes de ejecutar el proyecto, copia el archivo `.env.example` y renómbralo a `.env`. Luego, edítalo y asegúrate de llenar la siguiente variable de entorno:

```
VITE_FIREBASE_URL=
```

Las demás variables ya están configuradas por defecto y no necesitan cambios.

## 2. Instalar Dependencias

Este proyecto utiliza Bun como gestor de paquetes. Para instalar las dependencias, ejecuta:

```sh
bun install
```

## 3. Levantar el Proyecto con Docker

Este proyecto utiliza Docker para su ejecución. Para levantar los contenedores, usa el siguiente comando:

```sh
docker compose up -d
```

Esto iniciará los servicios en segundo plano.

## 4. Iniciar el Servidor de Desarrollo

Para iniciar el entorno de desarrollo, usa el siguiente comando:

```sh
bun dev
```

## 5. Poblar la Base de Datos (Database SEED)

Para llenar la base de datos con datos de prueba, usa el siguiente endpoint:

```
http://localhost:3000/api/seed
```

## 6. Acceder a la Documentación de la API

Puedes revisar la documentación de los endpoints en:

```
http://localhost:3000/api
```

## 7. Credenciales de Prueba

Puedes utilizar las siguientes credenciales para acceder a la aplicación:

```json
{
    "email": "test1@google.com",
    "password": "Abc123"
}

{
    "email": "test2@google.com",
    "password": "Abc123"
}
```
