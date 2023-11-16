var hotel = require('../models/hotel');
// List of all hotels
exports.hotel_list = function(req, res) {
res.send('NOT IMPLEMENTED: hotel list');
};
// for a specific hotel.
// exports.hotel_detail=function(req,res){
//res.send('NOT IMPLEMENTED: hotel detail:' +req.params.id);

//for a specific hotel
exports.hotel_detail =async  function(req, res) {
    console.log("detail"+req.params.id)
    try{
    result=await hotel.findById(req.params.id)
    res.send(result)
    }catch(error){
    res.status(500)
    res.send(`{"error":document for id${req.params.id} not found`);
    }
};
// Handle hotel create on POST.
exports.hotel_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: hotel create POST');
};
// Handle hotel delete form on DELETE.
exports.hotel_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await hotel.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    

// Handle hotel update form on PUT.
exports.hotel_update_put= async function(req,res){
console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try{
    let toUpdate=await hotel.findById(req.params.id)
    if(req.body.name)
    toUpdate.name=req.body.name;
    if(req.body.numOfRooms) toUpdate.numOfRooms=req.body.numOfRooms;
    if(req.body.rate) toUpdate.rate=req.body.rate;
    let result=await toUpdate.save();
    console.log("Success "+result)
    res.send(result)
    }catch(err){
    res.status(500)
    res.send(`{"error":${err}:Update for id ${req.params.id} failed`);
    }
};

exports.hotel_list = async function(req, res) {
    try{
    thehotel = await hotel.find();
    res.send(thehotel);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    exports.hotel_view_all_Page = async function(req, res) {
        try{
        thehotel = await hotel.find();
        res.render('hotel', { title: 'hotel Search Results', results: thehotel });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };
exports.hotel_create_post = async function(req, res) {
     console.log(req.body)
     let document = new hotel();
      // We are looking for a body, since POST does not have query parameters.
      // Even though bodies can be in many different formats, we will be picky
     // and require that it be a json object
     document.name = req.body.name;
     document.numOfRooms = req.body.numOfRooms;
     document.rate = req.body.rate;
     try{
     let result = await document.save();
     res.send(result);
     }
     catch(err){
     res.status(500);
     res.send(`{"error": ${err}}`);
     }
   };
   // Handle a show one view with id specified by query
   exports.hotel_view_one_Page = async function(req, res) {
   console.log("single view for id " + req.query.id)
   try{
   result = await hotel.findById( req.query.id)
   res.render('hoteldetail',
   { title: 'hotel Detail', toShow: result });
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
};

//Handle building the view for creating a hotel.
// No body, no in path parameter, no query.
// Does not need to be async
exports.hotel_create_Page = function(req, res) {
console.log("create view")
try{
res.render('hotelcreate', { title: 'hotel Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

    


    
