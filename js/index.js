
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))

app.set('view engine', 'ejb')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen('3000', () => {
    console.log('Example app listening on port 3000!');    
})

app.post('/inserirPosts', (req, res) => {    
    if(req.body <= 140)
        console.log("O artigo tem poucas palavras...")
    else
        console.log("Artigo postado com sucesso!")
    

    
})

