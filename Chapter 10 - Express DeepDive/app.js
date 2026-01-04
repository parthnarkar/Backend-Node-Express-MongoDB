const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    console.log("First Middleware", req.url, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("Second Middleware", req.url, req.method);
    next();
});

// app.use("/", (req, res, next) => {
//     console.log("Third Middleware", req.url, req.method);
//     res.send("<p>I am Third Middleware</p>");
// });

app.get("/", (req, res, next) => {
    console.log("Handling / for GET", req.url, req.method);
    res.send("<p>Welcome Parth Builds</p>");
});

app.get("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for GET", req.url, req.method);
    res.send(`
        <h1>Please give your details here</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter Name" />
            <input type="email" name="email" placeholder="Enter Email" />
            <input type="submit" />
        </form>
    `);
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, end) => {
    console.log("Handling /contact-us for POST", req.url, req.method, req.body);
    res.send("<p>We will contact you shortly</p>");
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});