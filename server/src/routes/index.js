import express from 'express';
import fs from 'fs';
import initialvalues from '../fakeData/initialvalues';
const routes = express.Router();

routes.get('/initialvalues', (req, res) => {
    res.json(initialvalues);
})

routes.post('/savevalues', (req, res) => {
    fs.writeFile (__dirname + '/../fakeData/savedValues.json', JSON.stringify(req.body.userData), function(err) {
        if (err) throw err;
        console.log('Data Saved!');
        }
    );
    console.log(req.body.userData);
    res.send();
})


module.exports = routes;