const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/db');
const router = require('./routes/route');
const app = express();
const cors = require('cors')
dotenv.config();
const mongodb_url = process.env.MONGO_URI

app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    res.send("HI")
})

app.use('/',router);
app.get('*',(req,res)=>{
    res.send("Page not Found")
});

const PORT = 3000;

const start = async () => {
    try {
        await connectDB(mongodb_url);
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();
