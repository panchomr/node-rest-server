//Puerto

process.env.PORT = process.env.PORT || 3000;


// entorno 

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// DB

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //urlDB = process.env.MONGO_URI';
    urlDB = 'mongodb+srv://panchomr:QbfDDcHF7cke1aZv@cluster0-grzxn.mongodb.net/cafe';
}


//  venc token

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// seed ( secreto token)

process.env.SEED = process.env.SEED || 'este es el seed de desarrollo';

process.env.URLDB = urlDB;

// google clientID

process.env.CLIENT_ID = process.env.CLIENT_ID || '714754736467-8nia6hl4ru512go6l3mqho55apejsaoe.apps.googleusercontent.com';