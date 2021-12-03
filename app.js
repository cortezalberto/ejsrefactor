const express = require('express')
const app = express()
const port = 3000

// Rutas que puedo visitar
const productRoutes = require('./routers/routesProduct')

// Motor de vistas
app.use(express.static('public'));
app.set('view engine', 'ejs');

// En caso de que la carpeta views tenga
// un suddirectorio de debe cambiar el segundo parámetro
// path = require('path');
// 
// app.set('views', path.resolve(__dirname, './src/views'))
app.set('views', 'views')

// Solicito las información de las rutas
// productRoutes, tiene todas las rutas disponibles
app.use('/', productRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

