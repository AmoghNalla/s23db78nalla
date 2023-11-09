var hotel = require('../models/hotel');
// List of all hotels
exports.hotel_list = function(req, res) {
res.send('NOT IMPLEMENTED: hotel list');
};
// for a specific hotel.
exports.hotel_detail = function(req, res) {
res.send('NOT IMPLEMENTED: hotel detail: ' + req.params.id);
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
