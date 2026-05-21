const http = require("http");
const fs = require("fs"); 
const path = require("path");

const server = http.createServer((req, res) => {
    const { url } = req;
    if (url === '/styles.css') {
        try {
            const cssPath = path.join(__dirname, 'styles.css');
            const css = fs.readFileSync(cssPath, 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Archivo CSS no encontrado");
        }
        return; 
    }

    
    switch(url) {
        case '/':
            try {
                const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(html);
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end("Error interno: No se pudo cargar index.html");
            }
            return;
        case '/portfolio':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
            <!DOCTYPE html>
            <html>
            <head><link rel="stylesheet" href="/styles.css"></head>
            <body>
                <div class="container">
                    <h1>Mi Portafolio</h1>
                    <p>Carlos Antonio Martínez Sánchez</p>
                    <p>Desarrollador Web</p>
                    <a href="/" class="btn">Inicio</a>
                </div>
            </body>
            </html>`);
            return;
        case '/skills':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
            <!DOCTYPE html>
            <html>
            <head><link rel="stylesheet" href="/styles.css"></head>
            <body>
                <div class="container">
                    <h1>Mis Habilidades</h1>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Responsive Design</li>
                    </ul>
                    <a href="/" class="btn">Inicio</a>
                </div>
            </body>
            </html>`);
            return;
        case '/proyectos':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
            <!DOCTYPE html>
            <html>
            <head><link rel="stylesheet" href="/styles.css"></head>
            <body>
                <div class="container">
                    <h1>Mis Proyectos</h1>
                    <p>Aquí puedes ver algunos de mis trabajos recientes:</p>
                    <ul>
                        <li><strong>E-commerce Local:</strong> Tienda en línea nativa.</li>
                        <li><strong>Portfolio Responsive:</strong> Maquetación adaptativa con CSS.</li>
                        <li><strong>Control de Inventario:</strong> Consola interactiva en Node.js.</li>
                    </ul>
                    <a href="/" class="btn">Inicio</a>
                </div>
            </body>
            </html>`);
            return;
        case '/cv':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
            <!DOCTYPE html>
            <html>
            <head><link rel="stylesheet" href="/styles.css"></head>
            <body>
                <div class="container">
                    <h1>Mi Currículum Vitae</h1>
                    <p><strong>Educación:</strong> Ingeniería en Informática / Programación Web.</p>
                    <p><strong>Experiencia:</strong> Desarrollo frontend interactivo y servidores HTTP nativos.</p>
                    <p><strong>Idiomas:</strong> Español (Nativo) - Inglés Técnico.</p>
                    <a href="/" class="btn">Inicio</a>
                </div>
            </body>
            </html>`);
            return;
        case '/api/skills':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify([
                { id: 1, skill: "HTML5", level: "Avanzado" },
                { id: 2, skill: "CSS3", level: "Avanzado" },
                { id: 3, skill: "JavaScript", level: "Intermedio" },
                { id: 4, skill: "Node.js", level: "Básico" }
            ]));
            return;
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
            <!DOCTYPE html>
            <html>
            <head><link rel="stylesheet" href="/styles.css"></head>
            <body>
                <div class="container">
                    <h1>Contacto</h1>
                    <form action="#" method="POST" onsubmit="event.preventDefault(); alert('¡Mensaje enviado!');">
                        <input type="text" placeholder="Nombre" required>
                        <input type="email" placeholder="Email" required>
                        <textarea placeholder="Mensaje" rows="4" required></textarea>
                        <button type="submit" class="btn">Enviar</button>
                    </form>
                    <a href="/" class="btn">Inicio</a>
                </div>
            </body>
            </html>`);
            return;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<div class="container"><h1>404 - Página no encontrada</h1><a href="/" class="btn">Volver al Inicio</a></div>');
            return;
    }
});
server.listen(3000, () => {
    console.log('Servidor corriendo con éxito en http://localhost:3000');
});