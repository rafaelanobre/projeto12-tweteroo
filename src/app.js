import express from 'express';

const app = express();

const tweets = [];
const usuarios = [];

//modelo usuario
const usuario = {
	username: 'bobesponja', 
	avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
}

//modelo tweet
const tweet = {
    username: "bobesponja",
    tweet: "Eu amo hambúrguer de siri!"
}

app.get("/tweets", (req,res) =>{
    //Retornar os 10 últimos tweets publicados

    //retornar username, avatar e tweet
    //pegar o avatar do array de usuários, pesquisando pelo usuário

    //Caso não tenha nenhum tweet cadastrado, retorna um array vazio
    res.send();
});

app.post("/sign-up",(req,res)=>{
    //receber username e avatar pelo body da req
    //salvar no array de usuários

    //lembrar de tratar erros
    res.status(201).send("OK")
})

app.post("/tweets", (req,res)=>{
    //Se o usuário não estiver cadastrado (username não fez sign-up anteriormente)
    //deve retornar a mensagem “UNAUTHORIZED” e status 401

    //lembrar de tratar erros

    //receber username e tweet pelo body da req
    //salvar no array de tweets
    res.status(201).send("OK")
})

app.listen(5000);