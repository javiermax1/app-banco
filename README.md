# 🏦 Sistema Bancario con Autenticación

Sistema bancario completo con autenticación de usuarios, desarrollado con **Node.js**, **Express**, **MySQL**, **React** y **Tailwind CSS**.

---

## ✨ Características Principales

- 🔐 **Sistema de Login**: Autenticación con usuario y contraseña
- 👤 **Dashboard Personal**: Cada usuario ve solo su propia información
- 💰 **Operaciones Bancarias**: Ingresos, retiradas y transferencias Bizum
- 📊 **Historial Personal**: Visualización de movimientos propios
- 💳 **Saldo en Tiempo Real**: Actualización automática del saldo
- 🎨 **Interfaz Moderna**: Diseño responsivo con Tailwind CSS
- 🛡️ **Rutas Protegidas**: Solo usuarios autenticados pueden acceder

---

## 🚀 Inicio Rápido

### 1. Levantar la Base de Datos

```bash
# Asegúrate de tener configurado el archivo .env (ver .env.example)
docker compose up -d
```

### 2. Iniciar el Backend

```bash
cd backend
npm install  # Solo la primera vez
npm start
```

El backend estará disponible en: **http://localhost:3000**

### 3. Iniciar el Frontend

```bash
cd frontend
npm install  # Solo la primera vez
npm run dev
```

El frontend estará disponible en: **http://localhost:5173** (o 5174 si el 5173 está ocupado)

---

## 👥 Usuarios de Prueba

El sistema viene con 3 usuarios de ejemplo:

| Usuario    | Contraseña  | Nombre Completo | Saldo Inicial |
| ---------- | ----------- | --------------- | ------------- |
| **juan**   | password123 | Juan Pérez      | 450.00€       |
| **ana**    | password123 | Ana López       | 950.00€       |
| **carlos** | password123 | Carlos Ruiz     | 300.00€       |

---

## 🎯 Flujo de Uso

### 1. **Iniciar Sesión**

1. Abre http://localhost:5173 en tu navegador
2. Ingresa usuario y contraseña (ej: `juan` / `password123`)
3. Haz clic en "🔐 Iniciar Sesión"

### 2. **Dashboard Personal**

Una vez autenticado, verás:

- **Tarjeta de Saldo**: Tu saldo actual en grande
- **Pestañas de Navegación**:
  - 📊 **Mis Movimientos**: Historial de todas tus transacciones
  - 💰 **Ingresar Dinero**: Hacer abonos a tu cuenta
  - 💸 **Retirar Dinero**: Sacar dinero de tu cuenta
  - 📱 **Enviar Bizum**: Transferir a otros usuarios por teléfono

### 3. **Operaciones**

#### Ingresar Dinero

1. Ve a la pestaña "💰 Ingresar Dinero"
2. Introduce el importe
3. Añade un concepto (opcional)
4. Haz clic en "Ingresar Dinero"

#### Retirar Dinero

1. Ve a la pestaña "💸 Retirar Dinero"
2. Introduce el importe (no puede superar tu saldo)
3. Añade un concepto (opcional)
4. Haz clic en "Retirar Dinero"

#### Enviar Bizum

1. Ve a la pestaña "📱 Enviar Bizum"
2. Introduce el teléfono del destinatario (ej: `+34600333444`)
3. Introduce el importe
4. Añade un concepto (opcional)
5. Haz clic en "Enviar Bizum"

**Validaciones:**

- El teléfono debe estar registrado en el sistema
- Debes tener saldo suficiente
- No puedes enviarte dinero a ti mismo

### 4. **Cerrar Sesión**

Haz clic en "🚪 Cerrar Sesión" en la parte superior derecha

---

## 📂 Estructura del Proyecto

```
cuenta-bancaria/
│
├── backend/                          # Backend Node.js + Express
│   ├── config/
│   │   └── database.js              # Configuración MySQL
│   ├── controllers/
│   │   ├── auth.controller.js       # Login y autenticación
│   │   ├── usuarios.controller.js   # CRUD de usuarios
│   │   └── movimientos.controller.js # Operaciones bancarias
│   ├── routes/
│   │   ├── auth.routes.js           # Rutas de autenticación
│   │   ├── usuarios.routes.js       # Rutas de usuarios
│   │   └── movimientos.routes.js    # Rutas de movimientos
│   ├── server.js                    # Servidor Express
│   └── package.json
│
├── frontend/                         # Frontend React + Tailwind
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx   # HOC para rutas protegidas
│   │   ├── context/
│   │   │   └── AuthContext.jsx      # Contexto de autenticación
│   │   ├── pages/
│   │   │   ├── Login.jsx            # Página de login
│   │   │   └── Dashboard.jsx        # Dashboard del usuario
│   │   ├── App.jsx                  # Router principal
│   │   ├── main.jsx                 # Punto de entrada
│   │   └── index.css                # Estilos globales
│   ├── package.json
│   └── vite.config.js
│
├── bbdd/
│   └── initData/
│       ├── banco_demo.sql           # Estructura de BD y datos
│       └── add_auth.sql             # Migración de autenticación
│
├── docker-compose.yml               # Configuración Docker
└── README.md                 # Esta guía
```

