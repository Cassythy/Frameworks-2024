module.exports = function (app) {
    app.get("/noticias", function (req, res) {

        console.log(req.query);

        var conexao = app.config.dbConnection();
        conexao.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        });
    })
}