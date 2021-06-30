const jwt = require('jsonwebtoken');
const phoneModel = require('../models/phone');

module.exports = {
    registerPhone: async(req, res) => {
        const p = new phoneModel(req.body);
        try {
            await p.save();
            res.send(p);
        } catch (error) {
            res.status(500).send(error); 
        }
    },
    getAllphone: async(req, res) => {
        const p = await phoneModel.find({});
        try {
            res.send(p);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updatePhone: async(req, res) => {
        try {
            const p = await phoneModel.findByIdAndUpdate(req.params.id, req.body);
            await phoneModel.save();
            res.send(p);
        } catch (error) {
            res.status(500).send(error);        
        }
    },
    deletePhone: async(req, res) => {
        try {
            const p = await phoneModel.findByIdAndDelete(req.params.id, req.body);
            if(!p) res.status(404).send("Phone not found");
            else res.status(200).send("Deleted");
        } catch (error) {
            res.status(500).send(error);        
        }
    }
}