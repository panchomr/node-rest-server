const express = require('express');

const { verificaToken } = require('../middlewares/auth');
const app = express();
const Producto = require('../models/producto');


app.get('/productos', (req, res) => {
    // todos productos
    //populate usuario categoria
    //paginado
});

app.get('/productos/:id', verificaToken, (req, res) => {

});

app.post('/productos', verificaToken, (req, res) => {

    let body = req.body;

    let producto = new Producto();
    console.log('CATEGORIA!!!!!!!!!!!!!', body);
    //console.log('USUARIO!!!!!!!!!!!!!', req.usuario._id);
    producto.ususario = req.usuario._id;
    producto.nombre = body.nombre;
    producto.precioUni = body.precioUni;
    producto.descripcion = body.descripcion;
    //producto.disponible = body.disponible;
    producto.categoria = body.categoria;

    producto.save((err, productoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            productoDB
        });
    });


});

app.put('/productos/:id', verificaToken, (req, res) => {});

app.delete('/productos/:id', verificaToken, (req, res) => {});








module.exports = app;