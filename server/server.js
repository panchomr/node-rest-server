require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');



const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// habilitar carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// congif global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}, (err, resp) => {
    if (err) {
        throw err;
    } else {
        console.log('Base de datos online my way');
    }
});

app.listen(process.env.PORT, () => {
    console.log(`escuchando puerto 3000`);
});