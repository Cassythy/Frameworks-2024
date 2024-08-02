module.exports = function (app) {
    app.get("/formulario_inclusao_noticias", function (req, res) {
        res.render("admin/form_add_news");
    });

    app.post("/formulario_inclusao_noticias", function (req, res) {
        /*res.send("OK o titulo é: "+req.body.titulo); */
        var cadOK = true;
        res.render("admim/form_add_news",{cadOK})
    });
    /* app.post('/formulario_inclusao_noticias', function (req, res) {
        var conexao = app.config.dbConnection();
        conexao.query("INSERT INTO noticias (titulo,noticia) VALUES ('" + req.body.titulo + "','" + req.body.noticia + "')", function (error, result) {
            if (error != null) {
                res.render('secao/404');
            } else {
                res.render('admin/form_add_news', { cadok: 1 })
            }
        })
    }) */
}