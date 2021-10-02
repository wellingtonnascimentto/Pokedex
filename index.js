const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

  app.get("/", function(req, res) {
  const pokedex = [
    {
      Número:001,
      Nome:"Bulbasaur",
      Tipo:"Grama, Poção",
      Imagem:"",
      Descrição:"",
      Altura:"0.7",
      Peso:"6.9",
      Categoria:"S",
      Habilidade:"Overgrow",
    },
  ]
  res.render("index", {titulo: "Pokedex Master", pokedex:pokedex});
  });

app.get("/cadastro", (req, res) => {
    res.render("cadastro");
  });

  app.get("/detalhes", (req, res) => {
    res.render("detalhes");
  });

app.post("/new", (req, res) => {
  const {
    Número,
    Nome,
    Tipo,
    Imagem,
    Descrição,
    Altura,
    Peso,
    Categoria,
    Habilidade} = req.body;
  pokedex.push({
    Número: Número,
    Nome: Nome,
    Tipo: Tipo,
    Imagem: Imagem,
    Descrição: Descrição,
    Altura: Altura,
    Peso: Peso,
    Categoria: Categoria,
    Habilidade: Habilidade});
    message = "Seu cadastro foi realizado!!!"  
    res.redirect("/")
}); 

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);