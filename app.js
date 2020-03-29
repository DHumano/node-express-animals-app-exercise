var express=require("express");

var app=express();


app.get("/",function(req,res){
    
   res.send("hi there,welcome to my assignment!"); 
});

app.get("/",function(req,res){
    
   res.send("hi there,welcome to my assignment!"); 
});


app.get("/speak/:animal",function(req,res){
    
    var sound={
        dog:"wof wof",
        cow: "mu mu",
        cat:"miauuuu"
    }
    var animal=req.params.animal.toLowerCase();
   res.send("the "+ animal + " says "+"'"+ sound[animal] +"'"); 
});


app.get("/repeat/:palabra/:cant",function(req,res){
   var palabra=req.params.palabra;
   var cant=Number(req.params.cant);
   var result="";
    for (var i=0;i < cant; i++ ) {
       result += palabra+ " ";
    }
    res.send(result);
});


app.get("*",function(req,res){
    res.send("sorry,page not found, what are you doing with your life?");
    
});

app.listen(process.env.PORT || 3000,process.env.IP,function(){
   console.log("server started"); 
});