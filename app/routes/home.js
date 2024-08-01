module.exports=function(app){
    app.get("/", function(req, res){
        res.render("home/index");
    });
    app.get("/index", function(req, res){
        res.render("index");
    });
}