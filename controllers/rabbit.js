var rabbit = require('../models/rabbit');
// List of all rabbits
exports.rabbit_list = async function(req, res) {
    try{
    therabbits = await rabbit.find();
    res.send(therabbits);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific rabbit.
exports.rabbit_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: rabbit detail: ' + req.params.id);
};
// Handle rabbit create on POST.
exports.rabbit_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: rabbit create POST');
};
// Handle rabbit delete form on DELETE.
exports.rabbit_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: rabbit delete DELETE ' + req.params.id);
};
// Handle rabbit update form on PUT.
exports.rabbit_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: rabbit update PUT' + req.params.id);
};
exports.rabbit_view_all_Page = async function(req, res) {
    try{
    therabbits = await rabbit.find();
    res.render('rabbit', { title: 'rabbit Search Results', results: therabbits });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.rabbit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new rabbit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"rabbit_type":"goat", "cost":12, "size":"large"}
    document.rabbit_color = req.body.rabbit_color;
    document.rabbit_breed = req.body.rabbit_breed;
    document.rabbit_price = req.body.rabbit_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }
  
// for a specific rabbit.
exports.rabbit_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await rabbit.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    exports.rabbit_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
       ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await rabbit.findById( req.params.id)
        // Do updates of properties
        if(req.body.rabbit_color)
        toUpdate.rabbit_color = req.body.rabbit_color;
        if(req.body.rabbit_breed) toUpdate.rabbit_breed = req.body.rabbit_breed;
        if(req.body.rabbit_price) toUpdate.rabbit_price = req.body.rabbit_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
       failed`);
        }
       };
    exports.rabbit_delete = async function(req, res) {
        console.log("delete " + req.params.id)
        try {
        result = await rabbit.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
        }
        exports.rabbit_view_one_Page = async function(req, res) {
            console.log("single view for id " + req.query.id)
            try{
            result = await rabbit.findById( req.query.id)
            res.render('rabbitdetail',
            { title: 'rabbit Detail', toShow: result });
            }
            catch(err){
            res.status(500)
            res.send(`{'error': '${err}'}`);
            }
            };
            exports.rabbit_create_Page = function(req, res) {
                console.log("create view")
                try{
                res.render('rabbitcreate', { title: 'rabbit Create'});
                }
                catch(err){
                res.status(500)
                res.send(`{'error': '${err}'}`);
                }
                };
                exports.rabbit_update_Page = async function(req, res) {
                    console.log("update view for item "+req.query.id)
                    try{
                    let result = await rabbit.findById(req.query.id)
                    res.render('rabbitupdate', { title: 'rabbit Update', toShow: result });
                    }
                    catch(err){
                    res.status(500)
                    res.send(`{'error': '${err}'}`);
                    }
                   };
                   exports.rabbit_delete_Page = async function(req, res) {
                    console.log("Delete view for id " + req.query.id)
                    try{
                    result = await rabbit.findById(req.query.id)
                    res.render('rabbitdelete', { title: 'rabbit Delete', toShow:
                    result });
                    }
                    catch(err){
                    res.status(500)
                    res.send(`{'error': '${err}'}`);
                    }
                    };
    