var express = require('express');
var router = express.Router();
var admin = require("../models/admin");
router.patch('/changeInformation', function (req, res, next) {
    var obj = req.body.obj;
    admin.changeInformation(obj, function (err, docs) {
        if (err == "error") {
            res.json({
                result: "error",
            })
        } else {
            res.json({
                result: "success"
            })
        }

    })
})
router.get('/sale', function (req, res, next) {
    admin.getSaleByCategory(function (err, docs) {
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
router.get('/certainCategorySale/:category', function (req, res, next) {
    var category = req.params.category;
    admin.getCertainCategorySale(category, function (err, docs) {
        if (err == "success") {
            res.json({
                result: "success",
                data: docs
            })
        } else {
            res.json({
                result: "success"
            })
        }

    })
})

router.get('/AllGoods', function (req, res, next) {
    admin.getAllGoods(function (err, docs) {
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
router.get('/allOrder', function (req, res, next) {
	admin.getAllOrder(function (err, docs) {
		if (!err) {
			res.json({
				result: "success",
				data:docs
			})
		} else {
			res.json({
				result: "error"
			})
		}
	})
})
router.get('/recentSale', function (req, res, next) {
	admin.getRecentSale(function (err, docs) {
		if (err=="success") {
			res.json({
				result: "success",
				data:docs
			})
		} else {
			res.json({
				result: "error"
			})
		}
	})
})
router.delete('/goods/:goodsID', function (req, res, next) {
	var goodsID = req.params.goodsID;
	admin.deleteGoods(goodsID, function (err, docs) {
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

router.get('/user', function (req, res, next) {
	admin.getAllUser(function (err, docs) {
		if (!err ) {
			res.json({
				result: "success",
                data:docs
			})
		} else {
			res.json({
				result: "error"
			})
		}

	})
})
router.delete('/user/:userID', function (req, res, next) {
	var userID = req.params.userID;
	admin.deleteUser(userID, function (err, docs) {
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
module.exports = router;