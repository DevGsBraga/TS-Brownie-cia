import express, { json } from 'express';
import productsRouter from './routes/products.js';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(json());


app.use('/api', productsRouter);

app.get('/', (req, res) => {
    res.json({msg: "Olá"})
})



const port = 3000;












app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
