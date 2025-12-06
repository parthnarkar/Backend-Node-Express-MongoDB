const http = require('http');

const server = http.createServer((req , res) => {
  console.log(req.url, req.method , req.headers);
  // res.setHeader('Content-Type' , 'json');

  if(req.url === '/') {
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page - Parth Narkar</title></head>');
    res.write('<body><h1>Home Page</h1></body>');
    res.write('</html>');
    //here we wrote return below because once the response is ended then we can not the header again , that's why we have to end this, that's why we wrote "return"
    return res.end();
  }
  else if(req.url === '/products'){
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Products Page - Parth Narkar</title></head>');
    res.write('<body><h1>Products Page</h1></body>');
    res.write('</html>');
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