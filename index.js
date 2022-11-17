const express = require('express')
const port = 2500
const app = express()
const path = require('path')

const mongoose = require('mongoose')
const { urlencoded } = require('body-parser')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/airline');
}

const FlySchema = new mongoose.Schema({
    Name: String,
    Email: String,
    message: String
  });

  const Pilot = mongoose.model('Pilot', FlySchema);

  app.use('/static', express.static('static'));
  app.use(express.urlencoded());

  app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
  })

  app.post('/contact', (req,res)=>{
    let myData = new Pilot(req.body)
    myData.save().then(()=>{
        res.send('we have recieved your message and will contact you soon')
    }).catch(()=>{
        res.send(`unfortunately your data wasn't saved, please try again after sometime.`)
    })
  })

  app.listen(port, ()=>{
    console.log(`The application has started on ${port}`)
  })
