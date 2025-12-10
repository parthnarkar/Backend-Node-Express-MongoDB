const http = require('http');

const server = http.createServer((req , res) => {
  console.log(req.url , req.method , req.headers);

  if(req.url === '/'){
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<body><h1> Welcome to Home Page </h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url === '/men'){
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<body><h1> Welcome to Men Page </h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url === '/women'){
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<body><h1> Welcome to Women Page </h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url === '/kids'){
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<body><h1> Welcome to Kids Page </h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url === '/cart'){
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<body><h1> Welcome to Cart Page </h1></body>');
    res.write('</html>');
    return res.end();
  }
});


PORT = 3000;
server.listen(PORT , () => {
  console.log(`Server running at ${PORT}`);
});