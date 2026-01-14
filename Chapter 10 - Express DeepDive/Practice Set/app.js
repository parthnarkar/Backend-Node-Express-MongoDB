const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require('./utils/pathUtil');

const app = express();

const hostRouter = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');

app.use(bodyParser.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
    res.status(400).sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});