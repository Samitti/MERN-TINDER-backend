import express from 'express';
import mongoose from 'mongoose';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:ExxQO503vaNSh5Id@cluster0.duyfm.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Midlewares

// DB config 

// API Endpoints 
app.get('/', (req, res) => res.status(200).send('HELLO SAMI!!'));

// Listener
app.listen(port, () => console.log(`Listening on port: ${port}`));