const http = require('http');

const puerto = 3000;
const host = 'localhost';

const servidor = http.createServer((req, res) => {
  // Configurar encabezados
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Rutas básicas
  if (req.url === '/' && req.method === 'GET') {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Servidor Node.js</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              background-color: #f0f0f0;
            }
            .contenedor {
              text-align: center;
              background: white;
              padding: 40px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            h1 { color: #333; }
            p { color: #666; }
            a { color: #0066cc; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="contenedor">
            <h1>¡Bienvenido al Servidor Node.js!</h1>
            <p>El servidor está funcionando correctamente.</p>
            <p><a href="/api/datos">Ver datos</a></p>
          </div>
        </body>
      </html>
    `);
  } else if (req.url === '/api/datos' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({
      mensaje: 'Datos de prueba',
      timestamp: new Date().toISOString(),
      servidor: 'Node.js'
    }));
  } else {
    res.statusCode = 404;
    res.end('Página no encontrada');
  }
});

servidor.listen(puerto, host, () => {
  console.log(`\n🚀 Servidor ejecutándose en http://${host}:${puerto}/`);
  console.log('Presiona Ctrl+C para detener el servidor\n');
});
