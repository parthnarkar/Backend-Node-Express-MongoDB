const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {
  console.log(req.url, req.method , req.headers);
  // res.setHeader('Content-Type' , 'json');

  //TAKING USER INPUT
  if(req.url === '/') {
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page - Parth Narkar</title></head>');
    res.write('<body><h1>Enter your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name">');
    res.write('<label for="male">Male</label>');  
    res.write('<input type="radio" name="gender" value="male">Male</input>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" name="gender" value="female">Female</input>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    //here we wrote return below because once the response is ended then we can not the header again , that's why we have to end this, that's why we wrote "return"
    return res.end();
  } 
  else if(req.url.toLowerCase() ==='/submit-details' && req.method == "POST"){
    fs.writeFileSync('user.txt' , 'Parth Narkar');
    res.statusCode = 302;
    res.setHeader('Location' , '/');
    return res.end();
  }
  
  res.setHeader('Content-Type' , 'text/html');
  res.write('<html>');
  res.write('<head><title>Parth Narkar</title></head>');
  res.write('<body><h1>Parth Builds</h1></body>');
  res.write('</html>');
  res.end();

  // process.exit();
});

const PORT = 3000;
server.listen(PORT , () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});