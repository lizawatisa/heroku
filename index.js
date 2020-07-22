//Midleware
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser'); //import body parser module

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //I use bodyParser (configuration to configure that my API will encode the URL)
//I accept json in the body

var port = process.env.PORT || 8080; // set our port

//routing
var router = express.Router();
router.get('/', function(req, res) {
	res.json({ message: 'yaho..hooray! welcome to our api!' });
});

router.get('/hello', (req, res)=>{
	res.json({ message: 'Hello world' });
});

router.get('/goodbye/:name', (req,res)=>{
	res.json({ message: 'Hello world ' +req.params.name});
})

router.post('/sum', (req, res)=>{
	var sum = req.body.num1 + req.body.num2
	res.json({ message: 'total is ' +sum});
})

app.use('/api', router);

app.listen(port);

console.log('Magic happens on port ' + port);