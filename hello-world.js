
/////////////////////// TASK 1 ///////////////////////////
console.log('HELLO WORLD');

/////////////////////// TASK 2 //////////////////////////
const http = require('http');
const newHello = '<h1> Hello Node!!!!!!!!</h1>';

const server = http.createServer(function (req, res) {
    res.write(newHello);
    res.end();
});

server.listen(3000, (err) => {
    err ? console.log(err) : console.log('The Server is Running on port 3000');
});

//////////////////////// TASK 3 ///////////////////////////////

const fs = require("fs")
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("welcome.txt", "utf8"));
    }
});

fs.readFile('hello.txt', 'utf8', function (err, data) {
    console.log(data);
});

////////////////////////// TASK 4 ////////////////////////////

const passwordGenerator = require('./password-generator');
passwordGenerator.passGenerator();


///////////////////////// TASK 5 ///////////////////////////

const transporter = require('./email-sender');

console.log(transporter.emailSender);