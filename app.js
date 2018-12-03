const fs = require("fs");
const http = require("http");
const port = 3000;
const server = http.createServer(function(req, res) {
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contacts.html").pipe(res);
  } else if (req.url === "/contact" || req.url === "contact")
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contacts.html").pipe(res);
  } else if (req.url === "/api/people")
  const people = {name: 'Yulonda', age: 42};
  res.writeHead(200, {'Content-Type': 'application/json'})
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "people").pipe(res);
  }
  // console.log(req.url);
  // res.writeHead(200,{'Content-Type': 'application/json'})
  // const myReadStream = fs.createReadStream(__dirname + '/mod.html','utf8')
  // const myWriteStream = fs.createWriteStream(__dirname + '/goodbye.txt')
  // myReadStream.pipe(res)
  // res.end("CHECK THIS OUT!!!")
  // const obj = {
  //   name:"T'Keya",
  //   age: 25
  // }
  // //end function only takes strings
  // res.end(JSON.stringify(obj))

});


// myReadStream.on('data',(chunk) => {
//   console.log("new chunk");
//   myWriteStream.write(chunk)
// })

//
server.listen(port);
// console.log("listening to port", port);

//this can be handy if we need to get a full path for a file
// console.log(__dirname);

//utf8 says to use english sounds
// let data = fs.readFileSync('hello.txt', 'utf8')
// fs.writeFileSync('goodbye.txt',data)
//

// fs.unlinkSync('goodbye.txt')

// fs.readFile('hello.txt', 'utf8', (err, data) => {
//   fs.writeFile('goodbye.txt',data, (err) => {
//
//   })
// })