---

## 🔌 API Endpoints

### Autenticación

```bash
# Login
POST /api/auth/login
Body: {
  "username": "juan",
  "password": "password123"
}
Response: {
  "success": true,
  "message": "Login exitoso",
  "data": {
    "usuario": {
      "id_usuario": 1,
      "username": "juan",
      "nombre": "Juan",
      "apellido": "Pérez",
      "telefono": "+34600111222",
      "saldo_actual": 450.00
    }
  }
}

# Obtener información del usuario
GET /api/auth/user/:id_usuario
```

### Movimientos

```bash
# Obtener movimientos del usuario
GET /api/movimientos/usuario/:id_usuario

# Realizar abono
POST /api/movimientos/abono
Body: {
  "id_usuario": 1,
  "importe": 100.00,
  "concepto": "Ingreso nómina"
}

# Realizar retirada
POST /api/movimientos/retirada
Body: {
  "id_usuario": 1,
  "importe": 50.00,
  "concepto": "Retirada cajero"
}

# Realizar transferencia (Bizum)
POST /api/movimientos/transferencia
Body: {
  "id_usuario_origen": 1,
  "telefono_destino": "+34600333444",
  "importe": 25.00,
  "concepto": "Cena del viernes"
}
```

---

## 🔒 Seguridad

### Implementado

- ✅ Rutas protegidas en el frontend (ProtectedRoute)
- ✅ Validación de credenciales en el backend
- ✅ Almacenamiento de sesión en localStorage
- ✅ Contexto de autenticación con React Context API

### ⚠️ Nota de Seguridad (Demo)

Este es un proyecto educativo. En producción deberías:

- 🔐 Usar **bcrypt** para hashear contraseñas
- 🎫 Implementar **JWT** (JSON Web Tokens) para autenticación
- 🛡️ Añadir **HTTPS** en producción
- 🔑 Variables de entorno seguras
- 🚫 Rate limiting para prevenir ataques de fuerza bruta
- 📝 Logging de intentos de login fallidos

---

## 🛠️ Tecnologías Utilizadas

### Backend

- **Node.js** 16+
- **Express** 4.18.2 - Framework web
- **MySQL2** 3.6.5 - Conexión a base de datos
- **cors** 2.8.5 - Habilitar CORS
- **dotenv** 16.3.1 - Variables de entorno

### Frontend

- **React** 18.2.0 - Biblioteca de UI
- **React Router DOM** 6.21.0 - Enrutamiento
- **Vite** 5.0.8 - Build tool
- **Tailwind CSS** 3.4.0 - Framework CSS

### Base de Datos

- **MySQL** 8.0 (Docker)

---

## 🎨 Características del Frontend

### Sistema de Autenticación

```jsx
// AuthContext.jsx - Gestión del estado de autenticación
- login(userData) - Guardar usuario en contexto y localStorage
- logout() - Cerrar sesión y limpiar datos
- isAuthenticated - Boolean que indica si hay sesión activa
```

### Rutas Protegidas

```jsx
// ProtectedRoute.jsx - HOC para proteger rutas
<ProtectedRoute>
  <Dashboard />
</ProtectedRoute>
// Si no está autenticado, redirige a /login
```

### Persistencia de Sesión

El usuario queda autenticado incluso si recargas la página, gracias a localStorage.

---

## 📱 Interfaz Responsiva

El diseño se adapta a:

- 📱 **Móvil**: 1 columna, pestañas horizontales
- 📱 **Tablet**: Layout optimizado
- 💻 **Desktop**: Interfaz completa

---

## 🐛 Troubleshooting

### Error: "Cannot find package 'react-router-dom'"

```bash
cd frontend
npm install
```

### Error: "Error de conexión a la base de datos"

1. Verifica que Docker esté corriendo: `docker ps`
2. Si no hay contenedores, ejecuta: `docker-compose up -d`
3. Espera 10 segundos para que MySQL inicialice
4. Reinicia el backend: `cd backend && npm start`

### Error: "Port 3000 is already in use"

El backend ya está corriendo en otro terminal. Usa ese terminal o ciérralo con `Ctrl+C`.

### Error: "Failed to bind host port 0.0.0.0:3306" (Docker)

