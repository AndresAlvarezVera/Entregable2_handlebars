import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;


// Exponer la carpeta "public" para cargar el archivo CSS
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
// Asegurar que Express apunte a tu carpeta de views dentro de src
app.set('views', path.join(__dirname, 'views'));

// Ruta principal que renderiza el chat
app.get('/', (req, res) => {
    res.render('chat', { 
        title: 'Interfaz Tecno-Mágica',
        username: 'Alv3an3' // Variable dinámica
    });
});

app.listen(PORT, () => {
    console.log(`Servidor en línea: http://localhost:${PORT}`);
});