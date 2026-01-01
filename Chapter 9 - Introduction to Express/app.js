//External Module
const express = require('express');

//Local Module
const requestHandler = require('./user');

const app = express();

app.use("/", (req, res, next) => {
    console.log("Came in First Middleware", req.url, req.method);
    next(); //if this is not put then it will not move to second middleware and will be stuck until first middleware gives any response
});

app.use("/submit-details", (req, res, next) => {
    console.log("Came in Second Middleware", req.url, req.method);

    //now no need to write the content type in express , because express is intelligent
    res.send('<p>Parth Builds</p>');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});


/** IMPORTANT POINTS
 * Order Matters
 * Cannot call next() after send()
 * "/" matches everything
 * Calling res.send implicitly calls res.end()
 */