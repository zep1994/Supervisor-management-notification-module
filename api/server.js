const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const url = "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers"

app.use(cors())
app.use(express.json())

app.get('/', function(req, res, next) {
  res.send("Home")
})

function containsNumbers(str) {
  return /\d/.test(str);
}

app.get('/api/supervisors', function (req, res, next){
      fetch("https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers")
      .then(res => res.json())
      .then((json) => {
          json = json.sort((a, b) => {
            if (a.firstName > b.firstName) return 1;
            else if (a.firstName < b.firstName) return -1;
            if (a.lastName > b.lastName) return 1;
            else if (a.lastName < b.lastName) return -1;
            if (a.jurisdiction > b.jurisdiction) return 1;
            else if (a.jurisdiction < b.jurisdiction) return -1;
        })
          for (let i of json) {
            delete i['phone']
            delete i['email']
            delete i['identificationNumber']
            if (containsNumbers(i['jurisdiction']) === true) {
              delete i['jurisdiction']
            }
            if (/\d/.test(i['jurisdiction']) === true) {
              delete i['jurisdiction']
            }

            
        }
        res.send(json)
      })
      .catch(err => console.log(err))
})

app.post('/api/submit', function (req, res) {
    const body = req.body
    console.log(body)
    if (body.firstName == "" || body.lastName == "" || body.supervisor == "") {
      console.log("Please fill out field")
    } else {
      console.log(body)
      res.json(body)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

