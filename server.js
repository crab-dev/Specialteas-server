const express = require("express")
const cors = require("cors")
const pool = require("./db")
const app = express()
const port = 5000

app.use(cors())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.get("/", async (req, res) => {
  let conn 
  try {
    conn = await pool.getConnection()
    let query = "SELECT * FROM milkTeas"
    let rows = await conn.query(query)
    res.send(rows)
  } catch (err) {
    throw err
  } finally {
    if (conn) return conn.release()
  }
})

// app.get("/", (req, res) => {
//   res.send(SPECIAL_TEAS)
//   console.log("Booped")
// })

app.listen(port, () => console.log(`Listening on port ${port}`))

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
