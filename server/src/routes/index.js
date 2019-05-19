import express from 'express';
const routes = express.Router();
import initialvalues from '../fakeData/initialvalues';

routes.get('/initialvalues', (req, res) => {
    res.json(initialvalues);
})

module.exports = routes;