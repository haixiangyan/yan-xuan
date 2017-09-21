var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function () {
	console.log("error")
});

db.once('open', function () {
	console.log("user connected");
	var userschema = new mongoose.Schema({
		telephone: String,
		name: String,
		password: String,
		photo: String,
		gender: String,
		interest: Array,
		address: Array
	});

	//	userschema.methods.findByID = function(cb) {
	//		return this.model("User").find({
	//			ID: this.ID
	//		}, cb)
	//	}
	//	userschema.statics.findByName = function(uname, cb) {
	//		return this.find({
	//			uname: uname
	//		}, cb)
	//	}
	userschema.statics.findByTelephone = function (telephone, cb) {

		return this.find({
			telephone: telephone
		}, cb)
	}
	userModel = db.model("User", userschema);
	// addUser();
})

function creatUser(obj, cb) {
	userModel.find({
		telephone: obj.telephone
	}, function (err, docs) {
		if (docs.length == 0) {
			var newobj = {
				telephone: obj,
				password: obj.password,
				photo: "",
				name: "",
				gender: "",
				interest: [],
				address: []
			}
			var userEntity = new userModel(obj);
			userEntity.save();
			cb("success", "")
		} else {
			cb("error", "");

		}
	})
}

function changeInformation(obj, cb) {
	userModel.findOne({
		telephone: obj.telephone
	}, function (err, docs) {
		if (docs) {
			if (obj.photo) {
				docs.interest = obj.interest;
				docs.gender = obj.gender;
				docs.name = obj.name;
				docs.photo = obj.photo;
				docs.markModified('interest');
				docs.save();
				cb("success", "")
			} else {
				docs.interest = obj.interest;
				docs.gender = obj.gender;
				docs.address = obj.address;
				docs.name = obj.name;
				docs.markModified('interest');
				docs.save();
				cb("success", "")
			}

		} else {
			cb("error", "")
		}
	})
}

function checkLogin(obj, cb) {
	console.log(obj);
	userModel.findOne({
		telephone: obj.telephone
	}, function (err, docs) {
		if (docs) {
			if (docs.password == obj.password) {
				cb("success", docs)
			} else {
				cb("error", "")
			}
		} else {
			cb("notFind", "");

		}
	})
}

function getInformation(telephone, cb) {
	userModel.findOne({
		telephone: telephone
	}, function (err, docs) {
		if (docs) {
			cb("success", docs)
		} else {
			cb("error", "")
		}
	})
}

function getAddress(userid, cb) {
	userModel.findOne({
		telephone: userid
	}, function (err, docs) {
		if (docs) {
			cb("success", docs.address)
		} else {
			cb("error", "")
		}
	})
}

function changeAddress(userid, index, obj, cb) {
	userModel.findOne({
		telephone: userid
	}, function (err, docs) {
		if (docs) {
			if (obj.isDefault == true) {
				console.log(1);
				for (var i = 0; i < docs.address.length; i++) {
					docs.address[i].isDefault = false;
				}
				docs.address[index] = obj;
				docs.markModified("address");
				docs.save();
				cb("success", docs.address)
			} else {
				console.log(obj);
				console.log(2);
				docs.address[index] = obj;
				docs.markModified("address");
				docs.save();
				console.log(docs.address);
				cb("success", docs.address)
			}

		} else {
			cb("error", "")
		}
	})
}

function addAddress(userid, obj, cb) {
	userModel.findOne({
		telephone: userid
	}, function (err, docs) {
		if (docs) {
			if (obj.isDefault == true) {
				for (var i = 0; i < docs.address.length; i++) {
					docs.address[i].isDefault = false;
				}
				docs.address.push(obj);
				docs.markModified("address");
				docs.save();
				cb("success", docs.address)
			} else {
				docs.address.push(obj);
				docs.markModified("address");
				docs.save();
				cb("success", docs.address)
			}
		} else {
			cb("error", "")
		}
	})
}

function deleteAddress(userid, index, cb) {
	userModel.findOne({
		telephone: userid
	}, function (err, docs) {
		if (docs) {
			var arr = [];
			for (var i = 0; i < docs.address.length; i++) {
				if (i == index) {
					continue;
				} else {
					arr.push(docs.address[i]);
				}
			}
			docs.address = arr;
			docs.markModified("address");
			docs.save();
			cb("success", docs.address)
		} else {
			cb("error", "")
		}
	})
}
module.exports.checkLogin = checkLogin;
module.exports.creatUser = creatUser;
module.exports.changeInformation = changeInformation;
module.exports.getInformation = getInformation;
module.exports.getAddress = getAddress;
module.exports.changeAddress = changeAddress;
module.exports.addAddress = addAddress;
module.exports.deleteAddress = deleteAddress;

