const express = require('express');

let { verificaToken, verificaAdminRol } = require('../middlewares/auth');

let app = express();

const Categoria = require('../models/categoria');


app.get('/categoria', verificaToken, (req, res) => {
    Categoria.find({})
        .sort('descripcion')
        .populate('usuario', 'nombre email')
        //.populate('usuario', 'nombre email') este seria otro esquema para poblar
        .exec((err, categorias) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }


            res.json({
                ok: true,
                categorias
            });
        });
});

// mostar categoria por id
app.get('/categoria/:id', verificaToken, (req, res) => {

    let id = req.params.id;
    Categoria.findById(id, (err, categoriaDB) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'el ID no es correcto'
                }
            });
        }
        res.json({
            ok: true,
            categoriaDB
        });

    });
});

// Crear nueva categoria

app.post('/categoria', verificaToken, (req, res) => {
    let body = req.body;

    let categoria = new Categoria();
    categoria.descripcion = body.descripcion;
    categoria.usuario = req.usuario._id;

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoriaDB
        });

    });

});

// actualizar categoria
app.put('/categoria/:id', verificaToken, (req, res) => {

    let id = req.params.id;
    let body = req.body;

    let descripcionNueva = {
        descripcion: body.descripcion
    };

    Categoria.findByIdAndUpdate(id, descripcionNueva, { new: true, runValidators: true }, (err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoriaDB
        });

    });

});

//delete

app.delete('/categoria/:id', [verificaToken, verificaAdminRol], (req, res) => {
    let id = req.params.id;

    Categoria.findByIdAndRemove(id, (err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'el id no existe'
                }
            });
        }

        res.json({
            ok: true,
            message: 'categoria borrada'
        });
    });
});



module.exports = app;