const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.write(
      `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calculator</title>
      </head>
      <body>
        <h1>Welcome to Calculator</h1>
        <p><a href="/calculator">Explore More</a></p>
      </body>
      </html>
      `
    );
  }
  else if(req.url.toLowerCase() === "/calculator"){
    res.write(
      `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
</head>
<body>
  <h1>Calculator</h1>
  <form action="/calculate-result" method="POST">
    <input type="number" name="number1" placeholder="Number 1"></input>
    <input type="number" name="number2" placeholder="Number 2"></input>
    <button type="submit">Calculate</button>

  </form>
</body>
</html>
      `
    );
  }
  else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler (req , res);
  }
};

exports.requestHandler = requestHandler;