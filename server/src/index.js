import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
const routes = require('./routes');

let app = express();
app.server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'));

app.use(cors());

app.use('/api', routes);

app.server.listen(process.env.PORT || 8000, () => {
    console.log(`Started on port ${app.server.address().port}`);
});