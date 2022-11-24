const express = require('express')

const app = express();

const port = 8070;

const path = require('path')

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','home.html')))
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views','login.html')))
app.get('/registro', (req,res) => res.sendfile(path.join(__dirname, 'views','registro.html')))
app.get('/redes', (req,res) => res.sendfile(path.join(__dirname, 'views','redes.html')))
app.get('/perfil', (req,res) => res.sendfile(path.join(__dirname, 'views','perfil.html')))
app.get('*', (req,res) => res.sendfile(path.join(__dirname, 'views','404.html')))



app.listen(port, () => console.log(`servidor levantada en el port ${port} `))