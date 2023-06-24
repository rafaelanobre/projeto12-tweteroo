import express from 'express';

const app = express();

const tweets = [];
const usuarios = [];

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
    const {username, avatar} = req.body;

    if(!username || !avatar){
        res.sendStatus(400)
        return
    }
    if(typeof username !== "string" || typeof avatar !== "string"){
        res.send("Todos os campos são obrigatórios!")
        return
    }

    const usuario = {
        username: username, 
        avatar: avatar 
    }

    usuarios.push(usuario);

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