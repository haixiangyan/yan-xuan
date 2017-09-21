var express = require('express');
var router = express.Router();
var shopping = require("../models/shopping");
var multiparty = require("multiparty")
var fs = require("fs");
var path = require('path');

router.get('/cart/:ID', function (req, res, next) { //已测
	var ID = req.params.ID;
	shopping.getCart(ID, function (err, docs) {
		if (err == 'success') {
			res.json({

				result: "success",
				data: docs
			})
		} else {
			res.json({

				result: "error"
			})
		}
	})

});
router.post('/addToCart', function (req, res, next) { //已测

	var ID = req.body.ID;
	var Type = req.body.type;
	var number = req.body.number;
	var userID = req.body.userID;
	var obj = {
		ID: ID,
		type: Type,
		number: number,
		userID: userID
	};
	shopping.addToCart(obj, function (err, docs) {
		if (err == "success") {
			res.json({
				result: "success",
				cartList: docs
			})
		} else {
			res.json({

				result: "error"
			})
		}

	})
});
router.delete('/cart/:userID/:ID', function (req, res, next) { //已测
	var goodsID = req.params.ID;
	var userID = req.params.userID;
	shopping.deleteItemFromCart(userID, goodsID, function (err, docs) {
		if (err == "error") {
			res.json({
				result: "error"
			})
		} else {
			res.json({
				result: "success",
				cartList: docs
			})
		}
	})
})
router.post('/changeNumebr', function (req, res, next) { //已测，输入修改后的数字
	var goodsID = req.body.ID;
	var userID = req.body.userID;
	var type = req.body.type;
	var number = req.body.number;
	shopping.changeItemInCart(userID, goodsID, type, number, function (err, docs) {
		if (err == "error") {
			res.json({
				result: "error"
			})
		} else {
			res.json({
				result: "success",
				cartList: docs
			})
		}
	})
})
router.post('/changeCart', function (req, res, next) { //已测

	var cartList = req.body.cartList;
	var userid = req.body.userID;
	shopping.changeCartList(userid, cartList, function (err, docs) {
		if (err == "error") {
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
router.post('/order', function (req, res, next) { //已测
	var goodsList = req.body.goodsList;
	var userID = req.body.userID;
	var address = req.body.address;
	var totalFee = req.body.totalFee;
	var obj = {
		goodsList: goodsList,
		userID: userID,
		address: address,
		totalFee: totalFee
	};
	shopping.makeOrder(obj, function (err, docs) {
		if (err == "success") {
			res.json({
				result: "success",
				orderID: docs
			})
		} else {
			res.json({
				result: "error",
				warning: docs
			})
		}

	})

})
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
router.post('/pay', function (req, res, next) {
	var payID = req.body.payID;
	var orderID = req.body.orderID;
	shopping.pay(orderID, payID, function (err, docs) {
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
router.post('/confirmGoods', function (req, res, next) {
	var orderid = req.body.orderID;
	shopping.confirmGoods(orderid, function (err, docs) {
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
router.post('/comment', function (req, res, next) {
	var form = new multiparty.Form({
		uploadDir: "./dist/static/img/commentImage/"
	})
	form.parse(req, function (err, fields, files) {
		var goodsID = fields.goodsID[0];
		var userID = fields.userID[0];
		var content = fields.content[0];
		var commentDate = fields.commentDate[0];
		var type = fields.type[0];
		var orderID = fields.orderID[0];
		fs.readdir('./dist/static/img/commentImage/' + goodsID, function (err, file) { //如果该商品还没有人上传评论图片
			if (err) {
				fs.mkdir('./dist/static/img/commentImage/' + goodsID, function (err) { //新建文件夹存放评论图片
					if (err) {
						throw err;
					}
					console.log('make dir success.');
					fs.mkdir('./dist/static/img/commentImage/' + goodsID + '/' + commentDate, function (err) { //新建存放当前评论图片的文件夹
						if (err) {
							throw err;
						}

						console.log('make detail dir success.');
						var arr = [];
						for (var i = 0; i < files.picture.length; i++) { //存放图片
							if (files.picture[i].originalFilename) {
								var picture = "/static/img/commentImage/" + goodsID + '/' + commentDate + '/' + files.picture[i].originalFilename;
								arr.push(picture);
								fs.rename(files.picture[i].path, './dist/static/img/commentImage/' + goodsID + '/' + commentDate + '/' + files.picture[i].originalFilename, function (err) {
									if(err){
										console.log(err)
									}else{
										//
									}
								})
							}
						}
						var obj = {
							goodsID: goodsID,
							userID: userID,
							orderID: orderID,
							content: content,
							commentDate: commentDate,
							type: type,
							picture: arr
						}
						shopping.deliverComment(obj, function (err, docs) {
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
					});

				});
			} else {
				fs.mkdir('./dist/static/img/commentImage/' + goodsID + '/' + commentDate, function (err) { //新建存放当前评论图片的文件夹
					if (err) {
						throw err;
					}
					console.log('make detail dir success.');
					var arr = [];
					for (var i = 0; i < files.picture.length; i++) { //存放图片
						if (files.picture[i].originalFilename) {
							var picture = "/static/img/commentImage/" + goodsID + '/' + commentDate + '/' + files.picture[i].originalFilename;
							arr.push(picture);
							fs.rename(files.picture[i].path, './dist/static/img/commentImage/' + goodsID + '/' + commentDate + '/' + files.picture[i].originalFilename, function (err) {
								console.log(err)
							})
						}


					}
					var obj = {
						goodsID: goodsID,
						userID: userID,
						orderID: orderID,
						content: content,
						commentDate: commentDate,
						type: type,
						picture: arr
					}
					shopping.deliverComment(obj, function (err, docs) {
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
				});
			}
		});
	})
})


module.exports = router;