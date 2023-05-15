const express = require('express');
var router = express.Router();
const Customer = require('../models/customer');
const Product = require('../models/product')
const Payment = require('../models/payment')
const Order = require('../models/order')
const Admin = require('../models/admin')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/hadri');
var db=mongoose.connection;
app=express();
router.post('/admin_login',async (req,res,next) => {
	console.log("Request from webmaster");
    res.set({
		'Access-Control-Allow-Origin':'*'
	});
	try{
		const pass = req.body.pass;
		const name= req.body.name;
		const opass = await Admin.find({name:name});	
		console.log(opass);
		if(pass==opass[0].pass){
            res.json({auth:'true',name:req.body.name,_id:opass[0]._id});
        }
        else{
            res.json({auth:'false'});
        }
	}catch(err){
		console.log(err);
		res.sendStatus(500);
	}
});

router.post('/listorders',async (req,res,next) => {
	console.log("Request from webmaster");
    res.set({
		'Access-Control-Allow-Origin':'*'
	});
	try{
		const custid = req.body.custid;
		const orders = await Order.find({custid:custid});	
		console.log(orders);
		if(orders.length == 0){
			console.log("Empty order list");
			res.json({msg:"empty order list"});
		}
		else{
			res.json({orders});
		}
	}catch(err){
		console.log(err);
		res.sendStatus(500);
	}
});
router.post('/user_login',async (req,res,next) => {
	console.log("Request from webmaster");
    res.set({
		'Access-Control-Allow-Origin':'*'
	});
	try{
		const pass = req.body.pass;
		const name= req.body.name;
		console.log(pass);
		console.log(name);
		const opass = await Customer.find({name:name});	
		console.log(opass);
		if(pass==opass[0].pass && opass.length!=0){
            res.json({auth:'true',name:req.body.name,_id:opass[0]._id});
        }
        else{
            res.json({auth:'false'});
        }
	}catch(err){
		console.log(err);
		res.sendStatus(500);
	}
});
router.get("/products",async function(req,res,next){
	res.set({
		'Access-Control-Allow-Origin':'*'
	});
	try{
		const products = await Product.find();
		res.json( products);
	}catch(err){
		console.log(err);
		res.sendStatus(500);
	}
});

router.get("/getorders",async function(req,res,next){
	res.set({
		'Access-Control-Allow-Origin':'*'
	});
	try{
		const orders = await Order.find();
		res.json( orders);
	}catch(err){
		console.log(err);
		res.sendStatus(500);
	}
});


router.post("/payment",function(req,res){
    console.log("req received hari");
    res.set({
		'Access-Control-Allow-Origin':'*'
	});
	var name = req.body.name;
	var amount =req.body.amount;
	var cardno = req.body.cardno;
	var cvv =req.body.cvv;
	var edate = req.body.edate;
	var data = {
		"name": name,
		"amount":amount,
		"cardno":cardno,
		"cvv":cvv,
        "edate":edate
	}
	console.log(name);
	db.collection('payments').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("payment Record inserted Successfully");
		res.json({"msg":"success"});

	});
})
router.get('/get_all_payments',async (req,res,next) => {

    res.set({
		'Access-Control-Allow-Origin':'*'
	});
	try{
		const result = await Payment.find();
        console.log(result);
		if(result==[]){
            res.json({});
        }
        else{
            res.json(result);
        }
	}catch(err){
		console.log(err);
		res.sendStatus(500);
	}
});


router.post("/order",async function(req,res){
  console.log("Accepted orders");
  const order = new Order({
    odate: req.body.odate,
    grandtotal: req.body.grandtotal,
    custid: req.body.custid,
    orderList: req.body.orderList
  });
  console.log(order);
  try {
    await order.save();
    res.send(order);
  } catch (ex) {
    console.log(ex.message);
  }
})
 module.exports = router;
