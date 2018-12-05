
var express = require('express'); 
var router = express.Router();

var angry_birds = require('../modules/angry_birds');


router.get('/', function(request, response){

    response.render( './angry_birds/index' , {birds: "hi"} )
})





router.get('/angry_birds', function(request, response){
    
app.get('/:id',function(request,response){
    var index = request.params.id;
    console.log(package.packages[index].name);
    var mustacheVariable = {
        pname : package.packages[index].name,
        pcategory : package.packages[index].category,
        pimg: package.packages[index].img, 
    }
    response.render('./show',mustacheVariable);
})



 response.send("Hi "); 
})

module.exports = router; 