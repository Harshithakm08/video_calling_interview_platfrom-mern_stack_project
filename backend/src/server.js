import express from 'express';
import { ENV } from './lib/env.js';

const app = express();

console.log(ENV.DB_URL);
console.log(ENV.PORT);

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'sucess from api' });
})

app.listen(ENV.PORT,() =>console.log('Server running on port 3000'));