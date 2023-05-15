var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
const Product = require('./models/product');
const customer = require('./models/customer');
var cors = require('cors');
mongoose.connect('mongodb://127.0.0.1:27017/hari');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('connected', ()=>{
	console.log("connection succeeded");
});
const route= require('./router/route');
const product = require("./models/product");
var app=express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api',route);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post("/sign_up",async function(req,res){
	var name = req.body.name;
	var pass = req.body.pass;
	const result = await customer.find({},{_id:1}).sort({_id:-1}).limit(1);
	var id =result[0]._id+1
	var data = {
		"_id":id,
		"name": name,
		"pass":pass,
	}
	console.log("new "+name);
	db.collection('customers').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Customer inserted Successfully");

	});
})

app.post("/register",async function(req,res){
	var name = req.body.name;
	var pass = req.body.pass;
	var oname = req.body.oname;
	var street = req.body.street;
	var city = 	req.body.city;
	var zip = req.body.zip;
	const query = await customer.find({name:name,pass:pass});
	if(query.length > 0){
		res.json({msg:"False"});
	}
	else{
		const result = await customer.find({},{_id:1}).sort({_id:-1}).limit(1);
		var id =result[0]._id+1
		var data = {
			"_id":id,
			"name": name,
			"pass":pass,
			"oname":oname,
			"street":street,
			"city":city,
			"zip":zip,
		}
		console.log("new "+name);
		db.collection('customers').insertOne(data,function(err, collection){
			if (err) throw err;
			console.log("Customer inserted Successfully");
			res.json({msg:"True"});
		});
	}
})


app.post("/addpro",async function(req,res){
	console.log("requested product insertion");
	var name = req.body.name;
	var category = req.body.category;
	var description = req.body.description;
	var price = req.body.price;
	var unit = req.body.unit;
	var image = req.body.image;
	console.log(name+category+description+price+unit+image);
	var data = {
		"name": name,
		"category":category,
		"description":description,
		"price":price,
		"unit":unit,
		"image":image
	}
	console.log("new "+name);
	db.collection('Product').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Product inserted Successfully");

	});
})
app.get('/',function(req,res){
	res.set({
		'Access-control-Allow-Origin': '*'
	});
}
);
app.listen(5555,()=>{
	console.log("server listening at port 5555");
});
