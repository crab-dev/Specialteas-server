const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")

const SPECIAL_TEAS = [
  {
    id: 1,
    type: "special tea",
    tea: "Boopy Tea"
  },
  {
    id: 2,
    type: "special tea",
    tea: "Pheasantea"
  },
  {
    id: 3,
    type: "special tea",
    tea: "Boppy Tea"
  },
  {
    id: 4,
    type: "special tea",
    tea: "You're A Tea!"
  },
  {
    id: 5,
    type: "special tea",
    tea: "Bippy Tea"
  },
  {
    id: 6,
    type: "special tea",
    tea: "Yoink Tea"
  },
  {
    id: 7,
    type: "special tea",
    tea: "Poink Tea"
  },
  {
    id: 8,
    type: "special tea",
    tea: "Hoopla Tea"
  },
  {
    id: 9,
    type: "special tea",
    tea: "Last Tea"
  },
]

app.use(cors())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})


app.listen(port, () => console.log(`Listening on port ${port}`))

app.get("/", (req, res) => {
  res.send(SPECIAL_TEAS)
  console.log("Booped")
})


