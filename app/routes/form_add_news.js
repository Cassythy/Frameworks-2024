module.exports = function (app) {
    app.get("/formulario_inclusao_noticias", function (req, res) {
        res.render("admin/form_add_news");
    });

    app.post("/formulario_inclusao_noticias", function (req, res) {
        res.send("olá"+req.body);
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