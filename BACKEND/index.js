const tasks = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config()
const exp = require("express");
const cors = require('cors');
const app = exp();
const port = 8000;

app.use(cors());
app.use(exp.json());

app.use('/api/v1', tasks)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`app listining on port: https://localhost:${port}/api/v1/`)
        });
    }catch(error){
        console.log(error);
    }
}

start();