Si el puerto 3306 ya está en uso por otra base de datos de tu sistema, el contenedor no arrancará. Por defecto, este proyecto utiliza el puerto **33066** para evitar este conflicto. Verifica tu archivo `docker-compose.yml` y `.env`.

### Error: "Credenciales inválidas"

Asegúrate de usar uno de los usuarios de prueba:

- **juan** / password123
- **ana** / password123
- **carlos** / password123

### No veo mis movimientos

1. Verifica que el backend esté corriendo en http://localhost:3000
2. Abre la consola del navegador (F12) y revisa errores
3. Verifica que el proxy de Vite esté configurado en `vite.config.js`

---

## 🧪 Ejemplo de Flujo Completo

### Escenario: Juan envía un Bizum a Ana

1. **Login como Juan**
   - Usuario: `juan`
   - Contraseña: `password123`

2. **Verificar Saldo**
   - Saldo inicial de Juan: 450.00€
   - Saldo inicial de Ana: 950.00€

3. **Enviar Bizum**
   - Ir a pestaña "📱 Enviar Bizum"
   - Teléfono: `+34600333444` (Ana)
   - Importe: `50.00`
   - Concepto: "Cena del viernes"
   - Enviar

4. **Verificar Actualización**
   - Nuevo saldo de Juan: 400.00€
   - En "Mis Movimientos" aparecerá: -50.00€ (salida)

5. **Login como Ana**
   - Cerrar sesión de Juan
   - Usuario: `ana`
   - Contraseña: `password123`

6. **Ver Bizum Recibido**
   - Nuevo saldo de Ana: 1000.00€
   - En "Mis Movimientos" aparecerá: +50.00€ (entrada) "De Juan Pérez"

---

## 📚 Documentación Adicional

- **[GUIA_TAILWIND.md](frontend/GUIA_TAILWIND.md)** - Guía completa de Tailwind CSS
- **[GUIA_EDUCATIVA_BACKEND.md](backend/GUIA_EDUCATIVA_BACKEND.md)** - Explicación del código backend
- **[BIZUM_DOCUMENTACION.md](backend/BIZUM_DOCUMENTACION.md)** - Cómo funciona Bizum
- **[README.md](frontend/README.md)** - Cómo desarrollar el frontend
-

---

## 🎓 Para Estudiantes

Este proyecto es ideal para aprender:

1. **Backend (Node.js + Express)**
   - Arquitectura REST API
   - Patrón MVC
   - Conexión a base de datos MySQL
   - Manejo de errores y validaciones
   - Sistema de autenticación

2. **Frontend (React + Tailwind)**
   - React Hooks (useState, useEffect, useContext)
   - React Router DOM
   - Context API para estado global
   - Componentes funcionales
   - Diseño con Tailwind CSS
   - Peticiones HTTP con fetch()

3. **Base de Datos (MySQL)**
   - Diseño de esquemas
   - Relaciones entre tablas
   - Transacciones
   - Consultas JOIN

4. **DevOps**
   - Docker y Docker Compose
   - Variables de entorno
   - Proxy de desarrollo (Vite)

---

## 🔄 Próximas Mejoras

Ideas para extender el proyecto:

- [ ] Implementar JWT para autenticación sin estado
- [ ] Añadir bcrypt para hashear contraseñas
- [ ] Crear endpoint para registro de nuevos usuarios
- [ ] Añadir paginación en el historial de movimientos
- [ ] Implementar filtros por fecha y tipo de movimiento
- [ ] Añadir gráficos con Chart.js
- [ ] Modo oscuro
- [ ] Notificaciones en tiempo real
- [ ] Exportar movimientos a PDF
- [ ] Límites diarios de transacciones

---

## 📞 Soporte

Si tienes problemas:

1. Verifica que todos los servicios estén corriendo:
   - Docker: `docker ps`
   - Backend: http://localhost:3000
   - Frontend: http://localhost:5173

2. Revisa los logs:
   - Backend: Terminal donde corre `npm start`
   - Frontend: Consola del navegador (F12)
   - MySQL: `docker logs cuenta-bancaria-db-1`

3. Consulta la documentación educativa en las guías mencionadas

---

## ✅ Checklist de Funcionalidad

- [x] Sistema de login funcional
- [x] Dashboard personalizado por usuario
- [x] Ver solo movimientos propios
- [x] Realizar abonos
- [x] Realizar retiradas con validación de saldo
- [x] Enviar Bizum por teléfono
- [x] Actualización automática del saldo
- [x] Persistencia de sesión
- [x] Rutas protegidas
- [x] Diseño responsivo
- [x] Manejo de errores

---

¡Disfruta explorando el sistema bancario! 🚀

**Desarrollado con ❤️ para fines educativos**
