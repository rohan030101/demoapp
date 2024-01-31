const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());


app.post('/login', (req,res)=>{
    const {username,password} = req.body;
    res.json({sucess:true,message:"Login Sucessful"});
    }
)


app.listen(port, ()=>{
    console.log(`Server Listening on port http://localhost:${port}`);
}) 