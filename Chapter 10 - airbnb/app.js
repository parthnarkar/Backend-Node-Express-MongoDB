//External Module
const bodyParser = require('body-parser');
const express = require('express');

//Local Module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

//add status 404
app.use((req, res, next) => {
  res.status(404).send("<h1>404 Your Page is not found on airbnb</h1>");
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});