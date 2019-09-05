import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

export function setEnvironments(app) {
    if (process.env.NODE_ENV !== 'production') { //if we're in development mode...
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}
function setDevEnv(app) {
    console.log("setting the development environment");
    app.use(bodyParser.json);
    app.use(morgan('dev'));
    app.use(cors());
}
function setProdEnv(app) {
    app.use(bodyParser.json);
    app.use(express.static(__dirname + '/../dist')); //take build folder and serve it as static content
    console.log("setting the production environment");

}