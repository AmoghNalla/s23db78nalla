var hotel = require('../models/hotel');
// List of all hotels
exports.hotel_list = function(req, res) {
res.send('NOT IMPLEMENTED: hotel list');
};
// for a specific hotel.
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
exports.hotel_delete = function(req, res) {
res.send('NOT IMPLEMENTED: hotel delete DELETE ' + req.params.id);
};
// Handle hotel update form on PUT.
exports.hotel_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: hotel update PUT' + req.params.id);
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

    exports.costume_create_post = async function(req, res) {
console.log(req.body)
let document = new Costume();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.costume_type = req.body.costume_type;
document.cost = req.body.cost;
document.size = req.body.size;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

exports.hotel_create_post = async function(req, res) {
    console.log(req.body)
    let document = new hotel();
    // {"costume_type":"goat", "cost":12, "size":"large"}
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
    



    
