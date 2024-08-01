module.exports = function (app) { // exporta o modulo para o app /
    app.get("/noticias", function (req, res) {
        res.send("Noticias");
       /*  console.log("Query: ");
        console.log(req.query);
        
        var conexao = app.config.dbConnection();
        conexao.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        }); */
    });
    app.get("/noticias/:id", function (req, res){
        res.send("ola - noticias id"+req.params.id);
    });
    app.get("/noticias/:Identificacao/:NomeCompleto", function (req, res){
        res.send("Noticias: identificação:" + req.params.Identificacao + "<br>Nome Completo "+req.params.NomeCompleto);
    });
    app.post("/noticias/:titulo/:noticia", function(req, res){
        var conexao = app.config.dbConnection();
        var queryNoticias = "INSERT INTO noticias(titulo, noticia) VALUES('"+req.params.titulo+"','"+req.params.noticia+"');";
        console.log(queryNoticias);
        conexao.query(queryNoticias, function (error, result){
            console.log(error);
            res.send(error.errno+" | "+error.slq+" | "+error.sqlMessage);
        })
    })
    

    /* app.get("/noticias/:Identificacao/:NomeCompleto", function (req, res) {

        console.log("Parametro: ");
        console.log(req.params);
        
        var conexao = app.config.dbConnection();
        conexao.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        });
    }) */
}