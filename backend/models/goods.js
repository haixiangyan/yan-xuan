var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function () {
	console.log("error")
});
db.once('open', function () {


	console.log("goods connected");
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
	goodsSchema.methods.findByID = function (cb) {
		return this.model("goods").find({
			ID: this.ID
		}, cb)
	}
	goodsSchema.statics.findByID = function (ID, cb) {


		return this.find({
			ID: ID
		}, cb)
	}
	goodsModel = db.model("goods", goodsSchema);
	// addGoods()

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

function addGoods() {
	var i = 1;
	//	for(var i = 0; i < 100; i++) {
	var goodsEntity = new goodsModel({
		ID: i,
		price: 10 * i + 5,
		chara: "二种可选",
		topName: "懒人清洁新选择",
		subName: "高效清洁组合",
		shortDescription: ['静电吸附', '轻盈省力', '转头流畅', '智慧灵活', '双面可用', '坚韧厚实'],
		shortDescriptionImage: ['/static/img/goodsImage/0/shortdescriptionImage/1.png', '/static/img/goodsImage/0/shortdescriptionImage/2.jpg', '/static/img/goodsImage/0/shortdescriptionImage/3.jpg'],
		headImage: ['/static/img/goodsImage/0/headImage/1.jpg', '/static/img/goodsImage/0/headImage/2.jpg', '/static/img/goodsImage/0/headImage/3.jpg', '/static/img/goodsImage/0/headImage/4.jpg', '/static/img/goodsImage/0/headImage/5.jpg'],
		type: ['1套装 伸缩杆懒人拖把+懒人抹布 4卷装+40片装 地板清洁湿巾 3包装'],
		inventory: [999, 999, 999, 999, 999, 999],
		description: ['/static/img/goodsImage/0/description/1.jpg', '/static/img/goodsImage/0/description/2.jpg', '/static/img/goodsImage/0/description/3.jpg', '/static/img/goodsImage/0/description/4.jpg', '/static/img/goodsImage/0/description/5.jpg', '/static/img/goodsImage/0/description/6.jpg', '/static/img/goodsImage/0/description/7.jpg', '/static/img/goodsImage/0/description/8.jpg'],
		information: [{
			"attrName": "组合",
			"attrValue": `1套装 伸缩杆懒人拖把  4卷装 懒人抹布 3包装 地板清洁湿巾（40片装）`
		}],
		sale: parseInt(Math.random() * 100),
		category: parseInt(i / 8),
		subCategory: i + 100,
		date: new Date().getTime(),
		manufacturer: "ck",
		label: [{
			title: "爆品",
			type: "1"
		}, {
			title: "新品",
			type: "2"
		}]
	})
	goodsEntity.save();
	//	}
}

function addTopic() {
	for (var i = 0; i < 10; i++) {
		var topicEntity = new topicModel({
			topicID: i,
			writer: "餐厨组：锅锅",
			writerImage: "/static/img/topicImage/writerImage/1.jpg",
			picture: ["/static/img/topicImage/headImage/1.jpg", "/static/img/topicImage/headImage/2.jpg", "/static/img/topicImage/headImage/3.jpg"],
			headline: "用这套刀，发现德式厨房奥秘",
			content: "如果你参观过德国人的厨房，一定会被满屋子的bling bling震撼到：不仅台面...",
			watchNumber: "14.6k",
			price: parseInt(Math.random() * 100)
		})
		topicEntity.save();
		//	addCategory();
	}
}

function addGoods() {
	for (var i = 0; i < 100; i++) {
		var goodsEntity = new goodsModel({
			ID: i,
			price: 10 * i + 5,
			chara: "二种可选",
			topName: "懒人清洁新选择",
			subName: "高效清洁组合",
			shortDescription: ['a', 'a', 'a', 'a', 'a', 'a'],
			shortDescriptionImage: ['a', 'a', 'a', 'a', 'a', 'a'],
			headImage: ['/static/img/goodsImage/1.png', 'a', 'a', 'a', 'a'],
			type: ['a', 'a', 'a', 'a', 'a', 'a'],
			inventory: 999,
			description: ['a', 'a', 'a', 'a', 'a', 'a'],
			information: ['a', 'a', 'a', 'a', 'a', 'a'],
			sale: parseInt(Math.random() * 100),
			category: parseInt(i / 8),
			subCategory: i + 100,
			date: new Date().getTime(),
			manufacturer: "ck",
			label: [{
				title: "爆品",
				type: "1"
			}, {
				title: "新品",
				type: "2"
			}]
		})
		goodsEntity.save();
	}
}



function getGoods(ID, cb) {
	goodsModel.findOne({
		ID: ID
	}, function (err, docs) {
		if (docs) {
			var obj = docs;
			var arr = [];
			arr.push(obj)
			commentModel.findOne({
				goodsID: obj.ID
			}, function (err, docs2) {
				console.log(docs2)
				if (docs2) {
					var newobj = docs2;
					arr.push(newobj);
					userModel.find({
						telephone: newobj.userID
					}, function (err, docs3) {
						var newobj2 = {
							customerPicture: docs3[0].photo,
							customerName: docs3[0].name
						}
						arr.push(newobj2)
						cb("success", arr);
					})
				}else{
					cb("error", "");
				}

			})
		} else {
			cb("error", "");
		}


	});

}

function getGoodsBySale(cb) {
	var query = goodsModel.find({});
	query.sort({
		sale: "desc"
	});
	query.limit(9);
	query.exec(cb);
}

function getGoodsByDate(cb) {
	var query = goodsModel.find({});
	query.sort({
		date: "desc"
	});
	query.limit(9);
	query.exec(cb);
}

function getGoodsByAllType(cb) {
	let arr = [];
	categoryModel.find({}, function (err, docs) {

		for (let i = 0; i < docs.length; i++) {
			let obj = {
				name: "",
				data: []
			};
			let categoryName = docs[i].name;
			obj.name = categoryName;
			let queryGoods = goodsModel.find({
				category: categoryName
			});
			queryGoods.limit(7);
			goodsModel.find(queryGoods, function (err, docs2) {

				let goodsArr = []
				let goods;
				for (let j = 0; j < docs2.length; j++) {
					let goods = {
						ID: docs2[j].ID,
						topName: docs2[j].topName,
						subName: docs2[j].subName,
						price: docs2[j].price,
						label: docs2[j].label,
						chara: docs2[j].chara,
						headImage: docs2[j].headImage[0],

					};
					goodsArr.push(goods);
				}
				obj.data = goodsArr;
				arr.push(obj);
				if (arr.length == docs.length - 1) {
					cb("success", arr)
				}
			})
		}

	})
}

function getCategory(cb) {
	categoryModel.find({}, cb)
}

function getCertainCategory(category, cb) {
	let arr = [];
	categoryModel.find({
		name: category
	}, function (err, docs) {

		let subCategoryArr = docs[0].subCategory;
		for (let i = 0; i < subCategoryArr.length; i++) {
			let obj = {
				name: "",
				data: []
			};
			let categoryName = subCategoryArr[i].name;
			obj.name = categoryName;
			let queryGoods = goodsModel.find({
				subCategory: categoryName,
			});
			queryGoods.limit(7);
			let goodsArr = [];
			goodsModel.find(queryGoods, function (err, docs2) {

				let goodsArr = []
				let goods;
				for (let j = 0; j < docs2.length; j++) {
					let goods = {
						ID: docs2[j].ID,
						topName: docs2[j].topName,
						subName: docs2[j].subName,
						price: docs2[j].price,
						label: docs2[j].label,
						chara: docs2[j].chara,
						headImage: docs2[j].headImage[0]
					};
					goodsArr.push(goods);
				}
				obj.data = goodsArr;
				arr.push(obj);
				if (arr.length == subCategoryArr.length - 1) {
					cb("success", arr)
				}
			})
		}

	})
}

function getCertainSubCategoryGoods(category, cb) {
	var arr = [];
	goodsModel.find({
		subCategory: category
	}, function (err, docs) {

		for (var i = 0; i < docs.length; i++) {
			let goods = {
				ID: docs[i].ID,
				topName: docs[i].topName,
				subName: docs[i].subName,
				price: docs[i].price,
				label: docs[i].label,
				chara: docs[i].chara,
				headImage: docs[i].headImage[0]
			};
			arr.push(goods);
		}
		cb(err, arr);
	})
}

function search(key, cb) {
	var arr = [];
	goodsModel.find({}, function (err, docs) {
		for (var i = 0; i < docs.length; i++) {
			var obj = docs[i];
			if (obj.topName.indexOf(key) != -1 || obj.subName.indexOf(key) != -1 || obj.category.indexOf(key) != -1 || obj.subCategory.indexOf(key) != -1) {
				var newobj = {
					ID: docs[i].ID,
					topName: docs[i].topName,
					subName: docs[i].subName,
					price: docs[i].price,
					label: docs[i].label,
					chara: docs[i].chara,
					headImage: docs[i].headImage[0]
				}
				arr.push(newobj);
			}
			if (arr.length > 10) {
				break;
			}
		}
		if (arr.length > 0) {
			cb("success", arr)
		} else {
			cb("error", "")
		}
	})
}

function showTopic(cb) {
	topicModel.find({}, cb);
}

function makeOrder(obj, cb) {
	console.log(obj);
	goodsModel.findOne({
		ID: obj.goodsID
	}, function (err, docs) {
		if (docs) {
			var inventory = [];
			inventory = docs.inventory;
			for (i = 0; i < docs.type.length; i++) {
				if (obj.type == docs.type[i]) {
					break;
				}
			}
			if (docs.inventory[i] > obj.number) {
				inventory[i] -= obj.number;
				docs.inventory = inventory;
				docs.markModified('inventory');
				docs.save();

				var arr = [];
				var newobj = {
					ID: obj.goodsID,
					type: obj.type,
					number: obj.number,
					picture: obj.picture,
					price: obj.price
				}
				console.log(newobj)
				arr.push(newobj);
				var order = new Date().getTime() + obj.userID;
				var orderEntity = new orderModel({
					orderID: order,
					userID: obj.userID,
					goodsList: arr,
					expressNumber: 0,
					expressCompany: "",
					address: obj.address,
					orderState: 0,
					orderDate: new Date().getTime(),
					payID: "0",
					totalFee: obj.totalFee
				})
				orderEntity.save();
				cb("success", order);
			} else {
				cb("error", "1") //库存不足
			}
		} else {
			cb("error", "2") //找不到该商品
		}
	})
}

function getComment(goodsID, cb) {
	var arr = [];
	var arr2 = [];
	commentModel.find({
		goodsID: goodsID
	}, function (err, docs) {
		for (var i = 0; i < docs.length; i++) {
			var newobj = docs[i];
			arr.push(newobj)
			userModel.find({
				telephone: newobj.userID
			}, function (err, docs3) {
				var newobj2 = {
					customerPicture: docs3[0].photo,
					customerName: docs3[0].name
				}
				//				var newobj3={comment:newobj,customer:newobj2};
				arr2.push(newobj2);
				if (arr.length == docs.length && arr2.length == docs.length) {
					var obj = {
						comment: arr,
						user: arr2
					}
					cb("success", obj)
				}
			});
		}
	})
}

module.exports.getCategory = getCategory;
module.exports.getGoods = getGoods;
module.exports.getGoodsBySale = getGoodsBySale;
module.exports.getGoodsByDate = getGoodsByDate;
module.exports.getGoodsByAllType = getGoodsByAllType;
module.exports.getCertainCategory = getCertainCategory;
module.exports.getCertainSubCategoryGoods = getCertainSubCategoryGoods;
module.exports.search = search;
module.exports.showTopic = showTopic;
module.exports.makeOrder = makeOrder;
module.exports.getComment = getComment;