const express = require('express')
const app = express()
var router = express.Router();
var request = require('request');
const cors = require('cors')
const port = 3000

const url = "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers"

app.use(cors())
app.use(express.json())

// const fetch = require('node-fetch')
//   .then(({default: fetch}) => fetch(...args));

app.get('/api/supervisors', function (req, res, next){
      fetch("https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers")
      .then(res => res.json())
      .then((json) => {
        res.send(json)
      })
      .catch(err => console.log(err))
})

app.post('/hello', function (req, res) {
    const body = req.body
    console.log(body)
    res.json(body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

