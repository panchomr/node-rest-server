const jwt = require('jsonwebtoken');
// verificar token

// next ontinua la ejecucion del programa
let verificaToken = (req, res, next) => {

    // asio capturo lo que viene en el header
    let token = req.get('token');

    //console.log('ESTE ES EL TOKEN!!!!', token);
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

    // res.json({
    //     token
    // });

};

//==============
// VERIFICA ADMIN ROL
//===================

let verificaAdminRol = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();

    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }

}

module.exports = {
    verificaToken,
    verificaAdminRol
}