var express = require('express');
var router = express.Router();
var user = require("../models/user");
var multiparty = require("multiparty")
var fs = require("fs");
/* GET users listing. */

router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});
router.post('/register', function (req, res, next) {

	var tel = req.body.telephone;
	var password = req.body.password;
	var obj = {
		telephone: tel,
		password: password
	}
	user.creatUser(obj, function (err, docs) {
		if (err == "success") {
			res.json({
				result: "success",
			})
		} else {
			res.json({
				result: "error",
			})

		}
	})
})

router.patch('/changeInformation', function (req, res, next) {
	var form = new multiparty.Form({
		uploadDir: "./dist/static/img/userImage/"
	})
	form.parse(req, function (err, fields, files) {
		var telephone = fields.telephone[0];
		var interest = fields.interest[0].split(',');

		var gender = fields.gender[0];
		var name = fields.name[0];

		if (files.photo[0].originalFilename) {
			var photo = files.photo[0].originalFilename;
			fs.exists("./dist/static/img/userImage/" + files.photo[0].originalFilename, function (exists) {
				if (!exists) {
					fs.rename(files.photo[0].path, "./dist/static/img/userImage/" + files.photo[0].originalFilename, function (err) {
						console.log(err)
					})
				} else {
					//do something
				}

			})
			var obj = {
			telephone: telephone,
			interest: interest,
			gender: gender,
			name: name,
			photo: "/static/img/userImage/"+photo,
		}
		console.log(obj);
		user.changeInformation(obj, function (err, docs) {
			if (err == "success") {
				res.json({
					result: "success",
				})
			} else {
				res.json({
					result: "error"
				})
			}
		})

		}else{
			var obj = {
			telephone: telephone,
			interest:  interest,
			gender: gender,
			name: name,
			photo: "",
		}
		console.log(obj);
		user.changeInformation(obj, function (err, docs) {
			if (err == "success") {
				res.json({
					result: "success",
				})
			} else {
				res.json({
					result: "error"
				})
			}
		})
		}
		
	})
})
router.get('/getInformation/:telephone', function (req, res, next) {
	var tel = req.params.telephone;
	user.getInformation(tel, function (err, docs) {
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
}) ;
router.post('/login', function (req, res, next) {
	var tel = req.body.telephone;
	var password = req.body.password;
	var obj = {
		telephone: tel,
		password: password
	}
	user.checkLogin(obj, function (err, docs) {
		console.log("err  " + err + "\n docs：  " + docs)
		if (err == "success") {
			res.json({
				result: "success",
				user: docs
			})
		} else {
			if (err == "error") {
				res.json({
					result: "error",
					errorMeg: "1"
				}) //1表示密码错误，2表示找不到用户
			} else {
				res.json({
					result: "error",
					errorMeg: "2"
				})
			}
		}
	})
})


router.get('/Address/:userID', function (req, res, next) {
	var userID = req.params.userID;
	user.getAddress(userID, function (err, docs) {
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


router.post('/changeAddress', function (req, res, next) {
	var userID = req.body.userID;
	var index = parseInt(req.body.index);
	var obj = req.body.address;
	user.changeAddress(userID, index, obj, function (err, docs) {
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

router.post('/addAddress', function (req, res, next) {
	var userID = req.body.userID;
	var address =req.body.address;
	user.addAddress(userID, address, function (err, docs) {
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
}) ;
router.delete('/address/:userID/:index', function (req, res, next) {
	var userID = req.params.userID;
	var index = parseInt(req.params.index);
	user.deleteAddress(userID, index, function (err, docs) {
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
});
 module.exports = router;