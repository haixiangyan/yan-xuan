var express = require('express');
var router = express.Router();
var goods = require("../models/goods");
var temp = require("../models/temp");
router.post('/', function (req, res, next) {
	res.send('respond with a resource');
})
router.get('/goods/:ID', function (req, res, next) {
	var ID = req.params.ID;
	goods.getGoods(ID, function (err, docs) {
		if (err == "success") {
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
})


router.get('/topSale', function (req, res, next) {
	goods.getGoodsBySale(function (err, docs) {
		if (!err) {
			var arr = [];
			for (var i = 0; i < docs.length; i++) {
				var obj = {
					ID: docs[i].ID,
					topName: docs[i].topName,
					subName: docs[i].subName,
					price: docs[i].price,
					label: docs[i].label,
					chara: docs[i].chara,
					headImage: docs[i].headImage[0],
				};
				arr.push(obj);
			}
			res.json({
				result: "success",
				data: arr
			})
		} else {
			res.json({
				result: "error"
			})
		}
	})
})
router.get('/recentSale', function (req, res, next) {
	goods.getGoodsByDate(function (err, docs) {
		if (!err) {
			var arr = [];
			for (var i = 0; i < docs.length; i++) {
				var obj = {
					ID: docs[i].ID,
					topName: docs[i].topName,
					subName: docs[i].subName,
					price: docs[i].price,
					label: docs[i].label,
					chara: docs[i].chara,
					headImage: docs[i].headImage[0]
				};
				arr.push(obj);
			}
			res.json({
				result: "success",
				data: arr
			})
		} else {
			res.json({
				result: "error"
			})
		}
	})
});
router.get('/displayGoods', function (req, res, next) {
	goods.getGoodsByAllType(function (err, docs) {
		if (err == "success") {
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
})
router.get('/category', function (req, res, next) {
	goods.getCategory(function (err, docs) {
		if (!err) {
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
})
router.post('/certainCategory', function (req, res, next) {
	var category = req.body.category;
	goods.getCertainCategory(category, function (err, docs) {
		if (err == "success") {
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
})
router.post('/subCategoryGoods', function (req, res, next) {
	var subCategory = req.body.subCategory;
	goods.getCertainSubCategoryGoods(subCategory, function (err, docs) {
		if (!err) {
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
})
router.post('/search', function (req, res, next) {
	var keyword = req.body.key;
	goods.search(keyword, function (err, docs) {
		if (err == "success") {
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
})

router.get("/topic", function (req, res, next) {
	goods.showTopic(function (err, docs) {
		if (!err) {
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
})
router.get("/comment/:goodsID", function (req, res, next) {
	var goodsID = req.params.goodsID;
	goods.getComment(goodsID, function (err, docs) {
		console.log(docs)
		if (err == "success") {
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
})
router.post('/order', function (req, res, next) {
	var goodsID = req.body.goodsID;
	var type=req.body.type;
	var number=parseInt(req.body.number);
	var address=req.body.address;
	var totalFee=req.body.totalFee;
	var userID=req.body.userID;
	var price=req.body.price;
	var picture=req.body.picture;
	var obj={
		goodsID:goodsID,
		type:type,
		number:number,
		address:address,
		totalFee:totalFee,
		userID:userID,
		price:price,
        picture:picture
	}
	goods.makeOrder(obj, function (err, docs) {
		if (err == "success") {
			res.json({
				result: "success",
				orderID: docs
			})
		} else {
			res.json({
				result: "error",
				type: docs
			})
		}

	})
})


module.exports = router;