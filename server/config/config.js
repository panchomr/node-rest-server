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


process.env.URLDB = urlDB;