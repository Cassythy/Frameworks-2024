module.exports = function(app){ // exporta o modulo para o app /
    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render("admin/form_add_noticias");
    })
}