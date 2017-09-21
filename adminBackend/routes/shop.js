var express = require('express');
var router = express.Router();
var shopping = require("../models/shopping");


router.delete('/order/:orderID',function(req,res,next){
	   var orderid = req.params.orderID;
	   shopping.deleteOrder(orderid,function(err,docs){
		   if (err=="error") {
			res.json({
				result: "error"
			})
		} else {
			res.json({
				result: "success"
			})
		}
	   })
})

router.get('/order/:orderID', function (req, res, next) { //已测
	var orderid = req.params.orderID;
	shopping.getOrder(orderid, function (err, docs) {
		if (!err) {
			res.json({
				result: "success",
				order: docs[0]
			})
		} else {
			res.json({
				result: "error"
			})
		}
	})

})
router.get('/customerOrder/:userID', function (req, res, next) { //已测
	var orderid = req.params.userID;
	shopping.getCustomerOrder(orderid, function (err, docs) {
		if (err == "success") {
			res.json({
				result: "success",
				order: docs
			})
		} else {
			res.json({
				result: "error"
			})
		}
	})
})

router.post('/deliverGoods', function (req, res, next) {
	var orderID = req.body.orderID;
	var expressCompany = req.body.expressCompany;
	var expressNumber = req.body.expressNumber;
	shopping.deliverGoods(orderID, expressCompany, expressNumber, function (err, docs) {
		if (err == "success") {
			res.json({
				result: "success"
			})
		} else {
			res.json({
				result: "error"
			})
		}
	})

})

module.exports = router;