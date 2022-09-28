const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const studentRouter = require('./routers/student');
const { db } = require('./config/dbConfig');
require('dotenv').config();
db();
app.options('*', cors())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('welcome to student rest api!')
})
app.use('/api',studentRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
