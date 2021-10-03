const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
//app.use{express.urlencoded(({ extended: true}))};

app.use(express.urlencoded());


let pokedex =[];
let message = "";

  app.get("/", function(req, res) {
    res.render("index", {pokedex}),
  message
  });

app.get("/cadastro", (req, res) => {
    res.render("cadastro");
  });

  app.get("/detalhes", (req, res) => {
    res.render("detalhes");
  });

app.post  ("/new", (req, res) => {
  const {
    numero,
    nome,
    tipo,
    imagem,
    descrição,
    altura,
    peso,
    categoria,
    habilidade} = req.body;
    message = "Seu Pokemon foi registrado com Sucesso!!!";
  pokedex.push({
    Número: numero,
    Nome: nome,
    Tipo: tipo,
    Imagem: imagem,
    Descrição: descrição,
    Altura: altura,
    Peso: peso,
    Categoria: categoria,
    Habilidade: habilidade});
    message = "Seu Pokemon foi registrado com Sucesso!!!";
    res.redirect("/")
}); 
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);