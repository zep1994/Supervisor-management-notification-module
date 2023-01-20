const express = require('express')
const app = express()
var router = express.Router();
var request = require('request');
const cors = require('cors')
const port = 3000


app.use(cors())
app.use(express.json())

// const fetch = require('node-fetch')
//   .then(({default: fetch}) => fetch(...args));

app.get('/', function (req, res, next){
    // try {
    //     const apiResponse = await fetch("https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers")
    //     const apiResponseJson = await apiResponse.json()

    //     console.log(apiResponseJson)
    //     res.send("Loading...")
    // } catch {
    //     console.log("error")
    // }
    res.send("load")
})

app.post('/hello', function (req, res) {
    const body = req.body
    console.log(body)
    res.json(body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

