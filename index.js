import express from 'express'
import bodyParser from 'body-parser'

import tutorialRoutes from './routes/tutorialRoutes.js'


const PORT = process.env.PORT || 5000;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.use('/api/tutorials', tutorialRoutes);


app.get('/', (req, res)=>{
    res.send("This is the home page.")

});

app.listen(PORT, (err)=>{
    if(err) console.err(err);
    console.log(`listening to the server : http://localhost:${PORT}`);
})
