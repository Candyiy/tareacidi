const express = require('express');
const mysql = require("mysql2");

const app = express();
const port = 3000;

const db = mysql.createPool({
    host: "mysql", 
    user: "usuario",
    password: "contrasena",
    database: "upds2025",
});

function suma(a, b) {
  return a + b;
}

module.exports = { suma };

app.get('/', (req, res) => {
    db.query('SELECT * FROM pruebados', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error en la base de datos');
        }

        let html = "<h2>Datos de la tabla prueba</h2>";
        xdxd="";
        results.forEach(row => {
            xdxd += `Nombre: ${row.nombre} - Apellido: ${row.apellido}<br>`;
        });

        res.send(xdxd);
    });
});

app.listen(port, () => {
    console.log(`Servidor Node escuchando en puerto ${port}`);
});
