const express = require('express');
const app = express();
const fs = require('fs');
let gamesFiles = fs.readFileSync('./datas/games.json');
let games = JSON.parse(gamesFiles);
let pokemonsFiles = fs.readFileSync('./datas/pokemon.json');
let pokemons = JSON.parse(pokemonsFiles);


app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));


app.get('/',(req,res) => {
    res.render('home')
});
app.get('/games',(req,res) => {
    res.render('games',{games:games});
});
app.get('/pokemons',(req,res) => {
    res.render('pokemons',{pokemons:pokemons});
});

app.get('/mentions',(req,res) => {
    res.render('mentions');
});
app.listen(3000);