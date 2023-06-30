import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './routes'

dotenv.config();

const app = express ();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
})

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL)
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());
