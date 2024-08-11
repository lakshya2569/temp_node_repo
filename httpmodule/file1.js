const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.end("hello welcome to the homepage")
   
    }
    if(req.url === '/about'){
        res.end("here the history of our page")
       
    }
    else{res.end(`
        <h1>0ops!</h1>
        <p>We cant seem to find the mage<p>
        <a href = "/">backhome</a>`)}
    
})

server.listen(5000)