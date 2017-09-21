var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function () {
	console.log("error")
});
db.once('open', function () {


	console.log("admin connected");
	var goodsSchema = new mongoose.Schema({
		ID: Number,
		price: Number,
		chara: String,
		topName: String,
		subName: String,
		shortDescription: Array,
		shortDescriptionImage: Array,
		headImage: Array,
		type: Array,
		inventory: Array,
		description: Array,
		information: Array,
		sale: Number,
		category: String,
		subCategory: String,
		date: String,
		manufacturer: String,
		label: Array
	});
		goodsModel = db.model("goods", goodsSchema);
	var categorySchema = new mongoose.Schema({
		name: String,
		picture: String,
		subCategory: Array
	});
	categoryModel = db.model("categories", categorySchema);
	// addCategory();
	var topicModelSchema = new mongoose.Schema({
		topicID: Number,
		writer: String,
		writerImage: String,
		picture: Array,
		headline: String,
		content: String,
		watchNumber: String,
		price: Number
	});
	topicModel = db.model("topics", topicModelSchema);
	// addTopic();
	var orderSchema = new mongoose.Schema({
		orderID: String,
		userID: String,
		goodsList: Array,
		expressNumber: Number,
		expressCompany: String,
		address: Array,
		orderState: Number,
		payID: String,
		totalFee: Number,
		orderDate:String
	});
	orderModel = db.model("orders", orderSchema);

	var commentSchema = new mongoose.Schema({
		goodsID: Number,
		userID: String,
		content: String,
		picture: Array,
		commentDate: String
	});
	commentModel = db.model("comments", commentSchema);
	var userschema = new mongoose.Schema({
		telephone: String,
		name: String,
		password: String,
		photo: String,
		gender: String,
		interest: Array,
		address: Array
	});
    userModel = db.model("User", userschema);
})


function changeInformation(obj, cb) {
	goodsModel.findOne({
		ID: obj.ID
	}, function (err, docs) {
		if (docs) {
			docs.price = obj.price;
			docs.chara = obj.chara;
			docs.topName = obj.topName;
			docs.subName = obj.subName;
			docs.type = obj.type;
			docs.inventory = obj.inventory
			docs.information = obj.information;
			docs.sale = obj.sale;
			docs.category = obj.category;
			docs.subCategory = obj.subCategory;
			docs.date = obj.date;
			docs.manufacturer = obj.manufacturer;
			docs.label = obj.label;
			docs.markModified('type');
			docs.markModified('inventory');
			docs.markModified('information');
			docs.markModified('label');
			docs.save();
			cb("success", "")
		} else {
			cb("error", "")
		}

	})
}

function getAllGoods(cb) {
	goodsModel.find({}, cb)
}

function getSaleByCategory(cb) {
	var arr = [];
	categoryModel.find({}, function (err, docs) {
		for (var i = 0; i < docs.length; i++) {
			var name = docs[i].name;
			goodsModel.find({
				category: name
			}, function (err, docs2) {
				var sale = 0;
				for (var j = 0; j < docs2.length; j++) {
					sale += docs2[j].sale;
				}
				var obj = {
					name: docs2[0].category,
					sale: sale
				}
				arr.push(obj);
				if (arr.length == docs.length) {
					cb("success", arr);
				}
			})

		}
	})
}

function getCertainCategorySale(category, cb) {

	categoryModel.findOne({
		name: category
	}, function (err, docs) {
		var arr = [];
		if (docs) {
			var subCategory = docs.subCategory;
			for (var i = 0; i < subCategory.length; i++) {
				goodsModel.find({
					subCategory: subCategory[i].name
				}, function (err, docs2) {
					var sale = 0;
					for (var j = 0; j < docs2.length; j++) {
						sale += docs2[j].sale;
					}
					var obj = {
						name: docs2[0].subCategory,
						sale: sale
					}
					arr.push(obj);
					if (arr.length == subCategory.length) {
						cb("success", arr);
					}
				})
			}
		} else {
			cb("error", "")
		}
	})
}
function getRecentSale(cb) {
	var now = new Date();
	var arr = [];
	for (var i = 1; i < 8; i++) {
		var obj = {
			time: i,
			sale: 0
		}
		arr.push(obj);
	}
	orderModel.find({}, function (err, docs) {
		for (var i = 0; i < docs.length; i++) {
			var sale = 0;
			for (var j = 0; j < docs[i].goodsList.length; j++) {
				sale += docs[i].goodsList[j].number;
			}
			var date = parseInt(docs[i].orderDate);
			console.log("date  " + date)
			console.log("now  " + now.getTime())
			switch (Math.ceil((now.getTime() - date) / 1000 / 60 / 60 / 24)) {
				case 1:
					arr[0].sale += sale;
					break;
				case 2:
					arr[1].sale += sale;
					break;
				case 3:
					arr[2].sale += sale;
					break;
				case 4:
					arr[3].sale += sale;
					break;
				case 5:
					arr[4].sale += sale;
					break;
				case 6:
					arr[5].sale += sale;
					break;
				case 7:
					arr[6].sale += sale;
					break;
				default:
					break;
			}
		}
		cb("success", arr);
	})
}
function getAllOrder(cb) {
	orderModel.find({}, cb);
}


function deleteGoods(goodsID, cb) {
	goodsModel.findOne({
		ID: goodsID
	}, function (err, docs) {
		if (docs) {
			goodsModel.remove({
				ID: goodsID
			}, cb);
		} else {
			cb("error", "")
		}
	})
}
function getAllUser(){
	userModel.find({},cb)
}
function deleteUser(userID,cb){
	userModel.findOne({telephone:userID},function(err,docs){
		if(docs){
			userModel.remove({
				telephone:userID
			},cb)
		}else{
			cb("error","")
		}
	})
}

module.exports.getAllGoods = getAllGoods;
module.exports.getSaleByCategory = getSaleByCategory;
module.exports.getCertainCategorySale = getCertainCategorySale;
module.exports.changeInformation = changeInformation;
module.exports.getAllOrder = getAllOrder;
module.exports.getRecentSale = getRecentSale;
module.exports.deleteGoods = deleteGoods;
module.exports.getAllUser=getAllUser;
module.exports.deleteUser=deleteUser;