const express = require('express');
const app = express();

require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT;


app.get('/', (req,res) => {
    res.send("This is home page");
})
app.listen(PORT, () =>{
    console.log(`Site is running on port no. ${PORT}`);
})