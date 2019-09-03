import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export function setEnvironments(app) {
    if (process.env.NODE_ENV !== 'production') { //if we're in development mode...
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}
function setDevEnv(app) {
    console.log("setting the development environment");
    app.use(morgan('dev'));
    app.use(cors());
}
function setProdEnv(app) {
    console.log("setting the production environment");
}