var express = require('express'),
    app = express();
    app.use(express.bodyParser());

var ARTICLES = [
{
    id: 1,
        title: 'How to write a JavaScript Framework',
        author: 'Tomhuda Katzdale',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
    id: 2,
    title: 'Chronicles of an Embereño',
    author: 'Alerik Bryneer',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
    id: 3,
    title: 'The Eyes of Thomas',
    author: 'Yehuda Katz',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
];

var PHOTOS = [
{ id: 1, src: "/images/potd.png" },
{ id: 2, src: "/images/yohuda.jpg" },
{ id: 3, src: "/images/easter.jpg" }
];


/*
app.post('/token', function(req, res) {
    console.log(req.body);
    if (req.body.grant_type === 'password') {
        if (req.body.username === 'cooper' && req.body.password === 'iscool') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            var content = "{'access_token': 'secret'}";
            res.end(content);
        } else {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            var content = "{'error': 'invalid_grant'}";
            res.end(content);
        }
    } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        var content = "{'error': 'unsupported_grant_type'}";
        res.end(content);
    }
});
*/
var simpleAuth = require('./middleware.js');
app.use(simpleAuth);
app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Listening on port 3000...');
