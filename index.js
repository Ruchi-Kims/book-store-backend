const express = require('express')
const app = express()

require('dotenv').config()


// DiStqFTi6vR5SPZM
// getting-started.js
const mongoose = require('mongoose');

const port = process.env.PORT || 5000


async function main() {
  await mongoose.connect(process.env.DB_URL);
app.get('/', (req, res) => {
  res.send('Book store server is running!')
})
}

main().then(() => console.log("Mongo connect successfuly !")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
