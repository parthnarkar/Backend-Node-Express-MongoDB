const sumRequestHandler = (req , res) => {
  const numbers = [];
    req.on('data' , (chunk) => {
      console.log(chunk);
      numbers.push(chunk);
    })

    req.on('end' , () => {
      const bufferNumbers = Buffer.concat(numbers).toString();
      console.log(bufferNumbers);

      const params = new URLSearchParams(bufferNumbers);
      const bodyNumbers = Object.fromEntries(params);
      console.log(bodyNumbers);

      const result = Number(bodyNumbers.number1) + Number(bodyNumbers.number2);
      console.log(result);

      res.setHeader('Content-Type' , 'text/html');
    res.write(`
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
</head>
<body>
  <h1>Your Sum is ${result}</h1>
</body>
</html>
    `);
    return res.end();
    });
}

exports.sumRequestHandler = sumRequestHandler;