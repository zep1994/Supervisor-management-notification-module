const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const url = "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers"

app.use(cors())
app.use(express.json())

app.get('/', function(req, res, next) {
  res.send("Home")
})

app.get('/api/supervisors', function (req, res, next){
      fetch("https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers")
      .then(res => res.json())
      .then((json) => {
        for (let i of json) {
          delete i['phone']
          delete i['email']
          delete i['identificationNumber']
          if ( isNaN(i['jurisdiction']) === false) {
            delete i['jurisdiction']
          }
        }
        json.sort(function (a, b) {
          return a["jurisdiction"] > b["jurisdiction"]
        })
        res.send(json)
      })
      .catch(err => console.log(err))
})

app.post('/api/submit', function (req, res) {
    const body = req.body
    console.log(body)
    res.json(body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

