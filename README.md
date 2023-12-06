# Review App

🔗 URL: https://review-next-mongo.vercel.app/

## Descripción

Este repositorio es un CRUD (create/read/update/delete) de reseñas. Esta hecho en Nextjs, un framework de react que permite tener hacer full-stack apps usando server side components. Esta página esta hecha como muestra de ejemplo conectando todas las partes, base de datos, API, renderizado y autentificación. 

## Características

- Vinculación Review con usuario
- Autentificación
- Encryptación de contraseña
- Rutas protegidas
- Reviews compartibles
- Diseño responsive

## Tecnologías utilizadas

- [Nextjs](https://nextjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Insomia](https://insomnia.rest/) API client for testing
- [NextAuth](https://next-auth.js.org/)
- [Tailwind](https://tailwindcss.com/)
- [Standard JS](https://www.npmjs.com/package/standard) JavaScript style guide, linter, and formatter
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)

### Funcionalidad

- [x] Creación de Reviews.

- [x] Actualización de Reviews.

- [x] Eliminación de Reviews.

- [x] Visualización de Reviews.

- [X] Persistencia de Datos.

- [x] Despliegue.

- [ ] Testeo.


### Desafíos a futuro

- [ ] Estado del Review publico/privado.

- [ ] Filtrado por calificaciones.

- [ ] Filtrado por fechas.

- [ ] Agrupar reviews por restaurant.

- [ ] Comentarios en cada review.

- [ ] calificaciones a los usuarios por otros usuarios.

## Configurar proyecto

1. Clonar el repositorio

```bash
git clone https://github.com/altobellidardo/review-next-mongo
```

2. Ir al proyecto

```bash
cd review-next-mongo
```

3. Instalar dependiencias

```bash
npm install
```

4. Correr el proyecto

```bash
npm run dev
```

5. Abrir el proyecto en el navegador

🔗 [http://localhost:3000/](http://localhost:3000/)