const express = require('express');
const mongoose = require('mongoose');

const Blog = require('./models/blog');

const app = express();
const mondoDBURI = 'mongodb+srv://majaknezevic:Katarina123@cluster0.zgbm6.mongodb.net/sladoladisa?retryWrites=true&w=majority'  

//drugi parametar se dodaje da bi se izbeglo deprecation warning
mongoose.connect(mondoDBURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{
    app.listen(3000, function(){
        console.log('server radi na portu 3000');
    }); /* pokrecemo server tek kad se povezemo sa bazom */
}).catch((error)=>{
    console.log('doslo je do greske', error)
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
/*da mozemo da prikupimo podatke iz forme */
app.use(express.urlencoded({extended:true}))

//rute

app.get('/', (req,res)=>{
    res.render('index', {title: 'POČETNA'})
});

app.get('/about', (req,res)=>{
    res.render('about',{title: 'O NAMA'});
});



app.get('/contact', (req,res)=>{
    res.render('contact',{title: 'KONTKT'});
});
app.get('/shop', (req,res)=>{
    res.render('shop',{title: 'PRODAVNICA'});
});


app.get('/create-blogs', (req,res)=>{
    res.render('create-blog')
});

app.post('/blogs', (req,res)=>{
    console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
    .then((result) =>{
                     
        console.log('ovo je objekat result:', result);
        console.log('timestamp', result.createdAt);
        res.redirect('blogs');
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('funPage', { blogs: result, title: 'FUN PAGE' });
       
      })
      .catch(err => {
        console.log(err);
      });
  });

 






