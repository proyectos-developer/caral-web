const cors = require('cors')

const express = require ('express');
const morgan = require('morgan');
const path = require('path');

const app = express()
app.use(cors())

/**Configuraciones */
app.set ('port', process.env.PORT || 3001);

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/proveedor')));
app.get('/proveedor/:nombre', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/proveedor', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/merchandising')));
app.get('/merchandising', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/merchandising', 'index'));
});

//Iniciar el servidor
app.listen (app.get('port'), () => {
    console.log ('Server en puerto ', app.get ('port'))
})
