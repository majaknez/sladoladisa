const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*schema definise strukturu kolekcije koju cemo cuvati u bazi i ona predstavlja konstruktorsku funkciju */

const blogSchema = new Schema({
    ime : {
        type: String,
        required: true
    },

    prezime : {
        type: String,
        required:true
    },

    ukus :{
         type: String,
         required:true
        },
    body: {
        type: String,
        required: true
    }
   
        
    
},{timestamps: true});

/*zatim pravimo model koji ce da komunicira da nasom bazom */

const Blog = mongoose.model('Blog', blogSchema);

/*prvi parametar je bitan, zato sto ce na osnovu ovog da trazi kolekcije, tako sto model stavlja u mnozinu i trazi blogs */

module.exports = Blog;
/*eksportujemo model da bi mogli da ga koristimo u ostalim dokumentima*/