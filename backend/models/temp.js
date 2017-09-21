var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function () {
	console.log("error")
});
db.once('open', function () {
	console.log("temp connected");
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

	var commentSchema = new mongoose.Schema({
		goodsID: Number,
		userID: String,
		content: String,
		picture: Array,
		commentDate: String,
		type: String
	});
	commentModel = db.model("comments", commentSchema);

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

	var categorySchema = new mongoose.Schema({
		name: String,
		picture: String,
		subCategory: Array
	});
	categoryModel = db.model("categories", categorySchema);

	var userschema = new mongoose.Schema({
		telephone: String,
		name: String,
		password: String,
		photo: String,
		gender: String,
		interest: Array,
		address: Array
	});
	userModel = db.model("user", userschema);

	var orderSchema = new mongoose.Schema({
		orderID: String,
		userID: String,
		goodsList: Array,
		expressNumber: Number,
		expressCompany: String,
		address: Array,
		orderState: Number,
		orderDate: String,
		payID: String,
		totalFee: Number
	});
	orderModel = db.model("orders", orderSchema);
	remove();
	// addGoods();
	// console.log("goods")
	// addComment();
	// console.log("comment")
	// addTopic();
	// console.log("topic")
	// addCategory();
	// console.log("category")
	// addUser();
	// console.log("user")
	// addOrder();
	// console.log("order")
})

function remove() {
	goodsModel.remove({}, function (err, docs) {
		addGoods();
		console.log("goods")
	});
	commentModel.remove({}, function (err, docs) {
		addComment();
		console.log("comment")
	});
	topicModel.remove({}, function (err, docs) {
		addTopic();
		console.log("topic")
	});
	categoryModel.remove({}, function (err, docs) {
		addCategory();
		console.log("category")
	});
	userModel.remove({}, function (err, docs) {
		addUser();
		console.log("user")
	});
	orderModel.remove({}, function (err, docs) {
		addOrder();
		console.log("order")
	});
}

function addOrder() {
	var orderEntity = new orderModel({
		orderID: "15005664000001",
		userID: "1",
		goodsList: [{
			ID: "1083009",
			number: 1,
			type: "妖姬蓝",
			price: 299,
			name: "海洋之心永生花",
			picture: '/static/img/goodsImage/1083009/headImage/76e5c820f6bb71a26517ffa01f499871.png'
		}],
		expressNumber: 0,
		expressCompany: "",
		address: [{
			province: "辽宁省",
			city: "沈阳市",
			town: "浑南区",
			detail: "东北大学",
			receiver: "许康琪",
			telephone: "18805862675",
			isDefault: false
		}],
		orderDate: 1501516800000,
		orderState: 0,
		payID: "",
		totalFee: 299
	})
	orderEntity.save();
	var orderEntity = new orderModel({
		orderID: "15004800000001",
		userID: "1",
		goodsList: [{
			ID: "1083009",
			number: 1,
			type: "妖姬蓝",
			price: 299,
			name: "海洋之心永生花",
			picture: '/static/img/goodsImage/1083009/headImage/76e5c820f6bb71a26517ffa01f499871.png'
		}],
		expressNumber: 0,
		expressCompany: "",
		address: [{
			province: "辽宁省",
			city: "沈阳市",
			town: "浑南区",
			detail: "东北大学",
			receiver: "许康琪",
			telephone: "18805862675",
			isDefault: false
		}],
		orderDate: 1501516800000,
		orderState: 1,
		payID: "1500480000000",
		totalFee: 299
	})
	orderEntity.save();
	var orderEntity = new orderModel({
		orderID: "15003936000001",
		userID: "1",
		goodsList: [{
			ID: "1083009",
			number: 1,
			type: "妖姬蓝",
			price: 299,
			name: "海洋之心永生花",
			picture: '/static/img/goodsImage/1083009/headImage/76e5c820f6bb71a26517ffa01f499871.png'
		}],
		expressNumber: 810874175279,
		expressCompany: "圆通",
		address: [{
			province: "辽宁省",
			city: "沈阳市",
			town: "浑南区",
			detail: "东北大学",
			receiver: "许康琪",
			telephone: "123124",
			isDefault: false
		}],
		orderDate: 1501603200000,
		orderState: 2,
		payID: "1500393600000",
		totalFee: 299
	})
	orderEntity.save();
	var orderEntity = new orderModel({
		orderID: "15001344000001",
		userID: "1",
		goodsList: [{
			ID: "1083009",
			number: 1,
			type: "妖姬蓝",
			price: 299,
			name: "海洋之心永生花",
			picture: '/static/img/goodsImage/1083009/headImage/76e5c820f6bb71a26517ffa01f499871.png'
		}],
		expressNumber: 810874175279,
		expressCompany: "圆通",
		address: [{
			province: "辽宁省",
			city: "沈阳市",
			town: "浑南区",
			detail: "东北大学",
			receiver: "许康琪",
			telephone: "18805862675",
			isDefault: false
		}],
		orderDate: 1500134400000,
		orderState: 3,
		payID: "1500134400000",
		totalFee: 299
	})
	orderEntity.save();
}

function addUser() {
	var userEntity = new userModel({
		telephone: '1',
		password: '123456',
		photo: "/static/img/userImage/1.jpg",
		name: "xukangqi",
		gender: "man",
		interest: ["1", "2", "3"],
		address: [{
			province: "辽宁省",
			city: "沈阳市",
			town: "浑南区",
			detail: "东北大学",
			receiver: "许康琪",
			telephone: "18805862675",
			isDefault: false
		}]
	})
	userEntity.save();
}

function addCategory() {

	var categoryEntity = new categoryModel({
		name: '餐厨',
		picture: "/static/img/category/餐厨/餐厨.png",
		subCategory: [{
			name: '杯壶',
			photo: "/static/img/category/餐厨/杯壶.png"
		}, {
			name: '餐具',
			photo: "/static/img/category/餐厨/餐具.png"
		}, {
			name: '茶具咖啡具',
			photo: "/static/img/category/餐厨/茶具咖啡具.png"
		}, {
			name: '厨房小电',
			photo: "/static/img/category/餐厨/厨房小电.png"
		}, {
			name: '刀剪砧板',
			photo: "/static/img/category/餐厨/刀剪砧板.png"
		}, {
			name: '功能厨具',
			photo: "/static/img/category/餐厨/功能厨具.png"
		}, {
			name: '锅具',
			photo: "/static/img/category/餐厨/锅具.png"
		}, {
			name: '清洁保鲜',
			photo: "/static/img/category/餐厨/清洁保鲜.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '服装',
		picture: "/static/img/category/服装/服装.png",
		subCategory: [{
			name: 'T恤',
			photo: "/static/img/category/服装/T恤.png"
		}, {
			name: '衬衫',
			photo: "/static/img/category/服装/衬衫.png"
		}, {
			name: '家居服',
			photo: "/static/img/category/服装/家居服.png"
		}, {
			name: '裤装',
			photo: "/static/img/category/服装/裤装.png"
		}, {
			name: '毛衣',
			photo: "/static/img/category/服装/毛衣.png"
		}, {
			name: '内裤',
			photo: "/static/img/category/服装/内裤.png"
		}, {
			name: '内衣',
			photo: "/static/img/category/服装/内衣.png"
		}, {
			name: '丝袜',
			photo: "/static/img/category/服装/丝袜.png"
		}, {
			name: '袜子',
			photo: "/static/img/category/服装/袜子.png"
		}, {
			name: '卫衣',
			photo: "/static/img/category/服装/卫衣.png"
		}, {
			name: '婴童服饰',
			photo: "/static/img/category/服装/婴童服饰.png"
		}]
	})
	categoryEntity.save();

	categoryEntity = new categoryModel({
		name: '居家',
		picture: "/static/img/category/居家/居家.png",
		subCategory: [{
			name: '被枕',
			photo: "/static/img/category/居家/被枕.png"
		}, {
			name: '布艺软装',
			photo: "/static/img/category/居家/布艺软装.png"
		}, {
			name: '宠物',
			photo: "/static/img/category/居家/宠物.png"
		}, {
			name: '床品件套',
			photo: "/static/img/category/居家/床品件套.png"
		}, {
			name: '灯具',
			photo: "/static/img/category/居家/灯具.png"
		}, {
			name: '家具',
			photo: "/static/img/category/居家/家具.png"
		}, {
			name: '家饰',
			photo: "/static/img/category/居家/家饰.png"
		}, {
			name: '生活电器',
			photo: "/static/img/category/居家/生活电器.png"
		}, {
			name: '夏凉',
			photo: "/static/img/category/居家/夏凉.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '配件',
		picture: "/static/img/category/配件/配件.png",
		subCategory: [{
			name: '单肩包',
			photo: "/static/img/category/配件/单肩包.png"
		}, {
			name: '功能箱包',
			photo: "/static/img/category/配件/功能箱包.png"
		}, {
			name: '行李箱',
			photo: "/static/img/category/配件/行李箱.png"
		}, {
			name: '男鞋',
			photo: "/static/img/category/配件/男鞋.png"
		}, {
			name: '女鞋',
			photo: "/static/img/category/配件/女鞋.png"
		}, {
			name: '配饰',
			photo: "/static/img/category/配件/配饰.png"
		}, {
			name: '数码',
			photo: "/static/img/category/配件/数码.png"
		}, {
			name: '双肩包',
			photo: "/static/img/category/配件/双肩包.png"
		}, {
			name: '拖鞋',
			photo: "/static/img/category/配件/拖鞋.png"
		}, {
			name: '围巾件套',
			photo: "/static/img/category/配件/围巾件套.png"
		}]
	})
	categoryEntity.save();

	categoryEntity = new categoryModel({
		name: '洗护',
		picture: "/static/img/category/洗护/洗护.png",
		subCategory: [{
			name: '家庭清洁',
			photo: "/static/img/category/洗护/家庭清洁.png"
		}, {
			name: '口腔护理',
			photo: "/static/img/category/洗护/口腔护理.png"
		}, {
			name: '毛巾',
			photo: "/static/img/category/洗护/毛巾.png"
		}, {
			name: '美妆',
			photo: "/static/img/category/洗护/美妆.png"
		}, {
			name: '面部护理',
			photo: "/static/img/category/洗护/面部护理.png"
		}, {
			name: '身体护理',
			photo: "/static/img/category/洗护/身体护理.png"
		}, {
			name: '香薰',
			photo: "/static/img/category/洗护/香薰.png"
		}, {
			name: '浴室用具',
			photo: "/static/img/category/洗护/浴室用具.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '饮食',
		picture: "/static/img/category/饮食/饮食.png",
		subCategory: [{
			name: '炒货',
			photo: "/static/img/category/饮食/炒货.png"
		}, {
			name: '冲饮',
			photo: "/static/img/category/饮食/冲饮.png"
		}, {
			name: '糕点',
			photo: "/static/img/category/饮食/糕点.png"
		}, {
			name: '果干',
			photo: "/static/img/category/饮食/果干.png"
		}, {
			name: '茗茶',
			photo: "/static/img/category/饮食/茗茶.png"
		}, {
			name: '肉制品',
			photo: "/static/img/category/饮食/肉制品.png"
		}, {
			name: '食材',
			photo: "/static/img/category/饮食/食材.png"
		}, {
			name: '调味',
			photo: "/static/img/category/饮食/调味.png"
		}, {
			name: '小食',
			photo: "/static/img/category/饮食/小食.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '婴童',
		picture: "/static/img/category/婴童/婴童.png",
		subCategory: [{
			name: '儿童服饰',
			photo: "/static/img/category/婴童/儿童服饰.png"
		}, {
			name: '妈咪',
			photo: "/static/img/category/婴童/妈咪.png"
		}, {
			name: '配搭',
			photo: "/static/img/category/婴童/配搭.png"
		}, {
			name: '童车童椅',
			photo: "/static/img/category/婴童/童车童椅.png"
		}, {
			name: '玩具',
			photo: "/static/img/category/婴童/玩具.png"
		}, {
			name: '喂养',
			photo: "/static/img/category/婴童/喂养.png"
		}, {
			name: '婴童洗护',
			photo: "/static/img/category/婴童/婴童洗护.png"
		}, {
			name: '婴幼儿服饰',
			photo: "/static/img/category/婴童/婴幼儿服饰.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '杂货',
		picture: "/static/img/category/杂货/杂货.png",
		subCategory: [{
			name: '出行用品',
			photo: "/static/img/category/杂货/出行用品.png"
		}, {
			name: '海外',
			photo: "/static/img/category/杂货/海外.png"
		}, {
			name: '户外',
			photo: "/static/img/category/杂货/户外.png"
		}, {
			name: '收纳',
			photo: "/static/img/category/杂货/收纳.png"
		}, {
			name: '文具',
			photo: "/static/img/category/杂货/文具.png"
		}, {
			name: '眼镜',
			photo: "/static/img/category/杂货/眼镜.png"
		}]
	})
	categoryEntity.save();
	categoryEntity = new categoryModel({
		name: '志趣',
		picture: "/static/img/category/志趣/志趣.jpg",
		subCategory: [{
			name: '暗黑破坏神',
			photo: "/static/img/category/志趣/暗黑破坏神.png"
		}, {
			name: '唱片',
			photo: "/static/img/category/志趣/唱片.png"
		}, {
			name: '大话西游',
			photo: "/static/img/category/志趣/大话西游.png"
		}, {
			name: '风暴英雄',
			photo: "/static/img/category/志趣/风暴英雄.png"
		}, {
			name: '黑凤梨',
			photo: "/static/img/category/志趣/黑凤梨.png"
		}, {
			name: '礼品卡',
			photo: "/static/img/category/志趣/礼品卡.png"
		}, {
			name: '炉石传说',
			photo: "/static/img/category/志趣/炉石传说.png"
		}, {
			name: '梦幻西游',
			photo: "/static/img/category/志趣/梦幻西游.png"
		}, {
			name: '魔兽世界',
			photo: "/static/img/category/志趣/魔兽世界.png"
		}, {
			name: '守望先锋',
			photo: "/static/img/category/志趣/守望先锋.png"
		}, {
			name: '我的世界',
			photo: "/static/img/category/志趣/我的世界.png"
		}, {
			name: '夏日甜心',
			photo: "/static/img/category/志趣/夏日甜心.png"
		}, {
			name: '星际争霸',
			photo: "/static/img/category/志趣/星际争霸.png"
		}, {
			name: '阴阳师',
			photo: "/static/img/category/志趣/阴阳师.png"
		}]
	})

	categoryEntity.save();
}

function addTopic() {
	var topicEntity = new topicModel({
		"topicID": 615,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/615/writerImage/298b157c754e94fa8048738b17414fd0.png",
		"picture": ["/static/img/topicImage/615/headImage/636f2fa8665073f4fec3acb6353a121b.jpg"],
		"headline": "都市女郎的生活应该什么样？",
		"content": "像亦舒女郎一样拥有好品味",
		"watchNumber": "1.4k",
		"price": 59.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 614,
		"writer": "海外组：桐桐",
		"writerImage": "/static/img/topicImage/614/writerImage/15003771309650102.png",
		"picture": ["/static/img/topicImage/614/headImage/15003772453980104.jpg", "/static/img/topicImage/614/headImage/15003772453980104.jpg", "/static/img/topicImage/614/headImage/15003772502020106.jpg", "/static/img/topicImage/614/headImage/15003772486250105.jpg", "/static/img/topicImage/614/headImage/15003815522620122.jpg"],
		"headline": "安全到可以喝的奶瓶清洗剂",
		"content": "对于家中有宝宝的人来说，清洁是一件大事。尤其奶瓶、奶嘴、餐具这类会进嘴的东西，洗...",
		"watchNumber": "2.0k",
		"price": 49.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 612,
		"writer": "服装组：内内",
		"writerImage": "/static/img/topicImage/612/writerImage/15002781809942632.png",
		"picture": ["/static/img/topicImage/612/headImage/15002781993042633.jpg", "/static/img/topicImage/612/headImage/15002781993042633.jpg", "/static/img/topicImage/612/headImage/15002782011432634.jpg", "/static/img/topicImage/612/headImage/15002782031222635.jpg", "/static/img/topicImage/612/headImage/15002782049832636.jpg", "/static/img/topicImage/612/headImage/15002782070962637.jpg"],
		"headline": "为你觅得会呼吸的法国雨露麻",
		"content": "短袖衬衫可以说是男士衣柜里的夏季必备单品了，休闲或雅痞，都可以用它来打造。一款亲...",
		"watchNumber": "9.2k",
		"price": 49.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 609,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/609/writerImage/f9a20d665d7a70446fe07d4d12258a81.png",
		"picture": ["/static/img/topicImage/609/headImage/61c190f2489443b7ee0b0de29e8a373c.jpg"],
		"headline": "暑期出游季",
		"content": "10款暑期特惠，最高直减200元",
		"watchNumber": "44.4k",
		"price": 49.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 605,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/605/writerImage/7879c3c44301ce2a0b3ecfcdc23594ba.png",
		"picture": ["/static/img/topicImage/605/headImage/e94340103c9e11c94b100ad360c50dd0.jpg"],
		"headline": "这10件小家电，让生活更聪明",
		"content": "不费力的生活，我打算这么过",
		"watchNumber": "109.1k",
		"price": 49.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 602,
		"writer": "餐厨组：甜小嘉",
		"writerImage": "/static/img/topicImage/602/writerImage/15003729239620077.png",
		"picture": ["/static/img/topicImage/602/headImage/15002892014262783.jpg", "/static/img/topicImage/602/headImage/15002892014262783.jpg", "/static/img/topicImage/602/headImage/15002892065952784.jpg", "/static/img/topicImage/602/headImage/15002892155032785.jpg", "/static/img/topicImage/602/headImage/15002892205772786.jpg", "/static/img/topicImage/602/headImage/15002892264452787.jpg", "/static/img/topicImage/602/headImage/15002892328412788.jpg", "/static/img/topicImage/602/headImage/15002892370632789.jpg"],
		"headline": "用这套刀，发现德式厨房奥秘",
		"content": "如果你参观过德国人的厨房，一定会被满屋子的bling bling震撼到：不仅台面...",
		"watchNumber": "10.0k",
		"price": 85.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 603,
		"writer": "配件组：田甜",
		"writerImage": "/static/img/topicImage/603/writerImage/14998519315700862.png",
		"picture": ["/static/img/topicImage/603/headImage/15002888978852776.jpg", "/static/img/topicImage/603/headImage/15002888978852776.jpg", "/static/img/topicImage/603/headImage/15002894020992790.jpg", "/static/img/topicImage/603/headImage/15002889076282778.jpg", "/static/img/topicImage/603/headImage/15002889126912779.jpg", "/static/img/topicImage/603/headImage/15002889184402781.jpg", "/static/img/topicImage/603/headImage/15002889226482782.jpg"],
		"headline": "会装又全能，这款背包太强大",
		"content": "身在出差频繁的商品组，大家都感受过差旅收纳的繁琐不便。为此我们一直在寻找一款功能...",
		"watchNumber": "19.1k",
		"price": 85.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 601,
		"writer": "明星商品",
		"writerImage": "/static/img/topicImage/601/writerImage/cf79163a1bd144d507b8cac3e711fd70.png",
		"picture": ["/static/img/topicImage/601/headImage/8769bec52862bbfc6e5f72d6c17571dd.jpg"],
		"headline": "严选，从家门口的龙井茶开始",
		"content": "特级龙井礼盒限时直减644元",
		"watchNumber": "15.5k",
		"price": 85.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 582,
		"writer": "明星商品",
		"writerImage": "/static/img/topicImage/582/writerImage/dc1b60a9c6d45c743838d55a50826424.png",
		"picture": ["/static/img/topicImage/582/headImage/3cc0495444b9e6755899c711dafa6f9e.jpg"],
		"headline": "买对床品，才能夜夜好梦",
		"content": "四季床品挑选指南",
		"watchNumber": "110.9k",
		"price": 109.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 583,
		"writer": "智造组：夏大",
		"writerImage": "/static/img/topicImage/583/writerImage/14994216007911847.png",
		"picture": ["/static/img/topicImage/583/headImage/14994248674911878.jpg", "/static/img/topicImage/583/headImage/14994248674911878.jpg", "/static/img/topicImage/583/headImage/14994250230111880.jpg", "/static/img/topicImage/583/headImage/14994250204371879.jpg", "/static/img/topicImage/583/headImage/14994250253911881.jpg", "/static/img/topicImage/583/headImage/14994250279281882.jpg"],
		"headline": "不插电的小风扇，让清凉随行",
		"content": "小暑过，一日热三分。能随时随地拥有凉风，是暑热天里我们最期待的事情。为此，我们在...",
		"watchNumber": "20.4k",
		"price": 109.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 580,
		"writer": "海外组：小嗨",
		"writerImage": "/static/img/topicImage/580/writerImage/14993323388241174.png",
		"picture": ["/static/img/topicImage/580/headImage/14993329168941176.jpg", "/static/img/topicImage/580/headImage/14993329168941176.jpg", "/static/img/topicImage/580/headImage/14993329246561179.jpg", "/static/img/topicImage/580/headImage/14993329342431182.jpg", "/static/img/topicImage/580/headImage/14993329290981180.jpg", "/static/img/topicImage/580/headImage/14993329318431181.jpg", "/static/img/topicImage/580/headImage/14993329214391178.jpg", "/static/img/topicImage/580/headImage/14993329373711183.jpg", "/static/img/topicImage/580/headImage/14993329394201184.jpg"],
		"headline": "百年匠心，它比香水更迷人",
		"content": "说到线香，虽说中国才是鼻祖，但是因为元末明初战乱频繁，后世继承的却不多，反而不比...",
		"watchNumber": "34.7k",
		"price": 14.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 577,
		"writer": "配件组：羊羊",
		"writerImage": "/static/img/topicImage/577/writerImage/14992507933120828.png",
		"picture": ["/static/img/topicImage/577/headImage/14992514215770838.jpg", "/static/img/topicImage/577/headImage/14992514215770838.jpg", "/static/img/topicImage/577/headImage/14992514239860839.jpg", "/static/img/topicImage/577/headImage/14992514267620840.jpg", "/static/img/topicImage/577/headImage/14992514293080841.jpg", "/static/img/topicImage/577/headImage/14992514327300842.jpg", "/static/img/topicImage/577/headImage/14992514349470843.jpg"],
		"headline": "一顶草帽hold住整个夏天",
		"content": "夏天是出游的季节，进入7月，好像大家都开启了度假模式。街头逛吃，海边漫步，哪怕顶...",
		"watchNumber": "26.6k",
		"price": 14.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 574,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/574/writerImage/fac8b6ebd0ae0225ae0847cf320d877b.png",
		"picture": ["/static/img/topicImage/574/headImage/661682af855100cc902cc9f2566a3382.jpg"],
		"headline": "严选办公室人手必备神器大公开",
		"content": "久坐伏案人士请收好",
		"watchNumber": "215.2k",
		"price": 14.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 573,
		"writer": "配件组：田甜",
		"writerImage": "/static/img/topicImage/573/writerImage/14988856172692378.png",
		"picture": ["/static/img/topicImage/573/headImage/14988858258892379.JPG", "/static/img/topicImage/573/headImage/14988858258892379.JPG", "/static/img/topicImage/573/headImage/14988859185632387.JPG", "/static/img/topicImage/573/headImage/14988858342012382.JPG", "/static/img/topicImage/573/headImage/14988858319482381.JPG", "/static/img/topicImage/573/headImage/14988858410342384.jpg", "/static/img/topicImage/573/headImage/14988858378072383.jpg", "/static/img/topicImage/573/headImage/14988858432742385.JPG", "/static/img/topicImage/573/headImage/14988858284002380.JPG"],
		"headline": "通勤鞋的惊艳感在于舒适",
		"content": "一款令人惊艳的鞋子，应该是什么样子？我的理解是，不仅应该在第一眼看到时被颜值征服...",
		"watchNumber": "35.5k",
		"price": 19.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 572,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/572/writerImage/6a8d80b5a9150c46ecc6d8ba899ff46b.png",
		"picture": ["/static/img/topicImage/572/headImage/d4a50f494025a82d9ce0a05dca824280.jpg"],
		"headline": "夏日的清凉，多亏了这抹草木绿",
		"content": "让家充满生机勃勃的氛围",
		"watchNumber": "152.0k",
		"price": 19.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 559,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/559/writerImage/e06313c592b7246032b5a9e257d0c4cd.png",
		"picture": ["/static/img/topicImage/559/headImage/d2ac7b63b0e9d66a18ebf82c4292b527.jpg"],
		"headline": "严选网红美食盛典",
		"content": "本榜单根据用户真实反馈评出",
		"watchNumber": "255.7k",
		"price": 7.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 570,
		"writer": "服装组：内内",
		"writerImage": "/static/img/topicImage/570/writerImage/14986367141610179.png",
		"picture": ["/static/img/topicImage/570/headImage/14986367400380180.jpg", "/static/img/topicImage/570/headImage/14986367400380180.jpg", "/static/img/topicImage/570/headImage/14986367445010182.jpg", "/static/img/topicImage/570/headImage/14986367468760183.jpg", "/static/img/topicImage/570/headImage/14986367421230181.jpg"],
		"headline": "有品的睡衣，让回家变成期待",
		"content": "劳累了一天回到家，最想做的事情，就是换上睡衣拖鞋，和沙发来一个熊抱。一件好的睡衣...",
		"watchNumber": "40.4k",
		"price": 7.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 560,
		"writer": "洗护组：北北",
		"writerImage": "/static/img/topicImage/560/writerImage/14985283399776028.png",
		"picture": ["/static/img/topicImage/560/headImage/14985288500086068.jpg", "/static/img/topicImage/560/headImage/14985288500086068.jpg", "/static/img/topicImage/560/headImage/14985288240056062.jpg", "/static/img/topicImage/560/headImage/14985288420496067.jpg", "/static/img/topicImage/560/headImage/14985288268806063.jpg", "/static/img/topicImage/560/headImage/14985288178466060.jpg", "/static/img/topicImage/560/headImage/14985289767926115.jpg", "/static/img/topicImage/560/headImage/14985288364126065.jpg", "/static/img/topicImage/560/headImage/14985288391116066.jpg", "/static/img/topicImage/560/headImage/14985289197326069.jpg"],
		"headline": "美好的一天，从用心刷牙开始",
		"content": "作为一款能迅速提升幸福感的浴室单品，电动牙刷自从在严选上架后，就立刻成为爆品。很...",
		"watchNumber": "21.1k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 555,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/555/writerImage/4d80fb0c9d99b9c5aaa8e4702772b23c.png",
		"picture": ["/static/img/topicImage/555/headImage/ea1f3fdc525a86d927b60ced15dd0c58.jpg"],
		"headline": "严选国家城市馆",
		"content": "严选海外制造商，国家馆正式开馆",
		"watchNumber": "233.2k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 558,
		"writer": "配件组：小季",
		"writerImage": "/static/img/topicImage/558/writerImage/14982173744075163.png",
		"picture": ["/static/img/topicImage/558/headImage/14982182547855174.jpg", "/static/img/topicImage/558/headImage/14982182547855174.jpg", "/static/img/topicImage/558/headImage/14982182601535175.jpg", "/static/img/topicImage/558/headImage/14982182676185176.jpg", "/static/img/topicImage/558/headImage/14982182767235177.jpg", "/static/img/topicImage/558/headImage/14982182935015178.jpg", "/static/img/topicImage/558/headImage/14982182991675179.JPG", "/static/img/topicImage/558/headImage/14982183074095180.jpg", "/static/img/topicImage/558/headImage/14982183144655181.jpg", "/static/img/topicImage/558/headImage/14982183184815182.jpg"],
		"headline": "好的运动鞋，一年四季都能穿",
		"content": "运动鞋几乎是人人必备的鞋品，无论是锻炼健身、户外旅行，还是追求舒适、凹个造型，都...",
		"watchNumber": "49.1k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 554,
		"writer": "杂货组：冯娟",
		"writerImage": "/static/img/topicImage/554/writerImage/14980408148652516.png",
		"picture": ["/static/img/topicImage/554/headImage/14980408390412517.jpg", "/static/img/topicImage/554/headImage/14980408390412517.jpg", "/static/img/topicImage/554/headImage/14980408410492518.jpg", "/static/img/topicImage/554/headImage/14980408437692519.jpg", "/static/img/topicImage/554/headImage/14980408466292520.jpg"],
		"headline": "梅雨季，你的防水装备齐了吗",
		"content": "办公室外的倾盆大雨，正式开启了杭州的梅雨季。这个每年6月都会袭击江南的季节，让防...",
		"watchNumber": "31.7k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 553,
		"writer": "洗护组：北北",
		"writerImage": "/static/img/topicImage/553/writerImage/14979534888332248.png",
		"picture": ["/static/img/topicImage/553/headImage/14979535851342252.jpg", "/static/img/topicImage/553/headImage/14979535851342252.jpg", "/static/img/topicImage/553/headImage/14979536486172257.JPG", "/static/img/topicImage/553/headImage/14979535573692250.jpg", "/static/img/topicImage/553/headImage/14979536011592253.jpg", "/static/img/topicImage/553/headImage/14979535701622251.jpg", "/static/img/topicImage/553/headImage/14979536637252258.jpg", "/static/img/topicImage/553/headImage/14979536251532256.jpg", "/static/img/topicImage/553/headImage/14979536212802255.jpg"],
		"headline": "这些神器帮你打造夏日美肌",
		"content": "日常护肤，涂涂抹抹勉强足够，但若想更有效地解决皮肤问题，就需要一些高科技的美容仪...",
		"watchNumber": "29.2k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 547,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/547/writerImage/0582fd58af405c2c1f55617ebc103421.png",
		"picture": ["/static/img/topicImage/547/headImage/377e720498561fe6e6c6ae0b0e1be5b4.jpg"],
		"headline": "夏日减脂，它们给你动力",
		"content": "在这个夏天瘦成一道闪电吧",
		"watchNumber": "133.6k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 545,
		"writer": "电器组：卷毛",
		"writerImage": "/static/img/topicImage/545/writerImage/14979520385982246.png",
		"picture": ["/static/img/topicImage/545/headImage/14977895927260978.jpg", "/static/img/topicImage/545/headImage/14977895927260978.jpg", "/static/img/topicImage/545/headImage/14977895858670976.jpg", "/static/img/topicImage/545/headImage/14977896026140980.jpg", "/static/img/topicImage/545/headImage/14977895964590979.jpg", "/static/img/topicImage/545/headImage/14977895898410977.jpg", "/static/img/topicImage/545/headImage/14977896110450981.jpg"],
		"headline": "呼吸一口它带来的清新好空气",
		"content": "似乎人们都觉得，关上窗子就能隔绝外面的空气污染，然而窗外渗透而来的雾霾，空调间里...",
		"watchNumber": "22.7k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 536,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/536/writerImage/3a908158e41a82106335b65e40d98f5e.png",
		"picture": ["/static/img/topicImage/536/headImage/f3b01827be980355607ba93d3cf3cff8.jpg"],
		"headline": "夏日厨房必备清凉好物",
		"content": "它们让你家厨房，变成健康甜品店",
		"watchNumber": "71.3k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 542,
		"writer": "餐厨组：锅锅",
		"writerImage": "/static/img/topicImage/542/writerImage/14976052491060119.png",
		"picture": ["/static/img/topicImage/542/headImage/14976046602250105.jpg", "/static/img/topicImage/542/headImage/14976046602250105.jpg", "/static/img/topicImage/542/headImage/14976047403520108.jpg", "/static/img/topicImage/542/headImage/14976047367600107.jpg", "/static/img/topicImage/542/headImage/14976047322250106.jpg", "/static/img/topicImage/542/headImage/14976047464680109.jpg", "/static/img/topicImage/542/headImage/14976047508420110.jpg"],
		"headline": "滤掉的是杂质，滤不掉是甘甜",
		"content": "喝水是人们每天的必须，然而城市的水质总是令人忧心，为了寻找纯净又健康的饮用水，我...",
		"watchNumber": "24.2k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 541,
		"writer": "母婴组:娟子",
		"writerImage": "/static/img/topicImage/541/writerImage/14975201094381584.png",
		"picture": ["/static/img/topicImage/541/headImage/14975201299461587.jpg", "/static/img/topicImage/541/headImage/14975201299461587.jpg", "/static/img/topicImage/541/headImage/14975201351811589.jpg", "/static/img/topicImage/541/headImage/14975201373211590.jpg", "/static/img/topicImage/541/headImage/14975201249891585.jpg", "/static/img/topicImage/541/headImage/14975201282521586.jpg", "/static/img/topicImage/541/headImage/14975201320971588.jpg", "/static/img/topicImage/541/headImage/14975201395411591.jpg", "/static/img/topicImage/541/headImage/14975201410441592.jpg"],
		"headline": "父爱如衫，亲子装这样穿",
		"content": "男人什么时候最有魅力？想必是一脸温情地与孩子相处的时候。若是穿上父子装，一大一小...",
		"watchNumber": "27.4k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 538,
		"writer": "服装组：内内",
		"writerImage": "/static/img/topicImage/538/writerImage/14974394041520377.png",
		"picture": ["/static/img/topicImage/538/headImage/14974394461430381.jpg", "/static/img/topicImage/538/headImage/14974394461430381.jpg", "/static/img/topicImage/538/headImage/14974394396900380.jpg", "/static/img/topicImage/538/headImage/14974394535190382.jpg", "/static/img/topicImage/538/headImage/14974394367270379.jpg", "/static/img/topicImage/538/headImage/14974394188050378.jpg", "/static/img/topicImage/538/headImage/14974394917720386.jpg", "/static/img/topicImage/538/headImage/14974394607860383.jpg", "/static/img/topicImage/538/headImage/14974394639780384.jpg", "/static/img/topicImage/538/headImage/14974394677210385.jpg"],
		"headline": "牛仔裤够清凉，夏天才想穿",
		"content": "牛仔裤一直是时尚圈永不过气的单品，但由于面料厚硬，再爱它的人，夏天穿着都需要勇气...",
		"watchNumber": "55.0k",
		"price": 35.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 533,
		"writer": "居家组：朵朵",
		"writerImage": "/static/img/topicImage/533/writerImage/14973406959968168.png",
		"picture": ["/static/img/topicImage/533/headImage/14973407178978169.jpg", "/static/img/topicImage/533/headImage/14973407178978169.jpg", "/static/img/topicImage/533/headImage/14973407254068170.jpg", "/static/img/topicImage/533/headImage/14973407279888171.jpg", "/static/img/topicImage/533/headImage/14973407342378172.jpg", "/static/img/topicImage/533/headImage/14973407370738173.jpg", "/static/img/topicImage/533/headImage/14973407434198174.jpg"],
		"headline": "2千多买到5星酒店睡感床垫",
		"content": "我们为了定下这款床垫，几乎把各大品牌的床垫都睡了个遍。我们发现软的一定比硬的有承...",
		"watchNumber": "45.4k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 532,
		"writer": "明星商品",
		"writerImage": "/static/img/topicImage/532/writerImage/09628cf8d3cfacf456cd4afb78b4a788.png",
		"picture": ["/static/img/topicImage/532/headImage/08b09f39aaf01bfbed55d9dc05a9a32c.jpg"],
		"headline": "幸福的家，不能少懒人沙发",
		"content": "进口粒子饱满填充，有弹性，更静音",
		"watchNumber": "104.6k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 529,
		"writer": "海外组：小嗨",
		"writerImage": "/static/img/topicImage/529/writerImage/14970773883727099.png",
		"picture": ["/static/img/topicImage/529/headImage/14970774128537100.jpg", "/static/img/topicImage/529/headImage/14970774128537100.jpg", "/static/img/topicImage/529/headImage/14970774321497103.jpg", "/static/img/topicImage/529/headImage/14972349117587184.jpg", "/static/img/topicImage/529/headImage/14975050576471518.jpg", "/static/img/topicImage/529/headImage/14970774205437101.jpg", "/static/img/topicImage/529/headImage/14970774246067102.jpg", "/static/img/topicImage/529/headImage/14970776291207104.jpg"],
		"headline": "终于为你选到天然泰国乳胶枕",
		"content": "这是迄今为止我最为惊险的一次选品经历。因为在来泰国之前，我们根本不知道去的是一个...",
		"watchNumber": "41.8k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 528,
		"writer": "杂货组：冯娟",
		"writerImage": "/static/img/topicImage/528/writerImage/14970120893516902.png",
		"picture": ["/static/img/topicImage/528/headImage/14972605804047541.jpg", "/static/img/topicImage/528/headImage/14972605804047541.jpg", "/static/img/topicImage/528/headImage/14970108046406898.jpg", "/static/img/topicImage/528/headImage/14970108082536899.jpg", "/static/img/topicImage/528/headImage/14970108103106900.jpg"],
		"headline": "防晒伞，就是要比手机还轻",
		"content": "炎炎夏日，出门最不能忘带的就是一把能防晒的阳伞。可是夏天背轻便小包居多，阳伞常常...",
		"watchNumber": "71.5k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 518,
		"writer": "智造组：涛姐",
		"writerImage": "/static/img/topicImage/518/writerImage/14969135811055427.png",
		"picture": ["/static/img/topicImage/518/headImage/14969729364305944.jpg", "/static/img/topicImage/518/headImage/14969729364305944.jpg", "/static/img/topicImage/518/headImage/14969268001325776.jpg", "/static/img/topicImage/518/headImage/14969268053115777.jpg", "/static/img/topicImage/518/headImage/14969268097275778.jpg"],
		"headline": "论除螨，它比阳光更专业",
		"content": "前阵子家里准备换夏凉被与凉席时，恰好碰见阴天没法晒，还好除螨吸尘器正在家中待试用...",
		"watchNumber": "33.0k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 509,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/509/writerImage/1b5758d9063f640e41216979a7b00b12.png",
		"picture": ["/static/img/topicImage/509/headImage/913beafab8e0413b8f8de09c5cbc35dd.jpg"],
		"headline": "男士夏季搭配指南",
		"content": "8种超简单搭配，搭出夏日清爽",
		"watchNumber": "180.0k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 510,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/510/writerImage/6abe19adf80e5281668f9cdb2c3de77f.png",
		"picture": ["/static/img/topicImage/510/headImage/ccefc4edceade860a27aa8fdf032c0a7.jpg"],
		"headline": "这些好物天天上热搜",
		"content": "人人都在搜的热门应季新品",
		"watchNumber": "97.9k",
		"price": 5.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 517,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/517/writerImage/732bebed4a3d8b2119d21f24eae19002.png",
		"picture": ["/static/img/topicImage/517/headImage/35fa992ffcd0538550778da342409d4e.jpg"],
		"headline": "一粒米饭上住着7个神明",
		"content": "百年古窑出品，会呼吸的土锅",
		"watchNumber": "67.4k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 500,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/500/writerImage/4ae8b5bd4ce28b1b816023fe2087f98c.png",
		"picture": ["/static/img/topicImage/500/headImage/88317d85e14fd2ad0b82d82186a9a607.jpg"],
		"headline": "再重要的考试，也要轻松上场",
		"content": "4个方案帮你轻松备考",
		"watchNumber": "69.9k",
		"price": 4.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 498,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/498/writerImage/527781d1c0af190c461b9b059e8e5cf9.png",
		"picture": ["/static/img/topicImage/498/headImage/14963948186540321.jpg"],
		"headline": "经常断货的它们终于又上架了",
		"content": "拼手速买爆品的时刻到了！",
		"watchNumber": "400.6k",
		"price": 7.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 494,
		"writer": "家具组：刘宝",
		"writerImage": "/static/img/topicImage/494/writerImage/14963120471750183.png",
		"picture": ["/static/img/topicImage/494/headImage/14963120968520185.jpg", "/static/img/topicImage/494/headImage/14963120968520185.jpg", "/static/img/topicImage/494/headImage/14963120995990186.jpg", "/static/img/topicImage/494/headImage/14963121023290187.jpg", "/static/img/topicImage/494/headImage/14963121046420188.jpg", "/static/img/topicImage/494/headImage/14963121096280189.jpg", "/static/img/topicImage/494/headImage/14963121160160191.jpg", "/static/img/topicImage/494/headImage/14963121114170190.jpg"],
		"headline": "摆上这束花，让美好永不凋零",
		"content": "许多人想要用鲜花点缀生活，却因工作繁忙，花朵枯萎也来不及收拾替换。许多人，买种子...",
		"watchNumber": "56.9k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 491,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/491/writerImage/ed2df70e40fdfac7beb8cf698be549a0.png",
		"picture": ["/static/img/topicImage/491/headImage/14962000956011232.jpg"],
		"headline": "这些配饰，为夏季造型加分",
		"content": "女士夏季搭配指南",
		"watchNumber": "157.3k",
		"price": 19.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 488,
		"writer": "婴童组：娟子",
		"writerImage": "/static/img/topicImage/488/writerImage/14958766530280928.png",
		"picture": ["/static/img/topicImage/488/headImage/14958766679960929.jpg", "/static/img/topicImage/488/headImage/14958766679960929.jpg", "/static/img/topicImage/488/headImage/14958766718650930.jpg", "/static/img/topicImage/488/headImage/14958766735260931.jpg", "/static/img/topicImage/488/headImage/14958766757030932.jpg", "/static/img/topicImage/488/headImage/14958766784080933.jpg"],
		"headline": "许他一个难忘的美好童年",
		"content": "严选母婴上线一周年了，这一年我们从0起步，到在线商品接近200件。我们想象中，想...",
		"watchNumber": "32.3k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 482,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/482/writerImage/14957821249220090.png",
		"picture": ["/static/img/topicImage/482/headImage/14958115221000215.jpg"],
		"headline": "黄梅时节家家雨，闲嗑瓜子坐喝茶",
		"content": "多款小食直减中，最高直减42元",
		"watchNumber": "35.5k",
		"price": 15.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 478,
		"writer": "饮食组：果果",
		"writerImage": "/static/img/topicImage/478/writerImage/14957097895033260.png",
		"picture": ["/static/img/topicImage/478/headImage/14957098057523262.jpg", "/static/img/topicImage/478/headImage/14957098057523262.jpg", "/static/img/topicImage/478/headImage/14957098082323263.jpg", "/static/img/topicImage/478/headImage/14957098144883264.jpg", "/static/img/topicImage/478/headImage/14957098178583265.jpg", "/static/img/topicImage/478/headImage/14957098235483266.jpg", "/static/img/topicImage/478/headImage/14957098256343267.jpg", "/static/img/topicImage/478/headImage/14957098281413268.jpg"],
		"headline": "吃过这份小龙虾，再来谈人生",
		"content": "每到夏日深夜，小龙虾就占领各路餐桌与朋友圈，人人大啖小龙虾。名声响亮的店动辄要穿...",
		"watchNumber": "35.4k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 476,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/476/writerImage/a606f697fc2a2bc844d9a604db25ca71.png",
		"picture": ["/static/img/topicImage/476/headImage/14956187480922543.jpg"],
		"headline": "夏日旅行箱打包手册",
		"content": "旅行达人必备的出游良伴",
		"watchNumber": "135.0k",
		"price": 19.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 470,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/470/writerImage/60cb71d3c881f1cc7df4b2c61daf0f65.png",
		"picture": ["/static/img/topicImage/470/headImage/14954234296780891.jpg"],
		"headline": "黑凤梨，喜欢你",
		"content": "《我们相爱吧》明星定制系列",
		"watchNumber": "146.2k",
		"price": 14.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 464,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/464/writerImage/c898e763de9f1dcd21b981018bcce6a6.png",
		"picture": ["/static/img/topicImage/464/headImage/14951934215120540.jpg"],
		"headline": "用最简单的方式治愈生活",
		"content": "你的生活需要这些治愈系",
		"watchNumber": "111.1k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 466,
		"writer": "服装组：内内",
		"writerImage": "/static/img/topicImage/466/writerImage/14951010888339172.png",
		"picture": ["/static/img/topicImage/466/headImage/14951011027379174.jpg", "/static/img/topicImage/466/headImage/14951011027379174.jpg", "/static/img/topicImage/466/headImage/14951011047699175.jpg", "/static/img/topicImage/466/headImage/14951011072749176.jpg", "/static/img/topicImage/466/headImage/14951011091169177.jpg", "/static/img/topicImage/466/headImage/14951011125039178.jpg", "/static/img/topicImage/466/headImage/14951011152749179.jpg"],
		"headline": "慵懒的背心，宣告夏天来临",
		"content": "夏天里最慵懒闲适的画面，莫过于吹来温热晚风的傍晚，你回到家换下束缚的外出服，穿上...",
		"watchNumber": "68.4k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 463,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/463/writerImage/6820082490d772f33f864385c29f684f.png",
		"picture": ["/static/img/topicImage/463/headImage/14950248516338454.jpg"],
		"headline": "时髦过周末，一起去露营吧！",
		"content": "帐篷、吊床，露营必备装备手册",
		"watchNumber": "66.4k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 347,
		"writer": "周边组：wower",
		"writerImage": "/static/img/topicImage/347/writerImage/14948482286207373.png",
		"picture": ["/static/img/topicImage/347/headImage/14948482605887375.jpg", "/static/img/topicImage/347/headImage/14948482605887375.jpg", "/static/img/topicImage/347/headImage/14948482624727376.jpg", "/static/img/topicImage/347/headImage/14948482639067377.jpg", "/static/img/topicImage/347/headImage/14948482655917378.jpg"],
		"headline": "游戏热爱日，暴雪周边嘉年华",
		"content": "魔兽世界登陆中国，已经12年。无数英雄，在这片大陆展开冒险，他们奔跑、成长、创造...",
		"watchNumber": "18.6k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 344,
		"writer": "配件组：田甜",
		"writerImage": "/static/img/topicImage/344/writerImage/14945952470225871.png",
		"picture": ["/static/img/topicImage/344/headImage/14945952626205874.jpg", "/static/img/topicImage/344/headImage/14945952626205874.jpg", "/static/img/topicImage/344/headImage/14945952604835873.jpg", "/static/img/topicImage/344/headImage/14945952712795878.jpg", "/static/img/topicImage/344/headImage/14945952698375877.jpg", "/static/img/topicImage/344/headImage/14945952746925879.jpg"],
		"headline": "没有它，怎么去走天涯",
		"content": "阳光不骄不躁的五月，不去走走，真是辜负了大好年华。除了机票，出发之前最应该准备好...",
		"watchNumber": "54.6k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 337,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/337/writerImage/22eaa32449a2fea367787b09a38089cc.png",
		"picture": ["/static/img/topicImage/337/headImage/14944908427283682.jpg"],
		"headline": "这双拖鞋，治愈人生",
		"content": "夏日居家必备",
		"watchNumber": "95.0k",
		"price": 19.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 333,
		"writer": "配件组：羊羊",
		"writerImage": "/static/img/topicImage/333/writerImage/14944148194693224.png",
		"picture": ["/static/img/topicImage/333/headImage/14944148335453225.jpg", "/static/img/topicImage/333/headImage/14944148335453225.jpg", "/static/img/topicImage/333/headImage/14944148353753226.jpg", "/static/img/topicImage/333/headImage/14944148371713227.jpg", "/static/img/topicImage/333/headImage/14944148391743228.jpg", "/static/img/topicImage/333/headImage/14944148429113229.jpg", "/static/img/topicImage/333/headImage/14944148446603230.jpg"],
		"headline": "戴上墨镜，凹个时髦造型",
		"content": "夏日阳光已经开始刺眼，名正言顺地拿出墨镜凹造型的时刻到了！为了让墨镜既是造型利器...",
		"watchNumber": "64.8k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 313,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/313/writerImage/a6a6db1169fd85bef610ba32f91c3d04.png",
		"picture": ["/static/img/topicImage/313/headImage/14942996754171334.jpg"],
		"headline": "一次解决5个节日送礼难题",
		"content": "这些就是他们想要的礼物清单",
		"watchNumber": "155.6k",
		"price": 59.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 300,
		"writer": "餐厨组：锅锅",
		"writerImage": "/static/img/topicImage/300/writerImage/14939843011001088.png",
		"picture": ["/static/img/topicImage/300/headImage/14939843143621089.jpg", "/static/img/topicImage/300/headImage/14939843143621089.jpg", "/static/img/topicImage/300/headImage/14939843163151090.jpg", "/static/img/topicImage/300/headImage/14939843192151091.jpg", "/static/img/topicImage/300/headImage/14939843229801092.jpg"],
		"headline": "秒杀化学洗涤剂的纯天然皂",
		"content": "前段时间有朋友跟我抱怨，和婆婆住到一起才发现生活理念有太多不和。别的不提，光是洗...",
		"watchNumber": "51.8k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 299,
		"writer": "服装组：内内",
		"writerImage": "/static/img/topicImage/299/writerImage/14938873720850678.png",
		"picture": ["/static/img/topicImage/299/headImage/14938873919030679.jpg", "/static/img/topicImage/299/headImage/14938873919030679.jpg", "/static/img/topicImage/299/headImage/14938873935720680.jpg", "/static/img/topicImage/299/headImage/14938873949960681.jpg", "/static/img/topicImage/299/headImage/14938873997030682.jpg"],
		"headline": "买过的人都说它是差旅神器",
		"content": "许多人经历过旅途中内裤洗晾不便的烦恼，尤其与旅伴同居一室时，晾在卫生间里的内裤更...",
		"watchNumber": "99.3k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 295,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/295/writerImage/7a8e96baacea91b061fd133456d4c55a.png",
		"picture": ["/static/img/topicImage/295/headImage/14938092956370380.jpg"],
		"headline": "他们在严选遇见的新生活",
		"content": "不一样的年代，一样的严选",
		"watchNumber": "84.6k",
		"price": 35.8
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 291,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/291/writerImage/666768709abdadd2dcd2ec039e1a0c91.png",
		"picture": ["/static/img/topicImage/291/headImage/14939496197300723.jpg"],
		"headline": "舒适新主张",
		"content": "如何挑选适合自己的好物？",
		"watchNumber": "101.7k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 289,
		"writer": "配件组：羊羊",
		"writerImage": "/static/img/topicImage/289/writerImage/14932840884890614.png",
		"picture": ["/static/img/topicImage/289/headImage/14932840600970609.jpg", "/static/img/topicImage/289/headImage/14932840600970609.jpg", "/static/img/topicImage/289/headImage/14932840555030607.jpg", "/static/img/topicImage/289/headImage/14932840688950610.jpg", "/static/img/topicImage/289/headImage/14932840728680611.jpg", "/static/img/topicImage/289/headImage/14932840744900612.jpg", "/static/img/topicImage/289/headImage/14932840763720613.jpg"],
		"headline": "专业运动袜也可以高性价比",
		"content": "越来越多运动人士意识到，运动鞋要购置好的，鞋里的运动袜也不可忽视。专业运动袜帮助...",
		"watchNumber": "24.4k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 287,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/287/writerImage/401d107ad25f46a2de3d2e3d0ec173ca.png",
		"picture": ["/static/img/topicImage/287/headImage/14931970965550315.jpg"],
		"headline": "严选新式样板间",
		"content": "一种软装一个家",
		"watchNumber": "145.8k",
		"price": 29.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 286,
		"writer": "饮食组：果果",
		"writerImage": "/static/img/topicImage/286/writerImage/14931121505610125.png",
		"picture": ["/static/img/topicImage/286/headImage/14931121822100127.jpg", "/static/img/topicImage/286/headImage/14931121822100127.jpg", "/static/img/topicImage/286/headImage/14931121803660126.jpg", "/static/img/topicImage/286/headImage/14931121838790128.jpg", "/static/img/topicImage/286/headImage/14931121876760129.jpg", "/static/img/topicImage/286/headImage/14931121904330130.jpg", "/static/img/topicImage/286/headImage/14931121936030131.jpg"],
		"headline": "无“油”无虑的甜蜜酥脆",
		"content": "大家都知道，饮食组是严选体重最重的一组，基本上每个新人都能在一个月之内迅速长胖。...",
		"watchNumber": "32.8k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 282,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/282/writerImage/14927695155801070.png",
		"picture": ["/static/img/topicImage/282/headImage/14927695046601069.jpg"],
		"headline": "成就一室笋香",
		"content": "三石哥办公室常备小食推荐",
		"watchNumber": "62.7k",
		"price": 12.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 283,
		"writer": "婴童组：娟子",
		"writerImage": "/static/img/topicImage/283/writerImage/14927748094971079.png",
		"picture": ["/static/img/topicImage/283/headImage/14927748974441080.jpg", "/static/img/topicImage/283/headImage/14927748974441080.jpg", "/static/img/topicImage/283/headImage/14927748990361081.jpg", "/static/img/topicImage/283/headImage/14927749015791082.jpg", "/static/img/topicImage/283/headImage/14927749130911083.jpg", "/static/img/topicImage/283/headImage/14927749184991084.jpg"],
		"headline": "孩子成长中少不了的一双鞋",
		"content": "说起毛毛虫鞋，好处实在太多了，作为一个3岁孩子的宝妈选品员，按捺不住想告诉大家，...",
		"watchNumber": "51.3k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 277,
		"writer": "居家组：朵朵",
		"writerImage": "/static/img/topicImage/277/writerImage/14926748590030593.png",
		"picture": ["/static/img/topicImage/277/headImage/14926737925770587.jpg", "/static/img/topicImage/277/headImage/14926737925770587.jpg", "/static/img/topicImage/277/headImage/14926744668250591.png", "/static/img/topicImage/277/headImage/14926737944410588.jpg", "/static/img/topicImage/277/headImage/14926737961240589.jpg", "/static/img/topicImage/277/headImage/14926744763960592.png"],
		"headline": "治愈生活的满怀柔软",
		"content": "太鼓抱枕的上架历程，是从失踪开始的。由于表面的绒感，最初它被安排在秋冬季上架。某...",
		"watchNumber": "35.8k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 274,
		"writer": "配件组：小托",
		"writerImage": "/static/img/topicImage/274/writerImage/14925821004620235.png",
		"picture": ["/static/img/topicImage/274/headImage/14925822213780237.jpg", "/static/img/topicImage/274/headImage/14925822213780237.jpg", "/static/img/topicImage/274/headImage/14925822260660238.jpg", "/static/img/topicImage/274/headImage/14925822179850236.jpg", "/static/img/topicImage/274/headImage/14925822291880239.jpg", "/static/img/topicImage/274/headImage/14925822334310240.jpg", "/static/img/topicImage/274/headImage/14925822359970241.jpg", "/static/img/topicImage/274/headImage/14925822392570242.jpg"],
		"headline": "没有软木拖，怎么过夏天",
		"content": "刚入四月，杭州的气温就已升高至30度。店庆时买了软木拖的用户，陆续发回评价说，很...",
		"watchNumber": "69.8k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 271,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/271/writerImage/e1f574faadedd10b00df0831982a4185.png",
		"picture": ["/static/img/topicImage/271/headImage/14924199099661697.jpg"],
		"headline": "选式新懒人",
		"content": "懒出格调，懒出好生活。",
		"watchNumber": "105.5k",
		"price": 15.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 268,
		"writer": "海外组：小嗨",
		"writerImage": "/static/img/topicImage/268/writerImage/14920712417610604.png",
		"picture": ["/static/img/topicImage/268/headImage/14920623353130483.jpg", "/static/img/topicImage/268/headImage/14920623353130483.jpg", "/static/img/topicImage/268/headImage/14920623430030485.jpg", "/static/img/topicImage/268/headImage/14920623464390486.jpg", "/static/img/topicImage/268/headImage/14920623486540487.jpg", "/static/img/topicImage/268/headImage/14920623520670488.jpg", "/static/img/topicImage/268/headImage/14920623543250489.jpg", "/static/img/topicImage/268/headImage/14920623581580490.jpg", "/static/img/topicImage/268/headImage/14920623622160491.jpg", "/static/img/topicImage/268/headImage/14920623650540492.jpg"],
		"headline": "米饭好吃的秘诀：会呼吸的锅",
		"content": "今年1月份，我们联系到了日本伊贺地区的长谷园，那里有着180年伊贺烧历史的窑厂。...",
		"watchNumber": "48.8k",
		"price": 15.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 266,
		"writer": "配件组：羊羊",
		"writerImage": "/static/img/topicImage/266/writerImage/14919005600900208.png",
		"picture": ["/static/img/topicImage/266/headImage/14919007135160213.jpg", "/static/img/topicImage/266/headImage/14919007135160213.jpg", "/static/img/topicImage/266/headImage/14919007156760214.jpg", "/static/img/topicImage/266/headImage/14919007111290212.jpg", "/static/img/topicImage/266/headImage/14919007020190210.jpg", "/static/img/topicImage/266/headImage/14919007240240216.jpg", "/static/img/topicImage/266/headImage/14919007265600217.jpg", "/static/img/topicImage/266/headImage/14919007217100215.jpg"],
		"headline": "一条丝巾就能提升时髦度",
		"content": "不知道大家对去年G20时，严选与国礼制造商一起推出的《凤凰于飞》等几款丝巾是否还...",
		"watchNumber": "51.6k",
		"price": 15.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 264,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/264/writerImage/b928e916dc4c7c5bb42e003d26e5f252.png",
		"picture": ["/static/img/topicImage/264/headImage/14918201901050274.jpg"],
		"headline": "设计师们推荐的应季好物",
		"content": "原创设计春款系列上新",
		"watchNumber": "104.5k",
		"price": 29.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 260,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/260/writerImage/14920662180710504.png",
		"picture": ["/static/img/topicImage/260/headImage/14915568024544047.jpg"],
		"headline": "新品新势力",
		"content": "来看看近期严选都上新了哪些好物",
		"watchNumber": "172.1k",
		"price": 12.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 259,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/259/writerImage/14914810330183401.png",
		"picture": ["/static/img/topicImage/259/headImage/14914889098053703.jpg"],
		"headline": "带上TA去环游世界",
		"content": "各色热卖旅行箱，满足出行需求",
		"watchNumber": "139.6k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 258,
		"writer": "服装组：内内",
		"writerImage": "/static/img/topicImage/258/writerImage/14914495145642874.png",
		"picture": ["/static/img/topicImage/258/headImage/14931970393790313.jpg", "/static/img/topicImage/258/headImage/14931970393790313.jpg", "/static/img/topicImage/258/headImage/14914496073712876.jpg", "/static/img/topicImage/258/headImage/14914496120372877.jpg", "/static/img/topicImage/258/headImage/14914496141492878.jpg", "/static/img/topicImage/258/headImage/14914496174372879.jpg", "/static/img/topicImage/258/headImage/14914496211632880.jpg", "/static/img/topicImage/258/headImage/14914496241182881.jpg"],
		"headline": "让真丝睡衣进入普通人的日常",
		"content": "古时平民管自己叫布衣，只有王公贵族才能穿丝绸。因此真丝给人的印象，一直是昂贵而不...",
		"watchNumber": "111.8k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 255,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/255/writerImage/3925f28221206295105780dddcf9385d.png",
		"picture": ["/static/img/topicImage/255/headImage/14914437252832832.jpg"],
		"headline": "严选到底什么值得囤",
		"content": "这些消耗品真的超容易售罄",
		"watchNumber": "171.2k",
		"price": 5.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 253,
		"writer": "居家组：朵朵",
		"writerImage": "/static/img/topicImage/253/writerImage/14910416048801509.png",
		"picture": ["/static/img/topicImage/253/headImage/14910421041221516.jpg", "/static/img/topicImage/253/headImage/14910421041221516.jpg", "/static/img/topicImage/253/headImage/14910420887681514.jpg", "/static/img/topicImage/253/headImage/14910420905291515.jpg", "/static/img/topicImage/253/headImage/14910420842771513.jpg", "/static/img/topicImage/253/headImage/14910420774041511.jpg", "/static/img/topicImage/253/headImage/14910420833071512.jpg"],
		"headline": "加班必备的办公室神器",
		"content": "为了加快上新速度，同时更保证选品质量，同事们一直处在不停加班的状态中。严选内部甚...",
		"watchNumber": "91.5k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 251,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/251/writerImage/14920662435830509.png",
		"picture": ["/static/img/topicImage/251/headImage/14909572758030884.jpg"],
		"headline": "它们的老顾客好评数都是999＋",
		"content": "一年来，哪些好物获得了999＋的好评？",
		"watchNumber": "145.2k",
		"price": 14.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 247,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/247/writerImage/14920662587680512.png",
		"picture": ["/static/img/topicImage/247/headImage/14907814461544091.jpg"],
		"headline": "被老顾客回购那些好物",
		"content": "严选一周年了，老顾客们都在回购些什么？",
		"watchNumber": "190.8k",
		"price": 16.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 232,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/232/writerImage/14920662702700514.png",
		"picture": ["/static/img/topicImage/232/headImage/14906002575442631.jpg"],
		"headline": "给孩子的礼物",
		"content": "这个春天，想要给孩子的美好物品",
		"watchNumber": "79.7k",
		"price": 49.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 228,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/228/writerImage/14901815043860911.png",
		"picture": ["/static/img/topicImage/228/headImage/14901814835100910.jpg"],
		"headline": "不再为给男士挑礼物头疼",
		"content": "品质绅士好物推荐",
		"watchNumber": "170.2k",
		"price": 200.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170321,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170321/writerImage/14920662890630517.png",
		"picture": ["/static/img/topicImage/20170321/headImage/14902492053041696.jpg"],
		"headline": "严选十大必吃美食",
		"content": "高颜值好味道美食推荐",
		"watchNumber": "346.9k",
		"price": 7.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170317,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170317/writerImage/14920661711060498.png",
		"picture": ["/static/img/topicImage/20170317/headImage/14902390968681677.jpg"],
		"headline": "优雅女士穿搭好物",
		"content": "得体生活必修课",
		"watchNumber": "140.8k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 227,
		"writer": "餐厨组：锅锅",
		"writerImage": "/static/img/topicImage/227/writerImage/14901517033390015.jpg",
		"picture": ["/static/img/topicImage/227/headImage/14901518251540017.jpg", "/static/img/topicImage/227/headImage/14901518251540017.jpg", "/static/img/topicImage/227/headImage/14901853330970938.jpg", "/static/img/topicImage/227/headImage/14901853365060939.jpg", "/static/img/topicImage/227/headImage/14901518431890020.jpg"],
		"headline": "仙风锦鲤杯的诞生",
		"content": "去年夏天，品牌中心的设计师路过园区里水池的时候，和同事玩笑道：“这儿就是少了几条...",
		"watchNumber": "30.2k",
		"price": 0.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170313,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170313/writerImage/14920662005260501.png",
		"picture": ["/static/img/topicImage/20170313/headImage/cf0b94552e9478b1f8c649fee86e905b.jpg"],
		"headline": "优质型男穿搭好物",
		"content": "得体生活必修课",
		"watchNumber": "215.7k",
		"price": 28.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170310,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170310/writerImage/14920662117240503.png",
		"picture": ["/static/img/topicImage/20170310/headImage/dd07d01de3cf6df60e85349f1766ea8d.jpg"],
		"headline": "摆脱空巢恐惧，享受独居生活",
		"content": "正能量温暖生活好物",
		"watchNumber": "146.5k",
		"price": 12.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170308,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170308/writerImage/14920662221620505.png",
		"picture": ["/static/img/topicImage/20170308/headImage/f80c6c3da9dcaf178f2dbbcd0b3711fe.jpg"],
		"headline": "严选的4条选货标准",
		"content": "严选品质，严选好的生活",
		"watchNumber": "151.9k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170301,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170301/writerImage/14920663636710533.png",
		"picture": ["/static/img/topicImage/20170301/headImage/e21a90074405adc3997e785d2825302e.jpg"],
		"headline": "好东西不该只用来凑单",
		"content": "零食/洗护/日用品系列",
		"watchNumber": "493.7k",
		"price": 7.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170303,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/20170303/writerImage/541492564819b4aaa12fcda6fc24656a.png",
		"picture": ["/static/img/topicImage/20170303/headImage/d5f9df6d3dc777ff8e0d9e7f7111612e.jpg"],
		"headline": "仙风锦鲤保温杯，开启好运",
		"content": "中国风好物，送人自用两相宜",
		"watchNumber": "100.4k",
		"price": 129.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170227,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170227/writerImage/14920662436660510.png",
		"picture": ["/static/img/topicImage/20170227/headImage/9a0a5fb5ccc088356d5c059411f52636.jpg"],
		"headline": "甄选家报告大集结",
		"content": "那些，和你们一起甄选出的好物",
		"watchNumber": "74.4k",
		"price": 19.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170224,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170224/writerImage/14920662607170513.png",
		"picture": ["/static/img/topicImage/20170224/headImage/3231e14e9a85a945704e034d832ed95f.jpg"],
		"headline": "超实用厨房小工具",
		"content": "好用不贵，聪明人都已经入手",
		"watchNumber": "186.3k",
		"price": 14.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170221,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170221/writerImage/14920662741110515.png",
		"picture": ["/static/img/topicImage/20170221/headImage/b1be548023981a0ac215e0bad36c1022.jpg"],
		"headline": "严选陪你改变人生",
		"content": "合理规划生活好物",
		"watchNumber": "122.9k",
		"price": 4.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170217,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170217/writerImage/14920662896640518.png",
		"picture": ["/static/img/topicImage/20170217/headImage/07905c0da0ae56a319d92be6810f2ee6.jpg"],
		"headline": "他们是严选最佳CP",
		"content": "缺一不可的好物组合",
		"watchNumber": "297.4k",
		"price": 5.5
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170213,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170213/writerImage/14920663117210521.png",
		"picture": ["/static/img/topicImage/20170213/headImage/4a99b47a2478d8ceafe486ccc36930b1.jpg"],
		"headline": "5个给春天的生活新提案",
		"content": "餐厨起居洗护好物",
		"watchNumber": "325.7k",
		"price": 14.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170206,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170206/writerImage/14920663190180524.png",
		"picture": ["/static/img/topicImage/20170206/headImage/f6380039ad9f728ffbd2d8f5825a0592.jpg"],
		"headline": "黑凤梨 喜欢你",
		"content": "无论第几年，爱情都需要仪式感",
		"watchNumber": "183.7k",
		"price": 99.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170120,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170120/writerImage/14920663243990525.png",
		"picture": ["/static/img/topicImage/20170120/headImage/4ae63852e05357d738bfd5575816b573.jpg"],
		"headline": "严选新年告白大会",
		"content": "严选团队给您拜年啦",
		"watchNumber": "84.5k",
		"price": 24.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170119,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170119/writerImage/14920663348140529.png",
		"picture": ["/static/img/topicImage/20170119/headImage/0d56651317d40da9afe7c162fa4d64d4.jpg"],
		"headline": "一张黑胶，听岁月如歌",
		"content": "严选典藏版·黑胶系列唱片",
		"watchNumber": "91.7k",
		"price": 248.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170118,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170118/writerImage/14920662994630519.png",
		"picture": ["/static/img/topicImage/20170118/headImage/497eb1a4f37b6906119692427ba6728a.jpg"],
		"headline": "每天，留一段时光做自己",
		"content": "茶歇一刻，精致美味茶点",
		"watchNumber": "196.2k",
		"price": 7.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170116,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170116/writerImage/14920663039310520.png",
		"picture": ["/static/img/topicImage/20170116/headImage/219f9e17973fc18dae5450764e543152.jpg"],
		"headline": "清扫带来生活的喜悦",
		"content": "新年大扫除清洁好物",
		"watchNumber": "326.6k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170117,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/20170117/writerImage/05fe7a5964d2b01af71edf45d7f2a062.png",
		"picture": ["/static/img/topicImage/20170117/headImage/4287b8fb0d047866eededa2a4296cde7.jpg"],
		"headline": "一个音箱，带你回到音乐节",
		"content": "黑科技网易魔方音箱",
		"watchNumber": "258.0k",
		"price": 198.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170109,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170109/writerImage/14920663120790522.png",
		"picture": ["/static/img/topicImage/20170109/headImage/e6363bd9a152a41b7c2a5d3cacf09a7c.jpg"],
		"headline": "严选新年礼盒首发",
		"content": "圆满收官，好礼祝新年",
		"watchNumber": "208.2k",
		"price": 159.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170108,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170108/writerImage/14920663181130523.png",
		"picture": ["/static/img/topicImage/20170108/headImage/4f6566611f9a69397c2cc06ac26eba1b.jpg"],
		"headline": "一针一线缝制这条蚕丝被",
		"content": "手工双宫茧蚕丝被",
		"watchNumber": "57.0k",
		"price": 1599.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170106,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/20170106/writerImage/c702107b3389fbe748da6198c519e9c3.png",
		"picture": ["/static/img/topicImage/20170106/headImage/1a5d7f3facbd131eb6b76563adeeaad2.jpg"],
		"headline": "真空长效储物罐，3倍保鲜",
		"content": "厨房收纳小帮手",
		"watchNumber": "188.2k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20170104,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20170104/writerImage/14920663257500526.png",
		"picture": ["/static/img/topicImage/20170104/headImage/7538fc8de18bc59e6fb353c1ebc312de.jpg"],
		"headline": "严选冷知识之好物妙用",
		"content": "厨房清洁洗浴好物",
		"watchNumber": "153.9k",
		"price": 13.99
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161228,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161228/writerImage/14920663324220528.png",
		"picture": ["/static/img/topicImage/20161228/headImage/922fa101e76b5bb1553a026301386c22.jpg"],
		"headline": "用帽子定性你的时尚品格",
		"content": "来自Gucci、MJ制造商",
		"watchNumber": "160.3k",
		"price": 99.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161226,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161226/writerImage/14920663373890530.png",
		"picture": ["/static/img/topicImage/20161226/headImage/1c319cc1a8dbaf87300e90acc616ec12.jpg"],
		"headline": "泡过温泉，冬日才不算虚度",
		"content": "冬日出行必备好物",
		"watchNumber": "203.8k",
		"price": 19.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161221,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161221/writerImage/14920663438140531.png",
		"picture": ["/static/img/topicImage/20161221/headImage/4e2b154d8681e4b4e4ebae44235216c5.jpg"],
		"headline": "这批雪地靴送到那曲了",
		"content": "来自UGG制造商的雪地靴",
		"watchNumber": "124.2k",
		"price": 199.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161219,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161219/writerImage/14920663589560532.png",
		"picture": ["/static/img/topicImage/20161219/headImage/fe88e73e8e8e6c7df16499d495cc69f3.jpg"],
		"headline": "年终大赏之50元内的好物",
		"content": "精致优雅居家小物",
		"watchNumber": "255.9k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161216,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/20161216/writerImage/f25b2b22f0967821f3ff29372273d6f0.png",
		"picture": ["/static/img/topicImage/20161216/headImage/d2a28530885ec22abe06a753ded0ea13.jpg"],
		"headline": "进可短途差旅，退可亲子嬉戏",
		"content": "这款奶爸包有点厉害",
		"watchNumber": "268.0k",
		"price": 199.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161212,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161212/writerImage/14920663774240535.png",
		"picture": ["/static/img/topicImage/20161212/headImage/44f612d2436e71ae484eadb948985bb5.jpg"],
		"headline": "现在开始，做个行动派",
		"content": "买齐2017提高效率文具，拖延症BYE",
		"watchNumber": "359.3k",
		"price": 4.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161208,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/20161208/writerImage/663c9d294e60b59603ee7fd4e34a812d.png",
		"picture": ["/static/img/topicImage/20161208/headImage/e4043c49e6cb029c700394f80a897538.jpg"],
		"headline": "用过就无法替代的羊绒围巾",
		"content": "100%纯正珍贵羊绒",
		"watchNumber": "211.4k",
		"price": 499.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161207,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161207/writerImage/14920663844680536.png",
		"picture": ["/static/img/topicImage/20161207/headImage/2422f6431d01ffaeb9f5b57f1caa23f4.jpg"],
		"headline": "严选年终大赏之畅销榜",
		"content": "脍炙人口的爆款云集",
		"watchNumber": "435.7k",
		"price": 7.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161205,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161205/writerImage/14920663973000538.png",
		"picture": ["/static/img/topicImage/20161205/headImage/b7c9b8c53944f06d976c547318d46b80.jpg"],
		"headline": "本年度「最好看」的一期专题",
		"content": "严选高颜值模特好物",
		"watchNumber": "185.2k",
		"price": 19.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161201,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161201/writerImage/14924113922761330.png",
		"picture": ["/static/img/topicImage/20161201/headImage/e0519947acd3413d922d214e51ac6123.jpg"],
		"headline": "高颜值好物，晒出生活好品味",
		"content": "教你像ins达人一样拍美食",
		"watchNumber": "246.7k",
		"price": 14.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161129,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161129/writerImage/14924113970991331.png",
		"picture": ["/static/img/topicImage/20161129/headImage/50a435a5481998a5e0d29827d80f9ef1.jpg"],
		"headline": "12月篇 本月必买的好物",
		"content": "暖冬御寒超全指南",
		"watchNumber": "329.7k",
		"price": 19.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161125,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161125/writerImage/14924114017351332.png",
		"picture": ["/static/img/topicImage/20161125/headImage/3a3682329836ec52b80879b2aa5fcb96.jpg"],
		"headline": "治愈冬日选择综合症",
		"content": "你不知道的严选冷知识",
		"watchNumber": "164.2k",
		"price": 99.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161121,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161121/writerImage/14924114152261335.png",
		"picture": ["/static/img/topicImage/20161121/headImage/77eef5037d9c648713e5f54c605ae26e.jpg"],
		"headline": "没人会拒绝冬日的火锅",
		"content": "幸福感满满的火锅厨具",
		"watchNumber": "269.2k",
		"price": 6.5
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161117,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161117/writerImage/14924114195441336.png",
		"picture": ["/static/img/topicImage/20161117/headImage/9e1e4b81b19b9001230f08b94c656e7d.jpg"],
		"headline": "不会穿错の女士搭配指南",
		"content": "冬季淑女出行篇",
		"watchNumber": "271.9k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161115,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161115/writerImage/14924114240841337.png",
		"picture": ["/static/img/topicImage/20161115/headImage/11e42cb1aa0a5779a407513216ff3343.jpg"],
		"headline": "不会穿错の男士搭配指南",
		"content": "冬季绅士出行篇",
		"watchNumber": "254.4k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161112,
		"writer": "丁磊",
		"writerImage": "/static/img/topicImage/20161112/writerImage/adf99dc3557c7ffa390fa07f903f88b7.png",
		"picture": ["/static/img/topicImage/20161112/headImage/e4cb10f973c09fa2b7010197d1c2a495.jpg"],
		"headline": "好毯子，怎能不是澳洲纯羊毛",
		"content": "AB面牛仔蓝美式羊毛盖毯",
		"watchNumber": "8.4k",
		"price": 199.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161107,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161107/writerImage/14924114383381339.png",
		"picture": ["/static/img/topicImage/20161107/headImage/aaf4f97e5a5ea794b482a2af8a1950aa.jpg"],
		"headline": "“南部铁器”升级版炒锅",
		"content": "柳宗理品牌制造商直供",
		"watchNumber": "185.4k",
		"price": 49.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161104,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161104/writerImage/14924114424841340.png",
		"picture": ["/static/img/topicImage/20161104/headImage/a2b6dc3c2787ec7674a3eb7e1699ebc0.jpg"],
		"headline": "11月篇 本月必买的好物",
		"content": "双11买买买指南",
		"watchNumber": "306.9k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161024,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161024/writerImage/14924114475491341.png",
		"picture": ["/static/img/topicImage/20161024/headImage/22cce5e354d6b4738475fd6c83b72912.jpg"],
		"headline": "养猫和养狗的区别",
		"content": "铲屎官上任必买手册",
		"watchNumber": "106.2k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161102,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161102/writerImage/14924114637411343.png",
		"picture": ["/static/img/topicImage/20161102/headImage/ce344cc83005ac9252c95ec760dcd69b.jpg"],
		"headline": "享受五星级睡眠",
		"content": "双层立衬工艺，杜绝热量流失",
		"watchNumber": "96.5k",
		"price": 1999.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161031,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161031/writerImage/14924114806631345.png",
		"picture": ["/static/img/topicImage/20161031/headImage/889283265541fe8d7831d9025989651f.jpg"],
		"headline": "甄选家首次回礼",
		"content": "免费领1500份抹茶煎饼",
		"watchNumber": "104.5k",
		"price": 49.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161026,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161026/writerImage/14924114916021346.png",
		"picture": ["/static/img/topicImage/20161026/headImage/ae224fa9a0a88a62151dccefe632437a.jpg"],
		"headline": "治愈生活的一口甜",
		"content": "美味下午茶小食",
		"watchNumber": "100.7k",
		"price": 16.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161021,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161021/writerImage/14924114962331347.png",
		"picture": ["/static/img/topicImage/20161021/headImage/6d9eea57bc7f84f895f4363b6b47e971.jpg"],
		"headline": "这只环保袋，请你用131次",
		"content": "环保主义者的自我修养",
		"watchNumber": "129.6k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161019,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161019/writerImage/14924115010701348.png",
		"picture": ["/static/img/topicImage/20161019/headImage/2c969c6a8cb1664903d5dd65f3ab966a.jpg"],
		"headline": "理想运动袜专业指南",
		"content": "纯棉/羊毛/兔毛袜",
		"watchNumber": "229.0k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161012,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161012/writerImage/14924115278221350.png",
		"picture": ["/static/img/topicImage/20161012/headImage/31e12bd1b4cf653141093a8bcd7acac2.jpg"],
		"headline": "懂它，比懂女票的心更重要",
		"content": "来自Levis/爱慕制造商",
		"watchNumber": "199.9k",
		"price": 39.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20161009,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20161009/writerImage/14924115677461351.png",
		"picture": ["/static/img/topicImage/20161009/headImage/86877367fcf874ce5644224ae8a8a638.jpg"],
		"headline": "换季买包正当时",
		"content": "你的优雅帅气，我承“包”了",
		"watchNumber": "249.8k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160930,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160930/writerImage/f0ced01e1c51f0b82c556187d4ac2d53.png",
		"picture": ["/static/img/topicImage/20160930/headImage/2e71b4065f0faf2586b6d66a49a98acd.jpg"],
		"headline": "10月篇 本月必买的好物",
		"content": "出游必买系列",
		"watchNumber": "320.2k",
		"price": 12.5
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160928,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160928/writerImage/14924115724161352.png",
		"picture": ["/static/img/topicImage/20160928/headImage/5baa17a47a8971a27ae462774d5e32c1.jpg"],
		"headline": "职场人的一天——女士篇",
		"content": "OL必备好物",
		"watchNumber": "239.5k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160921,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160921/writerImage/14924115825601354.png",
		"picture": ["/static/img/topicImage/20160921/headImage/56040c059be894c5f9500cfeae5ecefc.jpg"],
		"headline": "短途出游的减法方案",
		"content": "衣用住行超全指南",
		"watchNumber": "156.4k",
		"price": 15.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160919,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160919/writerImage/14924115866681355.png",
		"picture": ["/static/img/topicImage/20160919/headImage/63f6f69a3e62fc058de8d56368938025.jpg"],
		"headline": "严选灯具新品首发",
		"content": "日式优雅台灯/落地灯",
		"watchNumber": "123.3k",
		"price": 199.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160914,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160914/writerImage/14924115907981356.png",
		"picture": ["/static/img/topicImage/20160914/headImage/ee1bd2b6955e25f5a2d5e46b2b9f6600.jpg"],
		"headline": "解锁清洁新技能",
		"content": "带你高效优雅做清洁",
		"watchNumber": "190.2k",
		"price": 9.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160912,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160912/writerImage/14924115953641357.png",
		"picture": ["/static/img/topicImage/20160912/headImage/6cbf8ce44558a394a68f221cd649dda0.jpg"],
		"headline": "通往青春的门票",
		"content": "旧时光里的好物荟集",
		"watchNumber": "205.9k",
		"price": 4.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160907,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160907/writerImage/14924116036721359.png",
		"picture": ["/static/img/topicImage/20160907/headImage/637902b4501bef88cd4c0a1532c8c304.jpg"],
		"headline": "国礼丝巾|女性的优雅秘诀",
		"content": "丝巾搭配的N种可能",
		"watchNumber": "114.0k",
		"price": 169.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160902,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160902/writerImage/14924116083661360.png",
		"picture": ["/static/img/topicImage/20160902/headImage/338b0104837b77ccf72f77e0cd49633c.png"],
		"headline": "9月篇 本月必买的好物",
		"content": "初秋必备清单",
		"watchNumber": "193.2k",
		"price": 8.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160831,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160831/writerImage/14924116142521361.png",
		"picture": ["/static/img/topicImage/20160831/headImage/123e387dc927e0c9f01cea3457de18cc.jpg"],
		"headline": "都是月亮惹的“货”",
		"content": "中秋美食，低糖低油",
		"watchNumber": "118.3k",
		"price": 25.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160829,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160829/writerImage/14924116197581362.png",
		"picture": ["/static/img/topicImage/20160829/headImage/774441ec65c88202b51f46ae0cd3124d.jpg"],
		"headline": "7分钟自制冰沙",
		"content": "芒果冰、咖啡雪顶超简单教程",
		"watchNumber": "74.2k",
		"price": 49.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160817,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160817/writerImage/14924116392691364.png",
		"picture": ["/static/img/topicImage/20160817/headImage/71d4eeb4deba519f23af8373befbacca.jpg"],
		"headline": "妈咪宝贝の安心一夏",
		"content": "230元母婴券免费领",
		"watchNumber": "117.4k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160823,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160823/writerImage/14924116482101365.png",
		"picture": ["/static/img/topicImage/20160823/headImage/f25bf645d4fcdcff700f7a73ed09724d.jpg"],
		"headline": "从洁面皂开始，改变洗脸方式",
		"content": "5秒测出洁面方式",
		"watchNumber": "183.0k",
		"price": 49.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160822,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160822/writerImage/14924116572721370.png",
		"picture": ["/static/img/topicImage/20160822/headImage/d06f4818a3747917b938aec3d3dda36b.jpg"],
		"headline": "收纳，是方寸间的舞蹈",
		"content": "一劳永逸的衣物收纳法则",
		"watchNumber": "188.7k",
		"price": 35.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160816,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160816/writerImage/14924116664411371.png",
		"picture": ["/static/img/topicImage/20160816/headImage/69b32594a5d5633c0ce5899884e68866.jpg"],
		"headline": "好“妆”备打造空气妆容",
		"content": "精致自然，贴合细腻",
		"watchNumber": "65.3k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160811,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160811/writerImage/14924116754221373.png",
		"picture": ["/static/img/topicImage/20160811/headImage/b843809f2be0b4526e6ad448c3464d2a.jpg"],
		"headline": "陪你从诗词歌赋到柴米油盐",
		"content": "诗酒花茶的文艺日常",
		"watchNumber": "130.1k",
		"price": 25.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160809,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160809/writerImage/14924116788721374.png",
		"picture": ["/static/img/topicImage/20160809/headImage/316131c314a2f3545b0c6c9bf0a41f8e.jpg"],
		"headline": "换条毛巾，换新生活",
		"content": "来自内野制造商",
		"watchNumber": "277.4k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160617,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160617/writerImage/14924116825461375.png",
		"picture": ["/static/img/topicImage/20160617/headImage/38d007e82cecb7c147065386c0532b75.jpg"],
		"headline": "诗与远方，都在脚下",
		"content": "进口羊毛地毯系列",
		"watchNumber": "110.3k",
		"price": 969.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160728,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160728/writerImage/14924116863631376.png",
		"picture": ["/static/img/topicImage/20160728/headImage/1a47f873401c935889e743543b85fc48.jpg"],
		"headline": "职场人の六大自我修养",
		"content": "超实用文具合集",
		"watchNumber": "367.2k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160711,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160711/writerImage/14924117057481379.png",
		"picture": ["/static/img/topicImage/20160711/headImage/9c7aa0f24bc51293f7d79ff08f6ac1c6.jpg"],
		"headline": "一把雨伞成就一位绅士",
		"content": "来自WPC制造商",
		"watchNumber": "143.6k",
		"price": 99.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160702,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160702/writerImage/14924117196291380.png",
		"picture": ["/static/img/topicImage/20160702/headImage/0a0cdb3e9ef0c9fbaa5826fd5ebda6ac.jpg"],
		"headline": "升级品质厨房必备清单",
		"content": "选自双立人制造商",
		"watchNumber": "77.2k",
		"price": 98.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160624,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160624/writerImage/14924117280991382.png",
		"picture": ["/static/img/topicImage/20160624/headImage/e18334bceee2d2c240091ee5208dd824.jpg"],
		"headline": "开启一段文艺的旅行",
		"content": "文青出行必备单品",
		"watchNumber": "107.9k",
		"price": 29.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160614,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160614/writerImage/14924117335191383.png",
		"picture": ["/static/img/topicImage/20160614/headImage/bb26c0f1b65842c2430804af48bffdda.jpg"],
		"headline": "纯天然洗护用品",
		"content": "洗去尘汗与疲惫  最高立减20元",
		"watchNumber": "103.5k",
		"price": 9.9
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160612,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160612/writerImage/14924117440641385.png",
		"picture": ["/static/img/topicImage/20160612/headImage/60e0f6c538effbd20b883eff9a6dcaf1.jpg"],
		"headline": "给孩子减负护脊的专用书包",
		"content": "匠心手工打造，为童年护航",
		"watchNumber": "79.0k",
		"price": 699.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160609,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160609/writerImage/14924117478781386.png",
		"picture": ["/static/img/topicImage/20160609/headImage/3977b8952d6019cd6b6ffebe8e9c0a5f.jpg"],
		"headline": "面子要舒服，里子也要",
		"content": "亲肤好物让肌肤透气舒展",
		"watchNumber": "419.3k",
		"price": 18.0
	})
	topicEntity.save()

	var topicEntity = new topicModel({
		"topicID": 20160608,
		"writer": "严选推荐",
		"writerImage": "/static/img/topicImage/20160608/writerImage/14924117514611387.png",
		"picture": ["/static/img/topicImage/20160608/headImage/56e87c0b705a2290d73f1764398ffb07.jpg"],
		"headline": "皮具 | 有选择才有风格",
		"content": "男人要洒脱，更要精致",
		"watchNumber": "312.6k",
		"price": 59.0
	})
	topicEntity.save()


}

function addComment() {
	var commentEntity = new commentModel({
		"goodsID": 1193025,
		"userID": 1,
		"content": "nice ，网易爸爸的东西很不错哦。床品有弹力。不错，那个被子感觉也不错哦。抱枕特别大个。😝",
		"picture": ["/static/img/commentImage/1193025/1499785072172/7902e397997655551e1db8baf6e3015f.jpg", "/static/img/commentImage/1193025/1499785072172/648b3b4ef4d22b4714e70778fd76e6ad.jpg", "/static/img/commentImage/1193025/1499785072172/d7a7e2411b6eed28ab8c99f46a073aa0.jpg"],
		"commentDate": "1499785072172",
		"type": ["木兰黄", "150*200cm"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1127052,
		"userID": 1,
		"content": "纯棉的，淡粉色看着很舒服，买了两床，颜色质量都很好，洗过颜色也很好，不掉色，喜欢",
		"picture": ["/static/img/commentImage/1127052/1500038760482/a216f4a603170321198c442dfe0b85b1.jpg", "/static/img/commentImage/1127052/1500038760482/bbf7b98f92e1b44e4972ce07dc3dde45.jpg", "/static/img/commentImage/1127052/1500038760482/884fcf2d7a030c53a307969edcf71665.jpg"],
		"commentDate": "1500038760482",
		"type": ["粉色+白150*200cm"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1023012,
		"userID": 1,
		"content": "质量没得说，好有质感，全棉，没想到灰色也很好看，应该比蓝色更好看。",
		"picture": ["/static/img/commentImage/1023012/1497017984826/c50e1efc981d157a7aadcc7fdc129da3.jpg", "/static/img/commentImage/1023012/1497017984826/73cfe05a188d9614972d867adce8dafd.jpg"],
		"commentDate": "1497017984826",
		"type": ["灰色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1009013,
		"userID": 1,
		"content": "枕头比较软，一靠上去就会陷入其中，很舒服，做工也不错，希望防螨虫的布料有作用。",
		"picture": ["/static/img/commentImage/1009013/1498298465385/51db9ce5b1aadb20241312ebf13e0278.jpg", "/static/img/commentImage/1009013/1498298465385/004cafc78a060224741c1ffd84e307f9.jpg", "/static/img/commentImage/1009013/1498298465385/86a1e9c40a20fb5c6ce9e249faebfe37.jpg"],
		"commentDate": "1498298465385",
		"type": ["抗菌防螨枕"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1036002,
		"userID": 1,
		"content": "99居然能买到质量这么好的荞麦枕，套子可以拆下来洗，内胆很严实，不会漏出来",
		"picture": ["/static/img/commentImage/1036002/1500112333897/5c1581a360b01b45fdd2d8bf91cb9f5b.jpg", "/static/img/commentImage/1036002/1500112333897/a8957553844345b48ca4ec2e2297954f.jpg"],
		"commentDate": "1500112333897",
		"type": ["74×48cm±1cm"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1019006,
		"userID": 1,
		"content": "枕头拿着躺了一会，感觉还是不错的。具体还要睡一阵子。拆开看了，质量还不错。值得呢。",
		"picture": ["/static/img/commentImage/1019006/1498740023246/786bf9460021aabcf9d5071374fdbf94.jpg", "/static/img/commentImage/1019006/1498740023246/bd0b246190eed25e114deba4fe306a8f.jpg", "/static/img/commentImage/1019006/1498740023246/04e8ae48d8d4984e0d5902e71a428a7e.jpg"],
		"commentDate": "1498740023246",
		"type": ["夜交藤枕"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1135002,
		"userID": 1,
		"content": "浅杏粉色没有图片上的那么红粉，正是我想要的颜色和效果，开心！柔滑细腻，质地好，满意！",
		"picture": ["/static/img/commentImage/1135002/1497622987673/88a752f064da3346b67a4fd401a75ebf.jpg"],
		"commentDate": "1497622987673",
		"type": ["1.8M/ 2.0M（床尺寸）", "浅杏粉"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1110003,
		"userID": 1,
		"content": "nice ，网易爸爸的东西很不错哦。床品有弹力。不错，那个被子感觉也不错哦。抱枕特别大个。😝",
		"picture": ["/static/img/commentImage/1110003/1499785077266/7902e397997655551e1db8baf6e3015f.jpg", "/static/img/commentImage/1110003/1499785077266/d7a7e2411b6eed28ab8c99f46a073aa0.jpg", "/static/img/commentImage/1110003/1499785077266/648b3b4ef4d22b4714e70778fd76e6ad.jpg"],
		"commentDate": "1499785077266",
		"type": ["木兰黄（床单款）", "1.5M（床尺寸）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1110004,
		"userID": 1,
		"content": "原来买的床单，刚收到是洗水就有泡沫，这个床单洗了水很干净，也很舒服，值了",
		"picture": ["/static/img/commentImage/1110004/1500345665205/3fe59ce9755094ce1f6ead2b2dae75ea.jpg"],
		"commentDate": "1500345665205",
		"type": ["丁子灰（床笠款）", "1.5M（床尺寸）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1009024,
		"userID": 1,
		"content": "很舒服，很惬意的一张沙发，我个人觉得和无印良品的没有什么区别，但是价格上面有优势很多！",
		"picture": ["/static/img/commentImage/1009024/1498130300193/7de4f1bf750799ecec0957306607cea2.jpg"],
		"commentDate": "1498130300193",
		"type": ["深咖（内胆+外套）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1173006,
		"userID": 1,
		"content": "柔软舒适，没有异味，快递送货上门。沙发可以根据自己的喜好，调整出各种喜欢的形状。让阅读不再刻板，更加闲适。",
		"picture": ["/static/img/commentImage/1173006/1500003843684/7e7f70f24acede2fe042ec86ea860194.jpg"],
		"commentDate": "1500003843684",
		"type": ["藏蓝"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1138000,
		"userID": 1,
		"content": "超乎想象的“大”！哈哈。。同事都说很棒！以前不了解严选，现在果断被我老妹带入坑了。。",
		"picture": ["/static/img/commentImage/1138000/1500343217791/d9c149f33605403c0ad7e7bacc387da5.jpg", "/static/img/commentImage/1138000/1500343217791/60b6bdc061c36abcfe15840c8d90bcaf.jpg"],
		"commentDate": "1500343217791",
		"type": ["直径40CM", "海军蓝"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1154021,
		"userID": 1,
		"content": "舒服到爆 软而不塌 后背倾斜角度刚好 可配一个靠背也可直接坐上 总之可以拯救大家的屁股了",
		"picture": ["/static/img/commentImage/1154021/1497670160659/92c2487d275f72e3fef2aa6348188dcf.jpg"],
		"commentDate": "1497670160659",
		"type": ["灰色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1154023,
		"userID": 1,
		"content": "比较精致，快递服务到位，中毒严选，一是物美不用为品质担心，二是顺丰快递给力。",
		"picture": [],
		"commentDate": "1497681852809",
		"type": ["浅灰"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1109008,
		"userID": 1,
		"content": "非常适合小户型，可以灵活摆放。方便安装，贴心地送了沙发脚垫。拆开就用了，几乎没有什么特别的味道。没有展示的图片中那么白，属于亚麻色。发货速度很快！:)谢谢先生，原本因为地方小，客厅不打算买沙发，却默默地满足我的心愿！",
		"picture": ["/static/img/commentImage/1109008/1494067444403/882d8091614c773b214bff11db945b4c.jpg", "/static/img/commentImage/1109008/1494067444403/68977bf7a7cf22e463c20e8d33f72579.jpg"],
		"commentDate": "1494067444403",
		"type": ["2P+1P+0.5P"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1160010,
		"userID": 1,
		"content": "很好，很给力，灯罩有创意，软软的，点亮后整个房间一片温馨。推荐各位活动价去买，很值！",
		"picture": ["/static/img/commentImage/1160010/1498017533246/340f5ba515fc495075e87f29cf52e3e9.jpg", "/static/img/commentImage/1160010/1498017533246/dfcefd87fed8559d3090c87083ecdbd1.jpg"],
		"commentDate": "1498017533246",
		"type": ["白色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1086015,
		"userID": 1,
		"content": "买来送同学的新婚礼物，虽然稍稍有点高放不到里面，但是丝毫不影响台灯高大上的气质。",
		"picture": ["/static/img/commentImage/1086015/1499167992145/6e7faecca76998c80561f0ff370ad35d.jpg"],
		"commentDate": "1499167992145",
		"type": ["哑黑"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1154002,
		"userID": 1,
		"content": "喜欢！一见倾心！灯光有些暗，花颜色好看水灵！",
		"picture": ["/static/img/commentImage/1154002/1499870257568/34aa79d8a0be87cfe972a59e8967398b.jpg", "/static/img/commentImage/1154002/1499870257568/62e416ec91d4660e210028a4eaf6cfa6.jpg"],
		"commentDate": "1499870257568",
		"type": ["粉"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1083009,
		"userID": 1,
		"content": "非常好，送女朋友很喜欢，很漂亮的花，下次情人节再送一款别的款式的。非常满意。",
		"picture": ["/static/img/commentImage/1083009/1495293444384/13f0a8842044b727059469e0e94478d5.jpg", "/static/img/commentImage/1083009/1495293444384/9e6da1269ae6164c0d180e4d8373f5f5.jpg"],
		"commentDate": "1495293444384",
		"type": ["妖姬蓝"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1116031,
		"userID": 1,
		"content": "东西很精美，很贴心的附带了礼品袋，因为是送人的所以没有打开，但光从重量上就能感到质感。",
		"picture": ["/static/img/commentImage/1116031/1496625448956/6f767bf6bc443ec7dd0361f8b7051745.jpg"],
		"commentDate": "1496625448956",
		"type": ["渐变粉花瓣+灰色底座"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1154005,
		"userID": 1,
		"content": "满意度一般，颜值高，但是噪音有点大，风力一般，二档噪音好大……出门拿在手上挺拉风！因为好看，所以懒得退了……",
		"picture": ["/static/img/commentImage/1154005/1497194466575/35fd12af7cd0dc3399ee3a1b06d7ec39.jpg", "/static/img/commentImage/1154005/1497194466575/b614774c0787ed389f873095adcc0d57.jpg"],
		"commentDate": "1497194466575",
		"type": ["樱花粉"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1221001,
		"userID": 1,
		"content": "有点突破想象。。。惨目忍睹。。螨虫不知道有没有，反正吸被子和沙发比家用的吸尘器好",
		"picture": ["/static/img/commentImage/1221001/1500288310907/9e8a2964dcb458ecac647f8149e2917f.jpg", "/static/img/commentImage/1221001/1500288310907/e21f6080399e6bf798a14d4ac4631c59.jpg"],
		"commentDate": "1500288310907",
		"type": ["粉色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1223001,
		"userID": 1,
		"content": "拿到手非常喜欢，设计的小细节也很贴心，噪音小，风量足，带在身上也非常方便。很满意",
		"picture": ["/static/img/commentImage/1223001/1500263263353/881ad6b08c8997ebb4af01498c45d525.jpg"],
		"commentDate": "1500263263353",
		"type": ["磨砂白"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1135050,
		"userID": 1,
		"content": "颜值高，质量好，把用了十年的爱丽丝淘汰了。儿子喜欢的不得了，说不给猫咪用，自己留着。",
		"picture": ["/static/img/commentImage/1135050/1498948458982/9547ad8339a3ff51d0874057528cfbb7.jpg", "/static/img/commentImage/1135050/1498948458982/82ef193bbc826b1cb77cfb245d3a3e12.jpg"],
		"commentDate": "1498948458982",
		"type": ["雾灰"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1064003,
		"userID": 1,
		"content": "给胖胖买的小窝，希望主子会喜欢。材质不错，摸起来手感很好，主子试过了在来评价。",
		"picture": ["/static/img/commentImage/1064003/1497969787552/1373c3b553030afd6be5edd4a14ee39e.jpg", "/static/img/commentImage/1064003/1497969787552/b023e17a9e242b14584aba013ee6ec41.jpg", "/static/img/commentImage/1064003/1497969787552/936b8be99a2138154bc4da9e5307857d.jpg"],
		"commentDate": "1497969787552",
		"type": ["45R"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1064002,
		"userID": 1,
		"content": "小毛毛的第一个窝，还没有抱回家就买了，现在毛毛五个月大了，还是最喜欢这个窝",
		"picture": ["/static/img/commentImage/1064002/1496216317546/6da8d65f67fe39efa0dbcbcb0aacf16e.jpg", "/static/img/commentImage/1064002/1496216317546/59f2382823b2f9b9108744efc3dec2c2.jpg"],
		"commentDate": "1496216317546",
		"type": ["60cm"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1025005,
		"userID": 1,
		"content": "想做这道菜很久了，一直苦于没合适的锅具，终于遇见和自己消费能力适合范围内的，锅养了一星期才用，很好用，不粘锅不溢，这道菜是我做的最味美的一次，突然有点酸酸的，少年时三石先生经常挂在嘴边，是因为十二年的梦幻史，到后来工作后用的163邮箱，回忆那流逝的岁月和欢乐，临近中年，就像一句歌词里的描述的一样“是谁来自山川湖海，却囿于昼夜、厨房与爱”，用安心的厨具，去烹饪一锅温心得美食，就着米饭和小酒，不知不觉已然半锅下肚，唯爱与美食不可辜负，而锅具大概是承接体，一定用心选好，方可呈现内心最完美的味道。",
		"picture": ["/static/img/commentImage/1025005/14986619072993fd42c060cea972bf64c31326585e3b2.jpg", "/static/img/commentImage/1025005/149866190729913778c8fec2f52c8850dad91dd4f01df.jpg", "/static/img/commentImage/1025005/149866190729994a005ead03e545c10a3c68e766c95ed.jpg"],
		"commentDate": "1498661907299",
		"type": ["胭脂红"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1146000,
		"userID": 1,
		"content": "瓶身晶莹剔透。宝宝说滤过的水甜甜的，家里原来装了立升净水器，口感不够满意。现在再拿这个壶二次过滤",
		"picture": ["/static/img/commentImage/1146000/1498962991973/e8c780c66f30d5da00bb062e62f8306f.jpg", "/static/img/commentImage/1146000/1498962991973/8acb5a9f2f50447cdfea409015d51caf.jpg"],
		"commentDate": "1498962991973",
		"type": ["白色3.3L（1壶5芯）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1085013,
		"userID": 1,
		"content": "东西不错，会再来。快递给力，给好评吧!东西不错，会再来。快递给力，给好评吧!",
		"picture": ["/static/img/commentImage/1085013/1499486552821/3cb55961f9f940eb080f5c3e9bd12277.jpg"],
		"commentDate": "1499486552821",
		"type": ["不锈钢304"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1165037,
		"userID": 1,
		"content": "手感舒服，颜色很漂亮，感觉要吃多两碗米饭了😄😄😄买了一堆。",
		"picture": ["/static/img/commentImage/1165037/1498381599059/01b4d230f9e566300749483d0228ae5d.jpg", "/static/img/commentImage/1165037/1498381599059/ed06625b99717d7107470d94e292e06b.jpg"],
		"commentDate": "1498381599059",
		"type": ["灰蓝-2只装"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1156151,
		"userID": 1,
		"content": "长草很久了，对比了某宝所有同类产品和店家，不得不说，严选是最值得购买的一家",
		"picture": ["/static/img/commentImage/1156151/1500182754131/f9a85f5ea6b62c204630135add5eff36.jpg"],
		"commentDate": "1500182754131",
		"type": ["单只装-400ml"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1006058,
		"userID": 1,
		"content": "不错，很吸水，吸油，老妈超爱，厨房再也不用油油的了，一大卷，物美价廉，值得推荐",
		"picture": ["/static/img/commentImage/1006058/1500038564398/b9f48c8c319176e7cd15c3f3a8485ddc.jpg", "/static/img/commentImage/1006058/1500038564398/6f2c487dda11e99ed0737181ec90e1b8.jpg"],
		"commentDate": "1500038564398",
		"type": ["台面清洁套装（厨房湿巾起泡去顽渍+懒人抹布吸污不留痕+多用魔力擦）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1021022,
		"userID": 1,
		"content": "刀是精工制作的。包装很严实。顺手的刀，才能切出一碟好菜。爱上厨房，从刀开始。",
		"picture": ["/static/img/commentImage/1021022/1499782882350/af4b59285ba02740cf9b5797034a417b.jpg", "/static/img/commentImage/1021022/1499782882350/5fc371ce70a70a62ade960ec1fbeae7e.jpg", "/static/img/commentImage/1021022/1499782882350/46a131ff69d01d33b018174e6c6896b1.jpg", "/static/img/commentImage/1021022/1499782882350/fc0ed3a96887b233f96025c474a793fa.jpg"],
		"commentDate": "1499782882350",
		"type": ["套装"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1113004,
		"userID": 1,
		"content": "每天不重样，自己买了两个，帮家人朋友买了4个，一共买了6个，好用好洗不多说！",
		"picture": ["/static/img/commentImage/1113004/1500085821486/1380062c7022f8d52934b4a74020d694.jpg"],
		"commentDate": "1500085821486",
		"type": ["0.8L"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1113019,
		"userID": 1,
		"content": "性价比还是很高的。矮胖子比一般20寸的大，就是加宽的20寸箱套不好买啊。。",
		"picture": ["/static/img/commentImage/1113019/1500356530162/a482647d062408504df97123d7112297.jpg"],
		"commentDate": "1500356530162",
		"type": ["摩乐棕"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1030013,
		"userID": 1,
		"content": "买后已退货。包的质量非常好，皮料摸着很细腻，做工也是不错的，本身对这个包很喜欢。但是，这个包实在是太大了，我觉得身高180以下的人根本没法用，包太大拿到手里，人的气场就显得小了。这个尺码在正常公文包都可以算xl的了，180以下慎选啊。搞不懂网易为什么设计这么大的尺寸。。。评论都说大，而且是大的出奇啊，下图对比MacBook13寸，大家自己看",
		"picture": ["/static/img/commentImage/1030013/1496972698072/0dd08c95159cc023ba28674c2a723355.jpg"],
		"commentDate": "1496972698072",
		"type": ["黑色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1197008,
		"userID": 1,
		"content": "难以置信的满意，合理的令人发指，产品经理加鸡腿。我是每天背15.6寸MacBook Pro 上班的摄影师，这个包的电脑仓很大，我的电脑很轻松，估计17寸也装得下。pad 也有单独的小包。电源包配置吸铁石，可拆卸下来单独用。所有你能想到的使用场景，手机连充电宝；装个水壶，装个雨伞，带个相机再带两颗镜头上班……产品经理都替你想到了。有一圈拉链是扩展层，可以让包再厚五厘米，更能装了。目前感觉就是很完美的双肩包，不到400的价格，是Tumi 类似包的十分之一价格，必须力荐！",
		"picture": ["/static/img/commentImage/1197008/1500197356834/8b1d53527b888efec97113733669ab5d.jpg", "/static/img/commentImage/1197008/1500197356834/4d11b463a5088d85aafb4feaf75cef50.jpg", "/static/img/commentImage/1197008/1500197356834/4fa199de1cff4ca55681cd8086e362d3.jpg", "/static/img/commentImage/1197008/1500197356834/673c9e0387a3d4c6e723b7dafedc5bcd.jpg"],
		"commentDate": "1500197356834",
		"type": ["黑色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1147029,
		"userID": 1,
		"content": "做工还行吧，个人觉得设计太素，出门放放基本的手机零钱啥的。但是老婆很喜欢。",
		"picture": ["/static/img/commentImage/1147029/1497917033386/8ef19aa43c976efceb3e9abfa2fa1b5c.jpg", "/static/img/commentImage/1147029/1497917033386/1f8a88b866cc602a0c50cdb5ab641e44.jpg", "/static/img/commentImage/1147029/1497917033386/0423b58184c548925e139a96879bb3d6.jpg"],
		"commentDate": "1497917033386",
		"type": ["黑色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1165033,
		"userID": 1,
		"content": "不用穿袜子也很舒服，透气性不错；很轻巧，走路不累。不错，周围的同事看到有要买的呢😄",
		"picture": ["/static/img/commentImage/1165033/1500279635474/73cc5a190f20cf2ef26f2c2779f3bfb7.jpg"],
		"commentDate": "1500279635474",
		"type": ["白色", "女款39码"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1145015,
		"userID": 1,
		"content": "鞋子软底很舒服，蛮喜欢的。就是码子偏小，一定要买大一码的才可以的哦。",
		"picture": ["/static/img/commentImage/1145015/1500006844873/416aa3c4566e73a9db0e8cf5202fc713.jpg"],
		"commentDate": "1500006844873",
		"type": ["灰色", "36（建议拍大一码）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1114010,
		"userID": 1,
		"content": "这次买了4双拖鞋，穿着舒适地还防滑，值得一提的是十几元的拖鞋全都是独立包装设计，赞一个！",
		"picture": ["/static/img/commentImage/1114010/1500357682510/3d60641296bc9e1e9bc10119d4504251.jpg", "/static/img/commentImage/1114010/1500357682510/6ce3ea42eb257348a70a3f6da9607bc0.jpg", "/static/img/commentImage/1114010/1500357682510/01b4078cb7edf2aaccb45181fa6e3100.jpg"],
		"commentDate": "1500357682510",
		"type": ["樱花粉", "女款38-39码"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1127001,
		"userID": 1,
		"content": "真的很百搭，严选的坑也是越入越深啊。但是质量高又服务好，入坑也是开心！！",
		"picture": ["/static/img/commentImage/1127001/1499852201698/6818d40753bca881ac946c1c5f902085.jpg"],
		"commentDate": "1499852201698",
		"type": ["黑裸拼色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1185008,
		"userID": 1,
		"content": "超值的墨镜🕶很酷遮光面积很大佩戴舒适红红火火恍恍惚惚🛍买买买",
		"picture": ["/static/img/commentImage/1185008/1498741403628/bed2f476a5c4859788bb31f082e58404.jpg"],
		"commentDate": "1498741403628",
		"type": ["偏黑镜片"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1149045,
		"userID": 1,
		"content": "很不错哦，很精致，给苹果手机和安卓手机都充上电了，很实用很快，看看能用多久吧！",
		"picture": ["/static/img/commentImage/1149045/1499926999269/470640d07b84efbbcc43bee96e4d8584.jpg", "/static/img/commentImage/1149045/1499926999269/a91799fd85dada332ed3447b41ec05f3.jpg", "/static/img/commentImage/1149045/1499926999269/896e94fe364d135f70023efe30accc6c.jpg", "/static/img/commentImage/1149045/1499926999269/e1334c0859b7cc2b49df2fb82ede35bc.jpg"],
		"commentDate": "1499926999269",
		"type": ["白色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1194020,
		"userID": 1,
		"content": "白色的摸上去很舒服，没有味道可以直接穿。透气性也好，很开心的。",
		"picture": ["/static/img/commentImage/1194020/1498781005580/4988881ace9836c8a441cfaf0366ef1d.jpg"],
		"commentDate": "1498781005580",
		"type": ["M(170/88A)", "白色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1155004,
		"userID": 1,
		"content": "收到试穿了，裤子比想象的还要舒适些，总体满意，除了价格打了8折还是觉得有点小贵。。",
		"picture": ["/static/img/commentImage/1155004/1497857371550/8a2cc77c717497c97b7d99d2db00482e.jpg"],
		"commentDate": "1497857371550",
		"type": ["中蓝", "28（165/76A）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1156015,
		"userID": 1,
		"content": "穿上一点都不费劲，也不会像别的塑身裤很紧，很舒服，相信严选没错的",
		"picture": ["/static/img/commentImage/1156015/1499563081437/d5a915dd3ffd698789e2af08c3aabb2b.jpg"],
		"commentDate": "1499563081437",
		"type": ["肤色", "S"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1193005,
		"userID": 1,
		"content": "以为买小了，穿上之后特舒服。胸部不是很大的人适合，夏天凉快，打算再买一个。",
		"picture": ["/static/img/commentImage/1193005/1499483931217/bcc7ada65ce2ec33d96520fe099042ff.jpg"],
		"commentDate": "1499483931217",
		"type": ["L", "肤色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1147043,
		"userID": 1,
		"content": "第二天就收到了顺丰快递 真是太棒了 布料超柔软舒适 轻薄透气 适合夏天 不怕出汗 我和我老公一人一件粉色+蓝色 我165 88斤 穿S 老公185 198斤 穿XXL都很合适 非常满意！",
		"picture": ["/static/img/commentImage/1147043/1497675073166/5b3bb6fc23031e0a6144016ca46a9de0.jpg", "/static/img/commentImage/1147043/1497675073166/625c077ae063e266a8d54c4686bb4ba1.jpg"],
		"commentDate": "1497675073166",
		"type": ["浅红", "S"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1125001,
		"userID": 1,
		"content": "袜子很棒，后跟基本不滑，洗了几次弹性还不错。妈妈和我都很满意！图片是偷拍的我妈…的脚…",
		"picture": ["/static/img/commentImage/1125001/1499573420903/c5ecfdd574988049fb02e42d4ff93c86.jpg"],
		"commentDate": "1499573420903",
		"type": ["粉色+驼色+灰色+黑色+白色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1116029,
		"userID": 1,
		"content": "我不算是特别特别白，但是这双袜子太黄了，穿上以后比我自己腿黑了两个度。",
		"picture": ["/static/img/commentImage/1116029/1496548638061/4bc8b82a4b5864409a4481f950179ecc.jpg"],
		"commentDate": "1496548638061",
		"type": ["肤色*3"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1086008,
		"userID": 1,
		"content": "",
		"picture": ["/static/img/commentImage/1086008/1491461268365/36538958ce68f26858f402714e1d3b24.jpg", "/static/img/commentImage/1086008/1491461268365/e9f2cad459e972d86c3135c0799f9026.jpg"],
		"commentDate": "1491461268365",
		"type": ["藏青色", "L"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1125026,
		"userID": 1,
		"content": "太美丽了。好可爱。很柔软，亲肤。包装也是没话说的好，送礼再适合不过了。",
		"picture": ["/static/img/commentImage/1125026/1497777219199/8232c430aee0c89c7311914e20b68386.jpg", "/static/img/commentImage/1125026/1497777219199/88e4f3cae12a58cc430c118c4fb93c25.jpg", "/static/img/commentImage/1125026/1497777219199/af171e3b06ea8e455b4172ad240416ad.jpg"],
		"commentDate": "1497777219199",
		"type": ["59cm（新生儿礼盒适合0-3个月宝宝）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1129016,
		"userID": 1,
		"content": "毛巾挺厚实的 擦着感觉还不错的 值这个价 超市买条毛巾也得一二十 这个感觉真值",
		"picture": ["/static/img/commentImage/1129016/1500195907945/aac669c3a25d20362a90e7db14c43573.jpg"],
		"commentDate": "1500195907945",
		"type": ["粉色Pink"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1189013,
		"userID": 1,
		"content": "棒棒哒～有了这款还何必花上千大元～网易严选、就是这么自信！能调节强弱能选择敏感模式区区一百元买不了吃亏买不了上当～估计以后还会出更多颜色～噢耶～",
		"picture": ["/static/img/commentImage/1189013/1499744098119/dc2cb5ab124d731fd3d4eb7449a90f1c.jpg", "/static/img/commentImage/1189013/1499744098119/fe0b0873b57f23679a1b1b77e54bc50a.jpg", "/static/img/commentImage/1189013/1499744098119/711cf6098417ffae5c8c60157439014e.jpg", "/static/img/commentImage/1189013/1499744098119/10a02efbb2c6a6fb1184006895fd5ac7.jpg"],
		"commentDate": "1499744098119",
		"type": ["樱花粉"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1154003,
		"userID": 1,
		"content": "自己用了，超赞！牙齿刷后很清爽，很干净，就是2分钟好像刷不遍，又按了一次😎",
		"picture": ["/static/img/commentImage/1154003/1499918433919/15ab0a1b923f3bf347ada201880f8b1b.jpg"],
		"commentDate": "1499918433919",
		"type": ["粉色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1127041,
		"userID": 1,
		"content": "想知道有没有电流嘛？拿起你的手机，给他做个按摩😄但是，实测我的苹果无效……",
		"picture": ["/static/img/commentImage/1127041/1499339706484/e96c496d82a99c51748b28d5b06a3b1d.jpg"],
		"commentDate": "1499339706484",
		"type": ["身体仪"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1064008,
		"userID": 1,
		"content": "非常喜欢❤️，不点着放在房间里都很香，严选质量真的非常好，用完会回购的，感谢！",
		"picture": ["/static/img/commentImage/1064008/1495071714820/e405247f5f10a3595f1bc04ee2072959.jpg"],
		"commentDate": "1495071714820",
		"type": ["200g"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1085002,
		"userID": 1,
		"content": "比我之前买的好，不用担心烫到手或头皮，有档位控制，网易严选的东西一如既往！",
		"picture": ["/static/img/commentImage/1085002/1500265703578/f7dadac3e01f159c7b759a1356134b96.jpg"],
		"commentDate": "1500265703578",
		"type": ["珠光白"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1039044,
		"userID": 1,
		"content": "刷毛很柔软，刷杆很舒服，刷在脸上很舒服，严选的品质一直很放心，大家可以下手了",
		"picture": ["/static/img/commentImage/1039044/1500119320817/0063b8e7b03d7976e2c7f1a3f8e522a5.jpg", "/static/img/commentImage/1039044/1500119320817/15ab117e5d5c0f9d3944cbe4ee349fa9.jpg"],
		"commentDate": "1500119320817",
		"type": ["10只入"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1113001,
		"userID": 1,
		"content": "纸………算一下刚两块二毛一包。天呐，网易家这是最好的质量卖白菜价呀",
		"picture": ["/static/img/commentImage/1113001/1498731980038/31b74d19a0ccbb73ec0e072db22b1614.jpg"],
		"commentDate": "1498731980038",
		"type": ["6包/提"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1093013,
		"userID": 1,
		"content": "买了一套！除了放牙膏的地方有点小，需要买成人版最小的那种以外，其他没毛病",
		"picture": ["/static/img/commentImage/1093013/1497016186389/da1e6f276e82a3e47d2a6cbb84defafc.jpg"],
		"commentDate": "1497016186389",
		"type": ["套装"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1125026,
		"userID": 1,
		"content": "太美丽了。好可爱。很柔软，亲肤。包装也是没话说的好，送礼再适合不过了。",
		"picture": ["/static/img/commentImage/1125026/1497777219199/8232c430aee0c89c7311914e20b68386.jpg", "/static/img/commentImage/1125026/1497777219199/88e4f3cae12a58cc430c118c4fb93c25.jpg", "/static/img/commentImage/1125026/1497777219199/af171e3b06ea8e455b4172ad240416ad.jpg"],
		"commentDate": "1497777219199",
		"type": ["59cm（新生儿礼盒适合0-3个月宝宝）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1156163,
		"userID": 1,
		"content": "网易618搞活动，且又是网易出的新品，给儿子买的，穿上很不错，他非常喜欢",
		"picture": ["/static/img/commentImage/1156163/1497760908597/00492fab4e005a9c7c79d34a9cb95573.jpg", "/static/img/commentImage/1156163/1497760908597/9683acc20b13d30ef5c5a6aafbb7f405.jpg"],
		"commentDate": "1497760908597",
		"type": ["灰色", "160cm（建议13~15岁）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1135047,
		"userID": 1,
		"content": "上了4张图，两张是Nike，两张是此次购买的。二者几乎毫无区别，连鞋底都是一样的。考虑到价格只有三分之一，这性价比无敌了。",
		"picture": ["/static/img/commentImage/1135047/1497698916964/8c93ccb3725f5fbb5481e092b569ea6a.jpg", "/static/img/commentImage/1135047/1497698916964/218b8a3b159c58d186ee9368d4eeb433.jpg", "/static/img/commentImage/1135047/1497698916964/4b1f0616df7951b9b6878efaae4745ff.jpg", "/static/img/commentImage/1135047/1497698916964/cd05e5a037cfe98fdeb55bf61a94da31.jpg"],
		"commentDate": "1497698916964",
		"type": ["夏威夷粉", "195(2.0)，脚长20~21cm"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1253006,
		"userID": 1,
		"content": "质量不错 面料很舒服 值得这个价钱 就是像大家说的一样 底围偏小 如果可以随赠一个排扣就完美啦",
		"picture": [],
		"commentDate": "1500013906555",
		"type": ["肤色", "C85", "L"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1149016,
		"userID": 1,
		"content": "盒子看了就很喜欢，睡袋很厚实，长度也很长，总之很满意",
		"picture": ["/static/img/commentImage/1149016/1497928706371/49c8634d24c79a6014283b3759a5e861.jpg"],
		"commentDate": "1497928706371",
		"type": ["天空蓝", "86*60cm"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1165001,
		"userID": 1,
		"content": "之前一直买hape的挖沙玩具，相比之下，严选的没那个厚实，但是价格零头，性价比棒棒的，很值得",
		"picture": ["/static/img/commentImage/1165001/1499513045624/88f3aafc5b83e6c9d18105c26c5a2918.jpg", "/static/img/commentImage/1165001/1499513045624/f107855b0226974077f115f3541a34e2.jpg"],
		"commentDate": "1499513045624",
		"type": ["九件组"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1253002,
		"userID": 1,
		"content": "满满的，全是心意！严选，真的用心了！物美价廉！真是好的生活，没那么贵！",
		"picture": ["/static/img/commentImage/1253002/1498984162257/78d356a8a3d337f1b5613f0debcc809d.jpg"],
		"commentDate": "1498984162257",
		"type": ["80片*6包"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1149008,
		"userID": 1,
		"content": "太萌了，女儿喜欢的不得了，又轻又好拿，我都想入一个自用",
		"picture": ["/static/img/commentImage/1149008/1499926373755/f394e49477d6573eded6bb5143de2543.jpg", "/static/img/commentImage/1149008/1499926373755/3dc9ea3dbce219b17f572c5d9e8b59c1.jpg"],
		"commentDate": "1499926373755",
		"type": ["粉红猪"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1164005,
		"userID": 1,
		"content": "想要买个安全座椅，他就来了，哈哈，阿拉神灯么知道想要什么",
		"picture": ["/static/img/commentImage/1164005/1497674112866/571f62210cf15e1ed0396cab583764f4.jpg"],
		"commentDate": "1497674112866",
		"type": ["蓝色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1129017,
		"userID": 1,
		"content": "包装好精致，伞很轻，比我想象的要长一点，大一些，不错很实用哟，颜色也很好看",
		"picture": ["/static/img/commentImage/1129017/1498014252153/4cbaea108349a585e85f888d0246c000.jpg", "/static/img/commentImage/1129017/1498014252153/702e17c2af3255ee6ade022921b0b3bc.jpg", "/static/img/commentImage/1129017/1498014252153/9dd8b3e35eaddf2ae3c2b6b221fadfd0.jpg"],
		"commentDate": "1498014252153",
		"type": ["灰色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1165024,
		"userID": 1,
		"content": "非常不错，值得信赖，家里很多东西都是严选买的。",
		"picture": ["/static/img/commentImage/1165024/1500016391003/1f2e730276397df75ce06c33d1d6c97a.jpg"],
		"commentDate": "1500016391003",
		"type": ["透明茶2件装"]
	})
	commentEntity.save();
	var commentEntity = new commentModel({
		"goodsID": 1245027,
		"userID": 1,
		"content": "质感棒！真的是实惠，好便宜，我一周五天上班的衣服都在严选买的，很不错的购物体验！满分",
		"picture": ["/static/img/commentImage/1245027/1500448216614/2eacdb0e461dda08905a815699464b25.jpg", "/static/img/commentImage/1245027/1500448216614/4d66b4de1836ea9fafb012a9e883685b.jpg", "/static/img/commentImage/1245027/1500448216614/7cc0de296fcee2e7420c3f33ca4f79c4.jpg"],
		"commentDate": "1500448216614",
		"type": ["深蓝色", "XL(180/100A)"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1152026,
		"userID": 1,
		"content": "酱油是准备沾刺身用的，希望味道别太咸了！",
		"picture": ["/static/img/commentImage/1152026/1500178902730/ecb4afc0fa7e9a6a664911c0d5bddc39.jpg"],
		"commentDate": "1500178902730",
		"type": ["甜口"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1222001,
		"userID": 1,
		"content": "和图片一样，但是很薄，只适合天气不热晴天郊游的时候用用，底下的那层布特别的薄，需要另外买垫子铺着。总体还是可以的。送的吊床感觉不结实。",
		"picture": ["/static/img/commentImage/1222001/1498057262007/c29509118c7c0df097e39e90c9682f9e.jpg", "/static/img/commentImage/1222001/1498057262007/53caeda9dbc17d54c2552fa3ec52724a.jpg"],
		"commentDate": "1498057262007",
		"type": ["双层防风防潮自动展开帐篷（驼色）+户外露营秋千吊床（驼色）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1165076,
		"userID": 1,
		"content": "好看好看 而且材质还是不错的 眼镜套 眼镜布都有，才110块钱，简直不能再好了",
		"picture": ["/static/img/commentImage/1165076/1500343192129/7f0d30b56f9d4f598d2496d8d6d53a24.jpg", "/static/img/commentImage/1165076/1500343192129/3cd51cfee6bc32316ebb6de7f7285138.jpg", "/static/img/commentImage/1165076/1500343192129/44d71a1eb81b31639dce2db145342db0.jpg"],
		"commentDate": "1500343192129",
		"type": ["金色"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1195000,
		"userID": 1,
		"content": "黑色+粉边+金色字体的包装设计深得我心，里边的零食看上去也特别高品质，送礼倍有面子！",
		"picture": ["/static/img/commentImage/1195000/1495426157325/c8e157030ec3676d336cef17f14f7de6.jpg", "/static/img/commentImage/1195000/1495426157325/43c83d70b2e389a8e713337dd09df3ca.jpg"],
		"commentDate": "1495426157325",
		"type": ["黑凤梨男生零食礼盒"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1201010,
		"userID": 1,
		"content": "洋葱片不错，果冻很有特色，这两样肯定会再买。其他的还没吃过",
		"picture": ["/static/img/commentImage/1201010/1499958663552/08fee5b07f5ba5ff6194cf5cc4547829.jpg"],
		"commentDate": "1499958663552",
		"type": ["594克"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1166002,
		"userID": 1,
		"content": "好多！猫猫好像也很喜欢的样子哈哈哈哈，摆好就自己跑进去了。味道还没有试过",
		"picture": ["/static/img/commentImage/1166002/1496843020095/52ef45dd27c1b849bcff53ebf22c419f.jpg", "/static/img/commentImage/1166002/1496843020095/9e45d627a134776cd15ab54b140a2bfd.jpg", "/static/img/commentImage/1166002/1496843020095/55a2859d76b41a1992a62b81bd621dd2.jpg"],
		"commentDate": "1496843020095",
		"type": ["组合装（苹果脆片1包+香蕉脆片1包+敏豆脆1包+南瓜脆片1包+红枣脆1包+综合水果脆片1包+综合菇菜脆片1包+综合果蔬脆1包）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1115009,
		"userID": 1,
		"content": "番茄味的薯条没有黄油好这个好吃，送货速度我喜欢。今天买了明天到，希望保持。包装很精细。",
		"picture": ["/static/img/commentImage/1115009/1500285194897/f609c4a31963265bd372ab0c26d64ea2.jpg"],
		"commentDate": "1500285194897",
		"type": ["175克（25克×7袋）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1179003,
		"userID": 1,
		"content": "二次购买，拿来做酸奶也特别好！认养了你，啥时上个照片让大伙瞧瞧！",
		"picture": ["/static/img/commentImage/1179003/1499756862085/e459e88480bea543d353c8c0d59244fa.jpg"],
		"commentDate": "1499756862085",
		"type": ["2提装"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1152177,
		"userID": 1,
		"content": "盖子真的不太好打开…",
		"picture": ["/static/img/commentImage/1152177/1497870135177/6a7f5d45452f53494e31a2c934eb4166.jpg"],
		"commentDate": "1497870135177",
		"type": ["130克（5克*26袋）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1194007,
		"userID": 1,
		"content": "味道还可以，用一包的汤汁做了份口味虾",
		"picture": ["/static/img/commentImage/1194007/1500117719716/fc124baea405b07c34a56b4db1061074.jpg", "/static/img/commentImage/1194007/1500117719716/740105dd87ecefd74855ff22e12415ea.jpg", "/static/img/commentImage/1194007/1500117719716/4ceec6659c3aa9d3d7d19632f5c74c5e.jpg", "/static/img/commentImage/1194007/1500117719716/f8ee709211073e7fd494c175bd074c06.jpg"],
		"commentDate": "1500117719716",
		"type": ["麻辣（1.5千克）*2盒"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1135059,
		"userID": 1,
		"content": "非常醇厚 要是有米醋 就更棒了",
		"picture": ["/static/img/commentImage/1135059/1499687332893/06e9604a4810f9bbbe54e763966f23ae.jpg"],
		"commentDate": "1499687332893",
		"type": ["500ML"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1017001,
		"userID": 1,
		"content": "味道还不错，不过我觉得跟我老家的米差不多，量很少，适合一个人吃很久，一家子估计几天就没了",
		"picture": ["/static/img/commentImage/1017001/1497001562142/f0e7d21a85ba9157358cfbed223f07e7.jpg"],
		"commentDate": "1497001562142",
		"type": ["5千克"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1194007,
		"userID": 1,
		"content": "味道还可以，用一包的汤汁做了份口味虾",
		"picture": ["/static/img/commentImage/1194007/1500117719716/fc124baea405b07c34a56b4db1061074.jpg", "/static/img/commentImage/1194007/1500117719716/740105dd87ecefd74855ff22e12415ea.jpg", "/static/img/commentImage/1194007/1500117719716/4ceec6659c3aa9d3d7d19632f5c74c5e.jpg", "/static/img/commentImage/1194007/1500117719716/f8ee709211073e7fd494c175bd074c06.jpg"],
		"commentDate": "1500117719716",
		"type": ["麻辣（1.5千克）*2盒"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1175002,
		"userID": 1,
		"content": "好",
		"picture": [],
		"commentDate": "1498974760123",
		"type": ["古佳耶"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1152097,
		"userID": 1,
		"content": "给中二老公的生日礼物，帅的不要不要的，哈哈哈！很喜欢啦！",
		"picture": ["/static/img/commentImage/1152097/1497362326122/9dbe073bade4b50d8adb7356c8a141f0.jpg"],
		"commentDate": "1497362326122",
		"type": ["雨伞"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1152036,
		"userID": 1,
		"content": "哈哈哈哈 十几年的暴雪情节，拿到炉石传说的杯子还是蛮激动的杯子质量蛮好 入手很沉",
		"picture": ["/static/img/commentImage/1152036/1494895092032/42890c1ee94fe55e2f3099df8e299c4d.jpg", "/static/img/commentImage/1152036/1494895092032/0dfa785910d61c7fef1e4ee283f56b87.jpg", "/static/img/commentImage/1152036/1494895092032/cbe5ad3a3a633ec5fd7b6b355b4dee44.jpg"],
		"commentDate": "1494895092032",
		"type": ["陶瓷酒桶杯"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1152037,
		"userID": 1,
		"content": "真的挺大的鼠标垫，直接铺满了桌面，把之前的鼠标垫直接给淘汰了。",
		"picture": ["/static/img/commentImage/1152037/1499845143230/569da4afd728f8a6b5ce938458484553.jpg"],
		"commentDate": "1499845143230",
		"type": ["鼠标垫"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1152002,
		"userID": 1,
		"content": "质感相当不错",
		"picture": [],
		"commentDate": "1497718371489",
		"type": ["麻将套装"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1233034,
		"userID": 1,
		"content": "老公特别喜欢，质量很好，夜光也很酷",
		"picture": [],
		"commentDate": "1500370026970",
		"type": ["L"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1152129,
		"userID": 1,
		"content": "挺不错的",
		"picture": ["/static/img/commentImage/1152129/1495079740913/60eb25720341f150a4e6b922e23df28b.jpg", "/static/img/commentImage/1152129/1495079740913/f05dd61c81cee23ac9374a5185a34e45.jpg", "/static/img/commentImage/1152129/1495079740913/34809c589dc2b2c40ef08c62f0ac9f48.jpg", "/static/img/commentImage/1152129/1495079740913/ec9ef70237572b33e25b1e0cb0bde8e9.jpg"],
		"commentDate": "1495079740913",
		"type": ["XL"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1164049,
		"userID": 1,
		"content": "包的做个 质量 质量都不错 就是不喜欢这个图案 希望能出一款皮质的男款胸包",
		"picture": ["/static/img/commentImage/1164049/1494576619997/fe97ae8d64ba2884d9d19390b46a8c64.jpg"],
		"commentDate": "1494576619997",
		"type": ["杀破狼"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1197000,
		"userID": 1,
		"content": "结界突破😂😂😂有点中二，但是衣服挺好看的，料子也不错",
		"picture": ["/static/img/commentImage/1197000/1499182431658/298fcfe6a9c45b362acdba943e515ed5.jpg", "/static/img/commentImage/1197000/1499182431658/bfd98da3438797f04ae2c0431fe7888f.jpg"],
		"commentDate": "1499182431658",
		"type": ["白色（结界突破）", "M(170/88A）"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1006032,
		"userID": 1,
		"content": "质量挺好的 发货也很快 也很实用 总体而言还是很不错的 也很划算",
		"picture": ["/static/img/commentImage/1006032/1497800227212/aa021cf741a8e283ca616bb0d52fecf2.jpg", "/static/img/commentImage/1006032/1497800227212/4ac290c458f4ac7b4d46c6e9c26a10a6.jpg"],
		"commentDate": "1497800227212",
		"type": ["抱枕"]
	})
	commentEntity.save()
	var commentEntity = new commentModel({
		"goodsID": 1076016,
		"userID": 1,
		"content": "我想还可以吧！",
		"picture": ["/static/img/commentImage/1076016/1484069461611/d4dec4703ed00e6214b9ed3b42b57019.jpg"],
		"commentDate": "1484069461611",
		"type": ["实体卡"]
	})
	commentEntity.save()


}


function addGoods() {
	var goodsEntity = new goodsModel({
		"ID": 1193025,
		"price": 169,
		"topName": "日式针织羽丝绒夏凉被",
		"subName": "亲肤透气，裸睡空调房好搭档",
		"shortDescription": ["全棉针织", "弹性亲肤", "仪征棉芯", "轻盈透气", "百隆纱线", "别致色彩"],
		"shortDescriptionImage": ["/static/img/goodsImage/1193025/shortdescriptionImage/27164d5e3a3e0203803e8780ed285229.jpg", "/static/img/goodsImage/1193025/shortdescriptionImage/29a199ce0e9f8b8f4658bd7b13d1510c.jpg", "/static/img/goodsImage/1193025/shortdescriptionImage/d522f49e32d464cb10371a6f2b074be3.jpg"],
		"headImage": ["/static/img/goodsImage/1193025/headImage/76b817572995693dfc82c585ce09a16d.png", "/static/img/goodsImage/1193025/headImage/ebd1dc501760883e36c74f5608cb1d05.jpg", "/static/img/goodsImage/1193025/headImage/31a57724a7cd26f52182cd49af88ac91.jpg", "/static/img/goodsImage/1193025/headImage/a56e6feb624c904987cb070cda206375.jpg", "/static/img/goodsImage/1193025/headImage/fbfaa79073559c42aac5571a1fa64ed5.jpg"],
		"type": ["180*200cm", "150*200cm"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1193025/description/dc1ebab345a6364056375af5f1963f45.jpg", "/static/img/goodsImage/1193025/description/419cc50a5f16a0ddcde2ba7abf672de4.jpg", "/static/img/goodsImage/1193025/description/f605fca51a9dc43e1606a447a168b340.jpg", "/static/img/goodsImage/1193025/description/bdd869b29c8b554cf7d2d9809b9a6fe6.jpg", "/static/img/goodsImage/1193025/description/7723d057b0a3317c483d677b32df4707.jpg", "/static/img/goodsImage/1193025/description/f590e503768a9c216ac209d7c4287712.jpg", "/static/img/goodsImage/1193025/description/f78b5445af782e61cca13f3d0336de19.jpg", "/static/img/goodsImage/1193025/description/fd0491a0c792f253e4710a0580c6cfaa.jpg", "/static/img/goodsImage/1193025/description/546bd2dcdfeb37be659aca150d4f08f4.jpg", "/static/img/goodsImage/1193025/description/d56e8b9113eb5091257aa1936d426bad.jpg", "/static/img/goodsImage/1193025/description/cd6b6102bb125471092ec1bf3e2d229d.jpg", "/static/img/goodsImage/1193025/description/27eff14bd6f6f3ef80d7177c8f96fdbe.jpg", "/static/img/goodsImage/1193025/description/e009814f9e73c958bf774339e8c9a040.jpg", "/static/img/goodsImage/1193025/description/502c0aabacfeec46c685de9503954a48.jpg", "/static/img/goodsImage/1193025/description/d22a3944cfb42788d7052c80d0ec111e.jpg", "/static/img/goodsImage/1193025/description/a05d5dbe109f9779d40570e6d9ef8868.jpg", "/static/img/goodsImage/1193025/description/a6f78f86e604f7f890820d660f350fa3.jpg", "/static/img/goodsImage/1193025/description/c48dd819dcdd6b59601f1ef9e749f4d0.jpg", "/static/img/goodsImage/1193025/description/dce802b2a960d6d14b0e7830f6212f2d.jpg", "/static/img/goodsImage/1193025/description/e507dfbf7f9053763c7cdf0eedf3b714.jpg", "/static/img/goodsImage/1193025/description/587fba85df4aa802860eced3504fa9a8.jpg", "/static/img/goodsImage/1193025/description/dbd60373f8d824d6a0db55a097813ab5.jpg", "/static/img/goodsImage/1193025/description/9e3701b63d94fb6d513184440e5600de.jpg", "/static/img/goodsImage/1193025/description/9fc5bca13269348fba75b92c82275788.jpg", "/static/img/goodsImage/1193025/description/f4396746d95c41874c97f2f39e8f2ba6.jpg", "/static/img/goodsImage/1193025/description/ecfb77ac049871cafe5b21c1184a1e1e.jpg", "/static/img/goodsImage/1193025/description/753e002e81c240679aa60f65a1e28cfa.jpg", "/static/img/goodsImage/1193025/description/2d036c766e86e825adc2cb3f12c7b1bc.jpg", "/static/img/goodsImage/1193025/description/3f342c2f22409842cbb2b04e2168f573.jpg", "/static/img/goodsImage/1193025/description/e226afb1d9715ea9deb713fec91163b6.jpg", "/static/img/goodsImage/1193025/description/c9242fa3d85b407d354b04e2ae4ccd3b.jpg", "/static/img/goodsImage/1193025/description/09c1c4f4fd1880840bf6ee68d91f6912.jpg", "/static/img/goodsImage/1193025/description/4afd947fa274d7dd9fc04de37c4d71da.jpg", "/static/img/goodsImage/1193025/description/057e95c87d0e8651a0f79e1c9e0bfdfd.jpg", "/static/img/goodsImage/1193025/description/8450012b4a706dc71fc6c3389700bd84.jpg", "/static/img/goodsImage/1193025/description/5c593bf58dda4be4e12539c9f78a79a6.jpg", "/static/img/goodsImage/1193025/description/2a9cd9129216be870503d01617e3b78b.jpg", "/static/img/goodsImage/1193025/description/c4e5352fd39f994fa7191f67f91846ef.jpg", "/static/img/goodsImage/1193025/description/5fef6131a59ddf906878ec3322a9137e.jpg", "/static/img/goodsImage/1193025/description/115d227ea56effd8f15647f2b1897322.jpg", "/static/img/goodsImage/1193025/description/438767fc562a258f0d67bf3e6742c534.jpg", "/static/img/goodsImage/1193025/description/a9a7406da9a51787400d07381f4a52c6.jpg", "/static/img/goodsImage/1193025/description/2c5a3e022e379f552e006565f03341e7.jpg", "/static/img/goodsImage/1193025/description/52c0921cd8a59858e6aee184a7b877f3.jpg", "/static/img/goodsImage/1193025/description/fa25b963b49061aa896f6ea4e74f5214.jpg", "/static/img/goodsImage/1193025/description/5fdbaa7ded9ea2d5ddd7db239a5dbbb3.jpg", "/static/img/goodsImage/1193025/description/353c5a28d652ad564f5210b1a0be5a5f.jpg", "/static/img/goodsImage/1193025/description/1f8ecbe5a59286f334baac3f805d3c13.jpg", "/static/img/goodsImage/1193025/description/f300fcd939f65fb276b71dffaacbb5b3.jpg", "/static/img/goodsImage/1193025/description/c2a09f1426264d3eaac89709a675d5c7.jpg", "/static/img/goodsImage/1193025/description/a28973545581b987b6b5776613983628.jpg", "/static/img/goodsImage/1193025/description/3e6d6e7c8bc320947ec6cc49626cdf38.jpg", "/static/img/goodsImage/1193025/description/5fa2bd1b40e97418a7fee39c23aae493.jpg", "/static/img/goodsImage/1193025/description/fc59d45dbd264b4acd358a34d50c679a.jpg", "/static/img/goodsImage/1193025/description/f8c27981e7d12bf0a052d216d837575f.jpg", "/static/img/goodsImage/1193025/description/8c1fbf4c79391af117f29ee5c6057edc.jpg", "/static/img/goodsImage/1193025/description/c4acba85c950bd7d013939c90f226fca.jpg", "/static/img/goodsImage/1193025/description/eb75c0ccaa5b18dff97bb2cda78c035e.jpg", "/static/img/goodsImage/1193025/description/c29ecca58a2026b3df4f561a5fc2af43.jpg", "/static/img/goodsImage/1193025/description/c0b50457699bc2ef0b5ebf5d5128fea5.jpg", "/static/img/goodsImage/1193025/description/94aa18f82b30c8de1e919740d9acd1ec.jpg", "/static/img/goodsImage/1193025/description/2e31d479bc8286420bba37b1fad0fddc.jpg", "/static/img/goodsImage/1193025/description/ddcb346ea40fc9505d1a5a0b8426a328.jpg", "/static/img/goodsImage/1193025/description/f221116040e89c722a087942187bb342.jpg", "/static/img/goodsImage/1193025/description/55747e273b1aeaf0d4553ee218d9100f.jpg", "/static/img/goodsImage/1193025/description/c48108cabc079c2f64e813d04794aed5.jpg", "/static/img/goodsImage/1193025/description/e79ea7ec115d736bb515773a8ae8a69b.jpg", "/static/img/goodsImage/1193025/description/4b7f2a046449cd3da8236f4e1a22b716.jpg"],
		"inventory": [722, 864],
		"information": [{
			"attrName": "颜色",
			"attrValue": "烟草绿/ 茶香粉/ 丁子灰/ 木兰黄"
		}, {
			"attrName": "规格",
			"attrValue": "150*200cm/ 180*200cm"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "MUJI制造商",
		"sale": 257,
		"date": "1500340904133",
		"category": "居家",
		"subCategory": "夏凉"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1127052,
		"price": 169,
		"topName": "纯棉水洗色织格夏凉被",
		"subName": "100%棉填充，透气排汗，双面可用",
		"shortDescription": ["靓肤柔软", "水洗棉套", "细腻绒长", "轻软舒适", "轻柔水洗", "耐用柔韧"],
		"shortDescriptionImage": ["/static/img/goodsImage/1127052/shortdescriptionImage/a167cd424394fe9e65b0a0952d1242d0.jpg", "/static/img/goodsImage/1127052/shortdescriptionImage/4f3e4762a71371baf3dd1d7d201f8ac8.jpg", "/static/img/goodsImage/1127052/shortdescriptionImage/bc3a80374d9115b0049234a665532ef4.jpg"],
		"headImage": ["/static/img/goodsImage/1127052/headImage/c4d30e05cbf9f1489a9cc78f2e61f854.png", "/static/img/goodsImage/1127052/headImage/be1c0672aa4f82de4179ff25c9728359.jpg", "/static/img/goodsImage/1127052/headImage/a0451cd98141887b78a48414d82f1a9a.jpg", "/static/img/goodsImage/1127052/headImage/9cdc625066ff4124e5b3dc2518529706.jpg", "/static/img/goodsImage/1127052/headImage/398686c2483deb75ca4afeee62250fc9.jpg"],
		"type": ["藏蓝+白150*200cm", "藏蓝+白180*200cm", "雾灰+白150*200cm", "雾灰+白180*200cm", "粉色+白150*200cm", "粉色+白180*200cm"],
		"chara": "6色可选",
		"description": ["/static/img/goodsImage/1127052/description/d5be558fae14c10f6cba988448667655.jpg", "/static/img/goodsImage/1127052/description/e150a80dc6dc5e887ba88ef0bda5635e.jpg", "/static/img/goodsImage/1127052/description/02d918eac34097cd1ec495e5a7fba839.jpg", "/static/img/goodsImage/1127052/description/60c93820597914e237a8828a7f68a693.jpg", "/static/img/goodsImage/1127052/description/4d16dcd7782d5f313c168c2f167e6250.jpg", "/static/img/goodsImage/1127052/description/84c8a43e0d9ce58c6131e8a4647137ea.jpg", "/static/img/goodsImage/1127052/description/fe289dbf468157089ecdce0a0e8cfc2b.jpg", "/static/img/goodsImage/1127052/description/9eccf5ffd73b67eb4f1a51252db9bf55.jpg", "/static/img/goodsImage/1127052/description/7c942a6a7916c458cd5807bd92d9adee.jpg", "/static/img/goodsImage/1127052/description/8e63e7711c48d043f4397a91258fcd25.jpg", "/static/img/goodsImage/1127052/description/9cbe77a023a19ed1777ca9442a5e7627.jpg", "/static/img/goodsImage/1127052/description/54870820ab7fdd6445cbe57fd2ea3363.jpg", "/static/img/goodsImage/1127052/description/13af57ba735b30b0b7d8b184f1fe2f4c.jpg", "/static/img/goodsImage/1127052/description/a1e596c50e40f1c284f29fa100280875.jpg", "/static/img/goodsImage/1127052/description/8d6de2aeb553b10bb17364373307fa53.jpg", "/static/img/goodsImage/1127052/description/4751c8f3d45ffb5fd6f2cc339f18f107.jpg", "/static/img/goodsImage/1127052/description/a4a7e6973de92d68909e3742b3ca6b9c.jpg", "/static/img/goodsImage/1127052/description/b79a47091b4bbcf1261aafc3b9d43db1.jpg", "/static/img/goodsImage/1127052/description/c7528e9c3444714e64b2f9c04a4b9d86.jpg", "/static/img/goodsImage/1127052/description/0def655afee89bb967c5e5653a628517.jpg", "/static/img/goodsImage/1127052/description/71e002b82cada63316bec4774c285bed.jpg", "/static/img/goodsImage/1127052/description/5b83ce40294a1df3e171b241dd191228.jpg", "/static/img/goodsImage/1127052/description/329f0adefde346912448306d20fca6b4.jpg", "/static/img/goodsImage/1127052/description/a372127bde07d95d2e526ca204acbe6b.jpg", "/static/img/goodsImage/1127052/description/8df1c05f289252b6b2d0486838fffa86.jpg", "/static/img/goodsImage/1127052/description/5216ca64a2c9102a5643a0c2448c0ea3.jpg", "/static/img/goodsImage/1127052/description/545f88e26372c5949b2627f781583147.jpg", "/static/img/goodsImage/1127052/description/13f6613d9d1057a817d31dd442bef97f.jpg", "/static/img/goodsImage/1127052/description/ec95e0ae84611cfeb6b5d3d53f40d525.jpg", "/static/img/goodsImage/1127052/description/7aa8f9a1a60717dd680cb824b6e36b11.jpg", "/static/img/goodsImage/1127052/description/1c80828de30155b6a0b527916554e9b0.jpg", "/static/img/goodsImage/1127052/description/c5774ff521760d002e462ed577ce099c.jpg", "/static/img/goodsImage/1127052/description/97b4fc3092aa889793fede3f371c2cf0.jpg", "/static/img/goodsImage/1127052/description/a0341593aa4481f407909f23afa9f172.jpg", "/static/img/goodsImage/1127052/description/a9c8354b0a6c0206e041a2143270cbca.jpg", "/static/img/goodsImage/1127052/description/8b98c3548f7b9a5777a73b06530680ab.jpg", "/static/img/goodsImage/1127052/description/9804b7cd06fbb122e847c54d901394e9.jpg", "/static/img/goodsImage/1127052/description/93818a6a52ef295025712293cacfeb96.jpg", "/static/img/goodsImage/1127052/description/de6882b26aa3077061b5ad0ec51cc418.jpg", "/static/img/goodsImage/1127052/description/a79826471d9c796a10ad7d9b24fb8cff.jpg", "/static/img/goodsImage/1127052/description/b6971be2451a827b46e1d7684ca58760.jpg", "/static/img/goodsImage/1127052/description/6a3396c116c1ebbca0e477a2e66b18e5.jpg", "/static/img/goodsImage/1127052/description/a818e261031b7a10091f344e81caabf6.jpg", "/static/img/goodsImage/1127052/description/86792241e6f58d5cea2435160b591997.jpg", "/static/img/goodsImage/1127052/description/4f4eb85063e1a9d836868580b589485e.jpg", "/static/img/goodsImage/1127052/description/821c728a7170f2d5452852e518809b97.jpg", "/static/img/goodsImage/1127052/description/6eb4a07c6304e1456e9aa551aefdb1b5.jpg", "/static/img/goodsImage/1127052/description/5ed9a831344dc68eaaf8310df0ddf2d0.jpg"],
		"inventory": [227, 225, 572, 925, 35, 550],
		"information": [{
			"attrName": "填充物",
			"attrValue": "100%棉"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22796-2009"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB18401-2010 A类"
		}, {
			"attrName": "规格",
			"attrValue": "150*200cm/180*200cm"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 388,
		"date": "1500340908241",
		"category": "居家",
		"subCategory": "夏凉"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1023012,
		"price": 299,
		"topName": "色织华夫格夏凉被",
		"subName": "凹凸华夫格织法，舒适轻柔",
		"shortDescription": ["色织工艺", "均匀不褪", "双面材质", "柔软透气", "复合毛圈", "独特美感"],
		"shortDescriptionImage": ["/static/img/goodsImage/1023012/shortdescriptionImage/895f116ef8444d8034e34ccf39fc825b.jpg", "/static/img/goodsImage/1023012/shortdescriptionImage/651f460d5b32508aae26c93acce298da.jpg", "/static/img/goodsImage/1023012/shortdescriptionImage/e1a4d85bac9375f34f6e459539d88535.jpg"],
		"headImage": ["/static/img/goodsImage/1023012/headImage/07376e78bf4fb8a5aa8e6a0b1437c3ad.png", "/static/img/goodsImage/1023012/headImage/184c7ed8ac2ac4f8a7b33ee9d41fde77.jpg", "/static/img/goodsImage/1023012/headImage/46f42df107e2e338503fd13c4c8be128.jpg", "/static/img/goodsImage/1023012/headImage/a584f3f733da004d602b3be9d07c3473.jpg", "/static/img/goodsImage/1023012/headImage/733430be1402c5e645bb40f0682b8ae5.jpg"],
		"type": ["白色", "藏青", "灰色"],
		"chara": "3色可选",
		"description": ["/static/img/goodsImage/1023012/description/70e21fc5c723dc6adcb1b531553597d9.jpg", "/static/img/goodsImage/1023012/description/fcdf78276ab0bcd8ed80a3dda8c29b6a.jpg", "/static/img/goodsImage/1023012/description/1eb088a53d00f094bbac4b1f7a662457.jpg", "/static/img/goodsImage/1023012/description/86be51c377922edd23e48b9d0c51d5dc.jpg", "/static/img/goodsImage/1023012/description/e9cadf6589933fab072aef8c0644bb91.jpg", "/static/img/goodsImage/1023012/description/adbb912f1131f821f4d01bb29ed31450.jpg", "/static/img/goodsImage/1023012/description/8309ca74e9ecea295882b68cc0080652.jpg", "/static/img/goodsImage/1023012/description/4cce90d2ad13258af815b828dd3fa34f.jpg", "/static/img/goodsImage/1023012/description/0ad6cf5c7f4ed107d39997ce1acfffd2.jpg", "/static/img/goodsImage/1023012/description/4b867cc1a9f3c0046b40118e009a2cbd.jpg", "/static/img/goodsImage/1023012/description/b14b08ce203d77633340b1677f6196b6.jpg", "/static/img/goodsImage/1023012/description/b697d210e3137bc9fa8f5b74a9916ce6.jpg", "/static/img/goodsImage/1023012/description/a8b23b600cb5848d00eb1a176554f5de.jpg", "/static/img/goodsImage/1023012/description/0b76964151af30178e74e28d0d590fd7.jpg", "/static/img/goodsImage/1023012/description/3eda6586081f50314690ab9f141d1758.jpg", "/static/img/goodsImage/1023012/description/939f9ac497e48529e0c44ef5af32f329.jpg"],
		"inventory": [816, 565, 841],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "180*220cm"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB18401-2010 B类"
		}, {
			"attrName": "产品等级",
			"attrValue": "一等品"
		}, {
			"attrName": "重量",
			"attrValue": "1480g"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.深色纯棉毛巾被在织造染色过程中，巾面更易产生微细的纤维浮绒，使用前建议用清水漂洗1-2次，即可去掉产品上的浮绒。2.在洗涤时一定要注意不要与衣服混在一起机洗，强力的搓洗会引起掉毛或勾线现象。3.纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "MUJI制造商",
		"sale": 509,
		"date": "1500340911851",
		"category": "居家",
		"subCategory": "夏凉"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1009013,
		"price": 99,
		"topName": "可水洗抗菌防螨丝羽绒枕",
		"subName": "进口防螨布，热销50万件",
		"shortDescription": ["物理防螨", "肌肤健康", "仪征丝绒", "细软蓬松", "反复测试", "贴合头颈"],
		"shortDescriptionImage": ["/static/img/goodsImage/1009013/shortdescriptionImage/f97048f6f518967cb525cdcc858a285c.jpg", "/static/img/goodsImage/1009013/shortdescriptionImage/eafeefd009f96a1bc94bce8285b7ebf1.jpg", "/static/img/goodsImage/1009013/shortdescriptionImage/a7b0ab6dfd69241fa6b0a479d932d9a1.jpg"],
		"headImage": ["/static/img/goodsImage/1009013/headImage/ebd67e0ba884dc3d15a18898ecf6cb06.png", "/static/img/goodsImage/1009013/headImage/34bb2ff0358432c3f15e6afa0d5d2104.jpg", "/static/img/goodsImage/1009013/headImage/5114eb391397033eca305055e21d9cb3.jpg", "/static/img/goodsImage/1009013/headImage/73a866b532183dec74232b0cc1b36428.jpg", "/static/img/goodsImage/1009013/headImage/331a2954f81d0cfe764cbdf2e5b6b328.jpg"],
		"type": ["抗菌防螨枕"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1009013/description/b2576e9567e5de643a02f3a5fc26ee17.jpg", "/static/img/goodsImage/1009013/description/029b577be403335de4c2a37b9d83a31d.jpg", "/static/img/goodsImage/1009013/description/779f04eac136c934fe9a17d2d26137ae.jpg", "/static/img/goodsImage/1009013/description/5d641ff16c4b2502442616f3e194d575.jpg", "/static/img/goodsImage/1009013/description/ec14832d8c947f4dbe716eabfaa7029a.jpg", "/static/img/goodsImage/1009013/description/645db2317426b5a852d331231e258c02.jpg", "/static/img/goodsImage/1009013/description/ac6055481565438d5fee342c3ccec155.jpg", "/static/img/goodsImage/1009013/description/8382f534cf2acac06551df87e136c4f0.jpg", "/static/img/goodsImage/1009013/description/ce4cf3fdb7230634c72fbf6c97bd3c16.jpg", "/static/img/goodsImage/1009013/description/5d78a9f815043b0ed880d0ba90b08dbc.jpg", "/static/img/goodsImage/1009013/description/3aa34184510cbdd8df6ba4440af6e37e.jpg", "/static/img/goodsImage/1009013/description/bbb48af3056fd3dcffa9968a076753f2.jpg", "/static/img/goodsImage/1009013/description/dc72b5750827b7d222d972888fb9831b.jpg", "/static/img/goodsImage/1009013/description/b24b9b12b891be546263e2cd3f0b704c.jpg", "/static/img/goodsImage/1009013/description/631996fac12032dbdc17ffd721fb7087.jpg", "/static/img/goodsImage/1009013/description/ecc5a8793e18aad9bf3d5f0a89bff12f.jpg", "/static/img/goodsImage/1009013/description/943a4bc41ad6e80051c5cfacd102cfde.jpg", "/static/img/goodsImage/1009013/description/c0a13678fdef5e56d53de783e8e01350.jpg", "/static/img/goodsImage/1009013/description/220ef8d778bdfc198fcb53f0f01289a2.jpg", "/static/img/goodsImage/1009013/description/573acbc397778453b21aba05e5a397f6.jpg"],
		"inventory": [594],
		"information": [{
			"attrName": "面料成分",
			"attrValue": "70%高模量聚酯+30%聚酰胺"
		}, {
			"attrName": "填充成分",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "重量",
			"attrValue": "1000g"
		}, {
			"attrName": "产地",
			"attrValue": "中国"
		}, {
			"attrName": "温馨提示",
			"attrValue": "枕芯类商品受身高、体型、睡眠习惯不同，产生不同的使用体验，建议多试睡几款枕头，挑选最适合的进行使用。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 576,
		"date": "1500340915379",
		"category": "居家",
		"subCategory": "被枕"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1036002,
		"price": 99,
		"topName": "高山苦荞麦枕",
		"subName": "原生苦荞，健康护颈",
		"shortDescription": ["凉山苦荞", "天然有机", "高温灭菌", "透气饱满", "绗缝工艺", "柔软贴合"],
		"shortDescriptionImage": ["/static/img/goodsImage/1036002/shortdescriptionImage/10aa00c451814987ee5b217323b3fc90.jpg", "/static/img/goodsImage/1036002/shortdescriptionImage/3525eb395d53a71c60ed98ba33d0ff3a.jpg", "/static/img/goodsImage/1036002/shortdescriptionImage/5de8fdf5adc2d23784ac13c1e0a4883e.jpg"],
		"headImage": ["/static/img/goodsImage/1036002/headImage/e2a9af4c4152ff443285cfaec2c1be7e.png", "/static/img/goodsImage/1036002/headImage/1c3acbfaa67a1a2034c53d6a12b87b5b.jpg", "/static/img/goodsImage/1036002/headImage/49366cac271c5614501660ccf2c886a6.jpg", "/static/img/goodsImage/1036002/headImage/6def3e5d0f22d46c20f88304f2dd1f23.jpg", "/static/img/goodsImage/1036002/headImage/49844b0d390c2a1cf6147e80de8c2e51.jpg"],
		"type": ["74×48cm±1cm"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1036002/description/698e2a2252d9d4227f17f9d88a6e87ef.jpg", "/static/img/goodsImage/1036002/description/38d70ef29b5e883125a27d6607a9ce62.jpg", "/static/img/goodsImage/1036002/description/c0f7666b8f215007d322b7f7e7267d7c.jpg", "/static/img/goodsImage/1036002/description/1d7661b99de023bed2ebf360a8f0cb7e.jpg", "/static/img/goodsImage/1036002/description/3a1860e8b8cac1f3e5a42bc7de5a8e04.jpg", "/static/img/goodsImage/1036002/description/eb4e72d283bd58f1b23125dbeef11ef6.jpg", "/static/img/goodsImage/1036002/description/9846b6c36e9dc27fc4b18ec3e0177aff.jpg", "/static/img/goodsImage/1036002/description/9b4e21c0d2fa575dc1636baf71666b1c.jpg", "/static/img/goodsImage/1036002/description/9588e23919c7c54998bb5a07b0907eeb.jpg", "/static/img/goodsImage/1036002/description/c807c41d48efb876244bd41d1dd97ef5.jpg", "/static/img/goodsImage/1036002/description/4b213fc5b21cbf79c39412e6d9b21e7f.jpg", "/static/img/goodsImage/1036002/description/2fba066200fc8ce47a0c7e99b47f97e4.jpg", "/static/img/goodsImage/1036002/description/208af7a63670fc2a438364f2336f2806.jpg", "/static/img/goodsImage/1036002/description/ab0c3198ec5c1193da9cd5a491bb459d.jpg", "/static/img/goodsImage/1036002/description/4c24e52caa847dd17210cc57d243d08c.jpg", "/static/img/goodsImage/1036002/description/0371cfdea30a90ef6955e3bcf3f9b6c0.jpg", "/static/img/goodsImage/1036002/description/8916eff34678bfda4980a231a3b8d09a.jpg"],
		"inventory": [408],
		"information": [{
			"attrName": "填充物",
			"attrValue": "100% 高山苦荞麦壳"
		}, {
			"attrName": "规格",
			"attrValue": "74×48cm±1cm"
		}, {
			"attrName": "填充物重量",
			"attrValue": "3KG"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.天然植物填充，遇梅雨季节需要干燥保存，如有少量飞虫产生，太阳下晒3小时即可去除。 2.枕芯类商品受身高、体型、睡眠习惯不同，产生不同的使用体验，建议多试睡几款枕头，挑选最适合的进行使用。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 799,
		"date": "1500340919303",
		"category": "居家",
		"subCategory": "被枕"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1019006,
		"price": 99,
		"topName": "植物填充护颈夜交藤枕",
		"subName": "安神活络 天然保健",
		"shortDescription": ["野生采收", "野生采收", "附带插袋", "软硬调节", "绗缝工艺", "耐用柔软"],
		"shortDescriptionImage": ["/static/img/goodsImage/1019006/shortdescriptionImage/229119b97a7aacd3210740ce72b5f9ec.jpg", "/static/img/goodsImage/1019006/shortdescriptionImage/4bfd4e4617aa9c6d17d9608e1efee66e.jpg", "/static/img/goodsImage/1019006/shortdescriptionImage/d217a2714192b05706287bad134d989b.jpg"],
		"headImage": ["/static/img/goodsImage/1019006/headImage/b216f2a4d523f86b51e3fd3cb7b9fa7b.png", "/static/img/goodsImage/1019006/headImage/7d5b06bf24cf343ac939b38fb8c1a1c7.jpg", "/static/img/goodsImage/1019006/headImage/343d55292417edd5c3959f3ff5c28020.jpg", "/static/img/goodsImage/1019006/headImage/3e2d677726a32443cfb4e82b15829ff3.jpg", "/static/img/goodsImage/1019006/headImage/fff8d78ae12dfe5477e16669664ba4f5.jpg"],
		"type": ["夜交藤枕"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1019006/description/dbb1e80da69953f64383dd71fd0213f5.jpg", "/static/img/goodsImage/1019006/description/6acc4669a29c55f5c222414ad01bf89b.jpg", "/static/img/goodsImage/1019006/description/514bd211189416cfd66867b7894e64ec.jpg", "/static/img/goodsImage/1019006/description/6291db12d9239a17cc4a746db803a307.jpg", "/static/img/goodsImage/1019006/description/2c12eb42828a8b7aa9b428e34b7a6af5.jpg", "/static/img/goodsImage/1019006/description/592207ddff96c716e5a8d3e02ba80151.jpg", "/static/img/goodsImage/1019006/description/b58dac5f4495fa73d8df137d4aa611d3.jpg", "/static/img/goodsImage/1019006/description/89e5a35e2763cd977f5ecb30f20651ab.jpg", "/static/img/goodsImage/1019006/description/d9b35ce1283c07e4f757e48016258e2d.jpg", "/static/img/goodsImage/1019006/description/29d555239824f9d3f92526120b75550c.jpg"],
		"inventory": [460],
		"information": [{
			"attrName": "填充成分",
			"attrValue": "20% 夜交藤+80% 聚酯纤维"
		}, {
			"attrName": "尺寸",
			"attrValue": "48*74cm"
		}, {
			"attrName": "颜色",
			"attrValue": "白色"
		}, {
			"attrName": "适用人数",
			"attrValue": "单人"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.植物填充，遇梅雨季节需要通风、干燥保存。 2.枕芯类商品受身高、体型、睡眠习惯不同，产生不同的使用体验，建议多试睡几款枕头，挑选最适合的进行使用。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 271,
		"date": "1500340923240",
		"category": "居家",
		"subCategory": "被枕"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1135002,
		"price": 2599,
		"topName": "黑凤梨 宫廷奢华真丝四件套",
		"subName": "100%桑蚕丝，丝滑润肤",
		"shortDescription": ["天然蚕丝", "细软透气", "19MM", "柔韧耐用", "健康印染", "中式素雅"],
		"shortDescriptionImage": ["/static/img/goodsImage/1135002/shortdescriptionImage/4f6c97042ed21ed3d7f441abd1280412.png", "/static/img/goodsImage/1135002/shortdescriptionImage/600073d1bbfcedcb56c3a235c41a0d97.png", "/static/img/goodsImage/1135002/shortdescriptionImage/1b7f5316d8c2deb1966b90e6d6fdabe6.png"],
		"headImage": ["/static/img/goodsImage/1135002/headImage/45548f26cfd0c7c41e0afc3709d48286.png", "/static/img/goodsImage/1135002/headImage/0e59d09161bf11c947fe4bdbfe94aa87.jpg", "/static/img/goodsImage/1135002/headImage/47c131a02d5d5b97ddcd19c16b391bbb.jpg", "/static/img/goodsImage/1135002/headImage/5300c083dcc0c6a856364d883f3284e8.jpg", "/static/img/goodsImage/1135002/headImage/586f42c66523559838fbb97b7315bab6.jpg"],
		"type": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1135002/description/ce065da5a581b8a1e1da01e1f72aa04d.jpg", "/static/img/goodsImage/1135002/description/1d20f3eab71f3d1ca375bb0d0690da7d.jpg", "/static/img/goodsImage/1135002/description/ca8e8313bc8d4e7f4f31e3055e15710f.jpg", "/static/img/goodsImage/1135002/description/d55ac81c509768a4b3712021d8d1a3af.jpg", "/static/img/goodsImage/1135002/description/d4d02d1e8e9d65a20bbfdccae802e5bc.jpg", "/static/img/goodsImage/1135002/description/34856973a680218ca31b055d01b98085.jpg", "/static/img/goodsImage/1135002/description/d9613a4c7cdc5de74f7e3a9b6edba343.jpg", "/static/img/goodsImage/1135002/description/b236819611f9a895ce917d1747c9d3d8.jpg", "/static/img/goodsImage/1135002/description/672f87bf54b9592d0a63ae752d53228e.jpg", "/static/img/goodsImage/1135002/description/5293b61682e8b96c68d290f4057aba82.jpg", "/static/img/goodsImage/1135002/description/dff3f45cfdb375e556c49e0211f2eab9.jpg", "/static/img/goodsImage/1135002/description/631a01941971f4f1ad82196d4348e6e5.jpg", "/static/img/goodsImage/1135002/description/42f3432b77ef99c711cf7a419f9afe42.jpg", "/static/img/goodsImage/1135002/description/5348c425c3a1b19cd79abde731350b17.jpg", "/static/img/goodsImage/1135002/description/aa1270b10f7a430aa3c05ba1b8890cce.jpg", "/static/img/goodsImage/1135002/description/16d8dfd030167b0b894e0d5cfa68b1db.jpg", "/static/img/goodsImage/1135002/description/e708b20d4b3cb672849798c47c588c9c.jpg", "/static/img/goodsImage/1135002/description/43a5a6d94dbf531d2f776c56cc7e8ed1.jpg", "/static/img/goodsImage/1135002/description/460679df62e6e9dbcec48a61a1379729.jpg", "/static/img/goodsImage/1135002/description/a855211c4e342141cb44fc4ffb8f25f5.jpg", "/static/img/goodsImage/1135002/description/555d5a6f27260c1c302dfa94f52307f7.jpg", "/static/img/goodsImage/1135002/description/69ce1c3add12c350f58f682fbfed5cde.jpg", "/static/img/goodsImage/1135002/description/8d854a59b7a925be557225962006b61f.jpg", "/static/img/goodsImage/1135002/description/a8f972dc894bd951e212c0e82950fbae.jpg", "/static/img/goodsImage/1135002/description/1ecaaaa70dbbe5e7f208df3dc059639b.jpg", "/static/img/goodsImage/1135002/description/b6f8bbcf3bd2d6fc12f6f73dd265ca88.jpg", "/static/img/goodsImage/1135002/description/31adf33919ecbfbde1ff66a6187dfa61.jpg", "/static/img/goodsImage/1135002/description/376a5bad83bfe9954a8695fb14aa7edc.jpg", "/static/img/goodsImage/1135002/description/8eff4ef1d35fb07e1d566cc76938ed51.jpg", "/static/img/goodsImage/1135002/description/b8b1162891aa8f59ae69e18b4952a96b.jpg", "/static/img/goodsImage/1135002/description/f37c85761905ae6fcd527890879357ff.jpg", "/static/img/goodsImage/1135002/description/6bbcb00ea1d86fb16b62e25e3b7a592a.jpg", "/static/img/goodsImage/1135002/description/cbfc7d8b8a716f9e808cd6963beb516f.jpg", "/static/img/goodsImage/1135002/description/89e84f757dcd08c422b72264c893948e.jpg", "/static/img/goodsImage/1135002/description/e56e4a405eb2d991bf51e9064afb10b1.jpg", "/static/img/goodsImage/1135002/description/e6d574095ace903c9e525a6563b0fe6c.jpg", "/static/img/goodsImage/1135002/description/d1cd1d440680bda9f3bcdb385936a8f3.jpg", "/static/img/goodsImage/1135002/description/0d7516291e4e51cb19db678fc0bddef9.jpg", "/static/img/goodsImage/1135002/description/88efd9933bb6265b52caf2388ca9d367.jpg", "/static/img/goodsImage/1135002/description/6602c65305b4899bdb150c1dc0e70dbe.jpg", "/static/img/goodsImage/1135002/description/9091ed33e081fa4ab2d182e91f78d76f.jpg", "/static/img/goodsImage/1135002/description/ee849c46df2befa61c296ad3d4762f6f.jpg", "/static/img/goodsImage/1135002/description/0f1db2e6e631e6674ea287286c295bc4.jpg", "/static/img/goodsImage/1135002/description/d430a0b04c726289f572e6a3d44f219b.jpg", "/static/img/goodsImage/1135002/description/9f301e59930023ff8164e9e535699ff2.jpg", "/static/img/goodsImage/1135002/description/61785407397675d1f8027e511489927d.jpg", "/static/img/goodsImage/1135002/description/f0ac6e99273e6c468e5c22bb35aa0ef0.jpg", "/static/img/goodsImage/1135002/description/fe2f6d9db1688faa4180b6510f1c7033.jpg", "/static/img/goodsImage/1135002/description/92c2d340239cb5a2f07b00ae09b9795f.jpg", "/static/img/goodsImage/1135002/description/8167df6c217f8b01be1bfcb7598f1480.jpg", "/static/img/goodsImage/1135002/description/e1500178de2abd1c4afa1d0ff8a55d70.jpg", "/static/img/goodsImage/1135002/description/0d958f5a1536421c1a9d2a63a9d7cba5.jpg", "/static/img/goodsImage/1135002/description/dd63f63a0cb388ce7c98567877f362ab.jpg", "/static/img/goodsImage/1135002/description/fc3c8e7519c1320dae39d6fadd281449.jpg", "/static/img/goodsImage/1135002/description/1a6e5819923271c2098c7ab448eb86c4.jpg", "/static/img/goodsImage/1135002/description/5933c35528141ddc87be6bcc9a3b0779.jpg", "/static/img/goodsImage/1135002/description/1f3b6611e13a033ab727298e61780526.jpg", "/static/img/goodsImage/1135002/description/30330394c4cc2fa4c186f7c9e8fa512f.jpg", "/static/img/goodsImage/1135002/description/e14cb49ea77b1dde6de9b1007e1dfdb0.jpg", "/static/img/goodsImage/1135002/description/da83d13952762d4108a7cf46d79cf51e.jpg", "/static/img/goodsImage/1135002/description/e850a16ff05d91f0c29daf3754145588.jpg", "/static/img/goodsImage/1135002/description/0db0092cdb05a3902b40b609affc77df.jpg", "/static/img/goodsImage/1135002/description/328339e4e593ff42daf047ecdd02e15e.jpg", "/static/img/goodsImage/1135002/description/f6918b9ff482b1f0436aaa793c4940b1.jpg", "/static/img/goodsImage/1135002/description/154e5b5caba88bec7b8cff7506c2b98e.jpg", "/static/img/goodsImage/1135002/description/bdaeadd340e11d187fcbca44902d07e5.jpg", "/static/img/goodsImage/1135002/description/653b0414f64b63b000122eb49acbefd5.jpg", "/static/img/goodsImage/1135002/description/e64b2aae42e83210ce0d0f323e519eba.jpg", "/static/img/goodsImage/1135002/description/359ae63652a3e46bd66f431cf12bf60d.jpg", "/static/img/goodsImage/1135002/description/f11286940f3103bb2509361f4bd5359d.jpg", "/static/img/goodsImage/1135002/description/8720fffbba0bed3d4575bdc3a2e99bfc.jpg", "/static/img/goodsImage/1135002/description/42c35fbf384d44be87ee4ec7353c7868.jpg", "/static/img/goodsImage/1135002/description/7e2001f5a9b8a84cb6ee1e3bbfd508d8.jpg", "/static/img/goodsImage/1135002/description/7e1553a46051d0d9b61eaf0c3a27dd4e.jpg", "/static/img/goodsImage/1135002/description/895e10c475ffd57af2a69364beaa7a79.jpg", "/static/img/goodsImage/1135002/description/4e09a31032bee917fa617c552cf17ed0.jpg", "/static/img/goodsImage/1135002/description/f3106658dacdedf7c29ca6e33cdd7aec.jpg", "/static/img/goodsImage/1135002/description/dfefe8bef418096c8f50128c14d17fd8.jpg"],
		"inventory": [769, 828],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床品： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床品：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "浅杏粉/ 玛瑙红/ 烟白灰"
		}, {
			"attrName": "产地",
			"attrValue": "中国四川"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22796-2009"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 913,
		"date": "1500340926982",
		"category": "居家",
		"subCategory": "床品件套"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1110003,
		"price": 219,
		"topName": "全棉针织条纹四件套 新款",
		"subName": "仅售供应商建议价的1/2",
		"shortDescription": ["长绒棉朵", "纤维柔长", "百隆纱线", "朦胧色彩", "针织工艺", "透气微弹"],
		"shortDescriptionImage": ["/static/img/goodsImage/1110003/shortdescriptionImage/4e810f9cbb5ce3a86d710d7859cb5127.jpg", "/static/img/goodsImage/1110003/shortdescriptionImage/ce0a4bad041979f542288d9ba355138c.jpg", "/static/img/goodsImage/1110003/shortdescriptionImage/4e41dd39d4a733bb700ffac69ea25624.jpg"],
		"headImage": ["/static/img/goodsImage/1110003/headImage/4409aed35d35f105c164b8c4e6184a08.png", "/static/img/goodsImage/1110003/headImage/1f0f46e45939bf6e99942ef2588653f7.jpg", "/static/img/goodsImage/1110003/headImage/af502dbac2858fa1fef9b597ae9c8cee.jpg", "/static/img/goodsImage/1110003/headImage/a4d8b85ef0822d3e684f9eb82e63a474.jpg", "/static/img/goodsImage/1110003/headImage/1ef893de4a69a467ed815b9cdca37a19.jpg"],
		"type": ["烟草绿（床单款）", "木兰黄（床单款）", "深茶褐（床单款）", "丁子灰（床单款）", "茶香粉（床单款）", "烟草绿（床笠款）", "木兰黄（床笠款）", "深茶褐（床笠款）", "丁子灰（床笠款）", "茶香粉（床笠款）"],
		"chara": "10色可选",
		"description": ["/static/img/goodsImage/1110003/description/d8538fc1fe998996325114c624f719a1.jpg", "/static/img/goodsImage/1110003/description/b1951143fcedbc9562484a0039dd4337.jpg", "/static/img/goodsImage/1110003/description/2f535d751f29995d76e114df11c9596d.jpg", "/static/img/goodsImage/1110003/description/8d059ff7f6d8e8eb6405a1c909419d8e.jpg", "/static/img/goodsImage/1110003/description/129bd783856dc807620cba83e7ab3990.jpg", "/static/img/goodsImage/1110003/description/fd65e13198a27d16b2abc8dad6a5af37.jpg", "/static/img/goodsImage/1110003/description/c271a27cbda3087218aef21d547e87fa.jpg", "/static/img/goodsImage/1110003/description/f1a3d568f4a1462bbcdcd7d59dbd8967.jpg", "/static/img/goodsImage/1110003/description/687b4f3cfe3aa110c9fbb50eb0d932b5.jpg", "/static/img/goodsImage/1110003/description/57a4e51a7d947aa626c127dfd297d8fd.jpg", "/static/img/goodsImage/1110003/description/26972050b74ad8a6a1ad5fa2cafd51af.jpg", "/static/img/goodsImage/1110003/description/96a1dcea440f04ef79b4a2f230f3ad4e.jpg", "/static/img/goodsImage/1110003/description/5ca5445bfd20e2b33a532ac809f68ff7.jpg", "/static/img/goodsImage/1110003/description/de03388fb063c7bdd484d50d94e07c85.jpg", "/static/img/goodsImage/1110003/description/9f1014becce514418c474642e4dbe133.jpg", "/static/img/goodsImage/1110003/description/259a07ffa2f93da5935b52052f0ed77b.jpg", "/static/img/goodsImage/1110003/description/feeaeca01390d04f824bea163d97860c.jpg", "/static/img/goodsImage/1110003/description/ed5291fc942540ec229260327e19db02.jpg", "/static/img/goodsImage/1110003/description/6a98cb6b79a391d59b5a2621bed2cb2e.jpg", "/static/img/goodsImage/1110003/description/193907291ac623826f6f5c775a67fade.jpg", "/static/img/goodsImage/1110003/description/3a2cf141464f603ae3ca9a87bc57902a.jpg", "/static/img/goodsImage/1110003/description/7f09942ad010000b25f6ae3ea1c310b4.jpg", "/static/img/goodsImage/1110003/description/22755f238481e6f488e519cd37a88c07.jpg", "/static/img/goodsImage/1110003/description/e27603e0a6cc56f8458544d8de746648.jpg", "/static/img/goodsImage/1110003/description/326040cdf9498300941c870b96670e9b.jpg", "/static/img/goodsImage/1110003/description/3701d760df8c9401bbd7779c4e2b6da7.jpg", "/static/img/goodsImage/1110003/description/7ff5f542bc2fb42e5ffd6c03a5adcc1f.jpg", "/static/img/goodsImage/1110003/description/e41a8606a704a0f87c8804989df46fbe.jpg", "/static/img/goodsImage/1110003/description/e21b7d246a5591a33b77b546affe44c9.jpg", "/static/img/goodsImage/1110003/description/c226b15c68af8bca52f6b8771587564d.jpg", "/static/img/goodsImage/1110003/description/94db167b13530ba2b10cd188ba760787.jpg", "/static/img/goodsImage/1110003/description/f993161c1306efd08d7abd38e6aacc80.jpg", "/static/img/goodsImage/1110003/description/260c6a8cce9629fa598cb5ae814a5fc0.jpg", "/static/img/goodsImage/1110003/description/0721217aa607eb95c90b5bd282e02722.jpg", "/static/img/goodsImage/1110003/description/a77cb20962fcb86658039065983eadfd.jpg", "/static/img/goodsImage/1110003/description/26a092030e3544fd78b70a1b23ffcd45.jpg", "/static/img/goodsImage/1110003/description/d198cb4b33b7227091d3c43f9985ed7e.jpg", "/static/img/goodsImage/1110003/description/06c7a86095e1ea3e8199d02adfb40382.jpg", "/static/img/goodsImage/1110003/description/0961582402d2eb8f03a8c24738ba8310.jpg", "/static/img/goodsImage/1110003/description/878d564efeb08478a8b5014607226e7e.jpg", "/static/img/goodsImage/1110003/description/864275dbb440da7b78d31315d46b4fe2.jpg", "/static/img/goodsImage/1110003/description/9714d8dea45206ea48dced374133f1f4.jpg", "/static/img/goodsImage/1110003/description/1f9430a4eda9b137a8741c8ef93bc403.jpg", "/static/img/goodsImage/1110003/description/3738691274c7c6bc9ec1efaefc791e6f.jpg", "/static/img/goodsImage/1110003/description/6641a6baae1e866feb67be1fa17c2f94.jpg", "/static/img/goodsImage/1110003/description/4a01b54d36b4c7203f5fccfbedcdd5bc.jpg", "/static/img/goodsImage/1110003/description/ed7a97b1ccd0fc59381693bbea0b0095.jpg", "/static/img/goodsImage/1110003/description/0c301364eb76638fceed7e8faca88930.jpg", "/static/img/goodsImage/1110003/description/5c265082943fbd2ad0ad2165abd14804.jpg", "/static/img/goodsImage/1110003/description/409aa4533ab062369297e0030e3f3cb7.jpg", "/static/img/goodsImage/1110003/description/968fd5cc5137fdee55f67e4b8d73273e.jpg", "/static/img/goodsImage/1110003/description/35ea57f5d7f27a89c2cdf409b3600834.jpg", "/static/img/goodsImage/1110003/description/a839b95177fd3c40d85e0a5ba8c2d5a4.jpg", "/static/img/goodsImage/1110003/description/86f2cca04675d971e84a805b8c7b305a.jpg", "/static/img/goodsImage/1110003/description/d6e4f762caeb3e52ed36260cd1d852d9.jpg", "/static/img/goodsImage/1110003/description/442720bafa886f2fd3998322128e69de.jpg", "/static/img/goodsImage/1110003/description/ea26a5e7616aa512b1a7d0751c164490.jpg", "/static/img/goodsImage/1110003/description/be774453b44ea4b31daeb7254880171a.jpg", "/static/img/goodsImage/1110003/description/f381a9df2c5e6c458dfae0e48e6e2feb.jpg", "/static/img/goodsImage/1110003/description/965626ab8a3c5ff74599cafcb574a06f.jpg", "/static/img/goodsImage/1110003/description/9459a8df66adf404c54523daf280407b.jpg", "/static/img/goodsImage/1110003/description/85d33a1ec342243ce98545f32ee2b171.jpg"],
		"inventory": [194, 785, 201, 443, 753, 361, 875, 172, 926, 571],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床品（床笠款）： 被套 200*230cm/ 枕套：48*74cm*2/ 床笠：150*200*28cm1.8米床品（床笠款）：被套 220*240cm/ 枕套：48*74cm*2/ 床笠：180*200*28cm1.5米床品（床单款）： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米床品（床单款）：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm三件套适用于（1.2-1.35M床）：被套 150*200cm/ 床单 200*230cm/ 枕套 48*74cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22844-2009"
		}, {
			"attrName": "颜色",
			"attrValue": "烟草绿/ 木兰黄/ 深茶褐/ 丁子灰/ 茶香粉"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": [{
			"title": "爆品",
			"type": "1"
		}],
		"manufacture": "MUJI制造商",
		"sale": 641,
		"date": "1500340930837",
		"category": "居家",
		"subCategory": "床品件套"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1110004,
		"price": 299,
		"topName": "全棉针织纯色四件套",
		"subName": "日系纯色，面料轻柔舒透",
		"shortDescription": ["长绒棉朵", "纤维柔长", "百隆纱线", "朦胧色彩", "针织工艺", "透气微弹"],
		"shortDescriptionImage": ["/static/img/goodsImage/1110004/shortdescriptionImage/bc13487a088727e63cdbfeed7eab13b3.jpg", "/static/img/goodsImage/1110004/shortdescriptionImage/20aec7f21aa09a16847d1deddd07b669.jpg", "/static/img/goodsImage/1110004/shortdescriptionImage/a8703e81dfb18e0b18edea6c997287cf.jpg"],
		"headImage": ["/static/img/goodsImage/1110004/headImage/cdb83977c02c88f1114a15044a84297b.png", "/static/img/goodsImage/1110004/headImage/65c8a921f20f3cea144e5b49a205a4cc.jpg", "/static/img/goodsImage/1110004/headImage/929be8c2c0ff4918180c2d7a5ea192a8.jpg", "/static/img/goodsImage/1110004/headImage/acd915fbd3e63fd58638c871e1fa6de2.jpg", "/static/img/goodsImage/1110004/headImage/11741a9c889d09114fea3ee39031f6c3.jpg"],
		"type": ["烟草绿（床单款）", "深茶褐（床单款）", "丁子灰（床单款）", "木兰黄（床单款）", "茶香粉（床单款）", "烟草绿（床笠款）", "深茶褐（床笠款）", "丁子灰（床笠款）", "木兰黄（床笠款）", "茶香粉（床笠款）"],
		"chara": "10色可选",
		"description": ["/static/img/goodsImage/1110004/description/47880fc766d839a3828777feec53a13e.jpg", "/static/img/goodsImage/1110004/description/74441c84cbe5806fdef2e0cf43be0a88.jpg", "/static/img/goodsImage/1110004/description/908d408787ddfd3b7dc3f3c1af4c823b.jpg", "/static/img/goodsImage/1110004/description/10a45ff1b96d9ae1b2e85be045f35403.jpg", "/static/img/goodsImage/1110004/description/1c4764829423d9f9177ffaf444249847.jpg", "/static/img/goodsImage/1110004/description/d2a7380060684b67a4dfaae0c9ad5565.jpg", "/static/img/goodsImage/1110004/description/bfb828faec547b5eb2a3d4b225b6c114.jpg", "/static/img/goodsImage/1110004/description/d6ba6df6e20b025f43c249f32ce30990.jpg", "/static/img/goodsImage/1110004/description/53f9912b7780dc1cb42858583571aefe.jpg", "/static/img/goodsImage/1110004/description/10d7e046a52073eac16c7efa97b002b1.jpg", "/static/img/goodsImage/1110004/description/cc2eecbb9ff467c74b6ecfe3caa3101e.jpg", "/static/img/goodsImage/1110004/description/e069759f63521e6bc2eb37fef30e601b.jpg", "/static/img/goodsImage/1110004/description/51ad97945875fc28272b28da394fb5c0.jpg", "/static/img/goodsImage/1110004/description/3b8bbdf0972c0d3900e9b432785fb9ab.jpg", "/static/img/goodsImage/1110004/description/539ff1d8e6bfeb68c2de994f6fd96f94.jpg", "/static/img/goodsImage/1110004/description/1dd4f00e0d58729bbe91104bfbc803cd.jpg", "/static/img/goodsImage/1110004/description/fe865a7f3dc272a15357312c9e135dbd.jpg", "/static/img/goodsImage/1110004/description/fb16002250476297625bd5e44d05f552.jpg", "/static/img/goodsImage/1110004/description/dac6f9ebbef7ed76b2e4037569aa5773.jpg", "/static/img/goodsImage/1110004/description/9687a5f801c9a82ced7681a4ffc6ea1c.jpg", "/static/img/goodsImage/1110004/description/72c7f9a3339427759e67cee41d1e1550.jpg", "/static/img/goodsImage/1110004/description/2be0ac00a3e489a60ed3f67ed01633a5.jpg", "/static/img/goodsImage/1110004/description/98ac2b5e749ecd7f510d2cc00c3ff748.jpg", "/static/img/goodsImage/1110004/description/068f75ac19744123a66cce7a303b7353.jpg", "/static/img/goodsImage/1110004/description/db61610bf6ddbb006be527cc33e6b90e.jpg", "/static/img/goodsImage/1110004/description/1b70454ce9c57c9de3a6bcca1dbc9fd6.jpg", "/static/img/goodsImage/1110004/description/dbda570f086f41e3b3a6758b587c5f36.jpg", "/static/img/goodsImage/1110004/description/69d73b309079f46c750b120c097cf79f.jpg", "/static/img/goodsImage/1110004/description/1ac969778e969025f49b8f5277208c1b.jpg", "/static/img/goodsImage/1110004/description/c8ce3fb3642c7f30b65d184757c8d9da.jpg", "/static/img/goodsImage/1110004/description/00a35e419a8f18910b1b1ee7c6e959b9.jpg", "/static/img/goodsImage/1110004/description/1734a688af89da4b6b85b1a28f647c95.jpg", "/static/img/goodsImage/1110004/description/d3447a014f03d2497820da1961dd5677.jpg", "/static/img/goodsImage/1110004/description/dc00d27c34906fcf6660ffe92e061139.jpg", "/static/img/goodsImage/1110004/description/351d2f82ad39e224658645c4f6cc4e55.jpg", "/static/img/goodsImage/1110004/description/50e40e3ca3dd0f937a11127a1769baf2.jpg", "/static/img/goodsImage/1110004/description/afa2972fd4b02c6f8fe8b3cfa450b4ea.jpg", "/static/img/goodsImage/1110004/description/baab1f1388c30c3865cb54b1b62f236d.jpg", "/static/img/goodsImage/1110004/description/9230589d08130306c20975feed1c037c.jpg", "/static/img/goodsImage/1110004/description/cadfef7285c08eded93c2580dffb1da0.jpg", "/static/img/goodsImage/1110004/description/49a9af3a43004ea64803a236a1cecfbc.jpg", "/static/img/goodsImage/1110004/description/ec9acb15fed0ba6999b4d935e0f7d741.jpg", "/static/img/goodsImage/1110004/description/9d4133e5971c39bfaa46dafa4cc44984.jpg", "/static/img/goodsImage/1110004/description/c3573f285aba429a2ad8b7906541ee97.jpg", "/static/img/goodsImage/1110004/description/015f36cac6202af7e9c83e44e3128109.jpg", "/static/img/goodsImage/1110004/description/646847ae36d8f2597c06e74913858f4b.jpg", "/static/img/goodsImage/1110004/description/581adee870324a0db704e5e286515030.jpg", "/static/img/goodsImage/1110004/description/97da8649cd44c0b2a3f6e6f4457317b1.jpg", "/static/img/goodsImage/1110004/description/2049b7df9706b908a11c26579064e821.jpg", "/static/img/goodsImage/1110004/description/f5d7de8c4b8e2190ba6ba70a0aa310eb.jpg", "/static/img/goodsImage/1110004/description/fe54a77db1a0989b0e3580b05f369f04.jpg", "/static/img/goodsImage/1110004/description/0ddd3d3891cc9dd79331050bb530c479.jpg", "/static/img/goodsImage/1110004/description/bb58d50512c61c6d04932c0a7759e2c1.jpg", "/static/img/goodsImage/1110004/description/cc8ac13e888880f3a7956fa1b66ad148.jpg", "/static/img/goodsImage/1110004/description/ef194aa4a99db3284deab4b9b23f6525.jpg", "/static/img/goodsImage/1110004/description/ed25b346735838785f595411e9e4253c.jpg", "/static/img/goodsImage/1110004/description/980710fdfc19e5806f258ef56e1d8e34.jpg"],
		"inventory": [733, 530, 5, 100, 176, 191, 653, 276, 858, 692],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床品（床笠款）： 被套 200*230cm/ 枕套：48*74cm*2/ 床笠：150*200*28cm1.8米床品（床笠款）：被套 220*240cm/ 枕套：48*74cm*2/ 床笠：180*200*28cm1.5米床品（床单款）： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床品（床单款）：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22844-2009"
		}, {
			"attrName": "颜色",
			"attrValue": "烟草绿/ 深茶褐/ 丁子灰/ 木兰黄/ 茶香粉"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": [{
			"title": "限时购",
			"type": "2"
		}],
		"manufacture": "MUJI制造商",
		"sale": 118,
		"date": "1500340934195",
		"category": "居家",
		"subCategory": "床品件套"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1009024,
		"price": 599,
		"topName": "日式和风懒人沙发",
		"subName": "优质莱卡纯棉，和风家居新体验",
		"shortDescription": ["进口粒子", "弹性环保", "莱卡纯棉", "抗皱耐磨", "弹性测试", "不易变形"],
		"shortDescriptionImage": ["/static/img/goodsImage/1009024/shortdescriptionImage/f1b2a9420b7fb278956bb912e91cf819.jpg", "/static/img/goodsImage/1009024/shortdescriptionImage/51b7cf5ecaee9827e2ff9821e1453d5e.jpg", "/static/img/goodsImage/1009024/shortdescriptionImage/7ec96095f8f605569207711fbf9d44d2.jpg"],
		"headImage": ["/static/img/goodsImage/1009024/headImage/149dfa87a7324e184c5526ead81de9ad.png", "/static/img/goodsImage/1009024/headImage/9460f6b30661548c4a864607bfcdf4ca.jpg", "/static/img/goodsImage/1009024/headImage/acbdb480bcad193fad77ef6c4f52192e.jpg", "/static/img/goodsImage/1009024/headImage/e6feb5f4a0989d212bce068d4907657d.jpg", "/static/img/goodsImage/1009024/headImage/6059ab6e106d97c29d5723c1d6f1a11f.jpg"],
		"type": ["藏青（内胆+外套）", "粉色（内胆+外套）", "深咖（内胆+外套）", "银灰（内胆+外套）", "藏青（仅外套）", "粉色（仅外套）", "深咖（仅外套）", "银灰（仅外套）"],
		"chara": "8色可选",
		"description": ["/static/img/goodsImage/1009024/description/34a6a0daa3f7a397a38aad14cb9e90fa.jpg", "/static/img/goodsImage/1009024/description/76637af0eec246b318cb129b768de637.jpg", "/static/img/goodsImage/1009024/description/18fee22626e61fc1d1a01916914016ba.jpg", "/static/img/goodsImage/1009024/description/91f57a9bb142e1c1e2ff0bbea6f9af96.jpg", "/static/img/goodsImage/1009024/description/252d80fd75eb1254d746d0b57c267650.jpg", "/static/img/goodsImage/1009024/description/4b07697992a2b14de6fd0a5811936d71.jpg", "/static/img/goodsImage/1009024/description/c499439d6081bb4e836955b7514c1b96.jpg", "/static/img/goodsImage/1009024/description/bed437fdc091d020a8f805bcc8830bd8.jpg", "/static/img/goodsImage/1009024/description/0fc5febdb817abd7a1040bab03f048b7.jpg", "/static/img/goodsImage/1009024/description/a0417b3986c9dc082124fcc360390021.jpg", "/static/img/goodsImage/1009024/description/a5c9d24c652d4dee7946ef925105f3f2.jpg", "/static/img/goodsImage/1009024/description/b10272c58f95dd6737ce1cd41452a21d.jpg", "/static/img/goodsImage/1009024/description/510c6ef36760238b38ed59cd6e47a21f.png", "/static/img/goodsImage/1009024/description/6371348b917c021c55dc393fc59d4d28.png", "/static/img/goodsImage/1009024/description/de4079b128e57c5c0fa8a8177e9bc6e7.png", "/static/img/goodsImage/1009024/description/160966fbc772787f824dc1dbd5afb16d.png", "/static/img/goodsImage/1009024/description/bb3c8d3f10f2aca0908871c8e598aa0e.jpg"],
		"inventory": [741, 991, 224, 148, 706, 309, 10, 82],
		"information": [{
			"attrName": "外套材质",
			"attrValue": "外套帆布：100%棉；外套弹力布：锦纶80%氨纶20%"
		}, {
			"attrName": "内胆材质",
			"attrValue": "内胆面料：100%锦纶；填充物：聚苯乙烯（发泡粒子）"
		}, {
			"attrName": "*温馨提示",
			"attrValue": "本品为人工填充粒子，重量难免会有误差，敬请谅解。同时产品在运输过程中受挤压，也可能会造成凹陷。储存时请避免重物挤压以引起泡沫粒子塌陷。"
		}, {
			"attrName": "退货相关",
			"attrValue": "非质量问题退货运费用户自行承担"
		}],
		"label": [{
			"title": "爆品",
			"type": "2"
		}],
		"manufacture": "",
		"sale": 602,
		"date": "1500340937041",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1173006,
		"price": 599,
		"topName": "超柔弹力靠背懒人沙发",
		"subName": "回到家，只想瘫在沙发上",
		"shortDescription": ["深色面料", "气质耐脏", "弹力面料", "贴合承托", "安全粒子", "环保健康"],
		"shortDescriptionImage": ["/static/img/goodsImage/1173006/shortdescriptionImage/ff58005cae88ad33035f33135a16d7b1.jpg", "/static/img/goodsImage/1173006/shortdescriptionImage/424770acaa54eaaabcbdc4ea35761e1c.jpg", "/static/img/goodsImage/1173006/shortdescriptionImage/d0241ee73de1f5ce4747e82783d1a90c.jpg"],
		"headImage": ["/static/img/goodsImage/1173006/headImage/ea8f5714ef50441d01930f4638eb98e1.png", "/static/img/goodsImage/1173006/headImage/bcd519f54e5efc5003c4e22db8d10367.jpg", "/static/img/goodsImage/1173006/headImage/993209d44054bd252394679011548068.jpg", "/static/img/goodsImage/1173006/headImage/300e7c5a38820214fe80af58fcf09ed1.jpg", "/static/img/goodsImage/1173006/headImage/d643e10faccf907f458dc658c9cfe041.jpg"],
		"type": ["褐色", "藏蓝"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1173006/description/84aec71d420cda00327c1a9938eb3436.jpg", "/static/img/goodsImage/1173006/description/760cf1efb73885588c74f6b6e7dfd154.jpg", "/static/img/goodsImage/1173006/description/3c6f94d649c8f98f01cef0e33cc80bba.jpg", "/static/img/goodsImage/1173006/description/f99d7fd6f3ca8658ffb7ca7c0222e6ba.jpg", "/static/img/goodsImage/1173006/description/89b041c588e8b8c56db4058a7f134598.jpg", "/static/img/goodsImage/1173006/description/1945bc9db3a6e87941698413f762372a.jpg", "/static/img/goodsImage/1173006/description/5b528e94188404e77136346b627b7fd6.jpg", "/static/img/goodsImage/1173006/description/28bbf929cbcd25828f6ca221317f3a4a.jpg", "/static/img/goodsImage/1173006/description/134fabe36325f91c1446f2a046748109.jpg", "/static/img/goodsImage/1173006/description/22e3ae6880c4fe40ee8439e84f6d227b.jpg", "/static/img/goodsImage/1173006/description/a0c94c5e647c77072c0d4e253a9ddbbe.jpg", "/static/img/goodsImage/1173006/description/bf1f039fd5896f673717f73eea8b1adf.jpg", "/static/img/goodsImage/1173006/description/42c325ed07f4f1dba6d77bba231e4496.jpg", "/static/img/goodsImage/1173006/description/abd678b065692fa219bf180724b6f899.jpg", "/static/img/goodsImage/1173006/description/6c465632307363affdff054f2569b86c.jpg", "/static/img/goodsImage/1173006/description/df2eea0c0ef90d3e5979f2024808b16a.jpg", "/static/img/goodsImage/1173006/description/cb5c4a52e81ffb79151370d7a6fee79c.jpg", "/static/img/goodsImage/1173006/description/d9e7a384b44891097af36c554a446ff3.jpg", "/static/img/goodsImage/1173006/description/a9b019a3afed5c84be84130590b7ec80.jpg", "/static/img/goodsImage/1173006/description/3ef8f95a7d955dd29a2f3809a8a7dbd3.jpg", "/static/img/goodsImage/1173006/description/d33012c08625379aadeec7990a1c682c.jpg", "/static/img/goodsImage/1173006/description/d1d31552fd02ca5af1538b81d27d5dbf.jpg", "/static/img/goodsImage/1173006/description/1ec2faa876dd726480559e7cb90a685d.jpg", "/static/img/goodsImage/1173006/description/2b4eb2b7dee8391b119eb247bc99c3b3.jpg", "/static/img/goodsImage/1173006/description/fe601351dcbdbb0f68d4844cff12e966.jpg", "/static/img/goodsImage/1173006/description/b2e2f07bdc460dcf8b73be173562a355.jpg", "/static/img/goodsImage/1173006/description/fc4695887da150ad5a3ad73095fe6fb8.jpg", "/static/img/goodsImage/1173006/description/18bf03256bcf815b0218d7ef41789d84.jpg", "/static/img/goodsImage/1173006/description/ccf4146382a02a3b9b973ab5c3108852.jpg", "/static/img/goodsImage/1173006/description/31e7f3b953bd188b0846b957ac38fc57.jpg", "/static/img/goodsImage/1173006/description/352a0865b23f249118a11bdcb2f8a244.jpg", "/static/img/goodsImage/1173006/description/c0ea189b646dcf7e7eebfbd6bdfcc115.jpg", "/static/img/goodsImage/1173006/description/40fdf524ce3c21fafbf66488499b1cf5.jpg", "/static/img/goodsImage/1173006/description/6466377189c3ffc69d6bad9c0d2838c2.jpg", "/static/img/goodsImage/1173006/description/c5eedbe8a55683ae339769efb3d50ca4.jpg", "/static/img/goodsImage/1173006/description/e370a6876bd1e054ac59de740769fba5.jpg", "/static/img/goodsImage/1173006/description/004b1fb3528b1357694456c9a855d953.jpg", "/static/img/goodsImage/1173006/description/feb82db2e4d1b7d63141e7b1ce571f59.jpg", "/static/img/goodsImage/1173006/description/97809c43573e7254937ad1ede2b4a9dd.jpg", "/static/img/goodsImage/1173006/description/bb33fa05bcdc4ad85eecdbec94b319bc.jpg", "/static/img/goodsImage/1173006/description/a900cc8d74dd8034946b3e06c3880ad0.jpg", "/static/img/goodsImage/1173006/description/a450588adc9d41a95b4393222dd2167c.jpg", "/static/img/goodsImage/1173006/description/53fbfb98f7b936ad8a5a24c05f595fb1.jpg", "/static/img/goodsImage/1173006/description/c9e4052eb38de787a16e91dea95ae59d.jpg", "/static/img/goodsImage/1173006/description/273294f3302cb7f46b96ebfcd3956936.jpg", "/static/img/goodsImage/1173006/description/9f3a203b0f84e3afb1c4c1aa331b2c0d.jpg", "/static/img/goodsImage/1173006/description/f3fa72a0dd9695b5361947b46d100ea4.jpg", "/static/img/goodsImage/1173006/description/fbc149e103eae623acac4cb183feff16.jpg", "/static/img/goodsImage/1173006/description/ba6443bb2ed426f92a4f99c1496440d0.jpg", "/static/img/goodsImage/1173006/description/e5c521216bb50a9eaac0b12f2344b931.jpg", "/static/img/goodsImage/1173006/description/4672db6e7bf2968ae1150c4deae53bc2.jpg", "/static/img/goodsImage/1173006/description/e8a62e3bc1abcf630bdd63a0e76dd7cd.jpg", "/static/img/goodsImage/1173006/description/0bfcb2ba29b28223dc912a40a2beb27c.jpg", "/static/img/goodsImage/1173006/description/218ae800db56361fc154e00e7e4b3ca0.jpg"],
		"inventory": [381, 346],
		"information": [{
			"attrName": "颜色",
			"attrValue": "褐色/藏青"
		}, {
			"attrName": "面料",
			"attrValue": "外套弹力布：87%聚酯纤维13%氨纶内胆弹力布：95%聚酯纤维5%氨纶"
		}, {
			"attrName": "填充物",
			"attrValue": "聚苯乙烯（发泡粒子）"
		}, {
			"attrName": "填充物重量",
			"attrValue": "5.2kg"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB 18401-2010 B类"
		}, {
			"attrName": "产品等级",
			"attrValue": "合格品"
		}, {
			"attrName": "退货相关",
			"attrValue": "非质量问题退货运费用户自行承担"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 275,
		"date": "1500340939761",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1138000,
		"price": 29,
		"topName": "日式蓬软太鼓抱枕",
		"subName": "萌趣太鼓造型 软糯轻柔回弹",
		"shortDescription": ["麂皮绒面", "绒软细腻", "仿羽棉芯", "蓬松软糯", "活性染料", "健康耐用"],
		"shortDescriptionImage": ["/static/img/goodsImage/1138000/shortdescriptionImage/6ffc1a7437d9d54b4b417554a7261d58.jpg", "/static/img/goodsImage/1138000/shortdescriptionImage/9164ad4f7e225f09568e6ff0ebe2ec2e.jpg", "/static/img/goodsImage/1138000/shortdescriptionImage/a553d0014958f329b161b1824db3888a.jpg"],
		"headImage": ["/static/img/goodsImage/1138000/headImage/ad953e16ad8c33b714e7af941ce8cd56.png", "/static/img/goodsImage/1138000/headImage/6c077e6fdbb1097c530ec38f805bef96.jpg", "/static/img/goodsImage/1138000/headImage/18327e601ce72fce5295c3e8a4e5edb8.jpg", "/static/img/goodsImage/1138000/headImage/5599380c7fcccc15cb60d1e1f2f4ebca.jpg", "/static/img/goodsImage/1138000/headImage/aa818e0f542b19dca3dedbd82299f5d4.jpg"],
		"type": ["直径55CM", "直径40CM"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1138000/description/c0433bd3aafdc44b2b5fe10ced151823.jpg", "/static/img/goodsImage/1138000/description/241526b14e760f3b327d745127b7cadd.jpg", "/static/img/goodsImage/1138000/description/924f6a3a78957b404ea2ad0ea24b4d58.jpg", "/static/img/goodsImage/1138000/description/21b519690bf5574c6a4794fd0663fa37.jpg", "/static/img/goodsImage/1138000/description/40ce0f2d0f0331024cb5eeffd48613f5.jpg", "/static/img/goodsImage/1138000/description/707d4c2e44903802f5181edc4d5e2aa4.jpg", "/static/img/goodsImage/1138000/description/0a26d87e0542007a59158a814b999f67.jpg", "/static/img/goodsImage/1138000/description/5732b17001835e524acac7d3b75685e7.jpg", "/static/img/goodsImage/1138000/description/19a4e7e34b7507e1ffb7ff3a3939a0fe.jpg", "/static/img/goodsImage/1138000/description/699bf4c433ba2bb7736401e2272a2697.jpg", "/static/img/goodsImage/1138000/description/bb28a8cb46ffd42a39122d3f0724b3ee.jpg", "/static/img/goodsImage/1138000/description/43f3eeb3661f54db929a9e3c8ee8be1c.jpg", "/static/img/goodsImage/1138000/description/37b4e61572b7c69462ae74b6a3cb4cb3.jpg", "/static/img/goodsImage/1138000/description/dd17986d401a93b01526b7855e722efa.jpg", "/static/img/goodsImage/1138000/description/e76a0c72a3e6cc2f15f61048ef1423c8.jpg", "/static/img/goodsImage/1138000/description/eabbdb77f25b449b1b3bcfd740a5c85c.jpg", "/static/img/goodsImage/1138000/description/c92f5747f156e0c3df3873456bfdc364.jpg", "/static/img/goodsImage/1138000/description/fce1bbb0804c45fcedc0d407526197bd.jpg", "/static/img/goodsImage/1138000/description/de893522b3454e6769d46d5d16c35ec9.jpg", "/static/img/goodsImage/1138000/description/c7ca459ec92d9f32b25c4d1681a3efdf.jpg", "/static/img/goodsImage/1138000/description/bd7974a599497d0830fe209f572f1d43.jpg", "/static/img/goodsImage/1138000/description/a52672cac9385c1a6da086e46aead878.jpg", "/static/img/goodsImage/1138000/description/edc7589ef8d2d748b10d4fbe62d6cad9.jpg", "/static/img/goodsImage/1138000/description/769529f68aad47685e9fd8ccc88a5065.jpg", "/static/img/goodsImage/1138000/description/6151ae4dcae5a0ed3e9194c0d994e8d8.jpg", "/static/img/goodsImage/1138000/description/ddfb7e8eb34b476cb3a5cc6aeae1b414.jpg", "/static/img/goodsImage/1138000/description/356742ded4619131733f009e7f44bdb8.jpg", "/static/img/goodsImage/1138000/description/d522efc0adefdf878a187d68287ccac7.jpg", "/static/img/goodsImage/1138000/description/bd385aa80f06967d8c120ee2a73ebdea.jpg", "/static/img/goodsImage/1138000/description/4a383ec27f0d0fecf6b218a6434a6537.jpg", "/static/img/goodsImage/1138000/description/dd76c5d83bdfac3eaef226032e9f2f1c.jpg", "/static/img/goodsImage/1138000/description/f37bf734bedcb5fc34f96a2d3ce21362.jpg", "/static/img/goodsImage/1138000/description/9426b170263b5f2e60b4e349002fb453.jpg", "/static/img/goodsImage/1138000/description/02c8fd2d4afb11e4ebfe7e675725f8b9.jpg", "/static/img/goodsImage/1138000/description/55114d32fb55124afb57fa5f96c7aad6.jpg", "/static/img/goodsImage/1138000/description/6c812cb0cf47dfb2b0e0dbdd4e2ae2d9.jpg", "/static/img/goodsImage/1138000/description/8491553451f68f13de7d88abd32e80bb.jpg", "/static/img/goodsImage/1138000/description/2358865b0b2916d7b4c85105828e6f5e.jpg", "/static/img/goodsImage/1138000/description/3d4a761f631987bcb1542cee33c35661.jpg", "/static/img/goodsImage/1138000/description/af64442ed12ecc4ec0a8f1053f0e6c4f.jpg", "/static/img/goodsImage/1138000/description/d00f1aa2e519c822a180024983611962.jpg", "/static/img/goodsImage/1138000/description/4dca882b9a0a583456f322030d96d99f.jpg", "/static/img/goodsImage/1138000/description/a95ed3ffbb239954cc0f1089600847cb.jpg", "/static/img/goodsImage/1138000/description/3783189e151670cae90114ac96208749.jpg", "/static/img/goodsImage/1138000/description/ea89e25888731072a7838f367efe40cc.jpg", "/static/img/goodsImage/1138000/description/1f3d87a044500179907d61e7984785b8.jpg", "/static/img/goodsImage/1138000/description/bfc62369d2cebd727c24356199b3dfc6.jpg", "/static/img/goodsImage/1138000/description/be23add374cfc9344889d449a537159c.jpg", "/static/img/goodsImage/1138000/description/113f624f32c22d14b8fe49495d275bce.jpg", "/static/img/goodsImage/1138000/description/ed060c62699d53a8d04451061aed0a95.jpg", "/static/img/goodsImage/1138000/description/a5cc33cd7c28a4c6dbb12e24c5b95e17.jpg", "/static/img/goodsImage/1138000/description/6ea47a643df6b81539cb50e83585febf.jpg", "/static/img/goodsImage/1138000/description/37bd564f186c644e582eb5056597fe2b.jpg", "/static/img/goodsImage/1138000/description/8b47fe758560f31f84441a5420c2777e.jpg", "/static/img/goodsImage/1138000/description/079946aa8f0edab416032a761e69c874.jpg", "/static/img/goodsImage/1138000/description/fab6ee083f738fe81e836f5b46345b8c.jpg"],
		"inventory": [269, 249],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "直径40cm/ 直径55cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}, {
			"attrName": "颜色",
			"attrValue": "天青色/ 松叶绿/ 珊瑚红/ 姜黄色/ 香芋粉/ 卡其色/ 深咖色/ 海军蓝"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 959,
		"date": "1500340942951",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1154021,
		"price": 849,
		"topName": "面包椅",
		"subName": "面包椅面 神奇坐感",
		"shortDescription": ["面包椅面", "饱满绵软", "加厚椅背", "贴合曲线", "环保面料", "防水防污"],
		"shortDescriptionImage": ["/static/img/goodsImage/1154021/shortdescriptionImage/da3fce69f9686d7b37e309ae7e596570.jpg", "/static/img/goodsImage/1154021/shortdescriptionImage/0681d8638e1a3922fedc645dbb399619.jpg", "/static/img/goodsImage/1154021/shortdescriptionImage/a5e75d7ca8febc0aa690fd9326a6b1d7.jpg"],
		"headImage": ["/static/img/goodsImage/1154021/headImage/80ddf769c55b9605256cc7a08c8e7264.png", "/static/img/goodsImage/1154021/headImage/9f8c8266e43bd057f1f51fd82b95983a.jpg", "/static/img/goodsImage/1154021/headImage/dbd1be6d9d78ff3e32161ca92f019016.jpg", "/static/img/goodsImage/1154021/headImage/6d0934ecbadb371e90572da22f13f477.jpg", "/static/img/goodsImage/1154021/headImage/b3936c9de91934479f98933a4542588b.jpg"],
		"type": ["灰色"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1154021/description/5d97f490adcb0094cc1af5244b198b63.jpg", "/static/img/goodsImage/1154021/description/9838b763c91584a619307b14b866c7f9.jpg", "/static/img/goodsImage/1154021/description/aa4d6adb28d30fff614ca7e7d8327c5f.jpg", "/static/img/goodsImage/1154021/description/a755eedaeb821bf06c953cde98f957fe.jpg", "/static/img/goodsImage/1154021/description/f3dbc8ea164d625c1e260a807d6d9e1a.jpg", "/static/img/goodsImage/1154021/description/4d1f4d43ca9a901b0de45865d88613cb.jpg", "/static/img/goodsImage/1154021/description/8e4f4c6bb4926578424155a8a4d702a6.jpg", "/static/img/goodsImage/1154021/description/d25e7ff0e37b5cd52e8247650cde6580.jpg", "/static/img/goodsImage/1154021/description/abdf51aa37a11020284513734e70c3e1.jpg", "/static/img/goodsImage/1154021/description/5e32aeb7c8928957fc8d9212adfd3647.jpg", "/static/img/goodsImage/1154021/description/12fd2daaf3d342f68af7cec627b0056b.jpg", "/static/img/goodsImage/1154021/description/6b49d84304ed670b8aa834ffe0c251cb.jpg", "/static/img/goodsImage/1154021/description/8255d2333aad5e1ef08745080b3a66b7.jpg", "/static/img/goodsImage/1154021/description/712bb7ac42b9e1a7bd53c30fd88aba6c.jpg", "/static/img/goodsImage/1154021/description/c11a6983cdb00af9b6e5935101126143.jpg", "/static/img/goodsImage/1154021/description/8e94dee07f8833180350da096515e2f8.jpg", "/static/img/goodsImage/1154021/description/848c3ef3774416210eb4079add429c08.jpg", "/static/img/goodsImage/1154021/description/15e4d896a3dca854ab1a3392f3920cbb.jpg", "/static/img/goodsImage/1154021/description/1e2399031d1d2fde8f7f43b9c39c7cce.jpg", "/static/img/goodsImage/1154021/description/f8aecb8c158089cdbe2fc5aae4cff83e.jpg", "/static/img/goodsImage/1154021/description/2af33190e76a8d5bc2a06d7650c762b3.jpg", "/static/img/goodsImage/1154021/description/469c8977e5266e328dd5e4d0901bc98b.jpg", "/static/img/goodsImage/1154021/description/a37f25e7f87e57dbe21f9483a894c0af.jpg", "/static/img/goodsImage/1154021/description/5a5e22cdedb6cd37ab03d54ef31a418e.jpg", "/static/img/goodsImage/1154021/description/6b1fa2d6fbb79885f8dc3367e339c629.jpg", "/static/img/goodsImage/1154021/description/0b6bbe497142abc60efcc13eff4a3223.jpg", "/static/img/goodsImage/1154021/description/20a1a5ad255d8f2cb23e0ddf499a7549.jpg", "/static/img/goodsImage/1154021/description/061d055d087b156706aac7a34833568d.jpg", "/static/img/goodsImage/1154021/description/fb3265ded18b7fcb0666547685b71a31.jpg", "/static/img/goodsImage/1154021/description/80643c20dfbec105e5fa95e8d9c63843.jpg", "/static/img/goodsImage/1154021/description/fba7e079d7e23c7419f92024de253a1d.jpg", "/static/img/goodsImage/1154021/description/24bbef3a0353669785c908c518d2fcb0.jpg", "/static/img/goodsImage/1154021/description/888b4d839bff3023700ddf2109bbbd02.jpg", "/static/img/goodsImage/1154021/description/ac9e3fb8adc36b7ce3b72d0be3d21504.jpg", "/static/img/goodsImage/1154021/description/755745c268dc3e43d1b08a12df866b05.jpg", "/static/img/goodsImage/1154021/description/5c89a85a1fda69efc9b83e40e2071a20.jpg", "/static/img/goodsImage/1154021/description/8b6f3d3294c373c13b644d4ac470c8c0.jpg", "/static/img/goodsImage/1154021/description/31011705839f81375ca617067c1f91ba.jpg", "/static/img/goodsImage/1154021/description/38d6a3859b92c4b132b310f90f7e8dff.jpg", "/static/img/goodsImage/1154021/description/a455625af2a0abd02f11428f5e947220.jpg", "/static/img/goodsImage/1154021/description/48fa325daf63e4518542835c06681cb8.jpg", "/static/img/goodsImage/1154021/description/5bd4deecc62607514a7f8091afad839d.jpg", "/static/img/goodsImage/1154021/description/6f3429946d207793e585e7dfaece5686.jpg", "/static/img/goodsImage/1154021/description/2342b24f3ee8f3ec43505d2363ddd386.jpg", "/static/img/goodsImage/1154021/description/99b18e97947f646cd8ab687385b0f550.jpg", "/static/img/goodsImage/1154021/description/93cfbf76425ea2386113fed3e725ab04.jpg", "/static/img/goodsImage/1154021/description/e9a5b34799aa5893232787ed4fb1568c.jpg", "/static/img/goodsImage/1154021/description/8a697eaa30c1277f97c705c6a6dd33f0.jpg", "/static/img/goodsImage/1154021/description/3b7e1ddb8a3efba33b33e3c93fbcabdf.jpg", "/static/img/goodsImage/1154021/description/078150b25d755e33e9d4b5f4c696cab2.jpg"],
		"inventory": [748],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "480*565*830mm"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "德国hülsta制造商",
		"sale": 752,
		"date": "1500340945738",
		"category": "居家",
		"subCategory": "家具"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1154023,
		"price": 1099,
		"topName": "2件装 叠加餐椅",
		"subName": "随心叠放 方便存储",
		"shortDescription": ["叠装轻便", "节省空间", "舒适坐面", "久坐不累", "环保面料", "牢固耐用"],
		"shortDescriptionImage": ["/static/img/goodsImage/1154023/shortdescriptionImage/cb06ceba794d17570ffb9982663c2a84.jpg", "/static/img/goodsImage/1154023/shortdescriptionImage/e8d693d763becee6d8517029452b56a6.jpg", "/static/img/goodsImage/1154023/shortdescriptionImage/8cf38ec25a6e39d8bac790a7e60f6f3b.jpg"],
		"headImage": ["/static/img/goodsImage/1154023/headImage/3601ddd1952e5cc17e94dc7f178aff1e.png", "/static/img/goodsImage/1154023/headImage/f55d1ce204cc21c507f2ce635fb443eb.jpg", "/static/img/goodsImage/1154023/headImage/81b87c1359faf560a7033606457371e4.jpg", "/static/img/goodsImage/1154023/headImage/a69fa0db6a08b2f2220922cdef6d1a38.jpg", "/static/img/goodsImage/1154023/headImage/52db8f20e21d6d2656d8c0e47800e0d0.png"],
		"type": ["浅灰", "深灰"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1154023/description/96e3ff6c52e37c11327f7d9916ae4680.jpg", "/static/img/goodsImage/1154023/description/8ac0f8f90a969ac60efda5cc1eb05bf0.jpg", "/static/img/goodsImage/1154023/description/1e6beca9be3c1c17620cfd1642cd73dc.jpg", "/static/img/goodsImage/1154023/description/5c250df5234a812dd54a64f50f996c1d.jpg", "/static/img/goodsImage/1154023/description/c53a6249cc67b3b26969d77011d46d47.jpg", "/static/img/goodsImage/1154023/description/43861b8a8cf4f07d54f00bb75b4c018a.jpg", "/static/img/goodsImage/1154023/description/3f1c554606276f3588780b084e571cac.jpg", "/static/img/goodsImage/1154023/description/e4d39db31e5d3980e5484715e5685446.jpg", "/static/img/goodsImage/1154023/description/3caf36aeb8f523a96494a5c2bdda1b42.jpg", "/static/img/goodsImage/1154023/description/81f344347ba5a09b4216443cb732bb29.jpg", "/static/img/goodsImage/1154023/description/8e22539689349b65abcb1c5395f6de13.jpg", "/static/img/goodsImage/1154023/description/82619fe218783cae7140a1bb14a05afb.jpg", "/static/img/goodsImage/1154023/description/2634996f2fb9933038c57c7eeebfe96a.jpg", "/static/img/goodsImage/1154023/description/55a599d57362cf992231e6e82fb0df83.jpg", "/static/img/goodsImage/1154023/description/a78e4cc2360501e79fe2211911f9cefb.jpg", "/static/img/goodsImage/1154023/description/12446e0433c1f6014af400795aba0857.jpg", "/static/img/goodsImage/1154023/description/0fad29141fe5b6055103275df607d9dc.jpg", "/static/img/goodsImage/1154023/description/8b9721a126e2359dc5491894bfe78188.jpg", "/static/img/goodsImage/1154023/description/cf581aef8acb2fbec64c0e18f14fba5d.jpg", "/static/img/goodsImage/1154023/description/a7d9d9eeca7d948fee28a6f684a76bd7.jpg", "/static/img/goodsImage/1154023/description/22b803660a71eab46a096ae915ec6a1b.jpg", "/static/img/goodsImage/1154023/description/f10932558877ab9169613c4933d31de5.jpg", "/static/img/goodsImage/1154023/description/9ebd6d009d43c890bdb25133dda94ac3.jpg", "/static/img/goodsImage/1154023/description/c9c59a551fed162326fe6fa6216c0f48.jpg", "/static/img/goodsImage/1154023/description/c4e3a6508cab53862806f581a657cf0b.jpg", "/static/img/goodsImage/1154023/description/f012335e056488aedcef9569966d77af.jpg", "/static/img/goodsImage/1154023/description/251337ba91f5bc7acaa2bd54ee85309c.jpg", "/static/img/goodsImage/1154023/description/793fb0fd4dae1db979f808f3fe236325.jpg", "/static/img/goodsImage/1154023/description/797dced03ad566d4b9ec708022541418.jpg", "/static/img/goodsImage/1154023/description/2e11d4ebc98cf0ac994f1ba4e28cb5db.jpg", "/static/img/goodsImage/1154023/description/637ddf33f96a6817588b3f7b8804db9a.jpg", "/static/img/goodsImage/1154023/description/b5846de481f7a91ec401aab6a93bff0a.jpg", "/static/img/goodsImage/1154023/description/eaed0b61d246b346ecf981d259a6031a.jpg", "/static/img/goodsImage/1154023/description/f08de26f36845a5bd6503f083a0cd107.jpg", "/static/img/goodsImage/1154023/description/91cf25f9fd638e7cec49d21061009b97.jpg", "/static/img/goodsImage/1154023/description/603d9122892aebfcdc580a62ba0194f6.jpg", "/static/img/goodsImage/1154023/description/c008be641c53fa8cb6b805bd75ee82d9.jpg", "/static/img/goodsImage/1154023/description/a17307765df16dda88a58c8ed90c8ed6.jpg", "/static/img/goodsImage/1154023/description/b6f902af88c2322ce6e5ae3a6464b529.jpg", "/static/img/goodsImage/1154023/description/0f54967e2bfea6f2e2be0131833b8fc6.jpg", "/static/img/goodsImage/1154023/description/0e8af9c1e883924384334b4f08db1c92.jpg", "/static/img/goodsImage/1154023/description/46bf5fe783e7082fa4c247431e1343b3.jpg", "/static/img/goodsImage/1154023/description/96729d5eda8eb83e0124439cb6513ca2.jpg", "/static/img/goodsImage/1154023/description/ddb0cbbfd15bf367021ebf4d5bb438ad.jpg", "/static/img/goodsImage/1154023/description/2718723c65a805a5420b170846e75527.jpg", "/static/img/goodsImage/1154023/description/b8bd01da6ca851d6f63fb83cd58cddf5.jpg", "/static/img/goodsImage/1154023/description/84d596078628ad19944471d2c042e4aa.jpg", "/static/img/goodsImage/1154023/description/074a67d11783b452918ebd47127e61e3.jpg", "/static/img/goodsImage/1154023/description/06c6c1f166f389d6fa1374544b2fa799.jpg", "/static/img/goodsImage/1154023/description/6c50a7cc6b73c8f1cd4fa3eee27491bd.jpg", "/static/img/goodsImage/1154023/description/8b204268e66e0dea710836995cb7aa9a.jpg"],
		"inventory": [273, 158],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "445*560*870mm"
		}, {
			"attrName": "规格",
			"attrValue": "2件装"
		}, {
			"attrName": "颜色",
			"attrValue": "浅灰；深灰"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "德国hülsta制造商",
		"sale": 949,
		"date": "1500340949172",
		"category": "居家",
		"subCategory": "家具"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1109008,
		"price": 3999,
		"topName": "黑凤梨 云端沙发组合",
		"subName": "MUJI供应商携手打造",
		"shortDescription": ["舒适靠背", "5档可调", "外套可拆", "方便清洗", "柔软填充", "置身云端"],
		"shortDescriptionImage": ["/static/img/goodsImage/1109008/shortdescriptionImage/2d7f84a8cd457020b9b0a001cb922d82.jpg", "/static/img/goodsImage/1109008/shortdescriptionImage/ec4080fe279366fd3e0b6bb3e3d4009f.jpg", "/static/img/goodsImage/1109008/shortdescriptionImage/45292b6bb11eeb06e991d6824c96622b.jpg"],
		"headImage": ["/static/img/goodsImage/1109008/headImage/d2b638c0671be2e507463bcc7f1b0425.png", "/static/img/goodsImage/1109008/headImage/52e1a79197af9b1cc73c836f74b190d4.jpg", "/static/img/goodsImage/1109008/headImage/4c07ef11f91c4139411f5fff38c78750.jpg", "/static/img/goodsImage/1109008/headImage/6ac6c255e6ad5039e903f3051b56e25e.jpg", "/static/img/goodsImage/1109008/headImage/88aef8f37fd7be612875d93a1b3867c4.jpg"],
		"type": ["2P+1P+0.5P"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1109008/description/4f018814526cc689c33245add0c73d18.jpg", "/static/img/goodsImage/1109008/description/8772c1ddef07961e5fbacf078bf2e5ac.jpg", "/static/img/goodsImage/1109008/description/44ecf036402fd08e2c706a4d77f71777.jpg", "/static/img/goodsImage/1109008/description/dd3fad87a2a513db4ec0d1ea3fc44058.jpg", "/static/img/goodsImage/1109008/description/5dfa805f1f0e5a727a879cb964e51008.jpg", "/static/img/goodsImage/1109008/description/885b89e44c7d5b34d988749989f95b01.jpg", "/static/img/goodsImage/1109008/description/8cdae1260485bb2d65c094579c502cc9.jpg", "/static/img/goodsImage/1109008/description/d1d06118b3495b523032bbd5f37488ac.jpg", "/static/img/goodsImage/1109008/description/8f85a18b9a3fef0b3655a350c56ef46e.jpg", "/static/img/goodsImage/1109008/description/d4b4a5f1f0e364a48dbd4952c0c055cd.jpg", "/static/img/goodsImage/1109008/description/8158142654c8cd06f52410f9aebf9428.jpg", "/static/img/goodsImage/1109008/description/4019a3222548379fc09f9b1350ed258f.jpg", "/static/img/goodsImage/1109008/description/9f5f283d79b19d1c8fb5614283eeab62.jpg", "/static/img/goodsImage/1109008/description/826a8c9e9eb9e4a6fa027b43a910c23c.jpg", "/static/img/goodsImage/1109008/description/d674253aae822b5dd802c2e597cddabe.jpg", "/static/img/goodsImage/1109008/description/c03e86ef73b4f36e9cba5b3a711b268b.jpg", "/static/img/goodsImage/1109008/description/c0454a4350e0d3f6e806e33c5f10fb89.jpg", "/static/img/goodsImage/1109008/description/00bb899de9558dd7a421bfc8c623b56a.jpg", "/static/img/goodsImage/1109008/description/ee86ba708753450215fed65cf37de038.jpg", "/static/img/goodsImage/1109008/description/8c6178b72779b53eb1fa718758fda9b7.jpg", "/static/img/goodsImage/1109008/description/3b321f3136b519c6c0c6ba3da9edfd82.jpg", "/static/img/goodsImage/1109008/description/c83161c4e05784414da9e6322320ed4c.jpg", "/static/img/goodsImage/1109008/description/b4d4bdf91f6087a085d2e31255ecdad3.jpg", "/static/img/goodsImage/1109008/description/01b63c828af258bd06ede7c7902bdece.jpg", "/static/img/goodsImage/1109008/description/8cda5e9e4b3ef3e56a3008a3027b826b.jpg", "/static/img/goodsImage/1109008/description/3ffbde5e79339a006eda93b6994ad96a.jpg", "/static/img/goodsImage/1109008/description/db182bb5fc6cdd8aa1cad9a2173dbd8b.jpg", "/static/img/goodsImage/1109008/description/9cf2c3e5957ddd4d5b130202d7a9af19.jpg", "/static/img/goodsImage/1109008/description/87354799e2ba119881a0f76eac347ab6.jpg", "/static/img/goodsImage/1109008/description/1c71ce27a6b52f47ea0a0577c1577e31.jpg", "/static/img/goodsImage/1109008/description/1b1b0eff4c63c04b0bc7b7e38861cca6.jpg", "/static/img/goodsImage/1109008/description/2c568f0fbdbe8835a7222c9c89648489.jpg", "/static/img/goodsImage/1109008/description/b48c31aa50048d0453905003301762b2.jpg", "/static/img/goodsImage/1109008/description/e6b898e1d32b7dcd26faf8e161b3b01e.jpg", "/static/img/goodsImage/1109008/description/c3b387dc7283cc8ac1196d224205daf7.jpg", "/static/img/goodsImage/1109008/description/1023b383673768b48772a40fc3169886.jpg", "/static/img/goodsImage/1109008/description/14b03c40ef34070a768ec3e5e90a6eb7.jpg", "/static/img/goodsImage/1109008/description/92a9337b85d6ba4821cb64c36422212a.jpg", "/static/img/goodsImage/1109008/description/8deb2c1ec01fcb84874bb6554d58e9e9.jpg", "/static/img/goodsImage/1109008/description/5939d4f8e23cda756e04a2e167c3cb46.jpg", "/static/img/goodsImage/1109008/description/1c56849dc718e925aca75c9e3dc3de3d.jpg", "/static/img/goodsImage/1109008/description/e34151f6d458563c498fcc6de1e29ba2.jpg", "/static/img/goodsImage/1109008/description/fce3c71a58bbe72543d2164e5dcd50c9.jpg", "/static/img/goodsImage/1109008/description/21a9397e890bd495d00fa0ce812a394f.jpg", "/static/img/goodsImage/1109008/description/2eb27fa65ce7a0a0b6438a23cf66b37b.jpg", "/static/img/goodsImage/1109008/description/9414b97e9c8f5ac8137c8425e42d0955.jpg", "/static/img/goodsImage/1109008/description/ea5ebedb9475c9ea69e23b890e789f87.jpg", "/static/img/goodsImage/1109008/description/995c4e62e8e9292335380d0d1dc446ae.jpg", "/static/img/goodsImage/1109008/description/bbea0b3b5a440f6b14ced2fe4fb81eea.jpg", "/static/img/goodsImage/1109008/description/270f45aa41e948ecde775411838a92b9.jpg", "/static/img/goodsImage/1109008/description/9b888df9915c4f9497d455081cc352e8.jpg", "/static/img/goodsImage/1109008/description/833125f95260b926901c6eb02e31f392.jpg", "/static/img/goodsImage/1109008/description/111033bd20cd0b28841867159120904d.jpg", "/static/img/goodsImage/1109008/description/a32e129436f06e30cbcd3633d11e9007.jpg", "/static/img/goodsImage/1109008/description/2be9f6f815b703217c80888eedd8b1c6.jpg", "/static/img/goodsImage/1109008/description/66415970b8d9dfb8b3c50686f0158e11.jpg", "/static/img/goodsImage/1109008/description/3af3ff254b5793cd7d9f6c81b52397c0.jpg", "/static/img/goodsImage/1109008/description/7d513edb8946496c10b77c6205bdd10b.jpg", "/static/img/goodsImage/1109008/description/c461ada94ce6947d4b4a5c2ac93c4e63.jpg", "/static/img/goodsImage/1109008/description/16f330ac5627a463d70732da7d2efac1.jpg"],
		"inventory": [166],
		"information": [{
			"attrName": "框架材质",
			"attrValue": "钢管"
		}, {
			"attrName": "面料成分",
			"attrValue": "15%亚麻+85%涤"
		}, {
			"attrName": "颜色",
			"attrValue": "米白色"
		}, {
			"attrName": "是否组装",
			"attrValue": "组装【沙发脚】"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "2P:1300*930*930mm; 1P:680*930*930mm; 0.5P:670*450*380mm"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "MUJI制造商",
		"sale": 510,
		"date": "1500340953461",
		"category": "居家",
		"subCategory": "家具"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1160010,
		"price": 99,
		"topName": "定时硅胶LED小夜灯",
		"subName": "定时功能，柔软硅胶",
		"shortDescription": ["定时功能", "安心入睡", "内置灯珠", "两档调光", "环保硅胶", "圆润柔软"],
		"shortDescriptionImage": ["/static/img/goodsImage/1160010/shortdescriptionImage/b52df2e23b4a5afda49e21598ab1a443.jpg", "/static/img/goodsImage/1160010/shortdescriptionImage/39ffb1cb3c1ede7344ca3ba2e49d6cfa.jpg", "/static/img/goodsImage/1160010/shortdescriptionImage/083b95a7a703716fedcf8a081990c040.jpg"],
		"headImage": ["/static/img/goodsImage/1160010/headImage/0a9a7b1b6417314ef8e2b86ca880d323.png", "/static/img/goodsImage/1160010/headImage/35ab3fc333998b0c042fcbb29878ab72.jpg", "/static/img/goodsImage/1160010/headImage/c1be8ef7dd44841831bf5a2a610c31ab.jpg", "/static/img/goodsImage/1160010/headImage/17a67f520e26ef8a4a215198ad2c5982.jpg", "/static/img/goodsImage/1160010/headImage/98dcd92d446b78c7d901b6a1085e982c.jpg"],
		"type": ["白色"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1160010/description/d50e72d7cc7cd08b281a272ef4a2c1ee.jpg", "/static/img/goodsImage/1160010/description/5795a001faecc09f1f20378682f369fe.jpg", "/static/img/goodsImage/1160010/description/3554b83b9a01e3ce1f5f13af8e56b9d7.jpg"],
		"inventory": [313],
		"information": [{
			"attrName": "产品尺寸",
			"attrValue": "直径108mm*高度127mm"
		}, {
			"attrName": "充电时间",
			"attrValue": "约2小时"
		}, {
			"attrName": "颜色",
			"attrValue": "白色"
		}, {
			"attrName": "功率",
			"attrValue": "0.5W（3颗）"
		}, {
			"attrName": "充电电压",
			"attrValue": "DC 5.0V"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 511,
		"date": "1500340957688",
		"category": "居家",
		"subCategory": "灯具"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1086015,
		"price": 249,
		"topName": "黑凤梨 北欧极简直杆台灯",
		"subName": "北欧色彩，极简线条",
		"shortDescription": ["线条极简", "低调百搭", "磨砂喷塑", "色泽持久", "八孔散热", "安全安心"],
		"shortDescriptionImage": ["/static/img/goodsImage/1086015/shortdescriptionImage/eb31b07a15d7f84b4357c2eebd1a99a0.jpg", "/static/img/goodsImage/1086015/shortdescriptionImage/e98c89dd63b2724e6922e5179b6e9c8d.jpg", "/static/img/goodsImage/1086015/shortdescriptionImage/d730c79a15706a9a042587079f40616f.jpg"],
		"headImage": ["/static/img/goodsImage/1086015/headImage/82dd8deeff71138a254509a4a1d215e7.png", "/static/img/goodsImage/1086015/headImage/9331158a10c79a0663e53865cd1689ec.jpg", "/static/img/goodsImage/1086015/headImage/b4706343b3817e690d778e5f8a68a8de.jpg", "/static/img/goodsImage/1086015/headImage/7a8499c2ded7790addffb9d87fc4532b.jpg", "/static/img/goodsImage/1086015/headImage/2831d02bb34fabbcaf602fdf7a9cc409.jpg"],
		"type": ["本白", "哑黑", "姜黄"],
		"chara": "3色可选",
		"description": ["/static/img/goodsImage/1086015/description/97b0c537afdd31479d162843a0d1d84c.jpg", "/static/img/goodsImage/1086015/description/b37bd80283652bd7174694a45589f704.jpg", "/static/img/goodsImage/1086015/description/5347d867f61722a0695b9db09af9990f.jpg", "/static/img/goodsImage/1086015/description/5ffecc39946e35a19455718e508ecbfa.jpg", "/static/img/goodsImage/1086015/description/7d3337aabc4cd48e17df504968b9bcc2.jpg", "/static/img/goodsImage/1086015/description/edcb96d5626a01a021f61386c1818305.jpg", "/static/img/goodsImage/1086015/description/2a4cb2f72588c0edbeef0ddd8d1a0b40.jpg", "/static/img/goodsImage/1086015/description/ec52d796d5157f8afee110ad019be447.jpg", "/static/img/goodsImage/1086015/description/706468839b4ced6effe7151a60da7971.jpg", "/static/img/goodsImage/1086015/description/99e15a962590ca4ebd5b80972e60f3ac.jpg", "/static/img/goodsImage/1086015/description/05365437b5293acdaa82cab3042f31f8.jpg", "/static/img/goodsImage/1086015/description/148a43696d26a46718b34af52bab6e02.jpg", "/static/img/goodsImage/1086015/description/6fe5611b34cbe2325edc817ca8191793.jpg", "/static/img/goodsImage/1086015/description/1c4f30f42af4368ff9bf551aea624032.jpg", "/static/img/goodsImage/1086015/description/761086d5857b8ed91ed41c5869fd83b2.jpg", "/static/img/goodsImage/1086015/description/f594295a6a0b406f9183b7666aaeecb7.jpg", "/static/img/goodsImage/1086015/description/1854325dca8842d82cad840627788b0a.jpg", "/static/img/goodsImage/1086015/description/606580cbd91b9b13c8cc2d42868fd447.jpg", "/static/img/goodsImage/1086015/description/b84ff4d6c2e1d7eb9df07e6955d1a3ff.jpg", "/static/img/goodsImage/1086015/description/b7d6bc7aad160a75c4237480e93e26c4.jpg", "/static/img/goodsImage/1086015/description/bc198e38ce66be717011483345a93180.jpg", "/static/img/goodsImage/1086015/description/470c22b71ce0b5fe11221c42767a8be4.jpg", "/static/img/goodsImage/1086015/description/295c6ce44ce48167974b492bf6647bca.jpg", "/static/img/goodsImage/1086015/description/8c1a9546d3f1f5166090002aa219dfe3.jpg", "/static/img/goodsImage/1086015/description/3b63e297f8537c10b038b9262fe5a09a.jpg", "/static/img/goodsImage/1086015/description/0fe3bdfe082bf47b4053042634119a2e.jpg", "/static/img/goodsImage/1086015/description/116fc27c8412658de40feec0431c6136.jpg", "/static/img/goodsImage/1086015/description/5e6612039aacbfe26fd828b1f0410464.jpg", "/static/img/goodsImage/1086015/description/ae20877524cc681e64cdfe1599fd1818.jpg", "/static/img/goodsImage/1086015/description/c251f87aa5a64337f224f65e585b6916.jpg", "/static/img/goodsImage/1086015/description/555cb6c1a1eba39fc6cd94c476cf2ee1.jpg", "/static/img/goodsImage/1086015/description/5e7d3bccffee8d4dd3bcf0568f6b8d4a.jpg", "/static/img/goodsImage/1086015/description/334c808306358792bf7ae29d7d1a2fb6.jpg", "/static/img/goodsImage/1086015/description/1a278dd1df1ea039774b4191952b218e.jpg", "/static/img/goodsImage/1086015/description/910073b6c377251840f38a3bb8a55f17.jpg", "/static/img/goodsImage/1086015/description/ccb62460dfc3ba0fb60beb2052ea7c68.jpg", "/static/img/goodsImage/1086015/description/afc94193f157c8ab6a38b0f3d62be48b.jpg", "/static/img/goodsImage/1086015/description/6565f2c8f13149dda330beed934f05bf.jpg", "/static/img/goodsImage/1086015/description/0e39b2e7039fd1508ef5656bad01f413.jpg", "/static/img/goodsImage/1086015/description/9ab575cc295e636074e1ae187d3fb7d7.jpg", "/static/img/goodsImage/1086015/description/809c0c0065c9ef01ce9be46e0e7a3d69.jpg", "/static/img/goodsImage/1086015/description/725137857e600fa3481bafb5d30b37c3.jpg", "/static/img/goodsImage/1086015/description/7f347ab2bdb91c4cb5c9c2639f5f8681.jpg", "/static/img/goodsImage/1086015/description/c8abbc31c592453f7a3722be0a731ac6.jpg", "/static/img/goodsImage/1086015/description/b0ff3858e1dd8c00721e73092c0e14bb.jpg", "/static/img/goodsImage/1086015/description/316c9169c6c59da8db87afc3f509654b.jpg", "/static/img/goodsImage/1086015/description/ee9b968bea3ebc3a8281991cdf8f4260.jpg", "/static/img/goodsImage/1086015/description/d83f3603d3893b3a067ebe75de11fb3f.jpg", "/static/img/goodsImage/1086015/description/5841597405d29fc7e98065bf68685d06.jpg", "/static/img/goodsImage/1086015/description/aa6025810c36d9aa5bbd02bd7f6870d8.jpg", "/static/img/goodsImage/1086015/description/80a1adee8cb1479b6b728a8a0a63797f.jpg"],
		"inventory": [599, 814, 629],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "GB 7000.11-2008"
		}, {
			"attrName": "产地",
			"attrValue": "中国广东"
		}, {
			"attrName": "型号",
			"attrValue": "MT20290-1-130"
		}, {
			"attrName": "温馨提示",
			"attrValue": "本产品不含灯泡"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 969,
		"date": "1500340960868",
		"category": "居家",
		"subCategory": "灯具"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1154002,
		"price": 520,
		"topName": "黑凤梨 一见倾心永生花",
		"subName": "实用收纳功能 浪漫搭配",
		"shortDescription": ["进口花材", "浪漫搭配", "收纳功能", "实用贴心", "安全染料", "色彩鲜亮"],
		"shortDescriptionImage": ["/static/img/goodsImage/1154002/shortdescriptionImage/bd1a17404d0b3c748bec5f86c0715ca1.jpg", "/static/img/goodsImage/1154002/shortdescriptionImage/8e37032b2d6931ac1278f3c34e71df94.jpg", "/static/img/goodsImage/1154002/shortdescriptionImage/8b627441de0c59caea1046655e05ec38.jpg"],
		"headImage": ["/static/img/goodsImage/1154002/headImage/2972d30c2fb6f7640404594b443de46b.png", "/static/img/goodsImage/1154002/headImage/4d3b22db060d21ae3a4d24f8723be142.jpg", "/static/img/goodsImage/1154002/headImage/53e82e8930db6d2893127ab0c4d6bf64.jpg", "/static/img/goodsImage/1154002/headImage/9f0139dc56f694518298dc8624fa376d.jpg", "/static/img/goodsImage/1154002/headImage/9f479f800258346822b8226e47148c82.jpg"],
		"type": ["粉"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1154002/description/b3c401d71c1655da7c339d7b7e9c7384.jpg", "/static/img/goodsImage/1154002/description/0837cc5acfb67f893954b738ef2e8fb5.jpg", "/static/img/goodsImage/1154002/description/b252f7a5e14d4d1271d4865d8be80292.jpg", "/static/img/goodsImage/1154002/description/978cf68df9a199ea1dea9a6e4af27288.jpg", "/static/img/goodsImage/1154002/description/9a908620f0a57314d7551a7626575941.jpg", "/static/img/goodsImage/1154002/description/0ce4f61b0438511ce0098bc0e8bbcd32.jpg", "/static/img/goodsImage/1154002/description/6fa6df2f42debca0f2676501fa3f7215.jpg", "/static/img/goodsImage/1154002/description/acff96b50e867f47298c5bb1c59c0662.jpg", "/static/img/goodsImage/1154002/description/34b764db48600e0fe845de5ddefa4189.jpg", "/static/img/goodsImage/1154002/description/f62f64805ff72dcc18e1ed9bdd296bed.jpg", "/static/img/goodsImage/1154002/description/23ad2495ccf04041557e0ce005f486e4.jpg", "/static/img/goodsImage/1154002/description/fd26665b59cdbe5faf67fcf35d0b65d9.jpg", "/static/img/goodsImage/1154002/description/d5e77110879c7607748fdf798cd25a94.jpg", "/static/img/goodsImage/1154002/description/981c945247d0eb61a986cfb35023d3cb.jpg", "/static/img/goodsImage/1154002/description/f04456a58fbe712ab049e80a77d90571.jpg", "/static/img/goodsImage/1154002/description/af49b9408a85003f1e44574e397e5918.jpg", "/static/img/goodsImage/1154002/description/32c46f345fab7f0a37f6cbc2cb9788c1.jpg", "/static/img/goodsImage/1154002/description/428a41757af283a14eb624bdcd2903b2.jpg", "/static/img/goodsImage/1154002/description/ae60d025093d25bd873885568963937f.jpg", "/static/img/goodsImage/1154002/description/a29b03c0d1c89665d39a3ac50dbaa49b.jpg", "/static/img/goodsImage/1154002/description/663fe69d3ffafe426ae4ab7010601fe7.jpg", "/static/img/goodsImage/1154002/description/dbbf90428711b47da346efebd9d23bb6.jpg", "/static/img/goodsImage/1154002/description/b311b3d67e631a467fda86c1565fd255.jpg", "/static/img/goodsImage/1154002/description/8ed9e05a23e9b42515b155495cd7c2ba.jpg", "/static/img/goodsImage/1154002/description/040b9be6c4d440900190fd4b43f04620.jpg", "/static/img/goodsImage/1154002/description/9f9b0ac0c69c075ef8bf8754b5e63170.jpg", "/static/img/goodsImage/1154002/description/d81f143ab07596cbc5b4f35003e14218.jpg", "/static/img/goodsImage/1154002/description/4e655eca77fa2aa2d6b4aab74ade9e3e.jpg", "/static/img/goodsImage/1154002/description/f993e3634d0369a791a6e36e08a113c8.jpg", "/static/img/goodsImage/1154002/description/ad8dcee12e5aab7bab608c0724376514.jpg", "/static/img/goodsImage/1154002/description/8f305fb4658072b58921f56dcb124edd.jpg", "/static/img/goodsImage/1154002/description/b7a44bd15b6037407488a7641f03c38b.jpg", "/static/img/goodsImage/1154002/description/bf9568d5b8cfbf7294fa4c7372874166.jpg", "/static/img/goodsImage/1154002/description/acc166100a08675eb8f59b60ae198c66.jpg", "/static/img/goodsImage/1154002/description/7514287bc5742f77f8bbc5d2b4879198.jpg", "/static/img/goodsImage/1154002/description/78304fbc20f7da4f5c4b6f79e32db78a.jpg", "/static/img/goodsImage/1154002/description/9d374878dd16cd726b479b489b3371a2.jpg", "/static/img/goodsImage/1154002/description/88c071fb9067fc5fd3babca8fe66625a.jpg", "/static/img/goodsImage/1154002/description/4f2298e4cfbdd78303cfb32786039c0c.jpg", "/static/img/goodsImage/1154002/description/777fead092d985175b4b97d0b028020e.jpg", "/static/img/goodsImage/1154002/description/f99756f085dc4c198aa51a05e8c5f4a8.jpg", "/static/img/goodsImage/1154002/description/a137cc5d69fc20a966ae390bfa81b473.jpg", "/static/img/goodsImage/1154002/description/4bf00cbc5f6496565044bdbb5677f1ed.jpg", "/static/img/goodsImage/1154002/description/7ad6896d3ac79649299bc643cdff33cb.jpg", "/static/img/goodsImage/1154002/description/ff667ead6697714ffcc90c81fb670fc6.jpg", "/static/img/goodsImage/1154002/description/20749a9f4290a449b59c4469cedfe4bd.jpg", "/static/img/goodsImage/1154002/description/e2863000452f44e5e6c271d973b9b03e.jpg", "/static/img/goodsImage/1154002/description/8ddf09ceb5c4aa7f3edaf2faa263c5e8.jpg", "/static/img/goodsImage/1154002/description/bafab9f198a7f58c2d1bb2d9d8392fc8.jpg", "/static/img/goodsImage/1154002/description/0946f61e8cd9b0713d7c52dfa0718c0e.jpg", "/static/img/goodsImage/1154002/description/099a1d226b8536aeab9c99214ea55611.jpg", "/static/img/goodsImage/1154002/description/858f416f32654ffac9be022ccbd8b4d0.jpg", "/static/img/goodsImage/1154002/description/6e415566698f541df3c4ab7b78326c91.jpg", "/static/img/goodsImage/1154002/description/88c5007091934f6d9923ac3cc06e6444.jpg", "/static/img/goodsImage/1154002/description/f50375ceb6fbbe80159b097810b30dba.jpg", "/static/img/goodsImage/1154002/description/b053c2e718578ea139e16d61fa30a0f6.jpg", "/static/img/goodsImage/1154002/description/8eb1bbac8164880e1b58c0235dbc38dc.jpg", "/static/img/goodsImage/1154002/description/588b8b700f3872f288d699fd0f2445fe.jpg", "/static/img/goodsImage/1154002/description/e3d23b1cbed851deb3d30b040f30b89d.jpg", "/static/img/goodsImage/1154002/description/09d2f69a7d15b23c2511019900197d43.jpg", "/static/img/goodsImage/1154002/description/96b5a81bedfa3384138322d3310e3e35.jpg", "/static/img/goodsImage/1154002/description/53a57762ecf5d40d8cb35280f0b126a4.jpg", "/static/img/goodsImage/1154002/description/b115fab5f60dea0321b2bcbf880f579e.jpg"],
		"inventory": [508],
		"information": [{
			"attrName": "鲜花辅材",
			"attrValue": "彼岸花、白色蜡菊、茼蒿花"
		}, {
			"attrName": "颜色",
			"attrValue": "倾情粉"
		}, {
			"attrName": "花材种植地",
			"attrValue": "日本"
		}, {
			"attrName": "*温馨提示",
			"attrValue": "由于花材的季节性供应特点，个别配材会有所调整，且因花材批次不同会有一定微小色差，不会影响整体花盒效果。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 702,
		"date": "1500340964497",
		"category": "居家",
		"subCategory": "家饰"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1083009,
		"price": 299,
		"topName": "海洋之心永生花",
		"subName": "厄瓜多尔玫瑰，精致美感",
		"shortDescription": ["厚实花瓣", "傲然盛开", "晶亮钻粉", "点缀浪漫", "典雅礼盒", "见证真心"],
		"shortDescriptionImage": ["/static/img/goodsImage/1083009/shortdescriptionImage/92e19beb4edaf19b99d94d9e23c2c4aa.jpg", "/static/img/goodsImage/1083009/shortdescriptionImage/185da26ea9aac5274aa1099d0685a7e8.jpg", "/static/img/goodsImage/1083009/shortdescriptionImage/089075e051603240836de34336012fa4.jpg"],
		"headImage": ["/static/img/goodsImage/1083009/headImage/76e5c820f6bb71a26517ffa01f499871.png", "/static/img/goodsImage/1083009/headImage/157be86783a0cab72ac5bd73d9de79aa.jpg", "/static/img/goodsImage/1083009/headImage/238d39c9f49c2ab186be2cdbe21ebad4.jpg", "/static/img/goodsImage/1083009/headImage/d361a0c72f4c3d8b61d1502d47878d97.jpg", "/static/img/goodsImage/1083009/headImage/7f1ab428fbea15ea9c02af2b44b452e1.jpg"],
		"type": ["妖姬蓝"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1083009/description/1b746ed72f6bf99405c749cb6c9da6eb.jpg", "/static/img/goodsImage/1083009/description/06b441ba473cabbc5189da42a2c0eb77.jpg", "/static/img/goodsImage/1083009/description/b3f24e6e91b100c8132feb082f1a34e9.jpg", "/static/img/goodsImage/1083009/description/696cba61d6b37131c2322b66d0495b93.jpg", "/static/img/goodsImage/1083009/description/f1b458886ef3de6961975f86425fafb0.jpg", "/static/img/goodsImage/1083009/description/63635766ac69f5009483eaca4d696da2.jpg", "/static/img/goodsImage/1083009/description/3b0d9fdd0909325b8a067e2e7d70c157.jpg", "/static/img/goodsImage/1083009/description/82da955cf9e36e3d08dadc59f5f300c3.jpg", "/static/img/goodsImage/1083009/description/20d2cc7cdf5e6efe02bfe466e66cd9f6.jpg", "/static/img/goodsImage/1083009/description/3a337c585ca3a1bbeee9785e0f6a191c.jpg", "/static/img/goodsImage/1083009/description/65277e00b7fc1a3319881a3692777268.jpg", "/static/img/goodsImage/1083009/description/31e4584649abe39c7f197ba8924fb74c.jpg", "/static/img/goodsImage/1083009/description/fbc59ffa03f9901cdccfba627b60e1ce.jpg", "/static/img/goodsImage/1083009/description/d4b72e337df5ed195cfbc661a3777845.jpg", "/static/img/goodsImage/1083009/description/080ce5c403e912ac791b31eb0c289511.jpg", "/static/img/goodsImage/1083009/description/78b066ce0b49497a9501948063322263.jpg", "/static/img/goodsImage/1083009/description/7fb74a8a28be5f5c6dacfd16f978afe2.jpg", "/static/img/goodsImage/1083009/description/36b820addabfb7caf910529969a3f1bb.jpg", "/static/img/goodsImage/1083009/description/219fdb339a336e4f72f40c8849069b15.jpg", "/static/img/goodsImage/1083009/description/bfb962ce656900f82c46c2e2d3a5df1d.jpg", "/static/img/goodsImage/1083009/description/01946020d4e1500d250d28c7e7e0dae5.jpg", "/static/img/goodsImage/1083009/description/20b66f85a1606fda8fc700a85c17d8d7.jpg", "/static/img/goodsImage/1083009/description/31a70dab0b81c7eac9696b2116a6df99.jpg", "/static/img/goodsImage/1083009/description/611db5a79922174f7fc267267c01fb6a.jpg", "/static/img/goodsImage/1083009/description/ceeea13917bc6ba5d8b358007feacc4f.jpg", "/static/img/goodsImage/1083009/description/95cb22dfb9901f209719996cb40c1d41.jpg", "/static/img/goodsImage/1083009/description/e98ac4660f3907189a73040d91c74609.jpg", "/static/img/goodsImage/1083009/description/8593ac139f076079f1600d5c9dc8018d.jpg", "/static/img/goodsImage/1083009/description/0045d4dd0585566f1b93eaf844e3073a.jpg", "/static/img/goodsImage/1083009/description/f9d407b3292b173daec7044c3db1fd6c.jpg", "/static/img/goodsImage/1083009/description/1f5e7818316caa798f48fae4f3cdb938.jpg", "/static/img/goodsImage/1083009/description/be171d645ed6e4f2651df9d3f6f4231e.jpg", "/static/img/goodsImage/1083009/description/ea8bf6c7ebc5641209fb1c846f3bef5f.jpg", "/static/img/goodsImage/1083009/description/95b1e32659f10a90e0ea01255d318df2.jpg", "/static/img/goodsImage/1083009/description/5c60047bd75a8b0cc943925f2ecd6e63.jpg", "/static/img/goodsImage/1083009/description/0d5fdfb237a0ff76f276662437a49bdd.jpg", "/static/img/goodsImage/1083009/description/476a35de0402c6ffb483d890ab0ddbef.jpg", "/static/img/goodsImage/1083009/description/02a627d54428aced361f96e3e6eca226.jpg", "/static/img/goodsImage/1083009/description/e6b5d161c87cae4b6d713fd79e135045.jpg", "/static/img/goodsImage/1083009/description/d893f5518e755af8686cf13e4490a129.jpg", "/static/img/goodsImage/1083009/description/54fa3793ff82c378ab52a9eaf6fa4f7e.jpg", "/static/img/goodsImage/1083009/description/053b11e1be5bbf24773853025125dec0.jpg", "/static/img/goodsImage/1083009/description/57798ce86240acd240f4b56c9aa04f01.jpg", "/static/img/goodsImage/1083009/description/8a379abfeada13c4696c48379a035373.jpg", "/static/img/goodsImage/1083009/description/8a2d49a4c05ee87b057e9f0bd1c22a66.jpg", "/static/img/goodsImage/1083009/description/91bdd265ca73b68ecc940bda58c67d5d.jpg", "/static/img/goodsImage/1083009/description/46328006b2280246628dbbf890cb7b72.jpg"],
		"inventory": [387],
		"information": [{
			"attrName": "朵数",
			"attrValue": "1朵"
		}, {
			"attrName": "颜色",
			"attrValue": "妖姬蓝"
		}, {
			"attrName": "尺寸",
			"attrValue": "17*17*12cm"
		}, {
			"attrName": "花材种植地",
			"attrValue": "厄瓜多尔"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 991,
		"date": "1500340968397",
		"category": "居家",
		"subCategory": "家饰"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1116031,
		"price": 439,
		"topName": "黑凤梨 怦然心动永生花",
		"subName": "音乐与花的浪漫碰撞",
		"shortDescription": ["进口玫瑰", "惊艳花球", "天空之城", "意境配乐", "环保染料", "安全放心"],
		"shortDescriptionImage": ["/static/img/goodsImage/1116031/shortdescriptionImage/44b1c8285cae2cb86b28c0dbdec94798.jpg", "/static/img/goodsImage/1116031/shortdescriptionImage/519f08310b659022f06ab148d86df695.jpg", "/static/img/goodsImage/1116031/shortdescriptionImage/fc511425911e93948c3b2ee6a3210cac.jpg"],
		"headImage": ["/static/img/goodsImage/1116031/headImage/f88c3dc42f3e4d7da1ded8c1ee6a97ba.png", "/static/img/goodsImage/1116031/headImage/562ef1acdc8c2a7d5c1fd1de8d778074.jpg", "/static/img/goodsImage/1116031/headImage/2c74a79d58a9f77cc5214bfdc807d4be.jpg", "/static/img/goodsImage/1116031/headImage/46a7feb93c24ce74b6a686053e2ddbc8.jpg", "/static/img/goodsImage/1116031/headImage/7b3084f82ec3a4389f5e5db63a82b087.jpg"],
		"type": ["渐变粉花瓣+灰色底座（无录音功能）", "录音功能款"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1116031/description/f0c84c042edd11af9ebba69b35b57012.jpg", "/static/img/goodsImage/1116031/description/e2e62335f668b0b02a4d5d34d1f6d3dd.jpg", "/static/img/goodsImage/1116031/description/79efd7a2c817c5257105280a3f369477.jpg", "/static/img/goodsImage/1116031/description/4f0a1a9871a0e7aa94f836d4d933eb23.jpg", "/static/img/goodsImage/1116031/description/87587862a18e2c3c65721876f626cbe3.jpg", "/static/img/goodsImage/1116031/description/7a44cbd746845f58601bb1009271b817.jpg", "/static/img/goodsImage/1116031/description/a014c533734421f95b616ac5155728e5.jpg", "/static/img/goodsImage/1116031/description/7c01d52114ed4b99e7fb73e7c2073741.jpg", "/static/img/goodsImage/1116031/description/1bb9fdbfc9d6d6375d8b6392ae7b0ffc.jpg", "/static/img/goodsImage/1116031/description/f2aaeb066dae56db2a3df63811d6a399.jpg", "/static/img/goodsImage/1116031/description/f7304a57837f789307fbe79b260862f4.jpg", "/static/img/goodsImage/1116031/description/6da199bceda3de32d44e498553bdf646.jpg", "/static/img/goodsImage/1116031/description/7b832dea81b7253ba53c3c7d6c44503e.jpg", "/static/img/goodsImage/1116031/description/c2672abc242dad5a9f007a9d91e8c9e5.jpg", "/static/img/goodsImage/1116031/description/9716f0660d546d235e898fb4b4458684.jpg", "/static/img/goodsImage/1116031/description/47c401072dc19e153baa05aa9994392f.jpg", "/static/img/goodsImage/1116031/description/1aea26b5f370147755e3af352d7f1043.jpg", "/static/img/goodsImage/1116031/description/9e5b854587fb479190a041cbc805ef8d.jpg", "/static/img/goodsImage/1116031/description/5b538f4ca14ff35af8d17b7df7a3a8ca.jpg", "/static/img/goodsImage/1116031/description/f3ae6abd0699a1bf5449558f14eae704.jpg", "/static/img/goodsImage/1116031/description/ab071b8f626f2a99769a7990b75c352c.jpg", "/static/img/goodsImage/1116031/description/5075019eea354cc9f3f96be1647b933c.jpg", "/static/img/goodsImage/1116031/description/fafcae716667afc5acb7dd1f1e6899c4.jpg", "/static/img/goodsImage/1116031/description/cc1e2beca5bc2fd2831fbf919467789b.jpg", "/static/img/goodsImage/1116031/description/6feb3d0330891c6a091e1d6e62fddd3e.jpg", "/static/img/goodsImage/1116031/description/564796c3afcb8e4743b4ff4f5f5b42e7.jpg", "/static/img/goodsImage/1116031/description/031245eb85b27fb27e499d9da40b6c56.jpg", "/static/img/goodsImage/1116031/description/8f2a6c93b37979a014c87eea95b4db6a.jpg", "/static/img/goodsImage/1116031/description/d23012c236f0e23471d613cebffbcdc5.jpg", "/static/img/goodsImage/1116031/description/e7193a8ed886cb60298c4b550feb7803.jpg", "/static/img/goodsImage/1116031/description/4e81c7ba4a9ea3b6da5d7ea95d42df9e.jpg", "/static/img/goodsImage/1116031/description/0e7fc74e2535281e11484289b40fb300.jpg", "/static/img/goodsImage/1116031/description/71b8c4cf01ed3ec9e6d8ad1c8f4a9fb5.jpg", "/static/img/goodsImage/1116031/description/b53f86e45c2c9ea601bcd549a1838420.jpg", "/static/img/goodsImage/1116031/description/ab6164cc6f080a0ed12c9b511e323a31.jpg", "/static/img/goodsImage/1116031/description/62edf39825002ed02743927e138613f4.jpg", "/static/img/goodsImage/1116031/description/112d0148da519b9312ccef31b028061a.jpg", "/static/img/goodsImage/1116031/description/d0f3f972703ea02dbc2cd14efe44b169.jpg", "/static/img/goodsImage/1116031/description/74baec97b72933b30402e85650bcb74f.jpg", "/static/img/goodsImage/1116031/description/0d9e98254e8fee5be14f9fd225cbb31f.jpg", "/static/img/goodsImage/1116031/description/31d5e6b96246f2342894ad35d818fad0.jpg", "/static/img/goodsImage/1116031/description/3830dba2766aec495ac22df3c38d3bc5.jpg", "/static/img/goodsImage/1116031/description/4ff7df14acb298c4cc5329818191a7aa.jpg", "/static/img/goodsImage/1116031/description/98d11fad51ba6803d20ae7d9d4c00159.jpg", "/static/img/goodsImage/1116031/description/b25e1f17c35ab4de3a7c9483575255cf.jpg", "/static/img/goodsImage/1116031/description/194083b4daa7735a38413e1262663544.jpg", "/static/img/goodsImage/1116031/description/738020753a274396c6c21695b8495da6.jpg", "/static/img/goodsImage/1116031/description/252fc3d67d92ad5965f64c8fbc8e0758.jpg", "/static/img/goodsImage/1116031/description/e066fa4df4af095c819caa29869b760b.jpg", "/static/img/goodsImage/1116031/description/92d5b81b946d4610d2f0ddae095f0ef9.jpg", "/static/img/goodsImage/1116031/description/b2058ca9d31838ee64db54ec6ff01148.jpg", "/static/img/goodsImage/1116031/description/39e3fb67a1fbbba9300491f217b3841f.jpg", "/static/img/goodsImage/1116031/description/b32ae22817cb9232fcb83f44a321cfa1.jpg", "/static/img/goodsImage/1116031/description/e49e1563dbc2e96c2c1999c66b04ddfd.jpg", "/static/img/goodsImage/1116031/description/cae6cdc0b0e6398e6f6587a767fa565d.jpg", "/static/img/goodsImage/1116031/description/f724ab0d08508d171b0ff1136a7fb621.jpg", "/static/img/goodsImage/1116031/description/2f3006e85d29ffc71ebd169a4a9f2c41.jpg", "/static/img/goodsImage/1116031/description/9f6f30b8009e62f82c5b934dad834c8a.jpg", "/static/img/goodsImage/1116031/description/de9733d2221449ceffffdd73964c5fb1.jpg"],
		"inventory": [323, 170],
		"information": [{
			"attrName": "附加功能",
			"attrValue": "音乐盒"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "直径10.5cm*高17cm"
		}, {
			"attrName": "颜色",
			"attrValue": "渐变粉花朵+灰色底座"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 424,
		"date": "1500340971970",
		"category": "居家",
		"subCategory": "家饰"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1154005,
		"price": 99,
		"topName": "黑凤梨 便携手持风扇",
		"subName": "便携小巧，手持清风",
		"shortDescription": ["流线弧度", "轻松手握", "低音劲风", "两档可调", "配备底座", "方便两用"],
		"shortDescriptionImage": ["/static/img/goodsImage/1154005/shortdescriptionImage/cd1516308d32e94adfa70e16f388d73e.jpg", "/static/img/goodsImage/1154005/shortdescriptionImage/09c4da8807f4b9ffe6f449f491b96252.jpg", "/static/img/goodsImage/1154005/shortdescriptionImage/48926ebab0589285b14dfcc28981d272.jpg"],
		"headImage": ["/static/img/goodsImage/1154005/headImage/103376fb9bf6b7e28ea58f3e34244120.png", "/static/img/goodsImage/1154005/headImage/e46bc25e9f46e9c7414cb69c0a31cd02.jpg", "/static/img/goodsImage/1154005/headImage/6012a2c96665560b57d9efc005a38ec9.jpg", "/static/img/goodsImage/1154005/headImage/f1d3c022d16fdff92325a9137a39e19a.jpg", "/static/img/goodsImage/1154005/headImage/92a3b3df61740ab31050f63c58225923.jpg"],
		"type": ["深邃黑", "樱花粉", "本白"],
		"chara": "3色可选",
		"description": ["/static/img/goodsImage/1154005/description/801b728431ad01e17e7630baf920b148.jpg", "/static/img/goodsImage/1154005/description/679e17e238f5796b36e380aeaebfe169.jpg", "/static/img/goodsImage/1154005/description/67583a6c276ee93426f87a213c804210.jpg", "/static/img/goodsImage/1154005/description/48c717dc2bc85be094c4ac4f267bb698.jpg", "/static/img/goodsImage/1154005/description/ea902c8757615ea036257f7d0d069490.jpg", "/static/img/goodsImage/1154005/description/8a4dfa83be4eef4df8fbce0f708e521d.jpg", "/static/img/goodsImage/1154005/description/07910b21e6d22c021439a9f7c0c89750.jpg", "/static/img/goodsImage/1154005/description/a60f6a7cd06a63c296ba68574712c344.jpg", "/static/img/goodsImage/1154005/description/67249599d4e99662b4122d67e9f9c4dc.jpg", "/static/img/goodsImage/1154005/description/25df0214dd716b4b545bfc7370466864.jpg", "/static/img/goodsImage/1154005/description/308557bdc692ba9b1ec674193a5bb854.jpg", "/static/img/goodsImage/1154005/description/e2ed9102ea0a67eb806a553babfe7b75.jpg", "/static/img/goodsImage/1154005/description/adbcf9ba819648f770191b9a1ef240a6.jpg", "/static/img/goodsImage/1154005/description/92569ae401f7be22e30a4503418cf42d.jpg", "/static/img/goodsImage/1154005/description/42423067de8b112d3cb91db62793591d.jpg", "/static/img/goodsImage/1154005/description/0ab7036bcf0e30a522b0c58ad14b4730.jpg", "/static/img/goodsImage/1154005/description/2035aef0900c6b859f4f7f6abef0761e.jpg", "/static/img/goodsImage/1154005/description/cc7d71d31fc11c65f31fa89688cebf61.jpg", "/static/img/goodsImage/1154005/description/fff141031001155b9f106b7dca5ce8c2.jpg", "/static/img/goodsImage/1154005/description/5dea739e972cd4f5c8154e39b7d499f9.jpg", "/static/img/goodsImage/1154005/description/8fd4808197cf773546242af5f7b08d92.jpg", "/static/img/goodsImage/1154005/description/bd58c6cddbeaa5d447908caf7cf5a303.jpg", "/static/img/goodsImage/1154005/description/c569caa2838af7388b745994c9749adc.jpg", "/static/img/goodsImage/1154005/description/a803362b1f5472b0528dd399d656ae97.jpg", "/static/img/goodsImage/1154005/description/5ab8853c86da2c5de8d7ec2580ff572f.jpg", "/static/img/goodsImage/1154005/description/3243f6f99faf83782326cf49bb02f24b.jpg", "/static/img/goodsImage/1154005/description/adc01227f8dfd192bd1bbae92e3e0155.jpg", "/static/img/goodsImage/1154005/description/5d7ccf2489447972e89682a466a047bd.jpg", "/static/img/goodsImage/1154005/description/09d21771149e322197002f1924b88021.jpg", "/static/img/goodsImage/1154005/description/e9d03b7969d6964903cd954152786f46.jpg", "/static/img/goodsImage/1154005/description/93993fbe8c28fb41f374f0d8e9531ed7.jpg", "/static/img/goodsImage/1154005/description/32b14d2f4f8a5e1450ea30fd0a0f30fd.jpg", "/static/img/goodsImage/1154005/description/e0eaf438c447ba73056773162f200842.jpg", "/static/img/goodsImage/1154005/description/97981f3265322f33d714296238882666.jpg", "/static/img/goodsImage/1154005/description/2e1dc738f34722bff8c885d28f25a66e.jpg", "/static/img/goodsImage/1154005/description/3d86f8ff0f0b17b0cccbdfadb3ec7f2c.jpg", "/static/img/goodsImage/1154005/description/1661f81224d9be9ca8325d10d3cebf7b.jpg", "/static/img/goodsImage/1154005/description/c184917098d138dcff478504a20d1c20.jpg", "/static/img/goodsImage/1154005/description/54d6227ce968cd9f7480fee5b4a1a36a.jpg", "/static/img/goodsImage/1154005/description/dee504c1a7ee23d8e3eb00349f485b2f.jpg", "/static/img/goodsImage/1154005/description/a3893374ce15e5a6dfcc43757449f2ef.jpg", "/static/img/goodsImage/1154005/description/4db8d4d648836a35ec759fbfceedab30.jpg", "/static/img/goodsImage/1154005/description/cf99e95a3688d12f289afba72cef68f6.jpg", "/static/img/goodsImage/1154005/description/caa8b2fb8d86a42e2430a62cec4f8ed7.jpg", "/static/img/goodsImage/1154005/description/43adabd457eaba8151cca4a79c37bc86.jpg", "/static/img/goodsImage/1154005/description/9ab4c327139e576d44f9d50784ac8254.jpg"],
		"inventory": [453, 383, 858],
		"information": [{
			"attrName": "材质",
			"attrValue": "ABS树脂+PP树脂"
		}, {
			"attrName": "USB充电线",
			"attrValue": "线长1米"
		}, {
			"attrName": "有无底座",
			"attrValue": "有"
		}, {
			"attrName": "风速档位",
			"attrValue": "2档可调"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 835,
		"date": "1500373060554",
		"category": "居家",
		"subCategory": "生活电器"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1221001,
		"price": 499,
		"topName": "网易智造N520除螨吸尘器",
		"subName": "除螨吸尘 深层清洁",
		"shortDescription": ["强力拍打", "螺纹滚刷", "智能感光", "降噪技术", "一手提握", "旋风集尘"],
		"shortDescriptionImage": ["/static/img/goodsImage/1221001/shortdescriptionImage/f2d5004fed7a7b43666bf1c09b9a392f.png", "/static/img/goodsImage/1221001/shortdescriptionImage/6fe4c18a19978403fa81aab469c60e22.png", "/static/img/goodsImage/1221001/shortdescriptionImage/95de892675de55bd6a715b818afea9b4.png"],
		"headImage": ["/static/img/goodsImage/1221001/headImage/6c279b7830290cd4597439433d647381.png", "/static/img/goodsImage/1221001/headImage/dd5db91920e6a2996e0c9b887c47f3cf.jpg", "/static/img/goodsImage/1221001/headImage/44e3f9a43a38c6baa242aea4fc533749.jpg", "/static/img/goodsImage/1221001/headImage/a6533002acf4b283388162d8ffda3a85.jpg", "/static/img/goodsImage/1221001/headImage/869ee8972a43a468af4c34fa7b20b317.jpg"],
		"type": ["粉色"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1221001/description/64c37faf4e42414476aa58f455e01e14.jpg", "/static/img/goodsImage/1221001/description/020c10fa8005c59a1940cea3189bcb7e.jpg", "/static/img/goodsImage/1221001/description/b2b130e1fd5255aa810f55d2bbc66427.jpg", "/static/img/goodsImage/1221001/description/297e89c36a98dd32cfa6cc2e7e3eef54.jpg", "/static/img/goodsImage/1221001/description/f74b47f58f325610e587d7cf6cba9ed3.jpg", "/static/img/goodsImage/1221001/description/af6d436a782eec7e5f178126f159ee80.jpg", "/static/img/goodsImage/1221001/description/ed8a51508615aea7620d9e2da583afea.jpg", "/static/img/goodsImage/1221001/description/afb15ac7efd8b7c88de45a408f6d6f3f.jpg", "/static/img/goodsImage/1221001/description/bea93176f94a8cc3e9998809239306b3.jpg", "/static/img/goodsImage/1221001/description/20ca843b1a42afb8cbe69013d40bd1ff.jpg", "/static/img/goodsImage/1221001/description/cd6c48400aff06e047358a1ee7a9462b.jpg", "/static/img/goodsImage/1221001/description/950f57998e42c85bd2d9dc7aec2152a9.jpg", "/static/img/goodsImage/1221001/description/0e5cf07b3cc50290ff981fda6a44bb5f.jpg", "/static/img/goodsImage/1221001/description/6e5b4e85d8b4a63b6a47e6da9b565548.jpg", "/static/img/goodsImage/1221001/description/ed2b4e3fa4823b81c56cba113a5378de.jpg", "/static/img/goodsImage/1221001/description/0b685f140f919b7c35541080c62e29e8.jpg", "/static/img/goodsImage/1221001/description/cb7392941ba1d35e516a9599f9de631e.jpg", "/static/img/goodsImage/1221001/description/db2ff61b025b902bf4a50b744414b145.jpg", "/static/img/goodsImage/1221001/description/b1970088262270fd3b85f30f87a34f9d.jpg", "/static/img/goodsImage/1221001/description/def4b4697fae8af72b6851e75eac4bd3.jpg", "/static/img/goodsImage/1221001/description/24a6d5bfcd8032e4c6df060b3d718e83.jpg", "/static/img/goodsImage/1221001/description/ec21a8671b1fefa489436c86f1eee6e8.jpg", "/static/img/goodsImage/1221001/description/2ad1e3585290d25bf1f6d45da78e6ebc.jpg", "/static/img/goodsImage/1221001/description/fb20b389c8a0f48c25b5f44ec654216a.jpg", "/static/img/goodsImage/1221001/description/bb1d474577e587295874777c55a5efd9.jpg", "/static/img/goodsImage/1221001/description/cefe03220c23afb07349f5aaaeebaa0e.jpg", "/static/img/goodsImage/1221001/description/580cb2cc627453e1e17329a5c2bcc57e.jpg", "/static/img/goodsImage/1221001/description/1b0258c0a8015071af9830a3b184f83e.jpg", "/static/img/goodsImage/1221001/description/3914eab9c8af5dea12bbe0a0df353c72.jpg", "/static/img/goodsImage/1221001/description/599e97889250a6c0f22b033d7e001e1d.jpg", "/static/img/goodsImage/1221001/description/75499a4f416975b532f0fc83e20c2b39.jpg", "/static/img/goodsImage/1221001/description/1b8ebbc3db0a87d3cbcd5cdc584f2565.jpg", "/static/img/goodsImage/1221001/description/c7e209a65c97f29e0237d21a7b3e10e8.jpg", "/static/img/goodsImage/1221001/description/3de108a421a9553d4644d246a17987dd.jpg", "/static/img/goodsImage/1221001/description/de36f28408c5d7ae597c4ebb98827ea3.jpg", "/static/img/goodsImage/1221001/description/84968ac0c789acf227b274327e3daeda.jpg", "/static/img/goodsImage/1221001/description/0bf2a5db85f828fcdfa85fe6551e56a4.jpg", "/static/img/goodsImage/1221001/description/c0b258990795ee825374a02f077de59d.jpg", "/static/img/goodsImage/1221001/description/4c4ebb7b04644ca1a544dc0e57a0b62e.jpg", "/static/img/goodsImage/1221001/description/fcd8c4e9819e6d40f58dbd95bf446d19.jpg", "/static/img/goodsImage/1221001/description/9311e426e82cbc4a5c4f48ba65c92dbc.jpg", "/static/img/goodsImage/1221001/description/dccbb682fcb50e953fadd3c74a436bf3.jpg", "/static/img/goodsImage/1221001/description/4d49a80c3de9fc5745c96ac0fd86278a.jpg", "/static/img/goodsImage/1221001/description/7b28847f315230d4bc55787442bcb40e.jpg", "/static/img/goodsImage/1221001/description/47fd958eea7ca8e78fea98ea747f3670.jpg", "/static/img/goodsImage/1221001/description/7c4b6e409fc6c2bbd3b2d21266c94aff.jpg", "/static/img/goodsImage/1221001/description/963c972ca1233fa4483e697782fe968a.jpg", "/static/img/goodsImage/1221001/description/200b9f89ddf9ffe1bfa82e7e206ed3e2.jpg", "/static/img/goodsImage/1221001/description/1c58182860a4fbf38ab2fc8f92296526.jpg"],
		"inventory": [89],
		"information": [{
			"attrName": "产品重量",
			"attrValue": "2.5kg"
		}, {
			"attrName": "电源",
			"attrValue": "220V~50Hz"
		}, {
			"attrName": "工作音量",
			"attrValue": "＜76dB"
		}, {
			"attrName": "额定功率",
			"attrValue": "350W"
		}, {
			"attrName": "电源线长度",
			"attrValue": "5米"
		}, {
			"attrName": "集尘容量",
			"attrValue": "0.2L"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 717,
		"date": "1500340979457",
		"category": "居家",
		"subCategory": "生活电器"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1223001,
		"price": 69,
		"topName": "网易智造小旋风风扇",
		"subName": "凉快安静 便携易带 连用省电",
		"shortDescription": ["红点团队", "经典设计", "凉快安静", "迷你便携", "调节送风", "连用省电"],
		"shortDescriptionImage": ["/static/img/goodsImage/1223001/shortdescriptionImage/05c7225cdb0210920eb79df469f58112.png", "/static/img/goodsImage/1223001/shortdescriptionImage/3c873881f0cf65156dab0113da06c709.png", "/static/img/goodsImage/1223001/shortdescriptionImage/07bfd701e249e94f56b8f128d07c2b42.png"],
		"headImage": ["/static/img/goodsImage/1223001/headImage/0ea3ed6da7beecb9b1960b8d2175c33d.png", "/static/img/goodsImage/1223001/headImage/5ebcc9b5f938d2e8bf4e26f8ae010374.jpg", "/static/img/goodsImage/1223001/headImage/94a99a3aaec4813e02549763c47eb5d8.jpg", "/static/img/goodsImage/1223001/headImage/02b36fdc5403587a9603eb3f0d4a0f7f.jpg", "/static/img/goodsImage/1223001/headImage/22ffb507ed0545512b2547abc694cda4.jpg"],
		"type": ["磨砂白"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1223001/description/a8cdabe7d99524df81da4faf06e9d255.jpg", "/static/img/goodsImage/1223001/description/121d84b903df32acdfcb3e3b4bfe75a6.jpg", "/static/img/goodsImage/1223001/description/5c3eb14cb4e0cad764bf10153f12819d.jpg", "/static/img/goodsImage/1223001/description/d41bc44a003ae1c7187271320fb83b68.jpg", "/static/img/goodsImage/1223001/description/5db73aa5f5bfd7e24355a550fc2f525c.jpg", "/static/img/goodsImage/1223001/description/25935d20cd46f114c44f43890d2029e5.jpg", "/static/img/goodsImage/1223001/description/7e4bb2b4882e2499b3eb1a50216c7752.jpg", "/static/img/goodsImage/1223001/description/97a1600930b11f82739a14bfad39e4ae.jpg", "/static/img/goodsImage/1223001/description/f9b2c20cfe714a0ef007684c2454d7ef.jpg", "/static/img/goodsImage/1223001/description/e22dd614e703488735e6b7f8eb2c3657.jpg", "/static/img/goodsImage/1223001/description/3afb512a2ecade4fc22b09698d5e4487.jpg", "/static/img/goodsImage/1223001/description/be4f67a64d6088047ab7f8b75fa6c37b.jpg", "/static/img/goodsImage/1223001/description/0fac09044ab0e5639d5448dfcf039342.jpg", "/static/img/goodsImage/1223001/description/02f6e6fe6d84d08c14392db6a698a079.jpg", "/static/img/goodsImage/1223001/description/0095564727768589668bb88e30df71c3.jpg", "/static/img/goodsImage/1223001/description/b2e31fde08d8a678c24e078c6559358c.jpg", "/static/img/goodsImage/1223001/description/59fa4ed222d243c08c400900ea0c0c34.jpg", "/static/img/goodsImage/1223001/description/15b700b93df6093823e801061eabf95d.jpg", "/static/img/goodsImage/1223001/description/b60bcf2e673707cd7a4c018744ee9ae1.jpg", "/static/img/goodsImage/1223001/description/ffd3b24dc6a78509cd2a1e4cf3cf2099.jpg", "/static/img/goodsImage/1223001/description/cdff55f00da4b06bdb18001b47c53a13.jpg", "/static/img/goodsImage/1223001/description/2b5d757f7149aa4585115eac87b7db89.jpg", "/static/img/goodsImage/1223001/description/eb975ce046c9bab8777b38502afb4e99.jpg", "/static/img/goodsImage/1223001/description/8db85c72514bc76e96f6126c991dcc98.jpg", "/static/img/goodsImage/1223001/description/4c090349e06543ef64e53c4a9f94b8be.jpg", "/static/img/goodsImage/1223001/description/c895c93d1d4e3f600dcf26cf9f167507.jpg", "/static/img/goodsImage/1223001/description/79be4e19497e7d6a302d87f7af59e413.jpg", "/static/img/goodsImage/1223001/description/71d1ccfd732750e8ea8429783e84ff03.jpg", "/static/img/goodsImage/1223001/description/7892babfa000a4a15882cc5ab5d2e685.jpg", "/static/img/goodsImage/1223001/description/9aa6344e79168600138d13ee94bcd61a.jpg", "/static/img/goodsImage/1223001/description/4e9dd862358d57f68c0e65f7534e0bec.jpg", "/static/img/goodsImage/1223001/description/52c5bb29126b228c3e4efd0a20b97b28.jpg", "/static/img/goodsImage/1223001/description/7a8af46072593acc9b4ccc19208ae8c5.jpg"],
		"inventory": [748],
		"information": [{
			"attrName": "产品尺寸",
			"attrValue": "109*52*125mm"
		}, {
			"attrName": "产品净重",
			"attrValue": "160g"
		}, {
			"attrName": "外壳材质",
			"attrValue": "ABS环保材质"
		}, {
			"attrName": "额定功率",
			"attrValue": "2.5W"
		}, {
			"attrName": "额定电压",
			"attrValue": "DC5V(micro USB)"
		}, {
			"attrName": "内置电池容量",
			"attrValue": "2200mAh"
		}, {
			"attrName": "充电电压/电流",
			"attrValue": "DC5V/1A"
		}, {
			"attrName": "风速",
			"attrValue": "1档、2档、3档"
		}, {
			"attrName": "马达最高转速",
			"attrValue": "3400转"
		}, {
			"attrName": "USB充电线长度",
			"attrValue": "0.8m"
		}],
		"label": [{
			"title": "三石福利价",
			"type": "2"
		}],
		"manufacture": "",
		"sale": 856,
		"date": "1500340982777",
		"category": "居家",
		"subCategory": "生活电器"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1135050,
		"price": 179,
		"topName": "黑凤梨 多功能封闭式环保除菌猫砂盆",
		"subName": "银离子吸附脏东西，多功能",
		"shortDescription": ["PP树脂", "耐用省心", "封闭设计", "防止外溅", "抽屉设计", "方便铲屎"],
		"shortDescriptionImage": ["/static/img/goodsImage/1135050/shortdescriptionImage/f31fcf01b27718e5891333d2815f4805.jpg", "/static/img/goodsImage/1135050/shortdescriptionImage/6ac501124a6208f29542de7e60bbc2b6.jpg", "/static/img/goodsImage/1135050/shortdescriptionImage/fb6e31c75f285d63a44672dda4fe23ab.jpg"],
		"headImage": ["/static/img/goodsImage/1135050/headImage/366f3f3f0e8971c8cf871e2b55b74ff2.png", "/static/img/goodsImage/1135050/headImage/2a7f492c870c603bbb8619d6ff40c22b.jpg", "/static/img/goodsImage/1135050/headImage/c43ff066b17207c21bb99e261d23a40d.jpg", "/static/img/goodsImage/1135050/headImage/e3d397a574d0867906a69278741a1562.jpg", "/static/img/goodsImage/1135050/headImage/64c1dd9a8a3cb26f9105ac68c8700171.jpg"],
		"type": ["雾灰", "豆沙红"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1135050/description/3038f51062770ffaee30b78f94a2b657.jpg", "/static/img/goodsImage/1135050/description/d4612e8bad500ef7a8fc8efc62f8eb40.jpg", "/static/img/goodsImage/1135050/description/0bedf983a6342fa93dd71fd54d333a1e.jpg", "/static/img/goodsImage/1135050/description/e50b2960965aea52837220be0a67b485.jpg", "/static/img/goodsImage/1135050/description/5fba724a77c33b9b39759b6aa4d5e881.jpg", "/static/img/goodsImage/1135050/description/404ac5e06b60f92468323d439ac00852.jpg", "/static/img/goodsImage/1135050/description/11571ab96fbe116592ac36a62e48d696.jpg", "/static/img/goodsImage/1135050/description/81f97d5a146b2fb1fe96c4af566abfa5.jpg", "/static/img/goodsImage/1135050/description/9e84a6f175291a91a19aab47589c7c72.jpg", "/static/img/goodsImage/1135050/description/8f9a1794ffca4b7bb20d705664c8ab62.jpg", "/static/img/goodsImage/1135050/description/9b0bf7bc53c158cc565d9c773ae7fd6e.jpg", "/static/img/goodsImage/1135050/description/e20f1d9e31ebc27da72ce28020555e3b.jpg", "/static/img/goodsImage/1135050/description/ed7074fd5464c48fa582ca0c943f06b7.jpg", "/static/img/goodsImage/1135050/description/a70113629c23a64925f41f6eaa9c49e5.jpg", "/static/img/goodsImage/1135050/description/b6fa461f0817c04c9bfe7c4deffa8a36.jpg", "/static/img/goodsImage/1135050/description/7d758399e9da5bfdd833bcc7b7284575.jpg", "/static/img/goodsImage/1135050/description/f784c8c7ee377264ab69ca27dc667d25.jpg", "/static/img/goodsImage/1135050/description/5cec64ba5655f9ba80fe11cccf649fd1.jpg", "/static/img/goodsImage/1135050/description/7c1c0651edaf5da5aa651e2ee0a73bc4.jpg", "/static/img/goodsImage/1135050/description/5b76f7b140d06fb9d7438a76d26233ca.jpg", "/static/img/goodsImage/1135050/description/6e855871a7ea7f0966294f95ec63d8cf.jpg", "/static/img/goodsImage/1135050/description/b58bd38908aed42f6122e27edd5d26af.jpg", "/static/img/goodsImage/1135050/description/2d6e2639fcc07553ad6526b35843addc.jpg", "/static/img/goodsImage/1135050/description/8d2fe43bbf6d583898bfdede1ca8a52e.jpg", "/static/img/goodsImage/1135050/description/b6f83107b9181b0878c0b0f321b262ce.jpg", "/static/img/goodsImage/1135050/description/43c0d85cae62d2a5988c512207e4b014.jpg", "/static/img/goodsImage/1135050/description/cd4c99fa3e9fda3fcb442ea492677945.jpg", "/static/img/goodsImage/1135050/description/d63fb905939177cc82867c36fc0e675d.jpg", "/static/img/goodsImage/1135050/description/ffc5529e67965e7857acafaf1b49db96.jpg", "/static/img/goodsImage/1135050/description/6c786133098fafbfbaab3087ba4ac8c9.jpg", "/static/img/goodsImage/1135050/description/5bb6890a74cbaf86c3b1a126d895e8aa.jpg", "/static/img/goodsImage/1135050/description/c4c5a808ec381a040f19e3c600bf0487.jpg", "/static/img/goodsImage/1135050/description/b7f579d2602a6199a07e736f979fc557.jpg", "/static/img/goodsImage/1135050/description/3a24254f26e49d9a477449964c248eab.jpg", "/static/img/goodsImage/1135050/description/63bb0387f308812d33e2f6e58572f59a.jpg", "/static/img/goodsImage/1135050/description/9c3ca66b427ac913c2e3861c46d5d409.jpg", "/static/img/goodsImage/1135050/description/60de0ef16d1489bc3f838412054c4e8c.jpg", "/static/img/goodsImage/1135050/description/b87d0c3dc0e7a2fbc03461e0e0f4de4f.jpg", "/static/img/goodsImage/1135050/description/3216c61443d3567f7dfd579a5f515988.jpg", "/static/img/goodsImage/1135050/description/0cd8ffd74d19196a2f43b566fbbbe9a1.jpg", "/static/img/goodsImage/1135050/description/674564a151c93c35e15c856f1ffdd5f5.jpg", "/static/img/goodsImage/1135050/description/c67bbfdf9fff94fca73b9784919161f5.jpg", "/static/img/goodsImage/1135050/description/9fda02a1171045c7378019437cf53d44.jpg", "/static/img/goodsImage/1135050/description/643012f41ea84cde3bfc71079b952340.jpg", "/static/img/goodsImage/1135050/description/dbb4e4fc661e66463604a026c5840db5.jpg", "/static/img/goodsImage/1135050/description/28af983c3b4a27917307e007f68ecd64.jpg", "/static/img/goodsImage/1135050/description/c0a91d38b56657ca860b6eb7e2a7b1b3.jpg", "/static/img/goodsImage/1135050/description/112c7e2c15abc152f669d5984c4e3482.jpg", "/static/img/goodsImage/1135050/description/6a4de08f3d124191a044edb9a78ef6ea.jpg", "/static/img/goodsImage/1135050/description/fdeff11789d826255e462e03caf695d2.jpg", "/static/img/goodsImage/1135050/description/07f24735d764fb510515e047f8d42127.jpg", "/static/img/goodsImage/1135050/description/0c7b842f917c2c6fa22046f09e3f0ca4.jpg", "/static/img/goodsImage/1135050/description/9507d8bc9ac5e989ffdf142257924b53.jpg", "/static/img/goodsImage/1135050/description/0dbc5772d82ac216c8bab206e1dc57e6.jpg", "/static/img/goodsImage/1135050/description/a40b22e6663fad470916a9d8918ab077.jpg", "/static/img/goodsImage/1135050/description/a3c3a07f0ca92f49efa3e2034c5512dc.jpg", "/static/img/goodsImage/1135050/description/55e13494e0dcd4e2210c5674a2d6a06e.jpg", "/static/img/goodsImage/1135050/description/5d29d38646e14c16f81e8cfbfe9d4eb0.jpg", "/static/img/goodsImage/1135050/description/038920cc4ea997d694ad9886188fb54c.jpg", "/static/img/goodsImage/1135050/description/3d5fc54a1e16e60b1120d4f7cdfabae4.jpg", "/static/img/goodsImage/1135050/description/8fe6c3bed381d066d087e92e57c7fc10.jpg", "/static/img/goodsImage/1135050/description/dc3430ce82f528cb58fb8401aea27563.jpg", "/static/img/goodsImage/1135050/description/e48f1634cde251645fcba657dfc49efe.jpg", "/static/img/goodsImage/1135050/description/b10cd6bc0ba609479126daa96f3827e2.jpg", "/static/img/goodsImage/1135050/description/ec61855a8276ff91d615ab162a789af3.jpg", "/static/img/goodsImage/1135050/description/7da8c339a0e775074d554c2f0194ea86.jpg", "/static/img/goodsImage/1135050/description/05a4a29ca3c07a0a942d725fdf15b130.jpg", "/static/img/goodsImage/1135050/description/729cea89be0e78933179e06dc1262acd.jpg"],
		"inventory": [484, 217],
		"information": [{
			"attrName": "产品尺寸",
			"attrValue": "52*42*40cm"
		}, {
			"attrName": "产品净重",
			"attrValue": "2.105kg"
		}, {
			"attrName": "产品毛重",
			"attrValue": "3.215kg"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB 9688-1988"
		}, {
			"attrName": "配送范围",
			"attrValue": "请咨询客服"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 572,
		"date": "1500340987349",
		"category": "居家",
		"subCategory": "宠物"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1064003,
		"price": 89,
		"topName": "六边形南瓜式宠物窝",
		"subName": "给萌宠柔软包裹的归家感",
		"shortDescription": ["麂皮绒面", "糯软悬垂", "南瓜设计", "安全领域", "PP棉", "回弹柔软"],
		"shortDescriptionImage": ["/static/img/goodsImage/1064003/shortdescriptionImage/787fa5a8e54aab5f40196ddf1e396077.jpg", "/static/img/goodsImage/1064003/shortdescriptionImage/09a4b1a49956cc96bfb95fcd45ffa195.jpg", "/static/img/goodsImage/1064003/shortdescriptionImage/fe370e67e0874374f14a211d0e02b16a.jpg"],
		"headImage": ["/static/img/goodsImage/1064003/headImage/58ed94b63b39339e7814f1339013793c.png", "/static/img/goodsImage/1064003/headImage/b2de2ebcee090213861612909374f9f8.jpg", "/static/img/goodsImage/1064003/headImage/3b905dd63fc81b0359a2716fe2a48b65.jpg", "/static/img/goodsImage/1064003/headImage/dbb11f9a0277b957ee7fa1c82f77d0bd.jpg", "/static/img/goodsImage/1064003/headImage/9e2f6edb8edfedb03a2e3e6cdfe37b51.jpg"],
		"type": ["45R"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1064003/description/44f4fe5b43365884131b07c25b3c54ca.jpg", "/static/img/goodsImage/1064003/description/beabfe6fd0717daa3544ac7c2d82b430.jpg", "/static/img/goodsImage/1064003/description/25467804bf2eed0d07f171c10f798d2e.jpg", "/static/img/goodsImage/1064003/description/7fced8c058df228bed15bc8822fa871c.jpg", "/static/img/goodsImage/1064003/description/a3eea3bd19f75f01a7ed424be3aa9d42.jpg", "/static/img/goodsImage/1064003/description/e30076799805a678af405dce6ccf6d62.jpg", "/static/img/goodsImage/1064003/description/ac4cdbb579512a23287b4a43639b5e34.jpg", "/static/img/goodsImage/1064003/description/2cf8b27e7c89f0a46cbd330bb81ab1a5.jpg", "/static/img/goodsImage/1064003/description/3021babd417d3b3791db8b9684c9a07e.jpg", "/static/img/goodsImage/1064003/description/a72b172bf0e8ad6d0d6735750e1d375c.jpg"],
		"inventory": [115],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "GB 18401-2010 B类"
		}, {
			"attrName": "尺寸",
			"attrValue": "29*19cm"
		}, {
			"attrName": "颜色",
			"attrValue": "藏青色"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "NITORI制造商",
		"sale": 551,
		"date": "1500340991104",
		"category": "居家",
		"subCategory": "宠物"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1064002,
		"price": 69,
		"topName": "黑凤梨 秋冬加厚条纹宠物窝",
		"subName": "时尚牛仔，加厚温暖",
		"shortDescription": ["抓绒面料", "柔软保温", "牛仔帆布", "不易起球", "PP填充", "回弹柔软"],
		"shortDescriptionImage": ["/static/img/goodsImage/1064002/shortdescriptionImage/f4d7bef300db406db289df5dbff7de73.jpg", "/static/img/goodsImage/1064002/shortdescriptionImage/fcee0b6400c809cdbba0878e2c8f7bc3.jpg", "/static/img/goodsImage/1064002/shortdescriptionImage/b972c0fa2585ec5df3e0568dfa87d7b9.jpg"],
		"headImage": ["/static/img/goodsImage/1064002/headImage/48dbfe207b2203ef45055dcc9cedbe60.png", "/static/img/goodsImage/1064002/headImage/874a3f226d63546ca28f774cd9242251.jpg", "/static/img/goodsImage/1064002/headImage/5e728b405af9d32114162800ffa67d8b.jpg", "/static/img/goodsImage/1064002/headImage/eb83d490f564fd34b18b65583d0658d1.jpg", "/static/img/goodsImage/1064002/headImage/af4347f2c2333dfbf654d6b5e549f9e8.jpg"],
		"type": ["40cm", "60cm"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1064002/description/af55e5cf107279aff19f980782cc123e.jpg", "/static/img/goodsImage/1064002/description/c3abf7b0819211502f3c396b1a8c8e3e.jpg", "/static/img/goodsImage/1064002/description/40318cdd76bd3d0f001be9ea4f54895e.jpg", "/static/img/goodsImage/1064002/description/1c3e7460d40f3495446c854e4e60e65e.jpg", "/static/img/goodsImage/1064002/description/89a41c2eb741d4851989ea22115da469.jpg", "/static/img/goodsImage/1064002/description/6bb111af5959b51886c6ddecf62087ea.jpg", "/static/img/goodsImage/1064002/description/7576e8c85e36caeb75ede62cdb4c72cc.jpg", "/static/img/goodsImage/1064002/description/defc287312e29cf3bed1671d37ff76fe.jpg", "/static/img/goodsImage/1064002/description/2c007f61c29cd69d12dfd45d2f7868cd.jpg", "/static/img/goodsImage/1064002/description/212d3020bac13731a2e7ed13d9c2d24d.jpg", "/static/img/goodsImage/1064002/description/9c17307d5d0f42ab37f0379d2b0f5799.jpg", "/static/img/goodsImage/1064002/description/149bdd95c6c840de50f044c6a52bfa60.jpg", "/static/img/goodsImage/1064002/description/c94fd00369a0042e24d74ea531a6b6da.jpg", "/static/img/goodsImage/1064002/description/13fc42f0079f27633e372714bf2661e5.jpg", "/static/img/goodsImage/1064002/description/5c21d5cee49bd126b538a43cf64d2d0a.jpg", "/static/img/goodsImage/1064002/description/1a9ab12fa52fbf213bb60b55bdc2b602.jpg", "/static/img/goodsImage/1064002/description/340dc8efce6703ab623150444a295e55.jpg", "/static/img/goodsImage/1064002/description/8bbea99a6d2c6feece9ce18f215d278b.jpg", "/static/img/goodsImage/1064002/description/5dfcea1ac4d5e88f733da54460b0dd00.jpg", "/static/img/goodsImage/1064002/description/cc81118caaba9566eddd0133da590f92.jpg", "/static/img/goodsImage/1064002/description/10120dbed62dd0286e180f8af8c0364e.jpg", "/static/img/goodsImage/1064002/description/48db29084c7bcda0aa192bf3ebd3f6d1.jpg", "/static/img/goodsImage/1064002/description/0307d02bb2c4064617c0299e84d62f51.jpg", "/static/img/goodsImage/1064002/description/2a5067219b8bf9bb219f6f2468d101ed.jpg", "/static/img/goodsImage/1064002/description/8a57e62802b4cd5ae648e9e5f29ef548.jpg", "/static/img/goodsImage/1064002/description/7c4a7746484d0cc1b7cbccf0ca3a6e25.jpg", "/static/img/goodsImage/1064002/description/d7cfc2015eaff7614ae7391f8c0ab75a.jpg", "/static/img/goodsImage/1064002/description/d4970a2819b1f1d92393f8e176b9b3ab.jpg", "/static/img/goodsImage/1064002/description/149d0c58555018d6112a1539a2fe3d5b.jpg", "/static/img/goodsImage/1064002/description/86314e3d012e89a0b91369c18162dd4d.jpg", "/static/img/goodsImage/1064002/description/f01fd12b14d6ca4688446893942e63f3.jpg", "/static/img/goodsImage/1064002/description/eb0260f7a03a8a99454c4da1ffebef08.jpg", "/static/img/goodsImage/1064002/description/5dac9f4ac17044774a5b882f62580428.jpg", "/static/img/goodsImage/1064002/description/c88c0b215ca7a0398c71f28104f5e4a9.jpg", "/static/img/goodsImage/1064002/description/c996022de2b90af8ecbe0d9c460b8c6f.jpg", "/static/img/goodsImage/1064002/description/3dee2fc201d55a0962fe9bbd7680ecff.jpg", "/static/img/goodsImage/1064002/description/afe476025e22b5d5488c4a4d124fe73c.jpg", "/static/img/goodsImage/1064002/description/16f6773678ab86716a7ae463e93a7f48.jpg", "/static/img/goodsImage/1064002/description/78f088ab514f3509a839b2804e4702de.jpg", "/static/img/goodsImage/1064002/description/913d59fa34da530062cc3f1bb506e6f4.jpg", "/static/img/goodsImage/1064002/description/1ab28f6e09afb4569837371b5ceca32b.jpg", "/static/img/goodsImage/1064002/description/cc5dfc5d57ff1902116598fff0135c65.jpg", "/static/img/goodsImage/1064002/description/5ce8f5925ba0bdc8ba407f8f084341e8.jpg", "/static/img/goodsImage/1064002/description/a6aa9f339e039462d1641f55218dac11.jpg", "/static/img/goodsImage/1064002/description/28404012e24709db73c07334d0d801e2.jpg", "/static/img/goodsImage/1064002/description/4a078919e5132aebeeb899d809cd44c0.jpg", "/static/img/goodsImage/1064002/description/5e9e789ef53afd60332c9cb589dd4e4c.jpg", "/static/img/goodsImage/1064002/description/22d9041d25660d75f27e1f8bb6b590d9.jpg", "/static/img/goodsImage/1064002/description/5c32fae4a3af427cd180f082cd82fdfb.jpg", "/static/img/goodsImage/1064002/description/e11f7103ffd4775386af00887f805c3c.jpg", "/static/img/goodsImage/1064002/description/d3a0c59f0fd70570fbb7b75266950c57.jpg", "/static/img/goodsImage/1064002/description/0fcc8d3c7bb6768e19e860e7cb8d5628.jpg"],
		"inventory": [950, 638],
		"information": [{
			"attrName": "产品标准",
			"attrValue": "FZ/T 62011.3-2008"
		}, {
			"attrName": "安全类别",
			"attrValue": "GB 18401-2010 B类"
		}, {
			"attrName": "填充物重量",
			"attrValue": "110g"
		}, {
			"attrName": "颜色",
			"attrValue": "蓝白"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "NITORI制造商",
		"sale": 723,
		"date": "1500340996150",
		"category": "居家",
		"subCategory": "宠物"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1025005,
		"price": 268,
		"topName": "100年传世珐琅锅",
		"subName": "仅售供应商建议价的1/10",
		"shortDescription": ["受热均匀", "释放美味", "锁水循环", "原汁原味", "小火烹饪", "节约能源"],
		"shortDescriptionImage": ["/static/img/goodsImage/1025005/shortdescriptionImage/16ce9022604a3b58c721da127e82c095.jpg", "/static/img/goodsImage/1025005/shortdescriptionImage/679f4af2be381554a5a5597e22e254ac.jpg", "/static/img/goodsImage/1025005/shortdescriptionImage/0dd0a7d926f88b8449909ef8036add8e.jpg"],
		"headImage": ["/static/img/goodsImage/1025005/headImage/3a63ae97be40acc2c96f1dff65102002.png", "/static/img/goodsImage/1025005/headImage/f48a9986645e278f43dd1678d176706d.jpg", "/static/img/goodsImage/1025005/headImage/fcaafc2f38494d4a57b5198e28b31e6a.jpg", "/static/img/goodsImage/1025005/headImage/7b122b4fd015b17f9ebe24aeac626ec7.jpg", "/static/img/goodsImage/1025005/headImage/a1215827b24ea3c1eca6259b70cb2a3d.jpg"],
		"type": ["渐变灰（新）", "磨砂黑（新）", "胭脂红", "森林绿", "琉璃蓝"],
		"chara": "5色可选",
		"description": ["/static/img/goodsImage/1025005/description/7ee570e847211fc6b5b53be38ddc1481.jpg", "/static/img/goodsImage/1025005/description/49fd77863603b0da1ddb624410664542.jpg", "/static/img/goodsImage/1025005/description/e9343be01f24d64af08f3330fce6a7a8.jpg", "/static/img/goodsImage/1025005/description/06e6d2629ef5176db00bf5fad7ebe31a.jpg", "/static/img/goodsImage/1025005/description/3c3e0f8b1ef96a028a8af7eca435cd81.jpg", "/static/img/goodsImage/1025005/description/867238e3d66b949775f6d117768cfae1.jpg", "/static/img/goodsImage/1025005/description/276ff46643d2c9b0b125082b2e1c07c3.jpg", "/static/img/goodsImage/1025005/description/55f8f7995fcfee4b8c511d32b6eba2be.jpg", "/static/img/goodsImage/1025005/description/c3d489906aa1303a3db79ca0bc8cd341.jpg", "/static/img/goodsImage/1025005/description/5dcd2afd1290e5c9b4fb24a3350f68f7.jpg", "/static/img/goodsImage/1025005/description/550062e9df36f3f6ded9864f3c749442.jpg", "/static/img/goodsImage/1025005/description/da4e9de3a5728eebe3cb11a965720d95.jpg", "/static/img/goodsImage/1025005/description/edf83586a8629bc97676e73400f8a39d.jpg", "/static/img/goodsImage/1025005/description/17fedd134f270cb7a4a0613f4791f1a6.jpg", "/static/img/goodsImage/1025005/description/64e110a66e89963808372abd49b6be83.jpg", "/static/img/goodsImage/1025005/description/6df08c5cf95152a77e4a3c9731a87605.jpg", "/static/img/goodsImage/1025005/description/f0517d86490f3456fd9e0147f0fa3a2c.jpg", "/static/img/goodsImage/1025005/description/fdd5208d474513150ee2a63779d54a03.jpg", "/static/img/goodsImage/1025005/description/8c96784815527f00c7b61f32f697d6b6.jpg", "/static/img/goodsImage/1025005/description/c5759e30c69e7a479b457c912eea1363.jpg", "/static/img/goodsImage/1025005/description/627fa461019fbc0e4e3368ec5c4977d2.jpg", "/static/img/goodsImage/1025005/description/ab8a2cb6a8d1cf79d98c697e69abf42c.jpg", "/static/img/goodsImage/1025005/description/6603342906ae6ed5b2bd90a92d47f6ed.jpg", "/static/img/goodsImage/1025005/description/1ae5abdce5ab32eaee61e3e01757d467.jpg", "/static/img/goodsImage/1025005/description/6182575a6493529d152ac2a1bc6365e7.jpg", "/static/img/goodsImage/1025005/description/8b8c0d9a7ed8d3c56590194c4d036c08.jpg", "/static/img/goodsImage/1025005/description/462057f3b11add07fa22c9692a0df21e.jpg", "/static/img/goodsImage/1025005/description/5e9bba8263753fb58fd7b59a25bb0c90.jpg", "/static/img/goodsImage/1025005/description/912883a8b418c7d6a62fcd345ec25ae0.jpg", "/static/img/goodsImage/1025005/description/b5fc7fe118c978b70fa1b9e83d85da9f.jpg", "/static/img/goodsImage/1025005/description/78b7b390e68cec694a3b3903955c4eec.jpg", "/static/img/goodsImage/1025005/description/e6a6fc7e3497ac00dcb450b5d4090ce5.jpg", "/static/img/goodsImage/1025005/description/24b989943ed99ea7aac3112daf0a5409.jpg", "/static/img/goodsImage/1025005/description/64f582635bae81595ca31d4d0e4b3980.jpg", "/static/img/goodsImage/1025005/description/0e7c1df891eb3f8fb7b045684ea62087.jpg", "/static/img/goodsImage/1025005/description/14d1f20979b0180a95be0dca4251a354.jpg", "/static/img/goodsImage/1025005/description/9191e150635c1a591da747d41a5bdc13.jpg", "/static/img/goodsImage/1025005/description/0d5db6b316f2e9787b04ef256fa2ff7a.jpg", "/static/img/goodsImage/1025005/description/7558480f025e3d39a6f8489807aed816.jpg", "/static/img/goodsImage/1025005/description/26f3f70f502eea66714ba4f58d79bcf2.jpg", "/static/img/goodsImage/1025005/description/6f18e0ced23ff0fc2fd76f7fb72a32a7.jpg", "/static/img/goodsImage/1025005/description/77e66618ceca7e6285f1b59266d9fb23.jpg", "/static/img/goodsImage/1025005/description/2e9857360d0600a68d060cbac7143989.jpg", "/static/img/goodsImage/1025005/description/9ab04afdf025e6c82d637678e0cec019.jpg", "/static/img/goodsImage/1025005/description/9b9de5dd4d5f2c363b1a6ef4b17c2365.jpg", "/static/img/goodsImage/1025005/description/36a42ec0ae590f657982db82947bd327.jpg", "/static/img/goodsImage/1025005/description/4a87e40cad0eb97758c0d45e98a04e7c.jpg", "/static/img/goodsImage/1025005/description/0cb76559131364fab2fa95e2da09f2b4.jpg", "/static/img/goodsImage/1025005/description/da05eb8ef1cef99d4a0b3bbdfa2b10e9.jpg", "/static/img/goodsImage/1025005/description/cf46396f6d00be6ad783eb647e14ee4e.jpg", "/static/img/goodsImage/1025005/description/29be9b3af010bf65bdf55f4b65850831.jpg", "/static/img/goodsImage/1025005/description/265c78a6991a3b6a60aa39daaf8e1da5.jpg", "/static/img/goodsImage/1025005/description/d1461f840fa08add1993aba6bec714b3.jpg", "/static/img/goodsImage/1025005/description/42ba25b6b542413a59c492f34a8c872e.jpg", "/static/img/goodsImage/1025005/description/6337a48b150c1b3d2d7af1c30abf7f26.jpg", "/static/img/goodsImage/1025005/description/179941324d40b72eaddec56368b41304.jpg", "/static/img/goodsImage/1025005/description/be46e5c3907f59f64d21891d9031c079.jpg", "/static/img/goodsImage/1025005/description/7b70e529b468ccf2cc6842d192463fd5.jpg", "/static/img/goodsImage/1025005/description/45d374186d55bfa5c953db164f2cc21a.jpg", "/static/img/goodsImage/1025005/description/627235f4ad4e15ce9e286eb41b9dea43.jpg", "/static/img/goodsImage/1025005/description/8fca5da94afbdbf21855320a535efe73.jpg", "/static/img/goodsImage/1025005/description/da11e4cd1ddf4801222ea4abd74d5829.jpg", "/static/img/goodsImage/1025005/description/249d413ae910d635f6f1304f7b4949ee.jpg", "/static/img/goodsImage/1025005/description/dab0fbe56e4af6d616541bc868bce266.jpg", "/static/img/goodsImage/1025005/description/d751ab416cf20afe75feb88810906ce3.jpg", "/static/img/goodsImage/1025005/description/98c8f9182d1c1258b6bfc17600d1fe63.jpg", "/static/img/goodsImage/1025005/description/0159c4ca74dbd4c1a22530b1801aa8f1.jpg", "/static/img/goodsImage/1025005/description/ad65bf3a67d7ae2c0aee2ccc677e0155.jpg", "/static/img/goodsImage/1025005/description/bf9810637afaf507d55907591923d8a7.jpg", "/static/img/goodsImage/1025005/description/1d61dd00a2a271a09da103101edaa74d.jpg", "/static/img/goodsImage/1025005/description/1d1090ca2e07af596c131b17cfc86971.jpg", "/static/img/goodsImage/1025005/description/8967127df501289dd8cb641e79ee0389.jpg", "/static/img/goodsImage/1025005/description/37b50bbe8e146af854a9ef36244e03d8.jpg", "/static/img/goodsImage/1025005/description/ef5fa2908933a325ceaf1dee76c8cf5f.jpg", "/static/img/goodsImage/1025005/description/856b56090b6f5729eabd72a6bfda68d4.jpg", "/static/img/goodsImage/1025005/description/eaabd5b82ed712742f22a92acdc391f8.jpg", "/static/img/goodsImage/1025005/description/895b3b81563d130126eafc785317d9dd.jpg", "/static/img/goodsImage/1025005/description/0aada267e4abc7b6ec1973e77c724ddb.jpg", "/static/img/goodsImage/1025005/description/df0f0c7cd7285efb654d032f9b7569ab.jpg", "/static/img/goodsImage/1025005/description/d32f89c9fac8c07b12b4eed56c0525fc.jpg", "/static/img/goodsImage/1025005/description/488d0bbda65675c8f2e4f6f2039fec88.jpg", "/static/img/goodsImage/1025005/description/18c7cd7c3df6ba2c98386ebbd36840b1.jpg", "/static/img/goodsImage/1025005/description/c2a54170df2a871f55db69ffd4fc41da.jpg"],
		"inventory": [763, 923, 904, 524, 845],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "直径：22cm；深度：9.6cm"
		}, {
			"attrName": "重量",
			"attrValue": "3.85kg"
		}, {
			"attrName": "容量",
			"attrValue": "2.5L，约等于 5瓶 500ml矿泉水的容量；适合2-3人使用"
		}],
		"label": [{
			"title": "爆品",
			"type": "1"
		}],
		"manufacture": "",
		"sale": 681,
		"date": "1500340999986",
		"category": "餐厨",
		"subCategory": "锅具"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1146000,
		"price": 189,
		"topName": "德国制造 镁离子净水壶（含滤芯）",
		"subName": "含滤芯，快捷补充镁离子",
		"shortDescription": ["德国进口", "品质保障", "四重过滤", "高效净化", "口感甘甜", "全家共享"],
		"shortDescriptionImage": ["/static/img/goodsImage/1146000/shortdescriptionImage/27e7ccf5c093d31d38bdc7271b10d1c7.jpg", "/static/img/goodsImage/1146000/shortdescriptionImage/329f68067e1be862d1fb6b3ab2590f9a.jpg", "/static/img/goodsImage/1146000/shortdescriptionImage/2ef2cf85144a38a69f710e2965400159.jpg"],
		"headImage": ["/static/img/goodsImage/1146000/headImage/69c0957791d83350b283ebf79442cf5c.png", "/static/img/goodsImage/1146000/headImage/6f279e637ff9073163870512fc058170.jpg", "/static/img/goodsImage/1146000/headImage/3cfad6db71b4e9a9d006337fdf8b7d05.jpg", "/static/img/goodsImage/1146000/headImage/7c62767ab0b239dde8981b51fc0bb36b.jpg", "/static/img/goodsImage/1146000/headImage/7c4c1d7e566c3fdec6ff0493e2cb6427.jpg"],
		"type": ["白色3.3L（1壶1芯）", "白色3.3L（1壶5芯）", "蓝色3.3L（1壶1芯）", "蓝色3.3L（1壶5芯）"],
		"chara": "4色可选",
		"description": ["/static/img/goodsImage/1146000/description/09d2093407c629d97a58cba7449014c6.jpg", "/static/img/goodsImage/1146000/description/c420b007f031cd8c9c5c4cc990c12da7.jpg", "/static/img/goodsImage/1146000/description/c5ea96e21e6ecde8f16472ecf199e29a.jpg", "/static/img/goodsImage/1146000/description/035707e9fcb4d1d7357762a1cdd38307.jpg", "/static/img/goodsImage/1146000/description/27b377e6b572059581b1583fae19dcdf.jpg", "/static/img/goodsImage/1146000/description/9fd7f576875a06ecfe7392b7648c9dae.jpg", "/static/img/goodsImage/1146000/description/9cbea4a38a931065f4117c559f41e1ff.jpg", "/static/img/goodsImage/1146000/description/fdfb54720f8d5a138191f17171bc87b1.jpg", "/static/img/goodsImage/1146000/description/818f00b1c1dc385de52d0f7ae0c12022.jpg", "/static/img/goodsImage/1146000/description/908c5ca29779b7c40fa5df11814a735b.jpg", "/static/img/goodsImage/1146000/description/e7a99060930d70d9f16ba13ce6e92036.jpg", "/static/img/goodsImage/1146000/description/08aad003c779fd792fe6ca62e3437f52.jpg", "/static/img/goodsImage/1146000/description/9110b97cab01ad59045e3b6fa9c82986.jpg", "/static/img/goodsImage/1146000/description/9606a2b763c3b121f4699e5b3813470d.jpg", "/static/img/goodsImage/1146000/description/19a23f3960856d011bc7f73d3cc5958d.jpg", "/static/img/goodsImage/1146000/description/3791861d5c870fd65c756405c4e2384e.jpg", "/static/img/goodsImage/1146000/description/fb4d5f93ce7ba77b808a50dea69ade8f.jpg", "/static/img/goodsImage/1146000/description/2ca435362309b4d80d574bb4826ea5e9.jpg", "/static/img/goodsImage/1146000/description/1c6019775b9918b88b52da9b9467200d.jpg", "/static/img/goodsImage/1146000/description/a76654f038e79299d9c334cfa5f2b257.jpg", "/static/img/goodsImage/1146000/description/1f98f996f2e4d6823c0efa82dd4be0e5.jpg", "/static/img/goodsImage/1146000/description/bf38a9ded8ef3eb4252ce13da779d4d7.jpg", "/static/img/goodsImage/1146000/description/2a1719a580ae2d6b8fcc59f4df71de1e.jpg", "/static/img/goodsImage/1146000/description/a9e242f84e32f15112d56b02844ad9b5.jpg", "/static/img/goodsImage/1146000/description/501585bf340b9a748f62d9df74e655c1.jpg", "/static/img/goodsImage/1146000/description/f17b3e3239328a0ad2b403903cbc0288.jpg", "/static/img/goodsImage/1146000/description/74780e29d8711236e276a4cce1a3d370.jpg", "/static/img/goodsImage/1146000/description/575ffaf9828733cd12c93bac06c6cf3e.jpg", "/static/img/goodsImage/1146000/description/e2cf5cb2b62f97a362d1542022244daf.jpg", "/static/img/goodsImage/1146000/description/28ff786bda2d7dbc8eb13b8e33f3b36e.jpg", "/static/img/goodsImage/1146000/description/4f60bdc1edc24fd6183577fb0c2dd6e8.jpg", "/static/img/goodsImage/1146000/description/5eebd3c683e0de2ba4a5da8c11157116.jpg", "/static/img/goodsImage/1146000/description/6dfc4de2a101010c6a0ae4eb3f27d36f.jpg", "/static/img/goodsImage/1146000/description/c19f6ebc88929b94b671a2f31d87ebcf.jpg", "/static/img/goodsImage/1146000/description/6fcc1a3e4866b70660ece51095bbd4db.jpg", "/static/img/goodsImage/1146000/description/05e60a0ab1bd800e299e7c11394a09e9.jpg", "/static/img/goodsImage/1146000/description/373534220af64e9231b57942b9594bda.jpg", "/static/img/goodsImage/1146000/description/429818d75f85c79a42bdf4656c297697.jpg", "/static/img/goodsImage/1146000/description/b8dd5ade899f1d26a8b3ed5474e687fb.jpg", "/static/img/goodsImage/1146000/description/5a86489849ee00a6d6770107a239a860.jpg", "/static/img/goodsImage/1146000/description/67838eed94b78612afe36ee73495b593.jpg", "/static/img/goodsImage/1146000/description/86688216999066914ebc2eb37ab744f9.jpg", "/static/img/goodsImage/1146000/description/c4490961f4afd595bec996bae9997f68.jpg", "/static/img/goodsImage/1146000/description/b38792c05cbba49e18c80a5da0b62f13.jpg", "/static/img/goodsImage/1146000/description/1bd5bcf935d526d669c27258209049f2.jpg", "/static/img/goodsImage/1146000/description/aa95a695389bc43c6c579eec8d5d01bf.jpg", "/static/img/goodsImage/1146000/description/82a3ca9c09e49eef84add934184d99d6.jpg", "/static/img/goodsImage/1146000/description/09e139c4afcf278f6360bdebecac0643.jpg", "/static/img/goodsImage/1146000/description/0aed7b0d3063d02d7ec78e01519e9787.jpg", "/static/img/goodsImage/1146000/description/4cda5c37ae75f80d69d0456c063bea31.jpg", "/static/img/goodsImage/1146000/description/c73a3ffc7853dbc20ac12597f2216a50.jpg", "/static/img/goodsImage/1146000/description/d213a8a819f0e3f1ae77e761cccbd7bd.jpg", "/static/img/goodsImage/1146000/description/90a78416e7c7cffe792f97cea5caffcc.jpg", "/static/img/goodsImage/1146000/description/504344eb616bfda943ba082da60344a4.jpg", "/static/img/goodsImage/1146000/description/aa33fd93d3931b20e16b1834681e7ce2.jpg", "/static/img/goodsImage/1146000/description/efdbb05094cb290ea64566796456a6a5.jpg", "/static/img/goodsImage/1146000/description/7aec6c0470e91cc014886e6c8da72038.jpg", "/static/img/goodsImage/1146000/description/6c7516dac54a7d11e3ba1b9a06db5709.jpg", "/static/img/goodsImage/1146000/description/7bf8c6e416cb73db6b32a1b57790b3e8.jpg", "/static/img/goodsImage/1146000/description/189aba6adbcbae411431073a93f8ba33.jpg", "/static/img/goodsImage/1146000/description/c62e101c4e990b87eca97028f94bad66.jpg", "/static/img/goodsImage/1146000/description/a9ef12a08bed98ea398a9abcbb76a1fd.jpg", "/static/img/goodsImage/1146000/description/0a3dfdc4d8643d365802d187490fedc9.jpg", "/static/img/goodsImage/1146000/description/41dc8cec3d27fba474b6f111a7a01d59.jpg", "/static/img/goodsImage/1146000/description/1031f1c4098d353b268ad30a9992eb0f.jpg", "/static/img/goodsImage/1146000/description/867699ebebb3f3ae835cc08ff5378897.jpg", "/static/img/goodsImage/1146000/description/5d5040f780ab53c60159484db56ef414.jpg", "/static/img/goodsImage/1146000/description/982ad15b08fd25345df60342890ab764.jpg", "/static/img/goodsImage/1146000/description/7fa2ad51a4880f55344430939738dee3.jpg", "/static/img/goodsImage/1146000/description/6e954510b69dad4e8101193d1fa981cb.jpg", "/static/img/goodsImage/1146000/description/5698f43874070f88499b03c21a3f51fe.jpg", "/static/img/goodsImage/1146000/description/2da5fd9f8bb13c0eeb793c13eaf034a9.jpg", "/static/img/goodsImage/1146000/description/aa5eadf88f4002a4a983551f1fe1865e.jpg", "/static/img/goodsImage/1146000/description/22ae0d649164deed59bc0ac6b21dee3f.jpg", "/static/img/goodsImage/1146000/description/8f02d92f5a332ccc493992ea897f84af.jpg", "/static/img/goodsImage/1146000/description/a0a776ef209bc32b03dcaa538759b088.jpg", "/static/img/goodsImage/1146000/description/79a56479f8cee32edfe65e465ad2d31c.jpg", "/static/img/goodsImage/1146000/description/d3053e301e4791a059d2a1f5b92b74bb.jpg", "/static/img/goodsImage/1146000/description/a5dfec389a16cffa24cc0a90fff9dc8d.jpg", "/static/img/goodsImage/1146000/description/6eb5d494b00ad7dbdfab0ab0bb461ae1.jpg"],
		"inventory": [418, 729, 445, 964],
		"information": [{
			"attrName": "容量",
			"attrValue": "3.3L"
		}, {
			"attrName": "规格",
			"attrValue": "净水壶*1+滤芯*1"
		}, {
			"attrName": "功能",
			"attrValue": "镁离子净化"
		}, {
			"attrName": "原产国",
			"attrValue": "德国"
		}, {
			"attrName": "温馨提示",
			"attrValue": "建议4周更换一次滤芯"
		}, {
			"attrName": "说明书",
			"attrValue": "请参考本页面*价格条*下方的【备注】栏链接。"
		}],
		"label": [{
			"title": "满赠",
			"type": "1"
		}],
		"manufacture": "BWT制造商",
		"sale": 140,
		"date": "1500341003660",
		"category": "餐厨",
		"subCategory": "杯壶"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1085013,
		"price": 29.9,
		"topName": "双底面淘米洗菜篮",
		"subName": "自动沥水，一盆两用",
		"shortDescription": ["双面底座", "一手沥水", "出色耐腐", "经久耐用", "简单方便", "安全放心"],
		"shortDescriptionImage": ["/static/img/goodsImage/1085013/shortdescriptionImage/86e833a915a20f1d606ab44d5ac50197.png", "/static/img/goodsImage/1085013/shortdescriptionImage/6e36cce173360d6a7f4e9e4d8860d3bb.png", "/static/img/goodsImage/1085013/shortdescriptionImage/ed883613641c56b90235172db069e714.png"],
		"headImage": ["/static/img/goodsImage/1085013/headImage/98a9713b513603ed36d6ba946dfa632a.png", "/static/img/goodsImage/1085013/headImage/9d106c17889543a02d54a665a9c8d1dd.jpg", "/static/img/goodsImage/1085013/headImage/0c2cca32be5f00c985d45e2a54216506.jpg", "/static/img/goodsImage/1085013/headImage/880604340b43ef7a0b2af2e1a9085519.jpg", "/static/img/goodsImage/1085013/headImage/3cc4d656da9be4a9fd96d98c95c4d238.jpg"],
		"type": ["不锈钢304"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1085013/description/45cd8976bf918a94c45cfcbd47e9c8b5.jpg", "/static/img/goodsImage/1085013/description/c06da9a94e4e9b14cc5fadae8867e9bf.jpg", "/static/img/goodsImage/1085013/description/10fc6b2c224f518a0a2fc9a8d86e8aea.jpg", "/static/img/goodsImage/1085013/description/dcf0ce9accf98a4250d6b5c0b2d25bfc.jpg", "/static/img/goodsImage/1085013/description/65b35e752dcb7c40ace0a738759c4bc3.jpg", "/static/img/goodsImage/1085013/description/c46afbe10d7b80d8c8e7d5edc1abed90.jpg", "/static/img/goodsImage/1085013/description/004dbeadaeea870c2500a5a74d10d108.jpg", "/static/img/goodsImage/1085013/description/115f845411b8c1970354bca19f36700c.jpg", "/static/img/goodsImage/1085013/description/df6201302a13935fe3a95a75169fa99d.jpg", "/static/img/goodsImage/1085013/description/c29a698515555f5f55155a14cdcceb3f.jpg", "/static/img/goodsImage/1085013/description/c675a8d9de5509b56d3d8ad078060d55.jpg", "/static/img/goodsImage/1085013/description/944c560cef9b175cee43b9bebc7fbd7f.jpg", "/static/img/goodsImage/1085013/description/379eea2d4052af9f357e774f461db5de.jpg", "/static/img/goodsImage/1085013/description/97c1505491168f2704956c5272e8cc42.jpg", "/static/img/goodsImage/1085013/description/b372cdc4575af6c0bd356acc2b8d94c3.jpg"],
		"inventory": [486],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "上直径：23cm 下直径：14cm 高度：12.5cm"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "贝印制造商",
		"sale": 355,
		"date": "1500341007041",
		"category": "餐厨",
		"subCategory": "功能厨具"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1165037,
		"price": 39,
		"topName": "2件装 新中式饭碗 13cm",
		"subName": "原创高足设计，不烫手",
		"shortDescription": ["细腻圆润", "光滑易洗", "简约小巧", "取用舒适", "三色优雅", "耐温环保"],
		"shortDescriptionImage": ["/static/img/goodsImage/1165037/shortdescriptionImage/3670713dbf9ab4df7924f94287238983.jpg", "/static/img/goodsImage/1165037/shortdescriptionImage/8a7961da0ca2c1def2fddd422928096f.jpg", "/static/img/goodsImage/1165037/shortdescriptionImage/e6ebf3017d2b44153ee22f6b08ad7778.jpg"],
		"headImage": ["/static/img/goodsImage/1165037/headImage/200208df5561461a0091cba9b08233df.png", "/static/img/goodsImage/1165037/headImage/54f6095f762857bb9e40be3926fb8063.jpg", "/static/img/goodsImage/1165037/headImage/124b6b9003759564738518cb258f4958.jpg", "/static/img/goodsImage/1165037/headImage/4d945bb10036dd4f369cbcbb89487d8d.jpg", "/static/img/goodsImage/1165037/headImage/4bcd910047c52ec084f3625eaca1320b.jpg"],
		"type": ["素粉-2只装", "灰蓝-2只装", "琉青-2只装"],
		"chara": "3色可选",
		"description": ["/static/img/goodsImage/1165037/description/b973149741cf50429d7164b620d55e9e.jpg", "/static/img/goodsImage/1165037/description/284381f17697569a7f5f2957965b976e.jpg", "/static/img/goodsImage/1165037/description/1d7205b934ce006a9b9e5639dc5795af.jpg", "/static/img/goodsImage/1165037/description/fb9fc685a6a9db0164171c8983156c07.jpg", "/static/img/goodsImage/1165037/description/6b11a9eecfd3696f45df79f65d8a6203.jpg", "/static/img/goodsImage/1165037/description/a7e39e8bbd45cb2b852c6dee3c10c87b.jpg", "/static/img/goodsImage/1165037/description/e752129aaec9a48de649d332773877db.jpg", "/static/img/goodsImage/1165037/description/8e059b990c5351441b76498c249469a8.jpg", "/static/img/goodsImage/1165037/description/79015558109989e4f4d7d6afed45b064.jpg", "/static/img/goodsImage/1165037/description/5b64625b45dcdc95d27213b251c71733.jpg", "/static/img/goodsImage/1165037/description/a8b25a48483962368277bdb73354e621.jpg", "/static/img/goodsImage/1165037/description/9a0184f4209397a3377e785202a3069f.jpg", "/static/img/goodsImage/1165037/description/7687a66be0f2d10bf09250348df1da8f.jpg", "/static/img/goodsImage/1165037/description/1483c3bc1dd3eddeebd386397dcac031.jpg", "/static/img/goodsImage/1165037/description/6332ab58d069a5d4e5a7acf56a318d59.jpg", "/static/img/goodsImage/1165037/description/bf284f8165e4bf0790d75538415da5db.jpg", "/static/img/goodsImage/1165037/description/70655fa0ee16c8912fc7939a4145d33c.jpg", "/static/img/goodsImage/1165037/description/5f45750337da771cd5cebe43b62bec6f.jpg", "/static/img/goodsImage/1165037/description/d190d2650b4e53f7bedee0a85b7efb7c.jpg", "/static/img/goodsImage/1165037/description/540877630f973c2bcd32fb74b63c4524.jpg", "/static/img/goodsImage/1165037/description/e8318135397613d0639726cdebcc1a65.jpg", "/static/img/goodsImage/1165037/description/55cc7ec253b276df22e217c28f19d5d3.jpg", "/static/img/goodsImage/1165037/description/7b0fd2d0653c44355600485018abc853.jpg", "/static/img/goodsImage/1165037/description/c9538dcad8f66e2f01d91318cad96d67.jpg", "/static/img/goodsImage/1165037/description/5ab17e9773d82da64b61b1ebc75526a3.jpg", "/static/img/goodsImage/1165037/description/300b39e2eae80fdac04e76cff393b007.jpg", "/static/img/goodsImage/1165037/description/be54b1a41f39e2bd7c3a2aa02853b3c6.jpg", "/static/img/goodsImage/1165037/description/ad19c574d4329263aa7c6ce19ea3cc84.jpg", "/static/img/goodsImage/1165037/description/f4b61d028c34bd186824c9d07e6fdb8f.jpg", "/static/img/goodsImage/1165037/description/3aba12f93e3930961c24f631d189cd3e.jpg", "/static/img/goodsImage/1165037/description/0b96d5d24b38a91c93ae4771307f5abb.jpg", "/static/img/goodsImage/1165037/description/8268c823adcf569ac2479f7e07a46b81.jpg", "/static/img/goodsImage/1165037/description/f5a53c3291ab584af85f2af6889910ae.jpg", "/static/img/goodsImage/1165037/description/2ba8c849a2cf4ad55e05ed453458507c.jpg", "/static/img/goodsImage/1165037/description/e2a7ae02dda5f3ecbb3dc446c05525ce.jpg", "/static/img/goodsImage/1165037/description/ed86c7b2237a8634fb126c01dd28f5bc.jpg", "/static/img/goodsImage/1165037/description/00b958f277395cffbb8ff89517f361bd.jpg", "/static/img/goodsImage/1165037/description/17949c2d93c29f81dc96dd4bd51335b5.jpg", "/static/img/goodsImage/1165037/description/7ae9813d151bc0b11c017dbfb2517835.jpg", "/static/img/goodsImage/1165037/description/244c8aee28dfa4fc479631f60d4dac78.jpg", "/static/img/goodsImage/1165037/description/774c6e54171bca41bd7c1f66dde3ec84.jpg", "/static/img/goodsImage/1165037/description/8d547dd9583d9057a17e307584d26c87.jpg", "/static/img/goodsImage/1165037/description/e653a48ddff7799955ca44fec5f461de.jpg"],
		"inventory": [318, 646, 245],
		"information": [{
			"attrName": "规格",
			"attrValue": "13cm碗口直径*5.5cm碗高"
		}, {
			"attrName": "数量",
			"attrValue": "2只装"
		}, {
			"attrName": "质量执行标准",
			"attrValue": "GB/T 3532-2009"
		}, {
			"attrName": "系列",
			"attrValue": "新中式"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "Wedgwood制造商",
		"sale": 405,
		"date": "1500341010448",
		"category": "餐厨",
		"subCategory": "餐具"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1156151,
		"price": 49,
		"topName": "双层隔热玻璃马克杯",
		"subName": "隔冷隔热，握持贴合手指",
		"shortDescription": ["贴合手指", "握持舒适", "清亮通透", "手工吹制", "光滑细腻", "安全耐用"],
		"shortDescriptionImage": ["/static/img/goodsImage/1156151/shortdescriptionImage/90526cc03bf334b8d44b897bd95ce400.jpg", "/static/img/goodsImage/1156151/shortdescriptionImage/2ac3e779310fbc9c12569c7ff2f5ccd8.jpg", "/static/img/goodsImage/1156151/shortdescriptionImage/388579b87e763663d5b759957be29fa1.jpg"],
		"headImage": ["/static/img/goodsImage/1156151/headImage/b819f1f4af08975a554698e6a46762b1.png", "/static/img/goodsImage/1156151/headImage/115cd4b3f527d2ad9395062f580fc05c.jpg", "/static/img/goodsImage/1156151/headImage/4dc5df179ba26607cccb426875493d6d.jpg", "/static/img/goodsImage/1156151/headImage/473d85db25f49a5325db453c94e26d3d.jpg", "/static/img/goodsImage/1156151/headImage/2ab1e9349980368c7d0b7877dc6178b3.jpg"],
		"type": ["单只装-400ml", "2只装-400ml"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1156151/description/60cc7964c5c20e9d70cbacb33cad6fc1.jpg", "/static/img/goodsImage/1156151/description/0a380252a57d7a9c5975a3cbda1d39e0.jpg", "/static/img/goodsImage/1156151/description/ae150b87b8141e620954ce8539b83888.jpg", "/static/img/goodsImage/1156151/description/0404bcf95837553c18d9625ff74f77ec.jpg", "/static/img/goodsImage/1156151/description/33cc8b83b67216b645b0ec41b196edbc.jpg", "/static/img/goodsImage/1156151/description/48af65a215b1ef756ccafde9750401ad.jpg", "/static/img/goodsImage/1156151/description/2172884f58da8a335482506f1d477d1b.jpg", "/static/img/goodsImage/1156151/description/8f2055281c7218c737ef8b4d541b0bee.jpg", "/static/img/goodsImage/1156151/description/822686ac52c70999397b3e60fb552ccd.jpg", "/static/img/goodsImage/1156151/description/51fbe4f5f0dbce4858e0c1c2d90f8b9c.jpg", "/static/img/goodsImage/1156151/description/8e5c79c2afa3d7731e5c1a59e334e533.jpg", "/static/img/goodsImage/1156151/description/1b79b6f8fdb280a4fd6e65bb2696b2d4.jpg", "/static/img/goodsImage/1156151/description/50ddb93c7a392feaf7d70b3c94732149.jpg", "/static/img/goodsImage/1156151/description/221e9b3c8b1f098228760a4640491599.jpg", "/static/img/goodsImage/1156151/description/e3bc01799843a4a8579163a81feb82d8.jpg", "/static/img/goodsImage/1156151/description/7ec679f0c93500b83e3be7f02b893142.jpg", "/static/img/goodsImage/1156151/description/5c6524373a9df50777d92496df6b58b5.jpg", "/static/img/goodsImage/1156151/description/80aeb8f780046d869ef930abba50b4b3.jpg", "/static/img/goodsImage/1156151/description/93dc439da6ab478c6a6fe4b7e6c4ba31.jpg", "/static/img/goodsImage/1156151/description/14e1e7893f8585bcd9957bb6d6183728.jpg", "/static/img/goodsImage/1156151/description/609ded8eb38cae2485fe793136c6064e.jpg", "/static/img/goodsImage/1156151/description/4b6c323a21f253aa543382f3207ae69f.jpg", "/static/img/goodsImage/1156151/description/ab64dd81deb98ad6ed7db9cbba391028.jpg", "/static/img/goodsImage/1156151/description/b544b194b73cfc11bb2ecdd778835310.jpg", "/static/img/goodsImage/1156151/description/59f0554408d90a83885301e0a62d22e0.jpg", "/static/img/goodsImage/1156151/description/cd27eeeb4f8a4a660f657bca40712de4.jpg", "/static/img/goodsImage/1156151/description/906526de6eb538744f0b6609c23b2a81.jpg", "/static/img/goodsImage/1156151/description/b2eb825ad0ddd8c56a6140d93c2a1ee4.jpg", "/static/img/goodsImage/1156151/description/28beb1a8355459512f74e01fb985c0b1.jpg", "/static/img/goodsImage/1156151/description/c28f6ab0af6cb9d1b4909e025e4ab3ff.jpg", "/static/img/goodsImage/1156151/description/ca0756f20bffe590df5a55773d26a56d.jpg", "/static/img/goodsImage/1156151/description/546555210340ef28649911e0ac86ea0c.jpg", "/static/img/goodsImage/1156151/description/5cfe2930e433ae5751a1ba3213f4cc87.jpg", "/static/img/goodsImage/1156151/description/fb8df3b5594acdb5331cb0c385df33ff.jpg", "/static/img/goodsImage/1156151/description/c566ffa69125cdfbb763f2fd0599f776.jpg", "/static/img/goodsImage/1156151/description/8c1a2b858db48bf34b38b5dd059fb083.jpg", "/static/img/goodsImage/1156151/description/353e04c24c220ac2733b8d4546438363.jpg", "/static/img/goodsImage/1156151/description/3e941bd857bb1cee8b199da235eff2d8.jpg", "/static/img/goodsImage/1156151/description/a11e42ebd6a1a3575cb6b216ad822b6f.jpg", "/static/img/goodsImage/1156151/description/81eefa4e21b015fafe3cea453f637dd1.jpg", "/static/img/goodsImage/1156151/description/d32b513e25aac52b409f6441ae769895.jpg", "/static/img/goodsImage/1156151/description/ff558672540af667d8fc20cf34152de8.jpg", "/static/img/goodsImage/1156151/description/ff69e8d39492c1a6c5dc99bf8e789b79.jpg", "/static/img/goodsImage/1156151/description/1747a6632b09742d4c70e1a1ccddb7ca.jpg", "/static/img/goodsImage/1156151/description/a2564a6a1d721b8b34feffe68c7fea7f.jpg"],
		"inventory": [259, 403],
		"information": [{
			"attrName": "容量",
			"attrValue": "400ml"
		}, {
			"attrName": "质量执行标准",
			"attrValue": "QB/T2933-2008GB4806.5-2016"
		}, {
			"attrName": "适用",
			"attrValue": "红茶、咖啡、冰水等热冷饮品"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "星巴克制造商",
		"sale": 329,
		"date": "1500341014222",
		"category": "餐厨",
		"subCategory": "茶具咖啡具"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1006058,
		"price": 13.99,
		"topName": "懒人抹布",
		"subName": "吸水吸油，热销200万卷",
		"shortDescription": ["吸水吸油", "强效清洁", "干湿两用", "不易破损", "无需清洁", "方便清洁"],
		"shortDescriptionImage": ["/static/img/goodsImage/1006058/shortdescriptionImage/c1a7cee1c295ae4f447ee086a2129a2d.jpg", "/static/img/goodsImage/1006058/shortdescriptionImage/b611f1dc901592485bc041b35057edf8.jpg", "/static/img/goodsImage/1006058/shortdescriptionImage/3b60204aa389bfa86646d083ce0b13be.jpg"],
		"headImage": ["/static/img/goodsImage/1006058/headImage/22b832ace6eb10c7b0057eb6eae6c3c9.png", "/static/img/goodsImage/1006058/headImage/afc1f0ac88dbeb5108faa7813aae3ad4.jpg", "/static/img/goodsImage/1006058/headImage/f921ffa290d0a12ddb0e749a40381c99.jpg", "/static/img/goodsImage/1006058/headImage/2d3f4f0b6b6b5b32eedb24716ad89aac.jpg", "/static/img/goodsImage/1006058/headImage/02ea23ba93899a7bca03163be8560f75.jpg"],
		"type": ["1卷", "4卷", "台面清洁套装（厨房湿巾起泡去顽渍+懒人抹布吸污不留痕+多用魔力擦）"],
		"chara": "3色可选",
		"description": ["/static/img/goodsImage/1006058/description/01ba536c1023e8d6d51d5f1d35255677.jpg", "/static/img/goodsImage/1006058/description/eb4def91966ac68e050d52e88d479629.jpg", "/static/img/goodsImage/1006058/description/6f5499e448364f12077ac9e921dad40a.jpg", "/static/img/goodsImage/1006058/description/3e0e7f0226e5d91408a9615fb9285d48.jpg", "/static/img/goodsImage/1006058/description/ba35e4e721277c989db82e9d11a0b76c.jpg", "/static/img/goodsImage/1006058/description/d83b5da14eba2e4f62fb29ef383cbca7.jpg", "/static/img/goodsImage/1006058/description/239f1317f70f14ee630150de3bfd7bf4.jpg", "/static/img/goodsImage/1006058/description/2b1c9e0eee21b8a43c1a8d1c19d8b5da.jpg", "/static/img/goodsImage/1006058/description/5890194c92d9842ecfca8515905de57e.jpg", "/static/img/goodsImage/1006058/description/345dbde0e6f35f74f50d97de73a6f6e1.jpg", "/static/img/goodsImage/1006058/description/c39a57e28978a801ff37e38a950b4f7e.jpg"],
		"inventory": [845, 329, 965],
		"information": [{
			"attrName": "规格",
			"attrValue": "单层 255mm×250mm/节"
		}, {
			"attrName": "数量",
			"attrValue": "1卷 50节/卷"
		}, {
			"attrName": "材质",
			"attrValue": "木浆复合"
		}, {
			"attrName": "保质期",
			"attrValue": "三年"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB15979-2002"
		}, {
			"attrName": "卫生许可",
			"attrValue": "浙卫消证字（2014）第0048号"
		}],
		"label": [{
			"title": "爆品",
			"type": "1"
		}],
		"manufacture": "",
		"sale": 792,
		"date": "1500341017979",
		"category": "餐厨",
		"subCategory": "清洁保鲜"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1021022,
		"price": 399,
		"topName": "德式六件套不锈钢刀",
		"subName": "安全锋利，功能齐全",
		"shortDescription": ["持久锋利", "不易生锈", "实木刀座", "厚实耐用", "轻便省力", "握感舒适"],
		"shortDescriptionImage": ["/static/img/goodsImage/1021022/shortdescriptionImage/cc6944cf35342302ed86dbc17d7f3ad8.png", "/static/img/goodsImage/1021022/shortdescriptionImage/fd4ee343ebdfe9c74fa5ba68e6ec9e2f.png", "/static/img/goodsImage/1021022/shortdescriptionImage/58dabdb9053e468ad2e7228184739221.png"],
		"headImage": ["/static/img/goodsImage/1021022/headImage/8a0e23ce62ec9eb03d400f9cabc5a29e.png", "/static/img/goodsImage/1021022/headImage/b9bfcca1ad3b845a47cd8ff1107553a5.jpg", "/static/img/goodsImage/1021022/headImage/9e32e8fce14ae732dbc568d4fa49f8f1.jpg", "/static/img/goodsImage/1021022/headImage/7d0e5f9935aebdadcba12016cd48865a.jpg", "/static/img/goodsImage/1021022/headImage/7c790f57f2f09c695c19487f01d7a744.jpg"],
		"type": ["套装"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1021022/description/f5c19a76aadc3c7a493a4fb02f5df745.jpg", "/static/img/goodsImage/1021022/description/579de80b817a8e1f9fe068b87cab9ddf.jpg", "/static/img/goodsImage/1021022/description/f0b381a4cd6dec66a981f9f75a7c7640.jpg", "/static/img/goodsImage/1021022/description/ef00498566fb848648a761ef9cd92cc9.jpg", "/static/img/goodsImage/1021022/description/1116a33cd27ffc99605fa345e78a9cc5.jpg", "/static/img/goodsImage/1021022/description/21f9e9b27d08093861b658b0fba502a0.jpg", "/static/img/goodsImage/1021022/description/5515496b32b043460cab6ed13ac6aed0.jpg", "/static/img/goodsImage/1021022/description/14b50efc929fe5d35c93e91b6aceafe6.jpg", "/static/img/goodsImage/1021022/description/2b781a3bc400a3ef4537802a842b3e25.jpg", "/static/img/goodsImage/1021022/description/ab558e1b9a31452e2547aa8af6e0a3df.jpg", "/static/img/goodsImage/1021022/description/7fff0724e72a40362a8b8e24e58eb596.jpg", "/static/img/goodsImage/1021022/description/43d59f1721f0c9db4698596a4aa834d4.jpg", "/static/img/goodsImage/1021022/description/71ade9cb2a07b244b761c9985b23f02a.jpg", "/static/img/goodsImage/1021022/description/45ce0a21bd905bd2a5331a5cd0811770.jpg", "/static/img/goodsImage/1021022/description/d109c23a177f26e2e19c869733446e96.jpg", "/static/img/goodsImage/1021022/description/76d682e03aebaf46461077c0462c96d8.jpg", "/static/img/goodsImage/1021022/description/dc0aa2f8df24a7b9219915f756f60fa0.jpg", "/static/img/goodsImage/1021022/description/90ecdc749cfb6afb4abeed04dfff55d7.jpg", "/static/img/goodsImage/1021022/description/ce22e44206137038ec0da4c2f0cf4dbd.jpg", "/static/img/goodsImage/1021022/description/6dba41cead6f9fda26d57bdd7371cb73.jpg", "/static/img/goodsImage/1021022/description/56abbf798dc549e9a681708b42789b67.jpg", "/static/img/goodsImage/1021022/description/c8a5ec367893f511ecb86bec6c11453d.jpg", "/static/img/goodsImage/1021022/description/f1b242aeda21755b55dae43d068eba11.jpg", "/static/img/goodsImage/1021022/description/ad1a7001be933d1ae990ac4221937175.jpg", "/static/img/goodsImage/1021022/description/9be33072892dace646770b693c36fd5a.jpg", "/static/img/goodsImage/1021022/description/201dbfd01a18e7f1c66da24a22b7aaa6.jpg", "/static/img/goodsImage/1021022/description/608f035c534821ff33ba71321087aa80.jpg", "/static/img/goodsImage/1021022/description/c76f1b4b6152d48ed42ea98095b88a62.jpg", "/static/img/goodsImage/1021022/description/848e13dbb6ba2722bc71d5a7ac9a42a7.jpg", "/static/img/goodsImage/1021022/description/81b64307ffddeb758207a2778a9a19e5.jpg", "/static/img/goodsImage/1021022/description/ff780c6cbcfebd18e1c2db3091c0cefd.jpg", "/static/img/goodsImage/1021022/description/32a33e030de89c969d0776748fff44cb.jpg", "/static/img/goodsImage/1021022/description/a32f8b4d8b4675e46448f333c5c061e3.jpg", "/static/img/goodsImage/1021022/description/1e7313582b4d19a7206175397aa26d89.jpg", "/static/img/goodsImage/1021022/description/6de715f637b3eaf690a956860ef6daab.jpg", "/static/img/goodsImage/1021022/description/3801d8430cde1915ac9e3aeb15a8794e.jpg", "/static/img/goodsImage/1021022/description/2d01e6d17bbe5c15e9d81f6a2ad38195.jpg", "/static/img/goodsImage/1021022/description/78c4c1eb4c2d18459a0578bb8e18dec9.jpg", "/static/img/goodsImage/1021022/description/58e8ebea607c0fb286e73449465bae69.jpg", "/static/img/goodsImage/1021022/description/156b4b1ca0f5474904bab4c3451179dd.jpg", "/static/img/goodsImage/1021022/description/b6ee59f655cfd9aba4185c416bc16742.jpg", "/static/img/goodsImage/1021022/description/e19776aeeb9ef683d9b24a70b1005160.jpg", "/static/img/goodsImage/1021022/description/e6b11cb32859d0ede39dc47ddbd4420d.jpg", "/static/img/goodsImage/1021022/description/0bc65e5e0bde541a29b4e3fb0187c0f1.jpg", "/static/img/goodsImage/1021022/description/514a1e29b8005dd9a05d0f17deb4c96c.jpg", "/static/img/goodsImage/1021022/description/ccb542b865e829e0024e102308bbd070.jpg", "/static/img/goodsImage/1021022/description/974cbcdc983c836bb5a5ad82bdd743f1.jpg", "/static/img/goodsImage/1021022/description/1dc3902817ede99b7e96b6f8a1f27680.jpg", "/static/img/goodsImage/1021022/description/428581d0bf8656d6d043ba914ac7d55d.jpg", "/static/img/goodsImage/1021022/description/54d6df44eaf64cd39b098a0a4b64bb08.jpg", "/static/img/goodsImage/1021022/description/34c5bb434925297f138c78755911ed94.jpg", "/static/img/goodsImage/1021022/description/98bad74d2de6c2f03da9cc191d307202.jpg", "/static/img/goodsImage/1021022/description/8fc30f424301d4370d573a20982747a9.jpg", "/static/img/goodsImage/1021022/description/ec4f83dbe8d345d33a9bee22ee8c08a9.jpg", "/static/img/goodsImage/1021022/description/76008c060231ba7d8f1e2b3d16793566.jpg", "/static/img/goodsImage/1021022/description/207c221b30e819cca8377b1178811930.jpg", "/static/img/goodsImage/1021022/description/27b08e2523eb3c8f4cc5174f07345ed0.jpg", "/static/img/goodsImage/1021022/description/a3539cc262ab709af3c03fe288832bd5.jpg", "/static/img/goodsImage/1021022/description/4f58786ed4541bf067d96f60acad09cf.jpg", "/static/img/goodsImage/1021022/description/a0a4895572c3103da103fe9c7823c721.jpg", "/static/img/goodsImage/1021022/description/02d6c4aff37617362cae4ee4dea6ffb0.jpg", "/static/img/goodsImage/1021022/description/f9a1c2bafeab7debd165bc58f8b8544a.jpg", "/static/img/goodsImage/1021022/description/a306c6dcd95f4afc572070d1efc59b39.jpg", "/static/img/goodsImage/1021022/description/b4780a20b13e3ad069126b8021a055d0.jpg"],
		"inventory": [289],
		"information": [{
			"attrName": "刀片材质",
			"attrValue": "1.4116不锈钢"
		}, {
			"attrName": "手柄材质",
			"attrValue": "SS430不锈钢"
		}, {
			"attrName": "剪刀刀片材质",
			"attrValue": "3Cr13不锈钢"
		}, {
			"attrName": "剪刀刀柄材质",
			"attrValue": "430不锈钢"
		}, {
			"attrName": "刀座材质",
			"attrValue": "桦木"
		}, {
			"attrName": "执行标准",
			"attrValue": "QB/T1924-1993"
		}, {
			"attrName": "注意事项",
			"attrValue": "因刀具管制条例，不发货到新疆地区，敬请谅解。"
		}],
		"label": [{
			"title": "限时购",
			"type": "1"
		}],
		"manufacture": "双立人制造商",
		"sale": 285,
		"date": "1500341021634",
		"category": "餐厨",
		"subCategory": "刀剪砧板"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1113004,
		"price": 239,
		"topName": "破壁料理机",
		"subName": "仅售供应商建议价的1/4",
		"shortDescription": ["加厚玻璃", "5档调节", "快速干磨", "细腻成粉", "清爽棒冰", "美味一夏"],
		"shortDescriptionImage": ["/static/img/goodsImage/1113004/shortdescriptionImage/636f5adaeec40bbbb00f8355210d06f6.jpg", "/static/img/goodsImage/1113004/shortdescriptionImage/9d8ad7075af79921f94ef7956d9e83e3.jpg", "/static/img/goodsImage/1113004/shortdescriptionImage/7d6d2dd5f3f976c91c5f8fd03a020b1c.jpg"],
		"headImage": ["/static/img/goodsImage/1113004/headImage/23e6cac3a91db90fff3a3fcb3f0d88be.png", "/static/img/goodsImage/1113004/headImage/6ecc824dc7c265d26aef05b558dbf031.jpg", "/static/img/goodsImage/1113004/headImage/062ed470c13577d49f46185b59871316.jpg", "/static/img/goodsImage/1113004/headImage/05590c8f5a8b5470d22f4881395ab150.jpg", "/static/img/goodsImage/1113004/headImage/bfb87072a4d86c04507f59ab86eb794f.jpg"],
		"type": ["破壁料理机带家用玻璃杯身+随行榨汁杯+赠总价值29元硅胶棒冰模具", "干磨杯", "0.8L", "随行料理杯"],
		"chara": "4色可选",
		"description": ["/static/img/goodsImage/1113004/description/e88e06482d2a033ebaf214f3aef751b6.jpg", "/static/img/goodsImage/1113004/description/7960a2712a3488127ad39815e502b3d0.jpg", "/static/img/goodsImage/1113004/description/af217891f39de9242cb2bb4db6de5c69.jpg", "/static/img/goodsImage/1113004/description/f05d4b4d172042599a1aa72c7dd72f99.jpg", "/static/img/goodsImage/1113004/description/520cd29ae34c1c7b184986341534090b.jpg", "/static/img/goodsImage/1113004/description/31a07009b80b9fc41e2f471974aa2d29.jpg", "/static/img/goodsImage/1113004/description/3a994b9d6c89fc9d1c380dbea5a4b7a3.jpg", "/static/img/goodsImage/1113004/description/2fec4b39423cb2840f4ef2203f0f7753.jpg", "/static/img/goodsImage/1113004/description/53784f8f3e604d3f43bf6b829c4c0b6f.jpg", "/static/img/goodsImage/1113004/description/8fd140e5b4edb1f67ffa3d1a10531523.jpg", "/static/img/goodsImage/1113004/description/c30edd8cf6b4b1a4cf32f78a9501323d.jpg", "/static/img/goodsImage/1113004/description/cd7dc362d289549b29b539650f32e2a8.jpg", "/static/img/goodsImage/1113004/description/abb9fe566fe02386d8aaaaad4fbc97e1.jpg", "/static/img/goodsImage/1113004/description/f52cc0073ff8f886499daa4dbd34389a.jpg", "/static/img/goodsImage/1113004/description/77bb15e85f5cd7e2fd3d8936efcb70ee.jpg", "/static/img/goodsImage/1113004/description/e5ffe3d8b428120a8a6ae0d0f811d4b0.jpg", "/static/img/goodsImage/1113004/description/209200cacae81f44adc9b7090185a355.jpg", "/static/img/goodsImage/1113004/description/94dcf88e766e9737d5a33692c40c75ed.jpg", "/static/img/goodsImage/1113004/description/ce35a3bc8b8409fab6364fbfaf331729.jpg", "/static/img/goodsImage/1113004/description/778977031edba7d2aab9ed1f8dc8032d.jpg", "/static/img/goodsImage/1113004/description/93b576b69c7a91c73b145e19bcb3f97f.jpg", "/static/img/goodsImage/1113004/description/8edf4f9f9a8096e2e2d49c0b43071738.jpg", "/static/img/goodsImage/1113004/description/a10b90b7561fcd3062302f059e4611f8.jpg", "/static/img/goodsImage/1113004/description/3684f9aa110852684ba01134633118f3.jpg", "/static/img/goodsImage/1113004/description/c4f87c873b7ea75e2ccf54decd5ed6f0.jpg", "/static/img/goodsImage/1113004/description/207f2a78971788194d788d8d15be16d7.jpg", "/static/img/goodsImage/1113004/description/068f4358432de6682c8420a8e4b7dcaf.jpg", "/static/img/goodsImage/1113004/description/0adf79a53f6b8ba3347ab86b247bbee2.jpg", "/static/img/goodsImage/1113004/description/e87aedb5d7e3ede4339d15f6f61bb105.jpg", "/static/img/goodsImage/1113004/description/61b05d5e7be6076020e44670c1a2de89.jpg", "/static/img/goodsImage/1113004/description/e55134d04ed81fec0e9dad9c669da8c9.jpg", "/static/img/goodsImage/1113004/description/d2f4cb64541bcf7b03627894fbd82eb0.jpg", "/static/img/goodsImage/1113004/description/76da370ff4fb2c0bea3b77f2633453b4.jpg", "/static/img/goodsImage/1113004/description/09a955d85c456c774442d8d8c6aa4206.jpg", "/static/img/goodsImage/1113004/description/ae90dcb71a52e737128a704f85ea4d94.jpg", "/static/img/goodsImage/1113004/description/f3363a7f13861ed5f01075e1d7f64c6f.jpg", "/static/img/goodsImage/1113004/description/225e139311b3603de46b0c57c8b495f0.jpg", "/static/img/goodsImage/1113004/description/83c478dd4e9c1640c673c8635c57d788.jpg", "/static/img/goodsImage/1113004/description/746f96425e9c7b467b5785415a094af3.jpg", "/static/img/goodsImage/1113004/description/bd33bb093fcb216bfd9c124af729c9cc.jpg", "/static/img/goodsImage/1113004/description/7712a6981c4a54ab6f430cb9a587fa6e.jpg", "/static/img/goodsImage/1113004/description/a6485422e37de8f42f2568a8144cb945.jpg", "/static/img/goodsImage/1113004/description/6c8c0066a1aa504301a019b0c5920f83.jpg", "/static/img/goodsImage/1113004/description/56acca062421a567d06b27ee9b5868c3.jpg", "/static/img/goodsImage/1113004/description/da361505ec15107e4bef3b60ece37855.jpg", "/static/img/goodsImage/1113004/description/c2edda22d100af4ab5dbebc47ddd5d80.jpg", "/static/img/goodsImage/1113004/description/c4e9d23d5402bbd29b273409a08318b7.jpg", "/static/img/goodsImage/1113004/description/9e8abc300ac9c73e9231fa5d8470cb39.jpg", "/static/img/goodsImage/1113004/description/f553f79673fd01ae7f55a4a412350bc7.jpg", "/static/img/goodsImage/1113004/description/164bb8617a3a8786c414158eb3b48146.jpg", "/static/img/goodsImage/1113004/description/a4918362b22f4a11f3bceb6d8c455f1e.jpg", "/static/img/goodsImage/1113004/description/2d8a579aed81bc03340be955eb20c118.jpg", "/static/img/goodsImage/1113004/description/da06e12dd693c6b35ae9dd60c80c4262.jpg", "/static/img/goodsImage/1113004/description/e278a4e9aab65d89e53d129c3baff916.jpg", "/static/img/goodsImage/1113004/description/48ed138ad69fa87a2e785f3be4bd6c2c.jpg", "/static/img/goodsImage/1113004/description/bb9e8446638823d61108846cfbcc6bb0.jpg", "/static/img/goodsImage/1113004/description/284fff533abfc72b8a2273a1dede70e1.jpg", "/static/img/goodsImage/1113004/description/ff275583895f3a42cc321677e1f81b3b.jpg", "/static/img/goodsImage/1113004/description/d86990bff0941eca7f1095fef2e86cf3.jpg", "/static/img/goodsImage/1113004/description/d0d33f9053606f88f2fa8f198bbfef97.jpg", "/static/img/goodsImage/1113004/description/2d82286639b5a6f59d1d776ec167fcba.jpg", "/static/img/goodsImage/1113004/description/1e58397df4d402b2cd1725d2f74d2c09.jpg", "/static/img/goodsImage/1113004/description/121fa6a94aaba5b353fc7830335f98e3.jpg", "/static/img/goodsImage/1113004/description/d7b5a7ba3765619276c0d5e846e41ab2.jpg", "/static/img/goodsImage/1113004/description/87748c8f018dad92554ce2bb93aa86a3.jpg", "/static/img/goodsImage/1113004/description/34d405bd78e0eea0e1c97cc5bdcc08d8.jpg", "/static/img/goodsImage/1113004/description/b09a0369af92c24a576764b8870528d5.jpg", "/static/img/goodsImage/1113004/description/772ddae537350cc0f1a3233663273623.jpg", "/static/img/goodsImage/1113004/description/2d9a91d98edad886e5387ba4bfc35f3d.jpg", "/static/img/goodsImage/1113004/description/6b724bc11cfeda86d5354646c4d5c3b3.jpg", "/static/img/goodsImage/1113004/description/f815485f5465f7a11984000a9b7cc966.jpg", "/static/img/goodsImage/1113004/description/c40bc8eecc7c444ff08c67ba5cd916c3.jpg", "/static/img/goodsImage/1113004/description/a7ac6be29b98ccb9f5c6cef3501d5f96.jpg", "/static/img/goodsImage/1113004/description/948ad256645d129a8e1f2b3f9772cc55.jpg", "/static/img/goodsImage/1113004/description/c9d12f96d26d17f7431bbdf2d9127361.jpg", "/static/img/goodsImage/1113004/description/62ab97318d08577365fc713552073b97.jpg", "/static/img/goodsImage/1113004/description/cee4e8a33253375ef087b780eae89524.jpg", "/static/img/goodsImage/1113004/description/837a66aa2ddc198f8959227a034648b4.jpg", "/static/img/goodsImage/1113004/description/d85adf7a2278f685943d41beda3b9834.jpg", "/static/img/goodsImage/1113004/description/1296068fc0f6683df984c05373dca6ae.jpg", "/static/img/goodsImage/1113004/description/821fbfea4435a706d3fdd3625064926d.jpg", "/static/img/goodsImage/1113004/description/c4c108b4019e9a541dbfd76a07d9c484.jpg", "/static/img/goodsImage/1113004/description/88cd291ae4ef980a92b6766378d71409.jpg", "/static/img/goodsImage/1113004/description/a25ff4dfc274704f301c05653e5aa3f8.jpg", "/static/img/goodsImage/1113004/description/a293fce638bd39aebbf5c39e1dd837ab.jpg", "/static/img/goodsImage/1113004/description/f1d9e46900ad584e37eb752885cc2c09.jpg", "/static/img/goodsImage/1113004/description/87f8298c421b4caf2b571a413ee5619d.jpg", "/static/img/goodsImage/1113004/description/904dbd7cbd176ba1090a8ccf1452b1ce.jpg", "/static/img/goodsImage/1113004/description/4209fb0ae5dda98b6e85acf308e7fc59.jpg", "/static/img/goodsImage/1113004/description/e43bccdf2ee425bc7f403df43853c571.jpg", "/static/img/goodsImage/1113004/description/7d9769445f076c43544e96ea2cca8bde.jpg", "/static/img/goodsImage/1113004/description/4648ba79f99d2068dbae691f1b0d0e62.jpg", "/static/img/goodsImage/1113004/description/44faa9d7e40a4b418f407b92bd59b6fe.jpg", "/static/img/goodsImage/1113004/description/83db73e1c489f362df377ed15a876824.jpg", "/static/img/goodsImage/1113004/description/0f5e55d100c0e13079c66b8ec265f8a1.jpg", "/static/img/goodsImage/1113004/description/ff7c7ea65f3a29054166e249faf84ab6.jpg", "/static/img/goodsImage/1113004/description/60e3494eafe6f42267b00bda94c07211.jpg", "/static/img/goodsImage/1113004/description/d5fd24f9fb50d8f1874a22f1a98b87bc.jpg", "/static/img/goodsImage/1113004/description/ee9b3b5da88094af09ec534d57f7ee67.jpg", "/static/img/goodsImage/1113004/description/da62268117347415f2cda3baad4177e3.jpg", "/static/img/goodsImage/1113004/description/f0193be0be8f09095f7041cca8351043.jpg", "/static/img/goodsImage/1113004/description/f37ece8ca0a0ce6375482fc30e3b96c8.jpg", "/static/img/goodsImage/1113004/description/669017cd7299f20b4be15211e56f10d9.jpg", "/static/img/goodsImage/1113004/description/c35ae6caa81dc9b621de156c69a87d63.jpg", "/static/img/goodsImage/1113004/description/40ae12d577a3dacfdf8571ced9d12674.jpg", "/static/img/goodsImage/1113004/description/07c4bd3a13552fcc262278a4572fb80a.jpg", "/static/img/goodsImage/1113004/description/17924b8203354bcb6d3687aec31034a9.jpg", "/static/img/goodsImage/1113004/description/0f37cf001181988de0bb276ba58dbf49.jpg", "/static/img/goodsImage/1113004/description/ed32cc40bdae6579d986beda8c28a21c.jpg", "/static/img/goodsImage/1113004/description/be92c6175f4fee120e70cd8743255759.jpg", "/static/img/goodsImage/1113004/description/2dcfd5af9f2204f417ee873d9a70ce8e.jpg"],
		"inventory": [952, 513, 61, 924],
		"information": [{
			"attrName": "核定电压",
			"attrValue": "220V"
		}, {
			"attrName": "材质",
			"attrValue": "玻璃杯身：食品级钠钙玻璃刀头：食品级304不锈钢随行榨汁杯：Tritan棒冰模具：欧标硅胶"
		}, {
			"attrName": "售后服务及保修",
			"attrValue": "该产品从您收到之日算起，因生产厂家质量原因所引起的故障，【30】日内包退换，整机包修【1】年。仅限家庭使用。"
		}, {
			"attrName": "使用范围",
			"attrValue": "专杯专用，请勿混用。效果最佳：制作果蔬汁、奶昔、豆浆、碎冰；不可使用：绞肉，因玻璃内壁容易粘上肉沫，体验易受影响。打粉末应使用专用干磨杯。"
		}, {
			"attrName": "注意事项",
			"attrValue": "因产品属于小型搅拌机，故不能直接放入整只水果等进行搅拌，需要将水果等切开，去除较硬的果皮及果芯，并加入适量水，再进行搅拌。"
		}],
		"label": [{
			"title": "爆品",
			"type": "1"
		}],
		"manufacture": "WMF制造商",
		"sale": 772,
		"date": "1500341025041",
		"category": "餐厨",
		"subCategory": "厨房小电"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1113019,
		"price": 228,
		"topName": "黑凤梨 20寸PC膜拉链登机箱",
		"subName": "热卖9万只，网易人手1只",
		"shortDescription": ["3mm薄", "人体承重", "强度防冲", "耐热抗寒", "复合材质", "轻便出行"],
		"shortDescriptionImage": ["/static/img/goodsImage/1113019/shortdescriptionImage/0a49e6fb19d6f0febc089d2d47a110e3.png", "/static/img/goodsImage/1113019/shortdescriptionImage/933a174f40f1fb1d74faad143468b474.png", "/static/img/goodsImage/1113019/shortdescriptionImage/454a6e640abe4fd9f4af5fea293e3f47.png"],
		"headImage": ["/static/img/goodsImage/1113019/headImage/3108aaae80416b1cf27c3d7cc5661cea.png", "/static/img/goodsImage/1113019/headImage/764f36be8148b31e16a609236a9cf1e4.jpg", "/static/img/goodsImage/1113019/headImage/9100d1de4596d61d45e2b5ba276784fb.jpg", "/static/img/goodsImage/1113019/headImage/b1a88b4ea3b742fb0329a275f0913dcb.jpg", "/static/img/goodsImage/1113019/headImage/f2e724c0d4d67ec4d97db764d98b5c90.jpg"],
		"type": ["伯爵黑", "钢琴白", "肉桂粉", "孔灵蓝", "波尔多红", "星河银", "霞光紫", "湾岛蓝", "摩乐棕", "烟熏灰"],
		"chara": "10色可选",
		"description": ["/static/img/goodsImage/1113019/description/7fad18e9dc189bd758bea9c54bfa4a7c.jpg", "/static/img/goodsImage/1113019/description/56df928b05ce6344c2089311cbb97e93.jpg", "/static/img/goodsImage/1113019/description/1ce0f63f8dcf9680269382f720a5d618.jpg", "/static/img/goodsImage/1113019/description/8072c393d20ce3e55015dacf4781051d.jpg", "/static/img/goodsImage/1113019/description/e950f55300cb62b6a8863f59f0b71481.jpg", "/static/img/goodsImage/1113019/description/22943367671953f6b417a0cc339a8ce4.jpg", "/static/img/goodsImage/1113019/description/f186dbfda4c61aef404879ecbfd804b2.jpg", "/static/img/goodsImage/1113019/description/40a8b6a23ef08c44e6c7737bf6af04f2.jpg", "/static/img/goodsImage/1113019/description/5de9e7d3b5b5ca08ebab315d76ac78af.jpg", "/static/img/goodsImage/1113019/description/04810b95f66539f35b7bc14ead77c94e.jpg", "/static/img/goodsImage/1113019/description/58110108440d15e7f6de63bd44e33791.jpg", "/static/img/goodsImage/1113019/description/571ff364a8574f06f2f3f21b96988430.jpg", "/static/img/goodsImage/1113019/description/2a9ea9848aec443fdc44838d953fb1ce.jpg", "/static/img/goodsImage/1113019/description/5c0dd0c92787d8a519fe8ccabebb5739.jpg", "/static/img/goodsImage/1113019/description/d6b79f5b3a6539ce6a73fc733c53f99d.jpg", "/static/img/goodsImage/1113019/description/c1558a820fa6e07e881fd4330cef05ca.jpg", "/static/img/goodsImage/1113019/description/43de118bafee61e256d97a0c124640c5.jpg", "/static/img/goodsImage/1113019/description/18761153b6f8c6a4f9bc327b8c68137b.jpg", "/static/img/goodsImage/1113019/description/7c056db867158f4b70d0a470bc9ebf1c.jpg", "/static/img/goodsImage/1113019/description/abb612913d91958194d026130db0f23a.jpg", "/static/img/goodsImage/1113019/description/913a1a3ee5a97e49cf84b004f28ad12b.jpg", "/static/img/goodsImage/1113019/description/e3666d7c8f3e409360d91c8f2494be68.jpg", "/static/img/goodsImage/1113019/description/1e974cba90b73fe63afef0069189381c.jpg", "/static/img/goodsImage/1113019/description/2d4970d1f3ab581867d8e5293888b461.jpg", "/static/img/goodsImage/1113019/description/655b6d5b00a46ca2f96c6fa1fe6944f9.jpg", "/static/img/goodsImage/1113019/description/74b7ca92eb36d004e8f7199e7c7a9dc9.jpg", "/static/img/goodsImage/1113019/description/52b89cbbc774f8a1a7a26ed64072e8ba.jpg", "/static/img/goodsImage/1113019/description/22844d33aae845c87e15a36045b64a99.jpg", "/static/img/goodsImage/1113019/description/9c8ede237ca0364b053d1f81c4ab9866.jpg", "/static/img/goodsImage/1113019/description/996515abf35fc12bdb2488e630f94fe0.jpg", "/static/img/goodsImage/1113019/description/695e48696f7cf7c316284975cbd77c31.jpg", "/static/img/goodsImage/1113019/description/2a57843c3484c42bed3930bbd4cc7799.jpg", "/static/img/goodsImage/1113019/description/052f0e8b9d47b14c5a9ce55c9d80b850.jpg", "/static/img/goodsImage/1113019/description/f255c49342dd09185b6dfe8b37724bd8.jpg", "/static/img/goodsImage/1113019/description/b9c1480c56fd6283447a260dbda28a71.jpg", "/static/img/goodsImage/1113019/description/88205f39b45873e45398b1c435fbb59c.jpg", "/static/img/goodsImage/1113019/description/8eae0ff68c1bff868932b0fbe7fdbdf5.jpg", "/static/img/goodsImage/1113019/description/8a3b6dc9296106ce0c5de98c0e84f77e.jpg", "/static/img/goodsImage/1113019/description/337b1b92f17ff824f77431528d1a2f02.jpg", "/static/img/goodsImage/1113019/description/546f8161167cb3a3790b54326b751ac0.jpg", "/static/img/goodsImage/1113019/description/59294806622792a336f1d36ee9100ba1.jpg", "/static/img/goodsImage/1113019/description/fdd42bd9a591bb82dc8a128177ec783a.jpg", "/static/img/goodsImage/1113019/description/19c0c776f2d7abb9a7f5c775a8d6b5aa.jpg", "/static/img/goodsImage/1113019/description/fe0100772f220c05208bb60d959cb87d.jpg", "/static/img/goodsImage/1113019/description/dca35ffce60a1586b9c6ee4fcae70d0d.jpg", "/static/img/goodsImage/1113019/description/cf0bb8ccad14120e9c006b4478341796.jpg", "/static/img/goodsImage/1113019/description/b1253876476b9a5910b744dab0463e35.jpg", "/static/img/goodsImage/1113019/description/6902759061a2d46d4866926f4f5dbf77.jpg", "/static/img/goodsImage/1113019/description/ff206317d64221e73c54aa7b2d3f670b.jpg", "/static/img/goodsImage/1113019/description/bca1e3c0a7dbbe322993abb07263fe93.jpg", "/static/img/goodsImage/1113019/description/d9ea73274c0c8b3fa68fcc9660967900.jpg", "/static/img/goodsImage/1113019/description/7d736e5b5cae3e8954625aed1930c150.jpg", "/static/img/goodsImage/1113019/description/c4f7596fe992e7332426fca784e4a376.jpg", "/static/img/goodsImage/1113019/description/62f9c0d77ca6064728fea2e820dc7974.jpg", "/static/img/goodsImage/1113019/description/7f352346b3640c397159adf20f835842.jpg", "/static/img/goodsImage/1113019/description/b1f3ba5cfda4a35f811e6c260fa9a1a0.jpg", "/static/img/goodsImage/1113019/description/d197a8b52cff4856bbb3e24377de1f37.jpg", "/static/img/goodsImage/1113019/description/064bd904a6ce9c0a44d34a147c2d49bc.jpg", "/static/img/goodsImage/1113019/description/efb1062bd4a4f849ef3e8568b5973502.jpg", "/static/img/goodsImage/1113019/description/bdc51a0097a9538bb4ceee8c20e88aea.jpg", "/static/img/goodsImage/1113019/description/4437df47cc2ca49256fab929d56565ae.jpg", "/static/img/goodsImage/1113019/description/a047dff36d5cf77fe5874b95fc91baa2.jpg", "/static/img/goodsImage/1113019/description/ce05659906444ab45d1fef0afebe72dc.jpg", "/static/img/goodsImage/1113019/description/3e82767e3f3a729955cb40a3eb0a7f9b.jpg", "/static/img/goodsImage/1113019/description/5c1e941978a1ff943bc6f041c3b793f9.jpg", "/static/img/goodsImage/1113019/description/cbabfdb3dff0ceb2241883797a276d25.jpg", "/static/img/goodsImage/1113019/description/ea70772cabd44e4fb9c1349abcff6267.jpg", "/static/img/goodsImage/1113019/description/b33ff8ac59209e0f8a4a715acbfdea9c.jpg", "/static/img/goodsImage/1113019/description/ec1b2596ace0e3cd3ecfa48e3a0b42c7.jpg", "/static/img/goodsImage/1113019/description/8f869bd861e0dc875b5c8afc61479ce6.jpg", "/static/img/goodsImage/1113019/description/28555bc0afb095009033932254c27c04.jpg", "/static/img/goodsImage/1113019/description/b74561538cee2d7977d69293b5977199.jpg", "/static/img/goodsImage/1113019/description/13dcd50515bd3b6fc5632862f0931acf.jpg", "/static/img/goodsImage/1113019/description/f04a0599e6c5218b5529674a2fb9b8b7.jpg", "/static/img/goodsImage/1113019/description/b8064d64dbb04ed7f314be1ce6f3c22a.jpg", "/static/img/goodsImage/1113019/description/7c92b88fd3d22a1a703f2cf5fb9462c8.jpg", "/static/img/goodsImage/1113019/description/e5ce994e017c6c985adc7fe64234d70d.jpg", "/static/img/goodsImage/1113019/description/cd843a7194aed178fcdf718a92c9f2f2.jpg", "/static/img/goodsImage/1113019/description/bee23e6feb3793125c99da240602052f.jpg", "/static/img/goodsImage/1113019/description/90c6e2628a81bc16d334f77313b99793.jpg", "/static/img/goodsImage/1113019/description/9e0235cceadda220d553575c72e9d08b.jpg", "/static/img/goodsImage/1113019/description/3f23648c4067fea02635a8eaa588eb6f.jpg", "/static/img/goodsImage/1113019/description/33ba4672d269787392a73805ef344b18.jpg"],
		"inventory": [796, 904, 317, 467, 577, 417, 226, 375, 524, 613],
		"information": [{
			"attrName": "容积",
			"attrValue": "51L"
		}, {
			"attrName": "自重",
			"attrValue": "3.15KG"
		}, {
			"attrName": "退换政策",
			"attrValue": "一年保修，30天保退"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "新秀丽制造商",
		"sale": 256,
		"date": "1500341028859",
		"category": "配件",
		"subCategory": "行李箱"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1030013,
		"price": 499,
		"topName": "牛皮商务公文包",
		"subName": "精良皮质，气度展现",
		"shortDescription": ["优质牛皮", "光泽隐现", "5个空间", "有序置物", "极简设计", "一包双用"],
		"shortDescriptionImage": ["/static/img/goodsImage/1030013/shortdescriptionImage/889734794c56203daa18934ef77d0ff5.png", "/static/img/goodsImage/1030013/shortdescriptionImage/3c596a177d0caace65306cc38eed55e6.png", "/static/img/goodsImage/1030013/shortdescriptionImage/b6aae6800b237961294972bfbd60753b.png"],
		"headImage": ["/static/img/goodsImage/1030013/headImage/19257841af50287957e8b5a35615a3ed.png", "/static/img/goodsImage/1030013/headImage/0f05a33692d27966b3cd00e6c8bb9c99.jpg", "/static/img/goodsImage/1030013/headImage/042d2f0b780ec30b9b1e9dac6ec6520f.jpg", "/static/img/goodsImage/1030013/headImage/9ae2f5d2d219cb59c2769fce4a76f060.jpg", "/static/img/goodsImage/1030013/headImage/b9482b919931e7b8cfdda7a8e79f0dd0.jpg"],
		"type": ["黑色"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1030013/description/1b3df55e3ba502143cdab534e8d8ced1.jpg", "/static/img/goodsImage/1030013/description/75ed73a837f675a19a7d8d7f1d976d78.jpg", "/static/img/goodsImage/1030013/description/60366d3d36d2471ee1963f6d697328fb.jpg", "/static/img/goodsImage/1030013/description/b0bf9bc7861619f2a4f971ff2fa75812.jpg", "/static/img/goodsImage/1030013/description/6f870c4a81603c5b0472f1c50fe47df9.jpg", "/static/img/goodsImage/1030013/description/de52356d19db948dce34b118cf6653c2.jpg", "/static/img/goodsImage/1030013/description/1af0623bb007ae2b22a34756c22b0ed1.jpg", "/static/img/goodsImage/1030013/description/ef64e8dee689cf996cc91c663b889fdd.jpg", "/static/img/goodsImage/1030013/description/dcfec2d3c0a23ceee99ed39bf0f77597.jpg", "/static/img/goodsImage/1030013/description/3b14fa34291ad72f98422168db659fa8.jpg", "/static/img/goodsImage/1030013/description/1a57d9cbf2d3debe647678632a12b80b.jpg", "/static/img/goodsImage/1030013/description/463eab1586596dc380bc83071242148b.jpg", "/static/img/goodsImage/1030013/description/1dfa04aa2f18c8e5e26a6e0fc9dc434b.jpg", "/static/img/goodsImage/1030013/description/37868a9f11b07055337e8e00f2887594.jpg", "/static/img/goodsImage/1030013/description/e5233d14758fa8bf6a5ea886a35c5199.jpg", "/static/img/goodsImage/1030013/description/a301869e22453647e7e084c282cfd52e.jpg", "/static/img/goodsImage/1030013/description/72c573b52bc144dc1abd9c9ba375189b.jpg", "/static/img/goodsImage/1030013/description/f71fd4e8b3b8c731c78b9804fdba57b2.jpg", "/static/img/goodsImage/1030013/description/a657f9d5d0aac0726a56c2774d98f81f.jpg", "/static/img/goodsImage/1030013/description/ab4a08e3a7a79366e1c628e5727df51e.jpg", "/static/img/goodsImage/1030013/description/6ad4a5c2371b24cd613a50303b2bc3b7.jpg", "/static/img/goodsImage/1030013/description/259d13e6629d90de7e6be7a457bc9655.jpg", "/static/img/goodsImage/1030013/description/827b60af758dcb6d24c181a3082aba05.jpg", "/static/img/goodsImage/1030013/description/244af6588141ef86b3c7313ed9562ff3.jpg", "/static/img/goodsImage/1030013/description/4473b9c24348fab04caddf5b875ad670.jpg", "/static/img/goodsImage/1030013/description/45b1a3418c20e90549848422591b77d7.jpg", "/static/img/goodsImage/1030013/description/7c9ebc10ef151dc088f179fa470fef10.jpg", "/static/img/goodsImage/1030013/description/97cc2e87f8251979c9fcd281cc73ca2c.jpg", "/static/img/goodsImage/1030013/description/6c5a4eb8e7f77aa502d169d708308a8b.jpg", "/static/img/goodsImage/1030013/description/bb95f4113794560864a52c421230ea18.jpg", "/static/img/goodsImage/1030013/description/4ce8f74a327beddb51ee78e926abcfd9.jpg", "/static/img/goodsImage/1030013/description/58318637bb05f760929853309be1b00d.jpg", "/static/img/goodsImage/1030013/description/de5808381194eabf18601bf4a9106608.jpg", "/static/img/goodsImage/1030013/description/931d3b290291d161e95a4a80cf16a5e2.jpg", "/static/img/goodsImage/1030013/description/fb35fb5606afcea0bbc6fd516be59bd8.jpg", "/static/img/goodsImage/1030013/description/151b76b8f3a1dc0546b0407c55e9cf30.jpg", "/static/img/goodsImage/1030013/description/96861c08c4163a681f5c985a8b15402f.jpg", "/static/img/goodsImage/1030013/description/244f1fdcb1cbc3e9dffb610f33aa3768.jpg", "/static/img/goodsImage/1030013/description/846db9062c40a19b5ddc483198eae66b.jpg", "/static/img/goodsImage/1030013/description/62469d09e1b81a0f8866df7c0157e65c.jpg", "/static/img/goodsImage/1030013/description/661fce168494118f054fbf355f9811a9.jpg", "/static/img/goodsImage/1030013/description/b344853f28184f1b5683a5a016e424bf.jpg", "/static/img/goodsImage/1030013/description/f62565962a5ee037af383a772c6c6f89.jpg", "/static/img/goodsImage/1030013/description/de23efcd32660220f335230cf5d30428.jpg", "/static/img/goodsImage/1030013/description/08322ec1912f9b49c41355c3b65def77.jpg"],
		"inventory": [910],
		"information": [{
			"attrName": "颜色",
			"attrValue": "黑色"
		}, {
			"attrName": "重量",
			"attrValue": "1kg"
		}, {
			"attrName": "尺寸",
			"attrValue": "41×30×8cm"
		}, {
			"attrName": "注意事项",
			"attrValue": "1.五金需防水；2.皮质防压、防暴晒、防刮、防潮；3.禁止接触化学用品；4.定期皮具专用油保养。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "Coach制造商",
		"sale": 494,
		"date": "1500341033179",
		"category": "配件",
		"subCategory": "功能箱包"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1197008,
		"price": 369,
		"topName": "多功能商务双肩包",
		"subName": "17个功能分区，内置分层收纳",
		"shortDescription": ["双股尼龙", "防泼耐磨", "17储位", "功能性强", "S型肩带", "透气减压"],
		"shortDescriptionImage": ["/static/img/goodsImage/1197008/shortdescriptionImage/6872dcdbd7f03ed07ff1594f0c0d46dc.jpg", "/static/img/goodsImage/1197008/shortdescriptionImage/b10256e5bcc972c262f73fc59f4364ae.jpg", "/static/img/goodsImage/1197008/shortdescriptionImage/02fa3db0a4fd4b28a5d2c45a78ab3a2a.jpg"],
		"headImage": ["/static/img/goodsImage/1197008/headImage/70314c9f9159a36683c98a322d4bfef4.png", "/static/img/goodsImage/1197008/headImage/bb97185dfe66aff789df693e89343b3e.jpg", "/static/img/goodsImage/1197008/headImage/1cb8480839e440401b06787d63638369.jpg", "/static/img/goodsImage/1197008/headImage/7100aa0571984a3561ef48af65da654e.jpg", "/static/img/goodsImage/1197008/headImage/195f0a16d97ab53453b53798b51131db.jpg"],
		"type": ["黑色"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1197008/description/a30073e21bd50851c47b091a24eae2b3.jpg", "/static/img/goodsImage/1197008/description/2ae43322722989259037c79f7c8b4633.jpg", "/static/img/goodsImage/1197008/description/24c37a5e440d3138c4d152e8af35589c.jpg", "/static/img/goodsImage/1197008/description/b36a0f32b7d37a11a54753ff080705fc.jpg", "/static/img/goodsImage/1197008/description/f6714952fdf7c32086e8a8077c7c09d8.jpg", "/static/img/goodsImage/1197008/description/8aabf6fdf5334cd64ae9ef13e17cd8a9.jpg", "/static/img/goodsImage/1197008/description/2b4cff1f07e22bc6ab3ddf3cc5b7c9ee.jpg", "/static/img/goodsImage/1197008/description/8f57ac42b24373b164ab6954cdb10c79.jpg", "/static/img/goodsImage/1197008/description/ea207048b1b0d27a65a5cdea68631764.jpg", "/static/img/goodsImage/1197008/description/45895b71fea4703bb16a8b6a7b6032d2.jpg", "/static/img/goodsImage/1197008/description/ee3e9cf6410e744725e4964203ea6de0.jpg", "/static/img/goodsImage/1197008/description/f3a86d746bdf483bc905140817953546.jpg", "/static/img/goodsImage/1197008/description/7d5a9b0c313b6f957893816e8b1dc41a.jpg", "/static/img/goodsImage/1197008/description/86552df2deae117811b29213f31148e5.jpg", "/static/img/goodsImage/1197008/description/9dcc9cb868fd326e0256c94e28d74f97.jpg", "/static/img/goodsImage/1197008/description/47140f9bc896fe3bb90937e5ab4e2a25.jpg", "/static/img/goodsImage/1197008/description/00b0300aa6c868381135002814e57380.jpg", "/static/img/goodsImage/1197008/description/bf6f3db0f8e2fdc26ed0b3c21c77d616.jpg", "/static/img/goodsImage/1197008/description/31ffbdce97fefb6a3174a28724c3ee00.jpg", "/static/img/goodsImage/1197008/description/e13fd8a4cc87c30ecfd7995d70fb11e5.jpg", "/static/img/goodsImage/1197008/description/ed4fc0e60fa61ef1b42841defd2ba46a.jpg", "/static/img/goodsImage/1197008/description/1698e430f2aba5b8fa9b199ba8eccefe.jpg", "/static/img/goodsImage/1197008/description/5a0738048472ce38d4695aae5736d92a.jpg", "/static/img/goodsImage/1197008/description/1555f874b3e23a5c7ef231b2651e8b08.jpg", "/static/img/goodsImage/1197008/description/de4c2d26facbe68b0ccc4ee2c939952f.jpg", "/static/img/goodsImage/1197008/description/4e0a3fa645ea70d6b4261a5a21bc4b32.jpg", "/static/img/goodsImage/1197008/description/2a91bbf8ed7a3a39f37de05b9ac81945.jpg", "/static/img/goodsImage/1197008/description/8c12a516d126bd6a253d9d210b9987e2.jpg", "/static/img/goodsImage/1197008/description/b0936e98df28b83f05fcba42c8135940.jpg", "/static/img/goodsImage/1197008/description/204769ce8317b6568e6f80b582c71a5b.jpg", "/static/img/goodsImage/1197008/description/78bed86e8227b66c8b1512b5270c3641.jpg", "/static/img/goodsImage/1197008/description/93873d8832b122f5a7f0a4d4190722b4.jpg", "/static/img/goodsImage/1197008/description/599df4c96b62a322f25188fb94cb9542.jpg", "/static/img/goodsImage/1197008/description/2679e8d724b3039a117807cafd7c92a9.jpg", "/static/img/goodsImage/1197008/description/8ea98363b95afec04518b14b5ece37bd.jpg", "/static/img/goodsImage/1197008/description/e42460e759d5a8250e94bb43bfd3c44e.jpg", "/static/img/goodsImage/1197008/description/b07a0697ac93e47d424dace6c77777bc.jpg", "/static/img/goodsImage/1197008/description/4b41f7b8a6cfb67e72778e7272e1856b.jpg", "/static/img/goodsImage/1197008/description/2a79eb9b09050f9260340b33e0918c0a.jpg", "/static/img/goodsImage/1197008/description/4ee23334edc7019f9b49b47d4e8f7803.jpg", "/static/img/goodsImage/1197008/description/f0a681ad89534c4e5ec1b33c4509f12b.jpg", "/static/img/goodsImage/1197008/description/96d3efb875956523f86053f5475b2478.jpg", "/static/img/goodsImage/1197008/description/8a48b02f1468c1c9692d7a8326c572fe.jpg", "/static/img/goodsImage/1197008/description/9d70e44519165302625f2b6665977868.jpg", "/static/img/goodsImage/1197008/description/914f9710ccff0fcc767bb0200e3a7bd5.jpg", "/static/img/goodsImage/1197008/description/4a91fd4c17513586f01ae6aa81621c48.jpg", "/static/img/goodsImage/1197008/description/b8c1d0081f8f9f281e111ac124d0b2ac.jpg", "/static/img/goodsImage/1197008/description/5861d0ee4b502ff58967833b3964bdd8.jpg", "/static/img/goodsImage/1197008/description/8152dd9b07ed21217976dfeeedc2ccb2.jpg", "/static/img/goodsImage/1197008/description/4b8957904c42967f4c9d5489104f2ac3.jpg", "/static/img/goodsImage/1197008/description/5d21965ec065ff633b282b818f0297f7.jpg", "/static/img/goodsImage/1197008/description/796be21b3aaa13720a3f882f8a9deffa.jpg", "/static/img/goodsImage/1197008/description/346170132153d6c3afb351016a4757f8.jpg", "/static/img/goodsImage/1197008/description/86041dd6c8dac0fbc24156394ba53f4b.jpg", "/static/img/goodsImage/1197008/description/e4e75fdc8c9850fe2662573914781222.jpg", "/static/img/goodsImage/1197008/description/fd0b9cd877695929c9623636884f6be3.jpg", "/static/img/goodsImage/1197008/description/9ec338b10a4b8f0a66161d2ab7f2e5ef.jpg", "/static/img/goodsImage/1197008/description/8eae17e888f2d79596d8f94c1334c3c7.jpg", "/static/img/goodsImage/1197008/description/9bfddd4d2831d53b0930be948daca74c.jpg", "/static/img/goodsImage/1197008/description/5dd32aa98a4d68a13c0d55e6dfb3ef04.jpg"],
		"inventory": [160],
		"information": [{
			"attrName": "容量",
			"attrValue": "45L"
		}, {
			"attrName": "重量",
			"attrValue": "1.48kg"
		}],
		"label": [{
			"title": "新品",
			"type": "2"
		}, {
			"title": "APP专享价",
			"type": "2"
		}],
		"manufacture": "新秀丽制造商",
		"sale": 293,
		"date": "1500341036861",
		"category": "配件",
		"subCategory": "双肩包"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1147029,
		"price": 319,
		"topName": "鱼子酱纹 斜挎包",
		"subName": "仅售供应商建议价的1/4",
		"shortDescription": ["菱形格纹", "时尚经典", "鱼子酱纹", "复古包扣", "小巧包型", "有序置物"],
		"shortDescriptionImage": ["/static/img/goodsImage/1147029/shortdescriptionImage/8bc0134384f51224680a420f961654b7.jpg", "/static/img/goodsImage/1147029/shortdescriptionImage/8cd6fb53eb5d86ec5a3bf3a55a1c5c38.jpg", "/static/img/goodsImage/1147029/shortdescriptionImage/14aec5a78d103ab68859172e27843674.jpg"],
		"headImage": ["/static/img/goodsImage/1147029/headImage/b55ab4e153491ec9a9725a26f4c99744.png", "/static/img/goodsImage/1147029/headImage/1761e4474acf791b2aff7d65a6fc668a.jpg", "/static/img/goodsImage/1147029/headImage/bfaec3242d4ae40177d2b942fa1f9147.jpg", "/static/img/goodsImage/1147029/headImage/7f5ffe810a933cd035b436c7f63e7117.jpg", "/static/img/goodsImage/1147029/headImage/e4124c5d7d30b720a80e54227d05d86d.jpg"],
		"type": ["黑色"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1147029/description/028aab2c04faa31e8b47cafdc19058cb.jpg", "/static/img/goodsImage/1147029/description/b957d08deac57b3a1839ecd7f20dfad3.jpg", "/static/img/goodsImage/1147029/description/dc2a275e5a3683900ca2db910fb24165.jpg", "/static/img/goodsImage/1147029/description/2baa334abd803014d2263715bc1f17c0.jpg", "/static/img/goodsImage/1147029/description/5c4c555c6b1fc10470cd880639e52a92.jpg", "/static/img/goodsImage/1147029/description/eb3118c2a5b0cfbc92da1e1527e34f60.jpg", "/static/img/goodsImage/1147029/description/f9ab6e91a5c9d1becc5ed0b694fa9872.jpg", "/static/img/goodsImage/1147029/description/936e68928ca30a23d9a8cec583de5534.jpg", "/static/img/goodsImage/1147029/description/6df77556cf87c09533b070e32d316949.jpg", "/static/img/goodsImage/1147029/description/c70d17f1a27cf625d01502728d466838.jpg", "/static/img/goodsImage/1147029/description/09d859cd4f7bf162e518accecea5e4b3.jpg", "/static/img/goodsImage/1147029/description/9300587c41071f089aab2285151a1e26.jpg", "/static/img/goodsImage/1147029/description/cee199f4cb3f4f976ff424d7decdd247.jpg", "/static/img/goodsImage/1147029/description/c67136f1d40ca88e83db0434cc500937.jpg", "/static/img/goodsImage/1147029/description/4b40505b1ce009808d3052bf5e76667d.jpg", "/static/img/goodsImage/1147029/description/904c0ccbdb0bf9105e3aad1edc545de3.jpg", "/static/img/goodsImage/1147029/description/bb5d2b61e70c69d4f28373161c8a5f61.jpg", "/static/img/goodsImage/1147029/description/270328dbf00186a1f8105efc33effb5f.jpg", "/static/img/goodsImage/1147029/description/20a93991c6603c2522f6fb4ef805be38.jpg", "/static/img/goodsImage/1147029/description/db61a91d5118b4526b81376eb4f5c50a.jpg", "/static/img/goodsImage/1147029/description/05fe656008375fbe3baddf4620e104b7.jpg", "/static/img/goodsImage/1147029/description/b889285db4c7b18ca9d1c3f483062d46.jpg", "/static/img/goodsImage/1147029/description/7c4e71675cc6e75e2bfddf74c727268d.jpg", "/static/img/goodsImage/1147029/description/6f961bcea31b5c581e223231857af5a1.jpg", "/static/img/goodsImage/1147029/description/f170fb4462188a07327d64288bf10e65.jpg", "/static/img/goodsImage/1147029/description/b96686b3eb471442174bcf4d946ee0c2.jpg", "/static/img/goodsImage/1147029/description/d65aea90a050c9c42d5b89842ecb6571.jpg", "/static/img/goodsImage/1147029/description/640341ed7f9082972bccfe4f9306bbc7.jpg", "/static/img/goodsImage/1147029/description/0838c6e7567a2e5c91d3d038381b7430.jpg", "/static/img/goodsImage/1147029/description/b3df70a305db8ca1460991cc5181ab93.jpg", "/static/img/goodsImage/1147029/description/6e2224380e25487fc578bf6fcc024b50.jpg", "/static/img/goodsImage/1147029/description/507aae2acf87f5ade2fb3de86e717ba7.jpg", "/static/img/goodsImage/1147029/description/34dd37077d833933e17b24c7623f6304.jpg", "/static/img/goodsImage/1147029/description/8bf0c29a2155be20110d10e8a1388b99.jpg", "/static/img/goodsImage/1147029/description/f2b4a1da6f2674d6ff276071e37da8aa.jpg", "/static/img/goodsImage/1147029/description/be02df598e12054fadfa640479948301.jpg", "/static/img/goodsImage/1147029/description/36bb7ea469a006d0d7aea5e90b961e11.jpg", "/static/img/goodsImage/1147029/description/3038f19ef5a661765091f55ff840547f.jpg", "/static/img/goodsImage/1147029/description/b43fe2a49b98e01201dcc21a2d8683d4.jpg", "/static/img/goodsImage/1147029/description/ad1a0eeb1ceab80c2cecb414777b17e7.jpg"],
		"inventory": [197],
		"information": [{
			"attrName": "面料",
			"attrValue": "牛剖层移膜革"
		}, {
			"attrName": "里布",
			"attrValue": "100%棉"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "Alexander McQueen制造商",
		"sale": 84,
		"date": "1500341040355",
		"category": "配件",
		"subCategory": "单肩包"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1165033,
		"price": 269,
		"topName": "飞织袜套男/女休闲运动鞋",
		"subName": "飞织面料，运动深呼吸",
		"shortDescription": ["时尚潮范", "轻松驾驭", "飞织面料", "轻松透气", "减震鞋垫", "运动随心"],
		"shortDescriptionImage": ["/static/img/goodsImage/1165033/shortdescriptionImage/0653b6dd51123468d871193799127123.jpg", "/static/img/goodsImage/1165033/shortdescriptionImage/992c24f226d0c453305dec22624a4290.jpg", "/static/img/goodsImage/1165033/shortdescriptionImage/89720cf1dbb44090c0e789f2e023e4a0.jpg"],
		"headImage": ["/static/img/goodsImage/1165033/headImage/03b8e315503bc1cd97da65614c9e0e41.png", "/static/img/goodsImage/1165033/headImage/833eed7ff28cd7c733c3b49c168959ff.jpg", "/static/img/goodsImage/1165033/headImage/f521e6ba271f6ef2958ce5a4087d48f8.jpg", "/static/img/goodsImage/1165033/headImage/3629e12f49720f4dc4f90b2b95a7c826.jpg", "/static/img/goodsImage/1165033/headImage/38bce524b2a8e526d903b244feb44b35.jpg"],
		"type": ["白色", "黑色"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1165033/description/3157b026f90c90337af73b22177bde6a.jpg", "/static/img/goodsImage/1165033/description/6f10ce61b482e1e9e1dff9e0cd81cb36.jpg", "/static/img/goodsImage/1165033/description/4a8850efc95d57e9354fbc27419e08d6.jpg", "/static/img/goodsImage/1165033/description/5c95395470024b7bbfb77db412ab415d.jpg", "/static/img/goodsImage/1165033/description/1fd36f3ae348419f5c564bc4788bed80.jpg", "/static/img/goodsImage/1165033/description/15c5c603db97ab1db3316f019e3468c5.jpg", "/static/img/goodsImage/1165033/description/dc2ad6ecffb721f8d2388c796fe6d6b8.jpg", "/static/img/goodsImage/1165033/description/14a549fa249a344f1ef9f83953c21a30.jpg", "/static/img/goodsImage/1165033/description/513d79128e7288f6369305822fd40047.jpg", "/static/img/goodsImage/1165033/description/c79e3bb566b441d356614c79bab856ac.jpg", "/static/img/goodsImage/1165033/description/0cb9d2b6edb43b38f0cc3698a082634f.jpg", "/static/img/goodsImage/1165033/description/ed8ccd5fdcb16d6e48e098f474052354.jpg", "/static/img/goodsImage/1165033/description/2eaff444923e134e1206cd787b5d29e5.jpg", "/static/img/goodsImage/1165033/description/adede783dfcc8b60efbf95e5eed0b0af.jpg", "/static/img/goodsImage/1165033/description/9d97f52de46cfbf300c4cebed8d10151.jpg", "/static/img/goodsImage/1165033/description/5d53f30cffc7da88ef16715f99368c06.jpg", "/static/img/goodsImage/1165033/description/00ff0a2afc1ce315ee3734d1c3e928ea.jpg", "/static/img/goodsImage/1165033/description/23305e326c9b83b194fc78ded83f461e.jpg", "/static/img/goodsImage/1165033/description/a630b11f02358c703a7a9d2fb29bc172.jpg", "/static/img/goodsImage/1165033/description/5e8662d37816aec6806102fdb2fda24a.jpg", "/static/img/goodsImage/1165033/description/191590aa26b942d98e665af16e2d9286.jpg", "/static/img/goodsImage/1165033/description/7b2ceb48a194d42e03a811bb3372acfe.jpg", "/static/img/goodsImage/1165033/description/cca3a2a4093aae52ec1c2d0e3a428515.jpg", "/static/img/goodsImage/1165033/description/b9622cd4f0460ad9793f9d6c9d9ef489.jpg", "/static/img/goodsImage/1165033/description/ffa0aedd867c164d9a56ed1aee5a4b24.jpg", "/static/img/goodsImage/1165033/description/2e100f099d5fde9b33fd465e319e46bf.jpg", "/static/img/goodsImage/1165033/description/1ab96f67aa4076c727f6283351ae5ffd.jpg", "/static/img/goodsImage/1165033/description/b26c42bb7e1e56a5d8129e9bc15ed300.jpg", "/static/img/goodsImage/1165033/description/e591694335df388b1f4b7721b93a1236.jpg", "/static/img/goodsImage/1165033/description/f2bab167db8ece439618bf3d8949d10e.jpg", "/static/img/goodsImage/1165033/description/caac9d6d15ab2d87bfe66168c481fbc2.jpg", "/static/img/goodsImage/1165033/description/223c6d02ef03a5ae590a6b1f48325238.jpg", "/static/img/goodsImage/1165033/description/3bafaa643d1a329cf7845f8b93c934b3.jpg", "/static/img/goodsImage/1165033/description/0818c8a86ad09c65fb5f9a8a0802486b.jpg", "/static/img/goodsImage/1165033/description/06d3e29d1a1c5579c241b9de6ed74dbe.jpg", "/static/img/goodsImage/1165033/description/be369b5a858905468f1c9669e5575ece.jpg", "/static/img/goodsImage/1165033/description/c0438a31c69174d365d9c577bbf7d365.jpg", "/static/img/goodsImage/1165033/description/b816a2fd18bb86d68269feaa26a302fa.jpg", "/static/img/goodsImage/1165033/description/f1a01b60b01aaf6268d0a3b0a484ecec.jpg", "/static/img/goodsImage/1165033/description/9140aa301fc2634b06b4e3909a5de80e.jpg", "/static/img/goodsImage/1165033/description/e27074f96a59c4b14ed0a6555a589ce4.jpg", "/static/img/goodsImage/1165033/description/9b8feacad6916ad4a81dc2fb7e751d35.jpg", "/static/img/goodsImage/1165033/description/46ccf2ebb593ef0b19aa69dd089b2f6a.jpg", "/static/img/goodsImage/1165033/description/6cd989eddb3cfdbce6f12b2d9a18c47f.jpg", "/static/img/goodsImage/1165033/description/95e2b774f5e80e3d13651d500354847a.jpg", "/static/img/goodsImage/1165033/description/226589e5e7ce080d3a5e189df55b6a5c.jpg", "/static/img/goodsImage/1165033/description/d89453984eb6767c53489ca702eded05.jpg", "/static/img/goodsImage/1165033/description/36e02e85709457aeb22d73d67ff611d2.jpg", "/static/img/goodsImage/1165033/description/8a5747f9f2aadf18231e7fe222c22a57.jpg"],
		"inventory": [803, 214],
		"information": [{
			"attrName": "尺码",
			"attrValue": "女款：35码（225-鞋长22.5cm）；36码（230-鞋长23.0cm）；37码（235-鞋长23.5cm）；38码（240-鞋长24.0cm）；39码（245-鞋长24.5cm）；男款：39码（245，鞋长—24.5cm）；40码（250，鞋长—25.0cm）；41码（255，鞋长—25.5cm）；42码（260，鞋长—26.0cm），43码（265，鞋长—26.5cm）；44码（270，鞋长—27.0cm）"
		}, {
			"attrName": "材质",
			"attrValue": "帮面：织物外底：橡胶+EVA"
		}, {
			"attrName": "温馨提示",
			"attrValue": "袜套鞋由于设计需求，鞋口为弹性材质，初次穿着时会出现脚较难穿进的现象，请务必完全解开鞋带穿着。收到商品时请在地上铺垫A4纸进行试穿，一经落地，非品质问题，概不退换。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "Asics制造商",
		"sale": 69,
		"date": "1500341044317",
		"category": "配件",
		"subCategory": "男鞋"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1145015,
		"price": 139,
		"topName": "女款轻缓舒适健步鞋",
		"subName": "减震舒缓，移动的脚底按摩仪",
		"shortDescription": ["针织鞋面", "舒适透气", "295g", "零感轻便", "分体鞋底", "耐折防水"],
		"shortDescriptionImage": ["/static/img/goodsImage/1145015/shortdescriptionImage/a6f518302531f851374a223312f2c5f0.png", "/static/img/goodsImage/1145015/shortdescriptionImage/4668b131e7331ae76a7057a8fe6e68cc.png", "/static/img/goodsImage/1145015/shortdescriptionImage/befebff72699387277e0b8e086611978.png"],
		"headImage": ["/static/img/goodsImage/1145015/headImage/7f31b1f4ef8001b2ec65452fbf7595ad.png", "/static/img/goodsImage/1145015/headImage/3633b53688e7c2e7736e95b01f12c56f.jpg", "/static/img/goodsImage/1145015/headImage/16ca2dbcc3650c143991e1e23a8e78c9.jpg", "/static/img/goodsImage/1145015/headImage/42407930f5dd05a62f1c697e66e63343.jpg", "/static/img/goodsImage/1145015/headImage/c72b5923b8c10d32d60ccbc9a5888bab.jpg"],
		"type": ["灰色", "黑色"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1145015/description/ebcb64b6b10243cd169fd4ee4c165a2e.jpg", "/static/img/goodsImage/1145015/description/8c3164b1807e9693a6c44f14b0511f5a.jpg", "/static/img/goodsImage/1145015/description/a958ba82d2bef28ab0d815a5a8113851.jpg", "/static/img/goodsImage/1145015/description/74bb6521d8dbaa85119a8a7f22b3a09a.jpg", "/static/img/goodsImage/1145015/description/c1fea044dfa66b06d50c37f1ba4dee27.jpg", "/static/img/goodsImage/1145015/description/2501089caa2c2da1f89bc046ea052973.jpg", "/static/img/goodsImage/1145015/description/7653e48b450fa3313afe8fa175567b8e.jpg", "/static/img/goodsImage/1145015/description/ddc99b6e6545ba97e1d342610f422645.jpg", "/static/img/goodsImage/1145015/description/755470e764c06dfc30fa36f2a1d63cc1.jpg", "/static/img/goodsImage/1145015/description/c7a95e606cb4b1bd488abf85678c3af9.jpg", "/static/img/goodsImage/1145015/description/fca0ab9eb834eb91475c08cbefb38a92.jpg", "/static/img/goodsImage/1145015/description/e9eb245f02494b59fc0a548feb408321.jpg", "/static/img/goodsImage/1145015/description/2d812f439e4000d2e9fe568bde61dd8e.jpg", "/static/img/goodsImage/1145015/description/60aa168453cc11731db0eb804ba1778b.jpg", "/static/img/goodsImage/1145015/description/57206612e77887f0995e72e1a2c06e8c.jpg", "/static/img/goodsImage/1145015/description/285260a7c14187b5583c234abed56039.jpg", "/static/img/goodsImage/1145015/description/788cec461b7c297de44c0338cb43f9ac.jpg", "/static/img/goodsImage/1145015/description/cc7cefc0d50d398088595a6e6873fbd7.jpg", "/static/img/goodsImage/1145015/description/0312d677b5770306062536b5102f0d72.jpg", "/static/img/goodsImage/1145015/description/38248d66d01e0ecb6f4c9c9a62d42981.jpg", "/static/img/goodsImage/1145015/description/a7784e48d2a0ea8d0f79ae5224cca5c1.jpg", "/static/img/goodsImage/1145015/description/d340b675b6adcfc8482fd440171e640b.jpg", "/static/img/goodsImage/1145015/description/1fa3d4b61c1ddd2115de01187eb91886.jpg", "/static/img/goodsImage/1145015/description/a0496209b17b5755fcd89cf3cc5f1435.jpg", "/static/img/goodsImage/1145015/description/b38cd0918dbe428540fcdbb04b327757.jpg", "/static/img/goodsImage/1145015/description/f223acd03f2f730079521fee32ca7f35.jpg", "/static/img/goodsImage/1145015/description/9785ef2cafa45b4d32e647e16992f390.jpg", "/static/img/goodsImage/1145015/description/6ee7e54dfc58c63582be7d3b614feae1.jpg", "/static/img/goodsImage/1145015/description/eaae3428271c600bde14cb4a6ec9fbb3.jpg", "/static/img/goodsImage/1145015/description/e552628e5263c22de999f1e6b9abf073.jpg", "/static/img/goodsImage/1145015/description/d6695aaba122d93563b67cbbe2c74936.jpg", "/static/img/goodsImage/1145015/description/aff384212581c2a8aaacd199337bcb40.jpg", "/static/img/goodsImage/1145015/description/d7a7b7f5b7c28d0a33f9d4f75cdaffbf.jpg", "/static/img/goodsImage/1145015/description/7c8927de03bd0043110625571860fa24.jpg", "/static/img/goodsImage/1145015/description/d9adf6e9cebbe376b48fdeb5bb72d036.jpg", "/static/img/goodsImage/1145015/description/e31c3030507d6a80cb7fce712214fc4a.jpg", "/static/img/goodsImage/1145015/description/e0c9f1fbc594f70d3650debe279cbf13.jpg", "/static/img/goodsImage/1145015/description/cb1d285315e41c9c6bcb84dae96b8cb6.jpg", "/static/img/goodsImage/1145015/description/e015ebe1cdf718d460693e41b2ae95be.jpg", "/static/img/goodsImage/1145015/description/5936fb3cb2bc76501b878ccb6d74c20e.jpg", "/static/img/goodsImage/1145015/description/e99a17b4da27fe2dc85f00f8540ba988.jpg", "/static/img/goodsImage/1145015/description/71fec57d802b84bdad796f8f0ede2616.jpg", "/static/img/goodsImage/1145015/description/5f74c43420dd3e5d4787d2c1ce7047f6.jpg"],
		"inventory": [66, 903],
		"information": [{
			"attrName": "尺码",
			"attrValue": "35码（215，脚长—21.5cm）；36码（225，脚长—22.5cm）；37码（230，脚长—23.0cm）；38码（240，脚长—24.0cm）；39码（245，脚长—24.5cm）"
		}, {
			"attrName": "材质",
			"attrValue": "帮面：织物衬里：织物内垫：TPE外底：EVA"
		}, {
			"attrName": "温馨提示",
			"attrValue": "此款尺码偏小，建议脚背较高的用户较平常穿着拍大一码（例.平常36码-&gt;此款37码）"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "Skechers制造商",
		"sale": 585,
		"date": "1500341047826",
		"category": "配件",
		"subCategory": "女鞋"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1114010,
		"price": 19.9,
		"topName": "黑凤梨 玩趣彩虹四季拖鞋",
		"subName": "多彩轻盈，放松全身心",
		"shortDescription": ["EVA料", "柔软回弹", "轻盈立体", "轻便穿着", "凹凸纹理", "防滑保护"],
		"shortDescriptionImage": ["/static/img/goodsImage/1114010/shortdescriptionImage/4510cc086c8598b0e30303b32e37d35b.jpg", "/static/img/goodsImage/1114010/shortdescriptionImage/8a8a1b8feb77cc2b697defb5c151c7ca.jpg", "/static/img/goodsImage/1114010/shortdescriptionImage/d70a84e0f4524e59f059668518f37090.jpg"],
		"headImage": ["/static/img/goodsImage/1114010/headImage/bcaf6bbd497b40e76ca94414347be57b.png", "/static/img/goodsImage/1114010/headImage/b570367b2c6a071d95e3d3c9cdf37e96.jpg", "/static/img/goodsImage/1114010/headImage/b53d5b00bcd93453d2e8da7f073ed608.jpg", "/static/img/goodsImage/1114010/headImage/a591dcf69c2ce071ad128cbb38896679.jpg", "/static/img/goodsImage/1114010/headImage/eaa05237c115811a8e86ed857f290212.jpg"],
		"type": ["柠檬黄", "天空蓝", "薄荷绿", "樱花粉", "落叶黄", "宝石蓝", "水泥灰", "丛林绿", "深海蓝", "夜色黑"],
		"chara": "10色可选",
		"description": ["/static/img/goodsImage/1114010/description/8ad243c54cc76a6d0687ccea5a7817fa.jpg", "/static/img/goodsImage/1114010/description/3878470055af320d53cc449764265664.jpg", "/static/img/goodsImage/1114010/description/b00d2745428fcf10e3c7700d3a0d2960.jpg", "/static/img/goodsImage/1114010/description/fcf2fb06ecc26ba31cc1665b4f09fb95.jpg", "/static/img/goodsImage/1114010/description/e98de7014ceccc24821eb84aa1dda19a.jpg", "/static/img/goodsImage/1114010/description/dc74df47ba1a2934e4e1f4202546898f.jpg", "/static/img/goodsImage/1114010/description/3e27075d44428a8e56c90751cc101ab4.jpg", "/static/img/goodsImage/1114010/description/78d020c7868448cd595969977f889a7d.jpg", "/static/img/goodsImage/1114010/description/e29d320a0bd70aa5de46233d76dba53b.jpg", "/static/img/goodsImage/1114010/description/1427b1a80c216e73e3a64a6fa8f913b4.jpg", "/static/img/goodsImage/1114010/description/d9f5e52d38a2242b173c486231b1677d.jpg", "/static/img/goodsImage/1114010/description/9ed320992b2daa61559230f50559153a.jpg", "/static/img/goodsImage/1114010/description/ded8dd092c56fd6495b3628ca37075e0.jpg", "/static/img/goodsImage/1114010/description/a24ffc98ce854d710c6bd05836e3be14.jpg", "/static/img/goodsImage/1114010/description/0e3b0286466894fde44e71c18eae5475.jpg", "/static/img/goodsImage/1114010/description/d45231a9423d7338b9e69c098e9289aa.jpg", "/static/img/goodsImage/1114010/description/2c589a86d6e1a60694bd8e767a786811.jpg", "/static/img/goodsImage/1114010/description/076984c31ea39294cdc1922099321c69.jpg", "/static/img/goodsImage/1114010/description/eb1b73f457fa7c45ce0b611de54a1c17.jpg", "/static/img/goodsImage/1114010/description/c4c471a65d546b374c0e935fafdd043c.jpg", "/static/img/goodsImage/1114010/description/31fe55829c348d0d37b0eb278acfa221.jpg", "/static/img/goodsImage/1114010/description/28b1f85c7440b74c96ed433af8172623.jpg", "/static/img/goodsImage/1114010/description/e56775ca10a946b3e883b828fb17b43d.jpg", "/static/img/goodsImage/1114010/description/95881cbe18bf4f4be0851b3ede589da5.jpg", "/static/img/goodsImage/1114010/description/8372ed3a73642bec5a16e829991c7970.jpg", "/static/img/goodsImage/1114010/description/71187b198d54b82aa5ed21b73eaafb14.jpg", "/static/img/goodsImage/1114010/description/b533e877b27efa85dd4d4696d4684149.jpg", "/static/img/goodsImage/1114010/description/ad80ff6fa18ef64cdb2b2f5110352a8b.jpg", "/static/img/goodsImage/1114010/description/2950ac23fe4f6e5331db5503f3e47975.jpg", "/static/img/goodsImage/1114010/description/ac918e5f86f29b0f8bb6cd990063023d.jpg", "/static/img/goodsImage/1114010/description/41ae61d476f058880ea6be8d8f491e13.jpg", "/static/img/goodsImage/1114010/description/101fd15fb2520c20e1b76097ce0fb9b0.jpg", "/static/img/goodsImage/1114010/description/d2ba10b298fce52a60501d0e08b5c2d3.jpg", "/static/img/goodsImage/1114010/description/17096f88021a02bb11fe06e65343a4c3.jpg", "/static/img/goodsImage/1114010/description/40970d345bbf62faefaf11f689a6f4e7.jpg", "/static/img/goodsImage/1114010/description/a4b8e0a738c896ea344d57a83e99848f.jpg", "/static/img/goodsImage/1114010/description/ee3aeb1011facc318c18b716d18b9376.jpg", "/static/img/goodsImage/1114010/description/7a47ce2c61c6409857729ccf2310f9e9.jpg", "/static/img/goodsImage/1114010/description/d58f4ab309b9153a20b0ae59d9d9afbc.jpg", "/static/img/goodsImage/1114010/description/f14d8aad3f970462b3bfb301cde7a201.jpg", "/static/img/goodsImage/1114010/description/4986d7277595cadee091e521c1b810fb.jpg", "/static/img/goodsImage/1114010/description/e75dac6ea5a436a2ccd7cdc82a3bff2f.jpg", "/static/img/goodsImage/1114010/description/48f429b90dd74de1082b6cd04a697556.jpg", "/static/img/goodsImage/1114010/description/0e6e1889d356cf047f14b638c4786de8.jpg", "/static/img/goodsImage/1114010/description/eefe379766b6df003f5442b3052293ed.jpg", "/static/img/goodsImage/1114010/description/70ee8cd0860e751e2d0808614e209d1a.jpg", "/static/img/goodsImage/1114010/description/6b8e2a9566ec4ec720a247cbe4feedcc.jpg", "/static/img/goodsImage/1114010/description/619ed9a752e5138c8c3cdfb2ff02cd6f.jpg", "/static/img/goodsImage/1114010/description/5fae9f15f01e8f4bba8a078d293aecdf.jpg", "/static/img/goodsImage/1114010/description/280f38d9edf3560e08728e92a0be808f.jpg", "/static/img/goodsImage/1114010/description/e58dd93fe040d08b9f529254735274b6.jpg", "/static/img/goodsImage/1114010/description/085472003627abb922c1a58c4148d93e.jpg", "/static/img/goodsImage/1114010/description/965b95c2e147a1c37bd038915fd90fe3.jpg", "/static/img/goodsImage/1114010/description/33ed8fb557e99460eb3f61147aad8774.jpg", "/static/img/goodsImage/1114010/description/5721dadfd7301ed24e768f53225dc793.jpg", "/static/img/goodsImage/1114010/description/838577915df48af8094e60788e5a9aa6.jpg", "/static/img/goodsImage/1114010/description/ee004a4348ff4a0e0d942b0a22717faf.jpg", "/static/img/goodsImage/1114010/description/7b9692e6373be8a41c5b78958b64307f.jpg", "/static/img/goodsImage/1114010/description/c497a823292885b2ccd34fdc034915d7.jpg"],
		"inventory": [915, 904, 744, 828, 233, 485, 356, 437, 658, 874],
		"information": [{
			"attrName": "尺码",
			"attrValue": "36-37码（235，鞋长—23.5cm）;38-39码（245，鞋长—24.5cm）;41-42码（265，鞋长—26.5cm）;43-44码（275，鞋长—27.5cm）;45-46码（285，鞋长—28.5cm）"
		}, {
			"attrName": "材质",
			"attrValue": "EVA"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.鞋底突起的小点为注塑工艺的注塑口，并非瑕疵2.由于储存时包装一直处于密闭状态，打开瞬间会有轻微气味，敞开后会散去，为EVA正常属性，对人体不会造成任何影响"
		}],
		"label": [{
			"title": "爆品",
			"type": "1"
		}],
		"manufacture": "Crocs制造商",
		"sale": 219,
		"date": "1500341052140",
		"category": "配件",
		"subCategory": "拖鞋"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1127001,
		"price": 59,
		"topName": "尖角斜纹绸真丝细长巾",
		"subName": "100%真丝斜纹绸，柔滑垂顺",
		"shortDescription": ["轻薄柔软", "细腻透气", "数码印花", "色彩饱满", "精细编织", "柔而有骨"],
		"shortDescriptionImage": ["/static/img/goodsImage/1127001/shortdescriptionImage/10b54a38141544e8038699cfc337741f.png", "/static/img/goodsImage/1127001/shortdescriptionImage/1da17313d838d60d2846fda1fa329774.png", "/static/img/goodsImage/1127001/shortdescriptionImage/8a56037fca54c008c92bd5a7bc77aa67.png"],
		"headImage": ["/static/img/goodsImage/1127001/headImage/59ef01a51b295e8b0049c06c81e84c25.png", "/static/img/goodsImage/1127001/headImage/47ee29700bd1d2c9927f65ac864d6450.jpg", "/static/img/goodsImage/1127001/headImage/e23d231f34160bf41824cadc1eace37c.jpg", "/static/img/goodsImage/1127001/headImage/169063d13f6d2b5ed3b1749da8d773d1.jpg", "/static/img/goodsImage/1127001/headImage/0a26b9d1f5b05c6862bf8e8629094f6e.jpg"],
		"type": ["黑裸拼色"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1127001/description/42b404f8097cffe759569d128b110cdd.jpg", "/static/img/goodsImage/1127001/description/e6bc8b66f155d052bda0b249a8716dbd.jpg", "/static/img/goodsImage/1127001/description/53169ba56f35c8758d475351aba28615.jpg", "/static/img/goodsImage/1127001/description/3a29c9f6bc087007c498218cd6852633.jpg", "/static/img/goodsImage/1127001/description/b85013719821bec8d4266afa1c987ba6.jpg", "/static/img/goodsImage/1127001/description/120d4d237574de824658b768de35c586.jpg", "/static/img/goodsImage/1127001/description/c8f02ce33b80f44ba2accfab0f6445e8.jpg", "/static/img/goodsImage/1127001/description/62fe13f0dc8d5ea8d4c2425a2dccc512.jpg", "/static/img/goodsImage/1127001/description/4016f0fef9b71ad1d05f351e8979dce0.jpg", "/static/img/goodsImage/1127001/description/dd4e19fdc5981d9c7065f6be2e27658e.jpg", "/static/img/goodsImage/1127001/description/946695809e99931147e195bf3a9bf91b.jpg", "/static/img/goodsImage/1127001/description/fde1745ba35c1ba7b235a6bb00e9b7ad.jpg", "/static/img/goodsImage/1127001/description/47b77ddb7d7a697370742fc98a0d7b15.jpg", "/static/img/goodsImage/1127001/description/59fc30ae149b82291d50b29b16c48c9d.jpg", "/static/img/goodsImage/1127001/description/a08fe02f569329d60e0f57838f2e08c4.jpg", "/static/img/goodsImage/1127001/description/b15455f5d77a8fd1808a3b367de5521d.jpg", "/static/img/goodsImage/1127001/description/3431a3c2d02d36bae9653e836e13cd05.jpg", "/static/img/goodsImage/1127001/description/10102547271f0ee4c4373dcd430e2cd1.jpg", "/static/img/goodsImage/1127001/description/74abfe11e53d2a5bc24f6444c4fddd89.jpg", "/static/img/goodsImage/1127001/description/7d662379dba9503ba8bd7f049a697d5a.jpg", "/static/img/goodsImage/1127001/description/2ebb4f3b678481443110325249d5ba60.jpg", "/static/img/goodsImage/1127001/description/200067a58b2f3ce59e2f77208c5c31c7.jpg", "/static/img/goodsImage/1127001/description/c9b79b01bf77445a145606daac5daf95.jpg", "/static/img/goodsImage/1127001/description/6816bfb7903a6b15f5d9ce813e4241db.jpg", "/static/img/goodsImage/1127001/description/123813a8a3f7596e2e139e55ed252cab.jpg", "/static/img/goodsImage/1127001/description/b003dcf370bbe2f6022f80363671c380.jpg", "/static/img/goodsImage/1127001/description/b56eee990b64ed3bb86dc03d5a4a4371.jpg", "/static/img/goodsImage/1127001/description/7e2bb67d2b4a62995e8a698e3f330b7c.jpg", "/static/img/goodsImage/1127001/description/46fe77614048428d064edea1abcd191c.jpg", "/static/img/goodsImage/1127001/description/6012edec6ffab5a200e0a249f377f908.jpg", "/static/img/goodsImage/1127001/description/a5c6017ac2146a098375d0c15f2b9211.jpg", "/static/img/goodsImage/1127001/description/11a642173a02f91a40d71ad21beb0ec2.jpg", "/static/img/goodsImage/1127001/description/74355672e2ca6212ea2bd0142de903fa.jpg", "/static/img/goodsImage/1127001/description/b5a1bc98e2096b727a5f23ff73ebf0d8.jpg", "/static/img/goodsImage/1127001/description/803d9c4f3d5f27ffbb27458e0ecbf46c.jpg", "/static/img/goodsImage/1127001/description/33de450f6713af9cd16708f252f88456.jpg", "/static/img/goodsImage/1127001/description/0aa6682f489dc5bc7514412e965af41e.jpg", "/static/img/goodsImage/1127001/description/6fb764d5cd9008f8d4f838ddd07fcc9e.jpg", "/static/img/goodsImage/1127001/description/4605f6c69fc1454cb49c9d9e0ecd4fc3.jpg", "/static/img/goodsImage/1127001/description/e6fbce9e21e6995e4d887ff1dcc60c62.jpg", "/static/img/goodsImage/1127001/description/60d2dca8fca0a355b99a6bd9567f1d07.jpg", "/static/img/goodsImage/1127001/description/dba8986c59d8b3eabf15ef638462d27f.jpg", "/static/img/goodsImage/1127001/description/11ff8f943d88c9ba33297acda0d08e32.jpg", "/static/img/goodsImage/1127001/description/a5e5718713a94e433ec0cc2edab51675.jpg", "/static/img/goodsImage/1127001/description/f6253a029837ec6c4a630cf96899db1d.jpg", "/static/img/goodsImage/1127001/description/bea84df842130ed78f80586e7fee5394.jpg", "/static/img/goodsImage/1127001/description/1e01cd1341a50cac910becf0deb35295.jpg", "/static/img/goodsImage/1127001/description/9d986b0cac885b53e4414e4a8f8771f4.jpg"],
		"inventory": [733],
		"information": [{
			"attrName": "材质",
			"attrValue": "100%桑蚕丝"
		}, {
			"attrName": "尺寸",
			"attrValue": "102cm*10cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "FZ/T 43014-2008"
		}, {
			"attrName": "注意事项",
			"attrValue": "1.真丝制品请注意不要被尖锐物品刮刺；2.建议试用丝质织物专用洗涤剂清洗。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 868,
		"date": "1500341055447",
		"category": "配件",
		"subCategory": "围巾件套"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1185008,
		"price": 99,
		"topName": "轻质方形男式墨镜",
		"subName": "Fendi制造商，偏光镜片",
		"shortDescription": ["超轻质地", "减轻负担", "偏光镜片", "佩戴舒适", "宽边镜框", "修饰脸型"],
		"shortDescriptionImage": ["/static/img/goodsImage/1185008/shortdescriptionImage/3e5f2fad2a079dabea1bfde1ae5a3813.jpg", "/static/img/goodsImage/1185008/shortdescriptionImage/085729ff12f76f44110267ec6c4f722d.jpg", "/static/img/goodsImage/1185008/shortdescriptionImage/373abd184ed476a11c1df9a8c0a68fc9.jpg"],
		"headImage": ["/static/img/goodsImage/1185008/headImage/3af09c0c93e63826c79cb0ad8df1ff0e.png", "/static/img/goodsImage/1185008/headImage/87bc85fbdcd3d2e943476b62879de98c.png", "/static/img/goodsImage/1185008/headImage/f550bf87ffbacd6b500bf2c8581b17e5.jpg", "/static/img/goodsImage/1185008/headImage/9701768e4a913230b767b65e93f7a769.jpg", "/static/img/goodsImage/1185008/headImage/ee64dce7a0289087a0c3a9b08a4f4dfb.jpg"],
		"type": ["偏银镜片", "偏黑镜片"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1185008/description/ff6f71e36d4df90828ca785d2524c061.jpg", "/static/img/goodsImage/1185008/description/7e41556b71e32cc0d59cf6d12d9e9323.jpg", "/static/img/goodsImage/1185008/description/c0bfffc05129a4c44372a9bba57c0f01.jpg", "/static/img/goodsImage/1185008/description/5e5af23b1bc37ed5cfefd797d2b59ea4.jpg", "/static/img/goodsImage/1185008/description/2ecf130791c6bcf8e08c9dfd15cc3709.jpg", "/static/img/goodsImage/1185008/description/89086009fcc60bf03d4a0ae298dfdb46.jpg", "/static/img/goodsImage/1185008/description/3b982fa82be0c4b6d74ee9c34acaa00d.jpg", "/static/img/goodsImage/1185008/description/bc52d4917f521ec7ffe5f768919fb831.jpg", "/static/img/goodsImage/1185008/description/96abda6684782b22f0d56f0b1871e8ff.jpg", "/static/img/goodsImage/1185008/description/0c215981fd59a4aaf272c4355dfafdc5.jpg", "/static/img/goodsImage/1185008/description/1c59123b2bca353aa9f8e4df09d697d6.jpg", "/static/img/goodsImage/1185008/description/532f9b6db788fa42284947db44041c18.jpg", "/static/img/goodsImage/1185008/description/15ba3d518524d6896af671138a0241fa.jpg", "/static/img/goodsImage/1185008/description/48e63918ea872b384fb129e86c56c2ef.jpg", "/static/img/goodsImage/1185008/description/7115c1b876b9b503e1e655e78625adfa.jpg", "/static/img/goodsImage/1185008/description/0ae970474eb7a4ed11e780c3445be8f3.jpg", "/static/img/goodsImage/1185008/description/47f608d581e8dc5dc4fc7da8e6bdbab0.jpg", "/static/img/goodsImage/1185008/description/bc943fa50e5cfefbfbceb4c70bd36bb5.jpg", "/static/img/goodsImage/1185008/description/9273b341d6a140a52aa9c266d405575a.jpg", "/static/img/goodsImage/1185008/description/a24ea5ba9449b75a98662a77ebfdba3b.jpg", "/static/img/goodsImage/1185008/description/f2a681d9010a57dd9174084ee7e91dbc.jpg", "/static/img/goodsImage/1185008/description/0a0dd448510e098abd1aaec78ef57748.jpg", "/static/img/goodsImage/1185008/description/1e7e9dcb542942dc533676d518437657.jpg", "/static/img/goodsImage/1185008/description/516b0cbedd3fe237e0bacc92dc338bdf.jpg", "/static/img/goodsImage/1185008/description/901ef132eac3ca3ced7cee9809a91c3b.jpg", "/static/img/goodsImage/1185008/description/cf4a52003fd38ef752d130d98a6ac269.jpg", "/static/img/goodsImage/1185008/description/2052780c9ddfe556dcfade89dc43c351.jpg", "/static/img/goodsImage/1185008/description/89d67108c13a8ec1dc4c5f9ac8e11251.jpg", "/static/img/goodsImage/1185008/description/bef2f0d373bb95b22e0d6c41d3462219.jpg", "/static/img/goodsImage/1185008/description/8a68045a0799012f882ed948a5ff0150.jpg", "/static/img/goodsImage/1185008/description/4e978a447edd826f93d5681fb4a45278.jpg", "/static/img/goodsImage/1185008/description/ed11ab756ccac3f5e76f17479e734506.jpg", "/static/img/goodsImage/1185008/description/38233cfaff552b1b1016d57e1b6530d4.jpg", "/static/img/goodsImage/1185008/description/5a1b2405b939b63788993a7e81cf0a48.jpg", "/static/img/goodsImage/1185008/description/8e29f34355d616efcdd6e49dd956cf95.jpg", "/static/img/goodsImage/1185008/description/8d73a5cf18febf43f538f5b734aa89c7.jpg", "/static/img/goodsImage/1185008/description/882bfd672a2eeda71797c8df0a2a99ff.jpg", "/static/img/goodsImage/1185008/description/4c312725269b1d1e7550a4de1efb46f9.jpg", "/static/img/goodsImage/1185008/description/ee60b7208e543495c54f2cebfc981005.jpg", "/static/img/goodsImage/1185008/description/cb4f7b296fddaa6df6393101a7e136e4.jpg", "/static/img/goodsImage/1185008/description/d95a298f28fcfac3b038b48a06c36d06.jpg", "/static/img/goodsImage/1185008/description/71853126d08689ecd98201c40218170c.jpg", "/static/img/goodsImage/1185008/description/dc543654fb911d7d399226537ca4271b.jpg", "/static/img/goodsImage/1185008/description/4964a81e51c4e4bf7e8914ecb3ffb6a7.jpg", "/static/img/goodsImage/1185008/description/f9af33e3a0d3a525c93026dea79a1f7f.jpg", "/static/img/goodsImage/1185008/description/c8261978900c92b60ca62394f2ea8ab4.jpg", "/static/img/goodsImage/1185008/description/3830db4a749496e26d253eeeda308e83.jpg", "/static/img/goodsImage/1185008/description/60cd0f21307988d69a962218f761f4ec.jpg", "/static/img/goodsImage/1185008/description/10c98f284c187f36b862a124c4590477.jpg", "/static/img/goodsImage/1185008/description/23018fb4bc3f4b9c4ec38bb0988b6470.jpg", "/static/img/goodsImage/1185008/description/7dddc646edede922853897978cd47de4.jpg", "/static/img/goodsImage/1185008/description/e591cffbc010ee3a6f6a963108ef0ed5.jpg", "/static/img/goodsImage/1185008/description/8bf0e0f391cb4af9e1a5374f710db4bb.jpg", "/static/img/goodsImage/1185008/description/c866d11eaecfba49335f0b5345c6229a.jpg", "/static/img/goodsImage/1185008/description/af6a3221c20676f0c38b4bacd3653597.jpg", "/static/img/goodsImage/1185008/description/b97e3c1ecf1b37c316cc597e7d9bca64.jpg", "/static/img/goodsImage/1185008/description/bdd5b4a0032403da8d4d9155dc0d3fa4.jpg", "/static/img/goodsImage/1185008/description/273373e43f0f6b78b75b6c7b0f1fefcb.jpg", "/static/img/goodsImage/1185008/description/376f457b24d205ecc126b430bef1154a.jpg", "/static/img/goodsImage/1185008/description/9ebf0963eb765beadf94f8cc5abe1ad2.jpg", "/static/img/goodsImage/1185008/description/e78025a7e75b9f8f9ed4b6b33c5c6bfd.jpg", "/static/img/goodsImage/1185008/description/554b4c7efb0bcffa3b792e38faaee09c.jpg", "/static/img/goodsImage/1185008/description/4c7050ea4d5efbfbbdd168601e72a949.jpg", "/static/img/goodsImage/1185008/description/18a60766797ceef90597b04fb328b32c.jpg", "/static/img/goodsImage/1185008/description/700638025a15c6fa73cf494bb6809963.jpg", "/static/img/goodsImage/1185008/description/90567f45bb4fab0fc3c4934183863423.jpg"],
		"inventory": [199, 86],
		"information": [{
			"attrName": "材质",
			"attrValue": "镜片：TAC偏振框架：TR90"
		}, {
			"attrName": "镜片透射比分类",
			"attrValue": "3类"
		}, {
			"attrName": "镜架尺寸",
			"attrValue": "54□21-145"
		}, {
			"attrName": "执行标准",
			"attrValue": "QB 2457-1999"
		}, {
			"attrName": "生产许可证",
			"attrValue": "XK16-003-00340"
		}, {
			"attrName": "注意事项",
			"attrValue": "1. 太阳镜用镜布或者软袋包好，放置盒内，远离潮湿和火源。2. 太阳镜可以用清水或专用眼镜清洁液清洗，请勿使用任何化学溶剂，以免破坏镜片，降低镜片滤光作用。3. 镜架长时间使用或放置后，可能会轻微变形，对脸部造成负担，可通过手工调整恢复，属于正常情况。4. 请将太阳镜放置远离化学品，化妆品，药品，手机等，以避免对镜片产生破坏。"
		}, {
			"attrName": "重量",
			"attrValue": "29g （手工测量可能存在误差）"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "Fendi制造商",
		"sale": 38,
		"date": "1500341058543",
		"category": "配件",
		"subCategory": "配饰"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1149045,
		"price": 69,
		"topName": "网易智造小方盒插线板（新国标）",
		"subName": "小巧便携 智能充电 安全易用",
		"shortDescription": ["小巧便携", "办公必备", "智能充电", "智能省电", "安全易用", "儿童保护"],
		"shortDescriptionImage": ["/static/img/goodsImage/1149045/shortdescriptionImage/092120a65c768bfb58ef43f5a04d9936.jpg", "/static/img/goodsImage/1149045/shortdescriptionImage/3e4e480f9cd79f611aa7e37a062f628e.jpg", "/static/img/goodsImage/1149045/shortdescriptionImage/27120a5290c6385299d9e6e4902aefda.jpg"],
		"headImage": ["/static/img/goodsImage/1149045/headImage/977f4a6c991f4f95159127c66fd1007c.png", "/static/img/goodsImage/1149045/headImage/940986a8f822766aba09ee5e48b2353c.jpg", "/static/img/goodsImage/1149045/headImage/43e304cbe4c181292f91c36c91ea876b.jpg", "/static/img/goodsImage/1149045/headImage/c1f26631aac46bf2373279617d58e92c.jpg", "/static/img/goodsImage/1149045/headImage/884a16a9ecb4a91e5d518290168b3d89.jpg"],
		"type": ["白色"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1149045/description/1e90aa7f0b404fbdf0f5b23d4139e299.jpg", "/static/img/goodsImage/1149045/description/6e3c95c89552b3fd20589873caf3915b.jpg", "/static/img/goodsImage/1149045/description/4ef45b1e4abde060cf7a3d7bb902aed1.jpg", "/static/img/goodsImage/1149045/description/7a3f84b32f4ce4581e989db69cd556bd.jpg", "/static/img/goodsImage/1149045/description/1a19c31284b3c4f1baab354051d0aacd.jpg", "/static/img/goodsImage/1149045/description/e52650628115676b6dccc8c93f446897.jpg", "/static/img/goodsImage/1149045/description/7aed5dbcf46e550258d674c267017667.jpg", "/static/img/goodsImage/1149045/description/c92d067f15e0cbe20492f0d31c201c1d.jpg", "/static/img/goodsImage/1149045/description/2a38f8d63b5a1bef51251d3c7131d302.jpg", "/static/img/goodsImage/1149045/description/1b0b9e0a66ff9a5f59d9d63a5238c03d.jpg", "/static/img/goodsImage/1149045/description/cd5f2690795d5b7485a45475fd4254e3.jpg", "/static/img/goodsImage/1149045/description/9b430f1d66a511a36b10293a66f49556.jpg", "/static/img/goodsImage/1149045/description/bc4daaab80c9f71582e54c6d2cbd7868.jpg", "/static/img/goodsImage/1149045/description/eb9f23e4f65dba0f7a0a2390a9779dc5.jpg", "/static/img/goodsImage/1149045/description/248891844f9f84b59006fe6faac3853d.jpg", "/static/img/goodsImage/1149045/description/3d87e53766c0e83ab649dc4bb1b1948d.jpg", "/static/img/goodsImage/1149045/description/5b32b6eeadc8bda15a99b1be1bcff91f.jpg", "/static/img/goodsImage/1149045/description/40ba5ce909d3dfd1d6eae8993b546527.jpg", "/static/img/goodsImage/1149045/description/60f749bdaf647f64e718594af2d74847.jpg", "/static/img/goodsImage/1149045/description/1e40526ecb48626a5918fa6d7469e86d.jpg", "/static/img/goodsImage/1149045/description/e497e69d11f8e9f4e7d30f244a06dfcf.jpg", "/static/img/goodsImage/1149045/description/c43eea7f859f49692a0344f00fbb44f7.jpg", "/static/img/goodsImage/1149045/description/421d129cea0d64673985e18c4e9e3947.jpg", "/static/img/goodsImage/1149045/description/fc0b2c446bf2cc2c886286438b3decf8.jpg", "/static/img/goodsImage/1149045/description/63deadf47c03f2015779310afa5ec8ea.jpg", "/static/img/goodsImage/1149045/description/4e27a89282dfaff90b81477670de9993.jpg", "/static/img/goodsImage/1149045/description/64ab9d07115fa87ae3d73160684f586c.jpg", "/static/img/goodsImage/1149045/description/2526fb6396e47359b8391518251d4ca5.jpg", "/static/img/goodsImage/1149045/description/524bf916d70a6fd9e72304b02f35148a.jpg", "/static/img/goodsImage/1149045/description/26e0cf66b40c4bfe6fa9122785b778d5.jpg", "/static/img/goodsImage/1149045/description/6e57472b3d8bfb878545ba9317e23f54.jpg", "/static/img/goodsImage/1149045/description/7d205bc88d73752353c7f2aeb2690cdd.jpg", "/static/img/goodsImage/1149045/description/31d2ebdd5245f231e2605ada2f6fb28d.jpg", "/static/img/goodsImage/1149045/description/4709326477999e9e592e0b4c45fcf597.jpg", "/static/img/goodsImage/1149045/description/6fbbe129b33543c48235808c48d575bf.jpg", "/static/img/goodsImage/1149045/description/a1d01d6c4468b80bf36d031a2a3c9774.jpg", "/static/img/goodsImage/1149045/description/29100014c0b674e4ec755a04141ec595.jpg", "/static/img/goodsImage/1149045/description/4c01fb53e42456ef70b9c765a91ca16a.jpg", "/static/img/goodsImage/1149045/description/2720527e5feb75ed22b31e7dee76a360.jpg", "/static/img/goodsImage/1149045/description/09f82746649b6dd117c98a409a5945d8.jpg", "/static/img/goodsImage/1149045/description/b76d36bf8814db140ea465d1a3b6f4ba.jpg", "/static/img/goodsImage/1149045/description/697e358d13b3fda053d36c1e30333655.jpg", "/static/img/goodsImage/1149045/description/55b10645fba5242cfcd10d8cf9974bae.jpg", "/static/img/goodsImage/1149045/description/6a7b1a5788f7f331ff6a8431f34e747f.jpg", "/static/img/goodsImage/1149045/description/e942cace1862a30ececc21c19e1ed82a.jpg", "/static/img/goodsImage/1149045/description/643a5e92e28f9041fbcae408b645d23e.jpg", "/static/img/goodsImage/1149045/description/ec8b314a0752183c22a727f454dbc228.jpg", "/static/img/goodsImage/1149045/description/8a3204edbba958644b0ae3869942f02d.jpg", "/static/img/goodsImage/1149045/description/4825884fcd8361d51a054dc38ac5c6bf.jpg", "/static/img/goodsImage/1149045/description/86bd80fd15684632026b4e875d67e8f9.jpg", "/static/img/goodsImage/1149045/description/76372fd01155f7205613d339c09d8573.jpg", "/static/img/goodsImage/1149045/description/cdd8386033ec6e0beb4f913c30eb8c71.jpg", "/static/img/goodsImage/1149045/description/65f0ca51ecfc302cb59f4471a7c286fc.jpg", "/static/img/goodsImage/1149045/description/04d4c4d1dbfa7983d979a538db7ac96f.jpg"],
		"inventory": [294],
		"information": [{
			"attrName": "额定参数",
			"attrValue": "2500W-10A Max, 250V"
		}, {
			"attrName": "电源线长",
			"attrValue": "1m"
		}, {
			"attrName": "产品接口",
			"attrValue": "2个国际插孔；3个USB充电接口"
		}, {
			"attrName": "USB单口输出",
			"attrValue": "DC 5V/2.4A Max（智能识别）"
		}, {
			"attrName": "USB总输出",
			"attrValue": "DC 5V/3A 15W"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 449,
		"date": "1500341061420",
		"category": "配件",
		"subCategory": "数码"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1194020,
		"price": 79,
		"topName": "男女同款超柔软水洗棉圆领T恤",
		"subName": "婴儿肌肤手感级的圆领T恤",
		"shortDescription": ["柔软亲肤", "极致舒适", "细腻平整", "基础百搭", "经典版型", "精挑细选"],
		"shortDescriptionImage": ["/static/img/goodsImage/1194020/shortdescriptionImage/4ad8fc2c5ba18477b0dcf92724a43e28.jpg", "/static/img/goodsImage/1194020/shortdescriptionImage/4662b819a824d4e92aa3a800f71b3bf7.jpg", "/static/img/goodsImage/1194020/shortdescriptionImage/4cbcbaf55d3553773937c22ddb0efb9e.jpg"],
		"headImage": ["/static/img/goodsImage/1194020/headImage/7d180f112cb6df0d48b75833f4e612b4.png", "/static/img/goodsImage/1194020/headImage/5fc0228c0b4f04e94b96250fca47855a.jpg", "/static/img/goodsImage/1194020/headImage/75fb093d553c519ed3df5723c3d5c660.jpg", "/static/img/goodsImage/1194020/headImage/983696b7a6157628a357fcdaaffbd186.jpg", "/static/img/goodsImage/1194020/headImage/53e34fbbfbc237cbb1b75aaaeef2c85d.jpg"],
		"type": ["白色", "藏蓝色"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1194020/description/6c49e1b0019c3f45e8b0bf0b3cc776df.jpg", "/static/img/goodsImage/1194020/description/3ab437030f490ae483f991129e965e0c.jpg", "/static/img/goodsImage/1194020/description/a8b08a0761a0c01e9e0187e0b65e74e7.jpg", "/static/img/goodsImage/1194020/description/06deefe92592184c14aad3b453bb149c.jpg", "/static/img/goodsImage/1194020/description/2f1ae33ffca008d49efcdd8b3a41fe6f.jpg", "/static/img/goodsImage/1194020/description/53ac11b6a493a98c22b6d8ea9ecf3324.jpg", "/static/img/goodsImage/1194020/description/f1435e43ef4b9d0277a11489756d2776.jpg", "/static/img/goodsImage/1194020/description/54271ca784f1d06b8bd332fca9f03260.jpg", "/static/img/goodsImage/1194020/description/1677f66adb8cc96f16dd4b4e6348aa68.jpg", "/static/img/goodsImage/1194020/description/e65d3a8285046bb9907dfbc84bff3d00.jpg", "/static/img/goodsImage/1194020/description/d3fb47ab6c27a8abc361eced84c1700a.jpg", "/static/img/goodsImage/1194020/description/dca8ff23c33579298db4e515cc287619.jpg", "/static/img/goodsImage/1194020/description/45322980e95dbdd1665e8396f570247e.jpg", "/static/img/goodsImage/1194020/description/afc5728d085702f494338477e1c30448.jpg", "/static/img/goodsImage/1194020/description/6d1b6c86dbb800b603950cbc44c5f451.jpg", "/static/img/goodsImage/1194020/description/305fd9a3e0cc50205fa143d3db63e782.jpg", "/static/img/goodsImage/1194020/description/47438b117f97506f3ef8123cb759e136.jpg", "/static/img/goodsImage/1194020/description/453f0c257fae8ca8b0d68eaa8046f07a.jpg", "/static/img/goodsImage/1194020/description/cc1159811cd8868190f1af77ca0ed32e.jpg", "/static/img/goodsImage/1194020/description/156c3d5c2545b0c1c17439c196fe33bc.jpg", "/static/img/goodsImage/1194020/description/59113ff7e52b8a3c54ec54e672d4c886.jpg", "/static/img/goodsImage/1194020/description/e9e0b1d63df963743e66baffe2c51af0.jpg", "/static/img/goodsImage/1194020/description/0ba3a5dadd863cbb0c0508740a46c09e.jpg", "/static/img/goodsImage/1194020/description/1784898f33bf3a3fc90fd1818f1b9e8f.jpg", "/static/img/goodsImage/1194020/description/b69ae857bc7c86c67fd0872bc68ecc5d.jpg", "/static/img/goodsImage/1194020/description/336337a31be8dba13cda532af571048f.jpg", "/static/img/goodsImage/1194020/description/ff44f1c0176d461ed6663a37537d8a22.jpg", "/static/img/goodsImage/1194020/description/e63b71219c76df143ec3182023d3d94e.jpg", "/static/img/goodsImage/1194020/description/97b5e3ab8df119530012fc99b0462e25.jpg", "/static/img/goodsImage/1194020/description/d08935c4791ceec98c1d6d7c7a5ca5bd.jpg", "/static/img/goodsImage/1194020/description/f5670440a81b9de28b7074b0ea40cf7b.jpg", "/static/img/goodsImage/1194020/description/3483461efe6518328dd5f65e60c82adb.jpg", "/static/img/goodsImage/1194020/description/902ae80bec405b5d084d2e86c65ba832.jpg", "/static/img/goodsImage/1194020/description/9e9c748386c805b62ce7f2a1fa6e8b98.jpg", "/static/img/goodsImage/1194020/description/b090ed7407a223696be3fa139cc5349a.jpg", "/static/img/goodsImage/1194020/description/7f43263f4bc503a0977d076a240c57b4.jpg", "/static/img/goodsImage/1194020/description/3552a73a86250bddb1ace094126cd94e.jpg", "/static/img/goodsImage/1194020/description/08b4ebf347e3105eb5c812fcfb0568a7.jpg", "/static/img/goodsImage/1194020/description/f70e73399dbfe5b42994729ab418e2f7.jpg", "/static/img/goodsImage/1194020/description/d4c0447f127c76f444b5fcf00c5f5889.jpg", "/static/img/goodsImage/1194020/description/25c7262e320161dabde8d0de3fbe07e3.jpg", "/static/img/goodsImage/1194020/description/ea0d13a76e23daff6942476e2acaf6c4.jpg", "/static/img/goodsImage/1194020/description/89e60a33b52620496dc78f44ba10392c.jpg", "/static/img/goodsImage/1194020/description/3eaeac06a1b900642765978100836d87.jpg", "/static/img/goodsImage/1194020/description/9498f09fd95b9ee6e115737eb0174efc.jpg", "/static/img/goodsImage/1194020/description/23cfaa27d96079e2b98ef31cf2799a0a.jpg", "/static/img/goodsImage/1194020/description/43aefd0cc343a9c43a413fdae4675523.jpg", "/static/img/goodsImage/1194020/description/64f3eeb5a284cc6498aca6d2e591b0e9.jpg", "/static/img/goodsImage/1194020/description/ab4ee3d184a7f899685ad45dfc9f6953.jpg", "/static/img/goodsImage/1194020/description/fd5c698bfde8182aadcba5e6b39328c9.jpg", "/static/img/goodsImage/1194020/description/4c307504514b438c3ccc3813de2a5cdb.jpg", "/static/img/goodsImage/1194020/description/1d0b47dfe716569a398ce4da1a5a58ee.jpg", "/static/img/goodsImage/1194020/description/83a8293048d9cd523b49cc8310f24421.jpg", "/static/img/goodsImage/1194020/description/f91c40321712bf7cbba3cdcbbdfb3d55.jpg", "/static/img/goodsImage/1194020/description/a26af428ca7aafbc6ee11e00ab82fc1c.jpg"],
		"inventory": [256, 497],
		"information": [{
			"attrName": "面料",
			"attrValue": "100%棉"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 80,
		"date": "1500341065364",
		"category": "服装",
		"subCategory": "T恤"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1155004,
		"price": 169,
		"topName": "男式棉麻合体直筒牛仔短裤",
		"subName": "合身剪裁的棉麻雅痞范",
		"shortDescription": ["手工压皱", "刻画层次", "生物酵洗", "自然还原", "英国缝线", "韧性光洁"],
		"shortDescriptionImage": ["/static/img/goodsImage/1155004/shortdescriptionImage/3469dad89c74e11df23ade07363de51f.jpg", "/static/img/goodsImage/1155004/shortdescriptionImage/9ec05453849e6753d6e9ceae82045d44.jpg", "/static/img/goodsImage/1155004/shortdescriptionImage/72a557a2edfcea308346a84d45a15001.jpg"],
		"headImage": ["/static/img/goodsImage/1155004/headImage/eda42638abcef379f296b59b51a48aa6.png", "/static/img/goodsImage/1155004/headImage/1d9891916f07c9d411345eedfc61a9b6.jpg", "/static/img/goodsImage/1155004/headImage/b07fa093c287392a6dcf7b369161678e.jpg", "/static/img/goodsImage/1155004/headImage/286a7e5a9375df6019c876ef04fa8da3.jpg", "/static/img/goodsImage/1155004/headImage/c70c9c98d4534d739c5d527bfc6a505d.jpg"],
		"type": ["中蓝"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1155004/description/398f19d37ebea99c341f149e7b847fcd.jpg", "/static/img/goodsImage/1155004/description/374f4fab24e1567c24ccae53716eea9f.jpg", "/static/img/goodsImage/1155004/description/785edb2afc3fda267679679608353d4b.jpg", "/static/img/goodsImage/1155004/description/7668f6d17334daa88258cc81d0b143d6.jpg", "/static/img/goodsImage/1155004/description/3968d06027f3a9a034e882feaadd0f0d.jpg", "/static/img/goodsImage/1155004/description/11db284c6fdaaa9be3179d663c3fcd57.jpg", "/static/img/goodsImage/1155004/description/a3767ce45fbf5c703bee039a3aaf9170.jpg", "/static/img/goodsImage/1155004/description/87022a75110d8f198177ff34e8bbfb70.jpg", "/static/img/goodsImage/1155004/description/de456da9046d3542b3450d94ee60fc06.jpg", "/static/img/goodsImage/1155004/description/42be00cb1b03775c62676d603c055e25.jpg", "/static/img/goodsImage/1155004/description/bc1cbe5f35aad29ff82343ccbb3535cd.jpg", "/static/img/goodsImage/1155004/description/a734799b3ca413e2fbce793f6e0ab820.jpg", "/static/img/goodsImage/1155004/description/52ed3461730bea66137f04c5f4b98c2e.jpg", "/static/img/goodsImage/1155004/description/4bc13c9d836ee2b03e03e6c3cc5f4402.jpg", "/static/img/goodsImage/1155004/description/61aac151998e831be99548af6b0450c6.jpg", "/static/img/goodsImage/1155004/description/47a7e3300f5deb43ee7e1222b506b3cc.jpg", "/static/img/goodsImage/1155004/description/41e0cfd3f403ae0f3eaf2c4ae96a51d7.jpg", "/static/img/goodsImage/1155004/description/8124a26a9ae7d05a7e77b6cfe9c34dcd.jpg", "/static/img/goodsImage/1155004/description/fa40871058f8d25f5d27182aefd98cf3.jpg", "/static/img/goodsImage/1155004/description/dece9c9f1d4c12157562ccf7e889a74c.jpg", "/static/img/goodsImage/1155004/description/414ee7c06ed2d4864d6841ea52be157c.jpg", "/static/img/goodsImage/1155004/description/98d72487d0c9e1102cd42a6a1419187b.jpg", "/static/img/goodsImage/1155004/description/cfc88448debd67e786cdfc8d6cd53f9a.jpg", "/static/img/goodsImage/1155004/description/9905318181fc99cdcba3f743a4f66569.jpg", "/static/img/goodsImage/1155004/description/4a4cd2ee6243f8b6bbf72499b2c52cae.jpg", "/static/img/goodsImage/1155004/description/01d6a95c333db385bd60ade8b2787fde.jpg", "/static/img/goodsImage/1155004/description/d47a0345a782fc5a6cdecd69c4222ada.jpg", "/static/img/goodsImage/1155004/description/f059e7f297485163529806f84ddadbcb.jpg", "/static/img/goodsImage/1155004/description/b9b6bc20950e6c43b491437cf27c5ad6.jpg", "/static/img/goodsImage/1155004/description/071869021d0b13773d0cd72b2efb9713.jpg", "/static/img/goodsImage/1155004/description/12ca58a3a5fd8725e6811be48ebb02eb.jpg", "/static/img/goodsImage/1155004/description/e736294cc98e363632ac626bdab7afb9.jpg", "/static/img/goodsImage/1155004/description/5f2a0c951b6887f1383a3b620f3bba2a.jpg", "/static/img/goodsImage/1155004/description/90826b724ce36fff56db2bae08095944.jpg", "/static/img/goodsImage/1155004/description/996479f82286082288dee063f47748de.jpg", "/static/img/goodsImage/1155004/description/d729d7d7e4fd28e979f1c15a4f8fd78c.jpg", "/static/img/goodsImage/1155004/description/4d24610de33fefe699f7ed36a57c3247.jpg", "/static/img/goodsImage/1155004/description/a2c714a992a19ea27a34994dd0856004.jpg", "/static/img/goodsImage/1155004/description/298f80737cf94c54cdddec3eebf239d3.jpg", "/static/img/goodsImage/1155004/description/85e831ef8dcc7da4b5932e234c76d72a.jpg", "/static/img/goodsImage/1155004/description/f2c20aed9a6b280ae149c84d103a7fd3.jpg", "/static/img/goodsImage/1155004/description/1d15af3597d2082c76aa2f2ac2853688.jpg", "/static/img/goodsImage/1155004/description/5b878fd43655a8a04caa849cc7553e77.jpg", "/static/img/goodsImage/1155004/description/d49d087700aed820932435cf9e44731e.jpg", "/static/img/goodsImage/1155004/description/b46e835d95dfeaf688e740d10d5286ac.jpg", "/static/img/goodsImage/1155004/description/ef9cdfa727d936fe92da114ee070a055.jpg", "/static/img/goodsImage/1155004/description/cdb4087cb0ae90cb94cd393d981eadbb.jpg", "/static/img/goodsImage/1155004/description/becf7675b3f3c9d12d0d9b7cfed2bf45.jpg", "/static/img/goodsImage/1155004/description/fabade44fcd322c6985bc9b10cdf54bf.jpg", "/static/img/goodsImage/1155004/description/b7230d081e541ed1db77425a0eb54d1d.jpg", "/static/img/goodsImage/1155004/description/8bed0072f218116fd4ec57b907367b1e.jpg", "/static/img/goodsImage/1155004/description/e8425c65886790470ca0d60069f58c69.jpg", "/static/img/goodsImage/1155004/description/1a8d71266b7c98f0937ece124a866d50.jpg", "/static/img/goodsImage/1155004/description/af539650b1df580a163eb1914a2213ed.jpg", "/static/img/goodsImage/1155004/description/a6cf3548ed251db8372dc5299f166674.jpg", "/static/img/goodsImage/1155004/description/eb9dc624560e0b3cdb2ff6650bc31973.jpg", "/static/img/goodsImage/1155004/description/351a499cfd770ae2b251c39aca9e4475.jpg", "/static/img/goodsImage/1155004/description/dc4f20e9114629acaa889b6651e822f3.jpg", "/static/img/goodsImage/1155004/description/e94f86f66c151853638e61836034f560.jpg", "/static/img/goodsImage/1155004/description/e44f9652e91a980cfee90a3594f418fd.jpg", "/static/img/goodsImage/1155004/description/9ed27101620e9045116da4f4f5d1d1ba.jpg", "/static/img/goodsImage/1155004/description/beee7810366065e77c6ee90c724c384c.jpg", "/static/img/goodsImage/1155004/description/fd3665294dd52b8026f478c7beff4066.jpg", "/static/img/goodsImage/1155004/description/adeedb5466b7626e042f48bb56bc77c8.jpg", "/static/img/goodsImage/1155004/description/1652b4acb5b1f5fb0c5e6fcc17fe904e.jpg", "/static/img/goodsImage/1155004/description/5f0ad5c062f15ae83708e21c1536ef45.jpg"],
		"inventory": [164],
		"information": [{
			"attrName": "温馨提示",
			"attrValue": "由于棉麻属无弹材质，面料伸展性、弹力有限，选购时请注意"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "CK Jeans制造商",
		"sale": 160,
		"date": "1500341069317",
		"category": "服装",
		"subCategory": "裤装"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1156015,
		"price": 79,
		"topName": "女式经典高腰塑身短裤",
		"subName": "仅售供应商建议价的1/6",
		"shortDescription": ["超细纱线", "高弹氨纶", "德国滚筒", "无痕贴合", "透气吸湿", "轻薄光滑"],
		"shortDescriptionImage": ["/static/img/goodsImage/1156015/shortdescriptionImage/6f298a4934b3e84ee590d7fa3b045ea2.jpg", "/static/img/goodsImage/1156015/shortdescriptionImage/b7513b7a0d29db7c536a83d3019b1269.jpg", "/static/img/goodsImage/1156015/shortdescriptionImage/c509309376be9ee764ce28540da8ac74.jpg"],
		"headImage": ["/static/img/goodsImage/1156015/headImage/3ddca0082345c10d94037fc3e0221280.jpg", "/static/img/goodsImage/1156015/headImage/278d9d13eff529a77f8e965b9d06cffc.jpg", "/static/img/goodsImage/1156015/headImage/da685cf05d55a0d6f5929e8bd486affc.jpg", "/static/img/goodsImage/1156015/headImage/730ddee1e2e4f5fb988e195c41af88a3.jpg", "/static/img/goodsImage/1156015/headImage/1d980f7f4a710a6eedc69680083413ad.jpg"],
		"type": ["肤色", "黑色"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1156015/description/4bea101715dfa2d43a0e84f8bdddd590.jpg", "/static/img/goodsImage/1156015/description/ab1bf9b1d40126feb25b5289a7a1638b.jpg", "/static/img/goodsImage/1156015/description/f126139346aa03d4a473ee9b8ef461cc.jpg", "/static/img/goodsImage/1156015/description/102a82f15a328449e5f3cb5692e857b4.jpg", "/static/img/goodsImage/1156015/description/ac3f7a4a2f95c5bcef2064e1cabb4bf7.jpg", "/static/img/goodsImage/1156015/description/b82a4fa2cb7873a7184369ba87dd4ee6.jpg", "/static/img/goodsImage/1156015/description/532106b4461e2881911fddea1f1ab761.jpg", "/static/img/goodsImage/1156015/description/9aefb408e5fc01db9bf48338ea67f3dd.jpg", "/static/img/goodsImage/1156015/description/0081983c350f94371f2685c5dbf8ae1f.jpg", "/static/img/goodsImage/1156015/description/d6764b2f7b948dc5c330bd491c914e25.jpg", "/static/img/goodsImage/1156015/description/a44a4d6cd7ca074ea918e6bd57562924.jpg", "/static/img/goodsImage/1156015/description/04c2cbf69bf2998fe643c53e15a50383.jpg", "/static/img/goodsImage/1156015/description/95124f25d31f72d5aa91eeea32949080.jpg", "/static/img/goodsImage/1156015/description/8fb29cf70cf9c208f38d3b8fe25c3df7.jpg", "/static/img/goodsImage/1156015/description/cb713dc151f5801f2282a1b7d5831005.jpg", "/static/img/goodsImage/1156015/description/01014acd020628a6eb7f4f8d08d06798.jpg", "/static/img/goodsImage/1156015/description/735c4d12497966463e98c81b5841530a.jpg", "/static/img/goodsImage/1156015/description/0458c40fc34c48024039c3a3b84388ec.jpg", "/static/img/goodsImage/1156015/description/9f0a9827cf38462a00bca15d35165b40.jpg", "/static/img/goodsImage/1156015/description/7ac3c3946c012752c3be20a048030634.jpg", "/static/img/goodsImage/1156015/description/2b2bf34af181a9b9f1c0a0f5e25b5456.jpg", "/static/img/goodsImage/1156015/description/d905769cb082703fe562bbf4cbe7c5f2.jpg", "/static/img/goodsImage/1156015/description/836afe0f1e5d8a7f167df79eedcadd8c.jpg", "/static/img/goodsImage/1156015/description/6aa5940ae79000cddf35b6b01c3b20ce.jpg", "/static/img/goodsImage/1156015/description/5cb72155a7e0a81ad9ac4513f442f3f4.jpg", "/static/img/goodsImage/1156015/description/b8c51fb8c2b33d826f563cdf7c0e008c.jpg", "/static/img/goodsImage/1156015/description/6d131cf2404636123f2d35933fefdc3b.jpg", "/static/img/goodsImage/1156015/description/61de3a7f9c22e5e739ecb2fcb51ae1e6.jpg", "/static/img/goodsImage/1156015/description/3384d654f56fb7a2c314dbd03165700d.jpg", "/static/img/goodsImage/1156015/description/4e3f8bcf35008bbd158a4fc58addc681.jpg", "/static/img/goodsImage/1156015/description/e246b66ef04c66f12d6768e6dd7cd182.jpg", "/static/img/goodsImage/1156015/description/9ad8afb920c6ec0b227ef8ec9392d042.jpg", "/static/img/goodsImage/1156015/description/56a3807e8bb81ea235080c59f83fd221.jpg", "/static/img/goodsImage/1156015/description/6264768fd3054f985c32d84d099e7bd0.jpg", "/static/img/goodsImage/1156015/description/643406347241362b387925deaa790023.jpg", "/static/img/goodsImage/1156015/description/f7e1bd47201bb38c74341f1117e62c8d.jpg", "/static/img/goodsImage/1156015/description/59c52bd940c7a068fc712282c31e5ba9.jpg", "/static/img/goodsImage/1156015/description/7351ee6cb5aba3e6c6b190ececf824c3.jpg", "/static/img/goodsImage/1156015/description/ffea06752f754c0338feb252293b2f7f.jpg", "/static/img/goodsImage/1156015/description/d0e77dcd497e58d00a77e8ab967ba160.jpg", "/static/img/goodsImage/1156015/description/d9b41852b270c0a943d9adada0dac2a3.jpg", "/static/img/goodsImage/1156015/description/80e445f9ae1499ba14c47d9f65060bf2.jpg", "/static/img/goodsImage/1156015/description/05926eb645e15926d447f1ac77b603dd.jpg", "/static/img/goodsImage/1156015/description/c48f148275d3660e2aa88952e6bfa8e9.jpg", "/static/img/goodsImage/1156015/description/06ab193cb3c246a8bfcd59782b87ad44.jpg", "/static/img/goodsImage/1156015/description/54835229c2e60bbaeb8887778097155f.jpg", "/static/img/goodsImage/1156015/description/bf6fc73b201c97f8c74addb327021b08.jpg", "/static/img/goodsImage/1156015/description/3f6b1f102ed09e9aced62953ae362531.jpg", "/static/img/goodsImage/1156015/description/a35c8dacd05e18e72674a6652073a31b.jpg", "/static/img/goodsImage/1156015/description/fd3bc7838fa412c16250a8bbfb3afa85.jpg", "/static/img/goodsImage/1156015/description/0bb8984623c51e3d3448d6c34a01926c.jpg", "/static/img/goodsImage/1156015/description/0ee91c9d1f7b58add068cf31bdc6c99a.jpg", "/static/img/goodsImage/1156015/description/2460cc48ac4f31bb9f58d3dad2155895.jpg", "/static/img/goodsImage/1156015/description/9149cc57fcb883cbd2110c09d131650f.jpg", "/static/img/goodsImage/1156015/description/9a43f8de786cdccd31793a7dc9463a3b.jpg", "/static/img/goodsImage/1156015/description/858f431f2b0ea65479de6b2a39e9251c.jpg", "/static/img/goodsImage/1156015/description/111c10e2c797e399ca4d7d84f53341fd.jpg", "/static/img/goodsImage/1156015/description/cea7f49e36491b6547c155e9fe2cd609.jpg", "/static/img/goodsImage/1156015/description/e38d371c13a0631527f9e01db92d4090.jpg"],
		"inventory": [6, 202],
		"information": [{
			"attrName": "里料",
			"attrValue": "17%锦纶 83%氨纶"
		}, {
			"attrName": "底裆",
			"attrValue": "100%棉"
		}, {
			"attrName": "温馨提示",
			"attrValue": "本品除明确质量问题外不支持30天无忧退换货"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "爱慕制造商",
		"sale": 857,
		"date": "1500341073216",
		"category": "服装",
		"subCategory": "内裤"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1193005,
		"price": 49,
		"topName": "女式自然无缝bra短吊带",
		"subName": "基础设计，小胸也能微性感",
		"shortDescription": ["无缝工艺", "舒适自然", "纤维裸织", "婴儿柔感", "洞洞罩杯", "清爽透气"],
		"shortDescriptionImage": ["/static/img/goodsImage/1193005/shortdescriptionImage/59879a8cb4631bd496d8b8cbfe832c34.jpg", "/static/img/goodsImage/1193005/shortdescriptionImage/9104ac61c889bc80bb2729a2a5c3b63b.jpg", "/static/img/goodsImage/1193005/shortdescriptionImage/30cad00c02a1888973e089bde6e06d7e.jpg"],
		"headImage": ["/static/img/goodsImage/1193005/headImage/7dd8360025564712f66c3c84a8edf5f0.png", "/static/img/goodsImage/1193005/headImage/99b3448441c7b0f9a8529bf2227bf5a3.jpg", "/static/img/goodsImage/1193005/headImage/5a80522bbef934fe816bb924072ad00e.jpg", "/static/img/goodsImage/1193005/headImage/c504d51ddbd25583257ad9ac660dc4ff.jpg", "/static/img/goodsImage/1193005/headImage/687096599b662a6a21248f08893dce32.jpg"],
		"type": ["肤色", "黑色"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1193005/description/384658421678db7be4a5476874daaa70.jpg", "/static/img/goodsImage/1193005/description/1b95215e6993d30b83c87a6c0ebe10fb.jpg", "/static/img/goodsImage/1193005/description/b8b25a82595671b4b4291f0fb502a647.jpg", "/static/img/goodsImage/1193005/description/1b8b80e1c39c498c899022d9361bc2f0.jpg", "/static/img/goodsImage/1193005/description/1e71fbcc6809a9a2bc6f008e189b9ace.jpg", "/static/img/goodsImage/1193005/description/0ca5930107ce3db52a06b7868a087cde.jpg", "/static/img/goodsImage/1193005/description/c164aee08a11f1614cf1dd210cc229b1.jpg", "/static/img/goodsImage/1193005/description/b276f944cb1002134ece3484394f6c09.jpg", "/static/img/goodsImage/1193005/description/11b410184c1deb42d58f4e998d727690.jpg", "/static/img/goodsImage/1193005/description/6e7f5416b1c8ae43644feb8bd7cc26e1.jpg", "/static/img/goodsImage/1193005/description/c44cff850b09b6d2c13ba4f4c3a9c6d1.jpg", "/static/img/goodsImage/1193005/description/3600a0a9da2a8c07529bbaa8c1998e7b.jpg", "/static/img/goodsImage/1193005/description/ded6ad1637d34a7dcb0a7068c9823bf0.jpg", "/static/img/goodsImage/1193005/description/ec194ab5d536eceebc89060095dd5448.jpg", "/static/img/goodsImage/1193005/description/45baec723cd8f5b63a85290222ee3029.jpg", "/static/img/goodsImage/1193005/description/8ad314e045a2fbb80a5b2d87ec21026c.jpg", "/static/img/goodsImage/1193005/description/b99b89d42d23569a5d1803777d1c801d.jpg", "/static/img/goodsImage/1193005/description/4f9ab6903891af1ba998cf1b054ee890.jpg", "/static/img/goodsImage/1193005/description/1cbdf05fcd254f547ce6b3e86ebc77fe.jpg", "/static/img/goodsImage/1193005/description/d83d60cd81b943f000dab9b03f9643b3.jpg", "/static/img/goodsImage/1193005/description/82ee3ff4f666e0a38bdbd9c034eeb980.jpg", "/static/img/goodsImage/1193005/description/ded688e645bb7c4168d9a92973fb84a9.jpg", "/static/img/goodsImage/1193005/description/353567bf98cd7733deff88988320cfc8.jpg", "/static/img/goodsImage/1193005/description/fa1f91c10f2da11bd0ba3823a9b9be0f.jpg", "/static/img/goodsImage/1193005/description/59ef6dca82c4fd34904766e1da8ff11e.jpg", "/static/img/goodsImage/1193005/description/6d02fa222eba27145d2f9147a987acee.jpg", "/static/img/goodsImage/1193005/description/9f10724d744d23c2e3a2fe968d2bd29d.jpg", "/static/img/goodsImage/1193005/description/13bea980c1e7276a70619fc6783d5c9d.jpg", "/static/img/goodsImage/1193005/description/362cab8796f70452bdf030132a54df5e.jpg", "/static/img/goodsImage/1193005/description/4438d341e75fc8df3e74bc627f32f05d.jpg", "/static/img/goodsImage/1193005/description/9c1e4f30eca878363c9e545cbd190776.jpg", "/static/img/goodsImage/1193005/description/648f180733d3c7eb2c1a44ed20839361.jpg", "/static/img/goodsImage/1193005/description/0e1eed656599708da580b204462a87b0.jpg", "/static/img/goodsImage/1193005/description/1d488c05a18b241fb87f2624173f1d10.jpg", "/static/img/goodsImage/1193005/description/54cae98f2e84fd5af85bc9ff5f6363bf.jpg", "/static/img/goodsImage/1193005/description/cfeea99740dab8b111a66566f5b07324.jpg", "/static/img/goodsImage/1193005/description/697ac9aee2e7ecb6c6f677bcefceaccc.jpg", "/static/img/goodsImage/1193005/description/abc9d340f33df56bb4bf60730381f9fb.jpg", "/static/img/goodsImage/1193005/description/987f14e67f34033a5a00508307176c90.jpg", "/static/img/goodsImage/1193005/description/081585b877095a3fddb4c6d5450a50a8.jpg", "/static/img/goodsImage/1193005/description/9add00ba08f763b664c6279b06cd6c4d.jpg", "/static/img/goodsImage/1193005/description/a497f2efe06c93b34d9b233c80987ca4.jpg", "/static/img/goodsImage/1193005/description/78e4174a1e84ea8f8f3e791d1e56a96f.jpg", "/static/img/goodsImage/1193005/description/31d653412104e9ce3de8a5ca0e68be06.jpg", "/static/img/goodsImage/1193005/description/cc848325c2d726240a52302b4df2231b.jpg", "/static/img/goodsImage/1193005/description/e39e1e31eec326f58865abc0473e063b.jpg", "/static/img/goodsImage/1193005/description/4f5240ca0a53a0208e6ba6f915dbaad5.jpg", "/static/img/goodsImage/1193005/description/e457e40a8fb7215c8b91c3ca4e3e337d.jpg", "/static/img/goodsImage/1193005/description/928676998c74976e97bb526e1ecf5eb5.jpg", "/static/img/goodsImage/1193005/description/6f668f79f87d05e67c69ccfee218754c.jpg", "/static/img/goodsImage/1193005/description/2a7b0669cb16811b7b9adcd7d86c96e8.jpg", "/static/img/goodsImage/1193005/description/ab6a8c6f85a1d9e3a79346f850acdda4.jpg", "/static/img/goodsImage/1193005/description/613ca569529f2fc8c46edd1f89255613.jpg", "/static/img/goodsImage/1193005/description/1bc733e49044d7cc91680ff4ebc46deb.jpg", "/static/img/goodsImage/1193005/description/94d9d18a554d5b56a83b11ad04f45b9d.jpg", "/static/img/goodsImage/1193005/description/ad7a0e8a2afe709675bc8c9119a9bdd9.jpg", "/static/img/goodsImage/1193005/description/b8796cf69f66ec537132ff7a734502f3.jpg", "/static/img/goodsImage/1193005/description/6cebcb1caf668192380ad43d995e724e.jpg", "/static/img/goodsImage/1193005/description/18d07f481fdaacfd1e368cd2908708dd.jpg"],
		"inventory": [740, 716],
		"information": [{
			"attrName": "里料",
			"attrValue": "81%锦纶 19%氨纶"
		}, {
			"attrName": "下摆",
			"attrValue": "70%锦纶 30%氨纶"
		}, {
			"attrName": "温馨提示",
			"attrValue": "本品除明确质量问题外不支持30天无忧退换货"
		}],
		"label": [{
			"title": "新品",
			"type": "2"
		}, {
			"title": "焕新专享",
			"type": "2"
		}],
		"manufacture": "Jockey制造商",
		"sale": 294,
		"date": "1500341084668",
		"category": "服装",
		"subCategory": "内衣"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1147043,
		"price": 109,
		"topName": "女式泡泡纱空气睡衣",
		"subName": "凉爽不贴身，夏季居家必备",
		"shortDescription": ["自然纯棉", "贴身舒适", "雅致镶边", "撞色勾勒", "古巴领口", "考究有型"],
		"shortDescriptionImage": ["/static/img/goodsImage/1147043/shortdescriptionImage/53c29a45ed2a680c752957291b92fe02.jpg", "/static/img/goodsImage/1147043/shortdescriptionImage/f9f8c0b7af3fd7717784dd96f302baf2.jpg", "/static/img/goodsImage/1147043/shortdescriptionImage/3c2325f8ac342cfa5c8393a72cd8f4d5.jpg"],
		"headImage": ["/static/img/goodsImage/1147043/headImage/d31ed90a574ea521de7764be376d60c8.png", "/static/img/goodsImage/1147043/headImage/522569d50650552e468ab385fe70bf17.jpg", "/static/img/goodsImage/1147043/headImage/a4746768561af48eff5c8cc6a6e02d0d.jpg", "/static/img/goodsImage/1147043/headImage/dfaf83aa23e6b99214a31b2f33928164.jpg", "/static/img/goodsImage/1147043/headImage/662483fe3bf09e59224fe94bf948770f.jpg"],
		"type": ["浅红", "淡绿"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1147043/description/7f70d07889d6199e317c688faabec7d2.jpg", "/static/img/goodsImage/1147043/description/acf5e0ed61ed854ac68767a2b1680afe.jpg", "/static/img/goodsImage/1147043/description/8b0ab8f54b9168fbb25d13b0ca176231.jpg", "/static/img/goodsImage/1147043/description/79201dd7908324823cbd25fbe516caec.jpg", "/static/img/goodsImage/1147043/description/23ff46b07270c9c2b449dc669ed8ea56.jpg", "/static/img/goodsImage/1147043/description/012d7fc0c2319bf7fcd39ea2b88eb9e1.jpg", "/static/img/goodsImage/1147043/description/d42c09169cc5b3471e5c180c6a30fa6b.jpg", "/static/img/goodsImage/1147043/description/a69568e6c85682fa7593ba2d5ed50b53.jpg", "/static/img/goodsImage/1147043/description/b7437004d0e7f2a1e0914665c07a5dc0.jpg", "/static/img/goodsImage/1147043/description/4c3ad9ef0cebd8f096d0fbeb43e7786c.jpg", "/static/img/goodsImage/1147043/description/0e09dfd23fe8dc7411949a026687f9cc.jpg", "/static/img/goodsImage/1147043/description/4094334d66eae21380014a23798b7ca3.jpg", "/static/img/goodsImage/1147043/description/478278eb4bb6274605c2c6bcb8c5915e.jpg", "/static/img/goodsImage/1147043/description/2899df437d4bae9a9410d0a024c1a87f.jpg", "/static/img/goodsImage/1147043/description/6f1614ca7f77e3d6b55d6982afb4d5b4.jpg", "/static/img/goodsImage/1147043/description/6f21c64c94227c823beb57dca5118079.jpg", "/static/img/goodsImage/1147043/description/78b92520f221c9dbd907a00f1ce063cc.jpg", "/static/img/goodsImage/1147043/description/6b178c0b1c0336915640501ff0987bdf.jpg", "/static/img/goodsImage/1147043/description/824f95baa8a53312264889480a10400b.jpg", "/static/img/goodsImage/1147043/description/75737a67fd3fc0e1ca9a0c6909b9e53e.jpg", "/static/img/goodsImage/1147043/description/dce055aecef024c062510248d355e076.jpg", "/static/img/goodsImage/1147043/description/b5e2c8ca33e82dea7dbfadc50e18edb8.jpg", "/static/img/goodsImage/1147043/description/9e0f9d6333428cfbea54208a3ccaa0e0.jpg", "/static/img/goodsImage/1147043/description/aa5770ee8ec5fb404ced5028d2c99d2a.jpg", "/static/img/goodsImage/1147043/description/d89ef60c7388fc519105f0d51533880f.jpg", "/static/img/goodsImage/1147043/description/1f15272448ae382fa88ec0953557bdc2.jpg", "/static/img/goodsImage/1147043/description/4534182475daf60f06171dd4451f81e1.jpg", "/static/img/goodsImage/1147043/description/3cd708600e182db42d1cb4bfaf658dcf.jpg", "/static/img/goodsImage/1147043/description/f4ed4bfdddaa278d3f0c880c21f77da4.jpg", "/static/img/goodsImage/1147043/description/4886b40fa67fb50b01bda49f9e27c640.jpg", "/static/img/goodsImage/1147043/description/c86232db7ed1f7f9a066ae1c7024b2d5.jpg", "/static/img/goodsImage/1147043/description/d33b1ebd8ff916c74111ff929629ac5c.jpg", "/static/img/goodsImage/1147043/description/80e0d792f633afb1dd96f49dddf3b271.jpg", "/static/img/goodsImage/1147043/description/6a499e0c2afae1c0425d8a162efd0f22.jpg", "/static/img/goodsImage/1147043/description/8c75cb283c34d6d21429e84b6c248f49.jpg", "/static/img/goodsImage/1147043/description/75c484e5ac03c21d33729b98aa8751d8.jpg", "/static/img/goodsImage/1147043/description/f6d1ec9d92f31ed09c96563cb703efbe.jpg", "/static/img/goodsImage/1147043/description/49517de8bc00788bddb52380a6e302c2.jpg", "/static/img/goodsImage/1147043/description/35abd3298e0ffdcf33ba256df412616f.jpg", "/static/img/goodsImage/1147043/description/6a4235e1c247f222b73944b4a724a787.jpg", "/static/img/goodsImage/1147043/description/7390f41d871213647cce9ca5fb19e9a2.jpg", "/static/img/goodsImage/1147043/description/4ead9a3cb84a9a417a577d3288fab772.jpg", "/static/img/goodsImage/1147043/description/cefff16e1f09b0270d067314b5a7bf7b.jpg", "/static/img/goodsImage/1147043/description/0c53e842b1a7dc60bba8898a8802d19e.jpg", "/static/img/goodsImage/1147043/description/baf180dcee3f647e6937b692f1b62994.jpg", "/static/img/goodsImage/1147043/description/e899728d5f310e57e1a5d6eba129c695.jpg", "/static/img/goodsImage/1147043/description/1ff268db3de6dd9239dc27bf43a3960b.jpg", "/static/img/goodsImage/1147043/description/af55373ca5b2cd397e8ad8cdc5bbd81e.jpg", "/static/img/goodsImage/1147043/description/f25aa927db60d59254a2b948acb72ebe.jpg"],
		"inventory": [103, 865],
		"information": [{
			"attrName": "温馨提示",
			"attrValue": "由于泡泡纱材质的特性，睡衣纱面十分清薄透析，日常居家穿着时建议内搭浅色内里。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "CK制造商",
		"sale": 393,
		"date": "1500341089232",
		"category": "服装",
		"subCategory": "家居服"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1125001,
		"price": 39,
		"topName": "5双装 纯色休闲女式夏季隐形袜",
		"subName": "CK制造商，看不见的清爽",
		"shortDescription": ["精梳棉制", "舒适脚感", "防滑胶条", "不易掉跟", "进口工艺", "大牌品质"],
		"shortDescriptionImage": ["/static/img/goodsImage/1125001/shortdescriptionImage/c86493f3387b5656f67d16dd99238db1.jpg", "/static/img/goodsImage/1125001/shortdescriptionImage/cdac621699efa41713aba2ff2eb9f1f9.jpg", "/static/img/goodsImage/1125001/shortdescriptionImage/65c0479792d1178345a318494bc8d3dd.jpg"],
		"headImage": ["/static/img/goodsImage/1125001/headImage/74f7d49b7482a21f8634761dba8c2a21.png", "/static/img/goodsImage/1125001/headImage/7b37de955f7ec3a74e2358991e777531.jpg", "/static/img/goodsImage/1125001/headImage/446fd1eeb2008aec0ff36ae28432e1db.jpg", "/static/img/goodsImage/1125001/headImage/b7b40235b90c9e0ab3bf0456af011f58.jpg", "/static/img/goodsImage/1125001/headImage/420abebc6afdcb089efec1fc951c72d1.jpg"],
		"type": ["粉色+驼色+灰色+黑色+白色"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1125001/description/f1fbc3816efd16ab05fee1544f76a440.jpg", "/static/img/goodsImage/1125001/description/b223d2165d8709eba23729fdea35e223.jpg", "/static/img/goodsImage/1125001/description/7da5bfc2be05ccb3b282132b4048d23b.jpg", "/static/img/goodsImage/1125001/description/70898207eaaaa7a873e5db68769f676c.jpg", "/static/img/goodsImage/1125001/description/bf01111a7ce71681f952a06daa3d63f3.jpg", "/static/img/goodsImage/1125001/description/b716bdc6bcc6995066ce033f79d92d84.jpg", "/static/img/goodsImage/1125001/description/eb9072f18197599c3942ce4da81a2a82.jpg", "/static/img/goodsImage/1125001/description/da729e413faecdd2cf336003001628a9.jpg", "/static/img/goodsImage/1125001/description/95f01ebfb822499a858547f6c535abab.jpg", "/static/img/goodsImage/1125001/description/f21ccf6240dbd6c0fe9433cda6974c1f.jpg", "/static/img/goodsImage/1125001/description/abe1ab8572fe4bd17c633dc49ee8f2df.jpg", "/static/img/goodsImage/1125001/description/337ca1c3e687369deb83f9dfaf6c52e0.jpg", "/static/img/goodsImage/1125001/description/c1acc6b216b52fd7d0cd84ba2cb7ba22.jpg", "/static/img/goodsImage/1125001/description/714a10ee1e9beec67765afa10f491cf0.jpg", "/static/img/goodsImage/1125001/description/c174d2efef9f1ab43d7ccf3fc25ab8c9.jpg", "/static/img/goodsImage/1125001/description/b1f7010d3d69c9cf872e36f59d547b2a.jpg", "/static/img/goodsImage/1125001/description/7f4d9c6e981fa89762d18bd2bbe9766a.jpg", "/static/img/goodsImage/1125001/description/515ad6ad7617cc96432ff288c6815f3a.jpg", "/static/img/goodsImage/1125001/description/5da00e33fb76335d620f4e0acbc88ac7.jpg", "/static/img/goodsImage/1125001/description/d3e5469ba75c0914359063673f74f562.jpg", "/static/img/goodsImage/1125001/description/9dfa91f974ffb6f2e985fac7b580d0ab.jpg", "/static/img/goodsImage/1125001/description/61f41c86b308a28121a0d1677968034e.jpg", "/static/img/goodsImage/1125001/description/8618b8f6bdf17548f10221623b932891.jpg", "/static/img/goodsImage/1125001/description/1d024380dcea131259dbdbedfc563d58.jpg", "/static/img/goodsImage/1125001/description/78b2a85f65b02c9588d361869caae18a.jpg", "/static/img/goodsImage/1125001/description/d5369c392479461b9ed85a6d59f156b2.jpg", "/static/img/goodsImage/1125001/description/349a75b78f898ec9b9a91cc6cf34363f.jpg", "/static/img/goodsImage/1125001/description/821c6f08648f0dc77b541bf3aed57d35.jpg", "/static/img/goodsImage/1125001/description/179b6d45667ee0f08c1e62f89e69f195.jpg", "/static/img/goodsImage/1125001/description/0b970c09b2cc6be85045abc1b349a6d8.jpg", "/static/img/goodsImage/1125001/description/737b8cdb5cd9bfa66f4080cad904893a.jpg", "/static/img/goodsImage/1125001/description/16ab0f5683f47923706aae84de39b0b5.jpg", "/static/img/goodsImage/1125001/description/c0bef1a38cbe9f458fef2d58ef8d9e50.jpg", "/static/img/goodsImage/1125001/description/910c1db4b644026086de315069646fae.jpg", "/static/img/goodsImage/1125001/description/0bbd6aaf0b1c2c987b94405a1a4a47ad.jpg", "/static/img/goodsImage/1125001/description/fe3c1558ad970a6d2b4e72ceeb71524d.jpg", "/static/img/goodsImage/1125001/description/e425a8f0a526db060930f230b27532ce.jpg", "/static/img/goodsImage/1125001/description/6aa4300ba0ba7fb6a1c5785ce6f2412e.jpg", "/static/img/goodsImage/1125001/description/eb416e5a9fc8f05355a962d65f6947e4.jpg", "/static/img/goodsImage/1125001/description/6c654981ce4af93951940715ccb61f32.jpg", "/static/img/goodsImage/1125001/description/1347bf085ac1c3c24aff93db868aa12c.jpg", "/static/img/goodsImage/1125001/description/847e4ff9ec3f1f186e19e9be691fafec.jpg", "/static/img/goodsImage/1125001/description/7ea1dbe219b9b248398109af9fec9a2f.jpg", "/static/img/goodsImage/1125001/description/b595feea0b16a68ac0f080a5382e82af.jpg", "/static/img/goodsImage/1125001/description/e54c0a6f15c6a48d3a968cc178426701.jpg", "/static/img/goodsImage/1125001/description/62dd44c9b5cc322fc619c833a1db46ad.jpg", "/static/img/goodsImage/1125001/description/2a09de7169b85296c6e2b59d0bbbd5ab.jpg", "/static/img/goodsImage/1125001/description/79e50b74c1bf7a9ca6bd9ec270a6fc0b.jpg"],
		"inventory": [742],
		"information": [{
			"attrName": "袜底成分",
			"attrValue": "63.2% 棉、31.9% 聚酯纤维、4.9% 氨纶"
		}, {
			"attrName": "执行标准",
			"attrValue": "FZ/T 73001-2008"
		}, {
			"attrName": "注意事项",
			"attrValue": "1.注意不要被尖锐物品刮刺；2.尽量手洗；3.有防滑胶；4.袜子穿着较久后若有浮毛和起球，属于正常现象。"
		}, {
			"attrName": "规格",
			"attrValue": "22-24cm"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "CK制造商",
		"sale": 8,
		"date": "1500341092325",
		"category": "服装",
		"subCategory": "袜子"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1116029,
		"price": 49,
		"topName": "3双装 -3℃沁凉冰感连裤袜",
		"subName": "厚木制造商，专利冰丝",
		"shortDescription": ["透气吸汗", "遇水速干", "不易勾丝", "弹性持久", "抗菌袜裆", "健康呵护"],
		"shortDescriptionImage": ["/static/img/goodsImage/1116029/shortdescriptionImage/8ed877bc548ae47d89b87563a979c8dd.jpg", "/static/img/goodsImage/1116029/shortdescriptionImage/4b0843351012aee4297c674603fff5ff.jpg", "/static/img/goodsImage/1116029/shortdescriptionImage/b7b6089078a6198aeacf6f0016359c30.jpg"],
		"headImage": ["/static/img/goodsImage/1116029/headImage/d969436904287630c1be7efa0ed8e98e.png", "/static/img/goodsImage/1116029/headImage/31f50456dfbdb44eaceaa4a74ce03c85.jpg", "/static/img/goodsImage/1116029/headImage/52043e48bf92f86d3b7d69119cc8a5c5.jpg", "/static/img/goodsImage/1116029/headImage/861c2eb5e158e369d08ad5a48612e562.jpg", "/static/img/goodsImage/1116029/headImage/3116d14b222c251bbf192b31df0277f8.jpg"],
		"type": ["黑色*3", "肤色*3"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1116029/description/2c0a3466313c79116db6a2903f58743a.jpg", "/static/img/goodsImage/1116029/description/8240d54ab786cf802403462496d641a3.jpg", "/static/img/goodsImage/1116029/description/4804d4885eff8d471023b1ecbcb577d9.jpg", "/static/img/goodsImage/1116029/description/08309db86bc43b5a2fc1bcc91c47b478.jpg", "/static/img/goodsImage/1116029/description/ce14b6b13674dcf7cfcf1d3559d52e2c.jpg", "/static/img/goodsImage/1116029/description/21069917bf6f4ca8160f876919c449ee.jpg", "/static/img/goodsImage/1116029/description/52ab3e6b76dc462f7cce04b2ba1ad9fb.jpg", "/static/img/goodsImage/1116029/description/6f5ed308331280d61e12017c06e7424e.jpg", "/static/img/goodsImage/1116029/description/69171402264817ac88bad08375d7f02a.jpg", "/static/img/goodsImage/1116029/description/82f54e7849e03a0e2c74bc12486bd21d.jpg", "/static/img/goodsImage/1116029/description/f594ebc190a64e83dfa8d9f4ac2ea897.jpg", "/static/img/goodsImage/1116029/description/e42514c659975359d77fd7c8839e99b1.jpg", "/static/img/goodsImage/1116029/description/5ef85de24dccf53fe549818f78851f23.jpg", "/static/img/goodsImage/1116029/description/55e1c4b2704a7b5cae77c05a848d657a.jpg", "/static/img/goodsImage/1116029/description/9883498d6a1a2fac1440daf7e9be00eb.jpg", "/static/img/goodsImage/1116029/description/d03136af56938ed50142a4be3346687b.jpg", "/static/img/goodsImage/1116029/description/05d66921ee326355e9160c2eb4858e99.jpg", "/static/img/goodsImage/1116029/description/c64a7dec54c5d27e764010d6b8b9fbe4.jpg", "/static/img/goodsImage/1116029/description/5c7d8a7b2f074504c07bb646b83855c2.jpg", "/static/img/goodsImage/1116029/description/96f110dceec79cefb003510e96f24414.jpg", "/static/img/goodsImage/1116029/description/9ea993496df765cd559baca001d61db0.jpg", "/static/img/goodsImage/1116029/description/44429b9e36494e94eca301b866dc1adb.jpg", "/static/img/goodsImage/1116029/description/cf5fa1cf5aed1e122798b7974e8c0c10.jpg", "/static/img/goodsImage/1116029/description/78beafb680cac374b2c1987586984c47.jpg", "/static/img/goodsImage/1116029/description/ae7c09322bb31820ec5765cfd10d0590.jpg", "/static/img/goodsImage/1116029/description/c46379172057eff14a65746ca9d4f878.jpg", "/static/img/goodsImage/1116029/description/15c01a53d1444bdde3c7c808bb37555a.jpg", "/static/img/goodsImage/1116029/description/c3d39f982d4e235260d5125bc7402471.jpg", "/static/img/goodsImage/1116029/description/45360172a84c1066010f00e4bb8f96fe.jpg", "/static/img/goodsImage/1116029/description/db13747d2f0820581ff326498029881e.jpg", "/static/img/goodsImage/1116029/description/da3b01a0fb679b0122774f7e44a3e6ae.jpg", "/static/img/goodsImage/1116029/description/5b6a0eb864d7fc6f9460c1d3d8ebcbb4.jpg", "/static/img/goodsImage/1116029/description/47969f06f2d63ae6fffcad0f935d7244.jpg", "/static/img/goodsImage/1116029/description/bdebd39a8891f796cf5f5101c3fde292.jpg", "/static/img/goodsImage/1116029/description/ff7520a13daf20fad2054f53f4f40650.jpg", "/static/img/goodsImage/1116029/description/11c4dcb7110b50c40cd8a34a26d0e9b6.jpg", "/static/img/goodsImage/1116029/description/97367fe2b5ba70111864f228be3d55d2.jpg", "/static/img/goodsImage/1116029/description/deff0a54a4b603ac3f093bce20a25395.jpg", "/static/img/goodsImage/1116029/description/34c75759d5219248beafcfa8bfc691d8.jpg", "/static/img/goodsImage/1116029/description/aee48e3d13c592400478c310c715d7c4.jpg", "/static/img/goodsImage/1116029/description/5974d1a70b3c761f4c519ed550b80026.jpg", "/static/img/goodsImage/1116029/description/cde7d6e51ff21665218788b0a6a988ff.jpg", "/static/img/goodsImage/1116029/description/2672daae41e0250eb63dd13f068c2df6.jpg", "/static/img/goodsImage/1116029/description/2837f0e6e6d364f3bdb036d4b149c074.jpg", "/static/img/goodsImage/1116029/description/c5509262bd96ead08c2f7b7427a762e9.jpg", "/static/img/goodsImage/1116029/description/43b73597b2194a3199d3a86b6dbc83d2.jpg", "/static/img/goodsImage/1116029/description/c1a94733d4cb4fb3d17804e718c9caf0.jpg", "/static/img/goodsImage/1116029/description/b5e366f966df058a7ccd2f7aa78108fd.jpg", "/static/img/goodsImage/1116029/description/5dc9938196aa63b1006879ae3033c9df.jpg", "/static/img/goodsImage/1116029/description/a89e4d957db0a30d88c6898996cfec96.jpg", "/static/img/goodsImage/1116029/description/99c90059f57499173fb662dcc1184085.jpg", "/static/img/goodsImage/1116029/description/0112a56a34df70a275fb9ec49c49dca0.jpg", "/static/img/goodsImage/1116029/description/de1d7f3af6da4e3a0d4f7e0a4b83fafd.jpg", "/static/img/goodsImage/1116029/description/137cdce1991dd2cae1edbab591dd2017.jpg", "/static/img/goodsImage/1116029/description/3c1965e6373f0e6f0c12ab08b416c942.jpg", "/static/img/goodsImage/1116029/description/81a9f978455844946dd9ebe353b1de30.jpg"],
		"inventory": [420, 332],
		"information": [{
			"attrName": "颜色",
			"attrValue": "黑色、肤色"
		}, {
			"attrName": "材质",
			"attrValue": "锦纶82%、氨纶18%"
		}, {
			"attrName": "执行标准",
			"attrValue": "FZ/T 73001-2008"
		}, {
			"attrName": "规格",
			"attrValue": "身高：150-170cm臀围：85-98cm（仅供参考）"
		}, {
			"attrName": "注意事项",
			"attrValue": "1.小心穿着，袜子质地较薄，用力拉扯会撕破；2.避免被任何尖锐物体刮刺。"
		}, {
			"attrName": "厚薄度",
			"attrValue": "10D"
		}],
		"label": [{
			"title": "N元任选",
			"type": "1"
		}],
		"manufacture": "厚木ATSUGI制造商",
		"sale": 315,
		"date": "1500341095280",
		"category": "服装",
		"subCategory": "丝袜"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1245027,
		"price": 129,
		"topName": "法国雨露棉麻合体版男式短袖衬衫",
		"subName": "天然棉麻的触感与心跳",
		"shortDescription": ["吸湿透气", "亲肤细腻", "缤纷多色", "装点生活", "合体版型", "百搭易穿"],
		"shortDescriptionImage": ["/static/img/goodsImage/1245027/shortdescriptionImage/5559c876ce0d2165739504252b2f4b22.jpg", "/static/img/goodsImage/1245027/shortdescriptionImage/3fba59caf0ca5602b75184abc613cb81.jpg", "/static/img/goodsImage/1245027/shortdescriptionImage/654cd8f7c078895be8e24cf9bce98526.jpg"],
		"headImage": ["/static/img/goodsImage/1245027/headImage/ff41545799f9cf581347ee9c9caea2bb.png", "/static/img/goodsImage/1245027/headImage/b87ddf7a957906513d6b57f4f42a3f80.jpg", "/static/img/goodsImage/1245027/headImage/b263ed23ddbca8827020532243edeb20.jpg", "/static/img/goodsImage/1245027/headImage/eb868edc6b42a7d3732b7a6426df000e.jpg", "/static/img/goodsImage/1245027/headImage/44f15c5271c65c111ed136a030e7fb6d.jpg"],
		"type": ["牛仔蓝", "天空蓝", "白色", "藏蓝色"],
		"chara": "4色可选",
		"description": ["/static/img/goodsImage/1245027/description/1b641a508af68a4f4789de83c8d7da38.jpg", "/static/img/goodsImage/1245027/description/b25f83e4f332087b256770568a2324b7.jpg", "/static/img/goodsImage/1245027/description/efbed80a1b657b5fa83016ab7ad6c581.jpg", "/static/img/goodsImage/1245027/description/7c4c157e5aa9863745cf117507c1eac1.jpg", "/static/img/goodsImage/1245027/description/823f24766296057e420dbe20bcd9c657.jpg", "/static/img/goodsImage/1245027/description/3587171fd46917548e486afb5f13ab7c.jpg", "/static/img/goodsImage/1245027/description/a7cc07c6eac54d067a7c660f7319b7d1.jpg", "/static/img/goodsImage/1245027/description/2720cf33c7ec78e724340147a2adf8da.jpg", "/static/img/goodsImage/1245027/description/b87722f795d65bb9429263a390221650.jpg", "/static/img/goodsImage/1245027/description/a1790d65f449349a213b2e9d790e0b12.jpg", "/static/img/goodsImage/1245027/description/c2bf425ea2542d3b3a49c193cd2dfb3f.jpg", "/static/img/goodsImage/1245027/description/1ee796a88f0fbe623d9a3666dfc3b932.jpg", "/static/img/goodsImage/1245027/description/5dc993dcde0accffef0963d2c5a4a031.jpg", "/static/img/goodsImage/1245027/description/1befa02ea0a382cd4f878aefb5eb3388.jpg", "/static/img/goodsImage/1245027/description/6dbefec755dc88ce007674fc55402ef5.jpg", "/static/img/goodsImage/1245027/description/e70e4f77ea00bb51b13aa6592ba19a24.jpg", "/static/img/goodsImage/1245027/description/07eadae45ffbb890fd0cd1f8af636f26.jpg", "/static/img/goodsImage/1245027/description/baef2f8c89c0f1c6a0df366152553d3d.jpg", "/static/img/goodsImage/1245027/description/1ada4126c27d59a3b86ec8d77bf7de68.jpg", "/static/img/goodsImage/1245027/description/d1bdf1640e034b20ae60937b793054e2.jpg", "/static/img/goodsImage/1245027/description/6e4e5014b6277607ba3801bc91fb4da5.jpg", "/static/img/goodsImage/1245027/description/a7b32a2027772be34e485cff5733c29a.jpg", "/static/img/goodsImage/1245027/description/bbd25f5cd5eeda087e63a23498b5f40f.jpg", "/static/img/goodsImage/1245027/description/7094fcae2a81eacb1b73892f3fa52187.jpg", "/static/img/goodsImage/1245027/description/b8fea3468eda9486dac1afa00f364d5e.jpg", "/static/img/goodsImage/1245027/description/bc7d1e3ad118b60c1e3dd1f740d8753e.jpg", "/static/img/goodsImage/1245027/description/c452f9698d8500daf60e40298ac2ae7f.jpg", "/static/img/goodsImage/1245027/description/4998434c1b9d06af32d85d237763787b.jpg", "/static/img/goodsImage/1245027/description/c20c0db1923fb609fcc7ea85e323255e.jpg", "/static/img/goodsImage/1245027/description/c40757eb70c9eac5330352046ee7132e.jpg", "/static/img/goodsImage/1245027/description/0258ed4f3a781453e0b94065e364dad5.jpg", "/static/img/goodsImage/1245027/description/297f69158001c33d48684f61819539bb.jpg", "/static/img/goodsImage/1245027/description/c0a747b334d16656951340297e8b7c5b.jpg", "/static/img/goodsImage/1245027/description/e71f7de40c0abdfe8c34382a160fbd30.jpg", "/static/img/goodsImage/1245027/description/9de49e4b044207defb36e802c60de375.jpg", "/static/img/goodsImage/1245027/description/5db641f1bc160855129203e5e61aabca.jpg", "/static/img/goodsImage/1245027/description/787622325e6a409a8b09bf0f6e2944ef.jpg", "/static/img/goodsImage/1245027/description/14b40e84e018c44687ce340fc78ddb42.jpg", "/static/img/goodsImage/1245027/description/d0e2255b7c763cb086a4f91a1b2cb0ae.jpg", "/static/img/goodsImage/1245027/description/71d2cfbc32859f59ba3047be9d54f62f.jpg", "/static/img/goodsImage/1245027/description/9a5d7448f29bbe6c11518aa3e8eff4ad.jpg", "/static/img/goodsImage/1245027/description/9a9523496aad652b358175280f3453d8.jpg", "/static/img/goodsImage/1245027/description/515fdf8738aa1fe64ebed85368f434a8.jpg", "/static/img/goodsImage/1245027/description/af3f2587028f7120d3dfa2a78df3382c.jpg", "/static/img/goodsImage/1245027/description/9c8fc4c0334e35f2a1dd762189db533c.jpg", "/static/img/goodsImage/1245027/description/631efb79b00e92b7ffd5b37c73a82fa4.jpg", "/static/img/goodsImage/1245027/description/630d886dffb0d1aaaec77650867f9ae9.jpg", "/static/img/goodsImage/1245027/description/8573803a33d85ecb8589c93af5e1ffc8.jpg", "/static/img/goodsImage/1245027/description/e2634f5b5e8170667913db365224d5db.jpg", "/static/img/goodsImage/1245027/description/f29702166972da490f196a00acdbb252.jpg", "/static/img/goodsImage/1245027/description/c63b2484f502b19fef88f9664291ad68.jpg", "/static/img/goodsImage/1245027/description/dea26c2087308399ad7c4304af2bdd65.jpg", "/static/img/goodsImage/1245027/description/0d658b9a2becc82ef462196b3dc1c627.jpg", "/static/img/goodsImage/1245027/description/9b9d4173e9993ea221b0bdc33a42d00b.jpg", "/static/img/goodsImage/1245027/description/2971b9e5ad80837dd132734224997ab4.jpg", "/static/img/goodsImage/1245027/description/08579f0778a41e5fcc69d0c62a237c4b.jpg", "/static/img/goodsImage/1245027/description/1ae6ad674d5e6bf4169b5348e932405d.jpg", "/static/img/goodsImage/1245027/description/5f90f9f408e15999d08685c4f97626d7.jpg", "/static/img/goodsImage/1245027/description/65db2c90ed3a83d5957ba212c77ac884.jpg", "/static/img/goodsImage/1245027/description/73789a74ebfe2633946e04055766a76a.jpg", "/static/img/goodsImage/1245027/description/27d7350f8aff5c3a314b9def547c46fe.jpg", "/static/img/goodsImage/1245027/description/f544993a9b6e1ad61dfce44f7e2dbde5.jpg", "/static/img/goodsImage/1245027/description/60b1c4b845f95583faefecb7f409ad40.jpg", "/static/img/goodsImage/1245027/description/6b18661de79816f44033d176e9dd0fb9.jpg", "/static/img/goodsImage/1245027/description/112b82cc27bde0767feb9377f0dbcd4e.jpg", "/static/img/goodsImage/1245027/description/1a6882dc664e850078ce76a2aac5f229.jpg", "/static/img/goodsImage/1245027/description/83f0961a1b3d471fc71c3b4b703c1e21.jpg", "/static/img/goodsImage/1245027/description/9290bab64c8b4f5e6c82f564b7eb7c2e.jpg", "/static/img/goodsImage/1245027/description/4fcb927dd52f929d8fe4f2a6cb985471.jpg", "/static/img/goodsImage/1245027/description/24d8c3b7d08348111c51856dbf7d8f4b.jpg", "/static/img/goodsImage/1245027/description/26839fd05aefbef666a29ed5019c35bf.jpg", "/static/img/goodsImage/1245027/description/828c87f02c650431069f6a0291c08704.jpg", "/static/img/goodsImage/1245027/description/3ed5c75f3645f676a40db9dd27a65119.jpg", "/static/img/goodsImage/1245027/description/dffaf7d202ee45b2e5a3d1f3b6520a7d.jpg", "/static/img/goodsImage/1245027/description/9cc01b9c94858f4ec934cf9e17957055.jpg", "/static/img/goodsImage/1245027/description/dca49f1fcd026c359fd2c44d824ad669.jpg"],
		"inventory": [244, 132, 56, 469],
		"information": [{
			"attrName": "产地",
			"attrValue": "浙江 宁波"
		}],
		"label": [{
			"title": "新品",
			"type": "2"
		}, {
			"title": "焕新专享",
			"type": "1"
		}],
		"manufacture": "",
		"sale": 126,
		"date": "1500341098281",
		"category": "服装",
		"subCategory": "衬衫"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1207003,
		"price": 139,
		"topName": "女式冰爽水柔棉连帽开衫",
		"subName": "空调间必备",
		"shortDescription": ["清爽透气", "舒适百搭", "条干均匀", "柔软细腻", "功能指扣", "细节考量"],
		"shortDescriptionImage": ["/static/img/goodsImage/1207003/shortdescriptionImage/ade0efb59a385e31010b28e8dd5d4e8c.jpg", "/static/img/goodsImage/1207003/shortdescriptionImage/9e070ec8ebe3c2cb5fa44a7692b25f50.jpg", "/static/img/goodsImage/1207003/shortdescriptionImage/a28ba42493537beccb875311ce48b6a2.jpg"],
		"headImage": ["/static/img/goodsImage/1207003/headImage/05ea499519c8f259277244fd0beb833a.png", "/static/img/goodsImage/1207003/headImage/1bbd93d2bb1f9e1915d6bb841c31483a.jpg", "/static/img/goodsImage/1207003/headImage/d7fb3a4189a6917f0c3cc291fe333de7.jpg", "/static/img/goodsImage/1207003/headImage/5d6de621cef490468406247a525cb011.jpg", "/static/img/goodsImage/1207003/headImage/a9cde5419b359f829d5bc96422b57d0e.jpg"],
		"type": ["白色", "黑色", "浅灰色", "浅粉色", "浅蓝色"],
		"chara": "5色可选",
		"description": ["/static/img/goodsImage/1207003/description/4dccc51603b8fec1732c6175eee3d441.jpg", "/static/img/goodsImage/1207003/description/7278c1998ba02f33e11b963df18c4ee1.jpg", "/static/img/goodsImage/1207003/description/1b00e96ada43557e12146e406df0f786.jpg", "/static/img/goodsImage/1207003/description/8c8ea99730b1f13594135ff818bc1a4b.jpg", "/static/img/goodsImage/1207003/description/eed3d79f55364793b237ce6dfe79adc8.jpg", "/static/img/goodsImage/1207003/description/a39f7e4955cd8cc259c6847e7ca92bcd.jpg", "/static/img/goodsImage/1207003/description/c11b3800428a110fb364de3d54e99419.jpg", "/static/img/goodsImage/1207003/description/bf191bb80fe4076531dffb9ca46d8256.jpg", "/static/img/goodsImage/1207003/description/d0b76a90c36588891b39d134eb4f4bec.jpg", "/static/img/goodsImage/1207003/description/d7d7552518e4b5760f98b3bda499c3fe.jpg", "/static/img/goodsImage/1207003/description/b2824d8b3555e0feb17d55b0ed46732d.jpg", "/static/img/goodsImage/1207003/description/a824074e367b73719d77433484b2aae2.jpg", "/static/img/goodsImage/1207003/description/d2e9ebb72a26d99ba3907d3b45e81707.jpg", "/static/img/goodsImage/1207003/description/61851a0facb0df36e71a7fe58e240909.jpg", "/static/img/goodsImage/1207003/description/50d76a9f4dd45acbc1e9c70850f60eab.jpg", "/static/img/goodsImage/1207003/description/067a64cf5109472b0b5acbdbfb464e1b.jpg", "/static/img/goodsImage/1207003/description/2ca0f12c54702554da45aa22e6167c36.jpg", "/static/img/goodsImage/1207003/description/a60b2ace39d36e5d4c71421a63118060.jpg", "/static/img/goodsImage/1207003/description/58c0ca02f6ef39fcc872ae8fb01ad0c5.jpg", "/static/img/goodsImage/1207003/description/8959cc21eb105ccecc1ef8273f8122da.jpg", "/static/img/goodsImage/1207003/description/27c2afeab4e83d5dc248d920cc7b1a34.jpg", "/static/img/goodsImage/1207003/description/bea0ab2eba0001f91336b2c9fdd8df57.jpg", "/static/img/goodsImage/1207003/description/1a51332b267659b5f7b073729181cdaf.jpg", "/static/img/goodsImage/1207003/description/df9538fc6cb5cda6fc371a3a76f1ec04.jpg", "/static/img/goodsImage/1207003/description/9005e86954d4cfc8a619d55130593321.jpg", "/static/img/goodsImage/1207003/description/6ec6a667436ad2f5045c565e53252141.jpg", "/static/img/goodsImage/1207003/description/3e7a801a9ddbb1852306aee9e5ff8fc2.jpg", "/static/img/goodsImage/1207003/description/ff8f28854ec63434c293af01e2e3c7d8.jpg", "/static/img/goodsImage/1207003/description/6d9d6e02dbdf250ac6b4d8ecdd29078b.jpg", "/static/img/goodsImage/1207003/description/7f3d159dfe7e54040e4b0b6a67c74140.jpg", "/static/img/goodsImage/1207003/description/3da339b9b8c6c51f62676580f83ada97.jpg", "/static/img/goodsImage/1207003/description/a659e0048931ca339c3d2a23793628ff.jpg", "/static/img/goodsImage/1207003/description/9b58ff01acadd1c008580f79bb8f9f4a.jpg", "/static/img/goodsImage/1207003/description/08a3888ed46f606dcbd31a1866a66538.jpg", "/static/img/goodsImage/1207003/description/c64965a18d5a9011ed2450ce2b79f7d6.jpg", "/static/img/goodsImage/1207003/description/f8087269d0eb2c7c6d052b8a50fb81c6.jpg", "/static/img/goodsImage/1207003/description/327bc574218f791b17a95d28c34de75d.jpg", "/static/img/goodsImage/1207003/description/e1be79e021bcadead5250a6fc62c23d3.jpg", "/static/img/goodsImage/1207003/description/17558a1ec2154a0ecda6bd5c6321aa2c.jpg", "/static/img/goodsImage/1207003/description/fc9faca96bc7b410847a429df9a6781d.jpg", "/static/img/goodsImage/1207003/description/fa24c00c76318dfa00e7e3b4f29603c7.jpg", "/static/img/goodsImage/1207003/description/a0bdeca9b49d012166b503e2c84fd985.jpg", "/static/img/goodsImage/1207003/description/800f09c935266d02c5702401895deb90.jpg", "/static/img/goodsImage/1207003/description/f8e189b21a5395deb10574979a0b5138.jpg", "/static/img/goodsImage/1207003/description/ca59666dbdefa60f72242513c0343c50.jpg", "/static/img/goodsImage/1207003/description/dba88e23a966d87c83787508acc4bde7.jpg", "/static/img/goodsImage/1207003/description/cb04826778680cdea506baa062fa173f.jpg", "/static/img/goodsImage/1207003/description/2981a3ed85f5c9bdce7d65363a0da984.jpg", "/static/img/goodsImage/1207003/description/66daadb939c0901159bb0dad2ec67ee4.jpg", "/static/img/goodsImage/1207003/description/ce491a0560f38a1a6aad95ebeb88dcfb.jpg", "/static/img/goodsImage/1207003/description/3ad4c2443e64388eb8fe479de5f87b64.jpg", "/static/img/goodsImage/1207003/description/049658d72433c6ab62aded523bee21ad.jpg", "/static/img/goodsImage/1207003/description/36ca87176e35d613f195f12fbc293c09.jpg", "/static/img/goodsImage/1207003/description/420028e0374e08eb94d5990781dffcd0.jpg", "/static/img/goodsImage/1207003/description/6b1c9fe4317172c0bd795dad26b6479f.jpg", "/static/img/goodsImage/1207003/description/e73da626ad6134a4a3ced3711b3ad067.jpg", "/static/img/goodsImage/1207003/description/b4e86d6233349715725f8041439aaf6b.jpg", "/static/img/goodsImage/1207003/description/3e2f8015d73482088980d8f6269ad8c1.jpg", "/static/img/goodsImage/1207003/description/58e8b25df251c052a62b9b7f7d860e0a.jpg", "/static/img/goodsImage/1207003/description/64cff1c07167884f80301cdbef1da351.jpg", "/static/img/goodsImage/1207003/description/c127de5038988ed4969ab0b4dc736924.jpg", "/static/img/goodsImage/1207003/description/e68a5907d5b47326c72da52c8ba7e65d.jpg", "/static/img/goodsImage/1207003/description/3ba295e94deb995ba8fc48889d955023.jpg", "/static/img/goodsImage/1207003/description/e74aac196907a03eebd0370055bb9666.jpg", "/static/img/goodsImage/1207003/description/338983a7320568f8f21abd4a491d4854.jpg", "/static/img/goodsImage/1207003/description/cd656beca79284039f07d31701bdb268.jpg", "/static/img/goodsImage/1207003/description/0c4fe73c0548093cda60ec6b3e04b837.jpg", "/static/img/goodsImage/1207003/description/c70600e4a566016a3692acf177b96c15.jpg", "/static/img/goodsImage/1207003/description/8cff38744a6c8d0e028d900082534e44.jpg"],
		"inventory": [373, 91, 827, 236, 4],
		"information": [{
			"attrName": "产地",
			"attrValue": "宁波 奉化"
		}],
		"label": [{
			"title": "新品",
			"type": "1"
		}, {
			"title": "焕新专享",
			"type": "1"
		}],
		"manufacture": "",
		"sale": 378,
		"date": "1500341101246",
		"category": "服装",
		"subCategory": "卫衣"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1086008,
		"price": 349,
		"topName": "男式美利奴V领经典羊毛衫",
		"subName": "100%美利奴澳毛，温暖绅士必备",
		"shortDescription": ["毛质优良", "保暖恒温", "手感顺滑", "舒适柔软", "经典款型", "易于搭配"],
		"shortDescriptionImage": ["/static/img/goodsImage/1086008/shortdescriptionImage/05996cb7ce82cb0923f195b2a9c162ce.png", "/static/img/goodsImage/1086008/shortdescriptionImage/2021c25b3893f52cefd962b09a9dd3c6.png", "/static/img/goodsImage/1086008/shortdescriptionImage/8451fb1b9456d88e66d68f8ca1e07574.png"],
		"headImage": ["/static/img/goodsImage/1086008/headImage/7e5cb0d55efe158842521732b55bc7ab.png", "/static/img/goodsImage/1086008/headImage/6833178d03f7cef4cf14e834813c0892.jpg", "/static/img/goodsImage/1086008/headImage/57ce0ac4b30793490735e00e9b723f6c.jpg", "/static/img/goodsImage/1086008/headImage/c15cbc32128b367bd20cb59f42ce9633.jpg", "/static/img/goodsImage/1086008/headImage/d8a836c9713d3cc05704d5f22fec1a7a.jpg"],
		"type": ["藏青色", "黑色"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1086008/description/7e1bfff6f2687afbf8b119178764b217.jpg", "/static/img/goodsImage/1086008/description/76d2877f753c0036becd7062539067f8.jpg", "/static/img/goodsImage/1086008/description/21626c1b266c775d75c3fb351b2d53f8.jpg", "/static/img/goodsImage/1086008/description/8423a916eeb0ea3a157537ff2648970b.jpg", "/static/img/goodsImage/1086008/description/4466c5a048e3085b908c22ce11051568.jpg", "/static/img/goodsImage/1086008/description/1bbe9165d7cf968410f34f23913c4dad.jpg", "/static/img/goodsImage/1086008/description/2d5ed610a2fb56349a2a5e1ede4578dc.jpg", "/static/img/goodsImage/1086008/description/6370bce324b69fcbfc25a2f174bff7e1.jpg", "/static/img/goodsImage/1086008/description/86469622b4e573ac5f184d1839a050b2.jpg", "/static/img/goodsImage/1086008/description/66853bbcbb410f785bd5f1387fe1f43f.jpg", "/static/img/goodsImage/1086008/description/9103dd25f6c82a1618d0ca17f1722431.jpg", "/static/img/goodsImage/1086008/description/9db38bed37cd5a11aa6dc5c135c53340.jpg", "/static/img/goodsImage/1086008/description/b202779058ba3a2f3b1b6ac660b32221.jpg", "/static/img/goodsImage/1086008/description/edf76f2b5d0c29b399c5a86e18abc1ae.jpg", "/static/img/goodsImage/1086008/description/420c0249a54ee263c7b72ee5f301e1a7.jpg", "/static/img/goodsImage/1086008/description/e6911ccde61c2fb5c8941eca40895b2a.jpg", "/static/img/goodsImage/1086008/description/18e9a94917a5d9f7087ac54e2e5872a9.jpg", "/static/img/goodsImage/1086008/description/26a746543c92c9f9e37269c4ba651fb2.jpg", "/static/img/goodsImage/1086008/description/ace5c7691eee5287411027cb1eece7ff.jpg", "/static/img/goodsImage/1086008/description/cb4a328fec72dd97d873c53025d14f86.jpg", "/static/img/goodsImage/1086008/description/3eefca5dd60ba67ae3309dc771cbe1e2.jpg", "/static/img/goodsImage/1086008/description/1efc5b284b2b9b16ba99214182d1e02b.jpg", "/static/img/goodsImage/1086008/description/404a018e9dd88a6f2ff40b08b08fcadc.jpg", "/static/img/goodsImage/1086008/description/b9ca0d79a78c3ad5d60c37a3bede9862.jpg", "/static/img/goodsImage/1086008/description/21de4f42269e3cf1cacff96d81b6f066.jpg", "/static/img/goodsImage/1086008/description/7230d3de38eee15501ff5192fa5496fa.jpg", "/static/img/goodsImage/1086008/description/078cdc3d9bd8742763b0cffcd9430ab9.jpg", "/static/img/goodsImage/1086008/description/5cdca636cd2db4a5812371fcf0e29f2f.jpg", "/static/img/goodsImage/1086008/description/9464d1dac345af59cc87136d6a040563.jpg", "/static/img/goodsImage/1086008/description/ea3644743a9195d71fbd33841b37c076.jpg", "/static/img/goodsImage/1086008/description/9c5e8412689f06b2888d080fc1056de7.jpg", "/static/img/goodsImage/1086008/description/d1835ecb0dd0dbf09e3aaa7e47fb667f.jpg", "/static/img/goodsImage/1086008/description/133189264072a999e1677358cac41cb0.jpg", "/static/img/goodsImage/1086008/description/25fb7fbeb45a77e3811e0f629009d5b2.jpg", "/static/img/goodsImage/1086008/description/d6e8553a8611e9f8c245a27f1825b4a3.jpg", "/static/img/goodsImage/1086008/description/acf14b2f827f128c5b372e7b5a28d982.jpg", "/static/img/goodsImage/1086008/description/dd64d5c13acbc177a97e8d7b0446ece8.jpg", "/static/img/goodsImage/1086008/description/d975e0ae917ed5a44bac6235ad2387d7.jpg", "/static/img/goodsImage/1086008/description/d2e06015f5bcc0c8340abdd50e64c12b.jpg", "/static/img/goodsImage/1086008/description/e9d72a770287539a04f93b0b5d960b13.jpg", "/static/img/goodsImage/1086008/description/51a086935b7b793399ee9f62f34409a6.jpg", "/static/img/goodsImage/1086008/description/12346bea13b39ee7e579f7594adbd46d.jpg", "/static/img/goodsImage/1086008/description/77453d6141b85b6fe9aab3ab4068d95c.jpg", "/static/img/goodsImage/1086008/description/8516b4dac9821b401f9a00f5008d436a.jpg", "/static/img/goodsImage/1086008/description/08705d8a6c3435977896d9eab63a77af.jpg", "/static/img/goodsImage/1086008/description/7836b9304966966574eb495b005b9a77.jpg", "/static/img/goodsImage/1086008/description/d306db8627b0f6d7d40f48d5a02572a7.jpg", "/static/img/goodsImage/1086008/description/c26d6df1d4904d37a1213834966f704b.jpg", "/static/img/goodsImage/1086008/description/ab40a9697203057a6a749fe1ddb1ce46.jpg", "/static/img/goodsImage/1086008/description/fc2e763bd64c59cf56a4d69b4bd6f886.jpg", "/static/img/goodsImage/1086008/description/d59019b492b4aaefad18886704a37caf.jpg", "/static/img/goodsImage/1086008/description/0c43f0a787f2cf9998aad830124f5969.jpg"],
		"inventory": [547, 713],
		"information": [{
			"attrName": "产地",
			"attrValue": "中国"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 902,
		"date": "1500341104278",
		"category": "服装",
		"subCategory": "毛衣"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1125026,
		"price": 159,
		"topName": "中国红满月百天礼盒",
		"subName": "新生满月，送礼中国红",
		"shortDescription": ["实用款式", "妈妈选择", "萌宠设计", "喜庆彤红", "权威检测", "安全呵护"],
		"shortDescriptionImage": ["/static/img/goodsImage/1125026/shortdescriptionImage/0f3d093f1b421a8d2f1949c513745814.png", "/static/img/goodsImage/1125026/shortdescriptionImage/e0243c35e686e82786d796f1a1c56d08.png", "/static/img/goodsImage/1125026/shortdescriptionImage/772009d608bbd63b421ffa29846bdb65.png"],
		"headImage": ["/static/img/goodsImage/1125026/headImage/6308c120c441fd3e47658167ad944156.png", "/static/img/goodsImage/1125026/headImage/4628b3afa38a9f41d6795f700f4cc5b9.jpg", "/static/img/goodsImage/1125026/headImage/a5df0c2cf9e539e44e672fe0dc067c9a.jpg", "/static/img/goodsImage/1125026/headImage/d4015e305339ca639c0de0c9ac80cb8b.jpg", "/static/img/goodsImage/1125026/headImage/214576b0de89e41f33b37908c5383524.jpg"],
		"type": ["59cm（新生儿礼盒适合0-3个月宝宝）", "66cm（百天礼盒适合3-6个月宝宝）"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1125026/description/2f285a3816b6b6f95941ec06ee063635.jpg", "/static/img/goodsImage/1125026/description/2e82a43abd58555dc09e3d33ec75d755.jpg", "/static/img/goodsImage/1125026/description/48be216b81db6c1f03fe834844040a98.jpg", "/static/img/goodsImage/1125026/description/f41ac24d0df55aea28b7016b72047800.jpg", "/static/img/goodsImage/1125026/description/031e42d38ed545f4f5d1f163015f6f91.jpg", "/static/img/goodsImage/1125026/description/978c82d328c0b7d9b0343a612aecafe1.jpg", "/static/img/goodsImage/1125026/description/4e64fbef8dfef65dcf88f01dd4df1e93.jpg", "/static/img/goodsImage/1125026/description/03618f3c7d9663a0edf67baceb3d6d55.jpg", "/static/img/goodsImage/1125026/description/aec0b5fee64a1e1218f056231e913c1b.jpg", "/static/img/goodsImage/1125026/description/5bc6c15b391d850edcc7232ad917d710.jpg", "/static/img/goodsImage/1125026/description/fbdc2e2c0dd1e1facd6a737f0f77e39c.jpg", "/static/img/goodsImage/1125026/description/9040a4c9c7027a18da3cfb5af2dac693.jpg", "/static/img/goodsImage/1125026/description/9b5c59778b086a2e657d4205fb34d00e.jpg", "/static/img/goodsImage/1125026/description/a880bb699c777558a1806a31d0ee2ad0.jpg", "/static/img/goodsImage/1125026/description/288675be0cff8c7142df28be66f75065.jpg", "/static/img/goodsImage/1125026/description/0d0c12076ce5b60c1d73f9b41fe59b33.jpg", "/static/img/goodsImage/1125026/description/73d3a1677f86474d040347ade311ef07.jpg", "/static/img/goodsImage/1125026/description/1b87305de409af8858867939919b9486.jpg", "/static/img/goodsImage/1125026/description/c41bebb2d432eba191dafac1dd60a57c.jpg", "/static/img/goodsImage/1125026/description/c4b613b1f133531ea8b05d8570fd13aa.jpg", "/static/img/goodsImage/1125026/description/bc1ffd417535bce66e25e2e5377036f9.jpg", "/static/img/goodsImage/1125026/description/f415d0782d9e634b7529daa05901b569.jpg", "/static/img/goodsImage/1125026/description/0409cb15dc226b04fe460f806779d874.jpg", "/static/img/goodsImage/1125026/description/c5ef4c34ad50dd6c958794c03b12a474.jpg", "/static/img/goodsImage/1125026/description/07315ef63041c356bdac70e86ab687a0.jpg", "/static/img/goodsImage/1125026/description/f9565223b49a43deedc4b978c2d43a3e.jpg", "/static/img/goodsImage/1125026/description/2ad21cf00c364cd8477686dffe60a3f6.jpg", "/static/img/goodsImage/1125026/description/80c3e4eb6c42a6ae5b4e07c2aba8fac3.jpg", "/static/img/goodsImage/1125026/description/527a6208cd49ede0ff8ba4a9a2335826.jpg", "/static/img/goodsImage/1125026/description/e87c2adba2ad435b24e9f46fd620e100.jpg", "/static/img/goodsImage/1125026/description/9070ba3369635cad62321a22caf4156f.jpg", "/static/img/goodsImage/1125026/description/960d9e42022d1d51c529900a1298ac1f.jpg", "/static/img/goodsImage/1125026/description/1d74d7693e2498b71ba21ba42d3c9a28.jpg", "/static/img/goodsImage/1125026/description/74a17841d8394a99a6bd143146ae3573.jpg", "/static/img/goodsImage/1125026/description/8d822d8344816788866eae5825247dac.jpg", "/static/img/goodsImage/1125026/description/b6ddce95d2f3fa47a77a9f25cbc5a077.jpg", "/static/img/goodsImage/1125026/description/1c7345d3a703b8a19956faed31c5d302.jpg", "/static/img/goodsImage/1125026/description/154df4baa29a5f7c1bf6b18ddd7689ac.jpg", "/static/img/goodsImage/1125026/description/4d096d4dd81c4dc4d1d89e4d8908be66.jpg", "/static/img/goodsImage/1125026/description/3fc8e54eda63e1d42cd1de247bac2a6a.jpg", "/static/img/goodsImage/1125026/description/87b42ab850b2777c982daf9a8382bdbf.jpg", "/static/img/goodsImage/1125026/description/8ec8c4223f87e10b1ca69a2765945bcc.jpg", "/static/img/goodsImage/1125026/description/69f471e3ed5b6986f8f826f2218365c3.jpg", "/static/img/goodsImage/1125026/description/405aba9b359b1eddf1d22114225d834b.jpg", "/static/img/goodsImage/1125026/description/71d6533a5214218f825ccd23cb054725.jpg", "/static/img/goodsImage/1125026/description/2fd11f0db4bbe2a6d41cf9c2ec467011.jpg", "/static/img/goodsImage/1125026/description/b6f7a12779b592611c62085a8e6358b0.jpg", "/static/img/goodsImage/1125026/description/dd6edb427af64c6649e0095ccd642fb2.jpg", "/static/img/goodsImage/1125026/description/3af0dd0ac94c07748b445863a499b00b.jpg", "/static/img/goodsImage/1125026/description/f5f69e68a9910a073e36e760c040c522.jpg", "/static/img/goodsImage/1125026/description/9087f94bec151b94dabbb92f526d0a29.jpg", "/static/img/goodsImage/1125026/description/2c5d55cafcc64ab3457568bf92ce2757.jpg", "/static/img/goodsImage/1125026/description/3dc5ae2bf671d9116796a62a522390fe.jpg", "/static/img/goodsImage/1125026/description/9ad818efb09ceecf4bf65f4589df08c4.jpg", "/static/img/goodsImage/1125026/description/2f2a637ab38a05d6050948c3287827cd.jpg", "/static/img/goodsImage/1125026/description/d57b29a2d5474faccade920571cc91a4.jpg", "/static/img/goodsImage/1125026/description/6271ef83f9eaff0b9aebc0fcc8091565.jpg", "/static/img/goodsImage/1125026/description/408e2fb68bfb84086d6c16332ead8d1a.jpg", "/static/img/goodsImage/1125026/description/f03357da08cc91ce3a98ae98544dccb2.jpg", "/static/img/goodsImage/1125026/description/5b2f436a7352180fce134661845757b5.jpg"],
		"inventory": [237, 37],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "GB31701-2015 A类 婴幼儿用品"
		}, {
			"attrName": "礼盒内容",
			"attrValue": "长袖连体衣*1件+帽子*1个+围兜*1个+袜子*1双（礼盒包装，独立手提袋）"
		}, {
			"attrName": "注意事项",
			"attrValue": "礼盒盒子在运输途中可能出现损坏情况或者礼盒中商品有少发现象，可以直接联系客服进行更换或补发。清洗宝宝衣物时请选择中性肥皂和洗涤剂，溶解均匀后再浸泡衣物，切忌使用酸性洗涤剂。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "Carters制造商",
		"sale": 543,
		"date": "1500793395612",
		"category": "婴童",
		"subCategory": "婴幼儿服饰"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1129016,
		"price": 12,
		"topName": "新疆阿瓦提长绒棉弱捻超柔毛巾",
		"subName": "瞬间吸水，亲肤近0掉毛率。",
		"shortDescription": ["弱捻工艺", "柔软亲肤", "长绒棉质", "0掉毛率", "活性染料", "健康牢固"],
		"shortDescriptionImage": ["/static/img/goodsImage/1129016/shortdescriptionImage/52ae9fca68e36b77586479e1131288ce.jpg", "/static/img/goodsImage/1129016/shortdescriptionImage/f3532a6ebb37f6f55df1c8c2871e18d7.jpg", "/static/img/goodsImage/1129016/shortdescriptionImage/0adbb510a087fc00e0b6a0ce6a9158fb.jpg"],
		"headImage": ["/static/img/goodsImage/1129016/headImage/f32576e6da314f203982951cd2f65f0a.png", "/static/img/goodsImage/1129016/headImage/eb4cd62d9da3c4e429fe5bab3b6f4d35.jpg", "/static/img/goodsImage/1129016/headImage/47f9e4ec82d60e95d1ff3bd0890609ad.jpg", "/static/img/goodsImage/1129016/headImage/b536fd466a3f2d86a2240a39043f65e9.jpg", "/static/img/goodsImage/1129016/headImage/a9e436c2b707856858badfde11850bec.jpg"],
		"type": ["冰蓝Ice Blue", "橙红Salmon Pink", "铂银灰Platinum", "水鸭绿Teal Green", "粉色Pink", "黑色Black", "复古绿Juniper Green", "五条装-北欧晨曦", "2条装-天鹅湖", "2条装-索菲的礼物"],
		"chara": "10色可选",
		"description": ["/static/img/goodsImage/1129016/description/bc327cdf6422117711a9fbf68960252d.jpg", "/static/img/goodsImage/1129016/description/44d506329f3d7a0f5f0611791422f263.jpg", "/static/img/goodsImage/1129016/description/e8b745138b1980bd82ff31c54a399aab.jpg", "/static/img/goodsImage/1129016/description/6fd0dc52c335fb769a914d94ec3f9430.jpg", "/static/img/goodsImage/1129016/description/a12ac8fadf45d50b3add1000a4f827f8.jpg", "/static/img/goodsImage/1129016/description/0b8134f8aa2974f2271720cc3d5b9cec.jpg", "/static/img/goodsImage/1129016/description/2064754f91ea33fb375de9888e546840.jpg", "/static/img/goodsImage/1129016/description/5d8d5944e9f91a7fbe4383e127fecc32.jpg", "/static/img/goodsImage/1129016/description/bf8b079218654ed719958e66a2c126cc.jpg", "/static/img/goodsImage/1129016/description/c06b4b9ecb72d1807bbd1043df444e08.jpg", "/static/img/goodsImage/1129016/description/81f90470a1d7d675741b782f11f6bebb.jpg", "/static/img/goodsImage/1129016/description/2d910edde905156fab1344c1a19721e6.jpg", "/static/img/goodsImage/1129016/description/8c94bf47c37bcd817cdc0dc0417fc240.jpg", "/static/img/goodsImage/1129016/description/3f78659c3f9a49e8f713ef12f4bbb775.jpg", "/static/img/goodsImage/1129016/description/99c51adb58d5673bc11b73e2700d0654.jpg", "/static/img/goodsImage/1129016/description/2352fe6c0b82654a56fa253387a0cada.jpg", "/static/img/goodsImage/1129016/description/0a62ae639664a83701af4d3e4c2b24a2.jpg", "/static/img/goodsImage/1129016/description/32bf8744ae983249765297ccb8cd5837.jpg", "/static/img/goodsImage/1129016/description/e28ef97638cb044bcd1d598b143f51a5.jpg", "/static/img/goodsImage/1129016/description/630f215dc41f3590d7f2f00cfcf39cd6.jpg", "/static/img/goodsImage/1129016/description/c769aab8c7749acfa9e6ce09a891fd0f.jpg", "/static/img/goodsImage/1129016/description/791414e57e3b573d065a3e1c876918db.jpg", "/static/img/goodsImage/1129016/description/fb3a92ff2242c76d402c855e0de53aa5.jpg", "/static/img/goodsImage/1129016/description/a99533d74871965696d4d63a434681da.jpg", "/static/img/goodsImage/1129016/description/5de8f015a29c82b0c2887232f31e1e50.jpg", "/static/img/goodsImage/1129016/description/fafb1941cb7f632c1f17b4515a806b51.jpg", "/static/img/goodsImage/1129016/description/414a2f3bf6aefb759d0d7d8ec0deb317.jpg", "/static/img/goodsImage/1129016/description/bb3a1132cbb67b1fea39ee154ede0401.jpg", "/static/img/goodsImage/1129016/description/fd320b97eaf12796cf1350654c781c3f.jpg", "/static/img/goodsImage/1129016/description/e14d436087549b23817e505fee86eb99.jpg", "/static/img/goodsImage/1129016/description/4b194e2eb819e4d8fc41598a2dab8217.jpg", "/static/img/goodsImage/1129016/description/7ead9ac81fc30addb4961d74ce6ddb1e.jpg", "/static/img/goodsImage/1129016/description/9d8287ddbd65a120dd7393248c2bcf92.jpg", "/static/img/goodsImage/1129016/description/e467f8d6557fbe721864c553394a2a34.jpg", "/static/img/goodsImage/1129016/description/c05e21791a68eccafe2dee5cadc6bf94.jpg", "/static/img/goodsImage/1129016/description/57944a61a045a0fb424fa50e097e7e71.jpg", "/static/img/goodsImage/1129016/description/68466307eaea76ece760a8025d9ef2f4.jpg", "/static/img/goodsImage/1129016/description/7718c1451e61de376f63cde870c9d350.jpg", "/static/img/goodsImage/1129016/description/57e5636fd836993363759850c7420762.jpg", "/static/img/goodsImage/1129016/description/3a91275a80ccc6f25a56e88f46a739d7.jpg", "/static/img/goodsImage/1129016/description/5d2beb7c986655415c5ae8a856d188dd.jpg", "/static/img/goodsImage/1129016/description/4b322df4f99b9097c48a20f8ccdab83e.jpg", "/static/img/goodsImage/1129016/description/5100331b0a102e3fb02bb9adc37325b6.jpg", "/static/img/goodsImage/1129016/description/0b180341edf1e609e080f4d02857029e.jpg", "/static/img/goodsImage/1129016/description/59ec8a425a3d24ffecf6b6cd2ae33800.jpg", "/static/img/goodsImage/1129016/description/eadee0a4d44836d3b8a499c67b973852.jpg", "/static/img/goodsImage/1129016/description/2572550c5fac1b38ec77e2ebb3796211.jpg", "/static/img/goodsImage/1129016/description/8cd0fefe0d6cb6c27abd08c08cd6e871.jpg", "/static/img/goodsImage/1129016/description/3f8026854cbfb0e36df51a575f528fbf.jpg", "/static/img/goodsImage/1129016/description/f4694e5b8c7eec5bdabc7c756bf77d1c.jpg", "/static/img/goodsImage/1129016/description/66f34e86ffa77642b6d9bb693ebcc790.jpg", "/static/img/goodsImage/1129016/description/1e4948f74cb8f6e2838edcf2d0aa5232.jpg", "/static/img/goodsImage/1129016/description/4d1d45e687d5e39a87b2bebbd3decea4.jpg", "/static/img/goodsImage/1129016/description/5b6564ab6712d0519ea2504202010d19.jpg", "/static/img/goodsImage/1129016/description/dff48bcae327e8180f38f8615d25b9fe.jpg", "/static/img/goodsImage/1129016/description/aff8b5e1923e3fad97f0ad477d642fe0.jpg", "/static/img/goodsImage/1129016/description/8734dffe07807abf01c46a299c8584c4.jpg", "/static/img/goodsImage/1129016/description/7de8855fab61fd725a47e6af828efae1.jpg", "/static/img/goodsImage/1129016/description/60e649236b5f3105a6dce9b6948a0479.jpg", "/static/img/goodsImage/1129016/description/05d58fe33529cf07caae69adc1b13806.jpg", "/static/img/goodsImage/1129016/description/afba4fca743ceab8b93f52483734ccfa.jpg", "/static/img/goodsImage/1129016/description/41491647858952b9de06ca33fcaaf08a.jpg", "/static/img/goodsImage/1129016/description/7b1ff23fcbe085eb9ee8f6f1b43b1973.jpg", "/static/img/goodsImage/1129016/description/7f762f43779183bd0b5112e42d2c12ab.jpg", "/static/img/goodsImage/1129016/description/95f1361cfc5ff81bedb1ebff1a77422f.jpg", "/static/img/goodsImage/1129016/description/c6f374e3bd83d69efb298afcecbdaf0d.jpg", "/static/img/goodsImage/1129016/description/f48ea31aa3bee8a43253ca120be57e22.jpg", "/static/img/goodsImage/1129016/description/9b486d342f0d62afc4f4f7342bf5816b.jpg", "/static/img/goodsImage/1129016/description/28485ea6771dea5ad7a65a4dea51989e.jpg", "/static/img/goodsImage/1129016/description/fd4ff33cf8dafd38252f3637e140c9c1.jpg", "/static/img/goodsImage/1129016/description/65ac3b988a9a384bb01a07f2758ae20f.jpg", "/static/img/goodsImage/1129016/description/436f5893e2be5e2abc425fd1c1d5fca4.jpg", "/static/img/goodsImage/1129016/description/f7d4a9a63d61034a0ab46603136f8c72.jpg", "/static/img/goodsImage/1129016/description/1a0c3111e4b882f57dcb16c08b925fab.jpg", "/static/img/goodsImage/1129016/description/a205038f0f7c8ae2a477d74710d3fd91.jpg", "/static/img/goodsImage/1129016/description/038eba547a3902863665e14182ec714f.jpg", "/static/img/goodsImage/1129016/description/cca906acaa99b30c3c2275ca69f0b73f.jpg", "/static/img/goodsImage/1129016/description/38603bca2cc12211a4131c8520e40f3b.jpg", "/static/img/goodsImage/1129016/description/d957def8d461b40c044f6047fba0a705.jpg"],
		"inventory": [155, 96, 852, 247, 920, 12, 915, 187, 671, 662],
		"information": [{
			"attrName": "规格",
			"attrValue": "34*75cm"
		}, {
			"attrName": "产品等级",
			"attrValue": "一等品"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22864-2009"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB 18401-2010 A类"
		}],
		"label": [{
			"title": "爆品",
			"type": "2"
		}],
		"manufacture": "Ralph Lauren制造商",
		"sale": 357,
		"date": "1500341112093",
		"category": "洗护",
		"subCategory": "毛巾"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1189013,
		"price": 119,
		"topName": "电动式硅胶洁面仪",
		"subName": "智能电动 深层洁净肌肤",
		"shortDescription": ["食品硅胶", "优选材质", "6级防水", "安全洁肤", "双面设计", "波纹按摩"],
		"shortDescriptionImage": ["/static/img/goodsImage/1189013/shortdescriptionImage/63e8e287453e184bc79c552d16d03a28.jpg", "/static/img/goodsImage/1189013/shortdescriptionImage/6402c9512c041e8ee1c25ca49268b0e5.jpg", "/static/img/goodsImage/1189013/shortdescriptionImage/4c82cde11a6b456f095b64a036c53d4d.jpg"],
		"headImage": ["/static/img/goodsImage/1189013/headImage/6da3c6ce0233411e55434e06c8e51a3b.png", "/static/img/goodsImage/1189013/headImage/6c5f3654441ae08b06f2f2ea04b5d165.jpg", "/static/img/goodsImage/1189013/headImage/9af618fc3124fb3331113583b0cfb18e.jpg", "/static/img/goodsImage/1189013/headImage/2251e02d231222ae2306c581c45565f3.jpg", "/static/img/goodsImage/1189013/headImage/fb9279218dae4374fad67e0762991630.jpg"],
		"type": ["樱花粉"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1189013/description/bdf3ee676ef8852acad64f43d79d074e.jpg", "/static/img/goodsImage/1189013/description/7679aa1b885647fa63c1c8b468496b79.jpg", "/static/img/goodsImage/1189013/description/62628a86b5836a66164a3af36c57692f.jpg", "/static/img/goodsImage/1189013/description/5d0586151985ebe3d38f04e476f98250.jpg", "/static/img/goodsImage/1189013/description/eae531b8cbcf9ba9ea67f4cee50123ea.jpg", "/static/img/goodsImage/1189013/description/b5648fcd9db15563d803dd87bb7069ec.jpg", "/static/img/goodsImage/1189013/description/6bb27a1d27b769f2a6a413f8661b1506.jpg", "/static/img/goodsImage/1189013/description/b6e6ae68b9c7cfe6d8f69f6121717177.jpg", "/static/img/goodsImage/1189013/description/6871a1b54005358d6e9e8b7f17ee03e5.jpg", "/static/img/goodsImage/1189013/description/04de21cf035201967b54411ee6b0e3d7.jpg", "/static/img/goodsImage/1189013/description/74d354ea9651c570c35e44f5b8076776.jpg", "/static/img/goodsImage/1189013/description/ab481f534703a2010b237dd37b46495a.jpg", "/static/img/goodsImage/1189013/description/6ab8f7428b61458c04626211f9575634.jpg", "/static/img/goodsImage/1189013/description/7dd6770cc42effd5af7836ec62480297.jpg", "/static/img/goodsImage/1189013/description/8456669ac8e768ab93095ed9d596d0c8.jpg", "/static/img/goodsImage/1189013/description/6c10d816e89b7d48811426c0884b5824.jpg", "/static/img/goodsImage/1189013/description/1b50985cdce5f01f540f5dd0844efeb8.jpg", "/static/img/goodsImage/1189013/description/bc3c7285766ed3ef5efd7555144c1f4f.jpg", "/static/img/goodsImage/1189013/description/666e44065959422d1c62adb2c0853bf8.jpg", "/static/img/goodsImage/1189013/description/c7f25e7acbd1c4e2a339d2f6cd8bb0ef.jpg", "/static/img/goodsImage/1189013/description/1c46dcb8c2e742dc4bd51ca85387b631.jpg", "/static/img/goodsImage/1189013/description/e7d0210ce348ac999f35daafeb039db4.jpg", "/static/img/goodsImage/1189013/description/2366f80047d11d543434008c686acfc1.jpg", "/static/img/goodsImage/1189013/description/c89019ce1cc35815f01eabaaa98a4010.jpg", "/static/img/goodsImage/1189013/description/3c85ca8c56ea3c88a209d6c19d9c9fb1.jpg", "/static/img/goodsImage/1189013/description/a04598b02f761022b4a42d05f2b50133.jpg", "/static/img/goodsImage/1189013/description/564b639c6d4b0bb6a9b51e0634daa611.jpg", "/static/img/goodsImage/1189013/description/355c0da9d941b7d918e42f4b95630082.jpg", "/static/img/goodsImage/1189013/description/72e2844bd2c735a6fc3db2050a158089.jpg", "/static/img/goodsImage/1189013/description/6f92410a702be94e7897084930c91689.jpg", "/static/img/goodsImage/1189013/description/5142bddad02d1564b1270060c0154f3b.jpg", "/static/img/goodsImage/1189013/description/0806675409dc5f2e75523f0ca0d6d062.jpg", "/static/img/goodsImage/1189013/description/0681662931471871717da8a2c56d5ebd.jpg", "/static/img/goodsImage/1189013/description/7176cd99d48ddb935bdc68f9d75cf721.jpg", "/static/img/goodsImage/1189013/description/7f05c268a0922a179e4c06fde3d3d840.jpg", "/static/img/goodsImage/1189013/description/18acffe5144a194ed1db6a4fc5d4dd03.jpg", "/static/img/goodsImage/1189013/description/ac1918de940aa4a9f08225d95ac04bb6.jpg", "/static/img/goodsImage/1189013/description/d899b05ba824cd8a04f1341fb484a440.jpg", "/static/img/goodsImage/1189013/description/7f936cf7d117ec73ab64ddc2e3e96cde.jpg", "/static/img/goodsImage/1189013/description/cf8b30c72d5c23ddf20ac9fb2c20985e.jpg", "/static/img/goodsImage/1189013/description/5c9c41c61af66c850e0ad85d9ee1156f.jpg", "/static/img/goodsImage/1189013/description/d9df833938e80c4fb803ef73426ee6ce.jpg", "/static/img/goodsImage/1189013/description/48d1c9d8050b947eda8271b24d1dcd7c.jpg", "/static/img/goodsImage/1189013/description/ee0915c3e7ef93ccee98968b75f12322.jpg", "/static/img/goodsImage/1189013/description/4d509de92d919f458c77d216c00f0aa8.jpg", "/static/img/goodsImage/1189013/description/469f77328b20469ad77695208b34dd9d.jpg", "/static/img/goodsImage/1189013/description/7eb42887d61dbeac4b673f0783f20ed1.jpg", "/static/img/goodsImage/1189013/description/6085f71d18fb455deb54e57ff0c0f485.jpg", "/static/img/goodsImage/1189013/description/8afb464470c2f2ed70e5b5eff44422cb.jpg", "/static/img/goodsImage/1189013/description/5ba593196204d5123c9e3b8a3b6dcad8.jpg", "/static/img/goodsImage/1189013/description/8309d0190635297fa0c5252aa83de36a.jpg", "/static/img/goodsImage/1189013/description/6a0653db2db2bccf58cafff2098c33e7.jpg", "/static/img/goodsImage/1189013/description/6daebdaaa462a45a6dcc6534461090f8.jpg", "/static/img/goodsImage/1189013/description/be530e4e6d76823b4ad47c656f6976d7.jpg", "/static/img/goodsImage/1189013/description/c774b216850b864ac6ff45c8e14787b1.jpg", "/static/img/goodsImage/1189013/description/e27f380ddcac7ae7308c6573b0e1c8e9.jpg", "/static/img/goodsImage/1189013/description/ff3fee74241d8a6ee1d14516a20a410b.jpg", "/static/img/goodsImage/1189013/description/a5874759ded18432e137f41fe22019b7.jpg", "/static/img/goodsImage/1189013/description/a4ca06a0b4cbe13a20a6047f66f00954.jpg", "/static/img/goodsImage/1189013/description/9a812e4b8a0297ddbad4d2cca4a78bb4.jpg", "/static/img/goodsImage/1189013/description/a64e27926d3c966da541f3d6acf9e86e.jpg", "/static/img/goodsImage/1189013/description/fb4d822e0dcff59e40d53d468a3d0841.jpg", "/static/img/goodsImage/1189013/description/b48652fcb3f3c872288f12525a415e3c.jpg", "/static/img/goodsImage/1189013/description/7e0e17f48584db04e7dfad9cbcccd89f.jpg", "/static/img/goodsImage/1189013/description/a7cda773770a8025a92f3879277e234f.jpg", "/static/img/goodsImage/1189013/description/8668838e918076afd685689111677dea.jpg", "/static/img/goodsImage/1189013/description/329ec20d57dc9addb80aae2865b9c917.jpg", "/static/img/goodsImage/1189013/description/7387b52f83d6aef14ab75e3f224dcfaf.jpg", "/static/img/goodsImage/1189013/description/e89871def6345bc4e4b464c801a53e0a.jpg", "/static/img/goodsImage/1189013/description/d03bfd2ac1175ffcd340f8c1b28c3d52.jpg", "/static/img/goodsImage/1189013/description/18f2d3c75e13b90807229487916903f7.jpg", "/static/img/goodsImage/1189013/description/bb96b7cb935761e7b56583d7bbf1a30b.jpg", "/static/img/goodsImage/1189013/description/f9aa6464101f0e9b5227ab1893851c02.jpg", "/static/img/goodsImage/1189013/description/c08487f2d704138596f42ab140f2feb7.jpg", "/static/img/goodsImage/1189013/description/38b6993425f73e5f996b41995af4da8d.jpg"],
		"inventory": [73],
		"information": [{
			"attrName": "温馨提示",
			"attrValue": "产品包装盒内自带数据线，不含适配器"
		}],
		"label": [{
			"title": "新品",
			"type": "2"
		}],
		"manufacture": "",
		"sale": 475,
		"date": "1500341114938",
		"category": "洗护",
		"subCategory": "面部护理"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1154003,
		"price": 219,
		"topName": "全净皓齿变速式声波电动牙刷",
		"subName": "随心变速，多重呵护",
		"shortDescription": ["纤长外观", "三色可选", "3重保障", "专业护牙", "4种模式", "自由调节"],
		"shortDescriptionImage": ["/static/img/goodsImage/1154003/shortdescriptionImage/6f2e0ad24e7b511bd559c1c124238fbc.jpg", "/static/img/goodsImage/1154003/shortdescriptionImage/8d172410a18ac671c41fcbe8109865a9.jpg", "/static/img/goodsImage/1154003/shortdescriptionImage/b248ac35f83839afe951d762b2d21fbb.jpg"],
		"headImage": ["/static/img/goodsImage/1154003/headImage/d9376c059ce15a774199e2cedc5a8d63.png", "/static/img/goodsImage/1154003/headImage/2e7a19f153f613323426b181ca143be6.jpg", "/static/img/goodsImage/1154003/headImage/ec24830b660e21c53d5e99d72669ffea.jpg", "/static/img/goodsImage/1154003/headImage/97a4a0fddcde6ea89b2d8565680edd27.jpg", "/static/img/goodsImage/1154003/headImage/90bc0db9991b3c706d482cbe99b6fd8f.jpg"],
		"type": ["粉色", "白色", "黑色", "黑色刷头2只装（搭配黑色牙刷）", "白色刷头2只装（搭配粉色/白色牙刷）"],
		"chara": "5色可选",
		"description": ["/static/img/goodsImage/1154003/description/e29dccda0326d220fff8dbcd78889f15.jpg", "/static/img/goodsImage/1154003/description/5056c912ccdf4ff4915eb6ce2d75fa05.jpg", "/static/img/goodsImage/1154003/description/4d776be0e3c5212e730cb228e1ec1f12.jpg", "/static/img/goodsImage/1154003/description/62c1421ff7e16185490d6da4704f04dc.jpg", "/static/img/goodsImage/1154003/description/d985e079cfd745aa8c19d11286376e1e.jpg", "/static/img/goodsImage/1154003/description/d392efacb0dfdf362c8aef2d958ce3c4.jpg", "/static/img/goodsImage/1154003/description/d53599730947e6743e5f0c2eb5fc5863.jpg", "/static/img/goodsImage/1154003/description/dda8f36ccd9d7e5c414e7ef3f7790a8a.jpg", "/static/img/goodsImage/1154003/description/06c586f9360979c08ad00acdd097d590.jpg", "/static/img/goodsImage/1154003/description/45302f0a994f9e1fd3c2169050e46ef1.jpg", "/static/img/goodsImage/1154003/description/56f7a29634402f7e23ded5445f7e2e4b.jpg", "/static/img/goodsImage/1154003/description/5d61f003102ff36bbce5f74278fbcb03.jpg", "/static/img/goodsImage/1154003/description/f37dc98828993b92742ed9f7c8ca01bc.jpg", "/static/img/goodsImage/1154003/description/d7f1c81c7030b6b3f7cabcc827ef0d09.jpg", "/static/img/goodsImage/1154003/description/e02ad17fadf16709535da7e2b1994fd4.jpg", "/static/img/goodsImage/1154003/description/4c25d1266588c6e9483071c6a8527e93.jpg", "/static/img/goodsImage/1154003/description/08ed3eb6b2a03d2445ca7c98d259d2a1.jpg", "/static/img/goodsImage/1154003/description/cda2f7d1147ec47366c09998e6f6f216.jpg", "/static/img/goodsImage/1154003/description/c072c864bdeb1ed127244c5f5559995e.jpg", "/static/img/goodsImage/1154003/description/ebee76fe44db6e8a62a9213e78aa2198.jpg", "/static/img/goodsImage/1154003/description/730f17225162001e5d653a8971c4f8c4.jpg", "/static/img/goodsImage/1154003/description/606acc1c10a3325298b8fbb0296401d2.jpg", "/static/img/goodsImage/1154003/description/99f2f1afa341556afd1cfc7f04b249d8.jpg", "/static/img/goodsImage/1154003/description/f73364c06e3d71db21fe5b28b8b96a17.jpg", "/static/img/goodsImage/1154003/description/b1055ba92314922005a52f16644ab5cf.jpg", "/static/img/goodsImage/1154003/description/ed642dd184e6c0292a3e7ff20c9dc409.jpg", "/static/img/goodsImage/1154003/description/4a2a7a5732ee6894f0295cd26b40ec84.jpg", "/static/img/goodsImage/1154003/description/872acf84cefe96794eff8e01fa76f195.jpg", "/static/img/goodsImage/1154003/description/94b4c0cfeaf9df9dbb3dd0749c548523.jpg", "/static/img/goodsImage/1154003/description/3a20993d6dc6c35376b6fa690f5c0bff.jpg", "/static/img/goodsImage/1154003/description/a929503d0f5d4f63fbc37b3857d420dd.jpg", "/static/img/goodsImage/1154003/description/3974a6f4f89ddff53aedf0ded9b5fb2a.jpg", "/static/img/goodsImage/1154003/description/1124a20dfb3098bf97e739992be968cd.jpg", "/static/img/goodsImage/1154003/description/88114f322c00ef799ca7196f890fcbc6.jpg", "/static/img/goodsImage/1154003/description/3353f8e502ef7bea5db6fb5e9cf36abd.jpg", "/static/img/goodsImage/1154003/description/86a56d5a6497c23522fa954630a56360.jpg", "/static/img/goodsImage/1154003/description/1f1737cc613508729fb7d61d298ec9bc.jpg", "/static/img/goodsImage/1154003/description/88cb8ff99fc98256921e7e29e5586296.jpg", "/static/img/goodsImage/1154003/description/36b4c8d286a7a800100db0547e1e2e78.jpg", "/static/img/goodsImage/1154003/description/d2fba7497e2b0fa7fbf8d721068c819b.jpg", "/static/img/goodsImage/1154003/description/3b8b4f1b5e1a6371cd9f3d56a1d2e132.jpg", "/static/img/goodsImage/1154003/description/292079327140d62b5e68ca6308cd4cb2.jpg", "/static/img/goodsImage/1154003/description/9cbaedaa573f45eb4953bc95883cb78b.jpg", "/static/img/goodsImage/1154003/description/1c8cc1fbcfbb26fd717d2e5a16510f17.jpg", "/static/img/goodsImage/1154003/description/7885e967b697737e3d2f36347f8a65b5.jpg", "/static/img/goodsImage/1154003/description/be43f961d6bdf1ce6abf8f447fc96aaa.jpg", "/static/img/goodsImage/1154003/description/39f4a9e94a2cd46b7b4fd4be1fa24582.jpg", "/static/img/goodsImage/1154003/description/16df39c9815408ccf5ce66ee0ab10def.jpg", "/static/img/goodsImage/1154003/description/0dc0c6b1bdfc9412c306f6597912d756.jpg", "/static/img/goodsImage/1154003/description/a7aa969a13e476f7d1f37cd417cf9fa9.jpg", "/static/img/goodsImage/1154003/description/6cbc55fe0e53a5177b232a188c452753.jpg", "/static/img/goodsImage/1154003/description/ec649422c7e5da861938c30d82156269.jpg", "/static/img/goodsImage/1154003/description/a54e740b252d2022acaf30bf7b768b9a.jpg", "/static/img/goodsImage/1154003/description/5fddd70aaab1caf0f57dddeb0d8db175.jpg", "/static/img/goodsImage/1154003/description/61ada741960fdf8b5d63908e1c388afd.jpg", "/static/img/goodsImage/1154003/description/a49d2f0ae8a899632744e9f1ea7d22ce.jpg", "/static/img/goodsImage/1154003/description/f39fb1ba5cd1863911ca58b3586a58fd.jpg", "/static/img/goodsImage/1154003/description/235b901c969ef4f461a2da58ed84d544.jpg", "/static/img/goodsImage/1154003/description/e614c85ff1b0f6d161191348916a1a0d.jpg", "/static/img/goodsImage/1154003/description/21cc91b9204776659b8ddd04ce887196.jpg", "/static/img/goodsImage/1154003/description/80523de32a91600888217a60fac54486.jpg"],
		"inventory": [930, 883, 704, 900, 350],
		"information": [{
			"attrName": "型号",
			"attrValue": "K1676S2"
		}, {
			"attrName": "注意事项",
			"attrValue": "电动牙刷属个人卫生用品，一经开封，非质量问题不予退换。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 616,
		"date": "1500341117885",
		"category": "洗护",
		"subCategory": "口腔护理"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1127041,
		"price": 189,
		"topName": "微电流滚轮身体按摩仪",
		"subName": "仅售供应商建议价的1/5",
		"shortDescription": ["环保电镀", "精致滚轮", "太阳能源", "微电护理", "多角构造", "贴合肌肤"],
		"shortDescriptionImage": ["/static/img/goodsImage/1127041/shortdescriptionImage/d568e99da7a48890ac0011a35d05dd51.jpg", "/static/img/goodsImage/1127041/shortdescriptionImage/3bdf8cd339c3bff48d284f8a7f019e0c.jpg", "/static/img/goodsImage/1127041/shortdescriptionImage/5105d3c8144298cd30883fd69b615734.jpg"],
		"headImage": ["/static/img/goodsImage/1127041/headImage/9aa07a291c8e2c6f97e2f9d0ce2ba7c5.png", "/static/img/goodsImage/1127041/headImage/898c62600a0eb65e69d4c7cd036f7588.jpg", "/static/img/goodsImage/1127041/headImage/f0ac9d1afcb84ae2f34e9ecd2eeb58ba.jpg", "/static/img/goodsImage/1127041/headImage/8b33a9037011e7658414b39d307808cf.jpg", "/static/img/goodsImage/1127041/headImage/2096df228f3c5b41dd04300cbd9b55d9.jpg"],
		"type": ["身体仪"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1127041/description/6a444dcdc0d654062b88884acd4ac90c.jpg", "/static/img/goodsImage/1127041/description/9eaf731630e2327b27008813b3e5e551.jpg", "/static/img/goodsImage/1127041/description/20d7d730c8b7a6c1588f6b2764504395.jpg", "/static/img/goodsImage/1127041/description/bc057bd350404341d06265f4fda1f588.jpg", "/static/img/goodsImage/1127041/description/a018676635a707693cfa77240b005ce4.jpg", "/static/img/goodsImage/1127041/description/34e54a24a4932933a79fe5acded5c8c6.jpg", "/static/img/goodsImage/1127041/description/ceb522f11c4453eae009428a3ad5d503.jpg", "/static/img/goodsImage/1127041/description/36095edcb522f588162432e6f614aeda.jpg", "/static/img/goodsImage/1127041/description/5e9c0dfcd1754108a7c615f55d0b88af.jpg", "/static/img/goodsImage/1127041/description/25c82b8a3f4e36a7dd130581cc5d48e7.jpg", "/static/img/goodsImage/1127041/description/3c362ab8edeafdf72508056149e58a80.jpg", "/static/img/goodsImage/1127041/description/7b5ae5ebdbbb8575ec43016dced9c07e.jpg", "/static/img/goodsImage/1127041/description/691eb86e9fcae72923b9f4a36bc5db8b.jpg", "/static/img/goodsImage/1127041/description/f7bcbf5842962a0a277991c8c9ef1359.jpg", "/static/img/goodsImage/1127041/description/7637152fbc3965bb31f24ea41ba9f301.jpg", "/static/img/goodsImage/1127041/description/6fae58fb323d443c283458f70e8d175d.jpg", "/static/img/goodsImage/1127041/description/cb8463e1dd7e83c20dbe7ffc01363956.jpg", "/static/img/goodsImage/1127041/description/5eb105845feb73460d0e6b1c28279f9e.jpg", "/static/img/goodsImage/1127041/description/7d4d7a23f67c2e5698f7ae756187f1e7.jpg", "/static/img/goodsImage/1127041/description/26d1290e57a9e54d1802cfff39d46014.jpg", "/static/img/goodsImage/1127041/description/a58617cc54dda10c47e1321780562cc2.jpg", "/static/img/goodsImage/1127041/description/9f3f963858d35d9535425767803c05ba.jpg", "/static/img/goodsImage/1127041/description/971666d0f676be10a60546a5b2e7c517.jpg", "/static/img/goodsImage/1127041/description/e41aa842d002a5c33100dba2d1567b17.jpg", "/static/img/goodsImage/1127041/description/d218ea2273c1c7578dede66593a65700.jpg", "/static/img/goodsImage/1127041/description/d8988b14c0c737a4e96010175c8287d9.jpg", "/static/img/goodsImage/1127041/description/1b04d584d4f9ec74103c4fbbe20a8eea.jpg", "/static/img/goodsImage/1127041/description/1dd9e33bcfba26058d568d7de55ae074.jpg", "/static/img/goodsImage/1127041/description/6ad59c9839104e3ad72044cf46df1cfc.jpg", "/static/img/goodsImage/1127041/description/d5f938fee31987293f6c0cc6753d936a.jpg", "/static/img/goodsImage/1127041/description/0d684e1dd046755ec61d5205659ebb12.jpg", "/static/img/goodsImage/1127041/description/b0cbede6970ccea624ddb0a021fae1f4.jpg", "/static/img/goodsImage/1127041/description/0efab021cba2fcbd52b45a2285dc5f31.jpg", "/static/img/goodsImage/1127041/description/577fae41205109c0364489b71b4c5e30.jpg", "/static/img/goodsImage/1127041/description/ab0811324685819c7b5ef07f60acfda1.jpg", "/static/img/goodsImage/1127041/description/f2fbdc18601f5cba00e7a298b3ec071a.jpg", "/static/img/goodsImage/1127041/description/4fdba48c8780de02c9bd122ad4969ae8.jpg", "/static/img/goodsImage/1127041/description/4710c909838668065903dc47eca90a11.jpg", "/static/img/goodsImage/1127041/description/bb564092d5993b1726a407f7543283f9.jpg", "/static/img/goodsImage/1127041/description/b4966f08742873e2b4aed3198e00f277.jpg", "/static/img/goodsImage/1127041/description/b9a239889823f8cab45fd35043696ea5.jpg", "/static/img/goodsImage/1127041/description/de85a40d9a4b37f60dea6498356e0229.jpg", "/static/img/goodsImage/1127041/description/55a04325d8db8915f5bf310200eb19c6.jpg", "/static/img/goodsImage/1127041/description/61ec2aaeeec5200d893d0db5daa7f187.jpg", "/static/img/goodsImage/1127041/description/617854c0611d7e804e8b6b6fdddcc415.jpg", "/static/img/goodsImage/1127041/description/96325552009702816e7c4dca537ba44a.jpg", "/static/img/goodsImage/1127041/description/3fd8566cee204d37f69fb0f52933f0e7.jpg", "/static/img/goodsImage/1127041/description/de80197c8580a5c75ec70482b628403a.jpg", "/static/img/goodsImage/1127041/description/a0529521f93a584d63e3159ea39ca5f0.jpg", "/static/img/goodsImage/1127041/description/2952f3f7f492146c4904946a47cf0413.jpg", "/static/img/goodsImage/1127041/description/81109bdcabc471b82711493b35acea4f.jpg", "/static/img/goodsImage/1127041/description/65e3a3725c4068359f200cc3565ae421.jpg", "/static/img/goodsImage/1127041/description/4d914d9824f61292e841ae1f8a32715d.jpg", "/static/img/goodsImage/1127041/description/bd11fff6d914352160c6486f9565fc05.jpg", "/static/img/goodsImage/1127041/description/584e55dd1cb5c0908c3bbfe5de1e7f2d.jpg", "/static/img/goodsImage/1127041/description/d2b3ace0631a4df96811affd4cc46344.jpg", "/static/img/goodsImage/1127041/description/90e108ae851894a34f03dbb5d3bbb0b6.jpg"],
		"inventory": [787],
		"information": [{
			"attrName": "材质",
			"attrValue": "ABS树脂"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "Refa制造商",
		"sale": 733,
		"date": "1500341120709",
		"category": "洗护",
		"subCategory": "身体护理"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1064008,
		"price": 99,
		"topName": "天鹅小径香薰蜡烛",
		"subName": "爱马仕集团制造商，花香",
		"shortDescription": ["欧美精油", "美大豆蜡", "房间去味", "舒缓心情", "精选香料", "大牌品质"],
		"shortDescriptionImage": ["/static/img/goodsImage/1064008/shortdescriptionImage/1012499e102a0a28f7492cd18c8099cb.png", "/static/img/goodsImage/1064008/shortdescriptionImage/6e72b9d51eaa044d43b6c2d5d9366a94.png", "/static/img/goodsImage/1064008/shortdescriptionImage/f6137474c24d7958e91b184e905b933b.png"],
		"headImage": ["/static/img/goodsImage/1064008/headImage/26389b2e2422888bf0cd00cefb18e714.png", "/static/img/goodsImage/1064008/headImage/b8f83756a2a3dbff35ee04b2fa842641.jpg", "/static/img/goodsImage/1064008/headImage/fe3f952249fd975df05b3420aed070d7.jpg", "/static/img/goodsImage/1064008/headImage/238af674ad3bcb78a0c2a01297bb91f4.jpg", "/static/img/goodsImage/1064008/headImage/333aa7c36b9ee8307eed0855f4bac4ca.jpg"],
		"type": ["200g"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1064008/description/299e5fdb3b8033222e538c79bf31965d.jpg", "/static/img/goodsImage/1064008/description/268f6937d19417c63061a0f9cef71c4d.jpg", "/static/img/goodsImage/1064008/description/fa7c751f70153ff56596149846366e2c.jpg", "/static/img/goodsImage/1064008/description/0f5b155bb2dcb765929a335ab282750b.jpg", "/static/img/goodsImage/1064008/description/5db6c59620fda0cbbc5aa3820f0ee5db.jpg", "/static/img/goodsImage/1064008/description/159090617d8173d2e05fcfdc39ac022d.jpg", "/static/img/goodsImage/1064008/description/5d05a1e4be046bdb5c3fbad23ad8fc00.jpg", "/static/img/goodsImage/1064008/description/816d892933054047ff7308999627a0bd.jpg", "/static/img/goodsImage/1064008/description/ec11e6a9fc4787bd97a3ed0c5f8a30e8.jpg", "/static/img/goodsImage/1064008/description/0da85f9145e980570650786de51beea7.jpg", "/static/img/goodsImage/1064008/description/d4276dcdc2b46c4de775f3820e9c5d0a.jpg", "/static/img/goodsImage/1064008/description/6fecb6121d5e5ef33fd8dc5d0dce397b.jpg", "/static/img/goodsImage/1064008/description/965c1dc2e29900f0d3d03ca02deef650.jpg", "/static/img/goodsImage/1064008/description/b73db9b7ce15dea1dada8fe0852daa3f.jpg", "/static/img/goodsImage/1064008/description/5b453282e9797be71fe197f156c904f6.jpg", "/static/img/goodsImage/1064008/description/1f5c37096d4329f7cf523a25dfed52ac.jpg", "/static/img/goodsImage/1064008/description/41e7cd2419a15cb496f2bd466d9d84c8.jpg", "/static/img/goodsImage/1064008/description/7b4187b246e999ae7763c14d20ebb53c.jpg", "/static/img/goodsImage/1064008/description/3ab3adbf8e2d1b4219d4bbfdf4f9cf66.jpg", "/static/img/goodsImage/1064008/description/df7bf97c64b7adbb0ae940dc0949cee0.jpg", "/static/img/goodsImage/1064008/description/6d4729412c6def8460dbd3914f935c7c.jpg", "/static/img/goodsImage/1064008/description/b9616ccbe9054758d3a91c6543cb4c65.jpg", "/static/img/goodsImage/1064008/description/467553c3bfcc0a4fea1c3d2355c941dd.jpg", "/static/img/goodsImage/1064008/description/ffdabdb197f7a56793a790af1ef52dea.jpg", "/static/img/goodsImage/1064008/description/890e45e7076bece25fac5e4c93929eaf.jpg", "/static/img/goodsImage/1064008/description/a5bb4c124852b1dd1761acfd6b9a1ddf.jpg", "/static/img/goodsImage/1064008/description/bc45315482d9cadfc4d31502ba4148c8.jpg", "/static/img/goodsImage/1064008/description/22a8f6cb753ef62b7c9fa9a8025a67ec.jpg", "/static/img/goodsImage/1064008/description/7d1aff00cb1152472cf4f40fe3b0b95e.jpg", "/static/img/goodsImage/1064008/description/ac474c03f5a66d942fed6d8c90b0b9fe.jpg", "/static/img/goodsImage/1064008/description/e6ed295b74b5ac0240e4c384a2c06c99.jpg", "/static/img/goodsImage/1064008/description/d5a97c810e4201005dd57c8319a7aa25.jpg", "/static/img/goodsImage/1064008/description/7bac1a44a5622ee82e507a5e09a85708.jpg", "/static/img/goodsImage/1064008/description/4913414598b60c9e036a28df316f633b.jpg", "/static/img/goodsImage/1064008/description/a4dd27ad075eaf0c2f926fd87704a1f0.jpg", "/static/img/goodsImage/1064008/description/ade69456a68f1a375805a38445b7ce0c.jpg", "/static/img/goodsImage/1064008/description/71488a1a5ff98a23e6446a43f2f832a2.jpg", "/static/img/goodsImage/1064008/description/d2537fc307be38c914edcdea87c08d8a.jpg", "/static/img/goodsImage/1064008/description/e2f6d1aee2d1242eaf2c651bf98b1514.jpg", "/static/img/goodsImage/1064008/description/6a6f5378e1fbf06d90f8ced677ada1a9.jpg", "/static/img/goodsImage/1064008/description/691774a5837d21ee0e187ec435eea116.jpg", "/static/img/goodsImage/1064008/description/912985061d793ab538b2b241695ff246.jpg", "/static/img/goodsImage/1064008/description/c1aeda0fcc7aac9025f4f36a6ac90a01.jpg", "/static/img/goodsImage/1064008/description/6c49968e2725f2186c6a11115bad758e.jpg", "/static/img/goodsImage/1064008/description/29d9931f5578c9ec17b2fd21d8144225.jpg"],
		"inventory": [324],
		"information": [{
			"attrName": "保质期限",
			"attrValue": "3年"
		}, {
			"attrName": "注意事项",
			"attrValue": "包装更替期间，新旧包装随机发货"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "爱马仕集团制造商",
		"sale": 24,
		"date": "1500341123432",
		"category": "洗护",
		"subCategory": "香薰"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1085002,
		"price": 129,
		"topName": "卷直一体陶瓷美发梳",
		"subName": "卷直两用 发型随心",
		"shortDescription": ["卷直两用", "造型随心", "防绕电线", "方便使用", "两档控温", "两种使用"],
		"shortDescriptionImage": ["/static/img/goodsImage/1085002/shortdescriptionImage/b1d2efeef1bcced4da5bcc1ff23fdf1a.jpg", "/static/img/goodsImage/1085002/shortdescriptionImage/8734d47a9950b599511e81d4ba13b1c9.jpg", "/static/img/goodsImage/1085002/shortdescriptionImage/37964019c774bfa60f33f88f21662b68.jpg"],
		"headImage": ["/static/img/goodsImage/1085002/headImage/1dbfe22ce116a499d3c21de69df3f675.png", "/static/img/goodsImage/1085002/headImage/9279944b8ea8d7fb2b8cce51ad2a7e54.jpg", "/static/img/goodsImage/1085002/headImage/102d9cc781b2fc3e931b8b967ea6c5b6.jpg", "/static/img/goodsImage/1085002/headImage/ec07882a49fec433d037e018575c09b1.jpg", "/static/img/goodsImage/1085002/headImage/368c00ae2acac802004b1f05c2c307a4.jpg"],
		"type": ["珠光白"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1085002/description/0269fc31ad81179d260f538099048e0f.jpg", "/static/img/goodsImage/1085002/description/714ae2ed1055728498ce066b1b11dfcb.jpg", "/static/img/goodsImage/1085002/description/08ae8e3fa436af7f10a89f5169da7683.jpg", "/static/img/goodsImage/1085002/description/1ee5a4e7c4bce539fe87063096bdd2f4.jpg", "/static/img/goodsImage/1085002/description/8cd9f645156e9c0975e341309a9a8c4d.jpg", "/static/img/goodsImage/1085002/description/723ea52a67fea0ca43f4a8b587af5890.jpg", "/static/img/goodsImage/1085002/description/2481a80a5db2f7a063fa580844a70a2d.jpg", "/static/img/goodsImage/1085002/description/3d70ae61501db3b68c0ceaa9011b7b62.jpg", "/static/img/goodsImage/1085002/description/81d076fbfacbb5639df26c5ea1f11606.jpg", "/static/img/goodsImage/1085002/description/79e4fef884bbf4957ffbd66445dcd90c.jpg", "/static/img/goodsImage/1085002/description/2c6d05c1838b6f1330699168a7a5d4e6.jpg", "/static/img/goodsImage/1085002/description/6310ab4e5e3f62f875d9da83ee56eb69.jpg", "/static/img/goodsImage/1085002/description/233abda11b2bfe2b6a781bff94fef5f4.jpg", "/static/img/goodsImage/1085002/description/6e2297179d938345b0799154c0e28c44.jpg", "/static/img/goodsImage/1085002/description/31442fb3a6a9eb80b48fb8301adff506.jpg", "/static/img/goodsImage/1085002/description/502bd72d8a446174a75e4738c8ba6d39.jpg", "/static/img/goodsImage/1085002/description/2e24acbfb1e1d7c7fac9a039dd0b5511.jpg", "/static/img/goodsImage/1085002/description/95d45c4b2342d5c8545ef1e1c00e87df.jpg", "/static/img/goodsImage/1085002/description/763e15fa3bc5c2e1c22563c85795791f.jpg", "/static/img/goodsImage/1085002/description/420c3c300df0f115b2ecfeeac6a6fb13.jpg", "/static/img/goodsImage/1085002/description/0cbb0e853634e021bca216deb5fc20fa.jpg", "/static/img/goodsImage/1085002/description/94067e00793c7aed6edfcf98ccb16f19.jpg", "/static/img/goodsImage/1085002/description/eec9707afc31b58d1da940d5457283f5.jpg", "/static/img/goodsImage/1085002/description/7f646e820b03a6d24bfe97ebb4e878b2.jpg", "/static/img/goodsImage/1085002/description/0e1e26d8cf27646eb3990edc7e6deb1d.jpg", "/static/img/goodsImage/1085002/description/394a25adb4404a943707251b2ad8dfda.jpg", "/static/img/goodsImage/1085002/description/4e6ee373323536007b5485943721f3e4.jpg", "/static/img/goodsImage/1085002/description/056511afbcccfe9b4a9e820b58f24d77.jpg", "/static/img/goodsImage/1085002/description/f3d66d0ae8ff88fed12800ae1b70813c.jpg", "/static/img/goodsImage/1085002/description/816260006ee0233050c0c459b7558480.jpg", "/static/img/goodsImage/1085002/description/c72f58f0fd9f0f185dd6c8cf92175c81.jpg", "/static/img/goodsImage/1085002/description/61ac043bed001d320e459df8a195f64c.jpg", "/static/img/goodsImage/1085002/description/2a73092039b4b73458607039f32c3539.jpg", "/static/img/goodsImage/1085002/description/d69fd7090d67ebb534a2bba3207517c9.jpg", "/static/img/goodsImage/1085002/description/55956361cf6da60feb1a88fd7e25a48b.jpg", "/static/img/goodsImage/1085002/description/a7cc507cfde02fbbc0212884cac25c8f.jpg", "/static/img/goodsImage/1085002/description/ab4754d20a4c38df81fc1f8bae7df460.jpg", "/static/img/goodsImage/1085002/description/8217b2897e86dfd0b3761b07270bfa27.jpg", "/static/img/goodsImage/1085002/description/5f5c554baefe46ffdb36f9c9bddaf679.jpg", "/static/img/goodsImage/1085002/description/d3c4e909e3360049b93fb08dff90ca75.jpg", "/static/img/goodsImage/1085002/description/39cfce80fcfe6a46f6babdced443451c.jpg", "/static/img/goodsImage/1085002/description/40641c68823504f0756cd56807f91723.jpg", "/static/img/goodsImage/1085002/description/9eb9d94ec832e98e13c6cc047c879159.jpg", "/static/img/goodsImage/1085002/description/45107dd113c5d3213a0af30915e92632.jpg", "/static/img/goodsImage/1085002/description/3ec8f088c11df459d6afc3f9c0c105a8.jpg", "/static/img/goodsImage/1085002/description/c6c7c9a50b6166101e2bd79439f937b8.jpg", "/static/img/goodsImage/1085002/description/a9ec60f41e6a77f0cd9e9d107505dc71.jpg", "/static/img/goodsImage/1085002/description/9ef7119ca52333811cd9f4c55b16279e.jpg", "/static/img/goodsImage/1085002/description/198950f1a15e3f4ae99782c23d5da755.jpg", "/static/img/goodsImage/1085002/description/e4321bb2cb9994971deafec709049e86.jpg", "/static/img/goodsImage/1085002/description/a0452e199e5e6e3c5dd7c6791e52c51c.jpg", "/static/img/goodsImage/1085002/description/79c1662b09dbfe15c1b6b974b81ccd47.jpg", "/static/img/goodsImage/1085002/description/218375ea9a58e2732508173515ff86d5.jpg", "/static/img/goodsImage/1085002/description/1b4fb2b5d8bbdacaf97732349ebb0ac8.jpg", "/static/img/goodsImage/1085002/description/d857f37f43a58c381585c10bf0f809fa.jpg"],
		"inventory": [497],
		"information": [{
			"attrName": "频率",
			"attrValue": "50/60Hz"
		}, {
			"attrName": "使用电压",
			"attrValue": "100-240V"
		}, {
			"attrName": "温度",
			"attrValue": "低档160度，高档190度"
		}, {
			"attrName": "注意事项",
			"attrValue": "由于电子类产品特殊性，如包装有痕迹，为仓库抽检以保证质量"
		}],
		"label": [{
			"title": "暑期特惠",
			"type": "2"
		}],
		"manufacture": "GHD制造商",
		"sale": 113,
		"date": "1500341126217",
		"category": "洗护",
		"subCategory": "洗发护发"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1039044,
		"price": 199,
		"topName": "墨玉 完美妆容化妆套刷",
		"subName": "优雅十刷，打造完美妆容",
		"shortDescription": ["桦木手柄", "大气造型", "进口刷毛", "柔软亲肤", "匠心工艺", "大牌品质"],
		"shortDescriptionImage": ["/static/img/goodsImage/1039044/shortdescriptionImage/beaf398a9c11ea0b67bc9c64a102cdf9.jpg", "/static/img/goodsImage/1039044/shortdescriptionImage/7fb4b2724e0e1c824715030c79e0495c.jpg", "/static/img/goodsImage/1039044/shortdescriptionImage/1e1397e40c934bd511a0391657b4c165.jpg"],
		"headImage": ["/static/img/goodsImage/1039044/headImage/702b7357ccc5ff75e82edaa12a892b75.png", "/static/img/goodsImage/1039044/headImage/62040bed0f86221b8bc57514409d0ead.jpg", "/static/img/goodsImage/1039044/headImage/f446b86adc122c15a83be1c26b782272.jpg", "/static/img/goodsImage/1039044/headImage/bef19b21638ff333fbe8a04e93ce795c.jpg", "/static/img/goodsImage/1039044/headImage/7f28fbe27ef88de18050f93ec3ccbdff.jpg"],
		"type": ["10只入"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1039044/description/0f0aa3fc81d882ce261e42a427a1172d.jpg", "/static/img/goodsImage/1039044/description/4eb5bf509733b11548fb5e0ec9121209.jpg", "/static/img/goodsImage/1039044/description/9992c1761e95a49efdf76982cf4e0d9a.jpg", "/static/img/goodsImage/1039044/description/01b46127b87260b4aeb69244012ccf90.jpg", "/static/img/goodsImage/1039044/description/b1009253b188f3f0a386fdc885bacb6b.jpg", "/static/img/goodsImage/1039044/description/34414fa06f75b03a4d7c5e8110337c5d.jpg", "/static/img/goodsImage/1039044/description/8a7933a8a392eab1883ab319ebad3028.jpg", "/static/img/goodsImage/1039044/description/522bb3389a79f48e91d2188be8943aea.jpg", "/static/img/goodsImage/1039044/description/c66fa72d8ed8535cfb7ea7ed14b8b10e.jpg", "/static/img/goodsImage/1039044/description/5fe4b16092c88e2b5be4756ec258a62b.jpg", "/static/img/goodsImage/1039044/description/2c324eec92baa9879556df2800ccd4dd.jpg", "/static/img/goodsImage/1039044/description/7afd20d07eb0a3a02a53869ba815a29d.jpg", "/static/img/goodsImage/1039044/description/1844de7a40e1ee34b79a3aae25f07148.jpg", "/static/img/goodsImage/1039044/description/68cad1831ca5a11e15e3f4cdb2272edf.jpg", "/static/img/goodsImage/1039044/description/9493b8c21002f2123ee9a52e1ec93b29.jpg", "/static/img/goodsImage/1039044/description/bc45470a50d43bb24903813251e06e84.jpg", "/static/img/goodsImage/1039044/description/8390014104fc7ab18a17fdc5c49d627d.jpg", "/static/img/goodsImage/1039044/description/5e9c7c3abe01e41279213e09fda4a542.jpg", "/static/img/goodsImage/1039044/description/963539702dfbd8c0718ca3dabc549f27.jpg", "/static/img/goodsImage/1039044/description/3c7fb1b6b2d478846bab76f1edcc6b33.jpg", "/static/img/goodsImage/1039044/description/34836ddb833f24ed743dc03f80293db5.jpg", "/static/img/goodsImage/1039044/description/24f6cf58a0b4d3b96e141314e7b30b87.jpg", "/static/img/goodsImage/1039044/description/4222244431cc7cc1310781646d4455a2.jpg", "/static/img/goodsImage/1039044/description/5083f0cb13c04a8b1becd9ac39609e55.jpg", "/static/img/goodsImage/1039044/description/4353801fc9ed367db7c8488aabd1f480.jpg", "/static/img/goodsImage/1039044/description/08f2fa32bb39d8c38ddf8e82323e6435.jpg", "/static/img/goodsImage/1039044/description/310de244e5e3829a698ee8c0e6b69a67.jpg", "/static/img/goodsImage/1039044/description/7d5142ac1d9ad929a2ff22ff3667e319.jpg", "/static/img/goodsImage/1039044/description/13e691a1def9cd4f08f6539c5dbc1ad0.jpg", "/static/img/goodsImage/1039044/description/de09cebc81846fa24a49a9800fa1eec4.jpg", "/static/img/goodsImage/1039044/description/4707e00e78385dcec3c1ec8658ed45ba.jpg", "/static/img/goodsImage/1039044/description/f97ecbbe64d8cd5876a6c4359b9b7aea.jpg", "/static/img/goodsImage/1039044/description/5beb7c492f94079e71bc9efd0a3318ed.jpg", "/static/img/goodsImage/1039044/description/8ace7ce7d95c5d6b6a213055649fb1de.jpg", "/static/img/goodsImage/1039044/description/edf09c082ed70cda7b068265f96d885f.jpg", "/static/img/goodsImage/1039044/description/51439636e637073a2235975d66512709.jpg", "/static/img/goodsImage/1039044/description/92ef30782dabd3e9fa8e15bbe28e2b50.jpg", "/static/img/goodsImage/1039044/description/2833ab2e6983c34f281e7cbf30c599a3.jpg", "/static/img/goodsImage/1039044/description/1249358443252087911d35c68574fea4.jpg", "/static/img/goodsImage/1039044/description/6b9e318988172121087afc6876869019.jpg", "/static/img/goodsImage/1039044/description/e81ccd2c822f09696ca287cee4f76ab4.jpg", "/static/img/goodsImage/1039044/description/7d6764953687c220372864f0b42d2178.jpg", "/static/img/goodsImage/1039044/description/47e1094dbdfbb0e77da88fd9c4ccf1ac.jpg", "/static/img/goodsImage/1039044/description/572dd227a8af3a7db68c7be86f972478.jpg", "/static/img/goodsImage/1039044/description/391bc879d2d09c6684898b2e3130b2fe.jpg", "/static/img/goodsImage/1039044/description/de3564a03bd4173cea9f00d12971e4b2.jpg", "/static/img/goodsImage/1039044/description/d5e4ff3f81395acebdac847f10cc798f.jpg", "/static/img/goodsImage/1039044/description/eaf891a23b6ee46016fb9043d8f7617b.jpg", "/static/img/goodsImage/1039044/description/e31945398432d34bc4ce1477966b996c.jpg", "/static/img/goodsImage/1039044/description/4d40bc2c0be049b5617514a164ab9c72.jpg", "/static/img/goodsImage/1039044/description/7eb0e9bcb6c2283bfc7a1a9f422423c6.jpg", "/static/img/goodsImage/1039044/description/fe9a6b24ec79cb7ab33dba558c37b0eb.jpg", "/static/img/goodsImage/1039044/description/6ce850ef967adfd287975699f357a6a7.jpg", "/static/img/goodsImage/1039044/description/ca13ef00894e88bdb9a47fa87b6b2316.jpg"],
		"inventory": [723],
		"information": [{
			"attrName": "刷毛材质",
			"attrValue": "德国巴斯夫纤维"
		}, {
			"attrName": "产品规格",
			"attrValue": "十支化妆刷"
		}, {
			"attrName": "刷杆材质",
			"attrValue": "木质"
		}, {
			"attrName": "注意事项",
			"attrValue": "赠送皮质刷套初次打开会有味道，属于正常情况，在通风处放置1-2日即可散去"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "竹宝堂制造商",
		"sale": 715,
		"date": "1500341128922",
		"category": "洗护",
		"subCategory": "美妆"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1113001,
		"price": 16.9,
		"topName": "谷风一木 软抽面巾纸",
		"subName": "100%原木浆，吸水不易破",
		"shortDescription": ["无荧光剂", "无增白剂", "日式插画", "点缀生活", "进口木浆", "三层耐用"],
		"shortDescriptionImage": ["/static/img/goodsImage/1113001/shortdescriptionImage/3ea2a67c6638363d38b5d117e9069d82.png", "/static/img/goodsImage/1113001/shortdescriptionImage/ad176e753cb6f1e706e69e76031e6cbe.png", "/static/img/goodsImage/1113001/shortdescriptionImage/7e5dc657ba0e5f339bd510dfbb453ad4.png"],
		"headImage": ["/static/img/goodsImage/1113001/headImage/431a09a43914483f4d70aeda8ecb8a59.png", "/static/img/goodsImage/1113001/headImage/84bf6c4e94bbfb48e456f44966932d68.jpg", "/static/img/goodsImage/1113001/headImage/38c151c04d4e8bba44c5620540a03165.jpg", "/static/img/goodsImage/1113001/headImage/b69ef4d8856dd63340ba3277e4795c8f.jpg", "/static/img/goodsImage/1113001/headImage/43663bc080a9bde9bfd041c9c116ec58.jpg"],
		"type": ["24包囤货装", "6包/提"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1113001/description/6695253448c6d738791daf48be0119f8.jpg", "/static/img/goodsImage/1113001/description/13720045a81bf34cdf38adacbdead8f9.jpg", "/static/img/goodsImage/1113001/description/a301cf6c9f237f9e9bb2610abc454d6b.jpg", "/static/img/goodsImage/1113001/description/9d92a81e9e047a7d797b595b48417b49.jpg", "/static/img/goodsImage/1113001/description/081d450835134109571816f606c1b859.jpg", "/static/img/goodsImage/1113001/description/cebec6f385d7e8b3e59cd12c4edab567.jpg", "/static/img/goodsImage/1113001/description/b14f8490ce458e7621300ba925a6a769.jpg", "/static/img/goodsImage/1113001/description/f3cf4cfb10e75b178b04d2afe08a62db.jpg", "/static/img/goodsImage/1113001/description/de5468cc9eb83e59f58a63497ecb06f9.jpg", "/static/img/goodsImage/1113001/description/ea219ca6419e1a6d507ce30560b5db7a.jpg", "/static/img/goodsImage/1113001/description/c384848035e5537809e765d30b6d49b7.jpg", "/static/img/goodsImage/1113001/description/481413fd782e2d88b42bbfd706591771.jpg", "/static/img/goodsImage/1113001/description/d2cde8c737248f8fc1d366a9d0094547.jpg", "/static/img/goodsImage/1113001/description/ac997e2a09bb04fa06a6579fce57ce43.jpg", "/static/img/goodsImage/1113001/description/005c4e3a44609faed7d82a049cff4a1a.jpg", "/static/img/goodsImage/1113001/description/85658e5938e7faeee7136ea041351ca8.jpg", "/static/img/goodsImage/1113001/description/4d71df9ac0c14a19598122509b095aee.jpg", "/static/img/goodsImage/1113001/description/de11983374423a585c2244eb778fdab2.jpg", "/static/img/goodsImage/1113001/description/2c91a6ea06cf5893c6395622dbbe365c.jpg", "/static/img/goodsImage/1113001/description/24d50626381019224b7d10d0112e706f.jpg", "/static/img/goodsImage/1113001/description/6bab033803de5122cf96b23268ec383e.jpg", "/static/img/goodsImage/1113001/description/dc1d6fb789b42a1f9cc4035447369db5.jpg", "/static/img/goodsImage/1113001/description/24a74e424194e445bfc69173c58b161e.jpg", "/static/img/goodsImage/1113001/description/bbd058cdf078d9e0571fc440974d1304.jpg", "/static/img/goodsImage/1113001/description/855a9b3fe09b2ee39906f6e8937109ff.jpg", "/static/img/goodsImage/1113001/description/095790213fd2d40406441ee28b832876.jpg", "/static/img/goodsImage/1113001/description/bd3872ae5cfc68f0b7f4daf59846e4f8.jpg", "/static/img/goodsImage/1113001/description/79b812dcc2149d8da0c4337348410fb3.jpg", "/static/img/goodsImage/1113001/description/bb33349645d66d14b5677f2fd2c4baf0.jpg", "/static/img/goodsImage/1113001/description/a2b5b1e609b29d51519b2a2854a760b8.jpg", "/static/img/goodsImage/1113001/description/552e9c49b4bb40284b5b8d84c63c987d.jpg", "/static/img/goodsImage/1113001/description/ec0d90ca518c6807134d2a8e0f9d2324.jpg", "/static/img/goodsImage/1113001/description/0733d18af1169a5fc2830a8eb7d0908d.jpg", "/static/img/goodsImage/1113001/description/238f9e356ee72f625de24bab54edd8cc.jpg", "/static/img/goodsImage/1113001/description/913a44db45eb64586b3e5bee9b45a63f.jpg", "/static/img/goodsImage/1113001/description/5e2b9bae30eeffbd07973ad2013f4e9b.jpg", "/static/img/goodsImage/1113001/description/42a5d663ae60978d3b4d22e551cb975b.jpg", "/static/img/goodsImage/1113001/description/519891a2f9aeae456abd1768a7215a7b.jpg", "/static/img/goodsImage/1113001/description/cda10f8a0492b4a24bd489f038afec55.jpg", "/static/img/goodsImage/1113001/description/b6a09951f2d7ee47fce9e94fc21a6562.jpg", "/static/img/goodsImage/1113001/description/28c0ed6985c9f7ebdb406e09ea9e3251.jpg", "/static/img/goodsImage/1113001/description/55e3c1e395eea2f1c7ba9a4e3d09bcf0.jpg", "/static/img/goodsImage/1113001/description/11d69dc3abc48cf501135522cac7e032.jpg", "/static/img/goodsImage/1113001/description/3e17fcb068438d43028b6eadedf2aa1f.jpg", "/static/img/goodsImage/1113001/description/e34a013ebd660f94aea10d0a14156aa6.jpg", "/static/img/goodsImage/1113001/description/87c2109ad27bd2844526b37943e9be58.jpg", "/static/img/goodsImage/1113001/description/b40f5d02fdd121c0c632d3a2739cc47d.jpg", "/static/img/goodsImage/1113001/description/5b2ba7756816d3554aeee2d11e6f85dc.jpg"],
		"inventory": [870, 688],
		"information": [{
			"attrName": "卫生标准",
			"attrValue": "GB15979"
		}, {
			"attrName": "规格",
			"attrValue": "133mm*195mm/张，三层"
		}, {
			"attrName": "数量",
			"attrValue": "120抽/包"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 711,
		"date": "1500341131716",
		"category": "洗护",
		"subCategory": "家庭清洁"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1093013,
		"price": 14.9,
		"topName": "白色亚克力洗浴四件套",
		"subName": "简雅风格，清新浴室风",
		"shortDescription": ["轻盈牢固", "安全环保", "纯白精致", "简约收纳", "精致细节", "严选工艺"],
		"shortDescriptionImage": ["/static/img/goodsImage/1093013/shortdescriptionImage/1d26e8e63f850f467cc8ae8fca246254.jpg", "/static/img/goodsImage/1093013/shortdescriptionImage/4b23e14a5fe106cc1c996d4e87210f54.jpg", "/static/img/goodsImage/1093013/shortdescriptionImage/a0d9ecfec3f6d231df85dd06beeb6a25.jpg"],
		"headImage": ["/static/img/goodsImage/1093013/headImage/e7100fd6b9e9bda9ba5b1a9bd6f684ff.png", "/static/img/goodsImage/1093013/headImage/9b57b043eae1f72a093113c9c8a058dd.jpg", "/static/img/goodsImage/1093013/headImage/120ae8162960e725d1b5c67e4d8a2cbd.jpg", "/static/img/goodsImage/1093013/headImage/1dc67fbb6132d7107c6c336e9e301844.jpg", "/static/img/goodsImage/1093013/headImage/afbed926d13401d568b8ac210a2d4d21.jpg"],
		"type": ["漱口杯", "肥皂盒", "牙刷架", "洗手液瓶", "套装"],
		"chara": "5色可选",
		"description": ["/static/img/goodsImage/1093013/description/b23f1af03c3472abbbaa5c2e9f723d2a.jpg", "/static/img/goodsImage/1093013/description/02f6e63c99a7d09b50496009e22747a4.jpg", "/static/img/goodsImage/1093013/description/a5e20b37f0f31a624be9146d8605133a.jpg", "/static/img/goodsImage/1093013/description/9b35538a77f5d7b15f9af336772e7652.jpg", "/static/img/goodsImage/1093013/description/424853753f626ae7ece496ffd46ffa75.jpg", "/static/img/goodsImage/1093013/description/0a383d8e799e70671c5268b86759d331.jpg", "/static/img/goodsImage/1093013/description/def52f861ae3990f1835d7e1e5e329bd.jpg", "/static/img/goodsImage/1093013/description/36af47dd54a4541154d437eb9c9030e3.jpg", "/static/img/goodsImage/1093013/description/6db7324b1f2dc64674402677b6d302af.jpg", "/static/img/goodsImage/1093013/description/800fe8aa5a188b08845996aca3c0ce6d.jpg", "/static/img/goodsImage/1093013/description/d2e166d97270617cf790f2c73a23ead9.jpg", "/static/img/goodsImage/1093013/description/5b01d6864090c6f3ee621ff57773677e.jpg", "/static/img/goodsImage/1093013/description/229212fbfa1b8c9a8575ba42c8b0d53c.jpg", "/static/img/goodsImage/1093013/description/969c052eed934851f56e7eba08cac6e5.jpg", "/static/img/goodsImage/1093013/description/26e81cb22b79f8415a211941535e45f7.jpg", "/static/img/goodsImage/1093013/description/2bd11255cf223df38518c1a0068d6b7e.jpg", "/static/img/goodsImage/1093013/description/ff29b78a0abdc1911e26f3dcf58439a0.jpg", "/static/img/goodsImage/1093013/description/284a570c29a8931119b962d6aa9861ad.jpg", "/static/img/goodsImage/1093013/description/b03c55ce2b54872b7d8bb9bb1ba1799d.jpg", "/static/img/goodsImage/1093013/description/ce0637b923afa6df597bea86c1380e84.jpg", "/static/img/goodsImage/1093013/description/baae14f35d2ea30d5da82ef5238a6af5.jpg", "/static/img/goodsImage/1093013/description/4ad24b039b3b28e79c2c4c2fe50090d9.jpg", "/static/img/goodsImage/1093013/description/162c8e667f16946aa3b40603f6cab226.jpg", "/static/img/goodsImage/1093013/description/3f3df4b8b93d641ff4ec9910f9790fee.jpg", "/static/img/goodsImage/1093013/description/97bbc1340e756e28e2ff95367d6d8360.jpg", "/static/img/goodsImage/1093013/description/e2c0e8dad8c7b51cb847834e7bca7b77.jpg", "/static/img/goodsImage/1093013/description/8d5e003e58aad706e0dd22561c775bce.jpg", "/static/img/goodsImage/1093013/description/12bc35d3a463f66bcbfe42abe0289512.jpg", "/static/img/goodsImage/1093013/description/853d335c024237f960d491f1c7a59902.jpg", "/static/img/goodsImage/1093013/description/0c2eb7550b7e3ab7911f8bccffbcb399.jpg", "/static/img/goodsImage/1093013/description/55b752ef458527d7cd91a886731b4cde.jpg", "/static/img/goodsImage/1093013/description/b77abce561f08a605b4592d35abefa74.jpg", "/static/img/goodsImage/1093013/description/eb513b0f8868956fc11624dfcd7cdcbf.jpg", "/static/img/goodsImage/1093013/description/ed6652c9a965fcfa1528791dad28edd8.jpg", "/static/img/goodsImage/1093013/description/c47bc85b8251a73634cd0b5c514cecb8.jpg", "/static/img/goodsImage/1093013/description/6ec11d3e9fe15bd7ca64771faab97b78.jpg", "/static/img/goodsImage/1093013/description/38b5472a7b7ecc125fa1ef1c5e682ae8.jpg", "/static/img/goodsImage/1093013/description/e5df8b8580580445725f98f9fd1a59c2.jpg"],
		"inventory": [891, 305, 83, 935, 346],
		"information": [],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 86,
		"date": "1500341134423",
		"category": "洗护",
		"subCategory": "浴室用具"
	})
	goodsEntity.save();

	var goodsEntity = new goodsModel({
		"ID": 1156163,
		"price": 49,
		"topName": "儿童短袖polo衫",
		"subName": "仅售供应商建议价的1/5",
		"shortDescription": ["全棉面料", "吸汗透气", "精致做工", "美观耐穿", "挺括有型", "四色百搭"],
		"shortDescriptionImage": ["/static/img/goodsImage/1156163/shortdescriptionImage/6739b1dcd6afac30d2e5dd3c1d6ac117.jpg", "/static/img/goodsImage/1156163/shortdescriptionImage/4bd14639f1a923aa60a9d6bb41cd00e1.jpg", "/static/img/goodsImage/1156163/shortdescriptionImage/9b247b7f0b5f67f8714bfba84e67694c.jpg"],
		"headImage": ["/static/img/goodsImage/1156163/headImage/7d1ba9099d5247d3b15db6174b95d551.png", "/static/img/goodsImage/1156163/headImage/cb572eb2c12857357ca7aa09bf901b67.jpg", "/static/img/goodsImage/1156163/headImage/c110fbb799eebc3a1b7b0acc638518d4.jpg", "/static/img/goodsImage/1156163/headImage/fec84debd67369a6db03215abeeb8b08.jpg", "/static/img/goodsImage/1156163/headImage/d35f0cc89e15a1481ced609b6485f6bf.jpg"],
		"type": ["灰色", "橙色", "浅蓝", "灰蓝"],
		"chara": "4色可选",
		"description": ["/static/img/goodsImage/1156163/description/41f9a06d5b7795d8a5a6dba530600c41.jpg", "/static/img/goodsImage/1156163/description/2d7cebc477052a710212e57d10ff69ac.jpg", "/static/img/goodsImage/1156163/description/8af01694adddd5ad5bc765caabbd6f79.jpg", "/static/img/goodsImage/1156163/description/d75bb71e4118b2a008c6bb4191639dcb.jpg", "/static/img/goodsImage/1156163/description/60be67d418da0131dafbe3f1361ec7e6.jpg", "/static/img/goodsImage/1156163/description/9dbc15beadeb1251e00e61227f6b27a2.jpg", "/static/img/goodsImage/1156163/description/688e3171097f50e215c5897469305d78.jpg", "/static/img/goodsImage/1156163/description/4b6cfdcb47306120670224990c57d3c6.jpg", "/static/img/goodsImage/1156163/description/614e84f371377e0151f40ee219ab4f7e.jpg", "/static/img/goodsImage/1156163/description/86b9473dd717ef8552d705069babf394.jpg", "/static/img/goodsImage/1156163/description/2f3d45bbafa5c4aae516e2fd3cd5e150.jpg", "/static/img/goodsImage/1156163/description/a968163fb21707f3fca6d090b69c2ce4.jpg", "/static/img/goodsImage/1156163/description/451e4411d04ecba25e7fada94716396e.jpg", "/static/img/goodsImage/1156163/description/933049af201fed992f56145bdda503ce.jpg", "/static/img/goodsImage/1156163/description/f4e0d14a892a79e35362fe299efb60ee.jpg", "/static/img/goodsImage/1156163/description/44503d815015d335dd749dd39cb866e6.jpg", "/static/img/goodsImage/1156163/description/72a38f00b5dccb2c78ac5f9597df21bd.jpg", "/static/img/goodsImage/1156163/description/03b04362bd2a08cca0f9e1e577f2f2a5.jpg", "/static/img/goodsImage/1156163/description/8372ddc9dcdfc3fd4bd1d6b5dbd9856a.jpg", "/static/img/goodsImage/1156163/description/cb829df90bd5e9bca685abf359b73ea5.jpg", "/static/img/goodsImage/1156163/description/fd65f6a9d10b95749d5b6f4edd030716.jpg", "/static/img/goodsImage/1156163/description/5ef892e9e73701c99bdec83f2c916195.jpg", "/static/img/goodsImage/1156163/description/42e90017e0ace6dc3e40c4721607fd5b.jpg", "/static/img/goodsImage/1156163/description/988d335b2c15e266b87eb3de5eaa83fd.jpg", "/static/img/goodsImage/1156163/description/1c67a9550f5bfb5522fabc5893797e3d.jpg", "/static/img/goodsImage/1156163/description/e95c511bcb4033f228805fe88925886f.jpg", "/static/img/goodsImage/1156163/description/3d2ced1c601d98221eb2229719c11414.jpg", "/static/img/goodsImage/1156163/description/c01b697f7bf46366468aff76ac3ef927.jpg", "/static/img/goodsImage/1156163/description/29a45e8d7a5f0c2dc727ba2ab06654ca.jpg", "/static/img/goodsImage/1156163/description/e8ee77a1bbf5ddb2bacbd982cb49dfed.jpg", "/static/img/goodsImage/1156163/description/482c54027705f361172326026e9e5f08.jpg", "/static/img/goodsImage/1156163/description/8d8fa5aec2d7c2d583488c4f3e33fa03.jpg", "/static/img/goodsImage/1156163/description/85704858097599f5272e0bb37be7bd73.jpg", "/static/img/goodsImage/1156163/description/2c1513535d77bdb76e83d7f1ccb39012.jpg", "/static/img/goodsImage/1156163/description/e8ef850284d3109cef8145496c93da19.jpg", "/static/img/goodsImage/1156163/description/6c54ba5933bd4a0c88635acc4a163992.jpg", "/static/img/goodsImage/1156163/description/56e96a8cc724bb3d945499148dcecfaf.jpg", "/static/img/goodsImage/1156163/description/682f9b11482bbf8f1fb8712484ec2696.jpg", "/static/img/goodsImage/1156163/description/09949fcf6a91e2c655d7087eb982d805.jpg", "/static/img/goodsImage/1156163/description/7e346a387a0f3ea0749d78b23e4ee67b.jpg", "/static/img/goodsImage/1156163/description/a1208ede400e91ce3d0433519adccd81.jpg", "/static/img/goodsImage/1156163/description/72922ca79bdaf99b058ab5b8b807578d.jpg", "/static/img/goodsImage/1156163/description/a55de54c07874d87431ee92298e679b6.jpg", "/static/img/goodsImage/1156163/description/73727b4bce0b79e6ceffb262d1d3d7da.jpg", "/static/img/goodsImage/1156163/description/ee4dcf2e86d492460ffeccae4924af33.jpg", "/static/img/goodsImage/1156163/description/aa0901d06f7895578ab3f96b4e28ffae.jpg", "/static/img/goodsImage/1156163/description/65d11c1ce4de012b7c4d0d2e53aba79d.jpg", "/static/img/goodsImage/1156163/description/690067375215e6a23f2d879e73e475b6.jpg", "/static/img/goodsImage/1156163/description/eaf4152faecdef9d4d56155c18c5c0b9.jpg", "/static/img/goodsImage/1156163/description/35430010c3c2098e393b54e134beb895.jpg", "/static/img/goodsImage/1156163/description/85de036d5096965a658341d11c0142df.jpg", "/static/img/goodsImage/1156163/description/5fec329f93dd98fc9b008f76776d9cb9.jpg", "/static/img/goodsImage/1156163/description/7d7ef97d555dc6f43c4bcc1306917630.jpg", "/static/img/goodsImage/1156163/description/98921015f92c129f8af0095048250e9a.jpg", "/static/img/goodsImage/1156163/description/363f0cec04818641ccb9718ae055202e.jpg", "/static/img/goodsImage/1156163/description/8cfaccf5a60b70a146aa14b23852366b.jpg", "/static/img/goodsImage/1156163/description/51dc114379c37a3a066edfb8be1b7106.jpg", "/static/img/goodsImage/1156163/description/4f775e3b3727a4588ed921b2f6ab7a6b.jpg", "/static/img/goodsImage/1156163/description/c8490fefd2a9d211ea744f9672d46bfc.jpg", "/static/img/goodsImage/1156163/description/fdcda949e406f96cf16751c294c05f5d.jpg", "/static/img/goodsImage/1156163/description/4dd6f4fe7fe16e68fb475b70febf11c1.jpg", "/static/img/goodsImage/1156163/description/e9b19b06d91140e88d8c07a4c1ce1db8.jpg", "/static/img/goodsImage/1156163/description/d663f4f5e9d53077c66506a65ca9da9a.jpg", "/static/img/goodsImage/1156163/description/52c1cadb6d0dd964a7086f58f8535066.jpg", "/static/img/goodsImage/1156163/description/d394e3b9f1c854ce21dac33872d6f734.jpg", "/static/img/goodsImage/1156163/description/cc08dcb949057c3c523fe8921ae928e6.jpg"],
		"inventory": [865, 28, 0, 628],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "FZT 73045-2013"
		}, {
			"attrName": "安全类别",
			"attrValue": "GB31701-2015 A类"
		}, {
			"attrName": "注意事项",
			"attrValue": "儿童衣物与大人衣物分开洗涤；同色或相近色洗涤"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "Ralph Lauren制造商",
		"sale": 21,
		"date": "1500341140734",
		"category": "婴童",
		"subCategory": "儿童服饰"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1135047,
		"price": 129,
		"topName": "毛毛虫儿童运动鞋",
		"subName": "仅售供应商建议价的1/3",
		"shortDescription": ["升级大底", "回弹有力", "流线外形", "时尚炫酷", "人体工学", "学步首选"],
		"shortDescriptionImage": ["/static/img/goodsImage/1135047/shortdescriptionImage/8c9423354039f62774b319eda098f7e4.png", "/static/img/goodsImage/1135047/shortdescriptionImage/2548388897287f319f87babcbaa653be.png", "/static/img/goodsImage/1135047/shortdescriptionImage/ba2aef80286eef2910f03a3fc8c27c70.png"],
		"headImage": ["/static/img/goodsImage/1135047/headImage/dbe63c35edf5b53192ea0864d6440168.png", "/static/img/goodsImage/1135047/headImage/9cbf08fcb20d27af5b5945605f8980cd.jpg", "/static/img/goodsImage/1135047/headImage/aadddb9a6d630980f7ce9b0afa83b797.jpg", "/static/img/goodsImage/1135047/headImage/b6c0d6f0f6c6767c67504de3076aaafc.png", "/static/img/goodsImage/1135047/headImage/c229ced4e4ca96a84278193a876198ab.jpg"],
		"type": ["玫瑰紫", "丛林绿", "灌木绿", "糖果红", "甜心粉", "海浪蓝", "夏威夷粉", "极光绿", "经典黑", "经典红"],
		"chara": "10色可选",
		"description": ["/static/img/goodsImage/1135047/description/6f3240ed840d7e484a13db69d011cda9.jpg", "/static/img/goodsImage/1135047/description/79acb939831883e75375db25d80ee215.jpg", "/static/img/goodsImage/1135047/description/55436455aaf85e4b977866e00507cdf5.jpg", "/static/img/goodsImage/1135047/description/5193d986ae81b6f7532028e25e7c623d.jpg", "/static/img/goodsImage/1135047/description/a998b682e8023d95ec245d62a6314851.jpg", "/static/img/goodsImage/1135047/description/358cee8d1c29571b1968d213709f724b.jpg", "/static/img/goodsImage/1135047/description/a27b77508677b07fb20ecbe54172ae12.jpg", "/static/img/goodsImage/1135047/description/b2f1b855d98b192ec46402f7a92c3197.jpg", "/static/img/goodsImage/1135047/description/ad67d3927f58159ab24e32fb7b96526a.jpg", "/static/img/goodsImage/1135047/description/ceab28feca1fc5b4ab012f3ed62f4794.jpg", "/static/img/goodsImage/1135047/description/e2cc8bd59dfff2403f582758d2adfe71.jpg", "/static/img/goodsImage/1135047/description/9a9801b8256edd0e34728ed8fc53b977.jpg", "/static/img/goodsImage/1135047/description/56806b237654fe3186487a4c66a9a7fd.jpg", "/static/img/goodsImage/1135047/description/13c90dc7dcc98a71affaf683ebf39a52.jpg", "/static/img/goodsImage/1135047/description/fd4ce13c770cbd4e5b9069e19935b0bf.jpg", "/static/img/goodsImage/1135047/description/d1510da5757ca86881547bc9b1c3ce7a.jpg", "/static/img/goodsImage/1135047/description/8e17543143a7cebed5e297fb83b83854.jpg", "/static/img/goodsImage/1135047/description/11fa0e9d828446e93d1febf2e5cb6eec.jpg", "/static/img/goodsImage/1135047/description/ac818c0819f84187f6b90e31d47c012d.jpg", "/static/img/goodsImage/1135047/description/2802b2b2f86b58b02f071dcc1df7e24d.jpg", "/static/img/goodsImage/1135047/description/b02292db74d82bc710209d5bf37640ec.jpg", "/static/img/goodsImage/1135047/description/70179f59519a9a673ac985eed6439974.jpg", "/static/img/goodsImage/1135047/description/2b43fc03814c8f98b69d13e07bc48120.jpg", "/static/img/goodsImage/1135047/description/018f9c7f1820612e59dd35431596b6cf.jpg", "/static/img/goodsImage/1135047/description/8131e26bbc6a0b06946aae556f79b71a.jpg", "/static/img/goodsImage/1135047/description/b702491c67baac2418a11cdac54a8f04.jpg", "/static/img/goodsImage/1135047/description/6e5f615c794817eb5ab91da393b8a818.jpg", "/static/img/goodsImage/1135047/description/b4b76e23f784996317eb20377c9a3251.jpg", "/static/img/goodsImage/1135047/description/2aa3df713ba05d5dc23f05d6a99a2ec1.jpg", "/static/img/goodsImage/1135047/description/a4995daa4f801bd97f0c258681f40aa3.jpg", "/static/img/goodsImage/1135047/description/89fd3bdbd72a21276959682716d951fe.jpg", "/static/img/goodsImage/1135047/description/c85b2eb798dea3acc8dea3eaec61038a.jpg", "/static/img/goodsImage/1135047/description/0121c94def0dfe87abe31046eeea729f.jpg", "/static/img/goodsImage/1135047/description/67a3d52f0eb0908e093570c1505213f1.jpg", "/static/img/goodsImage/1135047/description/dc30996f23862db65841cbfc0188f687.jpg", "/static/img/goodsImage/1135047/description/ef5bafd2ea92215d6ed9090c6b3ab266.jpg", "/static/img/goodsImage/1135047/description/b0a2249c9e0b198987cd02b7005a4f1d.jpg", "/static/img/goodsImage/1135047/description/f934456402e771b9ccfb11c78109e6ed.jpg", "/static/img/goodsImage/1135047/description/83173232ff71507e496fb6fe7189f263.jpg", "/static/img/goodsImage/1135047/description/da6e56c966f593b3b2e3453a28a40643.jpg", "/static/img/goodsImage/1135047/description/8520ea8d73d04394f36447e396e5fbdb.jpg", "/static/img/goodsImage/1135047/description/27eac9ff57283e6232a8b8340faa2098.jpg", "/static/img/goodsImage/1135047/description/88483eba7958246b6c5923e21d9b798c.jpg", "/static/img/goodsImage/1135047/description/8a4d5d6cff5975b50f66c29c481eaaa9.jpg", "/static/img/goodsImage/1135047/description/d986554ba838d35bdf17ea324dd6429c.jpg", "/static/img/goodsImage/1135047/description/631ff6cd831655b41955c2fade0b56d9.jpg", "/static/img/goodsImage/1135047/description/8ba20ebed098082e86b11a89c8933bb0.jpg", "/static/img/goodsImage/1135047/description/95d15166ba5dc7b8ca4d9091bd393100.jpg", "/static/img/goodsImage/1135047/description/ccaf65bf8a32b027ed0440c2c5129760.jpg", "/static/img/goodsImage/1135047/description/d0e1eccfcaa87cfcbe36d85ccce6792a.jpg", "/static/img/goodsImage/1135047/description/ed21bbcc01ec2d69cf0d019bfd5c25ff.jpg", "/static/img/goodsImage/1135047/description/dcf7de610728ab64b95deaef44273332.jpg", "/static/img/goodsImage/1135047/description/fb86c34d813700fe0f108b027ed58bb6.jpg", "/static/img/goodsImage/1135047/description/571e0375db4a29597abc1bce1ed64365.jpg", "/static/img/goodsImage/1135047/description/6cfd780819b08c2129ecb830b35c8e11.jpg", "/static/img/goodsImage/1135047/description/fa9673c57991b8ee54091718adf27dc8.jpg", "/static/img/goodsImage/1135047/description/3a55c8a2ccc6f723622cda1ea94309dd.jpg", "/static/img/goodsImage/1135047/description/394ff582b974c53b02f3993fe240a4a5.jpg", "/static/img/goodsImage/1135047/description/66a896dbc336e0025711c995e7a02593.jpg", "/static/img/goodsImage/1135047/description/aa5896b8531ae0512c813891ada54ccf.jpg", "/static/img/goodsImage/1135047/description/3346b29b392429411ce06ea9b8698e39.jpg", "/static/img/goodsImage/1135047/description/963cc19c5a29bb384d3c037717fab7fa.jpg", "/static/img/goodsImage/1135047/description/9231298a3d86b9d6e661e9eb7a9ccc4e.jpg", "/static/img/goodsImage/1135047/description/de9101b95cc0a2d955106703b80244a5.jpg", "/static/img/goodsImage/1135047/description/d748b09262be6d704b4d824a6183f5ac.jpg", "/static/img/goodsImage/1135047/description/bf27fdc28155433109b6974dbc39ac1b.jpg", "/static/img/goodsImage/1135047/description/78abe7aba4eb8394eb83d619913061f4.jpg", "/static/img/goodsImage/1135047/description/1eb4a834589a15a84c3144ff24e5245a.jpg", "/static/img/goodsImage/1135047/description/f915a29954e3ee6687994380fd5e35d1.jpg", "/static/img/goodsImage/1135047/description/482128f953142a3c6555570cb02277fc.jpg", "/static/img/goodsImage/1135047/description/976d0d533c194e99675e5dbb12aad635.jpg", "/static/img/goodsImage/1135047/description/4d330bc6f23d273b6cea70c159c7e28c.jpg", "/static/img/goodsImage/1135047/description/1457f59b3d4847cd35cac6595bc0754a.jpg", "/static/img/goodsImage/1135047/description/3764ac150ac662a5a327681761f51bfb.jpg", "/static/img/goodsImage/1135047/description/e72cf0d57dbdad17e7b80ab02319da88.jpg", "/static/img/goodsImage/1135047/description/472cff40c8f14ae497aeb75dd1603602.jpg", "/static/img/goodsImage/1135047/description/13892a04bf5fe4ce7b8b751708c920f7.jpg", "/static/img/goodsImage/1135047/description/9cf81fe200a24dbad089a09085e8a806.jpg", "/static/img/goodsImage/1135047/description/829460a2c845501f3e9b5be4dd20f024.jpg", "/static/img/goodsImage/1135047/description/8bb0cb7c2fa209b528b262791062bdcc.jpg", "/static/img/goodsImage/1135047/description/3b986362132e0a00b5586e134a6b6f2f.jpg", "/static/img/goodsImage/1135047/description/d7ef72c09da4d25fbf397c724cc1ba6f.jpg", "/static/img/goodsImage/1135047/description/8f2cf58e10349c59dedc1f4012692acf.jpg", "/static/img/goodsImage/1135047/description/078cb6acd8ccd2843da7d0106ca772c5.jpg", "/static/img/goodsImage/1135047/description/0c383764ff0ab1bc26f2ac7ea3db5167.jpg", "/static/img/goodsImage/1135047/description/991f4156413e8ea0d485314b6428d704.jpg", "/static/img/goodsImage/1135047/description/7817dd0a53ffdbbbf507db5c1ec5dd91.jpg", "/static/img/goodsImage/1135047/description/9d554b9ebd88b3d4566631d26e551b7d.jpg", "/static/img/goodsImage/1135047/description/b5c3e87aafb6f45d654025233c77a34b.jpg", "/static/img/goodsImage/1135047/description/9cbf7dca5438303d6a9e8c036a814f0f.jpg", "/static/img/goodsImage/1135047/description/c6e5854b8045a44233daa04317d69804.jpg", "/static/img/goodsImage/1135047/description/295cf0f729ef03357cb0b605c85fe414.jpg", "/static/img/goodsImage/1135047/description/ab5a9a1a35e99ca783061197307965b8.jpg", "/static/img/goodsImage/1135047/description/c1b41d52c24fd6243acb3d2746ac2bc2.jpg", "/static/img/goodsImage/1135047/description/7eeaa5b06bff6f8682602da4e68885ca.jpg", "/static/img/goodsImage/1135047/description/02f75f31580c5a63446029231c3a8a9b.jpg", "/static/img/goodsImage/1135047/description/b9ca833581e10b7a1b9487505262f338.jpg", "/static/img/goodsImage/1135047/description/aa065b8a231dd43a6c744bdf8f9eaf73.jpg", "/static/img/goodsImage/1135047/description/3a1a2a6f97ffde0cfbe35219b0392638.jpg", "/static/img/goodsImage/1135047/description/3854e0df7595373aa93fe683b19582e9.jpg", "/static/img/goodsImage/1135047/description/ffc2799348f6018408613e8440f8c22b.jpg", "/static/img/goodsImage/1135047/description/f862b4f00c4e14455d383ebb60dae97e.jpg", "/static/img/goodsImage/1135047/description/ff388531d049efb0aa46f53525b13bca.jpg", "/static/img/goodsImage/1135047/description/5a90b09664860638af948c52120795b2.jpg", "/static/img/goodsImage/1135047/description/99fa6b92e9f481ecda09c877358c3fee.jpg", "/static/img/goodsImage/1135047/description/9baa975dd1ed3dc2ec47a29628a81cb0.jpg", "/static/img/goodsImage/1135047/description/d5426bf0039801f45883c9d92e299640.jpg", "/static/img/goodsImage/1135047/description/d354fc068cd80c9bc50e93342c9fdaa1.jpg", "/static/img/goodsImage/1135047/description/72d87c38f2e02a981849997a173fbbb4.jpg", "/static/img/goodsImage/1135047/description/ff44fde801091bb78b5184de3e686196.jpg", "/static/img/goodsImage/1135047/description/1ee22b0eadf1670a24a5ca3bd353fa29.jpg", "/static/img/goodsImage/1135047/description/dad45c3718d6c7abd3d329127cf9750a.jpg", "/static/img/goodsImage/1135047/description/bf41a089a20fbacea35f31f65c746485.jpg", "/static/img/goodsImage/1135047/description/148d1de75616aa27f63c069e6a1d3f52.jpg", "/static/img/goodsImage/1135047/description/ba7e809bacd9704b320a8578e56cfa2f.jpg", "/static/img/goodsImage/1135047/description/d6f15f79f5e96e713058d05bc8115b11.jpg", "/static/img/goodsImage/1135047/description/7768d127e5eb3f69facb1ac3b51e3d72.jpg", "/static/img/goodsImage/1135047/description/41d767271f4f66761f8098f2463d5fdb.jpg", "/static/img/goodsImage/1135047/description/9837eb84c24cee3c9648cdb41af50793.jpg", "/static/img/goodsImage/1135047/description/a8c8b9441e44804bcd37c1aa2d140490.jpg", "/static/img/goodsImage/1135047/description/9d107b7eb8187820f6fddbaee6f9a438.jpg", "/static/img/goodsImage/1135047/description/97063fcb1dc4b52a7254e8b6fddd0f66.jpg", "/static/img/goodsImage/1135047/description/c65a4b373584ad6dba0e139503c5c4df.jpg", "/static/img/goodsImage/1135047/description/e9ec69bc4a5f8285e2826cbd5fe8745e.jpg", "/static/img/goodsImage/1135047/description/391a2bf39a447defc117d595b47f2084.jpg", "/static/img/goodsImage/1135047/description/7206d0a19868bf01752bf9ba39d37193.jpg", "/static/img/goodsImage/1135047/description/88c84544c71570fa3926d8982950aa04.jpg", "/static/img/goodsImage/1135047/description/2af08b1a03bc355251a899139cacdb06.jpg", "/static/img/goodsImage/1135047/description/556a260e18ad69aefff678242d83e4a2.jpg", "/static/img/goodsImage/1135047/description/1d16a06aef0f1458bebd5287cebb09a1.jpg", "/static/img/goodsImage/1135047/description/6320c20aa23015aaae9b36d78f2e1562.jpg", "/static/img/goodsImage/1135047/description/1d028a33eb3d03b97b227b88834cdf6a.jpg", "/static/img/goodsImage/1135047/description/966decb8ce9c0a7093bf3cc56cdfcc93.jpg", "/static/img/goodsImage/1135047/description/6752d36fab45ec12082f5dfbe46d034d.jpg"],
		"inventory": [412, 992, 702, 604, 573, 218, 16, 868, 889, 74],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "QB/T4331-2012 儿童旅游鞋"
		}, {
			"attrName": "注意事项",
			"attrValue": "请仔细测量宝宝脚长，然后参考详情末端尺码表选择购买"
		}],
		"label": [{
			"title": "爆品",
			"type": "2"
		}],
		"manufacture": "",
		"sale": 585,
		"date": "1500341145390",
		"category": "婴童",
		"subCategory": "配搭"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1253006,
		"price": 149,
		"topName": "新手妈咪私物专属搭配",
		"subName": "无缝哺乳文胸+产后收腹内裤",
		"shortDescription": ["一体成型", "承托给力", "无缝无痕", "舒适体验", "弹力面料", "无束缚感"],
		"shortDescriptionImage": ["/static/img/goodsImage/1253006/shortdescriptionImage/58ba18000382ac4b84788f3c6426188d.png", "/static/img/goodsImage/1253006/shortdescriptionImage/7f8c3bab8e2af902f9c4e944087b4b59.jpg", "/static/img/goodsImage/1253006/shortdescriptionImage/8040a5bee2dd082afe05a9c471985491.jpg"],
		"headImage": ["/static/img/goodsImage/1253006/headImage/3b2b1525731c0eebf74ff0487db5e464.png", "/static/img/goodsImage/1253006/headImage/c6589255fe46a9468c1e514df1474d40.jpg", "/static/img/goodsImage/1253006/headImage/34b19d8941dc0e4fb4ab654e96ec0619.jpg", "/static/img/goodsImage/1253006/headImage/f90f13882450cf8126a475cfe36df2a5.jpg", "/static/img/goodsImage/1253006/headImage/d972f8bd7c38bcb54d67cc588727dd52.jpg"],
		"type": ["黑色", "肤色"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1253006/description/f8f3e8cf4347b35cc736f25a0e4a3f8a.jpg", "/static/img/goodsImage/1253006/description/42cba08eff01310fd3aad3a35e5d2201.jpg", "/static/img/goodsImage/1253006/description/3c11cab69369e048e7c806a099280411.jpg", "/static/img/goodsImage/1253006/description/450e56cda2a31a434b6eaedfd84cced7.jpg", "/static/img/goodsImage/1253006/description/2c9ef22b63fa783ede667cee5d683778.jpg", "/static/img/goodsImage/1253006/description/4c939c66c7b37dac73bff17d468131b0.jpg", "/static/img/goodsImage/1253006/description/3645b8ecfaee6a9d78386382e59e1657.jpg", "/static/img/goodsImage/1253006/description/a9109e403a580a73e418f3d9ee5546b3.jpg", "/static/img/goodsImage/1253006/description/ca885d6ee7a2fb8778562c7391d17c55.jpg", "/static/img/goodsImage/1253006/description/b551ddb018133d84d0865267e254efa4.jpg", "/static/img/goodsImage/1253006/description/e0d6dc612dfe632b0d4414f29ae58683.jpg", "/static/img/goodsImage/1253006/description/dcabd98c511d1e1d441a57b9f2ebbb2a.jpg", "/static/img/goodsImage/1253006/description/dd08d037f393d995de0c3cb2d9f249d7.jpg", "/static/img/goodsImage/1253006/description/b537d128b9464ef71fa1bd2447f69fd9.jpg", "/static/img/goodsImage/1253006/description/839c4232b43ac646ac16b5901fff67e3.jpg", "/static/img/goodsImage/1253006/description/7cedac270f8bf4b3ba4c4cb30efa61d1.jpg", "/static/img/goodsImage/1253006/description/fecae60f39a2ec52e64d57ab75ec3344.jpg", "/static/img/goodsImage/1253006/description/38b3eef2a64947cda784f1bc39047b07.jpg", "/static/img/goodsImage/1253006/description/cb5a95d536f63cf462d1bef2ef5e0706.jpg", "/static/img/goodsImage/1253006/description/5fdf5b412e1c746be3f79619769a62fc.jpg", "/static/img/goodsImage/1253006/description/ba3467f18059dea8500b3f832ca6a875.jpg", "/static/img/goodsImage/1253006/description/c2bc7a85728cf337024db463eddb54a3.jpg", "/static/img/goodsImage/1253006/description/b8c90f18b4b81db08ca5c9f18574dd2b.jpg", "/static/img/goodsImage/1253006/description/1c07fa71f5705d8fb7aec2d973626adc.jpg", "/static/img/goodsImage/1253006/description/fe6615d3a83033e7b30df7f1327680c3.jpg", "/static/img/goodsImage/1253006/description/a13ec22b26e840ad9e08eba27c380b16.jpg", "/static/img/goodsImage/1253006/description/564c8211271e684e2d098b1c998ddc83.jpg", "/static/img/goodsImage/1253006/description/a4cf2e570f76c9148724c7d7ba7c4cfb.jpg", "/static/img/goodsImage/1253006/description/918463a566e22d0d0e2af09e3e29fbc7.jpg", "/static/img/goodsImage/1253006/description/904acc4030d9f956a5a9c2a1d8e570e5.jpg", "/static/img/goodsImage/1253006/description/d6a49bbd416a16b131573b5482b560b0.jpg", "/static/img/goodsImage/1253006/description/e47819c41ff97dc53b56978249da88b8.jpg", "/static/img/goodsImage/1253006/description/77ae37c247de8e3fff2b323adc67c880.jpg", "/static/img/goodsImage/1253006/description/d2be097c741a2829b2cee6b40a4740ba.jpg", "/static/img/goodsImage/1253006/description/507f2928f6bed0a7d6cc53594969045c.jpg", "/static/img/goodsImage/1253006/description/9d0ec3ca51440056fa18efd9a2a9db64.jpg", "/static/img/goodsImage/1253006/description/66f7893feff8a94fe01492b94cb86e50.jpg", "/static/img/goodsImage/1253006/description/09b08da35c71632091fb96083dbc1e9b.jpg", "/static/img/goodsImage/1253006/description/fd34a0cd7f91a3d08b5e36d2e1672e75.jpg", "/static/img/goodsImage/1253006/description/8d25517dd915e317b67eb355266e3483.jpg", "/static/img/goodsImage/1253006/description/a7632722ea40cc9b4225da8c17993d94.jpg", "/static/img/goodsImage/1253006/description/8272813b92a2aaf424cef19ac7be9c11.jpg", "/static/img/goodsImage/1253006/description/b0d05f03d2750e63794b47f64a1853d1.jpg", "/static/img/goodsImage/1253006/description/faea7e94ee891a53acde5efb49e52d4c.jpg", "/static/img/goodsImage/1253006/description/40a084ef6683bb1a02ff6bd92e202c4b.jpg", "/static/img/goodsImage/1253006/description/75f22a604b1db04e87e73c56eb815eef.jpg", "/static/img/goodsImage/1253006/description/f29f59d21b5398517e5194bf1966ddaa.jpg", "/static/img/goodsImage/1253006/description/071ad0745c637ac6576e46247af06ca7.jpg", "/static/img/goodsImage/1253006/description/a3ce9ac7a15875325ef0635c4c99b4e2.jpg", "/static/img/goodsImage/1253006/description/c6b248c86bcd5c74b2f13ab890764f72.jpg", "/static/img/goodsImage/1253006/description/b3b310b7fc74ca833fd135c1f7059552.jpg", "/static/img/goodsImage/1253006/description/c26a91060e80dcf281c16a2d07e64927.jpg", "/static/img/goodsImage/1253006/description/8e9c42f06a8a5fcdf29748a881a65710.jpg", "/static/img/goodsImage/1253006/description/6fded735b984b19134e65ee89e4dbdf1.jpg", "/static/img/goodsImage/1253006/description/185379173e8f7021763f61a8d8695413.jpg", "/static/img/goodsImage/1253006/description/a2db9e069576a2f354cb079038b250df.jpg", "/static/img/goodsImage/1253006/description/636c69e34a76412fbe17f7a3ed9b89d9.jpg", "/static/img/goodsImage/1253006/description/bae6f0ab2965bdd22cf0efcc6a158987.jpg", "/static/img/goodsImage/1253006/description/396e1fabd15ec2e3dac4237c139e5f93.jpg", "/static/img/goodsImage/1253006/description/d2245a26c983b6482dfebd8b5ba53596.jpg", "/static/img/goodsImage/1253006/description/88f1932e69f4c308e8ba4bc0a2ec687a.jpg", "/static/img/goodsImage/1253006/description/724f011f144baea695d4aa9f631c76c7.jpg", "/static/img/goodsImage/1253006/description/79bb428bda7102e89f5b46a9535a457c.jpg", "/static/img/goodsImage/1253006/description/33e1445f7b94d93bc9059404bb7720b4.jpg", "/static/img/goodsImage/1253006/description/1d71f4d79f7d7b549255722c3056f488.jpg", "/static/img/goodsImage/1253006/description/7eba73d499f616528c13299950593b7e.jpg", "/static/img/goodsImage/1253006/description/3547813f1b07bd4b408a594f718fec88.jpg", "/static/img/goodsImage/1253006/description/34da8864bb5c1d595e1ec2974d537012.jpg", "/static/img/goodsImage/1253006/description/f131a8d7a22420bf0a287cb30c1761a5.jpg", "/static/img/goodsImage/1253006/description/4d2f55a8d3ce0392ab766fe119745a7a.jpg", "/static/img/goodsImage/1253006/description/9842848b00a520c500fc7e083baa47dd.jpg", "/static/img/goodsImage/1253006/description/73d11c562b2ba825e6e66eb413af5746.jpg", "/static/img/goodsImage/1253006/description/c42d791d1afb428056e78729dc2bd726.jpg", "/static/img/goodsImage/1253006/description/67cdc52268a553842868f9a497c1c2ff.jpg", "/static/img/goodsImage/1253006/description/1bad7f63a9cce60c12b3a6610823ea1c.jpg", "/static/img/goodsImage/1253006/description/62e0e05be90e20a32e4b90ae10344fc1.jpg", "/static/img/goodsImage/1253006/description/3c989fdacbfacfd4cf28609db382ad0f.jpg", "/static/img/goodsImage/1253006/description/a0dd5648b7c65aa28b4a09e5f7475987.jpg", "/static/img/goodsImage/1253006/description/cc0d97163846c02fce9a2817cd3d729f.jpg", "/static/img/goodsImage/1253006/description/2dfb1c96115f8a3333dcda56cf1bd242.jpg", "/static/img/goodsImage/1253006/description/6b592c71c194af73b04663690ffbec61.jpg", "/static/img/goodsImage/1253006/description/bdd8476d102ed7b3aae07ea6e8b803e6.jpg", "/static/img/goodsImage/1253006/description/3b7c647578490387b713fc30578e9e58.jpg", "/static/img/goodsImage/1253006/description/ee8b290770e498617494a0f0b4a6e9af.jpg", "/static/img/goodsImage/1253006/description/0768a480ad26904214e0def969f6dc83.jpg", "/static/img/goodsImage/1253006/description/c25d66025ee0267f5807ae9dc9b58eb8.jpg", "/static/img/goodsImage/1253006/description/ba5cfcf2a40dbd2fceec6748bfb68969.jpg", "/static/img/goodsImage/1253006/description/67f1d5f36236081bf6ab637e4aedbac1.jpg", "/static/img/goodsImage/1253006/description/046ee819a9d77baba0bf0ad3d0448503.jpg", "/static/img/goodsImage/1253006/description/9dfb33f1b9fe66f86687732b4e79772b.jpg", "/static/img/goodsImage/1253006/description/2e42104f6f4d56b401343fe81b0b1632.jpg", "/static/img/goodsImage/1253006/description/f98a8b499bbde678b8ff2a010d9f06c6.jpg", "/static/img/goodsImage/1253006/description/69973ced3cf4ccfb1ca8bfa3001d7a6f.jpg", "/static/img/goodsImage/1253006/description/154a1bc64a553ae2c06fa5b0ccd43bd4.jpg", "/static/img/goodsImage/1253006/description/162b23f82408b9b2a22ce483fcfdc0a7.jpg", "/static/img/goodsImage/1253006/description/7bf16f185ad20744ce74b3a59b73298b.jpg", "/static/img/goodsImage/1253006/description/c1fef4c2278283eb9f6ce3ae38e4a1df.jpg", "/static/img/goodsImage/1253006/description/cca65768de1e3637dd422912befae981.jpg", "/static/img/goodsImage/1253006/description/a727c81851996f7acd4e5737a04b6e24.jpg", "/static/img/goodsImage/1253006/description/d3689a56fe850a5180f78f1171fee273.jpg", "/static/img/goodsImage/1253006/description/32f6f9a9aa9cd7ebc563166fcc8cbb46.jpg", "/static/img/goodsImage/1253006/description/8e1ba38873dff59b7a3814535895b8d7.jpg", "/static/img/goodsImage/1253006/description/800f6b9d632acd0b432692289d99482f.jpg", "/static/img/goodsImage/1253006/description/60757c6f0d54970c793326218e2bb95b.jpg", "/static/img/goodsImage/1253006/description/781dbbb8c74ec05ab97aaf22aec8cedd.jpg", "/static/img/goodsImage/1253006/description/0d611cb3d8f5c948dd9d13b3be5904db.jpg", "/static/img/goodsImage/1253006/description/b7576debbf8aaf51115af9d923f5d19f.jpg", "/static/img/goodsImage/1253006/description/5b61d8ad50c0602d25440b8defe69a37.jpg", "/static/img/goodsImage/1253006/description/12886c864b1b6390c8e4ff1177095b11.jpg", "/static/img/goodsImage/1253006/description/fedb13f9da1faac0d2eb21c432634934.jpg", "/static/img/goodsImage/1253006/description/18f6afba4f11bf870f0d4fd159749a22.jpg", "/static/img/goodsImage/1253006/description/7366fe3066f0e94fd966754ede6fcfb2.jpg", "/static/img/goodsImage/1253006/description/894d054658784445b4ab89da7c2a21c8.jpg", "/static/img/goodsImage/1253006/description/5f6252fa90c0e47ed79976773e777f42.jpg", "/static/img/goodsImage/1253006/description/486f64595a4a66588c6ec771d9ab539f.jpg", "/static/img/goodsImage/1253006/description/7917487acadac87f74d1fa40c5347d6c.jpg", "/static/img/goodsImage/1253006/description/e9e50b3e610979ada1ede21b9d0e02f8.jpg", "/static/img/goodsImage/1253006/description/97fe5518d948d22cfd7aaacda4bc97d2.jpg", "/static/img/goodsImage/1253006/description/65fe7fad8b27a8621b7a710b7f0e7ebd.jpg", "/static/img/goodsImage/1253006/description/108366c32456d392d832eb155229f2a0.jpg", "/static/img/goodsImage/1253006/description/32306895f6873de65709d441893da89c.jpg", "/static/img/goodsImage/1253006/description/38cc32a98ee27b82a0b705980f1565f2.jpg"],
		"inventory": [508, 324],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "GB 18401-2010 国家纺织品基本安全技术规范, B类"
		}, {
			"attrName": "注意事项",
			"attrValue": "1. 本品除明确质量问题外不支持30天无忧退换货。2. 哺乳期胸围尺寸会比平时大，建议选购大一码尺寸的文胸。3. 贴身内衣内裤建议单独洗涤。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "美德乐Bravado制造商",
		"sale": 45,
		"date": "1500341149956",
		"category": "婴童",
		"subCategory": "妈咪"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1149016,
		"price": 89,
		"topName": "六层纱睡袋（婴童）",
		"subName": "适合房内环境温度21-23℃使用",
		"shortDescription": ["透气舒适", "柔软耐用", "无袖通风", "下摆宽大", "活动自由", "睡眠舒适"],
		"shortDescriptionImage": ["/static/img/goodsImage/1149016/shortdescriptionImage/9f9b93eb59fff355a8833743dd693213.jpg", "/static/img/goodsImage/1149016/shortdescriptionImage/e9b1855cc8e0ab64afdcb1d4f4181846.jpg", "/static/img/goodsImage/1149016/shortdescriptionImage/192b0ad5b3746d1016d20898c4e5b336.jpg"],
		"headImage": ["/static/img/goodsImage/1149016/headImage/60f10a4e9e55705b7c1cfe0d63d32af0.png", "/static/img/goodsImage/1149016/headImage/a7b3af3f974e2391b3711f7d2ceb6a5d.jpg", "/static/img/goodsImage/1149016/headImage/151dee9e07df7061d364f54ec0880bbe.jpg", "/static/img/goodsImage/1149016/headImage/62a50f3e79ab456fbd202ef57a6b140f.jpg", "/static/img/goodsImage/1149016/headImage/f15f53644dbae15ce71a092bf635cdad.jpg"],
		"type": ["樱花粉", "天空蓝"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1149016/description/f77d6430f60b4665d7727d2ee8f25040.jpg", "/static/img/goodsImage/1149016/description/c79070621858959c2f39559d6d32c83b.jpg", "/static/img/goodsImage/1149016/description/6b3305ffc9fefd7f3f198ceed5d173c0.jpg", "/static/img/goodsImage/1149016/description/cbe025dff5f945f00c2ef490fcf20034.jpg", "/static/img/goodsImage/1149016/description/04d724fe796502dd79ec3bbbff3d2700.jpg", "/static/img/goodsImage/1149016/description/8b216b75817f70513b5c83cd4985b6b5.jpg", "/static/img/goodsImage/1149016/description/5225719fad5ac5d667cfe56e0adcd827.jpg", "/static/img/goodsImage/1149016/description/cc1422b2c63e1a49505018a7faabe1c7.jpg", "/static/img/goodsImage/1149016/description/faa20d96ebdbfba6850cce84c805a367.jpg", "/static/img/goodsImage/1149016/description/0de8223e31087dfc9f21edd227abe74d.jpg", "/static/img/goodsImage/1149016/description/85229c46c8a0c69c96bdf314366e2898.jpg", "/static/img/goodsImage/1149016/description/8df1cd3bbcf9ae552064851094d3c844.jpg", "/static/img/goodsImage/1149016/description/80dbc4b6fa540fc6125ee0deaa51f932.jpg", "/static/img/goodsImage/1149016/description/0791c2a978ef6e9f9aa8be814636c10a.jpg", "/static/img/goodsImage/1149016/description/1cb77ca421a755a03b28ed8d5c164327.jpg", "/static/img/goodsImage/1149016/description/08d24553d62221a83e4f96aa7550bdae.jpg", "/static/img/goodsImage/1149016/description/6600d670a29a24ff8977f2dfdf9c1cd6.jpg", "/static/img/goodsImage/1149016/description/1a0478f8b2d6aacdf44504db2a106ef5.jpg", "/static/img/goodsImage/1149016/description/2be7d7be3721608ba56b5464f34cff30.jpg", "/static/img/goodsImage/1149016/description/f53a16e4dd506a02c09fb3249a8a07ce.jpg", "/static/img/goodsImage/1149016/description/e5cd8a3feec8617007c35c18c6857b47.jpg", "/static/img/goodsImage/1149016/description/2c326cdd6ac124b109e5088ab2529d89.jpg", "/static/img/goodsImage/1149016/description/00541a4dfbb8e38edc7c9bb39916b7f0.jpg", "/static/img/goodsImage/1149016/description/b8aaa2c94dea1151534ddd1ae69daab6.jpg", "/static/img/goodsImage/1149016/description/b2272aee1a083414a0ce8a22b5c4b0ee.jpg", "/static/img/goodsImage/1149016/description/7b095d0a1bd2a164bddbbfa41e8250fe.jpg", "/static/img/goodsImage/1149016/description/31213bc9774a33f1c8a21c642f41ac15.jpg", "/static/img/goodsImage/1149016/description/53f0299ec64892305b43e405772aa021.jpg", "/static/img/goodsImage/1149016/description/50b64706f4ca1ef554996e3422927cf1.jpg", "/static/img/goodsImage/1149016/description/beb185850afcdc6b3d14c40da18ce8bd.jpg", "/static/img/goodsImage/1149016/description/4e00d360471c6b55a013d7892ca2e631.jpg", "/static/img/goodsImage/1149016/description/70fb71fcc978ff48f76385c8951061e0.jpg", "/static/img/goodsImage/1149016/description/d0c3729b14a7c0c3183220193262a334.jpg", "/static/img/goodsImage/1149016/description/ba2bfc5e97f09d4fec423abac2972e78.jpg", "/static/img/goodsImage/1149016/description/28d138cbb303f4c2a7980184ba54577e.jpg", "/static/img/goodsImage/1149016/description/c3afec42ff403bf31980445a406a12dc.jpg", "/static/img/goodsImage/1149016/description/fbfd1e26f28c78e5ccbb55cc58d6f80a.jpg", "/static/img/goodsImage/1149016/description/3ff3a3b844887c69e0c3e36a1b3e0b23.jpg", "/static/img/goodsImage/1149016/description/1bb12a19118278d7798561580d081f14.jpg", "/static/img/goodsImage/1149016/description/37d3ccecf34077e5c2520b045af81169.jpg", "/static/img/goodsImage/1149016/description/bce3f827ad355b178681d5e9718ab2dc.jpg", "/static/img/goodsImage/1149016/description/703e49658fa541219326ca6904a56ba5.jpg", "/static/img/goodsImage/1149016/description/b77b11c5dcca6d2acec4a7f44d0fc849.jpg", "/static/img/goodsImage/1149016/description/422da6b025d58a70fe4074a2cee448f0.jpg", "/static/img/goodsImage/1149016/description/1fdffd1637d2361513a7164023672676.jpg", "/static/img/goodsImage/1149016/description/a14d9cf0c389283b6e3c332d21406225.jpg", "/static/img/goodsImage/1149016/description/fdab24e09a89bf41ed9e6d25c0c11daf.jpg", "/static/img/goodsImage/1149016/description/f3471e2deb1854574da769a0997b9794.jpg", "/static/img/goodsImage/1149016/description/8523e52e12b80643605a90bca568250e.jpg", "/static/img/goodsImage/1149016/description/7ca222bad39b0561777894a81160434e.jpg", "/static/img/goodsImage/1149016/description/7a9609fbef2f7fac29a44bfadeb91490.jpg", "/static/img/goodsImage/1149016/description/a61850b1a008b719fb0c81e95c4d7fdb.jpg", "/static/img/goodsImage/1149016/description/debb90026594f4f662761cad73ca75b4.jpg", "/static/img/goodsImage/1149016/description/ae952a7f8c293205fa6a5ad6bb453d53.jpg", "/static/img/goodsImage/1149016/description/4bf3f1188097f660762c4c26d4ef1e51.jpg", "/static/img/goodsImage/1149016/description/13a346a55ac34cb97a2b2b926ca3bf49.jpg", "/static/img/goodsImage/1149016/description/c262b87e4887e6d738873828fd7160d5.jpg", "/static/img/goodsImage/1149016/description/c46fa794510be5e7b8b23d9c9b369df7.jpg", "/static/img/goodsImage/1149016/description/1e10643aa6bf83242076e19b470f7d15.jpg", "/static/img/goodsImage/1149016/description/8647fa3c921c3cdfe47e56a626a61f65.jpg", "/static/img/goodsImage/1149016/description/dffd292d0cb628e973ba585e9565c3a2.jpg", "/static/img/goodsImage/1149016/description/4c302c30c62bf5af283f0fe34c96f9fb.jpg", "/static/img/goodsImage/1149016/description/6e73f991eaf620ac92732d2240e75f91.jpg", "/static/img/goodsImage/1149016/description/0468a415cb23ce8ec6f9201a7ca60277.jpg", "/static/img/goodsImage/1149016/description/df88c4009e4af981667f95965b516666.jpg", "/static/img/goodsImage/1149016/description/f8bcc6d3e26802523493007ca38333bc.jpg", "/static/img/goodsImage/1149016/description/01751da8c8d93f49b393eabfa844083c.jpg", "/static/img/goodsImage/1149016/description/ac094d8e1cd9702c02ed59ea5072a9e1.jpg"],
		"inventory": [420, 810],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "GB 31701-2015 婴幼儿及儿童纺织产品安全技术规范, A类婴幼儿用品"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "美国Aden+Anais制造商",
		"sale": 818,
		"date": "1500341152880",
		"category": "婴童",
		"subCategory": "寝居"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1165001,
		"price": 39,
		"topName": "儿童沙滩玩具",
		"subName": "德式工艺，舒适玩耍体验",
		"shortDescription": ["没有毛刺", "避免伤手", "耐摔耐用", "亲子互动", "优质原料", "环保无味"],
		"shortDescriptionImage": ["/static/img/goodsImage/1165001/shortdescriptionImage/685e5ccc7f33344c40db86bbddc41752.jpg", "/static/img/goodsImage/1165001/shortdescriptionImage/7b7ad2f27f813fb4e5f882b1c1c3656e.jpg", "/static/img/goodsImage/1165001/shortdescriptionImage/b526981a4e5884c8abbb5f9cb1423bb6.jpg"],
		"headImage": ["/static/img/goodsImage/1165001/headImage/d6392cba5221388db99540182abe33d4.png", "/static/img/goodsImage/1165001/headImage/19a5e3bc2e9f4a0071de8de54055e42b.jpg", "/static/img/goodsImage/1165001/headImage/4d7807540b7ed55e2b97c39c47d20688.jpg", "/static/img/goodsImage/1165001/headImage/e89286b178975471aed40de57989c8f3.jpg", "/static/img/goodsImage/1165001/headImage/3d51c14d512a08382f39b75d3239aaba.jpg"],
		"type": ["九件组"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1165001/description/9a1bd55a4daeea5ce77949a757a92a14.jpg", "/static/img/goodsImage/1165001/description/830fb1bd65af1395f701b1a5a63d0dfe.jpg", "/static/img/goodsImage/1165001/description/9b0f092c7221da8902593a862924ef54.jpg", "/static/img/goodsImage/1165001/description/7afff55d7ac701c574349df3909d3a06.jpg", "/static/img/goodsImage/1165001/description/6e9d21528f1a9bf3c8ef120e6d24dc35.jpg", "/static/img/goodsImage/1165001/description/738d32f0d23a2fdc315e714c50e0b00d.jpg", "/static/img/goodsImage/1165001/description/8b6cf1aeb4d9fb42e4ed3409e02511b5.jpg", "/static/img/goodsImage/1165001/description/7fd0d1539bd9dcb0261947bde39e156e.jpg", "/static/img/goodsImage/1165001/description/2d32fe254b01fdb1a27018ef6d9424dd.jpg", "/static/img/goodsImage/1165001/description/34b9602531a8fb92fa12571027934992.jpg", "/static/img/goodsImage/1165001/description/bc45a7fb499ca151f029d8f59cb76c86.jpg", "/static/img/goodsImage/1165001/description/794ba06759b8b6fb7953cb74eedbb66f.jpg", "/static/img/goodsImage/1165001/description/7febe91d20954260c17a2887fbecdc8e.jpg", "/static/img/goodsImage/1165001/description/cca3e1c758268a8b48a4f9ac425fdcc1.jpg", "/static/img/goodsImage/1165001/description/6cf649edf5170c5bdf33958ea68302be.jpg", "/static/img/goodsImage/1165001/description/3612090f73ce7c1a9c4ee005e30c75c1.jpg", "/static/img/goodsImage/1165001/description/5cd3caec0f2771a709699c7669511fd3.jpg", "/static/img/goodsImage/1165001/description/895b92477cd81dc132fa9bba5110b8e8.jpg", "/static/img/goodsImage/1165001/description/2622b0331caef4892732d1a42f2f67f6.jpg", "/static/img/goodsImage/1165001/description/bdd506f8ed9af70418e52817f45cbf44.jpg", "/static/img/goodsImage/1165001/description/0b0e520ddc5939cf4a6e6d1940703fc5.jpg", "/static/img/goodsImage/1165001/description/de8da2a4299cb2594d601fcf6cc46126.jpg", "/static/img/goodsImage/1165001/description/11a0c1c9d2bdd3d7060b904418f8d668.jpg", "/static/img/goodsImage/1165001/description/26167ba58cf0be5c7bcfa033790d5482.jpg", "/static/img/goodsImage/1165001/description/158385e3ea031fb67fa3e17d142405cc.jpg", "/static/img/goodsImage/1165001/description/dde22d7df1ba8d2c0667f05718977588.jpg", "/static/img/goodsImage/1165001/description/9e451c8f1431891ba815fc4d3860453a.jpg", "/static/img/goodsImage/1165001/description/a19c5c4f34fa28b94f00a4ce6b9d49f8.jpg", "/static/img/goodsImage/1165001/description/ef1825bfd687f2136a6cb5fc83b07661.jpg", "/static/img/goodsImage/1165001/description/066435799b760fcb2325295eb132eba2.jpg", "/static/img/goodsImage/1165001/description/7e057e8f2688ea0d06b0775736ce0534.jpg", "/static/img/goodsImage/1165001/description/15920d1caaa2df663007cbfca0436fe6.jpg", "/static/img/goodsImage/1165001/description/30d81bf752f946d2a89827d9a0a7b3bc.jpg", "/static/img/goodsImage/1165001/description/5cb1e5d195e37ce7fef76068e0328190.jpg", "/static/img/goodsImage/1165001/description/356249bbc7175cf101cf77cd0208a17e.jpg", "/static/img/goodsImage/1165001/description/1cfc6ca8c39b901742ed6041e34ff7d3.jpg", "/static/img/goodsImage/1165001/description/6674384b4bf31a09dbb66ff71b78db4c.jpg", "/static/img/goodsImage/1165001/description/02fa06ab0bae06daa8cf52ddf054e2ee.jpg", "/static/img/goodsImage/1165001/description/ccc23c6fad46b98749ccaaafee5b4376.jpg", "/static/img/goodsImage/1165001/description/714f83ce8eb21dcf25a4ac5736e717bb.jpg", "/static/img/goodsImage/1165001/description/6bc46e4b75e5afb598d813fc258cd300.jpg", "/static/img/goodsImage/1165001/description/e96875ce632867ab73dd96c2c23c0b3d.jpg", "/static/img/goodsImage/1165001/description/3336442ba69e0f646289fe38f1c219f7.jpg", "/static/img/goodsImage/1165001/description/13e8b41b4a68e362469aeef45fb788ac.jpg", "/static/img/goodsImage/1165001/description/22fcb1d24d754d08d725e8bff60189a7.jpg", "/static/img/goodsImage/1165001/description/ea8102ce27bddc00bade01e6565e9189.jpg", "/static/img/goodsImage/1165001/description/226dc6c6fec06e9599ef905661539a51.jpg", "/static/img/goodsImage/1165001/description/61d39c4ffa47c90c30843b262bf614a1.jpg", "/static/img/goodsImage/1165001/description/fa944f8d77957631b48b5b947b8f1a23.jpg"],
		"inventory": [764],
		"information": [{
			"attrName": "适用年龄",
			"attrValue": "18个月及以上"
		}, {
			"attrName": "注意事项",
			"attrValue": "干布擦拭，保持清洁干燥；请在成人监护下使用"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 373,
		"date": "1500341155595",
		"category": "婴童",
		"subCategory": "玩具"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1253002,
		"price": 49,
		"topName": "6件装 婴幼儿手口湿巾80片",
		"subName": "加厚材质 满分呵护",
		"shortDescription": ["80片装", "经济实惠", "天然配方", "温柔洁净", "锁水包装", "卡通设计"],
		"shortDescriptionImage": ["/static/img/goodsImage/1253002/shortdescriptionImage/659aced938ce99213dc1209776925943.png", "/static/img/goodsImage/1253002/shortdescriptionImage/2a76f3dc763b2072104f5611dc9f9436.png", "/static/img/goodsImage/1253002/shortdescriptionImage/55df7cbd1b938eac4c015b94ddc27997.png"],
		"headImage": ["/static/img/goodsImage/1253002/headImage/e09505d2c5a8302807fa600ef822ac93.png", "/static/img/goodsImage/1253002/headImage/9b8a1219f0aaeeb55c2ef2ff9093996b.jpg", "/static/img/goodsImage/1253002/headImage/14d0e3ae468f118400dc14f5138344f8.jpg", "/static/img/goodsImage/1253002/headImage/b4ebd65104535982e104707663c1e13a.jpg", "/static/img/goodsImage/1253002/headImage/1408c55aa12681f3e7269910ff6afc27.jpg"],
		"type": ["80片*12包（赠送10包10片随身装手口湿巾）", "80片*6包"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1253002/description/bc542cab8afaf724cdf0e37ae8e0c395.jpg", "/static/img/goodsImage/1253002/description/ef5c8c78ebd807af25b563c8967ada37.jpg", "/static/img/goodsImage/1253002/description/b0155a84526f84d843214593251615bf.jpg", "/static/img/goodsImage/1253002/description/4be8ba73e5a0fc1a3b1fb1ff0b8baac0.jpg", "/static/img/goodsImage/1253002/description/982fbc8f58c2045dafe645fab229b508.jpg", "/static/img/goodsImage/1253002/description/0f7b0c088e1b2222505ef3cefd168fae.jpg", "/static/img/goodsImage/1253002/description/f1f64fcc48436b4f7f53bd45cf895d8c.jpg", "/static/img/goodsImage/1253002/description/08848a722cf3168241cfc2886ffbe6de.jpg", "/static/img/goodsImage/1253002/description/b10a42fedddf2bf0b0262cf08586ae11.jpg", "/static/img/goodsImage/1253002/description/da882d0526af454bccd5cb34c94d3cc6.jpg", "/static/img/goodsImage/1253002/description/d23157b7f2dc70c9accb5df65a5f947f.jpg", "/static/img/goodsImage/1253002/description/3663e3c57cd344269089f16b0faadc15.jpg", "/static/img/goodsImage/1253002/description/7613be6cdf5055d35ad48c2d89e9367f.jpg", "/static/img/goodsImage/1253002/description/fc1193cdbf72f7ecca198a78d932e144.jpg", "/static/img/goodsImage/1253002/description/4d0a518e625010961c049ff207101362.jpg", "/static/img/goodsImage/1253002/description/2385ce7f7ca59f16ea18f1bf6e840bc8.jpg", "/static/img/goodsImage/1253002/description/bc636fa5d28a955ff439fa12bed55723.jpg", "/static/img/goodsImage/1253002/description/dc1e5431d6d4e98114c9e2bdac59510a.jpg", "/static/img/goodsImage/1253002/description/a22f0b9982c5ba4f5f5cb5ae4ea7fa75.jpg", "/static/img/goodsImage/1253002/description/0f5c922471bd77727179424b16e707a5.jpg", "/static/img/goodsImage/1253002/description/c32ce0f3879c4056384c0ef77efc2ac0.jpg", "/static/img/goodsImage/1253002/description/785262a0d3ceef3a058cd545210c00b9.jpg", "/static/img/goodsImage/1253002/description/bbbc2c43721fa70ce39956a40fc31947.jpg", "/static/img/goodsImage/1253002/description/88a2c141cdafc36b01c92dcaffb8d497.jpg", "/static/img/goodsImage/1253002/description/820603512137957fbde054d9e3e336a7.jpg", "/static/img/goodsImage/1253002/description/decfeb2b9fa751772cf830d98d3eef1d.jpg", "/static/img/goodsImage/1253002/description/6db541800f20def1dc5944f349fee9c4.jpg", "/static/img/goodsImage/1253002/description/d61eb7eb60f2175e8113cdd88d4fae48.jpg", "/static/img/goodsImage/1253002/description/315d29369b81c3669edb0f3e7e27d878.jpg", "/static/img/goodsImage/1253002/description/8acd13d7e1ce940c9ba4c3cfd6099ec2.jpg", "/static/img/goodsImage/1253002/description/dae41eb013b1eca46806a40685d1fdc3.jpg", "/static/img/goodsImage/1253002/description/09b1eb5fde695b8f51d1415fd2e56c00.jpg", "/static/img/goodsImage/1253002/description/7ae2b0b375787a60f536ccf354207b8a.jpg", "/static/img/goodsImage/1253002/description/3cff212439c1c6cc694949e071c60298.jpg", "/static/img/goodsImage/1253002/description/3e0440bd8309e697df8be42d811d46e0.jpg", "/static/img/goodsImage/1253002/description/f64afaa12756389c5963ff47d0c0188f.jpg", "/static/img/goodsImage/1253002/description/aa8d59345132d6e11ec38362a4ca3846.jpg", "/static/img/goodsImage/1253002/description/d328449cc0134a2253db0994cfa4ad1e.jpg", "/static/img/goodsImage/1253002/description/432de7320173a98c21a9993c19065da4.jpg", "/static/img/goodsImage/1253002/description/f3821482a526b4ff9f282c2d3fedb6aa.jpg", "/static/img/goodsImage/1253002/description/f7b94d83011d94ccc9c6cadd92dc35e9.jpg"],
		"inventory": [928, 723],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "GB/T 27728"
		}, {
			"attrName": "卫生标准",
			"attrValue": "GB15979"
		}, {
			"attrName": "主要成分",
			"attrValue": "EDI纯水，水刺无纺布，木糖醇"
		}, {
			"attrName": "注意事项",
			"attrValue": "请勿用于眼睛、伤口、红肿或湿疹部位，如发现皮肤不适，请立即停用。请将湿纸巾放置于婴孩无法取到的地方，以免误食。请置于阴凉处，避免阳光或高温照射。使用后请将封口贴纸贴回原处密封，并合好盖子，以免湿纸巾变干。本品不溶于水，请勿丢进马桶，以免造成堵塞。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 36,
		"date": "1500341158631",
		"category": "婴童",
		"subCategory": "婴童洗护"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1149008,
		"price": 59,
		"topName": "儿童不锈钢卡通吸管杯",
		"subName": "萌趣造型，小巧易携",
		"shortDescription": ["打开瓶盖", "吸管立现", "可爱杯套", "减少损伤", "安全材质", "健康饮水"],
		"shortDescriptionImage": ["/static/img/goodsImage/1149008/shortdescriptionImage/602355b005f70f696d094506989c4fca.jpg", "/static/img/goodsImage/1149008/shortdescriptionImage/c8f9dd8d0abce07dda769c8a2928e194.jpg", "/static/img/goodsImage/1149008/shortdescriptionImage/6de31e85772ff2512c26104e55a1436f.jpg"],
		"headImage": ["/static/img/goodsImage/1149008/headImage/8b409ebe72ffe90063e2b1770d23d5ed.png", "/static/img/goodsImage/1149008/headImage/b91dc3be9e04aa74585b6687fe95ca62.jpg", "/static/img/goodsImage/1149008/headImage/06e5630913a4c2c31cb32f3b7b581e3e.jpg", "/static/img/goodsImage/1149008/headImage/112f9df33615f0997604e6733c72dac0.jpg", "/static/img/goodsImage/1149008/headImage/f18e9b1608da1e186e7537358cb90605.jpg"],
		"type": ["粉红猪", "小黄鸭"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1149008/description/17c04bf2f2058086f42d6031dbd587e8.jpg", "/static/img/goodsImage/1149008/description/32e575bf50ffcd6e4f2c534bcc5f670a.jpg", "/static/img/goodsImage/1149008/description/f9a6d08929907a9a0e3aeb148448f586.jpg", "/static/img/goodsImage/1149008/description/3acedfb69fce0bda24d7b3895ffb6535.jpg", "/static/img/goodsImage/1149008/description/1ffbc6dc71b278f4633a932f66d5c152.jpg", "/static/img/goodsImage/1149008/description/f5e1ac40eaf28469b0fefce12fd4168f.jpg", "/static/img/goodsImage/1149008/description/93a2c064345ddf79d1a0846e4991de01.jpg", "/static/img/goodsImage/1149008/description/8c16f629151157f34760479fbd126b7f.jpg", "/static/img/goodsImage/1149008/description/31faf3a9c99c5fc9010865f30d8b109a.jpg", "/static/img/goodsImage/1149008/description/ab176480b3eaf076dfe427d4bc30d954.jpg", "/static/img/goodsImage/1149008/description/ae1471cbc1bad73c9fc7930ba468c62f.jpg", "/static/img/goodsImage/1149008/description/0d80c25d21721795ce8da7fedd909186.jpg", "/static/img/goodsImage/1149008/description/87aff5d1dc8efcf426286d00b8f0a2fe.jpg", "/static/img/goodsImage/1149008/description/641b15200e2010b07cc02b98bbe92b9a.jpg", "/static/img/goodsImage/1149008/description/35f9e54ec4f4feee9807c11be036ac43.jpg", "/static/img/goodsImage/1149008/description/5e74c9a3a92b2911208e0af0f3992a93.jpg", "/static/img/goodsImage/1149008/description/a755aa699d687e1c81ccd877fbbb8761.jpg", "/static/img/goodsImage/1149008/description/423cb89c6d68fd23b3e05a608c108fd2.jpg", "/static/img/goodsImage/1149008/description/22456e199c1fb969f1f9f3decefba7e6.jpg", "/static/img/goodsImage/1149008/description/d6feb7395b52d17940520faa41fd56b9.jpg", "/static/img/goodsImage/1149008/description/a2b62d05f2e10a6f1d3557efbb7d39c6.jpg", "/static/img/goodsImage/1149008/description/35af3311c60557669f1c854b30c0b54f.jpg", "/static/img/goodsImage/1149008/description/e9ed28f3934abfc3c91ed183ee54dcda.jpg", "/static/img/goodsImage/1149008/description/2ee109a5953929809e0d721d2f883e21.jpg", "/static/img/goodsImage/1149008/description/4aae85f06aaf347f594a243cdf5a5ea7.jpg", "/static/img/goodsImage/1149008/description/a5b7e07efbe36268d155a33e758c5dd4.jpg", "/static/img/goodsImage/1149008/description/8d9bfdb1d313294ea7a2ed9a22969fc7.jpg", "/static/img/goodsImage/1149008/description/4dc7f14c8663fabe1cb39076841cb63a.jpg", "/static/img/goodsImage/1149008/description/524ad8b924a96b83a55155b7ca16303d.jpg", "/static/img/goodsImage/1149008/description/56b4ce586c215db19c50f23a061ba329.jpg", "/static/img/goodsImage/1149008/description/e3d0f77acf539f3547e9fbbb1c8fa93f.jpg", "/static/img/goodsImage/1149008/description/265b84b42a385897b9c9c9519629f48c.jpg", "/static/img/goodsImage/1149008/description/03cf08a262dc47695ed761c3147cce63.jpg", "/static/img/goodsImage/1149008/description/e08fa202f59531ced89d25ed5d5a50f0.jpg"],
		"inventory": [253, 485],
		"information": [{
			"attrName": "适用年龄",
			"attrValue": "3-12岁"
		}, {
			"attrName": "规格",
			"attrValue": "350ml"
		}, {
			"attrName": "注意事项",
			"attrValue": "瓶子需要远离热源，以防变形。"
		}],
		"label": [{
			"title": "新品",
			"type": "2"
		}],
		"manufacture": "",
		"sale": 920,
		"date": "1500341165396",
		"category": "婴童",
		"subCategory": "喂养"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1164005,
		"price": 899,
		"topName": "儿童汽车安全座椅",
		"subName": "仅售供应商建议价的40%",
		"shortDescription": ["双层头枕", "安全加倍", "枕肩联动", "自动调节", "精选材质", "吸震透气"],
		"shortDescriptionImage": ["/static/img/goodsImage/1164005/shortdescriptionImage/8a8239e703a4f64083e767b184f7d1e8.jpg", "/static/img/goodsImage/1164005/shortdescriptionImage/8f0e00551ead6676c7eb0a541d71412b.jpg", "/static/img/goodsImage/1164005/shortdescriptionImage/dcd24bea2d3b0e8fc27594b08ee414f9.jpg"],
		"headImage": ["/static/img/goodsImage/1164005/headImage/0c54315ac69d9b14725c33c383739c72.png", "/static/img/goodsImage/1164005/headImage/48b09de2fa9866d543eed2a714878e25.jpg", "/static/img/goodsImage/1164005/headImage/18b71e60f97462cbd474253167d057f8.jpg", "/static/img/goodsImage/1164005/headImage/8d5fc01d2c726c2a188be7d5fb9b54f0.jpg", "/static/img/goodsImage/1164005/headImage/8640126c93a3fc3f023f644c9ec7ab5c.jpg"],
		"type": ["红色", "蓝色"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1164005/description/49fa4144756ff92e407d6aa805ac32ef.jpg", "/static/img/goodsImage/1164005/description/fea951e0df36d7c96c0c3fcd3dcb0f57.jpg", "/static/img/goodsImage/1164005/description/f11112f89fed2b1f5b6f83c923c208a1.jpg", "/static/img/goodsImage/1164005/description/a5882989fd3c7fa229a299d2b55b4cd3.jpg", "/static/img/goodsImage/1164005/description/a618d398ce7b85d34d1f16f5afb30dbf.jpg", "/static/img/goodsImage/1164005/description/5f07ee09c46e83546f06eeadf2f400ad.jpg", "/static/img/goodsImage/1164005/description/a251dd9f465fd664ea7d8b0a1293c0f2.jpg", "/static/img/goodsImage/1164005/description/cf18de65ffff18cc91736b4ac53936a3.jpg", "/static/img/goodsImage/1164005/description/d94e0da08d651d072e5b4d8c2f6ca304.jpg", "/static/img/goodsImage/1164005/description/3a911717682b523e15146da6833a2316.jpg", "/static/img/goodsImage/1164005/description/ecfca46ab2115a6f8a4cd453f851f79e.jpg", "/static/img/goodsImage/1164005/description/ff750c08bd58daa907ca07be32280e1d.jpg", "/static/img/goodsImage/1164005/description/febf3248dc40f00a3963181ae2544828.jpg", "/static/img/goodsImage/1164005/description/cfd68ac757fc32de7aeefa94e72b7273.jpg", "/static/img/goodsImage/1164005/description/5aa54fb917e7b28d2148c3efb3b16198.jpg", "/static/img/goodsImage/1164005/description/d251af408d93855af4f91afee00c7d1a.jpg", "/static/img/goodsImage/1164005/description/e6748133b0ae0cbb5937fc78097c93fa.jpg", "/static/img/goodsImage/1164005/description/8add9d54b7aa0c679219ffdd99f4edee.jpg", "/static/img/goodsImage/1164005/description/b2d5cf7c955603975f4019fe57f675a6.jpg", "/static/img/goodsImage/1164005/description/f54192f929e3e90382a80882f50e0975.jpg", "/static/img/goodsImage/1164005/description/57f7a8ec73fae2f387c6e3085c4b9efb.jpg", "/static/img/goodsImage/1164005/description/0317c7e2e15e0bf65ce5297a1af8eb92.jpg", "/static/img/goodsImage/1164005/description/dc8e015174c2f87ae7a05959ab9b0892.jpg", "/static/img/goodsImage/1164005/description/b9e6404b85631331a703b0949ecff14a.jpg", "/static/img/goodsImage/1164005/description/f7ee50eb0a4e5f9fd9fef5c194781a45.jpg", "/static/img/goodsImage/1164005/description/03f2d5127dce9e54a8ef9ceb183568a5.jpg", "/static/img/goodsImage/1164005/description/4cbc2fc12878b427b700929b4d6bad45.jpg", "/static/img/goodsImage/1164005/description/ea98b8552773e7583a46884ffdb9e8b8.jpg", "/static/img/goodsImage/1164005/description/ac5f2157221aebb59db44c3b524d48f8.jpg", "/static/img/goodsImage/1164005/description/da113f88b89d828195d17b47a8021ec9.jpg", "/static/img/goodsImage/1164005/description/47314ffb1e84f7e83edf14376296d557.jpg", "/static/img/goodsImage/1164005/description/71a874438808c9d3c22f425713a17159.jpg", "/static/img/goodsImage/1164005/description/d6a7055b22a7f738924b920072c1be40.jpg", "/static/img/goodsImage/1164005/description/4e55d18746904c7b75c4251b0c275fd4.jpg", "/static/img/goodsImage/1164005/description/6993322e9fdca9395554b3aa7dcb2b84.jpg", "/static/img/goodsImage/1164005/description/115f64a4fc811b8e3917ab1b20345586.jpg", "/static/img/goodsImage/1164005/description/41a4cc5e9f87e2a0075466b365bc780b.jpg", "/static/img/goodsImage/1164005/description/0301be76294a997c4df074ee287e4657.jpg", "/static/img/goodsImage/1164005/description/4e7b6cabd383baf1e7959139e310e9e9.jpg", "/static/img/goodsImage/1164005/description/695c87cc0ad514d0af00f10754a8704f.jpg", "/static/img/goodsImage/1164005/description/f0cf61b25be70f89d8557049f1fa3c04.jpg", "/static/img/goodsImage/1164005/description/83c7f1d56da18f36c383c80e757dbc98.jpg", "/static/img/goodsImage/1164005/description/7baa98e1c542fedc526fcca324ca8959.jpg", "/static/img/goodsImage/1164005/description/fff93bcb0f6ec66150517380671a71c3.jpg", "/static/img/goodsImage/1164005/description/34b1841cac71faff8f06a90e65491aed.jpg", "/static/img/goodsImage/1164005/description/593529dcf9c12a789643e23b0a3e3c4a.jpg", "/static/img/goodsImage/1164005/description/7e55706a1526d0b52287983cba901d20.jpg", "/static/img/goodsImage/1164005/description/1f8d2c0dbaa01617e9a1e25d337da262.jpg", "/static/img/goodsImage/1164005/description/6238552287b52531b3495158a0588e7c.jpg", "/static/img/goodsImage/1164005/description/0374bf14a5920dbc474070b8707fa268.jpg", "/static/img/goodsImage/1164005/description/d96e46a36080237e3afeb2de2f0181db.jpg", "/static/img/goodsImage/1164005/description/1cfd44f6c4fa51772cabe8fb0bb415cf.jpg", "/static/img/goodsImage/1164005/description/b3f5682dc3934f62cc89a5f22bb35e7e.jpg", "/static/img/goodsImage/1164005/description/6c4c9ed9c20ddcabd86d18e0b6047d98.jpg", "/static/img/goodsImage/1164005/description/b28715f6a9a14c28939f4c6d6138df20.jpg", "/static/img/goodsImage/1164005/description/89b7441a6e2f4a1a2fd820d2341fc0a7.jpg", "/static/img/goodsImage/1164005/description/93cb3b6b527db7613eee49e9909a93c5.jpg", "/static/img/goodsImage/1164005/description/fa835e3cb4d791f15da5d93ab8fb543d.jpg", "/static/img/goodsImage/1164005/description/818cad5799dc53abdf6d98f230195f74.jpg", "/static/img/goodsImage/1164005/description/411204475fa65487d966ee597f42b8cb.jpg", "/static/img/goodsImage/1164005/description/de7ddad5b14960bccaf562d36ec91dfd.jpg", "/static/img/goodsImage/1164005/description/c4142bed8cf8bc0c795027843ed1730c.jpg", "/static/img/goodsImage/1164005/description/a7ced11e7245ce92e61e1441b2c6cb30.jpg", "/static/img/goodsImage/1164005/description/e916b873838b922aaf00f9c934d8162c.jpg", "/static/img/goodsImage/1164005/description/4d6b1d64612f2f1f184a00dfa9ee79b7.jpg", "/static/img/goodsImage/1164005/description/481ea07d560edafc135b4d5a8e076e16.jpg", "/static/img/goodsImage/1164005/description/c2c76355b5ab7b848d8b5556fe9dbc75.jpg", "/static/img/goodsImage/1164005/description/c1f2b827542450cc1876fbf24aca933f.jpg", "/static/img/goodsImage/1164005/description/1823b17a44c0481d6442d01fb48251bf.jpg", "/static/img/goodsImage/1164005/description/59e8eef9f4c08455d0d0b58c1f27a478.jpg", "/static/img/goodsImage/1164005/description/6a8178751fdde9ff7d6e1b23819ba7bf.jpg", "/static/img/goodsImage/1164005/description/8f6e924387e356c4eccf303ad41c7147.jpg", "/static/img/goodsImage/1164005/description/defff81976625a5c07d47177b7bbf160.jpg", "/static/img/goodsImage/1164005/description/e722dfcabbbb47e09d3d7a8af3cae516.jpg", "/static/img/goodsImage/1164005/description/e167dfb313abb59b0e8aaf7a91f237c6.jpg", "/static/img/goodsImage/1164005/description/b55da10d9def507b9e34d215d4d2232d.jpg", "/static/img/goodsImage/1164005/description/db75fe34129fb1c4eb4d3638dcad3a2f.jpg", "/static/img/goodsImage/1164005/description/e1154a269030772efb59ac154051dffd.jpg", "/static/img/goodsImage/1164005/description/1c0400021bc09dc96a4217ed3069c756.jpg", "/static/img/goodsImage/1164005/description/fb6e19cfa4b62e99cd7c949fe9454539.jpg", "/static/img/goodsImage/1164005/description/497ca85fd06d946e0f5441b01ddda698.jpg", "/static/img/goodsImage/1164005/description/677298b08aadc2fd79803d9884ad0905.jpg", "/static/img/goodsImage/1164005/description/3207a3dc931586ba431de65a1071e41e.jpg", "/static/img/goodsImage/1164005/description/b632327f5513ee2fca8a13d890d4c13f.jpg", "/static/img/goodsImage/1164005/description/58cf798d9e8b6e72cdafc0a3bc8c2a00.jpg", "/static/img/goodsImage/1164005/description/84c0bddb0e0317d5c510df5c1fb04d1e.jpg", "/static/img/goodsImage/1164005/description/f6182a1c60ead1362f99818e29cad090.jpg", "/static/img/goodsImage/1164005/description/4ee462f268844ab5b82f66175476c6fc.jpg", "/static/img/goodsImage/1164005/description/3f3ebe6f2c48ddc7f868a571cad4789c.jpg", "/static/img/goodsImage/1164005/description/ffc9c6fc0a7626795a8f451533a3aa01.jpg", "/static/img/goodsImage/1164005/description/a0a7e5cde75889a23ac4cea2669d4122.jpg", "/static/img/goodsImage/1164005/description/af6b8c6fce9093ab7a77d5fe898d0c50.jpg", "/static/img/goodsImage/1164005/description/38683ffaee3562bb6916becc9619cb94.jpg", "/static/img/goodsImage/1164005/description/f494313f1bc87523c64b42246b76fd0c.jpg", "/static/img/goodsImage/1164005/description/9b91ba1609fa720d708a6e9b32b29cf5.jpg", "/static/img/goodsImage/1164005/description/546af0ed8bad9bee4468e5bfa248ab39.jpg", "/static/img/goodsImage/1164005/description/2722435e5bca0d3ae9e8c972d9d244f3.jpg", "/static/img/goodsImage/1164005/description/cf0e179e2526e493105a219df5d8ce2f.jpg", "/static/img/goodsImage/1164005/description/29f0a710516d02704ae9da65de85ba00.jpg", "/static/img/goodsImage/1164005/description/e6ab4d68976e713071d0a30dabfd31b4.jpg", "/static/img/goodsImage/1164005/description/7c3f816f7ceee749c27eb306f96a1a9b.jpg", "/static/img/goodsImage/1164005/description/19369e2eed773b044a83a8e148a60a83.jpg", "/static/img/goodsImage/1164005/description/e0d512a5d90ec4441a19b101e6b75528.jpg", "/static/img/goodsImage/1164005/description/f4167c614c63764ebb010fff70627399.jpg", "/static/img/goodsImage/1164005/description/613cb9a91c4339d0a1adee20c0d29d18.jpg", "/static/img/goodsImage/1164005/description/97b33c634af45cbdbfe5a330c7777044.jpg", "/static/img/goodsImage/1164005/description/b3090c47a1e7dc9346a5c0ceaa7bfd5c.jpg", "/static/img/goodsImage/1164005/description/b1cc9995a4e27871bf906620e553ddde.jpg", "/static/img/goodsImage/1164005/description/ca955a954b30c2ff30f62778ca29cb92.jpg", "/static/img/goodsImage/1164005/description/9359a66581932c7af6ef6f435226bba8.jpg", "/static/img/goodsImage/1164005/description/2bee6a9d31c990bcc85c4cbf49356de5.jpg", "/static/img/goodsImage/1164005/description/0081bbaa2124b7fbadc92fd236c79c8a.jpg", "/static/img/goodsImage/1164005/description/ca883ed63a4177b9e7c148a33bff2ad1.jpg", "/static/img/goodsImage/1164005/description/f0ed67b97c6a450e8f3c1f0471ef02e5.jpg", "/static/img/goodsImage/1164005/description/7891755c05dcc95795f944e405a5d1f2.jpg", "/static/img/goodsImage/1164005/description/0278732c7216e56c0fc61feab58ddf84.jpg", "/static/img/goodsImage/1164005/description/1c125f4656e7a0903cbea33f35472d7e.jpg", "/static/img/goodsImage/1164005/description/8e79190701c7dd0114a62e7113a87e9c.jpg", "/static/img/goodsImage/1164005/description/bb40f403ddaa30717ada40f7f2e1f68b.jpg", "/static/img/goodsImage/1164005/description/784a17a79e40be71117616390190a8a9.jpg", "/static/img/goodsImage/1164005/description/d10bd87794fa88e6749972fd3b125746.jpg", "/static/img/goodsImage/1164005/description/1290b1988c842900a6b5fdcf7db66d77.jpg", "/static/img/goodsImage/1164005/description/1e76bcbad4b476666248797498ce0fb4.jpg", "/static/img/goodsImage/1164005/description/1f4302bf61bfed6b6b152f149e20e4f4.jpg", "/static/img/goodsImage/1164005/description/e960a7e36d6a1a197b9a5d8f4a5f3398.jpg", "/static/img/goodsImage/1164005/description/e367aea24d25265bd0aaf3e7a2600816.jpg", "/static/img/goodsImage/1164005/description/13674e070397be2504aabe033e0be03d.jpg", "/static/img/goodsImage/1164005/description/58927a640f47f29d71e0c5f34fecc17b.jpg", "/static/img/goodsImage/1164005/description/3588d0e5bc551f7d998508b7fb24492e.jpg", "/static/img/goodsImage/1164005/description/46b057ea3d0496091a319285e5023308.jpg"],
		"inventory": [210, 33],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "GB27887-2011"
		}, {
			"attrName": "尺寸",
			"attrValue": "67*54*33cm"
		}, {
			"attrName": "注意事项",
			"attrValue": "请严格按照说明书正确安装安全座椅"
		}],
		"label": [{
			"title": "暑期特惠",
			"type": "1"
		}],
		"manufacture": "RECARO制造商",
		"sale": 92,
		"date": "1500341168999",
		"category": "婴童",
		"subCategory": "童车童椅"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1129017,
		"price": 69,
		"topName": "超轻布铅笔伞",
		"subName": "轻巧材质，可爱优雅",
		"shortDescription": ["防水处理", "一甩即干", "结实伞骨", "不易刮伤", "心形图案", "柔和清爽"],
		"shortDescriptionImage": ["/static/img/goodsImage/1129017/shortdescriptionImage/114bb1b520f4036a8e9549f73fbc3937.jpg", "/static/img/goodsImage/1129017/shortdescriptionImage/0a6f802faedc001dd87c7955caa6b2a4.jpg", "/static/img/goodsImage/1129017/shortdescriptionImage/8b862fb6ba3e2e6a30df1e07a5997ac0.jpg"],
		"headImage": ["/static/img/goodsImage/1129017/headImage/ad7bf36752b56fb118f612c0310853ff.png", "/static/img/goodsImage/1129017/headImage/6ce6a8649e952e36318b0f25e8c55d71.jpg", "/static/img/goodsImage/1129017/headImage/9a02b1ed4beb0e479b240a80bd31c2c8.jpg", "/static/img/goodsImage/1129017/headImage/837cf5206d9e5a9e911bbabb8e17fbf9.jpg", "/static/img/goodsImage/1129017/headImage/50b520a010aab1fccfed9380126b792d.jpg"],
		"types": ["粉色", "灰色"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1129017/description/c1ed100a6a31eb8e3a5b313426fb90f5.jpg", "/static/img/goodsImage/1129017/description/e4f643423dd9a39e9d684cd69608de14.jpg", "/static/img/goodsImage/1129017/description/881eb8d4f13d03554ed7d52124dc2acd.jpg", "/static/img/goodsImage/1129017/description/66325496be9621f2949d8cb9a23b5d75.jpg", "/static/img/goodsImage/1129017/description/e2fba959192843d715b5ded42c8a0c90.jpg", "/static/img/goodsImage/1129017/description/f6a8764a35c79dcb934507a44e0f316e.jpg", "/static/img/goodsImage/1129017/description/7f0001f0ae6c1434e6e6ccc3931519d5.jpg", "/static/img/goodsImage/1129017/description/8e89a8701d836d0bc14279fac9893418.jpg", "/static/img/goodsImage/1129017/description/21842e61db042c7085c1d974082ffd6f.jpg", "/static/img/goodsImage/1129017/description/adf983867a6d72f8b36708044a5b705f.jpg", "/static/img/goodsImage/1129017/description/b6d3131e67bc6b8d35a04d75fabae934.jpg", "/static/img/goodsImage/1129017/description/de75ce8b6cbd01b6ef96dd00f7ee2e39.jpg", "/static/img/goodsImage/1129017/description/cd4da327c34dbe385e4ae44807cec738.jpg", "/static/img/goodsImage/1129017/description/ec06a8b4da67860df1b1b62022cb41b0.jpg", "/static/img/goodsImage/1129017/description/2721fb69d67ed207f8bdf59068fc2c09.jpg", "/static/img/goodsImage/1129017/description/f472604368a446d74303fcb81f5ce2c6.jpg", "/static/img/goodsImage/1129017/description/12fb95d88d89feb7a12833738d982c9a.jpg", "/static/img/goodsImage/1129017/description/5fbea15b4077b9477ffd628f40882363.jpg", "/static/img/goodsImage/1129017/description/73d8295c25f6616744aab653ba18808a.jpg", "/static/img/goodsImage/1129017/description/52043ea256035a5a6a90ade7832ff62f.jpg", "/static/img/goodsImage/1129017/description/3c0b17782e1b093082c1fe59d71b27eb.jpg", "/static/img/goodsImage/1129017/description/03565d7671260629feabfaa03981b0ac.jpg", "/static/img/goodsImage/1129017/description/2bc8085f2c6ea71da650e038e2351958.jpg", "/static/img/goodsImage/1129017/description/2710ed2d88a17823a1791a9d1568f2cd.jpg", "/static/img/goodsImage/1129017/description/0d510f6d0c68c646716d9d6ccf77af54.jpg", "/static/img/goodsImage/1129017/description/4ff2f77b8db9508e74d12754b3c17721.jpg", "/static/img/goodsImage/1129017/description/a8bda78d3039530f7ea78178249734a1.jpg", "/static/img/goodsImage/1129017/description/9a78aaf9f0e946be687bc29783efb078.jpg", "/static/img/goodsImage/1129017/description/dd1717fc4500ce3e57404ea666004f0a.jpg", "/static/img/goodsImage/1129017/description/42cc029ccd973bcc1e29024f71cad3c5.jpg", "/static/img/goodsImage/1129017/description/aad84dcc701dde0703c6ee6701bde10f.jpg", "/static/img/goodsImage/1129017/description/f61d4ea157673daba75a560d4d206056.jpg", "/static/img/goodsImage/1129017/description/6d821406a5449a75e85cbd9663597841.jpg", "/static/img/goodsImage/1129017/description/1f42ff00364423b66a2120a81b35e16d.jpg", "/static/img/goodsImage/1129017/description/c4b4633a4f79a8ab6d4e75cf39ea9e70.jpg", "/static/img/goodsImage/1129017/description/ffa3f303bbcc9d84ca52a934103c5d28.jpg", "/static/img/goodsImage/1129017/description/0ebeb2dd3a56736f1b9a04c7521605c8.jpg", "/static/img/goodsImage/1129017/description/50520fc17f46d94964f51786133840e8.jpg", "/static/img/goodsImage/1129017/description/f7516f33f993a6483a592c7d1c1c8e00.jpg", "/static/img/goodsImage/1129017/description/aeba486c3165e4d82db52dbf45589eb2.jpg", "/static/img/goodsImage/1129017/description/fa93fa97355a770e2d8900c4a5014178.jpg", "/static/img/goodsImage/1129017/description/6dc06826c0951931c152ed9cbffcce14.jpg", "/static/img/goodsImage/1129017/description/a75327f151df3ea3c476907221173e38.jpg", "/static/img/goodsImage/1129017/description/6aa9e620a9e4c792ed0c24b3a5d9ef46.jpg", "/static/img/goodsImage/1129017/description/526dae6376b93c3ffa22de480397b8d3.jpg", "/static/img/goodsImage/1129017/description/d68276591b4112c326cec6439f503cc1.jpg", "/static/img/goodsImage/1129017/description/3b0253e2435f44342724ae88fc6bc6ff.jpg", "/static/img/goodsImage/1129017/description/1570cb55f0e6199b0105ef303a6f2e0c.jpg", "/static/img/goodsImage/1129017/description/9cc7caec277fe0ea9d437300c9a6a074.jpg", "/static/img/goodsImage/1129017/description/bea7a1e9b168c52bf51a51fc3680a55e.jpg", "/static/img/goodsImage/1129017/description/c7f9480a383630c77c48336f94b37cc6.jpg", "/static/img/goodsImage/1129017/description/4d5c5a1cfe2c00bad48cc938fafe1be3.jpg", "/static/img/goodsImage/1129017/description/7f40725bc5b74a298c12d02912d00d72.jpg"],
		"inventory": [562, 522],
		"information": [{
			"attrName": "伞骨材质：",
			"attrValue": "铁/玻璃纤维"
		}, {
			"attrName": "防晒等级：",
			"attrValue": "UPF＞40"
		}, {
			"attrName": "执行标准：",
			"attrValue": "GB/T 23147-2008"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "WPC制造商",
		"sale": 111,
		"date": "1500796373354",
		"category": "杂货",
		"subCategory": "出行用品"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1165024,
		"price": 55,
		"topName": "2件装 PS收纳篮",
		"subName": "透明收纳，直观更美观",
		"shortDescription": ["加高底部", "防磨耐用", "圆滑弧度", "防止撞伤", "优质材料", "经久耐用"],
		"shortDescriptionImage": ["/static/img/goodsImage/1165024/shortdescriptionImage/6da28b508a9e855fe2fda80cdb5ad857.jpg", "/static/img/goodsImage/1165024/shortdescriptionImage/a327e2c61125f423392c88fb1988a931.jpg", "/static/img/goodsImage/1165024/shortdescriptionImage/65a9685c47e872547c65a1de2d0bc6b6.jpg"],
		"headImage": ["/static/img/goodsImage/1165024/headImage/e30d3f2703c33cd78d4e4e62542f93e1.png", "/static/img/goodsImage/1165024/headImage/c59da88a44a512e36db3ecfb34358057.jpg", "/static/img/goodsImage/1165024/headImage/eeec60c56249d6126d2fbb9bb577f902.jpg", "/static/img/goodsImage/1165024/headImage/e75091cd92e026fa3f6bec7fe861a726.jpg", "/static/img/goodsImage/1165024/headImage/8863119aa48705d50d24cf7ffce79e3a.jpg"],
		"type": ["透明2件装", "透明紫2件装", "透明粉2件装", "透明茶2件装"],
		"chara": "4色可选",
		"description": ["/static/img/goodsImage/1165024/description/5d58024edcf2ad6892e2e98810d746f8.jpg", "/static/img/goodsImage/1165024/description/981d6675c458b4cfe020e6ad168dcccc.jpg", "/static/img/goodsImage/1165024/description/23f033b55ce0781a0283f7dbb8702e0c.jpg", "/static/img/goodsImage/1165024/description/1b8473ff720b4d7dbb18f1bb05fcaa42.jpg", "/static/img/goodsImage/1165024/description/6604336dae918dafca5c23835c8b2d2b.jpg", "/static/img/goodsImage/1165024/description/2163b52800b9562de130d17682ac87e6.jpg", "/static/img/goodsImage/1165024/description/dbe3abfc39f70e4d57241b2e2748d382.jpg", "/static/img/goodsImage/1165024/description/ab5a7b46b0ced28c0a3c4f86bb5ed5d1.jpg", "/static/img/goodsImage/1165024/description/cff32ea2b323d0227217126153ea6000.jpg", "/static/img/goodsImage/1165024/description/bebf0b96374f030750e2e313bb0c822f.jpg", "/static/img/goodsImage/1165024/description/0cfaa9f52bff18377e1a84903ad1d6f9.jpg", "/static/img/goodsImage/1165024/description/915d2d8b5252a2deb7c02fc5ca8168e6.jpg", "/static/img/goodsImage/1165024/description/bfa902cace30653eeeb21f222234ec36.jpg", "/static/img/goodsImage/1165024/description/b0c50f4b0dfae75352cfe9842ee0f1d2.jpg", "/static/img/goodsImage/1165024/description/693c9eea74883407bced9ef0d6f192ee.jpg", "/static/img/goodsImage/1165024/description/7b118a4c185f86f6f7d1b354a5e3246a.jpg", "/static/img/goodsImage/1165024/description/2d8a6e5efaf7f0490ecd5b86b429c64a.jpg", "/static/img/goodsImage/1165024/description/c3c0a8777837f2e0a59a72f876954941.jpg", "/static/img/goodsImage/1165024/description/4c79585939a3f50952bf799812970e14.jpg", "/static/img/goodsImage/1165024/description/45216c642983f43fe95cd2a2afa7d366.jpg", "/static/img/goodsImage/1165024/description/6a7fe894bd42fc55173d7e75ab58a58b.jpg", "/static/img/goodsImage/1165024/description/0e40a37b96e7b51cc67d1d12138ef60f.jpg", "/static/img/goodsImage/1165024/description/fdd1d54e0cc4e602486428ebb21704bf.jpg", "/static/img/goodsImage/1165024/description/c77b37e4bfa815ddcf1aa10e27e1f154.jpg", "/static/img/goodsImage/1165024/description/03de3f7a9724ee90698348288012030a.jpg", "/static/img/goodsImage/1165024/description/63e5f4c16e728654bd41bea290c76c58.jpg", "/static/img/goodsImage/1165024/description/e0f2a815fe4c32042ef9f548e36abaf7.jpg", "/static/img/goodsImage/1165024/description/3f3f550f099a733bdabba29183f275bc.jpg", "/static/img/goodsImage/1165024/description/b905aeaa6e6e8216abf029531662bf21.jpg", "/static/img/goodsImage/1165024/description/e4e394ad146ccea5242ef4bd8d2d791f.jpg", "/static/img/goodsImage/1165024/description/8a3362d967047a3fd79a1bf7d4819016.jpg", "/static/img/goodsImage/1165024/description/5baec06cbcc4dd573689e511a292d97d.jpg", "/static/img/goodsImage/1165024/description/2eb1db3adc7cfeba3acde66a3370a8f5.jpg", "/static/img/goodsImage/1165024/description/120e733342e1e4d84c159759555ddd17.jpg", "/static/img/goodsImage/1165024/description/3d4480747ecd0c5486de48e4e7e7e10e.jpg", "/static/img/goodsImage/1165024/description/576f5b9dccd2310ead3e1f199f6c6a89.jpg", "/static/img/goodsImage/1165024/description/fbf86bf8a8bc1a091331005ed8af88e2.jpg", "/static/img/goodsImage/1165024/description/079815bd60e0687973811077e97e88ab.jpg", "/static/img/goodsImage/1165024/description/aad0afc68480fea22f1747cee2f9be32.jpg", "/static/img/goodsImage/1165024/description/30100b9ef378730bcd087a5c15c52544.jpg", "/static/img/goodsImage/1165024/description/8413c1d982826069a9ef727e361b6f66.jpg", "/static/img/goodsImage/1165024/description/8174a434e1488d0350838c5c452ffbc4.jpg", "/static/img/goodsImage/1165024/description/7081723154158f926c3eded0d757ed06.jpg", "/static/img/goodsImage/1165024/description/4fb8211c92692e9e526f9ebc41a79754.jpg", "/static/img/goodsImage/1165024/description/67255370b3cefdc038679ef8f58dc918.jpg", "/static/img/goodsImage/1165024/description/3ce6ce3a023d3b3289002935eaf70bc7.jpg", "/static/img/goodsImage/1165024/description/1184a49411b5417bfb4979c10eb43a25.jpg", "/static/img/goodsImage/1165024/description/dcd378aa20170b6262b3d292ba4b82aa.jpg", "/static/img/goodsImage/1165024/description/9c38ab262e109943cb85793938e514fe.jpg", "/static/img/goodsImage/1165024/description/0c6bde456f9165ec16dc0bd489b1b8cb.jpg", "/static/img/goodsImage/1165024/description/ad391d272fc979f4c44df6e09a81a9ee.jpg", "/static/img/goodsImage/1165024/description/09793cc7b100063bf95cfa6f24bdac46.jpg", "/static/img/goodsImage/1165024/description/7c048679bc3973986fcd18a725304692.jpg", "/static/img/goodsImage/1165024/description/58d04fc4f36bca4188d4c33a00ed2804.jpg", "/static/img/goodsImage/1165024/description/9beaa65116bba7c43eeaa81f0dcbfded.jpg", "/static/img/goodsImage/1165024/description/c53c48e95f994f749f0650bad38fab26.jpg"],
		"inventory": [859, 992, 153, 119],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "小号：24*17*10.3cm大号：33.5*24*14cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "Q/GZBJD1-2016"
		}],
		"label": [{
			"title": "新品",
			"type": "2"
		}, {
			"title": "APP专享价",
			"type": "2"
		}],
		"manufacture": "",
		"sale": 241,
		"date": "1500341176017",
		"category": "杂货",
		"subCategory": "收纳"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1152026,
		"price": 29,
		"topName": "日本制造 古法手作酱油",
		"subName": "古法酿造 唇齿留香",
		"shortDescription": ["古法酿造", "口感醇厚", "灵峰清泉", "有机大豆", "五种口味", "多种搭配"],
		"shortDescriptionImage": ["/static/img/goodsImage/1152026/shortdescriptionImage/e255358b47f8cfe3accc1f03bd890052.jpg", "/static/img/goodsImage/1152026/shortdescriptionImage/7ede5dca9c211ce976c9f36e1279cc8d.jpg", "/static/img/goodsImage/1152026/shortdescriptionImage/4499cec101b9d1938e4764efd4a32e5e.jpg"],
		"headImage": ["/static/img/goodsImage/1152026/headImage/9e845b793c2bfa5fc58542a158ceb9ca.png", "/static/img/goodsImage/1152026/headImage/1567a339307db50775004b00278dbc71.jpg", "/static/img/goodsImage/1152026/headImage/ef514e7f314d46cb6ee1000512a84412.jpg", "/static/img/goodsImage/1152026/headImage/93d125d6acdc03d40fe9bd7f2bada81e.jpg", "/static/img/goodsImage/1152026/headImage/ca62c1111a28de559d34ec5a4f4d56ae.jpg"],
		"type": ["浓口", "淡口", "甜口", "万能", "牡蛎"],
		"chara": "5色可选",
		"description": ["/static/img/goodsImage/1152026/description/43cbb148fe72ec1039130cf03cb49165.jpg", "/static/img/goodsImage/1152026/description/c682fbdd11f3dcd6cb529d63bbdaecc6.jpg", "/static/img/goodsImage/1152026/description/13c096c28e1ae1e59561497e306fae48.jpg", "/static/img/goodsImage/1152026/description/6151d27e0f4f3514cbe5c607fd8c7128.jpg", "/static/img/goodsImage/1152026/description/b17d2e12c67315d81da5702e8bef7ccc.jpg", "/static/img/goodsImage/1152026/description/d9d5a9118df474f065c5707e458a08cc.jpg", "/static/img/goodsImage/1152026/description/49f8cf30efc77ea02de0c0982cb252a9.jpg", "/static/img/goodsImage/1152026/description/c7fe5b4ef09c28f735308bbc4ee763ff.jpg", "/static/img/goodsImage/1152026/description/3c0b3e01f0ee5e17be4f5357276e4ca0.jpg", "/static/img/goodsImage/1152026/description/b6436c9883d21d5be477db221f37ce8c.jpg", "/static/img/goodsImage/1152026/description/1db6e2e4f6008099fa1c01608204838b.jpg", "/static/img/goodsImage/1152026/description/9a651375ccad2f2b09cea4c0df3614a1.jpg", "/static/img/goodsImage/1152026/description/472b07fdddde32630762d5a906f1f203.jpg", "/static/img/goodsImage/1152026/description/94c91caa2dfa34a1daccfe62beb118a2.jpg", "/static/img/goodsImage/1152026/description/b250de7c2dd85fa5f294e17e22fc6b98.jpg", "/static/img/goodsImage/1152026/description/737eea8d563daca14abab4113bcadd39.jpg", "/static/img/goodsImage/1152026/description/864e41beef735588bbcdba4e160f33da.jpg", "/static/img/goodsImage/1152026/description/479c15c4ea9f8d715c832fd15689444f.jpg", "/static/img/goodsImage/1152026/description/d332075df46816f024f23ae1a61b84a8.jpg", "/static/img/goodsImage/1152026/description/69f8d0a389e3e61d9b141de546ba36a6.jpg", "/static/img/goodsImage/1152026/description/1a28be4f3c3462d8e030bae575106676.jpg", "/static/img/goodsImage/1152026/description/b8b2394faf01bfc0988cb40f5f7e0ac0.jpg", "/static/img/goodsImage/1152026/description/7d7dec7a6c2cc243df0584488e7cd22e.jpg", "/static/img/goodsImage/1152026/description/80e775190605a9db521e3653938a2583.jpg", "/static/img/goodsImage/1152026/description/9639e143cd6dd9f5d4df13c2db681b96.jpg", "/static/img/goodsImage/1152026/description/eb201927f45dd6985c88763137e28993.jpg", "/static/img/goodsImage/1152026/description/bd9f79c8b351593768b3489fc79e92a2.jpg", "/static/img/goodsImage/1152026/description/a104f95e1bc16ab8ac67b2f2f7b485d9.jpg", "/static/img/goodsImage/1152026/description/7b75d9f4cdc8193ccdb9bd3b39778bf8.jpg", "/static/img/goodsImage/1152026/description/16d86e5383e882acecbd49b6b80f307e.jpg", "/static/img/goodsImage/1152026/description/efc81e5c1a9491ca771ba03207d224d4.jpg", "/static/img/goodsImage/1152026/description/e84d8562b38ff17dc8a411b368b7bf13.jpg", "/static/img/goodsImage/1152026/description/68676d49d30247855a40e7eceebd6785.jpg", "/static/img/goodsImage/1152026/description/105fed0de48f51febfb55ee06f490b3b.jpg", "/static/img/goodsImage/1152026/description/0330c0cfc916aba3f667bdd0642da999.jpg", "/static/img/goodsImage/1152026/description/575f179f085524472f53c234cd156d4d.jpg", "/static/img/goodsImage/1152026/description/f7370732753405a4476ddbaa99847c82.jpg", "/static/img/goodsImage/1152026/description/8e5864daa6df9fe7552d5da767becd75.jpg", "/static/img/goodsImage/1152026/description/430c5bbdba987b876e1e3ead57b5c619.jpg", "/static/img/goodsImage/1152026/description/71f78ff7b858e52ec2d83f0b1195f57d.jpg", "/static/img/goodsImage/1152026/description/d9b39f65d8176b82fac98b491e6f1d8a.jpg", "/static/img/goodsImage/1152026/description/b9214e9bc0f90ee5d8c141adafd366f9.jpg", "/static/img/goodsImage/1152026/description/92cf054ebf3e4a61b82cf8dfa879f8f3.jpg", "/static/img/goodsImage/1152026/description/761caf97e5b1bbcd3cfb343beea4d1fa.jpg", "/static/img/goodsImage/1152026/description/de4d275ae6b726c930e36d82c664208b.jpg", "/static/img/goodsImage/1152026/description/ce9f579113b97bc373be50daa0ecb144.jpg", "/static/img/goodsImage/1152026/description/8b36c349152dcaeaace64c9aecb1b0e3.jpg", "/static/img/goodsImage/1152026/description/c922540d07eaae72336ab03a2db4e405.jpg", "/static/img/goodsImage/1152026/description/1f3911f1ab4feb61e0eec136ad251c36.jpg", "/static/img/goodsImage/1152026/description/517635156fb37b06ece8675a56539885.jpg", "/static/img/goodsImage/1152026/description/b12746bc1391eb3106160b43ee0f5225.jpg", "/static/img/goodsImage/1152026/description/7cc5afa64c72f203681f00994a7f10ed.jpg", "/static/img/goodsImage/1152026/description/a1da65ad3d7e0a79c04848ab3e8e891c.jpg", "/static/img/goodsImage/1152026/description/119cfb8db91eab97d146c2b88db59ed2.jpg", "/static/img/goodsImage/1152026/description/665c989251f9723ad5451c1fc589e8cd.jpg", "/static/img/goodsImage/1152026/description/f74bccc0e7b5f4cea782d122bd64131b.jpg", "/static/img/goodsImage/1152026/description/dec0bd78656e54711c145ca8cd662f3f.jpg", "/static/img/goodsImage/1152026/description/6d5e88813caf1fe8d46aa25e9dbf5858.jpg", "/static/img/goodsImage/1152026/description/35ae8637ba672e6729401e7698755662.jpg", "/static/img/goodsImage/1152026/description/cc81c3a2ca15807571a83caa3a913a6e.jpg", "/static/img/goodsImage/1152026/description/c97895335e632e32af19bec751c1fe6b.jpg", "/static/img/goodsImage/1152026/description/a5bd4aee6ca1c46a173bcc84b04bc02b.jpg", "/static/img/goodsImage/1152026/description/83a8a0b8ed75b1f5c27e440171e4cd77.jpg", "/static/img/goodsImage/1152026/description/055809a5e60661f7e36510a38c0ef6c5.jpg", "/static/img/goodsImage/1152026/description/956fcf0fcbb1027c68387bd2dc44aa1e.jpg", "/static/img/goodsImage/1152026/description/15d31c8c417c25ae619bbfd7ebb93ae9.jpg"],
		"inventory": [690, 965, 923, 210, 471],
		"information": [{
			"attrName": "口味",
			"attrValue": "浓口：适合各类炒菜、刺身、寿司、豆腐、炖菜。淡口：适合味噌汤、蒸蛋、炖菜。甜口：适合各种肉菜、刺身、寿司、豆腐、炖菜。万能：适合乌冬荞麦面、盖浇饭、天妇罗酱汁、鱼。牡蛎：适合鸡蛋料理、炒饭、刺身。"
		}, {
			"attrName": "配料表",
			"attrValue": "详情请见商品标签"
		}, {
			"attrName": "产地",
			"attrValue": "日本石川县"
		}, {
			"attrName": "保质期",
			"attrValue": "18个月"
		}, {
			"attrName": "贮存条件",
			"attrValue": "干燥阴凉处"
		}, {
			"attrName": "温馨提示",
			"attrValue": "本品除明确质量问题外不支持30天无忧退换货"
		}],
		"label": [{
			"title": "新品",
			"type": "1"
		}],
		"manufacture": "",
		"sale": 595,
		"date": "1500341179040",
		"category": "杂货",
		"subCategory": "海外"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1222001,
		"price": 408,
		"topName": "郊游组合",
		"subName": "全家郊游，愉悦出行",
		"shortDescription": ["双层设计", "防风防雨", "承重力强", "舒适耐用", "方便收纳", "轻便易携"],
		"shortDescriptionImage": ["/static/img/goodsImage/1222001/shortdescriptionImage/e5c857e4544573a2cc08227e3dd37309.jpg", "/static/img/goodsImage/1222001/shortdescriptionImage/9040f784116f37be5294a943edc49957.jpg", "/static/img/goodsImage/1222001/shortdescriptionImage/728b97ea2e7484d3f0e8cf63839368fe.jpg"],
		"headImage": ["/static/img/goodsImage/1222001/headImage/e2445f48c503a5a3f6e8b756064642a7.png", "/static/img/goodsImage/1222001/headImage/270b68e5c1e8139b99eee23a4d6c1b57.jpg", "/static/img/goodsImage/1222001/headImage/912ed7c47f532ee4108e247e17af2cb5.jpg", "/static/img/goodsImage/1222001/headImage/084af3d6bfe927b42e11472f61df3f70.jpg", "/static/img/goodsImage/1222001/headImage/7b56f2324db5b99b6cffbd2ee866774e.jpg"],
		"type": ["双层防风防潮自动展开帐篷（驼色）+户外露营秋千吊床（驼色）", "双层防风防潮自动展开帐篷（灰）+户外露营秋千吊床（灰）"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1222001/description/c4d400e450d26943059a3e91eae93bde.jpg", "/static/img/goodsImage/1222001/description/92f6b1b0c89e1533e71ef51451d3d45b.jpg", "/static/img/goodsImage/1222001/description/72a6f3820b26f6221f68f26271452186.jpg", "/static/img/goodsImage/1222001/description/7c670ebb320dfafdda605995ce479642.jpg", "/static/img/goodsImage/1222001/description/32999632ea08a293c06319a35bd01a49.jpg", "/static/img/goodsImage/1222001/description/e1214691e5c9aa0b7f43f278e27c7bd0.jpg", "/static/img/goodsImage/1222001/description/32faa2938e45592ee5f28bbc1320c358.jpg", "/static/img/goodsImage/1222001/description/916d428edd36ab64dced381619127b6d.jpg", "/static/img/goodsImage/1222001/description/6adfb8909df57a8b95b9a2b36d288ec2.jpg", "/static/img/goodsImage/1222001/description/5e376e0d8dc0fb86cbabb10cce5dd41e.jpg", "/static/img/goodsImage/1222001/description/19aa8c40ba0c6bc41ff505170902ec53.jpg", "/static/img/goodsImage/1222001/description/7aa31257af0b20c36e08d1daeab9f1f7.jpg", "/static/img/goodsImage/1222001/description/2fa920576acba57366b2b4984e47379c.jpg", "/static/img/goodsImage/1222001/description/0ee053dc6690497c80f8d51a67199681.jpg", "/static/img/goodsImage/1222001/description/bb5a48d469bf02bfbf79c511cf4721c4.jpg", "/static/img/goodsImage/1222001/description/34526355818c1cf6102ff960844e3fcf.jpg", "/static/img/goodsImage/1222001/description/d74e69b03a55027f934789562b5348bb.jpg", "/static/img/goodsImage/1222001/description/c26a8c1cb78e7b7abaa6b8cfaa5327f6.jpg", "/static/img/goodsImage/1222001/description/21dd4a638fbe1b3d6e44fcb54efa7270.jpg", "/static/img/goodsImage/1222001/description/d778de88324a5ca9ab230d5b66eaf916.jpg", "/static/img/goodsImage/1222001/description/87039047b9aeb9b90a513b181f094331.jpg", "/static/img/goodsImage/1222001/description/ca5f95227c82a70e96b79e5999917dc1.jpg", "/static/img/goodsImage/1222001/description/88c0d8e4991e718a60d862ae8ec22841.jpg", "/static/img/goodsImage/1222001/description/31ca752475b27d89ad181418b082c568.jpg", "/static/img/goodsImage/1222001/description/24678c96f138ecaa7652a2077e693682.jpg", "/static/img/goodsImage/1222001/description/f59242670d516c713509136804ea7ab7.jpg", "/static/img/goodsImage/1222001/description/640e480e306d7c2345a8168f934cdf2b.jpg", "/static/img/goodsImage/1222001/description/89c35dcf733e6a228ddcea99967da242.jpg", "/static/img/goodsImage/1222001/description/94ce820cb2eb5ed1a2bb639820a57e11.jpg", "/static/img/goodsImage/1222001/description/6377932c851313928fff5d4662f9bd74.jpg", "/static/img/goodsImage/1222001/description/2d70ae7732b869b3f3776dbe3d933277.jpg", "/static/img/goodsImage/1222001/description/042e8544647737ade362bd303a083f5b.jpg", "/static/img/goodsImage/1222001/description/e29839b18b8cd88da75ef4c88cd9debe.jpg", "/static/img/goodsImage/1222001/description/896e23fc2b8a53be8fa6d92e7c51d171.jpg", "/static/img/goodsImage/1222001/description/6f31e8fcfacaa67eaca37abc2fadef12.jpg", "/static/img/goodsImage/1222001/description/f9ad3686e08937bcf091785ecd57501e.jpg", "/static/img/goodsImage/1222001/description/b848908df9debdefd188bba106cd9cee.jpg", "/static/img/goodsImage/1222001/description/1dceb31f761f55db41d6559c0515fd70.jpg", "/static/img/goodsImage/1222001/description/546922e09787b883282525ffc3fe93f6.jpg", "/static/img/goodsImage/1222001/description/f47e4a15df58cc2a2eb8e9bc6b86cb4d.jpg", "/static/img/goodsImage/1222001/description/a573e0a0d0cc803877f17ff8f2bffb86.jpg", "/static/img/goodsImage/1222001/description/622e1907a9c3ea1a992817afe8ebc3b4.jpg", "/static/img/goodsImage/1222001/description/546947d6041658bf0b2865fec7a66393.jpg", "/static/img/goodsImage/1222001/description/852f644c05ccd4db1bc158fba6b2a867.jpg", "/static/img/goodsImage/1222001/description/99553dadbceca32eb4ced073b89584bc.jpg", "/static/img/goodsImage/1222001/description/6daacb96813cf86f4142749144983662.jpg", "/static/img/goodsImage/1222001/description/6588ed56882d5d5444a940c428693032.jpg", "/static/img/goodsImage/1222001/description/91af2168901a41a73838e91987c55b56.jpg", "/static/img/goodsImage/1222001/description/24e5c1dd83d0d8396af2c37a99ed03f8.jpg", "/static/img/goodsImage/1222001/description/7a70a4eff9947484caba481b7569a38a.jpg", "/static/img/goodsImage/1222001/description/6597eed3fa7a7022e90cd5c043db8b8e.jpg", "/static/img/goodsImage/1222001/description/a39ad9a12b4bedf288fdea36f0baaa09.jpg", "/static/img/goodsImage/1222001/description/71ccc2223aab87dc149edb67a7bdfca4.jpg", "/static/img/goodsImage/1222001/description/1e93c1d72d114ebfc50226969ff5bfbe.jpg", "/static/img/goodsImage/1222001/description/6a2a9c28cb64c9c8f1f811572b50c6b6.jpg", "/static/img/goodsImage/1222001/description/575c5ac1aa18398d4ffb9246b52553e6.jpg", "/static/img/goodsImage/1222001/description/6c79b7472093a53bf3cc0be17fee89b0.jpg", "/static/img/goodsImage/1222001/description/e02adad3421581b089093232d7745b0b.jpg", "/static/img/goodsImage/1222001/description/d8260968e61203f92ce9ba5bc3c5fda2.jpg", "/static/img/goodsImage/1222001/description/ea5d5049738f2b8ad906bba2dbba10c1.jpg", "/static/img/goodsImage/1222001/description/69217824b079d2983a6e7fcdf2f176d3.jpg", "/static/img/goodsImage/1222001/description/bafc5fc1830e30f9c4f3424f9abac1b4.jpg", "/static/img/goodsImage/1222001/description/1bf2a91ffd69a87036710ff539580935.jpg", "/static/img/goodsImage/1222001/description/b3bade38420661237e06aa391261d5c9.jpg", "/static/img/goodsImage/1222001/description/88a18377849e3fcdab4c772728b981b9.jpg", "/static/img/goodsImage/1222001/description/5070514981c0b08966b9c575f6dbd6e5.jpg", "/static/img/goodsImage/1222001/description/861ddb92582942c91ed74d03156bdfa5.jpg", "/static/img/goodsImage/1222001/description/084bf8f62be9565679cb35707517d844.jpg", "/static/img/goodsImage/1222001/description/b1cc9a04089bcbe02b569c05186753e7.jpg", "/static/img/goodsImage/1222001/description/7df691b21d02d1bc05fcc749a001086e.jpg", "/static/img/goodsImage/1222001/description/8b7f9844799a4301f382d9592d90cc7c.jpg", "/static/img/goodsImage/1222001/description/639cee7d189e6b6a232cb5a8d2bebed8.jpg", "/static/img/goodsImage/1222001/description/0c4fd4b673245eab9ce95716a7069500.jpg", "/static/img/goodsImage/1222001/description/6e85ee38ac4096e4631dae577a4e40ec.jpg", "/static/img/goodsImage/1222001/description/2e0e22eea293770d3b2852058579dd54.jpg", "/static/img/goodsImage/1222001/description/178e9715dc7b5413d26aac4eafa3547f.jpg", "/static/img/goodsImage/1222001/description/268d6ee71b522af199c10e3018da88f9.jpg", "/static/img/goodsImage/1222001/description/e5282093c30df724ecb7b5d332a0c4e1.jpg", "/static/img/goodsImage/1222001/description/ae9639b303507833e4087152f0a24b1a.jpg", "/static/img/goodsImage/1222001/description/55d38304d04c87746f9b0e629b11ca30.jpg", "/static/img/goodsImage/1222001/description/ce6eec4baeb85260650af5216558629e.jpg", "/static/img/goodsImage/1222001/description/d94e8af3d9223647ee10d064aef131ff.jpg", "/static/img/goodsImage/1222001/description/645a70a98322f9781749fa89a662f6b8.jpg", "/static/img/goodsImage/1222001/description/9b7b4e47306a0127039fcea35b436c34.jpg", "/static/img/goodsImage/1222001/description/b850dcf036ca480f90c305b274b40e3b.jpg", "/static/img/goodsImage/1222001/description/2f5edc7ead4fc982ad52939c46c16c8b.jpg", "/static/img/goodsImage/1222001/description/0be25f2f2191b982cda6034ad0cfb13c.jpg", "/static/img/goodsImage/1222001/description/2377ab2295c3151cd61b833e0bc93408.jpg", "/static/img/goodsImage/1222001/description/96d1d590af86c3ccbf34d8311f08935e.jpg", "/static/img/goodsImage/1222001/description/45148c2bf0c5ad8435c60aae30318611.jpg", "/static/img/goodsImage/1222001/description/78e9652fb3db9cc151eb9bd3d1ab389b.jpg", "/static/img/goodsImage/1222001/description/1a28295717385d73c9fba7c9670ec7c4.jpg", "/static/img/goodsImage/1222001/description/f666d19c32056f0a554b9c1f92721249.jpg", "/static/img/goodsImage/1222001/description/577278d4f659c6b426469277e68f5b9c.jpg", "/static/img/goodsImage/1222001/description/320664e1ea06d71b976afd20f04c2eb1.jpg", "/static/img/goodsImage/1222001/description/2aba537f8cbdf08ccad9275243240a1f.jpg", "/static/img/goodsImage/1222001/description/aff736ab5be9f88bcaa65341367b39f9.jpg", "/static/img/goodsImage/1222001/description/9082c4f832645071b97201897193c920.jpg", "/static/img/goodsImage/1222001/description/4384548888b3c3feb77fc433acb36588.jpg", "/static/img/goodsImage/1222001/description/5a4a6c2c8f395ba48bcab33a73aa63b9.jpg", "/static/img/goodsImage/1222001/description/31277c67b9f8005253c3c1cbe9b4eab9.jpg", "/static/img/goodsImage/1222001/description/c06c75a1809543438563e3a33850a7c9.jpg", "/static/img/goodsImage/1222001/description/65a96f727c200005c34b2461b96a5837.jpg", "/static/img/goodsImage/1222001/description/dc6000699e3b9244df816e233f4b9fa1.jpg", "/static/img/goodsImage/1222001/description/69ac2c434744ecb3c3a34a086706fb65.jpg", "/static/img/goodsImage/1222001/description/df0d7079c18528b959cc323598d0763d.jpg", "/static/img/goodsImage/1222001/description/b959c9b542cd0d45e56bbbe0c3a95f28.jpg", "/static/img/goodsImage/1222001/description/db1da2a7cb0259c406a551b522c368af.jpg", "/static/img/goodsImage/1222001/description/3e413d5601a1e90fc1d7f8494952d29f.jpg", "/static/img/goodsImage/1222001/description/5d975e454e5f3f318470bd7a6bb95f16.jpg", "/static/img/goodsImage/1222001/description/1f442c68b902dadd4cd638b32207391f.jpg", "/static/img/goodsImage/1222001/description/011bc066666d98c2f9762947c1343e2d.jpg", "/static/img/goodsImage/1222001/description/852e5a61340c2750f542eeab428c2b38.jpg", "/static/img/goodsImage/1222001/description/9b88841245dabf81fc1468655df8e62f.jpg", "/static/img/goodsImage/1222001/description/1a32c43e774b8f4bc5ce9ab0666deb29.jpg", "/static/img/goodsImage/1222001/description/ab2412a5a33d92d197ec5262680ea32d.jpg", "/static/img/goodsImage/1222001/description/f74c967c5f6be7fabb875c907f6c5468.jpg", "/static/img/goodsImage/1222001/description/3e17b2f6b42ff14efece29374ca62db1.jpg", "/static/img/goodsImage/1222001/description/aae78b5af06d57658dcb6a0a6de6d2d3.jpg"],
		"inventory": [807, 518],
		"information": [],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 47,
		"date": "1500341182543",
		"category": "杂货",
		"subCategory": "户外"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1165076,
		"price": 129,
		"topName": "金属圆形眼镜架",
		"subName": "超轻材质，经典暗雅",
		"shortDescription": ["经典压纹", "复古暗雅", "优质托叶", "舒适无压", "双螺铰链", "开合顺畅"],
		"shortDescriptionImage": ["/static/img/goodsImage/1165076/shortdescriptionImage/5cf0d59da625c249049709f7b29f56bc.png", "/static/img/goodsImage/1165076/shortdescriptionImage/aff94aac7ded73a15ede280633fec544.png", "/static/img/goodsImage/1165076/shortdescriptionImage/18f260267cdc9b93d727aaf4fd9a4c11.png"],
		"headImage": ["/static/img/goodsImage/1165076/headImage/3be60a520b74a5a9d36096064c61b5ac.png", "/static/img/goodsImage/1165076/headImage/b6f1beb26eccdbce0ec46c8b490cea42.jpg", "/static/img/goodsImage/1165076/headImage/a2cffbaeb9c0a8fd66c9e535a486585d.jpg", "/static/img/goodsImage/1165076/headImage/8bbff9fd8fe317efe24f77e741f2f13b.jpg", "/static/img/goodsImage/1165076/headImage/5985f2d2bcecae38f4880cbcd095156e.jpg"],
		"type": ["金色"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1165076/description/6fefe2a95e2d558f99e6343e75baaa5a.jpg", "/static/img/goodsImage/1165076/description/18927dcfe37955483a26fe87da491f80.jpg", "/static/img/goodsImage/1165076/description/d9cf04d8b416beac3e2c612389e72a42.jpg", "/static/img/goodsImage/1165076/description/74627fad4f3d488aa0f70b3522df7b46.jpg", "/static/img/goodsImage/1165076/description/bf1967c36004d1023df97d1cb9dc29e9.jpg", "/static/img/goodsImage/1165076/description/5dd5d0f50916ac43f41095422e9f66db.jpg", "/static/img/goodsImage/1165076/description/2271c65a9a5ba062609f588512955eb2.jpg", "/static/img/goodsImage/1165076/description/8db91df9a7d42a7756c4210fa53fdb9e.jpg", "/static/img/goodsImage/1165076/description/504e44b7d8beb9d2d8a39c75def12dfb.jpg", "/static/img/goodsImage/1165076/description/a30621ead079fa43385b50de29660863.jpg", "/static/img/goodsImage/1165076/description/875a7494a2fbe266d63e3430db4f77af.jpg", "/static/img/goodsImage/1165076/description/1cf8f650046708fee65b7ad867fac73e.jpg", "/static/img/goodsImage/1165076/description/744e4765dd2f0823d0ef008b2972efbf.jpg", "/static/img/goodsImage/1165076/description/845c9c0828e1c0100d8e3d9acb45f853.jpg", "/static/img/goodsImage/1165076/description/ed4f62f174bf43ccb4c314488c62d98d.jpg", "/static/img/goodsImage/1165076/description/4b447752ed7fac74b4a18084d1764005.jpg", "/static/img/goodsImage/1165076/description/240e88539077dc4f169d60800283e9a1.jpg", "/static/img/goodsImage/1165076/description/f517b4ec9fc3c806436a1256484956bb.jpg", "/static/img/goodsImage/1165076/description/cfe66e8dcc314998df3567b6078c1e22.jpg", "/static/img/goodsImage/1165076/description/326a08c509fcb249f4b496c2371c93db.jpg", "/static/img/goodsImage/1165076/description/2bb16d263f2f172b0a3029407be13568.jpg", "/static/img/goodsImage/1165076/description/f6c8541aac66855aabfa8640d4da649a.jpg", "/static/img/goodsImage/1165076/description/119f8ed3d25431bfc3f4541fd07331e4.jpg", "/static/img/goodsImage/1165076/description/b0c9bc4aa31517bba00a2e4345737539.jpg", "/static/img/goodsImage/1165076/description/b7974a4703facc43bd41b65dcd3dc996.jpg", "/static/img/goodsImage/1165076/description/b48c197be4c04d7812a2f37304cadbb8.jpg", "/static/img/goodsImage/1165076/description/83a224a959630e008b8f572f23ceef8f.jpg", "/static/img/goodsImage/1165076/description/93844f9b4e1dde8fc84e7511ea065f91.jpg", "/static/img/goodsImage/1165076/description/10988998c01b51742f8fc2bc6b4d22d0.jpg", "/static/img/goodsImage/1165076/description/98f27303fab0ce0fc7e65f3ddc5b6276.jpg", "/static/img/goodsImage/1165076/description/654a9faf2ea2ae673514c24b47f40d0f.jpg", "/static/img/goodsImage/1165076/description/525794c3f959e2c82d0d0b919cad8c1e.jpg", "/static/img/goodsImage/1165076/description/b3c841d0414eb5d9fb6593059d1eb5fb.jpg", "/static/img/goodsImage/1165076/description/8f62ad65eef109c7b97fbe1d10776724.jpg", "/static/img/goodsImage/1165076/description/88bc9501ed7ed29dfc05a5d0b41f3f94.jpg", "/static/img/goodsImage/1165076/description/b2fd4ffd109aa7d1c5d3e20b531bb8be.jpg", "/static/img/goodsImage/1165076/description/ce6082605b1a6fdc4277f94a02546e5d.jpg", "/static/img/goodsImage/1165076/description/c6d0e2a55b969262f17a3e7857ddb2c4.jpg", "/static/img/goodsImage/1165076/description/859977afcfe8d8389b3c7850890f8129.jpg", "/static/img/goodsImage/1165076/description/34dd3177acbe612f8878515007429365.jpg", "/static/img/goodsImage/1165076/description/e66b1349e954c21d1e0fdefdaa54204c.jpg", "/static/img/goodsImage/1165076/description/df94410488cc02a0eb1a6fa50a4c200a.jpg", "/static/img/goodsImage/1165076/description/9e71e84069bcbc85b965a2c7fda08548.jpg", "/static/img/goodsImage/1165076/description/bd2e8b1265cc7039015ecd890bc89c65.jpg", "/static/img/goodsImage/1165076/description/cc4aa0d71d64372af421e27a1229e480.jpg", "/static/img/goodsImage/1165076/description/8e63054467c83dab8913a39c63fbfa6c.jpg", "/static/img/goodsImage/1165076/description/b097e46746ecb46b3a55a26ca68595c7.jpg", "/static/img/goodsImage/1165076/description/c43c97f7a4130e8bbb3c7ca24bc14de5.jpg", "/static/img/goodsImage/1165076/description/5767932d2b1250716b0131b5a15bcae4.jpg", "/static/img/goodsImage/1165076/description/8d734697cba981e92d12477f16aab5ac.jpg", "/static/img/goodsImage/1165076/description/57a3298d3605b1af1c1173c338ee7d35.jpg", "/static/img/goodsImage/1165076/description/17acd65de7f401fba91c2e8ac518470e.jpg", "/static/img/goodsImage/1165076/description/a30d0484de83c7639f4970dc71e5e0a1.jpg", "/static/img/goodsImage/1165076/description/273f81c8966e2d2773f1ef896a6a56a2.jpg", "/static/img/goodsImage/1165076/description/eb2ec7d2814a624ca8ffe908b666bf6a.jpg", "/static/img/goodsImage/1165076/description/af00313003cc88bae37ab0350fd6fd2f.jpg", "/static/img/goodsImage/1165076/description/3ab2a3ba9bccc80d7c1d39f490884fa0.jpg", "/static/img/goodsImage/1165076/description/56f842bf64b10e296a675e0b70598870.jpg", "/static/img/goodsImage/1165076/description/6bf017dd988b87d12b00376865f52c00.jpg", "/static/img/goodsImage/1165076/description/6ccd189940c7fe46e7033a1a95323cd3.jpg", "/static/img/goodsImage/1165076/description/10d94fb70657485e9cc1c7ea57ac150c.jpg", "/static/img/goodsImage/1165076/description/770e7c9aad2de47e845bd40039d22b5f.jpg", "/static/img/goodsImage/1165076/description/e722d8dfb0bff3e2627ffdd77cfc5740.jpg", "/static/img/goodsImage/1165076/description/c649e621329fba98679db1b8746c410e.jpg", "/static/img/goodsImage/1165076/description/7b951f2c0bd129f44e3e2e5b91a0d033.jpg", "/static/img/goodsImage/1165076/description/0ade85b0161025605eb8805174224eb5.jpg", "/static/img/goodsImage/1165076/description/0e0ca5e1da7e274b1884e32e06229258.jpg", "/static/img/goodsImage/1165076/description/ee477429733bc18d3b33b20e51f0bcc0.jpg", "/static/img/goodsImage/1165076/description/7250dd82b23421cb9a14dfac7ccb89c0.jpg", "/static/img/goodsImage/1165076/description/67955eaf6d55464f8edac2cdb870d23f.jpg"],
		"inventory": [436],
		"information": [{
			"attrName": "材质",
			"attrValue": "金属"
		}, {
			"attrName": "尺寸",
			"attrValue": "见详情"
		}, {
			"attrName": "重量",
			"attrValue": "18g（手工测量可能存在误差）"
		}, {
			"attrName": "适用对象",
			"attrValue": "男女均可"
		}, {
			"attrName": "注意事项",
			"attrValue": "1. 眼镜用镜布或者软袋包好，放置盒内，远离潮湿环境和火源。2. 眼镜可以用清水或专用眼镜清洁液清洗，请勿使用任何化学溶剂，以免破坏镜片。3. 镜架长时间使用或放置后，可能会轻微变形，对脸部造成负担，可通过手工调整恢复，属于正常情况。4. 请将眼镜放置远离化学品，化妆品，药品，手机等，以避免产生破坏。"
		}, {
			"attrName": "使用方法",
			"attrValue": "可直接装饰佩戴，也可用于近视镜镜框"
		}, {
			"attrName": "温馨提示",
			"attrValue": "购买前请仔细阅读眼镜尺寸信息"
		}, {
			"attrName": "选择贴士",
			"attrValue": "脸型和头型大小决定镜架外框，脸型偏大则尽量选择镜框外宽较宽的镜框，选择方法：1.找出你戴得最舒适的旧眼镜，但必须确保旧眼镜的镜腿对比前框没有外八的现象；2.测出前框的最大宽度，将宽度与图中眼镜数字进行对比；3.如果尺寸相差在3mm以内，则可认为是比较合适的眼镜。"
		}],
		"label": [{
			"title": "新品",
			"type": "2"
		}, {
			"title": "焕新专享",
			"type": "2"
		}],
		"manufacture": "Police制造商",
		"sale": 267,
		"date": "1500341185639",
		"category": "杂货",
		"subCategory": "眼镜"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1195000,
		"price": 138,
		"topName": "黑凤梨 男生零食礼盒",
		"subName": "美食礼包，畅享甜蜜",
		"shortDescription": ["别样小食", "新奇体验", "脆虾肉脯", "咸鲜美味", "坚果酥脆", "能量满满"],
		"shortDescriptionImage": ["/static/img/goodsImage/1195000/shortdescriptionImage/8f1728f593a3a7fa1c77c5bf2c5235a1.png", "/static/img/goodsImage/1195000/shortdescriptionImage/a05a561abc02613ea6f11c71218a9550.png", "/static/img/goodsImage/1195000/shortdescriptionImage/9d96b908c56d5a12ad5ac0c35f795ecb.png"],
		"headImage": ["/static/img/goodsImage/1195000/headImage/600dcbc366d18431a031fc63fe646a35.png", "/static/img/goodsImage/1195000/headImage/740d0190504deaf14a38be99a04e4d47.jpg", "/static/img/goodsImage/1195000/headImage/aa801cdf5c938ea469029775bf1f7c46.jpg", "/static/img/goodsImage/1195000/headImage/ab2485543ffb92acc8f3b0ae7d9edb23.jpg", "/static/img/goodsImage/1195000/headImage/fccdb80d0b1586f92434420cb6b599b7.jpg"],
		"type": ["黑凤梨男生零食礼盒"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1195000/description/6794c6a325a519e7d7f93d8f1bbaa763.jpg", "/static/img/goodsImage/1195000/description/a3960bf6c7d204fe5f0ed2715f68e3fc.jpg", "/static/img/goodsImage/1195000/description/222c9727d00e04a6b45b38afacd18702.jpg", "/static/img/goodsImage/1195000/description/0ede64721475ebbfebabf6576a9e20c7.jpg", "/static/img/goodsImage/1195000/description/be6ff101dbbcdb1697062ea85ac1f9a8.jpg", "/static/img/goodsImage/1195000/description/56d0d7f5ba54bc45eb0685c4fae670f6.jpg", "/static/img/goodsImage/1195000/description/3b718acd326a228473528d0e18b08b90.jpg", "/static/img/goodsImage/1195000/description/5a2ae6bcf6c3ffaf0d0ea7f1a41a4c90.jpg", "/static/img/goodsImage/1195000/description/f30d3a9fb181f2bf97a786eb80432682.jpg", "/static/img/goodsImage/1195000/description/bc67cda0f33bf2ed9a74db5cfc47b9d0.jpg", "/static/img/goodsImage/1195000/description/f6a2389f17388ea178fb5e2de45f7630.jpg", "/static/img/goodsImage/1195000/description/d587518480ec0b72c15d929da6bc636e.jpg", "/static/img/goodsImage/1195000/description/acc8d400733e14e9aac2531741570c33.jpg", "/static/img/goodsImage/1195000/description/5a22edb74a22b983f1e8d0d204767769.jpg", "/static/img/goodsImage/1195000/description/c4aa9d4ae4a3331f723d5671dd4cd7a5.jpg", "/static/img/goodsImage/1195000/description/1637c0db5b69ec8165d71bef9e49ab3d.jpg", "/static/img/goodsImage/1195000/description/a9a110c9bd92c317d6b248eac640f881.jpg", "/static/img/goodsImage/1195000/description/1d49c97c463555a43a47f1e5e1ee1a22.jpg", "/static/img/goodsImage/1195000/description/bc61e9505c1163ebe62def2363842e34.jpg", "/static/img/goodsImage/1195000/description/8241a122dba9c018f96bfbb1428afd01.jpg", "/static/img/goodsImage/1195000/description/4264691d7cc4cf35064216fa9870b93b.jpg", "/static/img/goodsImage/1195000/description/04ad242877786c6e277ce2b598fa7a8e.jpg", "/static/img/goodsImage/1195000/description/200a530ef7b699c24878a566230f3a22.jpg", "/static/img/goodsImage/1195000/description/6f8c6478704702875dc57d92396d4405.jpg", "/static/img/goodsImage/1195000/description/ccfe58926b347f4727f5c7105868b37a.jpg", "/static/img/goodsImage/1195000/description/01815de88f048490d4855a447be5f0db.jpg", "/static/img/goodsImage/1195000/description/829cea536cc7adb883444d3f61c6277a.jpg", "/static/img/goodsImage/1195000/description/3633793cf93f26ef984bd2e1507982a4.jpg", "/static/img/goodsImage/1195000/description/5ddaf6e63b0deca85f9cd38d835bc90f.jpg", "/static/img/goodsImage/1195000/description/0bb594ea81beabbc41c7bc5a8e6c4818.jpg", "/static/img/goodsImage/1195000/description/9a167667c92d0a5a2a9c8604fd69ae52.jpg", "/static/img/goodsImage/1195000/description/f4bc772059d6b520129cb0896d87bf46.jpg", "/static/img/goodsImage/1195000/description/9b86b0a519b4ce4890168c4d66485d04.jpg", "/static/img/goodsImage/1195000/description/2409f82417284ee61a637d229175e41c.jpg", "/static/img/goodsImage/1195000/description/b6edf999fce308721c4b8c5227baab66.jpg", "/static/img/goodsImage/1195000/description/533e357900e5648d919f411516e4f180.jpg", "/static/img/goodsImage/1195000/description/efce3a06152ee4d3ed43c72bfaaa6ec2.jpg", "/static/img/goodsImage/1195000/description/6c9cc17806d3024dc96d8ba2092a953a.jpg", "/static/img/goodsImage/1195000/description/b8164c44d0b1e13a8d15aad1e6ffb225.jpg", "/static/img/goodsImage/1195000/description/0a359865e07c1faf058dceae63953289.jpg", "/static/img/goodsImage/1195000/description/35a39502687523efd567416d0f91ac61.jpg", "/static/img/goodsImage/1195000/description/7a09386ffbfb76e6c928c00774bab048.jpg", "/static/img/goodsImage/1195000/description/dea352ebd8541c4ea88094ca15f7f5fb.jpg", "/static/img/goodsImage/1195000/description/c204fff3a9f3031d2e08386242939c4c.jpg", "/static/img/goodsImage/1195000/description/3e8391192cd5cec3ad47c306d34cb655.jpg", "/static/img/goodsImage/1195000/description/0616d6da296857433882a778c913b963.jpg", "/static/img/goodsImage/1195000/description/35e1f605a0a9e2ab644f29ad1497bdfe.jpg", "/static/img/goodsImage/1195000/description/590f84bea96f0b9780302ac4f11a4509.jpg", "/static/img/goodsImage/1195000/description/d41563602856f543486742ed1d50648c.jpg", "/static/img/goodsImage/1195000/description/c0cf14d0d065a0de44a7db44533a0f80.jpg", "/static/img/goodsImage/1195000/description/f560b3dce5fca45987c6c3e4b863c481.jpg", "/static/img/goodsImage/1195000/description/ec6fb7f5cae5ce46f314cda904e66b1d.jpg", "/static/img/goodsImage/1195000/description/1cb1001894d66ccaef8270cabcc8fee7.jpg", "/static/img/goodsImage/1195000/description/e7868092868670a94f539e3afc65118d.jpg", "/static/img/goodsImage/1195000/description/504f579e67a9778adfbed11271c8e2d0.jpg", "/static/img/goodsImage/1195000/description/df2a151bdd9fdce9b603802f0629f81d.jpg", "/static/img/goodsImage/1195000/description/0bc4ec11ae339e0f97b44a4f5668432d.jpg", "/static/img/goodsImage/1195000/description/b2463a24da08fa783c7e499fc23d9d97.jpg", "/static/img/goodsImage/1195000/description/4c2d099ca24b2220b4e2323aa58fc919.jpg", "/static/img/goodsImage/1195000/description/d426abead511accc7439965b5b3c2757.jpg", "/static/img/goodsImage/1195000/description/7e8e42620a56764485f3d5064e4503b5.jpg", "/static/img/goodsImage/1195000/description/0d3e3ddad23de38f2ba5503f3d57605c.jpg", "/static/img/goodsImage/1195000/description/68271240e37c37c3044919cb26c62542.jpg", "/static/img/goodsImage/1195000/description/c02301d1ea645fb1eb4c694d0e4d684c.jpg", "/static/img/goodsImage/1195000/description/e0ff1503a3484b3a26a031f32c2e5dd6.jpg", "/static/img/goodsImage/1195000/description/9259a58573342a99f54661e197f1a964.jpg", "/static/img/goodsImage/1195000/description/c97451ed264a93c39611274697cd4177.jpg", "/static/img/goodsImage/1195000/description/c9f48e171fd7b8bea777d4f1a233e5a7.jpg", "/static/img/goodsImage/1195000/description/bd2b1466b5d7ef3e8276aed44081b719.jpg", "/static/img/goodsImage/1195000/description/57a2bbdfdd1af8527a5f33e9ac989dbc.jpg", "/static/img/goodsImage/1195000/description/b16993191a275b0cef4408b5c84affdd.jpg", "/static/img/goodsImage/1195000/description/cfafaff609272279aa293100629be7d2.jpg", "/static/img/goodsImage/1195000/description/a722d4b24e762c2c1320e19fd19223df.jpg", "/static/img/goodsImage/1195000/description/7e811e1dd86f7261efcbe1f878051734.jpg", "/static/img/goodsImage/1195000/description/3083b08af1c246e0407910df6c9767c0.jpg", "/static/img/goodsImage/1195000/description/d7e6ceb5aac953af490d9c144d5e6723.jpg", "/static/img/goodsImage/1195000/description/395c0023638f165e15cd1c3347a042c9.jpg", "/static/img/goodsImage/1195000/description/5f25f8bc5fe1b14731086ed36ddb659a.jpg", "/static/img/goodsImage/1195000/description/c5a6f4e08aaa1ae5c939fd268642f369.jpg", "/static/img/goodsImage/1195000/description/f00ac705300fb1b7eb529e9ffcee0c4f.jpg", "/static/img/goodsImage/1195000/description/edacbe21ff2d6036b20cba2f71222d8f.jpg", "/static/img/goodsImage/1195000/description/9905adf7dbb59c9484bcff5ecf067fda.jpg", "/static/img/goodsImage/1195000/description/4b8cdcb412ea016b3137877ad8350b1c.jpg", "/static/img/goodsImage/1195000/description/f46ab4363382c51b38ba865bd48df207.jpg", "/static/img/goodsImage/1195000/description/e6b3f46878885058bdd6e292c18712fa.jpg", "/static/img/goodsImage/1195000/description/cc3a16f8d91f148533c07e1e3963dac2.jpg", "/static/img/goodsImage/1195000/description/3f77b5fe849b0248e9ab060028d3b434.jpg", "/static/img/goodsImage/1195000/description/e269e368b7a30dccc9d553105495cf2a.jpg", "/static/img/goodsImage/1195000/description/18ae3cfc4184f96ad9853520905bd6f5.jpg", "/static/img/goodsImage/1195000/description/ebb951949a991b1bf45279e574510bdf.jpg", "/static/img/goodsImage/1195000/description/f3d150fb3488a3e0f41eaf962ed5a5dd.jpg", "/static/img/goodsImage/1195000/description/8f8594352f4af5ff1ebee742593f7570.jpg", "/static/img/goodsImage/1195000/description/e865e6793a0282e4460bb6e43bcd6447.jpg", "/static/img/goodsImage/1195000/description/04bd60b58fd2d21bf1eb1b4482a64fb8.jpg", "/static/img/goodsImage/1195000/description/144fa9113bed39ba822d04fd9b1c4f24.jpg", "/static/img/goodsImage/1195000/description/a72bc49e55b78ee0f30a255dce2a7d34.jpg", "/static/img/goodsImage/1195000/description/8d0b76783a990ccb8669baa63523fc28.jpg", "/static/img/goodsImage/1195000/description/c153892552a41e48c06b7a3dd99d1b8f.jpg", "/static/img/goodsImage/1195000/description/fe44e925277f7c4a7da588e808fe0419.jpg", "/static/img/goodsImage/1195000/description/5e17750a06d733451586109fd3977aba.jpg", "/static/img/goodsImage/1195000/description/c147fc19798b194b3f157563e697d631.jpg"],
		"inventory": [996],
		"information": [{
			"attrName": "净含量",
			"attrValue": "620克：猪肉脯（原味）150克、黄金脆千层 140克、脆脆虾（原味） 20克、综合果蔬脆 100克、混合果仁（能量超仁） 210克"
		}, {
			"attrName": "保质期",
			"attrValue": "猪肉脯（原味）150克：6个月黄金脆千层 140克：150天脆脆虾（原味） 20克：12个月综合果蔬脆 100克：270天混合果仁（能量超仁） 210克：3个月"
		}, {
			"attrName": "贮存条件",
			"attrValue": "常温、阴凉、通风、干燥"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1、网易严选出售的食品，除明确质量问题外均不接受退换货2、请置于阴凉避光、通风、干燥处3、老人、小孩请在成人监护下进行食用"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 787,
		"date": "1500341189397",
		"category": "饮食",
		"subCategory": "糕点"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1201010,
		"price": 70,
		"topName": "好味集结 零食组合",
		"subName": "人气担当尽管囤",
		"shortDescription": ["甜糯麻薯", "绵软流心", "冻住鲜果", "弹润爽滑", "原味瓜子", "脆爽酥香"],
		"shortDescriptionImage": ["/static/img/goodsImage/1201010/shortdescriptionImage/88d1d464a1e889be9269505f376827af.jpg", "/static/img/goodsImage/1201010/shortdescriptionImage/8cafb6e1f879e6c780fc3828e104b0a6.jpg", "/static/img/goodsImage/1201010/shortdescriptionImage/35863c726ad4e6e1fd1ea8f982f27abb.jpg"],
		"headImage": ["/static/img/goodsImage/1201010/headImage/ea1ec0f10af6a3e99fe4f25fa7579173.png", "/static/img/goodsImage/1201010/headImage/a21b701773393bb25cbe6eabc5df9853.jpg", "/static/img/goodsImage/1201010/headImage/a255f8d1788175efcb176bd9aeb19bc2.jpg", "/static/img/goodsImage/1201010/headImage/f772f397ada3912e392e43e01389bfb2.jpg", "/static/img/goodsImage/1201010/headImage/d2f48adb05445d04a032f4eb7aaa0d50.jpg"],
		"type": ["594克"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1201010/description/2d5a8354392bd525ca30642b4f196f8f.jpg", "/static/img/goodsImage/1201010/description/e234806a78d58ec07f9f5ab7f36c33e8.jpg", "/static/img/goodsImage/1201010/description/ce2a1a3c8b0063601bc9b481f3171851.jpg", "/static/img/goodsImage/1201010/description/ab81396a88b9e43f8518f355b2ec0cf1.jpg", "/static/img/goodsImage/1201010/description/db3b57d1dd11f09b6596556c1a59b1eb.jpg", "/static/img/goodsImage/1201010/description/4cf0f72243e5b5b3cba748106999e301.jpg", "/static/img/goodsImage/1201010/description/908d62ee352957ff0d9b113635da27da.jpg", "/static/img/goodsImage/1201010/description/8a1a8d02ca0447d4498b00ac7b2b1f6d.jpg", "/static/img/goodsImage/1201010/description/87d051e00367695648abae51761140ac.jpg", "/static/img/goodsImage/1201010/description/7a6e94ab16fca031f47fffa3c113f41f.jpg", "/static/img/goodsImage/1201010/description/ec189ddc7305c0bb0541feaf6b9958fd.jpg", "/static/img/goodsImage/1201010/description/ffca1ecc9d4d11ee4ac5f2db65b0510a.jpg", "/static/img/goodsImage/1201010/description/4bd70caa23704426f7fd722a4e163cfc.jpg", "/static/img/goodsImage/1201010/description/2d04ecc4f3e6069fc4aa91ef19ae983d.jpg", "/static/img/goodsImage/1201010/description/c1e58e9e2eeda102d55ea0caea6248f1.jpg", "/static/img/goodsImage/1201010/description/d78088d29fe5859ae332107cf9987f48.jpg", "/static/img/goodsImage/1201010/description/5b0327c1de3af87b7f1c94625882db4b.jpg", "/static/img/goodsImage/1201010/description/509d8582f0a61c3dfc205f65c4dd78ec.jpg", "/static/img/goodsImage/1201010/description/a6bfebbec86547229c8969442680f1ac.jpg", "/static/img/goodsImage/1201010/description/bf48a000149d9de64bf4c10e0e5f935d.jpg", "/static/img/goodsImage/1201010/description/24bf7a6f84402f6104068e303e022e32.jpg", "/static/img/goodsImage/1201010/description/57def717146a8bdeb0ef728d5d84893b.jpg", "/static/img/goodsImage/1201010/description/ed863e8b4813dd1caaf1b15f756e8be2.jpg", "/static/img/goodsImage/1201010/description/c33003a31c5f8570029b24c9aa5dca5a.jpg", "/static/img/goodsImage/1201010/description/613ee29f3ea741027d4b34e2ad240fd4.jpg", "/static/img/goodsImage/1201010/description/066ad8bac6397e07d25449abe35b2bfc.jpg", "/static/img/goodsImage/1201010/description/bd5b6ba68ec4ae5f1d2d47da72463f74.jpg", "/static/img/goodsImage/1201010/description/88634a5be2644e2c5eb00581592d48db.jpg", "/static/img/goodsImage/1201010/description/8114621d971b210685f9e951dd0c559c.jpg", "/static/img/goodsImage/1201010/description/27044e57a1fe54b3e607fb126df2a103.jpg", "/static/img/goodsImage/1201010/description/8ad70779e1490778c3d6210fa3c1c740.jpg", "/static/img/goodsImage/1201010/description/2af87bc6720dc128e60d413aea3c6476.jpg", "/static/img/goodsImage/1201010/description/1e2d48138d128031969619abc762472e.jpg", "/static/img/goodsImage/1201010/description/bf8171b69a9fb25ea4895035b091c9ac.jpg", "/static/img/goodsImage/1201010/description/ee005f1e605f4b7fcd1d9bf4a35765e0.jpg", "/static/img/goodsImage/1201010/description/dcd264fa860c965cc20929a5c228ecd0.jpg", "/static/img/goodsImage/1201010/description/1a90de0a3ac029ca8b719ee47b01a0c0.jpg", "/static/img/goodsImage/1201010/description/675aac3266e6e4e6bae5baebc4681792.jpg", "/static/img/goodsImage/1201010/description/e97cdf9d98c25a166ff9b7e37012822c.jpg", "/static/img/goodsImage/1201010/description/853119b22878493176f2556a0b0aa176.jpg", "/static/img/goodsImage/1201010/description/2022360df36bc538ef619c49735cb5ee.jpg", "/static/img/goodsImage/1201010/description/e05e8b55145162002e4860ea8f0776fb.jpg", "/static/img/goodsImage/1201010/description/9e35190cc937aa424f177cd3e664d1a7.jpg", "/static/img/goodsImage/1201010/description/b076a1da4f6c8d1f5d6c1befeee4be3f.jpg", "/static/img/goodsImage/1201010/description/47d848714cfb97af1a250bd9a9c860cf.jpg", "/static/img/goodsImage/1201010/description/816b0bfdcec293d464a1569e10e1c1af.jpg", "/static/img/goodsImage/1201010/description/144581a2ab482c78ba282bc8ca4bf9c3.jpg", "/static/img/goodsImage/1201010/description/04ff900fb7851949221efa608e4b6d17.jpg", "/static/img/goodsImage/1201010/description/b34df2648276df91307b5ec5e522270f.jpg", "/static/img/goodsImage/1201010/description/c8498bb16f9a090faa8b4c3bd8741f1d.jpg", "/static/img/goodsImage/1201010/description/400de8ac18abe2a2277e04f1152f2a13.jpg", "/static/img/goodsImage/1201010/description/870796e6faad4669763261a3d520480d.jpg", "/static/img/goodsImage/1201010/description/c9e90ce7f394369da3865d4ff0cfc656.jpg", "/static/img/goodsImage/1201010/description/50222471bc844b6e0a77f5e21cd2f9d4.jpg", "/static/img/goodsImage/1201010/description/c0f6575271f850e72d927b623da53521.jpg", "/static/img/goodsImage/1201010/description/8490118fcf557da0e99b6bd0753d8802.jpg", "/static/img/goodsImage/1201010/description/f9ef80bbe5f65ad8da350edebebf4015.jpg", "/static/img/goodsImage/1201010/description/6e63e6999d1dac1dc8eb5e3d188dee77.jpg", "/static/img/goodsImage/1201010/description/8ac97a0a2906c51bb10374487c29f7f0.jpg", "/static/img/goodsImage/1201010/description/67157917cb2ee2aceef3a2606c826f80.jpg", "/static/img/goodsImage/1201010/description/263b552518ee8909600398716a798f62.jpg", "/static/img/goodsImage/1201010/description/1ccf56022778c14882b82648721184f9.jpg", "/static/img/goodsImage/1201010/description/cefaae66b8234cf9e2f208c4065cdcd7.jpg", "/static/img/goodsImage/1201010/description/d4333733a0d558c38292c5550b6a813c.jpg", "/static/img/goodsImage/1201010/description/fa4d15556b2eb9d547e3c673315335dd.jpg", "/static/img/goodsImage/1201010/description/d2f0b92c534660894ce4ab8dfbc417fa.jpg", "/static/img/goodsImage/1201010/description/9c6fbf421f892a0be242d40fcd76bc40.jpg", "/static/img/goodsImage/1201010/description/1e08d3f127d8b65e49405087822bec53.jpg", "/static/img/goodsImage/1201010/description/7cd2fbe44807fea93c8a0fbcc9df1e7f.jpg", "/static/img/goodsImage/1201010/description/c95fd2fa0f4d26b71993f94e41dc7b5d.jpg", "/static/img/goodsImage/1201010/description/ac832ccf657e6430ea2311c04960cb73.jpg", "/static/img/goodsImage/1201010/description/def06327726a527d6aa53f59770f819b.jpg", "/static/img/goodsImage/1201010/description/17337c5efcccb0d099d5c44a64cbe832.jpg", "/static/img/goodsImage/1201010/description/24b078fe66481a294f71ced1630fe30e.jpg", "/static/img/goodsImage/1201010/description/87e492b71be07fcd97653a19a716bca5.jpg", "/static/img/goodsImage/1201010/description/7d7f1a85141a01c1cd4fb72470370454.jpg", "/static/img/goodsImage/1201010/description/76a419a1d8a0b986d3a4d71bc251ada8.jpg", "/static/img/goodsImage/1201010/description/09404436978ddfb2536fe8a81cdb4687.jpg", "/static/img/goodsImage/1201010/description/82c51038ad61635cab8087c03b355cc1.jpg", "/static/img/goodsImage/1201010/description/eb7652e6d1613a21e0cc5799bf89c931.jpg", "/static/img/goodsImage/1201010/description/83096ff2fe287cbc56eabc967b5a4a1b.jpg", "/static/img/goodsImage/1201010/description/fc7a1793ece79e157b8eda763e2c6781.jpg", "/static/img/goodsImage/1201010/description/f6ab41186406b1c2af8bfdd1a40e67ca.jpg", "/static/img/goodsImage/1201010/description/63300f0747396c19d16d7d5f6d9918b2.jpg", "/static/img/goodsImage/1201010/description/2a227cf96a594b98d560fc7859b8f529.jpg", "/static/img/goodsImage/1201010/description/ed828c4de3f8e871737a31134346fe6d.jpg", "/static/img/goodsImage/1201010/description/953245f4c2587c5df1445dc71a1ab565.jpg", "/static/img/goodsImage/1201010/description/e192f6cea4d4369b459f2b8b4e257e43.jpg", "/static/img/goodsImage/1201010/description/123e8a4cac1dda018fc434752d1877e9.jpg", "/static/img/goodsImage/1201010/description/93cf69a48f7e7b22880355ddb801baa3.jpg", "/static/img/goodsImage/1201010/description/302fd48f40a373d23316ddb880571772.jpg", "/static/img/goodsImage/1201010/description/2fce7a906fed402f910db6ff380a3d25.jpg", "/static/img/goodsImage/1201010/description/4cf2fba839003fc9657882a3ba66574f.jpg", "/static/img/goodsImage/1201010/description/9726b9fe8499d8cf724dfe4e4d10f7bc.jpg", "/static/img/goodsImage/1201010/description/5e17feed8dc8c455810b7129bd61795a.jpg", "/static/img/goodsImage/1201010/description/8d90198a1101216de55ae1e334c636ca.jpg", "/static/img/goodsImage/1201010/description/f20775cc0dc79f3b13e12d8eb636b619.jpg", "/static/img/goodsImage/1201010/description/833b5b6d9e33b98043def450ca46565c.jpg", "/static/img/goodsImage/1201010/description/0d642079facd2596d3f79714e237c0b9.jpg"],
		"inventory": [160],
		"information": [{
			"attrName": "净含量",
			"attrValue": "594克月见和菓子棉花糖麻薯184克菠萝鲜果冻 180克原味脆脆虾 20克紫洋葱片 25克原味葵花籽 185克"
		}, {
			"attrName": "贮存条件",
			"attrValue": "常温、阴凉、通风、干燥"
		}, {
			"attrName": "保质期",
			"attrValue": "月见和菓子棉花糖麻薯184克：6个月菠萝鲜果冻 180克：6个月原味脆脆虾 20克：12个月紫洋葱片 25克：9个月原味葵花籽 185克：6个月"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1、网易严选出售的食品，除明确质量问题外均不接受退换货2、请置于阴凉避光、通风、干燥处3、老人、小孩请在成人监护下进行食用"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 863,
		"date": "1500341192900",
		"category": "饮食",
		"subCategory": "小食"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1166002,
		"price": 99,
		"topName": "果蔬脆片大联盟",
		"subName": "果蔬达人、果蔬盛宴",
		"shortDescription": ["拒绝色素", "拒绝香精", "口感酥脆", "无防腐剂", "低温脱水", "保留果味"],
		"shortDescriptionImage": ["/static/img/goodsImage/1166002/shortdescriptionImage/7fd7dfcfa6d564af0b0f0cb4e90a76f7.jpg", "/static/img/goodsImage/1166002/shortdescriptionImage/08b4061defff711d927aea53ac5cd0a4.jpg", "/static/img/goodsImage/1166002/shortdescriptionImage/b9ad5d673e015ca46dffdff31c15001a.jpg"],
		"headImage": ["/static/img/goodsImage/1166002/headImage/56a3dac5a58b1ad0352cc64bd4f5742b.png", "/static/img/goodsImage/1166002/headImage/5d50d08dc0aa0a2525b92fe8fe41b539.jpg", "/static/img/goodsImage/1166002/headImage/cc18404923e5bb19d78d88f2ead88271.jpg", "/static/img/goodsImage/1166002/headImage/5820b384aeb46964f2e2eceade98736e.jpg", "/static/img/goodsImage/1166002/headImage/1fb7ea88e58d8d6997bf48e517670fb7.jpg"],
		"type": ["组合装（苹果脆片1包+香蕉脆片1包+敏豆脆1包+南瓜脆片1包+红枣脆1包+综合水果脆片1包+综合菇菜脆片1包+综合果蔬脆1包）"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1166002/description/7167d7217147c429acb4f6b7c67c30f8.jpg", "/static/img/goodsImage/1166002/description/f3dba235117e631a76d98c0e915f20f8.jpg", "/static/img/goodsImage/1166002/description/95343821f55217ad2d0d13b403d05894.jpg", "/static/img/goodsImage/1166002/description/0c66036be2ea148aebc16394f7cfe68f.jpg", "/static/img/goodsImage/1166002/description/78ca64a0ebcb91a3f09138548a3563e2.jpg", "/static/img/goodsImage/1166002/description/cbc722febec64fb7fb46f2cad7a71346.jpg", "/static/img/goodsImage/1166002/description/12207fa4e782bb7863fe445ff679ab75.jpg", "/static/img/goodsImage/1166002/description/3445f4a9dbf6c3899e04358df2512978.jpg", "/static/img/goodsImage/1166002/description/6deabb912866547700fbe0bd94054a87.jpg", "/static/img/goodsImage/1166002/description/96ee2dd34da70af9a144524557fae9e8.jpg", "/static/img/goodsImage/1166002/description/00d67f0c1ded34c6e29b55dd42c4a7cf.jpg", "/static/img/goodsImage/1166002/description/9003b1e8f67b117e78d33ebc5fc66249.jpg", "/static/img/goodsImage/1166002/description/3f207e89daaa0b9380c3447d69848e80.jpg", "/static/img/goodsImage/1166002/description/6ff0d88d3d20faf963029c1c94dbf8f0.jpg", "/static/img/goodsImage/1166002/description/31376447a5801d68034a018c68fe2cf8.jpg", "/static/img/goodsImage/1166002/description/312fdc857c0bed11ad8a67200f453066.jpg", "/static/img/goodsImage/1166002/description/0c7fb111f66747746133211a2cf68665.jpg", "/static/img/goodsImage/1166002/description/6ed64f000b35a038cf1d1676910b7957.jpg", "/static/img/goodsImage/1166002/description/19c9ababeb7ff2bb83fa1b648ab4da78.jpg", "/static/img/goodsImage/1166002/description/fe90a973e8abe798aca411ead1cd9af1.jpg", "/static/img/goodsImage/1166002/description/e7e3f5e59fd04030ab07b71b7e3d1bc9.jpg", "/static/img/goodsImage/1166002/description/7ce25e994c315468fbdf20a27351db13.jpg", "/static/img/goodsImage/1166002/description/75a89befd8faa7643bae9b12a70c552f.jpg", "/static/img/goodsImage/1166002/description/9fdabc734b30316e6b0cba95f93fe616.jpg", "/static/img/goodsImage/1166002/description/ab5b967b76a204cc9c4c1718193fd5db.jpg", "/static/img/goodsImage/1166002/description/b31949e7dfa55d945651a780fb80001c.jpg", "/static/img/goodsImage/1166002/description/8f976a871474d3a7ca8c9e170c1fbd2a.jpg", "/static/img/goodsImage/1166002/description/fb24a8e72b4c4b36528867b6369d11f4.jpg", "/static/img/goodsImage/1166002/description/d9bc7cd73083113b6b30102b874ae0ca.jpg", "/static/img/goodsImage/1166002/description/b3533027f54f73ef56f27e148f692a2f.jpg", "/static/img/goodsImage/1166002/description/b72c9b253a61de939ffb15c6e01694e8.jpg", "/static/img/goodsImage/1166002/description/b0372ec7cbf25a0cd2cf5ce437aaa795.jpg", "/static/img/goodsImage/1166002/description/b9d6533760be4ddfba655bab7cd0bc29.jpg", "/static/img/goodsImage/1166002/description/183fc0bea1fd6df5ad7e4ced082d8317.jpg", "/static/img/goodsImage/1166002/description/2af386dafa03756f271947fc376f7a9a.jpg", "/static/img/goodsImage/1166002/description/11ddb6e72d5f66ce01e59b52565c60a0.jpg", "/static/img/goodsImage/1166002/description/9e0946ce0d9f2b5468e5d4d72d020bfe.jpg"],
		"inventory": [275],
		"information": [{
			"attrName": "保质期",
			"attrValue": "270天"
		}, {
			"attrName": "净含量",
			"attrValue": "800克"
		}, {
			"attrName": "产地",
			"attrValue": "福建省龙岩市"
		}, {
			"attrName": "贮存条件",
			"attrValue": "常温、阴凉、通风、干燥"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1、网易严选出售的食品，除明确质量问题外均不接受退换货2、请密封避光置于干燥处，开封后请尽快食用，以免影响风味3、老人、小孩请在成人监护下进行食用"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 318,
		"date": "1500341196782",
		"category": "饮食",
		"subCategory": "果干"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1115009,
		"price": 35.8,
		"topName": "黑凤梨 每日坚果(4种坚果+3种果干)",
		"subName": "营养配比，乐享生活",
		"shortDescription": ["七种果仁", "营养搭配", "独立包装", "定量充电", "轻量加工", "无损品质"],
		"shortDescriptionImage": ["/static/img/goodsImage/1115009/shortdescriptionImage/5ce3f9b0f87f8cb20bcb51e5d1a43c43.jpg", "/static/img/goodsImage/1115009/shortdescriptionImage/f6e43fe24f1c69ceb4f8c8431d6d4bc6.jpg", "/static/img/goodsImage/1115009/shortdescriptionImage/8f3c66a621700f3d85d309a17a9f36c7.jpg"],
		"headImage": ["/static/img/goodsImage/1115009/headImage/b02f62d5f8be30ca031d1d4cdb8f5751.png", "/static/img/goodsImage/1115009/headImage/150a5af5551a431b2a0f27e9dac0ace8.jpg", "/static/img/goodsImage/1115009/headImage/b8f1f57a024163628cae47e3e6431af6.jpg", "/static/img/goodsImage/1115009/headImage/3734a8b1637be5c16634bf7dcf6b641f.jpg", "/static/img/goodsImage/1115009/headImage/6400b56b0264ae1a833f2b83083e6c3c.jpg"],
		"type": ["促销组合：买750克装（30袋），送175克装（7袋）", "175克（25克×7袋）"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1115009/description/241f77c0791c4df4a7c231b2830458c2.jpg", "/static/img/goodsImage/1115009/description/898beb56535aaa1720d010aec9542f05.jpg", "/static/img/goodsImage/1115009/description/a86c5701b23919ba70c1e5382d6a599a.jpg", "/static/img/goodsImage/1115009/description/5760699d9c152651f32bfb63b1b06d58.jpg", "/static/img/goodsImage/1115009/description/a0accd0966ca9f6b7935e5433edac50c.jpg", "/static/img/goodsImage/1115009/description/8591b0707064b0a1092bc43e90f9fe46.jpg", "/static/img/goodsImage/1115009/description/d1ce056c978c2eeac66a08509450cdc7.jpg", "/static/img/goodsImage/1115009/description/e436cba3abed0bb28a6b25a1956f6227.jpg", "/static/img/goodsImage/1115009/description/f470e16a5196b7e821265c58ff54695a.jpg", "/static/img/goodsImage/1115009/description/ef4958e6cd067d114b8d33cdda4de3bb.jpg", "/static/img/goodsImage/1115009/description/287420b46a071b81b66500aa7576ae1c.jpg", "/static/img/goodsImage/1115009/description/d2ed37e1a41a37eb97c5dc4d03ed7fa0.jpg", "/static/img/goodsImage/1115009/description/ed2dcb7e71f4480bba47a54c201743a3.jpg", "/static/img/goodsImage/1115009/description/64ec4ab6c9c3aa227f52396ebec3fec7.jpg", "/static/img/goodsImage/1115009/description/327b497e54442768387434bd5baa74be.jpg", "/static/img/goodsImage/1115009/description/52e5a2493cf8dfaf774cb38bc6f1a160.jpg", "/static/img/goodsImage/1115009/description/f6e1ffbc0e30e1c2b56c5b446108bc38.jpg", "/static/img/goodsImage/1115009/description/9d43be7b589744739dec7619758f94f6.jpg", "/static/img/goodsImage/1115009/description/d22e2f4d26b4f88fd7e15e6f103d9788.jpg", "/static/img/goodsImage/1115009/description/5e435899857e0afec75a57b0598ae001.jpg", "/static/img/goodsImage/1115009/description/9eebd4c0d5bc235f769cee677f1d999c.jpg", "/static/img/goodsImage/1115009/description/8507781ed5bd6839f7e6c6fb79571a83.jpg", "/static/img/goodsImage/1115009/description/cedb5136940d6c155fd43ca6ac364aec.jpg", "/static/img/goodsImage/1115009/description/61feb35a65a4423b234fbe8f7d367207.jpg", "/static/img/goodsImage/1115009/description/66c1df1beb93c04613830c3097b2abc2.jpg", "/static/img/goodsImage/1115009/description/325e972de8d1c5dcee71b865ea366fd6.jpg", "/static/img/goodsImage/1115009/description/700c6795cc16347498faa79cfb605e33.jpg", "/static/img/goodsImage/1115009/description/a418e4122747d8a075b824884495b609.jpg", "/static/img/goodsImage/1115009/description/6f48b4d29fc66186c1ae18568ad3d463.jpg", "/static/img/goodsImage/1115009/description/ecaf54aa7eac862db0675459ca5b4d07.jpg", "/static/img/goodsImage/1115009/description/f999b2c1a8bdeaeb2657bdc1914c135b.jpg", "/static/img/goodsImage/1115009/description/fd95e7fd08b28320cc1aa13e50e0d603.jpg", "/static/img/goodsImage/1115009/description/b8cabc234f569aaf747eeaaec0d013c2.jpg", "/static/img/goodsImage/1115009/description/8122e2486e077a38997d840900588ae8.jpg", "/static/img/goodsImage/1115009/description/6d1d494802d7019b11c18f7353756806.jpg", "/static/img/goodsImage/1115009/description/d627a9d8fcaf353d05c343b28dda5070.jpg", "/static/img/goodsImage/1115009/description/ca687fa261be97f0394a759b5dadff68.jpg", "/static/img/goodsImage/1115009/description/35fc01f18fa5465412abca87dca2c947.jpg", "/static/img/goodsImage/1115009/description/c08d82fc37fb4401992e371d18a87b60.jpg", "/static/img/goodsImage/1115009/description/0ee47237b450fc61d2ab03a55e8b56a5.jpg", "/static/img/goodsImage/1115009/description/fd0a72911950a3188617156434c221b6.jpg", "/static/img/goodsImage/1115009/description/a6b955d5c478135c6aaf4e343cd6b0e2.jpg", "/static/img/goodsImage/1115009/description/1625bd8f9ff1b9d39abfd0340f118d77.jpg", "/static/img/goodsImage/1115009/description/2dac69b2213389dac27c4d9a53712059.jpg", "/static/img/goodsImage/1115009/description/ee11f5ddfc410a57dd8c7a1c5febcc60.jpg", "/static/img/goodsImage/1115009/description/d54844789a551d06da62921383c9a298.jpg", "/static/img/goodsImage/1115009/description/ee4c83c0cbbd3a4e242251962d92cb4b.jpg", "/static/img/goodsImage/1115009/description/b039171730f8fb5db7a522369b2f3764.jpg", "/static/img/goodsImage/1115009/description/44053143a4b493af617d0c957ab41e56.jpg", "/static/img/goodsImage/1115009/description/9ebe6fa5c239acf7f0d368f09e0c8aff.jpg", "/static/img/goodsImage/1115009/description/0685ab9c94d1810c82b339d333c51425.jpg", "/static/img/goodsImage/1115009/description/062b03a17f13d088988c43579b418d87.jpg", "/static/img/goodsImage/1115009/description/80af5a3144e01a801542ef0979bccaea.jpg", "/static/img/goodsImage/1115009/description/b6acc965df73f64abaceadf9eba5ae14.jpg", "/static/img/goodsImage/1115009/description/efdada8d3b56c355631bb3ffea794cf8.jpg", "/static/img/goodsImage/1115009/description/13a1f400bd1395113b494af713030677.jpg", "/static/img/goodsImage/1115009/description/11a4158d6aa502f9a7375368874056aa.jpg", "/static/img/goodsImage/1115009/description/ac8c5a588e6ee7850db483beb938eb72.jpg", "/static/img/goodsImage/1115009/description/51948003a4bf35252ee073cb3e1bcd69.jpg", "/static/img/goodsImage/1115009/description/80a4ca6a4ff6392b8f0059dc5598c056.jpg", "/static/img/goodsImage/1115009/description/33f21766c193795f0a3f0c2347747004.jpg"],
		"inventory": [306, 177],
		"information": [{
			"attrName": "配料表",
			"attrValue": "核桃仁、扁桃仁、蔓越莓干、腰果仁、黑加仑、蓝莓干、榛子仁、白砂糖、葵花籽油"
		}, {
			"attrName": "产地",
			"attrValue": "山东潍坊"
		}, {
			"attrName": "保质期",
			"attrValue": "6个月"
		}, {
			"attrName": "储存条件",
			"attrValue": "未开封状态下保存于常温、避光、阴凉干燥处，避免高温、潮湿；开封后宜密闭冷藏，及时食用"
		}, {
			"attrName": "温馨提示",
			"attrValue": "网易严选出售的食品，除明确质量问题外均不接受退换货"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 32,
		"date": "1500341200550",
		"category": "饮食",
		"subCategory": "炒货"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1179003,
		"price": 99,
		"topName": "纯牛奶 12盒*2提",
		"subName": "滴滴香浓，纯粹好奶",
		"shortDescription": ["净白鲜润", "奶香浓醇", "转盘挤奶", "高温灭菌", "利乐包", "真空灌装"],
		"shortDescriptionImage": ["/static/img/goodsImage/1179003/shortdescriptionImage/57c124dd7cf0d1667e699d2eb45fecd8.jpg", "/static/img/goodsImage/1179003/shortdescriptionImage/cd6118524ca3e89815be47d4cd930d81.jpg", "/static/img/goodsImage/1179003/shortdescriptionImage/f82815430a485b408901c3321757e9b7.jpg"],
		"headImage": ["/static/img/goodsImage/1179003/headImage/ffa6422b148850e054cab827394acd80.png", "/static/img/goodsImage/1179003/headImage/aa134c329fad2a70db1312ffcd524e41.jpg", "/static/img/goodsImage/1179003/headImage/ec2b904339004455c8881b1b26ec6294.jpg", "/static/img/goodsImage/1179003/headImage/9ad3f23fd445495fbaa5e5e052caba0d.jpg", "/static/img/goodsImage/1179003/headImage/ef1b121ae7811cacb376b8f6275c9a1e.jpg"],
		"type": ["250ml*12盒*2提"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1179003/description/e6544f8dcb186abb58b5223371b7a107.jpg", "/static/img/goodsImage/1179003/description/8358aff80da1e6045070de1bc50b72bc.jpg", "/static/img/goodsImage/1179003/description/2b3701ac262079ebc30fae16db0e5540.jpg", "/static/img/goodsImage/1179003/description/30bafe72e5ba4fef563609f94d8aeb6f.jpg", "/static/img/goodsImage/1179003/description/dcd04abd12b051f0a87de5979332c739.jpg", "/static/img/goodsImage/1179003/description/31f01ebf06273b503455baaaa050dd40.jpg", "/static/img/goodsImage/1179003/description/892d3caa25b13d8d340004f68ad2f1f3.jpg", "/static/img/goodsImage/1179003/description/ff10dbe4318806c02463d16d066ca2c7.jpg", "/static/img/goodsImage/1179003/description/41d2abce8eea6a5b0538590f7fc24bc9.jpg", "/static/img/goodsImage/1179003/description/4b244dd1568fa173868565a4dcf31d13.jpg", "/static/img/goodsImage/1179003/description/536c8ada523a6812e9a2b6763f0c8c4d.jpg", "/static/img/goodsImage/1179003/description/18e230e23e043aaabd6f66ceae444caf.jpg", "/static/img/goodsImage/1179003/description/ccc0e6aabaf01c445c30ade1068e0553.jpg", "/static/img/goodsImage/1179003/description/25f3ded637cbe35e307ddad94f150ebd.jpg", "/static/img/goodsImage/1179003/description/8f2e559ec2d595050af022ed1c8626e9.jpg", "/static/img/goodsImage/1179003/description/0cf327a040aba1bd1b1b61ee715087bd.jpg", "/static/img/goodsImage/1179003/description/e43284cb9316de43b8e5e24505bc3fbb.jpg", "/static/img/goodsImage/1179003/description/1219d69c868bdc75c727f44abbf18d77.jpg", "/static/img/goodsImage/1179003/description/0ce45e7e6c08092cdb04a0f894c8ec39.jpg", "/static/img/goodsImage/1179003/description/5eb70685c5c56c729040573b9b6a1bd1.jpg", "/static/img/goodsImage/1179003/description/b9270581227f0707b8f83f7fbc39ede1.jpg", "/static/img/goodsImage/1179003/description/a90c369052ee08930efe2b49d6152b5c.jpg", "/static/img/goodsImage/1179003/description/e4382acb3170bf418469dc6156956343.jpg", "/static/img/goodsImage/1179003/description/c9eb1eedb980ce7222b4c38d105dbc2c.jpg", "/static/img/goodsImage/1179003/description/d69e4f4a149e6b03875da3c07de1517c.jpg", "/static/img/goodsImage/1179003/description/2654ddb168400f480816d2da6bdf048a.jpg", "/static/img/goodsImage/1179003/description/a5e5c6dcf54b50dac7bc37923aca17c1.jpg", "/static/img/goodsImage/1179003/description/dd319201189028feb235f67fb54348f9.jpg", "/static/img/goodsImage/1179003/description/8fd3f534af6341c94ac1084b4d89f4a5.jpg", "/static/img/goodsImage/1179003/description/42f8e7466264b91df04720cee2dc3d83.jpg", "/static/img/goodsImage/1179003/description/487f8ca2c6c6067a25d4ac82036fbf9f.jpg", "/static/img/goodsImage/1179003/description/c4f01bc7649f44bb1b27cbf09399862e.jpg", "/static/img/goodsImage/1179003/description/7dd6d7c273d57c0c5f3b673e52b931dd.jpg", "/static/img/goodsImage/1179003/description/8947713ca9ee6c8324c2fef44d049eb4.jpg", "/static/img/goodsImage/1179003/description/5e62ad015c7df535c32b7029106e5f65.jpg", "/static/img/goodsImage/1179003/description/1ab77793e0861f9ce397eb731ea743fb.jpg", "/static/img/goodsImage/1179003/description/743f8ac7526db1e364d63021c9efbda5.jpg", "/static/img/goodsImage/1179003/description/1eb57f1cde487f241a8ff9172cc08d67.jpg", "/static/img/goodsImage/1179003/description/dc0a2d71d6299c3b3853e5fa67530301.jpg", "/static/img/goodsImage/1179003/description/5ee044b28113516a0a38641063d72b1b.jpg", "/static/img/goodsImage/1179003/description/c9184e1aa98896926d9d4aaa17f8c88c.jpg", "/static/img/goodsImage/1179003/description/48f181826267ff2e1722a20a76eeef39.jpg", "/static/img/goodsImage/1179003/description/ea3990c28de7115a2ebc23a4ed54c99b.jpg", "/static/img/goodsImage/1179003/description/8e1aca98a094928601edae1da951edf6.jpg", "/static/img/goodsImage/1179003/description/c9e4ae520d03fcdaa4cd1e478a7497ef.jpg", "/static/img/goodsImage/1179003/description/7cf0a1c2c0e76e9c5f6aceba1f3114ea.jpg", "/static/img/goodsImage/1179003/description/20c553db58f456517ab0e4ce9f582bab.jpg", "/static/img/goodsImage/1179003/description/b189a95771f49c020cd687240833f0b1.jpg", "/static/img/goodsImage/1179003/description/6874968846273610d167fe438ea3d9c4.jpg", "/static/img/goodsImage/1179003/description/b6ec6705c370dbc565bd34d53a0f4dde.jpg", "/static/img/goodsImage/1179003/description/acf3531fe379aa08fd89aa858a39cf91.jpg", "/static/img/goodsImage/1179003/description/a207124d731e83e8ac37869976287f99.jpg", "/static/img/goodsImage/1179003/description/95241045d33ece27ebad4b087cdbc3d4.jpg", "/static/img/goodsImage/1179003/description/0641f179dbed7bd8fda74d6326e9468c.jpg", "/static/img/goodsImage/1179003/description/f2f99525872c86ae6122450c35ca0c6a.jpg", "/static/img/goodsImage/1179003/description/60904889b4cc209d984cc6bd425f12f1.jpg", "/static/img/goodsImage/1179003/description/7a2364a64c2276947822ef7509ae41cd.jpg", "/static/img/goodsImage/1179003/description/88ad0bd0e5541f9abed2fac216e7f041.jpg", "/static/img/goodsImage/1179003/description/ce9c377ef30f33a9b3455f002ad76193.jpg", "/static/img/goodsImage/1179003/description/3191a5ef14642966a1098a388146c4a3.jpg"],
		"inventory": [844],
		"information": [{
			"attrName": "配料",
			"attrValue": "生牛乳"
		}, {
			"attrName": "净含量",
			"attrValue": "250ml*12盒*2提"
		}, {
			"attrName": "产地",
			"attrValue": "山东省德州市"
		}, {
			"attrName": "保质期",
			"attrValue": "180天"
		}, {
			"attrName": "贮存条件",
			"attrValue": "常温避光保存"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1、网易严选出售的食品，除明确质量问题外均不接受退换货2、本商品默认物流为德邦物流，暂不配送港澳台、新疆、西藏、内蒙古、海南各地"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 614,
		"date": "1500341204306",
		"category": "饮食",
		"subCategory": "冲饮"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1152177,
		"price": 198,
		"topName": "黑凤梨 陈皮滇红 130克",
		"subName": "鲜爽滇红初遇柑香陈皮",
		"shortDescription": ["叶底鲜嫩", "汤带金圈", "资深茶师", "古法制茶", "严选资质", "品质保障"],
		"shortDescriptionImage": ["/static/img/goodsImage/1152177/shortdescriptionImage/ada4ebffc44f804c4a26cc0bafff949c.png", "/static/img/goodsImage/1152177/shortdescriptionImage/5a9983392e7add8c23edf458879c222f.png", "/static/img/goodsImage/1152177/shortdescriptionImage/16442bb9c9fa0603cf5c6f3257a4facf.png"],
		"headImage": ["/static/img/goodsImage/1152177/headImage/ac0bd2991ece8fa42ba82b53c35b1c01.png", "/static/img/goodsImage/1152177/headImage/9d03c587b925860d7d899cccfe6b5f5b.jpg", "/static/img/goodsImage/1152177/headImage/ef9f14ff2f5c179cfbcc63f8329b3eee.jpg", "/static/img/goodsImage/1152177/headImage/40a2f54e8191e6950255cc4d675985e0.jpg", "/static/img/goodsImage/1152177/headImage/c5286cfdcaa0be7125ab6cbd45c98bd9.jpg"],
		"type": ["130克（5克*26袋）"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1152177/description/e8edff07a6c5d606093f38999700f77d.jpg", "/static/img/goodsImage/1152177/description/2283a8307c1ac625b86b61b130c8c99f.jpg", "/static/img/goodsImage/1152177/description/86d9e56283e6c5194697fe9a95e00ef2.jpg", "/static/img/goodsImage/1152177/description/0341c92e207347c087f629e64f0145f5.jpg", "/static/img/goodsImage/1152177/description/bb371b3524060023561c77d4912a1098.jpg", "/static/img/goodsImage/1152177/description/3a8898059c899898ad19812f0006829a.jpg", "/static/img/goodsImage/1152177/description/8122576c86ebcee614f6bd3106c6b00d.jpg", "/static/img/goodsImage/1152177/description/c211eb33b13195f49b90239269419a43.jpg", "/static/img/goodsImage/1152177/description/249a95e9c9684032080c15f8d45bb117.jpg", "/static/img/goodsImage/1152177/description/adf84b7fec1666df6949037e6d54faaa.jpg", "/static/img/goodsImage/1152177/description/56d51652b9b92b1c8f8f3fdc333909a2.jpg", "/static/img/goodsImage/1152177/description/1105fedc40712a4536b6584c37aca07c.jpg", "/static/img/goodsImage/1152177/description/e054f90e1e570995711efa1dfb64c43e.jpg", "/static/img/goodsImage/1152177/description/d3feacf260670a78cfdb946dfd7472f1.jpg", "/static/img/goodsImage/1152177/description/74e951b2aa3c4a8b262ec314d7f80ed2.jpg", "/static/img/goodsImage/1152177/description/74d762b18b31e13c31b14b6a3c2001c7.jpg", "/static/img/goodsImage/1152177/description/28c7435bfb75e376e34b1049d458f3ff.jpg", "/static/img/goodsImage/1152177/description/a2dec6e090b1215e8825d1eb567fea10.jpg", "/static/img/goodsImage/1152177/description/dfed9f5ec0445761c1bd5305bb7d03b9.jpg", "/static/img/goodsImage/1152177/description/061c0fc69eec3e88fde39428b42f241b.jpg", "/static/img/goodsImage/1152177/description/1d6ccb8fbf465d1ccd3e8da2af3f2c66.jpg", "/static/img/goodsImage/1152177/description/35c39ed04288aa0489c90a4fda71b22a.jpg", "/static/img/goodsImage/1152177/description/2a89d97e1bbf9365423a5e7bdb729756.jpg", "/static/img/goodsImage/1152177/description/310dd433119351f9397a5fba3133a1b1.jpg", "/static/img/goodsImage/1152177/description/78612689f9b417a34de0c623ae92bd26.jpg", "/static/img/goodsImage/1152177/description/af23f3e60db0a246398c53c1e9a2baa1.jpg", "/static/img/goodsImage/1152177/description/de2ecdff3283e25c7a59db824331f444.jpg", "/static/img/goodsImage/1152177/description/15a51627431b51e4a925b9568a49bbc9.jpg", "/static/img/goodsImage/1152177/description/baf2045ec75b5172906806e22ab99edf.jpg", "/static/img/goodsImage/1152177/description/aad528aeb9865be8b0375ec2bd357a1b.jpg", "/static/img/goodsImage/1152177/description/fe9bdbf03f4e9fe9ae922a427ea44005.jpg", "/static/img/goodsImage/1152177/description/81dc6e0e1c63616a549f435116d28374.jpg", "/static/img/goodsImage/1152177/description/d5eb8cd20de882139dfdda65a28c59b7.jpg", "/static/img/goodsImage/1152177/description/92790c571c3b3219264b5162e65ad3d0.jpg", "/static/img/goodsImage/1152177/description/126f8f4fad97c04ab6f2f99ddcba3400.jpg", "/static/img/goodsImage/1152177/description/2bfcccda1a564ae6065a23a9dfb6720c.jpg", "/static/img/goodsImage/1152177/description/247c93dcbac8c750a0778dc37a1c414d.jpg", "/static/img/goodsImage/1152177/description/d893518dffcf935313bd0865f7a82437.jpg", "/static/img/goodsImage/1152177/description/69b7d5f8764ed92827d236f2711d967a.jpg", "/static/img/goodsImage/1152177/description/3d04eda7fae7603e9aff1962ee1310f3.jpg", "/static/img/goodsImage/1152177/description/e74d2e5bea4475adf260dc81f9e895ba.jpg", "/static/img/goodsImage/1152177/description/17a914d9c0311186174d635d33cd9137.jpg", "/static/img/goodsImage/1152177/description/aa57ec798657aaad4c58facdabca136e.jpg", "/static/img/goodsImage/1152177/description/2d00bda5841cd18d020f184cedc287cd.jpg", "/static/img/goodsImage/1152177/description/5580d0d33e569baa597030a57916c86b.jpg", "/static/img/goodsImage/1152177/description/c1d1e1f8a1af0e0ba0a998cf2f0e9fba.jpg", "/static/img/goodsImage/1152177/description/047729e7ef2d07859426650e10db6b3e.jpg", "/static/img/goodsImage/1152177/description/3c24f1d188e56e4bed2f3ff15ab33294.jpg", "/static/img/goodsImage/1152177/description/93d53b638a048ba40f8b6fb5c288cdc2.jpg", "/static/img/goodsImage/1152177/description/491a95e05f7f2c0adac2a6caf4c33d2f.jpg", "/static/img/goodsImage/1152177/description/2ebe97227d59d532da5e5c34343d1c4f.jpg", "/static/img/goodsImage/1152177/description/56a423906904df2c2225f3f5460ec8aa.jpg", "/static/img/goodsImage/1152177/description/462be4e00719198da5ca8cb3d505dcef.jpg", "/static/img/goodsImage/1152177/description/f763d2136198601ea780d13acd854ab6.jpg", "/static/img/goodsImage/1152177/description/25c2951d1be64b2ac57defe92794b05d.jpg", "/static/img/goodsImage/1152177/description/0c4f665253de3be62790106040bb3143.jpg", "/static/img/goodsImage/1152177/description/42a5377bfaaec544183e6a7f5620a3ac.jpg", "/static/img/goodsImage/1152177/description/a3f60fba8bb85a34868a2f1bf8e44748.jpg", "/static/img/goodsImage/1152177/description/7ac563828b809aa09a2cd5785f96a631.jpg", "/static/img/goodsImage/1152177/description/05800b44087ee215a55b49f00a4031be.jpg", "/static/img/goodsImage/1152177/description/07db344259524370f2b591c3576132f9.jpg", "/static/img/goodsImage/1152177/description/32133282548c07eb8958c3597f699be9.jpg", "/static/img/goodsImage/1152177/description/a98ef5b3cb0c57f580f6a8dfc5fa7270.jpg", "/static/img/goodsImage/1152177/description/4f1d0c90eb22511ae4df8f30f4105003.jpg", "/static/img/goodsImage/1152177/description/a31d4e7592e9ed969aa56ace3ce156dd.jpg", "/static/img/goodsImage/1152177/description/dd10f2fbdfbfa3a3184110485ef1427a.jpg", "/static/img/goodsImage/1152177/description/2cc8a75eaf2de779104c9bc5d1e3b421.jpg", "/static/img/goodsImage/1152177/description/4bf3db532e5afd6be8d9e693a196220f.jpg", "/static/img/goodsImage/1152177/description/edf680153e9a890294d4bbb229641d42.jpg", "/static/img/goodsImage/1152177/description/774037e6165b65feb1f8bb03157523c6.jpg", "/static/img/goodsImage/1152177/description/eb729a0574f33635e886baa1c05f387a.jpg", "/static/img/goodsImage/1152177/description/46921e4a09a81ae909ed2840e0ffb990.jpg", "/static/img/goodsImage/1152177/description/78b3d8c63e67131ef4eff68df844037c.jpg", "/static/img/goodsImage/1152177/description/fd1ef525ba835ed306cc832b3d488651.jpg", "/static/img/goodsImage/1152177/description/be35f9e5fcbe1c5b86e32fc77e1c8bea.jpg", "/static/img/goodsImage/1152177/description/b15cc3c357169523615c9ebea702c496.jpg", "/static/img/goodsImage/1152177/description/ce8552fc3cc23898e5d751455f38378c.jpg", "/static/img/goodsImage/1152177/description/943d9b5309808bc2ad7da5db5919b4b1.jpg", "/static/img/goodsImage/1152177/description/4a4be1e0a08a640b694b5d5a97771045.jpg", "/static/img/goodsImage/1152177/description/2e2b4fb25067348cf153d87ec328c7e4.jpg", "/static/img/goodsImage/1152177/description/b9f28595ba38cf28bd2f2cd315518622.jpg", "/static/img/goodsImage/1152177/description/fecad4078f353822e497624475c12833.jpg", "/static/img/goodsImage/1152177/description/e1c8f546d7a1e5d506f1944597897ef0.jpg", "/static/img/goodsImage/1152177/description/21c7a9833aa52217593ccf03b9088bf6.jpg", "/static/img/goodsImage/1152177/description/6eb96bb377f7c771b7c80a2d9bb34582.jpg", "/static/img/goodsImage/1152177/description/e6a6d9389c69ef35b899d154ba03f37a.jpg", "/static/img/goodsImage/1152177/description/fc2b501616129a23291cf7b199e7f9ad.jpg", "/static/img/goodsImage/1152177/description/3b42b11b1cb893b6561cb1179653f4b7.jpg", "/static/img/goodsImage/1152177/description/f6f8b036555e0491c13c5709dc8c5b59.jpg", "/static/img/goodsImage/1152177/description/dffcdd07cc1cd3e6b931575bb230f04a.jpg"],
		"inventory": [711],
		"information": [{
			"attrName": "净含量",
			"attrValue": "130克（5克*26袋）"
		}, {
			"attrName": "产地",
			"attrValue": "广东省江门市"
		}, {
			"attrName": "配料表",
			"attrValue": "云南大叶种晒青毛茶、新会陈皮"
		}, {
			"attrName": "保质期",
			"attrValue": "3年"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1、网易严选出售的食品，除明确质量问题外均不接受退换货"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 209,
		"date": "1500341209804",
		"category": "饮食",
		"subCategory": "茗茶"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1194007,
		"price": 98,
		"topName": "黑凤梨 盱眙小龙虾 7-9钱/只",
		"subName": "头小身大，饱满肥嫩",
		"shortDescription": ["克重近两", "只只壮实", "腮腹白净", "紧致弹牙", "覆膜包装", "一煮即食"],
		"shortDescriptionImage": ["/static/img/goodsImage/1194007/shortdescriptionImage/fc89c428fc09015a77bfbe22f214803c.png", "/static/img/goodsImage/1194007/shortdescriptionImage/927b23a59df2d4830592debccd881cb6.png", "/static/img/goodsImage/1194007/shortdescriptionImage/4770381784cff2bc012b0fed827a8c60.png"],
		"headImage": ["/static/img/goodsImage/1194007/headImage/fb4d93a48c9b3ab6d079e0fd2bedf872.png", "/static/img/goodsImage/1194007/headImage/8cf933aac0712c883af1dc47c18c55bc.jpg", "/static/img/goodsImage/1194007/headImage/9e99a990da2c74544edef95db6d8877b.jpg", "/static/img/goodsImage/1194007/headImage/ac28f9ee71969da738bbb4f56fbfcc59.jpg", "/static/img/goodsImage/1194007/headImage/33763d712b25736bd92f1a12a689de7d.jpg"],
		"type": ["麻辣（1.5千克）", "十三香（1.5千克）", "麻辣（1.5千克）*2盒", "十三香（1.5千克）*2盒"],
		"chara": "4色可选",
		"description": ["/static/img/goodsImage/1194007/description/c76078a9dc2d065df7d064d58cba9503.jpg", "/static/img/goodsImage/1194007/description/a6b267e8d4d8040d83374e07830df8e1.jpg", "/static/img/goodsImage/1194007/description/ba2c3b19ac6fe3e1bdcc0cd6271b2124.jpg", "/static/img/goodsImage/1194007/description/808fa5009ef39aaf8bc9d2972ad0f6d0.jpg", "/static/img/goodsImage/1194007/description/fea2d3b0ac09def5c2b71b772799dc30.jpg", "/static/img/goodsImage/1194007/description/5c9425cccbac73e2597bdf15e0933355.jpg", "/static/img/goodsImage/1194007/description/639117de3a4c262d7f6e5ff0bc67aeeb.jpg", "/static/img/goodsImage/1194007/description/4f5b9e9c4babad826d564de7852bb7a5.jpg", "/static/img/goodsImage/1194007/description/16fb09f2ad5c51f25c689f70f3d7672b.jpg", "/static/img/goodsImage/1194007/description/e040f92cce8f2a26dd224af8c0fe625f.jpg", "/static/img/goodsImage/1194007/description/51e691f0fa6f96d6d8a9d81d3e881b6a.jpg", "/static/img/goodsImage/1194007/description/837ba40fa6077b14c79a7e87a7bdd40d.jpg", "/static/img/goodsImage/1194007/description/b0c500eb58bc5db260653f1237ba65b9.jpg", "/static/img/goodsImage/1194007/description/6c4698c344f1dad0e757cb73ef193b7c.jpg", "/static/img/goodsImage/1194007/description/02e387e8664dacdd904a89ca920caf92.jpg", "/static/img/goodsImage/1194007/description/ed939198d902c450f2775850c9eb88b0.jpg", "/static/img/goodsImage/1194007/description/322b68a8ad4215e05f317ef6185231b2.jpg", "/static/img/goodsImage/1194007/description/73823ce89050d8f6168e6ba3425207ea.jpg", "/static/img/goodsImage/1194007/description/25df0c35423c31f8fd9b15be77e7a329.jpg", "/static/img/goodsImage/1194007/description/5ac7e9309a61f5e3072a01ce56c66166.jpg", "/static/img/goodsImage/1194007/description/861a310d303a82b970df1774706964f0.jpg", "/static/img/goodsImage/1194007/description/5ae29c97b2a04736e1c07b38bb8aba27.jpg", "/static/img/goodsImage/1194007/description/8e44af0718335a6cb27bbcc7268e6daf.jpg", "/static/img/goodsImage/1194007/description/86de5b9734ad5af4f3ab7b8f2e5010bf.jpg", "/static/img/goodsImage/1194007/description/4b55346b52075a1adc1fa1b084db3bb2.jpg", "/static/img/goodsImage/1194007/description/66368e9e6ac4011177f466dd2cd2de48.jpg", "/static/img/goodsImage/1194007/description/75b3e7d220a045e1802cda97a51f1bd6.jpg", "/static/img/goodsImage/1194007/description/e49d182cc6556a0516eb49e4c0c935e7.jpg", "/static/img/goodsImage/1194007/description/da4d2b47e9ab781f7ac0a72c2aef215a.jpg", "/static/img/goodsImage/1194007/description/2858c3bbf0a9fcab59f53019c35326cb.jpg", "/static/img/goodsImage/1194007/description/7067a0ff8363788fb4dc9df0ff423aa6.jpg", "/static/img/goodsImage/1194007/description/317c244d582f51b8eafd02cf29c73e21.jpg", "/static/img/goodsImage/1194007/description/69b6c9a13a11804ccc159bc872251906.jpg", "/static/img/goodsImage/1194007/description/2f1eeea52bfff2f67fa250532aa86aad.jpg", "/static/img/goodsImage/1194007/description/bb47fc276dda1a19038b9ffe5678d55e.jpg", "/static/img/goodsImage/1194007/description/a3bf1a314478c86dfe6fd053b0286e89.jpg", "/static/img/goodsImage/1194007/description/89714b8a19047fc4bdf7fa0ec3790602.jpg", "/static/img/goodsImage/1194007/description/d18b0aef5d69576e7def05d274d59ad5.jpg", "/static/img/goodsImage/1194007/description/bbb5071428a4414c35d5b4c2c17fbfbb.jpg", "/static/img/goodsImage/1194007/description/94df815b35df2a94e481181920109c04.jpg", "/static/img/goodsImage/1194007/description/4e9d01be6c41b9c03e2d9a586d5c8334.jpg", "/static/img/goodsImage/1194007/description/df4f9a0bfc45ada4f02805cdbdcaf846.jpg", "/static/img/goodsImage/1194007/description/a3fcd85ade93849f69c713207e3085c7.jpg", "/static/img/goodsImage/1194007/description/e6fb42267add216e3bccd76cb998baaa.jpg", "/static/img/goodsImage/1194007/description/17e9fa5ee76c8d835bdb16c20e4a1bb0.jpg", "/static/img/goodsImage/1194007/description/9fb0b7352f73b384c944f9accb99cc61.jpg", "/static/img/goodsImage/1194007/description/3f7a8625b4a3dfb71201d9e0dac5dfe5.jpg", "/static/img/goodsImage/1194007/description/c9b62281482274215d973d282ce07f3a.jpg", "/static/img/goodsImage/1194007/description/2282d57e13b4ba22f82a96630ad30ddb.jpg", "/static/img/goodsImage/1194007/description/66065a39223b52c6cb1dd544f472c84b.jpg", "/static/img/goodsImage/1194007/description/acb661a811ec6cb5f186c7a4fe17c056.jpg", "/static/img/goodsImage/1194007/description/f7b9e89ba5fc196d6da7887b30af3f41.jpg", "/static/img/goodsImage/1194007/description/a0b94d1af263a46192981a99595c4176.jpg", "/static/img/goodsImage/1194007/description/eeae5a5aa9f088f64aaaec508a07bace.jpg", "/static/img/goodsImage/1194007/description/50ed3f3c40e5bc3c5c239e077f771341.jpg", "/static/img/goodsImage/1194007/description/999f92d37a7c4eca0e6682808a8be559.jpg", "/static/img/goodsImage/1194007/description/71936584003c910333365b423ce0c703.jpg", "/static/img/goodsImage/1194007/description/b8f0adcdae7ab4bde5d684afe9e50074.jpg", "/static/img/goodsImage/1194007/description/c718d93e5beb7fb1ec77aeb78c031c23.jpg", "/static/img/goodsImage/1194007/description/7f47ba8ba6c783efde039c0d2abf6c31.jpg", "/static/img/goodsImage/1194007/description/aa9371025dd765a3e2a56f106e9e73bc.jpg", "/static/img/goodsImage/1194007/description/71f9d5642baa17f1408eabb900f620a6.jpg", "/static/img/goodsImage/1194007/description/ccc7e805f5a44f5d55294ae6c757f292.jpg", "/static/img/goodsImage/1194007/description/16b2deb422c6fac58e2c6afa0d00afca.jpg", "/static/img/goodsImage/1194007/description/8764f529058151d6534cf56e49dcc4af.jpg", "/static/img/goodsImage/1194007/description/ad35fec578295e9d88302f708c72c451.jpg", "/static/img/goodsImage/1194007/description/40b62388f43b494f7ca08b0513d674b2.jpg", "/static/img/goodsImage/1194007/description/6e4d2ea322613e3b55a4ffcc4d57edc6.jpg", "/static/img/goodsImage/1194007/description/f1a4d19b91d0b26d93165ee30895dc78.jpg", "/static/img/goodsImage/1194007/description/b74e4afde79ae579b1ca419b1f587608.jpg", "/static/img/goodsImage/1194007/description/f6349bbf48dfd58008985b490193ed86.jpg", "/static/img/goodsImage/1194007/description/7131ccc0e39ffe7fc008d60623a3023d.jpg", "/static/img/goodsImage/1194007/description/a734a987bc2cddf47561cd8bb97c4db0.jpg", "/static/img/goodsImage/1194007/description/ad5220b000e0656f6782405dd1bf0197.jpg", "/static/img/goodsImage/1194007/description/5df0c8e8ba542286a282b25a30ffba46.jpg", "/static/img/goodsImage/1194007/description/850dd2060f092530c273bad2af2bb8e0.jpg", "/static/img/goodsImage/1194007/description/13eadca03128c2383ea9188d54f570a2.jpg", "/static/img/goodsImage/1194007/description/4de519e9a98d16fc5b6c8a23e1ab374e.jpg", "/static/img/goodsImage/1194007/description/90be3eb2790245828d3a960add7e6346.jpg", "/static/img/goodsImage/1194007/description/3b27cd5612f1560c3023471bbea64e69.jpg", "/static/img/goodsImage/1194007/description/cdca584ebfc780f5be84324407e0453f.jpg", "/static/img/goodsImage/1194007/description/61696c73484af7d82ea03f4467f4e3fd.jpg", "/static/img/goodsImage/1194007/description/2c0a76a7c8dac8e2e4026de3f8f01797.jpg", "/static/img/goodsImage/1194007/description/e1f942075360d49315ef4b7db375f98f.jpg", "/static/img/goodsImage/1194007/description/56b979a19aabd1d9090b15fce96fedc7.jpg", "/static/img/goodsImage/1194007/description/7d1034be3dab0e5dc1e1425611192f7e.jpg", "/static/img/goodsImage/1194007/description/c005c575cf393aee101abe776318e907.jpg", "/static/img/goodsImage/1194007/description/5ead2486f576f2d4569c6c2eb3a30c15.jpg", "/static/img/goodsImage/1194007/description/6cba112332f36b194bb16d2d49cbd9a8.jpg", "/static/img/goodsImage/1194007/description/c780e0f32ab5db9aff0367e8f97ccd00.jpg", "/static/img/goodsImage/1194007/description/96d1f30a3c4f49bca417bbd2fbffdc2b.jpg", "/static/img/goodsImage/1194007/description/e2a542750f2482a0cc157291b05647be.jpg", "/static/img/goodsImage/1194007/description/de28440b848c9da63ef961f4808fd40a.jpg", "/static/img/goodsImage/1194007/description/7857e74f9262f9888cd545d6d98ed500.jpg", "/static/img/goodsImage/1194007/description/b488371a7592a9ed0758c2ba9e8f003c.jpg", "/static/img/goodsImage/1194007/description/0bb6a78f6b59ab473dce94e9af5feb5b.jpg", "/static/img/goodsImage/1194007/description/d71223274e125bf68fd1aeb5ce22bed5.jpg", "/static/img/goodsImage/1194007/description/d2e41b78a15e188bbbd4f7fa9f452fb0.jpg", "/static/img/goodsImage/1194007/description/75e4fbba774c5b5f74b4964e662b2da8.jpg"],
		"inventory": [332, 749, 713, 685],
		"information": [{
			"attrName": "配料表",
			"attrValue": "十三香：淡水龙虾、饮用水、食用植物油、豆瓣酱、食用盐、白砂糖、辣椒粉、花椒、料酒、葱、姜、味精、陈皮、白芷、香辛料（八角、小茴香、高良姜、肉桂、丁香、肉豆蔻、砂仁、荜拨、草果、甘草、孜然、香茅、月桂叶）麻辣：淡水龙虾、饮用水、食用植物油、豆瓣酱、食用盐、白砂糖、花椒、辣椒粉、料酒、葱、姜、味精、陈皮、白芷"
		}, {
			"attrName": "净含量",
			"attrValue": "1.5千克（净虾750克） 7-9钱/只 约17-22只（配套冰袋、桌布、一次性手套）"
		}, {
			"attrName": "保质期",
			"attrValue": "12个月"
		}, {
			"attrName": "产地",
			"attrValue": "江苏省淮安市"
		}, {
			"attrName": "贮存条件",
			"attrValue": "零下18摄氏度保存"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1、本品除明确质量问题外，不支持30天无忧退货；不支持无理由拒收；破损理赔需在签收1天内反馈；2、为保证龙虾紧致弹润的口感，常温自然解冻最佳，切忌热水快速解冻，不宜微波加热；3、一次食用完毕，不宜二次加热；4、虾钳、虾壳坚硬，儿童、老人请在监护下食用；5、虾腮、虾肠、虾壳切勿食用；6、港、澳、台、西藏、新疆、青海、云南、海南、内蒙古等偏远地区及顺丰配送不到的乡、县、镇等地区不发货，请勿拍。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 620,
		"date": "1500341212931",
		"category": "饮食",
		"subCategory": "肉制品"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1135059,
		"price": 30,
		"topName": "手工八年老陈醋（酿造食醋） 500ml",
		"subName": "地道醇香，醋酸浓郁",
		"shortDescription": ["高粱纯酿", "精制好醋", "拒绝色素", "无添加剂", "五道工序", "匠心窨制"],
		"shortDescriptionImage": ["/static/img/goodsImage/1135059/shortdescriptionImage/eb8f9f622d9cde2b123e5b7f5bc7c4f8.png", "/static/img/goodsImage/1135059/shortdescriptionImage/141f7989d91588752b950798cc388f67.png", "/static/img/goodsImage/1135059/shortdescriptionImage/92b40110907e91df5c50ee6acffba8d9.png"],
		"headImage": ["/static/img/goodsImage/1135059/headImage/0411ed0251d1431252d21d1badd92adc.png", "/static/img/goodsImage/1135059/headImage/c52eb60545baa6430a6fc53a79624f0f.jpg", "/static/img/goodsImage/1135059/headImage/c1a9d2a20cfc9886b79fe52f2506757c.jpg", "/static/img/goodsImage/1135059/headImage/b3231876f4dc651903a6d5ed095af8e6.jpg", "/static/img/goodsImage/1135059/headImage/17bf11cad1ff676535fcf71cc18844fd.jpg"],
		"type": ["500ML"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1135059/description/e53d86952455c79ef5d0456aba9343a2.jpg", "/static/img/goodsImage/1135059/description/caec240ac5c496243c1878440038cbf2.jpg", "/static/img/goodsImage/1135059/description/b4c951033af4d1736eb701d4eecff126.jpg", "/static/img/goodsImage/1135059/description/410187adc628d014295bedb199063dde.jpg", "/static/img/goodsImage/1135059/description/06b52ab0d3378f2172210e53cb7aea97.jpg", "/static/img/goodsImage/1135059/description/2518d8c70f18264209c7b5fda1922242.jpg", "/static/img/goodsImage/1135059/description/673673d3d15f71c6517252f7fb62aec0.jpg", "/static/img/goodsImage/1135059/description/cfd0b3e45ea4af80316c4b3aaa8e2797.jpg", "/static/img/goodsImage/1135059/description/96742fac31cd649bb1cdb4cfb4542cc6.jpg", "/static/img/goodsImage/1135059/description/f810444c444777fe8e8eca44f4d6beb8.jpg", "/static/img/goodsImage/1135059/description/64869067b46dde87a6afcbcc30c1a106.jpg", "/static/img/goodsImage/1135059/description/d5bc350f90d99d9775ac78f3ec16f534.jpg", "/static/img/goodsImage/1135059/description/4b0e29aad46a7b0dfedca12945960ad6.jpg", "/static/img/goodsImage/1135059/description/2a50bf414d59bdf355d2e4275680b86d.jpg", "/static/img/goodsImage/1135059/description/4753e3c2e36a33511066e3d053fcec41.jpg", "/static/img/goodsImage/1135059/description/48ac4c5305040ec1052c949acb174884.jpg", "/static/img/goodsImage/1135059/description/0438c1a2d16390c0f298ce4e5fa4dd32.jpg", "/static/img/goodsImage/1135059/description/0a6f7c2a7dc4c24d9e46be6f5142dff0.jpg", "/static/img/goodsImage/1135059/description/60525dd1dbccd11b1ceb4685026f0b86.jpg", "/static/img/goodsImage/1135059/description/d78bedfe65e24d57f7a10e5088600f1f.jpg", "/static/img/goodsImage/1135059/description/29f80ed96be25840e261f3e93483cff4.jpg", "/static/img/goodsImage/1135059/description/569e15cffcf12e25005ab818bfe7b5a4.jpg", "/static/img/goodsImage/1135059/description/0353ec5ba7d8aa12a8d716801ac3364b.jpg", "/static/img/goodsImage/1135059/description/a472c356a0ef2375b51492949fb9c626.jpg", "/static/img/goodsImage/1135059/description/a3a8703dd100753f0f851ac1c2c0a4d5.jpg", "/static/img/goodsImage/1135059/description/c0ff67a071351af2468b54f3d933351a.jpg", "/static/img/goodsImage/1135059/description/1ba7e76b0a97942df6152bcca437e186.jpg", "/static/img/goodsImage/1135059/description/dd2b8d7fe86556f109d8b750cb61c624.jpg", "/static/img/goodsImage/1135059/description/7b5ddaf39a2d7b48f49263ca5bf4a992.jpg", "/static/img/goodsImage/1135059/description/8c787c9d190ee69413baaf0f479f3925.jpg", "/static/img/goodsImage/1135059/description/c99b31f6d83d63d74735d544b278a333.jpg", "/static/img/goodsImage/1135059/description/104904b878404591352d59416ea19115.jpg", "/static/img/goodsImage/1135059/description/0ae388924da760b73f34585c10a73be1.jpg", "/static/img/goodsImage/1135059/description/3c5e4b119413f6e5bdfbcc19c0acb6f4.jpg", "/static/img/goodsImage/1135059/description/c29f5f90f0384f1a4c39798ab444ed66.jpg", "/static/img/goodsImage/1135059/description/a7edc8ec7ff5bde749e3a1d26f23fb74.jpg"],
		"inventory": [23],
		"information": [{
			"attrName": "配料表",
			"attrValue": "生活饮用水、高粱、麸皮、稻壳、大曲（大麦、豌豆）、食用盐、香辛料"
		}, {
			"attrName": "产地",
			"attrValue": "山西省太原市"
		}, {
			"attrName": "保质期",
			"attrValue": "5年"
		}, {
			"attrName": "贮存条件",
			"attrValue": "阴凉干燥处"
		}, {
			"attrName": "温馨提示",
			"attrValue": "本品除明确质量问题外不支持30天无忧退换货"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 420,
		"date": "1500341217206",
		"category": "饮食",
		"subCategory": "调味"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1017001,
		"price": 118,
		"topName": "火山石板米(粳米) 5千克",
		"subName": "植于火山岩的放心米",
		"shortDescription": ["优质大米", "粒粒饱满", "新鲜脱谷", "活米清甜", "品质监控", "拒绝污染"],
		"shortDescriptionImage": ["/static/img/goodsImage/1017001/shortdescriptionImage/9f0b20716418c39726aa0432ae5b28d1.jpg", "/static/img/goodsImage/1017001/shortdescriptionImage/d33cdaf102aa4c8bbf123e3f14d35c2a.jpg", "/static/img/goodsImage/1017001/shortdescriptionImage/47922abe97375ec50c8bc408e7babe7b.jpg"],
		"headImage": ["/static/img/goodsImage/1017001/headImage/f9266f0a37f1cb39d525f0fffb2eca62.png", "/static/img/goodsImage/1017001/headImage/48abb23cf7669327c22433524c8c5139.jpg", "/static/img/goodsImage/1017001/headImage/ed57359b302eb787bc6a10fe60f14e3c.jpg", "/static/img/goodsImage/1017001/headImage/c843404eee475901de24134617d9853d.jpg", "/static/img/goodsImage/1017001/headImage/6573c646bf5cd18f3aa85a38e43cf125.jpg"],
		"type": ["5千克"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1017001/description/04e638cbc75068e2103363998e8348fa.jpg", "/static/img/goodsImage/1017001/description/db85a13cd7f648a390a3912d667de3fb.jpg", "/static/img/goodsImage/1017001/description/2e3df78efcdeaedac700daf326c71f59.jpg", "/static/img/goodsImage/1017001/description/06e2457d20ad841952f9166c2bd5ae46.jpg", "/static/img/goodsImage/1017001/description/50f9f28b5fada019212801ef75308dd6.jpg", "/static/img/goodsImage/1017001/description/ab7c37d8740fbf95f24b821c8d722689.jpg", "/static/img/goodsImage/1017001/description/593fa1209a1e5f5c86a5716ab6c30785.jpg", "/static/img/goodsImage/1017001/description/a70625fc727f0a0d6c8db4598a8ec9cb.jpg", "/static/img/goodsImage/1017001/description/9c4df86d0a9bccb4323be62e43d7132a.jpg", "/static/img/goodsImage/1017001/description/78e29dbe467db79b52fb8ce596ea58cf.jpg", "/static/img/goodsImage/1017001/description/5d6d4289c6492f199918914eb70b3330.jpg", "/static/img/goodsImage/1017001/description/77db229c5f384b1595253a0657e72d11.jpg", "/static/img/goodsImage/1017001/description/eaf7f0bf10c880b7a8fbec189949411a.jpg", "/static/img/goodsImage/1017001/description/05a6fb4a28805cdd5e079009f086dc31.jpg", "/static/img/goodsImage/1017001/description/22b5b39caff4436a63ad2a6a83be5073.jpg", "/static/img/goodsImage/1017001/description/5daac783dfdbdcc8da22712d511cea76.jpg", "/static/img/goodsImage/1017001/description/489527fab2632e27ee3a64b4e1a88dfe.jpg", "/static/img/goodsImage/1017001/description/f87aa8ec4e871f0881643002a23eb09e.jpg", "/static/img/goodsImage/1017001/description/af02f4264ffc4582f14dc8cbf55975c5.jpg", "/static/img/goodsImage/1017001/description/f329fdda9a98d13ac03996849d3703be.jpg"],
		"inventory": [739],
		"information": [{
			"attrName": "配料",
			"attrValue": "稻谷"
		}, {
			"attrName": "净含量",
			"attrValue": "5KG"
		}, {
			"attrName": "生产日期",
			"attrValue": "见内包装"
		}, {
			"attrName": "保质期",
			"attrValue": "常温下6个月"
		}, {
			"attrName": "产地",
			"attrValue": "黑龙江牡丹江市"
		}, {
			"attrName": "温馨提示",
			"attrValue": "网易严选出售的食品，除明确质量问题外均不接受退换货"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 769,
		"date": "1500341220373",
		"category": "饮食",
		"subCategory": "食材"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1194007,
		"price": 98,
		"topName": "黑凤梨 盱眙小龙虾 7-9钱/只",
		"subName": "头小身大，饱满肥嫩",
		"shortDescription": ["克重近两", "只只壮实", "腮腹白净", "紧致弹牙", "覆膜包装", "一煮即食"],
		"shortDescriptionImage": ["/static/img/goodsImage/1194007/shortdescriptionImage/fc89c428fc09015a77bfbe22f214803c.png", "/static/img/goodsImage/1194007/shortdescriptionImage/927b23a59df2d4830592debccd881cb6.png", "/static/img/goodsImage/1194007/shortdescriptionImage/4770381784cff2bc012b0fed827a8c60.png"],
		"headImage": ["/static/img/goodsImage/1194007/headImage/fb4d93a48c9b3ab6d079e0fd2bedf872.png", "/static/img/goodsImage/1194007/headImage/8cf933aac0712c883af1dc47c18c55bc.jpg", "/static/img/goodsImage/1194007/headImage/9e99a990da2c74544edef95db6d8877b.jpg", "/static/img/goodsImage/1194007/headImage/ac28f9ee71969da738bbb4f56fbfcc59.jpg", "/static/img/goodsImage/1194007/headImage/33763d712b25736bd92f1a12a689de7d.jpg"],
		"type": ["麻辣（1.5千克）", "十三香（1.5千克）", "麻辣（1.5千克）*2盒", "十三香（1.5千克）*2盒"],
		"chara": "4色可选",
		"description": ["/static/img/goodsImage/1194007/description/c76078a9dc2d065df7d064d58cba9503.jpg", "/static/img/goodsImage/1194007/description/a6b267e8d4d8040d83374e07830df8e1.jpg", "/static/img/goodsImage/1194007/description/ba2c3b19ac6fe3e1bdcc0cd6271b2124.jpg", "/static/img/goodsImage/1194007/description/808fa5009ef39aaf8bc9d2972ad0f6d0.jpg", "/static/img/goodsImage/1194007/description/fea2d3b0ac09def5c2b71b772799dc30.jpg", "/static/img/goodsImage/1194007/description/5c9425cccbac73e2597bdf15e0933355.jpg", "/static/img/goodsImage/1194007/description/639117de3a4c262d7f6e5ff0bc67aeeb.jpg", "/static/img/goodsImage/1194007/description/4f5b9e9c4babad826d564de7852bb7a5.jpg", "/static/img/goodsImage/1194007/description/16fb09f2ad5c51f25c689f70f3d7672b.jpg", "/static/img/goodsImage/1194007/description/e040f92cce8f2a26dd224af8c0fe625f.jpg", "/static/img/goodsImage/1194007/description/51e691f0fa6f96d6d8a9d81d3e881b6a.jpg", "/static/img/goodsImage/1194007/description/837ba40fa6077b14c79a7e87a7bdd40d.jpg", "/static/img/goodsImage/1194007/description/b0c500eb58bc5db260653f1237ba65b9.jpg", "/static/img/goodsImage/1194007/description/6c4698c344f1dad0e757cb73ef193b7c.jpg", "/static/img/goodsImage/1194007/description/02e387e8664dacdd904a89ca920caf92.jpg", "/static/img/goodsImage/1194007/description/ed939198d902c450f2775850c9eb88b0.jpg", "/static/img/goodsImage/1194007/description/322b68a8ad4215e05f317ef6185231b2.jpg", "/static/img/goodsImage/1194007/description/73823ce89050d8f6168e6ba3425207ea.jpg", "/static/img/goodsImage/1194007/description/25df0c35423c31f8fd9b15be77e7a329.jpg", "/static/img/goodsImage/1194007/description/5ac7e9309a61f5e3072a01ce56c66166.jpg", "/static/img/goodsImage/1194007/description/861a310d303a82b970df1774706964f0.jpg", "/static/img/goodsImage/1194007/description/5ae29c97b2a04736e1c07b38bb8aba27.jpg", "/static/img/goodsImage/1194007/description/8e44af0718335a6cb27bbcc7268e6daf.jpg", "/static/img/goodsImage/1194007/description/86de5b9734ad5af4f3ab7b8f2e5010bf.jpg", "/static/img/goodsImage/1194007/description/4b55346b52075a1adc1fa1b084db3bb2.jpg", "/static/img/goodsImage/1194007/description/66368e9e6ac4011177f466dd2cd2de48.jpg", "/static/img/goodsImage/1194007/description/75b3e7d220a045e1802cda97a51f1bd6.jpg", "/static/img/goodsImage/1194007/description/e49d182cc6556a0516eb49e4c0c935e7.jpg", "/static/img/goodsImage/1194007/description/da4d2b47e9ab781f7ac0a72c2aef215a.jpg", "/static/img/goodsImage/1194007/description/2858c3bbf0a9fcab59f53019c35326cb.jpg", "/static/img/goodsImage/1194007/description/7067a0ff8363788fb4dc9df0ff423aa6.jpg", "/static/img/goodsImage/1194007/description/317c244d582f51b8eafd02cf29c73e21.jpg", "/static/img/goodsImage/1194007/description/69b6c9a13a11804ccc159bc872251906.jpg", "/static/img/goodsImage/1194007/description/2f1eeea52bfff2f67fa250532aa86aad.jpg", "/static/img/goodsImage/1194007/description/bb47fc276dda1a19038b9ffe5678d55e.jpg", "/static/img/goodsImage/1194007/description/a3bf1a314478c86dfe6fd053b0286e89.jpg", "/static/img/goodsImage/1194007/description/89714b8a19047fc4bdf7fa0ec3790602.jpg", "/static/img/goodsImage/1194007/description/d18b0aef5d69576e7def05d274d59ad5.jpg", "/static/img/goodsImage/1194007/description/bbb5071428a4414c35d5b4c2c17fbfbb.jpg", "/static/img/goodsImage/1194007/description/94df815b35df2a94e481181920109c04.jpg", "/static/img/goodsImage/1194007/description/4e9d01be6c41b9c03e2d9a586d5c8334.jpg", "/static/img/goodsImage/1194007/description/df4f9a0bfc45ada4f02805cdbdcaf846.jpg", "/static/img/goodsImage/1194007/description/a3fcd85ade93849f69c713207e3085c7.jpg", "/static/img/goodsImage/1194007/description/e6fb42267add216e3bccd76cb998baaa.jpg", "/static/img/goodsImage/1194007/description/17e9fa5ee76c8d835bdb16c20e4a1bb0.jpg", "/static/img/goodsImage/1194007/description/9fb0b7352f73b384c944f9accb99cc61.jpg", "/static/img/goodsImage/1194007/description/3f7a8625b4a3dfb71201d9e0dac5dfe5.jpg", "/static/img/goodsImage/1194007/description/c9b62281482274215d973d282ce07f3a.jpg", "/static/img/goodsImage/1194007/description/2282d57e13b4ba22f82a96630ad30ddb.jpg", "/static/img/goodsImage/1194007/description/66065a39223b52c6cb1dd544f472c84b.jpg", "/static/img/goodsImage/1194007/description/acb661a811ec6cb5f186c7a4fe17c056.jpg", "/static/img/goodsImage/1194007/description/f7b9e89ba5fc196d6da7887b30af3f41.jpg", "/static/img/goodsImage/1194007/description/a0b94d1af263a46192981a99595c4176.jpg", "/static/img/goodsImage/1194007/description/eeae5a5aa9f088f64aaaec508a07bace.jpg", "/static/img/goodsImage/1194007/description/50ed3f3c40e5bc3c5c239e077f771341.jpg", "/static/img/goodsImage/1194007/description/999f92d37a7c4eca0e6682808a8be559.jpg", "/static/img/goodsImage/1194007/description/71936584003c910333365b423ce0c703.jpg", "/static/img/goodsImage/1194007/description/b8f0adcdae7ab4bde5d684afe9e50074.jpg", "/static/img/goodsImage/1194007/description/c718d93e5beb7fb1ec77aeb78c031c23.jpg", "/static/img/goodsImage/1194007/description/7f47ba8ba6c783efde039c0d2abf6c31.jpg", "/static/img/goodsImage/1194007/description/aa9371025dd765a3e2a56f106e9e73bc.jpg", "/static/img/goodsImage/1194007/description/71f9d5642baa17f1408eabb900f620a6.jpg", "/static/img/goodsImage/1194007/description/ccc7e805f5a44f5d55294ae6c757f292.jpg", "/static/img/goodsImage/1194007/description/16b2deb422c6fac58e2c6afa0d00afca.jpg", "/static/img/goodsImage/1194007/description/8764f529058151d6534cf56e49dcc4af.jpg", "/static/img/goodsImage/1194007/description/ad35fec578295e9d88302f708c72c451.jpg", "/static/img/goodsImage/1194007/description/40b62388f43b494f7ca08b0513d674b2.jpg", "/static/img/goodsImage/1194007/description/6e4d2ea322613e3b55a4ffcc4d57edc6.jpg", "/static/img/goodsImage/1194007/description/f1a4d19b91d0b26d93165ee30895dc78.jpg", "/static/img/goodsImage/1194007/description/b74e4afde79ae579b1ca419b1f587608.jpg", "/static/img/goodsImage/1194007/description/f6349bbf48dfd58008985b490193ed86.jpg", "/static/img/goodsImage/1194007/description/7131ccc0e39ffe7fc008d60623a3023d.jpg", "/static/img/goodsImage/1194007/description/a734a987bc2cddf47561cd8bb97c4db0.jpg", "/static/img/goodsImage/1194007/description/ad5220b000e0656f6782405dd1bf0197.jpg", "/static/img/goodsImage/1194007/description/5df0c8e8ba542286a282b25a30ffba46.jpg", "/static/img/goodsImage/1194007/description/850dd2060f092530c273bad2af2bb8e0.jpg", "/static/img/goodsImage/1194007/description/13eadca03128c2383ea9188d54f570a2.jpg", "/static/img/goodsImage/1194007/description/4de519e9a98d16fc5b6c8a23e1ab374e.jpg", "/static/img/goodsImage/1194007/description/90be3eb2790245828d3a960add7e6346.jpg", "/static/img/goodsImage/1194007/description/3b27cd5612f1560c3023471bbea64e69.jpg", "/static/img/goodsImage/1194007/description/cdca584ebfc780f5be84324407e0453f.jpg", "/static/img/goodsImage/1194007/description/61696c73484af7d82ea03f4467f4e3fd.jpg", "/static/img/goodsImage/1194007/description/2c0a76a7c8dac8e2e4026de3f8f01797.jpg", "/static/img/goodsImage/1194007/description/e1f942075360d49315ef4b7db375f98f.jpg", "/static/img/goodsImage/1194007/description/56b979a19aabd1d9090b15fce96fedc7.jpg", "/static/img/goodsImage/1194007/description/7d1034be3dab0e5dc1e1425611192f7e.jpg", "/static/img/goodsImage/1194007/description/c005c575cf393aee101abe776318e907.jpg", "/static/img/goodsImage/1194007/description/5ead2486f576f2d4569c6c2eb3a30c15.jpg", "/static/img/goodsImage/1194007/description/6cba112332f36b194bb16d2d49cbd9a8.jpg", "/static/img/goodsImage/1194007/description/c780e0f32ab5db9aff0367e8f97ccd00.jpg", "/static/img/goodsImage/1194007/description/96d1f30a3c4f49bca417bbd2fbffdc2b.jpg", "/static/img/goodsImage/1194007/description/e2a542750f2482a0cc157291b05647be.jpg", "/static/img/goodsImage/1194007/description/de28440b848c9da63ef961f4808fd40a.jpg", "/static/img/goodsImage/1194007/description/7857e74f9262f9888cd545d6d98ed500.jpg", "/static/img/goodsImage/1194007/description/b488371a7592a9ed0758c2ba9e8f003c.jpg", "/static/img/goodsImage/1194007/description/0bb6a78f6b59ab473dce94e9af5feb5b.jpg", "/static/img/goodsImage/1194007/description/d71223274e125bf68fd1aeb5ce22bed5.jpg", "/static/img/goodsImage/1194007/description/d2e41b78a15e188bbbd4f7fa9f452fb0.jpg", "/static/img/goodsImage/1194007/description/75e4fbba774c5b5f74b4964e662b2da8.jpg"],
		"inventory": [244, 838, 82, 271],
		"information": [{
			"attrName": "配料表",
			"attrValue": "十三香：淡水龙虾、饮用水、食用植物油、豆瓣酱、食用盐、白砂糖、辣椒粉、花椒、料酒、葱、姜、味精、陈皮、白芷、香辛料（八角、小茴香、高良姜、肉桂、丁香、肉豆蔻、砂仁、荜拨、草果、甘草、孜然、香茅、月桂叶）麻辣：淡水龙虾、饮用水、食用植物油、豆瓣酱、食用盐、白砂糖、花椒、辣椒粉、料酒、葱、姜、味精、陈皮、白芷"
		}, {
			"attrName": "净含量",
			"attrValue": "1.5千克（净虾750克） 7-9钱/只 约17-22只（配套冰袋、桌布、一次性手套）"
		}, {
			"attrName": "保质期",
			"attrValue": "12个月"
		}, {
			"attrName": "产地",
			"attrValue": "江苏省淮安市"
		}, {
			"attrName": "贮存条件",
			"attrValue": "零下18摄氏度保存"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1、本品除明确质量问题外，不支持30天无忧退货；不支持无理由拒收；破损理赔需在签收1天内反馈；2、为保证龙虾紧致弹润的口感，常温自然解冻最佳，切忌热水快速解冻，不宜微波加热；3、一次食用完毕，不宜二次加热；4、虾钳、虾壳坚硬，儿童、老人请在监护下食用；5、虾腮、虾肠、虾壳切勿食用；6、港、澳、台、西藏、新疆、青海、云南、海南、内蒙古等偏远地区及顺丰配送不到的乡、县、镇等地区不发货，请勿拍。"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 751,
		"date": "1500341224026",
		"category": "志趣",
		"subCategory": "黑凤梨"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1175002,
		"price": 49,
		"topName": "瑞鸣收藏版CD-古佳耶",
		"subName": "壮丽琴弦，响彻草原",
		"shortDescription": ["大提琴家", "数年创作", "乐器歌谣", "突破古今", "美国后期", "母版制作"],
		"shortDescriptionImage": ["/static/img/goodsImage/1175002/shortdescriptionImage/4b5e3ea1ccd5f4e26204bff1249b649c.jpg", "/static/img/goodsImage/1175002/shortdescriptionImage/193471f9bbb8e6d59da01ad7cb78c256.jpg", "/static/img/goodsImage/1175002/shortdescriptionImage/bcc92301fbe550ee6c05e9209eaacbc9.jpg"],
		"headImage": ["/static/img/goodsImage/1175002/headImage/5b345acc66d573c3b7678591e98a3341.png", "/static/img/goodsImage/1175002/headImage/c65494d8944c64c45322207dd826bff6.jpg", "/static/img/goodsImage/1175002/headImage/77e8a140b2d43b970a3e2f9048565c46.jpg", "/static/img/goodsImage/1175002/headImage/874b646bd9bf058f1d39877a61cbd2ba.jpg", "/static/img/goodsImage/1175002/headImage/4860835caa166a5a0b88e5d0d105b881.jpg"],
		"type": ["古佳耶"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1175002/description/3bff4ce9bbe3383783d2cf3ccabcaa8f.jpg", "/static/img/goodsImage/1175002/description/e8866239f0841e62453e9d2f07bfd8ef.jpg", "/static/img/goodsImage/1175002/description/23e28ad131cbffd69a2326ff964a542e.jpg", "/static/img/goodsImage/1175002/description/6ff74b05eb8d11bd2b8472293848205a.jpg", "/static/img/goodsImage/1175002/description/3a00a1c618118f0889ae2a568784882d.jpg", "/static/img/goodsImage/1175002/description/97957a833581c9175679d68f95653be4.jpg", "/static/img/goodsImage/1175002/description/327e4e315cf6019218d8f69509657024.jpg", "/static/img/goodsImage/1175002/description/1155e3d16a2fff5157d56fe639889876.jpg", "/static/img/goodsImage/1175002/description/28c7bd73fbfec63c6a480374e6692aa1.jpg", "/static/img/goodsImage/1175002/description/ff3b015cee87c59a7a1207e4568c7a5f.jpg", "/static/img/goodsImage/1175002/description/2af9870f272016c899fc1b1c0825a590.jpg", "/static/img/goodsImage/1175002/description/247152161b36590cd23ba7b7096693b7.jpg", "/static/img/goodsImage/1175002/description/33f940bcd52bcaee7a352113d6e98364.jpg", "/static/img/goodsImage/1175002/description/aad03adb4ca0cd5a9a0b5660be050efa.jpg", "/static/img/goodsImage/1175002/description/8b9ffe1f298c16bad7f398d322cc86aa.jpg", "/static/img/goodsImage/1175002/description/7bba7b1c27f40cb55caf9941a384ded7.jpg", "/static/img/goodsImage/1175002/description/3ac0191c39bf9317bf1b8a58b4bb0d3e.jpg", "/static/img/goodsImage/1175002/description/fbdf37fc1e6ae2e3af422e180dadf7bb.jpg", "/static/img/goodsImage/1175002/description/e6fe0ac3a662b94c8eca089224281fa3.jpg", "/static/img/goodsImage/1175002/description/7d119604afbd4bf1e0011d99e7883898.jpg", "/static/img/goodsImage/1175002/description/f902ec09ae76f021f56b826971eeca3b.jpg", "/static/img/goodsImage/1175002/description/fc33d3e93aa77caa5a43df5b02a70ef9.jpg", "/static/img/goodsImage/1175002/description/25bb5f89ccef3c7a7c8eaed1b81992e7.jpg", "/static/img/goodsImage/1175002/description/8d0cec592f3ccf14748189b61f487242.jpg", "/static/img/goodsImage/1175002/description/2bd6899444f1ca44cd12bfbf7bfd0835.jpg", "/static/img/goodsImage/1175002/description/7497f509a0ff2534719eeba372b7134a.jpg", "/static/img/goodsImage/1175002/description/d18dd757f2913f1c32b922bf580dc96c.jpg", "/static/img/goodsImage/1175002/description/a5a33af4811884fe26ce5cc12384ede5.jpg", "/static/img/goodsImage/1175002/description/1f0ceed74805ad0186d4cd206acc7deb.jpg", "/static/img/goodsImage/1175002/description/b65881df28151863506df7263f2d1653.jpg", "/static/img/goodsImage/1175002/description/ddc56752aa79a908f5f939ccbb6ab101.jpg", "/static/img/goodsImage/1175002/description/11a12707fa6e7fd4f0d231732b1e93b9.jpg", "/static/img/goodsImage/1175002/description/99744353290ff77fa6989da5a577e44a.jpg", "/static/img/goodsImage/1175002/description/6aea1992dd2bf261fbf7612abbaa1ab5.jpg", "/static/img/goodsImage/1175002/description/7f2d9e93f2aa5c20ce888fd8e36c09aa.jpg", "/static/img/goodsImage/1175002/description/47d718e042e5fecb8a016808ccc12398.jpg", "/static/img/goodsImage/1175002/description/c91227d64d9565b727ea5175d51bda05.jpg", "/static/img/goodsImage/1175002/description/5de365c59fd9bef4571d7c68790cd408.jpg", "/static/img/goodsImage/1175002/description/91952f3982ed5feb7e838df94d5d2829.jpg", "/static/img/goodsImage/1175002/description/1af9bce59a11bedb7b307e4f0e29d8a6.jpg", "/static/img/goodsImage/1175002/description/701901118c6d3cd53233359b119b2b26.jpg", "/static/img/goodsImage/1175002/description/12f4d2b8ea50776eef79ae2348229f1f.jpg"],
		"inventory": [354],
		"information": [],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 56,
		"date": "1500341226694",
		"category": "志趣",
		"subCategory": "唱片"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1152097,
		"price": 399,
		"topName": "雷霆之怒逐风者的祝福之剑 雨伞 魔兽世界",
		"subName": "炫酷装备，可以背的雨伞",
		"shortDescription": ["硅胶柄刺", "安全防护", "武器印花", "设计精美", "背带可拆", "携带方便"],
		"shortDescriptionImage": ["/static/img/goodsImage/1152097/shortdescriptionImage/ede0a18b18c199eeeeea87646e332ab0.png", "/static/img/goodsImage/1152097/shortdescriptionImage/7c405c66efbfcd775e877bfb01512bfc.png", "/static/img/goodsImage/1152097/shortdescriptionImage/7c150532f9fc3641825e41b17637b8a1.png"],
		"headImage": ["/static/img/goodsImage/1152097/headImage/532836444ae5eaec40b5810ca4f9b1e6.png", "/static/img/goodsImage/1152097/headImage/6dc830381b83de0ed98eeba550b91af0.jpg", "/static/img/goodsImage/1152097/headImage/37965d01e610b66ded9a2f1eb2ba9e82.jpg", "/static/img/goodsImage/1152097/headImage/03ad4e13e176aa8883df47ac0221789c.jpg", "/static/img/goodsImage/1152097/headImage/81e5e26aef90e5cb67f5f84327baafae.jpg"],
		"type": ["雨伞"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1152097/description/e7470aecff4880b4e39dbddb31ffb67b.jpg", "/static/img/goodsImage/1152097/description/ecee706697fe3feca31888756fa18f57.jpg", "/static/img/goodsImage/1152097/description/1f3a935a2e00f1c366d8342b573557f8.jpg", "/static/img/goodsImage/1152097/description/a9cf80065f6e51d512bd403055e65d2b.jpg", "/static/img/goodsImage/1152097/description/9e7484f81a74d8427be57d2e20056c97.jpg", "/static/img/goodsImage/1152097/description/5fd8b24f8eeec813ededad3991a6baa8.jpg", "/static/img/goodsImage/1152097/description/df0e70b5405573d06b4b30b4c26c723c.jpg", "/static/img/goodsImage/1152097/description/87b100384f6704a3c308f0ef5061dc39.jpg", "/static/img/goodsImage/1152097/description/45851f49f77c8e29d56269d38dad9031.jpg", "/static/img/goodsImage/1152097/description/2106e2cf430dbd8ba09754bae69f3058.jpg", "/static/img/goodsImage/1152097/description/a294d3ecca6c84b5f89287d0da94ef25.jpg", "/static/img/goodsImage/1152097/description/335863ba3cd9facc722298def7dc5131.jpg", "/static/img/goodsImage/1152097/description/5e4162dd996a4a51446892762c96b867.jpg", "/static/img/goodsImage/1152097/description/1db209b88ca86c32ff5c4398bd917458.jpg", "/static/img/goodsImage/1152097/description/b07f36a0c4f0614e2c0848b65ed22bc5.jpg", "/static/img/goodsImage/1152097/description/ec15a9fe3e7699d660f4994945c10fbe.jpg", "/static/img/goodsImage/1152097/description/1f2c2b336104dd0627d95f3aaf238c00.jpg", "/static/img/goodsImage/1152097/description/cd65f7f91cf9945d90fca0de424ed1ea.jpg", "/static/img/goodsImage/1152097/description/56676eb2f49b607cf9a72b10238cd501.jpg", "/static/img/goodsImage/1152097/description/1808716146f454580207f3bbd656c15a.jpg", "/static/img/goodsImage/1152097/description/e656c08451b5d14c4873f0f354c02632.jpg", "/static/img/goodsImage/1152097/description/119b431c3f5f93e884f57e1aa3ba5413.jpg", "/static/img/goodsImage/1152097/description/e83f111666c8f784d410206ffbcec0b9.jpg", "/static/img/goodsImage/1152097/description/b79af22158f44c29adb28e7440a9b7f0.jpg", "/static/img/goodsImage/1152097/description/7c70c638342fc387c70cb07e5aa731b6.jpg", "/static/img/goodsImage/1152097/description/f259b8be33a2dfbf2346dd587c387233.jpg", "/static/img/goodsImage/1152097/description/cb1f1283fd194c3e1d2bd3d0919f2da9.jpg", "/static/img/goodsImage/1152097/description/db10c79032f8f1173bd08d9aa408a605.jpg", "/static/img/goodsImage/1152097/description/dc1a1cc93b7a7f81dd65ef76e7089dda.jpg", "/static/img/goodsImage/1152097/description/3f3c5698bbc115399fe99fa0eebaf020.jpg", "/static/img/goodsImage/1152097/description/1eb4a476346f31e24d820eebadb55883.jpg", "/static/img/goodsImage/1152097/description/6cad6a98b019f15aadb37d10f98a7d0c.jpg", "/static/img/goodsImage/1152097/description/c58adf7823f699aebf11a1fa848f5b23.jpg", "/static/img/goodsImage/1152097/description/1133cf4150d98900b3a8116bbd39b2f0.jpg", "/static/img/goodsImage/1152097/description/4d6f67ef8df8a439f4c3fffe2df24ec1.jpg"],
		"inventory": [965],
		"information": [{
			"attrName": "伞直径",
			"attrValue": "113cm"
		}, {
			"attrName": "伞面材料",
			"attrValue": "涤纶"
		}, {
			"attrName": "伞刺材料",
			"attrValue": "硅胶"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 244,
		"date": "1500341229338",
		"category": "志趣",
		"subCategory": "魔兽世界"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1152036,
		"price": 188,
		"topName": "logo 陶瓷水杯 酒桶杯 炉石传说",
		"subName": "陶瓷材质，桌面装饰好物",
		"shortDescription": ["陶瓷材质", "木纹设计", "手握舒适", "设计美观", "设计精美", "赠送佳品"],
		"shortDescriptionImage": ["/static/img/goodsImage/1152036/shortdescriptionImage/00fcf0549f0ac2c0a8b2095fb515af24.png", "/static/img/goodsImage/1152036/shortdescriptionImage/f37038d54785d734c6d3fa4d39eb6577.png", "/static/img/goodsImage/1152036/shortdescriptionImage/48dafe352f55f38490c77e664e7354fd.png"],
		"headImage": ["/static/img/goodsImage/1152036/headImage/bb874f29e8107676257d50b051e34138.png", "/static/img/goodsImage/1152036/headImage/94b89f52150d31b619866365fdd43c8a.jpg", "/static/img/goodsImage/1152036/headImage/332b93789f3f598f8a27bb285ca07960.jpg", "/static/img/goodsImage/1152036/headImage/a0b0a1d733b3146e9e86e0e83c134702.jpg", "/static/img/goodsImage/1152036/headImage/d93064130d99fc60ba5637af417d1bd8.jpg"],
		"type": ["陶瓷酒桶杯"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1152036/description/3f833edd94b59e068ea544bd7a3051da.jpg", "/static/img/goodsImage/1152036/description/67ca7e05c91ed3244c61725e4d2eb52b.jpg", "/static/img/goodsImage/1152036/description/efd1ef832cce71f318d9b2943e9b97b4.jpg", "/static/img/goodsImage/1152036/description/f1f15ec2714861278bfe2b5a50ae8705.jpg", "/static/img/goodsImage/1152036/description/9f3ccf06a61c0390be96e7839a9d00cf.jpg", "/static/img/goodsImage/1152036/description/5da595e960a4ff250b815fb19876a452.jpg", "/static/img/goodsImage/1152036/description/afbf3842be7178860f65553bcbb224a8.jpg", "/static/img/goodsImage/1152036/description/03fc9ccba7710e4264c42c6048d2d54c.jpg", "/static/img/goodsImage/1152036/description/d6b83bae32e8210047563c945b8f2880.jpg", "/static/img/goodsImage/1152036/description/7e0b7ad79aa94a19176d92fce9f6f1cb.jpg", "/static/img/goodsImage/1152036/description/949d1136041e40cc016974b9379dcd0a.jpg", "/static/img/goodsImage/1152036/description/24112004b194c6963da5dadb74ebd99a.jpg", "/static/img/goodsImage/1152036/description/e9cce00d6b6e606b7961a5850aeddcd9.jpg", "/static/img/goodsImage/1152036/description/4e0e2e60fe3a3c6fd709ff8a02a5804f.jpg", "/static/img/goodsImage/1152036/description/83ca30128e6f39515c124cdf1c6ddb5b.jpg", "/static/img/goodsImage/1152036/description/edf338f5667afdcdcfdbcd250ff243bc.jpg", "/static/img/goodsImage/1152036/description/e4d35a0fb8e6f522878e966269dedd14.jpg", "/static/img/goodsImage/1152036/description/c4592092380a6e04e65c24159bc3c890.jpg"],
		"inventory": [287],
		"information": [{
			"attrName": "杯高",
			"attrValue": "17cm"
		}, {
			"attrName": "杯口直径",
			"attrValue": "8.2cm"
		}, {
			"attrName": "裸重",
			"attrValue": "0.86kg"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 579,
		"date": "1500341232020",
		"category": "志趣",
		"subCategory": "炉石传说"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1152037,
		"price": 99,
		"topName": "英雄集结 鼠标垫 特大版 守望先锋",
		"subName": "铺满桌面，可做桌布用",
		"shortDescription": ["英雄集结", "色泽饱满", "包边设计", "不易磨损", "3毫米厚", "使用舒适"],
		"shortDescriptionImage": ["/static/img/goodsImage/1152037/shortdescriptionImage/ce06db0d6a56293a9441b0d28f20d092.png", "/static/img/goodsImage/1152037/shortdescriptionImage/27d8851e14519939cacd8fa2c2b75b74.png", "/static/img/goodsImage/1152037/shortdescriptionImage/fc31f8313b1cb8b881e00989648c1887.png"],
		"headImage": ["/static/img/goodsImage/1152037/headImage/5121d17fd9ff7f76a285ebadc83b5f79.png", "/static/img/goodsImage/1152037/headImage/544c8e668f607ce44e40a1f9e76791e9.jpg", "/static/img/goodsImage/1152037/headImage/ac030af25543c3baf574d3fdb9af36d7.jpg", "/static/img/goodsImage/1152037/headImage/250d84fa8ed4860a07b701b31296e349.jpg", "/static/img/goodsImage/1152037/headImage/2bdf98dcd4e44379ad2d576d2bb134ef.jpg"],
		"type": ["鼠标垫"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1152037/description/f5aeda8c860e0bad89a2ccfc481d3776.jpg", "/static/img/goodsImage/1152037/description/62dba0bb2777ee256373e609417e3557.jpg", "/static/img/goodsImage/1152037/description/3bcaa03bcf0b88ac27100348e8750750.jpg", "/static/img/goodsImage/1152037/description/85dd2927a2c912768ee44ef7cf66629f.jpg", "/static/img/goodsImage/1152037/description/fe7c4518564c4073e2ab3068157e2039.jpg", "/static/img/goodsImage/1152037/description/5b4041ce4d58a05694167021d810445f.jpg", "/static/img/goodsImage/1152037/description/c6986ccfeb4f5afbc331a3ca29832ffd.jpg", "/static/img/goodsImage/1152037/description/3282fcb99b4ae83e8bb286c0599aaa99.jpg", "/static/img/goodsImage/1152037/description/e493bd1d65a68fa27d585e872fb64841.jpg", "/static/img/goodsImage/1152037/description/4cfbae16841025f31a7b1f497c846fc8.jpg", "/static/img/goodsImage/1152037/description/b50fa27f8a44a061b199a8f3f9e1ac2d.jpg", "/static/img/goodsImage/1152037/description/a62d9981d92cf26b22efca4f7a272195.jpg", "/static/img/goodsImage/1152037/description/3d6e8605de930ce91a2412bb29230777.jpg", "/static/img/goodsImage/1152037/description/16e751ca7b0e7bd15fa7ec1ba023aafe.jpg"],
		"inventory": [789],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "90cm X 38cm X 0.3cm"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 151,
		"date": "1500341234595",
		"category": "志趣",
		"subCategory": "守望先锋"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1152002,
		"price": 1588,
		"topName": "纪念版麻将套装 暗黑破坏神III",
		"subName": "暗黑破坏神系列二十周年匠心之作",
		"shortDescription": ["金属包边", "防碰防撞", "亚克力板", "清晰通透", "雕刻设计", "精美骰子"],
		"shortDescriptionImage": ["/static/img/goodsImage/1152002/shortdescriptionImage/fe507f183877ff6cf590cfc64eca05ec.png", "/static/img/goodsImage/1152002/shortdescriptionImage/b4465da7a26c3c77fa880b9660d11041.png", "/static/img/goodsImage/1152002/shortdescriptionImage/c1450beb9ec808b8bf3e098b906f3706.png"],
		"headImage": ["/static/img/goodsImage/1152002/headImage/4b88808ac20a1ec58512e4707b371183.png", "/static/img/goodsImage/1152002/headImage/9396911c8f462b3c18e27472f2e36674.jpg", "/static/img/goodsImage/1152002/headImage/d70517de1d415b456b7bc8a66a865cd8.jpg", "/static/img/goodsImage/1152002/headImage/072ebbd3f1bd347d105108cdaf61f032.jpg", "/static/img/goodsImage/1152002/headImage/a493e18ab09f8153c533596d6bb83351.jpg"],
		"type": ["麻将套装"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1152002/description/f3c20f074aac4edf7436fee8e0589a60.jpg", "/static/img/goodsImage/1152002/description/10a6b87a31f167e4818f83259721e2d1.jpg", "/static/img/goodsImage/1152002/description/95e45afc3389986392515eeeb5a1ee1e.jpg", "/static/img/goodsImage/1152002/description/a04c33896a45a78dd691405935bd8230.jpg", "/static/img/goodsImage/1152002/description/6ec0f2a3ef300e5fefd898eb0fe240c4.jpg", "/static/img/goodsImage/1152002/description/8d3f51b426bce857803a893e16238a70.jpg", "/static/img/goodsImage/1152002/description/518093dd4a280fd10eb64d9aa8ba4288.jpg", "/static/img/goodsImage/1152002/description/a71023cae4670b32bfd0af106977c12b.jpg", "/static/img/goodsImage/1152002/description/dc57ab135bce4e9a937472ea0b928b90.jpg", "/static/img/goodsImage/1152002/description/4ef8019181e354a191cb4cdc35fb1aae.jpg", "/static/img/goodsImage/1152002/description/afd8dd962f0069445c871628fb7111bc.jpg", "/static/img/goodsImage/1152002/description/e9b828604da6d3edfdec4233329c12af.jpg", "/static/img/goodsImage/1152002/description/094d1a45593afe0828a1c9c20dc45c90.jpg", "/static/img/goodsImage/1152002/description/b1dce2c46637b04f67756b1c36c990a5.jpg", "/static/img/goodsImage/1152002/description/ae779d660c77a86e8ba6fbd55c87df7f.jpg", "/static/img/goodsImage/1152002/description/c6ce35122e823e28e65d9338d72bb2f3.jpg", "/static/img/goodsImage/1152002/description/7b5575775ab86cce0fe98ae90a0aa48c.jpg", "/static/img/goodsImage/1152002/description/97442e5c1e557ba7e7b99b938f7ec11b.jpg", "/static/img/goodsImage/1152002/description/5c10c566493cf6ad0527900658053768.jpg", "/static/img/goodsImage/1152002/description/00d6be06b5ae0872261a161fc94889e3.jpg", "/static/img/goodsImage/1152002/description/d40ab373c2643787419fe8ff91b7d79e.jpg", "/static/img/goodsImage/1152002/description/bfc4186b131a5a158be50fcf5cc142d2.jpg", "/static/img/goodsImage/1152002/description/958e185a61fd717e63dc3a2612e763d6.jpg", "/static/img/goodsImage/1152002/description/b489784377eac6cd44e6586711981182.jpg", "/static/img/goodsImage/1152002/description/ea228a84642e812b2a64e10fe0e2ce1e.jpg", "/static/img/goodsImage/1152002/description/94fe1aa815c958d9033a8ae98712cb34.jpg", "/static/img/goodsImage/1152002/description/e7251aa58bc362ff7a603364ce3ff69f.jpg", "/static/img/goodsImage/1152002/description/b1c54c961fcf87e7f9235a69fa4478c7.jpg", "/static/img/goodsImage/1152002/description/687f14e329158db064f757e254044bd4.jpg", "/static/img/goodsImage/1152002/description/7c5a11a80933e1a21c0d56a7af26bd56.jpg", "/static/img/goodsImage/1152002/description/d8c8d6270bc5bdd67221ab9f35a64e8c.jpg", "/static/img/goodsImage/1152002/description/e3d72bedb5686157778788c1942f2d1a.jpg", "/static/img/goodsImage/1152002/description/e71cfbf9b3b71dce720149f8c2549f67.jpg", "/static/img/goodsImage/1152002/description/e91578d2a54b7fb0923e8760f0001c07.jpg", "/static/img/goodsImage/1152002/description/8ee75ee8f2b04547d5c5f81a1cf69efe.jpg", "/static/img/goodsImage/1152002/description/c8ede7ac372c52619b3aba46bbd02cd7.jpg", "/static/img/goodsImage/1152002/description/79809ddfc3c5ec07af4a500110bb521a.jpg", "/static/img/goodsImage/1152002/description/8230b233d713472a4223db45f563bc94.jpg", "/static/img/goodsImage/1152002/description/fdcdf5c59e03ee92ca947bbc7f4fe60b.jpg", "/static/img/goodsImage/1152002/description/79a4589654053c3ecc6a7679f9df1847.jpg", "/static/img/goodsImage/1152002/description/966cf17a0504db9bda842f082842acac.jpg", "/static/img/goodsImage/1152002/description/d1badf6a347f151bc7a55c1df32d185d.jpg", "/static/img/goodsImage/1152002/description/d43f2f19e9c93cb7d7b13636766b6d7d.jpg", "/static/img/goodsImage/1152002/description/86c5f37032610ebd11e27b33cadebe40.jpg", "/static/img/goodsImage/1152002/description/d003bf0277ef90720dae2eaff9a83c44.jpg", "/static/img/goodsImage/1152002/description/96ad1523616df341c5da785cd4cbdc82.jpg", "/static/img/goodsImage/1152002/description/47b6b142d3182d6f30f7e286e24f549b.jpg", "/static/img/goodsImage/1152002/description/901d6c0fa2d22a4a12b693acff62917b.jpg", "/static/img/goodsImage/1152002/description/74e21b02b3ea1c478221d7829571109d.jpg", "/static/img/goodsImage/1152002/description/2eb56159c7cf52f4b32a5f9a23d0f55f.jpg", "/static/img/goodsImage/1152002/description/bc6d407431152538f24e53a9385e3816.jpg", "/static/img/goodsImage/1152002/description/451afdbe99c7c56ffb46bd4f7425428d.jpg", "/static/img/goodsImage/1152002/description/0e6d080b44b5369cba20595b047a21dd.jpg", "/static/img/goodsImage/1152002/description/711830e18eaac9a201b7abcd7196af5c.jpg", "/static/img/goodsImage/1152002/description/1fbce4b86219a3d8e35782694ecbcb8f.jpg", "/static/img/goodsImage/1152002/description/9d798b67bdb3e7e5cbeef17004ac08ed.jpg", "/static/img/goodsImage/1152002/description/f8712a0a93f713f8adc315e9ade23462.jpg", "/static/img/goodsImage/1152002/description/4895cb1e89b98899ce19ec1fe3c696fd.jpg", "/static/img/goodsImage/1152002/description/a11fff0992f22e4dbf3668c9cc8fe0f2.jpg", "/static/img/goodsImage/1152002/description/d1e67beb0f489d0dd8b9e034a658bcd0.jpg", "/static/img/goodsImage/1152002/description/e16a28884d496eff3b3ff819128fcfe3.jpg"],
		"inventory": [315],
		"information": [{
			"attrName": "套装重量",
			"attrValue": "11.1kg"
		}, {
			"attrName": "收藏箱尺寸",
			"attrValue": "47.8cm X 27.9cm X 10cm"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 925,
		"date": "1500341237223",
		"category": "志趣",
		"subCategory": "暗黑破坏神"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1233034,
		"price": 138,
		"topName": "星际争霸II 毒爆夜光T恤",
		"subName": "夜晚会发光的T恤",
		"shortDescription": ["胶印工艺", "耐洗耐磨", "棉质材质", "亲肤舒适", "青春时尚", "充满活力"],
		"shortDescriptionImage": ["/static/img/goodsImage/1233034/shortdescriptionImage/619ac8710bebd699124cf199719650ca.png", "/static/img/goodsImage/1233034/shortdescriptionImage/91d2568eb1220a69d86317a612554665.png", "/static/img/goodsImage/1233034/shortdescriptionImage/66d05bfe67afc2e54e270a3a1da9bb03.png"],
		"headImage": ["/static/img/goodsImage/1233034/headImage/484dcb93e4fbbffc0769c13982d6b68c.png", "/static/img/goodsImage/1233034/headImage/a0e4dc4367fa0ec848e264319c897e1d.jpg", "/static/img/goodsImage/1233034/headImage/7ac6fbdcf7b53d5e2f33dce9089b6221.jpg", "/static/img/goodsImage/1233034/headImage/7d8b69e405e713429db96cb910cd6477.jpg", "/static/img/goodsImage/1233034/headImage/e740cffa19d3da96b58970c6db96cd7d.jpg"],
		"type": ["S", "L", "XXL", "M", "XL"],
		"chara": "5色可选",
		"description": ["/static/img/goodsImage/1233034/description/21855d944c0d86ebf0ea39d428aae933.jpg", "/static/img/goodsImage/1233034/description/0c34176d53116b93cb901a7ddfba12d4.jpg", "/static/img/goodsImage/1233034/description/46446e9668c2d19c2ca3b32a9d6bba47.jpg", "/static/img/goodsImage/1233034/description/c8a766f9cf090a41cb5ddf6348d94770.jpg", "/static/img/goodsImage/1233034/description/e227e06ff0f9551f63e693b72eb5d36a.jpg", "/static/img/goodsImage/1233034/description/ae5291cd2b28ff227f8c6dd9d2b62461.jpg", "/static/img/goodsImage/1233034/description/85c0e4dc9c362fdbe98513d04b585486.jpg", "/static/img/goodsImage/1233034/description/b23d7049d5edaf9d1e9f6bc778a29319.jpg", "/static/img/goodsImage/1233034/description/49173ea4f8c4c474d6d981a55cc3503f.jpg", "/static/img/goodsImage/1233034/description/50164e8c84a07b3a3955f265723bb034.jpg", "/static/img/goodsImage/1233034/description/5c83b3687567955ea5929d1d3e687650.jpg", "/static/img/goodsImage/1233034/description/9b6d6c6c39b64230b643386e99106b34.jpg", "/static/img/goodsImage/1233034/description/9944b6397f3c4766eb2b523f50549a46.jpg", "/static/img/goodsImage/1233034/description/0205e824d76223edca8962b2f17a2813.jpg", "/static/img/goodsImage/1233034/description/cc9ddcb5fb22621a5d1d1f0c258a0cb8.jpg", "/static/img/goodsImage/1233034/description/c8fa62ec376e5add1298d0ec2e6e8847.jpg", "/static/img/goodsImage/1233034/description/4e4f1006736975ccf30a1743c9d6ce98.jpg", "/static/img/goodsImage/1233034/description/59d8b5dbd1dc0c77c7c6ee742210c1d8.jpg", "/static/img/goodsImage/1233034/description/1c465f9e4264be3ecdbb4ab9f8d5293b.jpg", "/static/img/goodsImage/1233034/description/202c095bf885a26d43b98edc24445a20.jpg", "/static/img/goodsImage/1233034/description/129de4cbd6430ba1bd8c38d64804affa.jpg", "/static/img/goodsImage/1233034/description/23835d55875f5cd1a79ec7f87183273a.jpg", "/static/img/goodsImage/1233034/description/34222681c598e21b4be83dd1f9c53ed4.jpg"],
		"inventory": [943, 688, 591, 277, 851],
		"information": [{
			"attrName": "注意事项",
			"attrValue": "冷机洗，不可漂白，低温烘干低温熨烫，请勿熨烫印花"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 796,
		"date": "1500341239844",
		"category": "志趣",
		"subCategory": "星际争霸"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1152129,
		"price": 138,
		"topName": "阿尔萨斯 T恤 风暴英雄",
		"subName": "棉质材质，亲肤舒适",
		"shortDescription": ["色泽饱满", "耐洗印花", "棉质材质", "亲肤舒适", "插肩袖版", "减龄T恤"],
		"shortDescriptionImage": ["/static/img/goodsImage/1152129/shortdescriptionImage/e9d51c0d32afea250dcfeb00c2c64f93.png", "/static/img/goodsImage/1152129/shortdescriptionImage/882a467b9de75ca1a71b514f5dfc9453.png", "/static/img/goodsImage/1152129/shortdescriptionImage/c69fac3f381fc2ff0d787263539d0a27.png"],
		"headImage": ["/static/img/goodsImage/1152129/headImage/ca5cb5c48544f69da5b5db7137810ff4.png", "/static/img/goodsImage/1152129/headImage/7ce266b244ca75d0062c09dbb588d4d6.jpg", "/static/img/goodsImage/1152129/headImage/572432d5f532cd950a289ac57b2d483b.jpg", "/static/img/goodsImage/1152129/headImage/2cbde2a88040b13d2e0692ffeebd313a.jpg", "/static/img/goodsImage/1152129/headImage/11e854c75572b691e200c863dfea7e28.jpg"],
		"type": ["S", "M", "L", "XL", "XXL"],
		"chara": "5色可选",
		"description": ["/static/img/goodsImage/1152129/description/b627f433ade96c5cd13310e59c49bf95.jpg", "/static/img/goodsImage/1152129/description/5370f7227b87d377b91ef692b126df2f.jpg", "/static/img/goodsImage/1152129/description/708df407dcb82005643c2077be8bdbdd.jpg", "/static/img/goodsImage/1152129/description/dc950f8847b4128400c9d6739c91ea58.jpg", "/static/img/goodsImage/1152129/description/21520cccad02ae49195e4af162ee03ef.jpg", "/static/img/goodsImage/1152129/description/7ff381150b932b9a3b55127f49595d7d.jpg", "/static/img/goodsImage/1152129/description/2f50b505e86e459dca44ab75b9ea2583.jpg", "/static/img/goodsImage/1152129/description/5bbe4521ad007d63579b1d135fac7f9d.jpg", "/static/img/goodsImage/1152129/description/fd89404aa53022cae94cec9aa8ceb2cf.jpg", "/static/img/goodsImage/1152129/description/08d477363282a4cde3b442976ba73d43.jpg", "/static/img/goodsImage/1152129/description/a28555991e21fed4e3909256d196ef43.jpg", "/static/img/goodsImage/1152129/description/a2fb88e17923fa6e73b0672df4bc9ddf.jpg", "/static/img/goodsImage/1152129/description/4f2851f17555aefe06bc7cf88974b393.jpg", "/static/img/goodsImage/1152129/description/1237ec13f2e4c42fc71b7617e3fa92f2.jpg", "/static/img/goodsImage/1152129/description/385b3dff692d4c9b0e25329762fdc3cd.jpg", "/static/img/goodsImage/1152129/description/224410dc357ea907d4d8c3b8583786b6.jpg"],
		"inventory": [114, 576, 373, 938, 834],
		"information": [{
			"attrName": "材料",
			"attrValue": "棉质"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 523,
		"date": "1500341242450",
		"category": "志趣",
		"subCategory": "风暴英雄"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1164049,
		"price": 89,
		"topName": "简约胸包/斜挎包-杀破狼 梦幻西游",
		"subName": "梦幻潮包，杀破狼护体",
		"shortDescription": ["梦幻专属", "玩家乐享", "超清便携", "做工精细", "多袋分层", "收纳强大"],
		"shortDescriptionImage": ["/static/img/goodsImage/1164049/shortdescriptionImage/c5219d3e2748f59f9e9c3ede901f3a4f.png", "/static/img/goodsImage/1164049/shortdescriptionImage/162242ee66e9bafa0258be8a18b1c85f.png", "/static/img/goodsImage/1164049/shortdescriptionImage/87578224a4fdcda605ad4d70cb5d7913.png"],
		"headImage": ["/static/img/goodsImage/1164049/headImage/44c51b3130727d7dde0385da8f2f9418.png", "/static/img/goodsImage/1164049/headImage/25e3cc2af3369c573e3e41242e4dbcdc.jpg", "/static/img/goodsImage/1164049/headImage/fa0b05dd88545e2bf22beb5acaf1d603.jpg", "/static/img/goodsImage/1164049/headImage/800f85bfed233c6a63744bb3b86d947a.jpg", "/static/img/goodsImage/1164049/headImage/b8a19cc84a444a49f7ff2b0f555d4b11.jpg"],
		"type": ["杀破狼"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1164049/description/9e1a854f89500ecdb4c256964b700df2.jpg", "/static/img/goodsImage/1164049/description/6adcca2a3838339cff2c803d1c38533f.jpg", "/static/img/goodsImage/1164049/description/45930d36f9512f0ec58aa5daebf71723.jpg", "/static/img/goodsImage/1164049/description/43d93952119bb328b0e291084e8800e2.jpg", "/static/img/goodsImage/1164049/description/89123106a910988945bb65787b2c036b.jpg", "/static/img/goodsImage/1164049/description/7241f1968c76e66bbf66d25f6b721b0c.jpg", "/static/img/goodsImage/1164049/description/93db41a75631e119b8607578147f29dc.jpg", "/static/img/goodsImage/1164049/description/823bb986bb9a7fc87ce1875b0eca293e.jpg", "/static/img/goodsImage/1164049/description/92784b7179d14729079a733618b7ffca.jpg", "/static/img/goodsImage/1164049/description/cb3fe36e20b3204edfeaf47a82990ee6.jpg", "/static/img/goodsImage/1164049/description/d265c4efea9e06874053e25eb30558cb.jpg", "/static/img/goodsImage/1164049/description/f269e9541615a4124b65720f7026ad64.jpg", "/static/img/goodsImage/1164049/description/0e9b7f91778fc519460daf6b846d46b0.jpg", "/static/img/goodsImage/1164049/description/bbb99cdb82d51ba1947144b6d7bd8985.jpg", "/static/img/goodsImage/1164049/description/1e2277cba1ff91502babba699830c86c.jpg", "/static/img/goodsImage/1164049/description/be0addf72842b2a0de502ce7c59e56a6.jpg", "/static/img/goodsImage/1164049/description/b9cadd745004926f07b9b1e63e761fce.jpg", "/static/img/goodsImage/1164049/description/a3f998609504f154106d81a2cf64886c.jpg", "/static/img/goodsImage/1164049/description/d252f477dd3764759d529e016156f6ca.jpg", "/static/img/goodsImage/1164049/description/e9ef61afb365e531152027d36c6fcda8.jpg", "/static/img/goodsImage/1164049/description/84d694a9e4d61fe3a11fc74080a09a09.jpg", "/static/img/goodsImage/1164049/description/6c21dd349289b891b198d07b6ae50833.jpg", "/static/img/goodsImage/1164049/description/95cc1050a58569091d67a11886f24d9c.jpg", "/static/img/goodsImage/1164049/description/c2846d0062771427ec4129d8cbd98ed3.jpg", "/static/img/goodsImage/1164049/description/4dad4e461db762b3cb9aecd859c25610.jpg", "/static/img/goodsImage/1164049/description/266fd564b5a3e09d64a8d15034d2043b.jpg", "/static/img/goodsImage/1164049/description/d0472fc614c0dffc5dd6f5b3182d7aa2.jpg", "/static/img/goodsImage/1164049/description/27ed280a1d15f96ba77c134a113e6ae1.jpg", "/static/img/goodsImage/1164049/description/4ececa6a9f4add3ce817ff59290a6ab7.jpg", "/static/img/goodsImage/1164049/description/efa0a954ca156165707623225dd66efc.jpg", "/static/img/goodsImage/1164049/description/4bf3271cc2f5294c638949fbf6391626.jpg", "/static/img/goodsImage/1164049/description/5eaba68b1a7d1ba5d1af47aa7a4bbc56.jpg", "/static/img/goodsImage/1164049/description/ce86909cd2173a1779b643d864f3da58.jpg"],
		"inventory": [18],
		"information": [],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 180,
		"date": "1500341245283",
		"category": "志趣",
		"subCategory": "梦幻西游"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1243000,
		"price": 5888,
		"topName": "18K金镶钻星月项链（潮宏基定制）大话2",
		"subName": "星月相依，守护有情人",
		"shortDescription": ["一件珠宝", "一份惊喜", "璀璨光芒", "永恒印记", "精密切面", "火彩出众"],
		"shortDescriptionImage": ["/static/img/goodsImage/1243000/shortdescriptionImage/dccd82ebbbb8b5e1274f6a927917b57b.png", "/static/img/goodsImage/1243000/shortdescriptionImage/28786c22dbf20150eab92aae0a8e65ce.png", "/static/img/goodsImage/1243000/shortdescriptionImage/644c6bd6a367bf0e12f2ebf9f1455f72.png"],
		"headImage": ["/static/img/goodsImage/1243000/headImage/bb04246c16ec6214ed139c0e5a2eaed6.jpg", "/static/img/goodsImage/1243000/headImage/60426d1e9d69871c1e3cf05734a71df3.jpg", "/static/img/goodsImage/1243000/headImage/10bc65f227dfb6613c98add379787634.jpg", "/static/img/goodsImage/1243000/headImage/6eaa60ae69d28ad924383e7b50552a97.jpg", "/static/img/goodsImage/1243000/headImage/bf6a8b6b6686f491d0df0c680af362a1.jpg"],
		"type": ["奢华版（吊坠20mm）", "轻奢版（吊坠12mm）"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1243000/description/732b3f7fe4778878498bfbe142c69e3f.jpg", "/static/img/goodsImage/1243000/description/31d8bcba6fe9412bc2497957b45c263a.jpg", "/static/img/goodsImage/1243000/description/1b81955af3846c5bfd5057115ee6a820.jpg", "/static/img/goodsImage/1243000/description/9b20a5f69f66707f8608b502c1bab0c1.jpg", "/static/img/goodsImage/1243000/description/6ab787c6c1802afe6607e38de524db68.jpg", "/static/img/goodsImage/1243000/description/7255bfe3fe668792ed701ef9960acd17.jpg", "/static/img/goodsImage/1243000/description/67607fee4f72e3073f101ac87056efcb.jpg", "/static/img/goodsImage/1243000/description/1fee3838050fa12aff10fae56a280da8.jpg", "/static/img/goodsImage/1243000/description/9c7b63263e5249085c67f3a73103b4fa.jpg", "/static/img/goodsImage/1243000/description/e928d57f8d1f69e4109c4a852bdc15eb.jpg", "/static/img/goodsImage/1243000/description/c1ebcd621e0eebb362c747ea238d11c7.jpg", "/static/img/goodsImage/1243000/description/854d28a96c152dafcf366576d9ae5621.jpg", "/static/img/goodsImage/1243000/description/e72043814df9a54768e7aba210130108.jpg", "/static/img/goodsImage/1243000/description/c2ac45c0e76e744959da5d6374b903dd.jpg", "/static/img/goodsImage/1243000/description/69076fc2109be2b3cff7b74b86dd1838.jpg", "/static/img/goodsImage/1243000/description/3811d0c8085f5f55d778184b15dc2cec.jpg", "/static/img/goodsImage/1243000/description/2aa624222087cde1bda0a64813736d59.jpg", "/static/img/goodsImage/1243000/description/15736187f738b43cb0008a0e28d3e6fe.jpg", "/static/img/goodsImage/1243000/description/21adc2b8ceec1fcc4278930de86a4d0d.jpg", "/static/img/goodsImage/1243000/description/a80a42b16b187e3fdba365789afa20f4.jpg", "/static/img/goodsImage/1243000/description/6af8700d7aee275b0160f7c2e1e6705f.jpg", "/static/img/goodsImage/1243000/description/b54287a4627e7e67b4a9d73cc437adca.jpg", "/static/img/goodsImage/1243000/description/6ff5b635bb6a7ee6a996143670b25de0.jpg", "/static/img/goodsImage/1243000/description/da03a56e5fdfbdfc1bf189ab9048c10c.jpg", "/static/img/goodsImage/1243000/description/31f9b7729b9185f95a78e59f422ec06a.jpg", "/static/img/goodsImage/1243000/description/bca6fd53e816685f7b5d9610ed7681d3.jpg", "/static/img/goodsImage/1243000/description/a7b96efb61c720e976fe8ac29d456c04.jpg", "/static/img/goodsImage/1243000/description/4678cf7d7326dddea367ca434c783370.jpg", "/static/img/goodsImage/1243000/description/5bdf3991ba7c13b80b9783de060a747e.jpg", "/static/img/goodsImage/1243000/description/172e4bd49a82883eb93c629e714dd2d4.jpg", "/static/img/goodsImage/1243000/description/571e8da851489de0461b5166351a9078.jpg", "/static/img/goodsImage/1243000/description/b947b41e588622ded1d10f3520dde3e8.jpg", "/static/img/goodsImage/1243000/description/fb9ae9a03f3e154b4309c04a8462125e.jpg"],
		"inventory": [562, 679],
		"information": [],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 216,
		"date": "1500341247910",
		"category": "志趣",
		"subCategory": "大话西游"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1246016,
		"price": 99,
		"topName": "钻石史蒂夫 短袖T恤 童装 我的世界",
		"subName": "天然棉质，环保胶印",
		"shortDescription": ["包边领口", "加固设计", "工整走线", "严谨锁边", "全棉材质", "自然亲肤"],
		"shortDescriptionImage": ["/static/img/goodsImage/1246016/shortdescriptionImage/df9a992e46cb3396764f76664c98711b.png", "/static/img/goodsImage/1246016/shortdescriptionImage/f3bff65a4c341a9c998fe53410280e20.png", "/static/img/goodsImage/1246016/shortdescriptionImage/27ffd6d846f0784a41b82f1f45925671.png"],
		"headImage": ["/static/img/goodsImage/1246016/headImage/96c7ff9bc709edc31cd851a15dbf4849.png", "/static/img/goodsImage/1246016/headImage/b5b2b0943fa0f400875b59f0b791ae52.jpg", "/static/img/goodsImage/1246016/headImage/703fb2f70f2d238b9ba58e0389aca84e.jpg", "/static/img/goodsImage/1246016/headImage/adb2d725c5549e08653bc9a6133f3ffd.jpg", "/static/img/goodsImage/1246016/headImage/685f67586b2e47f2a642a4146bd08c8d.jpg"],
		"type": ["童装：120cm", "童装：130cm", "童装：140cm", "童装：150cm", "童装：160cm"],
		"chara": "5色可选",
		"description": ["/static/img/goodsImage/1246016/description/3be1357434ce31860ed1ba45b9d18558.jpg", "/static/img/goodsImage/1246016/description/5a026e29bfa8c6ac4e80b556f39c1876.jpg", "/static/img/goodsImage/1246016/description/ebdc0e030fb97e1da743bf4ae20629d7.jpg", "/static/img/goodsImage/1246016/description/e7e44f0ae536ecc49c2d473a3af004ee.jpg", "/static/img/goodsImage/1246016/description/e6680bcc9f1d23753c289728d01c9cee.jpg", "/static/img/goodsImage/1246016/description/f342a725c83c6afa4b6073ded0c6df67.jpg", "/static/img/goodsImage/1246016/description/962a98a442e1cfb76b714ffa05a8da37.jpg", "/static/img/goodsImage/1246016/description/3574aa29982d6745e3911b600ec11697.jpg", "/static/img/goodsImage/1246016/description/6e2b56bb0b8d6758cb50f29678cffb1e.jpg", "/static/img/goodsImage/1246016/description/0d3a24fa6ac95e0aebe87b6867b38949.jpg", "/static/img/goodsImage/1246016/description/9a4eea870f3931a0819f860be24d1073.jpg", "/static/img/goodsImage/1246016/description/7a7b3633c43ad8825bf9c4c62da4b2ae.jpg", "/static/img/goodsImage/1246016/description/0d53130b0e7509a4a777a838ccfb33f3.jpg", "/static/img/goodsImage/1246016/description/af24abb3f987aca136056d030a204f57.jpg", "/static/img/goodsImage/1246016/description/70deedd550d08184ebe8ba39ac94d478.jpg", "/static/img/goodsImage/1246016/description/991a5eb7a9e139357c1ea9a9e26e2e77.jpg", "/static/img/goodsImage/1246016/description/3392980e4f072a110d904fc24c3e89f2.jpg", "/static/img/goodsImage/1246016/description/beb7af7556adf3207420bb13e75cb01c.jpg", "/static/img/goodsImage/1246016/description/052ad3088df567ea4c3eec1498ce06a1.jpg", "/static/img/goodsImage/1246016/description/30fabf3421f4c6aa3a1f058f9fa27390.jpg", "/static/img/goodsImage/1246016/description/def773bc4a198bde25527552e89f9f39.jpg", "/static/img/goodsImage/1246016/description/78cdea25424e934a3f43688b4249367b.jpg", "/static/img/goodsImage/1246016/description/d522b5cb77ccf8c7c245ddcb75e33ae3.jpg", "/static/img/goodsImage/1246016/description/b096db35cf078ff5fd18ba6066baa76d.jpg", "/static/img/goodsImage/1246016/description/32721e782bc73ac97c7b3078d3f386c1.jpg", "/static/img/goodsImage/1246016/description/57a7dfc13a9486e3f10c812ffea6405f.jpg", "/static/img/goodsImage/1246016/description/bffabda50cd631baca28d0a17311b2ac.jpg", "/static/img/goodsImage/1246016/description/b8ee159786f3219d33a3676eef2ec41f.jpg", "/static/img/goodsImage/1246016/description/b1792e9587bb1a86992410e2e24b02b0.jpg", "/static/img/goodsImage/1246016/description/a29f1b6fe352611d4b9e5597895c29cf.jpg"],
		"inventory": [569, 209, 852, 519, 675],
		"information": [{
			"attrName": "颜色",
			"attrValue": "红色"
		}],
		"label": [{
			"title": "新品",
			"type": "1"
		}],
		"manufacture": "",
		"sale": 574,
		"date": "1500341250577",
		"category": "志趣",
		"subCategory": "我的世界"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1197000,
		"price": 69,
		"topName": "阴阳师主题短袖T恤",
		"subName": "国产和风 匠心巨制",
		"shortDescription": ["精梳全棉", "透气舒适", "墨意格调", "至潮至酷", "活性印染", "环保安心"],
		"shortDescriptionImage": ["/static/img/goodsImage/1197000/shortdescriptionImage/c3eed9aa135e48e1a23dd8d82c701622.jpg", "/static/img/goodsImage/1197000/shortdescriptionImage/0e959778f66a768cd3afea807c8e03fc.jpg", "/static/img/goodsImage/1197000/shortdescriptionImage/15f6f10cd0468b328f7042b83ec4f90a.jpg"],
		"headImage": ["/static/img/goodsImage/1197000/headImage/44d21890430058a0696ee0d1598066e3.png", "/static/img/goodsImage/1197000/headImage/e35121c28b9ec63f9f81ddb98f668293.jpg", "/static/img/goodsImage/1197000/headImage/3f57284eaec280298ece7bb726e69563.jpg", "/static/img/goodsImage/1197000/headImage/05a72050c7418814b4ed94382f77b8bb.jpg", "/static/img/goodsImage/1197000/headImage/d5d9b96349e20ab9826e68aa26875a86.jpg"],
		"type": ["白色（天翔鹤斩)", "白色（御行）", "白色（欧皇）", "白色（破势）", "白色（荒）", "白色（结界突破）"],
		"chara": "6色可选",
		"description": ["/static/img/goodsImage/1197000/description/c3cb3c4fa6200152d90c7359ebb8455a.jpg", "/static/img/goodsImage/1197000/description/76af4609eb241eabba4935911faf1104.jpg", "/static/img/goodsImage/1197000/description/01bed63dd06a52b07de1d6ab778c1e1b.jpg", "/static/img/goodsImage/1197000/description/ce21d96438883babbf5eaa1d91d0da3c.jpg", "/static/img/goodsImage/1197000/description/69645cac9fc774bc1c1c9414f380c8d2.jpg", "/static/img/goodsImage/1197000/description/6805980482486ae52c248bc718d5fbe1.jpg", "/static/img/goodsImage/1197000/description/10dd5b40cc8004b3bc92829fe11b04a6.jpg", "/static/img/goodsImage/1197000/description/8f8a1d98917555fe230ffa02cc36020b.jpg", "/static/img/goodsImage/1197000/description/bfdb616be05d2a81ff24b7f3a3d473db.jpg", "/static/img/goodsImage/1197000/description/31ee414be3d6f186e098eee135beb835.jpg", "/static/img/goodsImage/1197000/description/cfc0975f683cbc2ef6b996c7f7d71aed.jpg", "/static/img/goodsImage/1197000/description/9372c4f24041b767d381c8e0be20f423.jpg", "/static/img/goodsImage/1197000/description/a84a2975a0efe296b4b3e35c88935217.jpg", "/static/img/goodsImage/1197000/description/8bc381f0435d6ea9099ad475e02c5b60.jpg", "/static/img/goodsImage/1197000/description/45ec30e0bcd31850f669ee58ff3f27e9.jpg", "/static/img/goodsImage/1197000/description/29854170c8039a6295bcc7b560ca7780.jpg", "/static/img/goodsImage/1197000/description/9cb51585bbf2c3ff988df93bdd220a83.jpg", "/static/img/goodsImage/1197000/description/6ecb54bfc79c0ce996a8d744f76e460f.jpg", "/static/img/goodsImage/1197000/description/588398c675af7461fa6024e1d73b2e1c.jpg", "/static/img/goodsImage/1197000/description/5176e7847323a1bf262415375781a126.jpg", "/static/img/goodsImage/1197000/description/85b501c8fa45b7dcf0a1879179e2eaa7.jpg", "/static/img/goodsImage/1197000/description/7efee3ac867369b9de9935bd167b73f2.jpg", "/static/img/goodsImage/1197000/description/0ffc0d7e0a55e6bb48fbf1da0a1ca185.jpg", "/static/img/goodsImage/1197000/description/7716ecd48eadaa103976655e6b9cc341.jpg", "/static/img/goodsImage/1197000/description/6e58eaa759517e19d801438365d222ef.jpg", "/static/img/goodsImage/1197000/description/be7d1ecae206967c58efc8635317d365.jpg", "/static/img/goodsImage/1197000/description/8369cb04866d033711087836652460c2.jpg", "/static/img/goodsImage/1197000/description/9a20178c654bf4806684be85b34222ff.jpg", "/static/img/goodsImage/1197000/description/a86fcfb96794693a6956b3e6360b3bb5.jpg", "/static/img/goodsImage/1197000/description/802a6435b6ec96bae3e55d081abb4958.jpg", "/static/img/goodsImage/1197000/description/d03582d1c5afe921f19849b4c937960a.jpg", "/static/img/goodsImage/1197000/description/1181a934a3279b5b5441dd879cc5bdc1.jpg", "/static/img/goodsImage/1197000/description/a730fcce6223e0fb7c4a62d3d25ba751.jpg", "/static/img/goodsImage/1197000/description/0d52deb15793fae3d0b83b6e051c3fab.jpg", "/static/img/goodsImage/1197000/description/9a4197f28b36da35fa543de4d2f71253.jpg", "/static/img/goodsImage/1197000/description/f5e9b2d0e99620f69843aea10371c0a9.jpg", "/static/img/goodsImage/1197000/description/961480c4b8067ed8ccfaf61a98a92cd9.jpg", "/static/img/goodsImage/1197000/description/f41e095da49b4d34b0f57b8166aaba3f.jpg", "/static/img/goodsImage/1197000/description/0553c6fdaf71d332ef4ac0f1cd0fab12.jpg", "/static/img/goodsImage/1197000/description/773a5edd2d526329b89fa277e29ae0e0.jpg", "/static/img/goodsImage/1197000/description/b4b7e9e9e49037db8cd6df596520d347.jpg", "/static/img/goodsImage/1197000/description/020ecb270079a7ab578294c1b3136dd7.jpg", "/static/img/goodsImage/1197000/description/d86ebe0c672af0b906e607c22b81fcba.jpg", "/static/img/goodsImage/1197000/description/48efc3321a12e858a070a97e7c350447.jpg", "/static/img/goodsImage/1197000/description/8eeb2828879b3ec7b261c04877593720.jpg", "/static/img/goodsImage/1197000/description/fb51a8037ac7fd88be023ad290e6e5d7.jpg", "/static/img/goodsImage/1197000/description/d7ff38462b817597d5c00242ef8ab3f8.jpg", "/static/img/goodsImage/1197000/description/af0519f4e09d55d486b108dcb9157a17.jpg", "/static/img/goodsImage/1197000/description/d25c8234d10e641cc2204d2b7ac2cab7.jpg", "/static/img/goodsImage/1197000/description/6c4bb170fe155da6af982247b9b3c360.jpg", "/static/img/goodsImage/1197000/description/bd627770f710a1bf1e4a5d3b48330d74.jpg", "/static/img/goodsImage/1197000/description/880d6fdb8affe7985a2f327412fc179d.jpg", "/static/img/goodsImage/1197000/description/aa27a79138cd18e439d5a772aa9afb02.jpg", "/static/img/goodsImage/1197000/description/0b8327c71340cc0003782a098c313fe5.jpg", "/static/img/goodsImage/1197000/description/ae6042463804373d74d04d3dd415ca21.jpg", "/static/img/goodsImage/1197000/description/b673bbf022c8f0f7fc283744956bec70.jpg", "/static/img/goodsImage/1197000/description/2d0c97d30baa8126920a1721bd5e1160.jpg", "/static/img/goodsImage/1197000/description/8a3e66ef19fc9c130d0c19ea44c9cf20.jpg", "/static/img/goodsImage/1197000/description/3b5724b6ff311723af4814cc72b2b74c.jpg", "/static/img/goodsImage/1197000/description/d0630aea254d01e5a67b05ef214d7911.jpg", "/static/img/goodsImage/1197000/description/f723f2b0dc6b13f71a9a42441add1a68.jpg", "/static/img/goodsImage/1197000/description/0e1223bcb2365ed2b03bd6008abddc43.jpg", "/static/img/goodsImage/1197000/description/507219df829eb7e47de57464d11dbcc7.jpg", "/static/img/goodsImage/1197000/description/87b768b8b8a25bd8063f4bbd9012772f.jpg", "/static/img/goodsImage/1197000/description/21b966179bd0f8cc018cfae7658a0cb1.jpg", "/static/img/goodsImage/1197000/description/329845e872011dc7757248258ac9e0ca.jpg", "/static/img/goodsImage/1197000/description/923b1d6e365b7efd8264240c709975ac.jpg", "/static/img/goodsImage/1197000/description/1254f937e92f49c4183f2c878d4effa4.jpg", "/static/img/goodsImage/1197000/description/d02d4f6bd47dfa5fe1fabbee6fd79c76.jpg", "/static/img/goodsImage/1197000/description/2f15d4f2486e293f15bb295e7fe31de6.jpg", "/static/img/goodsImage/1197000/description/71359bc95f503cfc41949e792cc9eeb7.jpg", "/static/img/goodsImage/1197000/description/ae56d9214e1ca915b057cad19c340327.jpg", "/static/img/goodsImage/1197000/description/d8ad0526a6d466a9e68c2372cc8ae769.jpg", "/static/img/goodsImage/1197000/description/91458c9d4e025144df66b7a2f574ad07.jpg", "/static/img/goodsImage/1197000/description/37ef0b790f2f3e49cc8c9f16fd988334.jpg", "/static/img/goodsImage/1197000/description/7f789b49da423513a76e92007b85610d.jpg", "/static/img/goodsImage/1197000/description/483bae09e52881bdc7275386850bdd80.jpg", "/static/img/goodsImage/1197000/description/90cc27426f8de5a84145c456b516d93a.jpg", "/static/img/goodsImage/1197000/description/04cc3ffea8ca521e112b59649b02466d.jpg", "/static/img/goodsImage/1197000/description/519c160acf66194036beaf2bc790f85b.jpg", "/static/img/goodsImage/1197000/description/da7fab9d84a6cc3229c2e40bffcbde69.jpg", "/static/img/goodsImage/1197000/description/25d3033e90182b8b82700fc23ed5c62d.jpg", "/static/img/goodsImage/1197000/description/6579b6f313cb2c94cf39ac2e584681e6.jpg", "/static/img/goodsImage/1197000/description/b5d01ab1f835cf0cf22b531be76d8f83.jpg", "/static/img/goodsImage/1197000/description/feaff208d963d941d3f72f6fa95329d1.jpg", "/static/img/goodsImage/1197000/description/6184d21d9aa1930502029fdfe9706af0.jpg", "/static/img/goodsImage/1197000/description/04fb58a1b034faf958c84417690145f0.jpg", "/static/img/goodsImage/1197000/description/0d7845a323ac0a5a7f6387a0838ee87b.jpg", "/static/img/goodsImage/1197000/description/cb941df6cbb8a2bfcf1a2774b3f5cd6d.jpg", "/static/img/goodsImage/1197000/description/412e269125bd6abefd99ced2bc223f18.jpg", "/static/img/goodsImage/1197000/description/e735544b1bdd4c5b947e53e7361ddcdf.jpg", "/static/img/goodsImage/1197000/description/01a7013e004d36b19340bd9f74d17896.jpg", "/static/img/goodsImage/1197000/description/d254e7454ef92e1304fee75c58b2c464.jpg", "/static/img/goodsImage/1197000/description/881603166810ef75df006ce9885fdd68.jpg", "/static/img/goodsImage/1197000/description/1c755e765759223bc1c303e355ab182f.jpg", "/static/img/goodsImage/1197000/description/0efe6a5bfcb994a89fb2846da2c3d2a3.jpg", "/static/img/goodsImage/1197000/description/a12ed92aeb5e9c7343d37726e6c62d66.jpg", "/static/img/goodsImage/1197000/description/b7d5cde80b50f34c18373a1f988a2a98.jpg", "/static/img/goodsImage/1197000/description/7c50eded60eb294da2d086bd2ebb0ffe.jpg", "/static/img/goodsImage/1197000/description/4b9fdcd8d6991f314a7554388da7ce5d.jpg", "/static/img/goodsImage/1197000/description/417759b6ab4eddf59406da5fb34b7c48.jpg", "/static/img/goodsImage/1197000/description/278f8fbbbc9f1dd34084c5cb7f5c57f5.jpg", "/static/img/goodsImage/1197000/description/51e7f6676fb2607c85e7d64dd0ff1af6.jpg", "/static/img/goodsImage/1197000/description/dc929a29822b01eb62e9a4a685d273ca.jpg", "/static/img/goodsImage/1197000/description/946a8a90330d31ba09c8c3f01ce62d66.jpg", "/static/img/goodsImage/1197000/description/0e5e59fc5453b9424391e70cef78377c.jpg", "/static/img/goodsImage/1197000/description/51ca88a7154d5642c8880e698687ffbf.jpg", "/static/img/goodsImage/1197000/description/b97b4084fe37ee5f1601bc345595f7d1.jpg", "/static/img/goodsImage/1197000/description/4f2494a8e172ce6dc40d153505ccc61b.jpg", "/static/img/goodsImage/1197000/description/7d909bb30aa58857fbdba5e527220dce.jpg", "/static/img/goodsImage/1197000/description/8df3f9462b7d80e1ce4c1807f36df6b3.jpg", "/static/img/goodsImage/1197000/description/bf53074f76ee6c774b95a3dfb2dbab8a.jpg", "/static/img/goodsImage/1197000/description/9b972cdbd8a8558c4167d404cfd9106b.jpg", "/static/img/goodsImage/1197000/description/7be48f0b2d96f115a099bda9d76bff94.jpg", "/static/img/goodsImage/1197000/description/5d6be0143ec87fa71299e9ab4f9d512b.jpg", "/static/img/goodsImage/1197000/description/1b9ce91b39979e3117862fa796f814f3.jpg"],
		"inventory": [382, 586, 496, 395, 600, 634],
		"information": [{
			"attrName": "面料",
			"attrValue": "100%棉"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 447,
		"date": "1500341254039",
		"category": "志趣",
		"subCategory": "阴阳师"
	})
	goodsEntity.save();
	var goodsEntity = new goodsModel({
		"ID": 1006032,
		"price": 78,
		"topName": "夏日甜心公仔抱枕",
		"subName": "精准走线，自由靠卧",
		"shortDescription": ["精准走线", "自由靠卧", "自由靠卧", "精准走线", "精准走线", "自由靠卧"],
		"shortDescriptionImage": ["/static/img/goodsImage/1006032/shortdescriptionImage/ef07fb5df81971c750d802b2dee93ca0.jpg", "/static/img/goodsImage/1006032/shortdescriptionImage/c67edd6c5cc196f417928afe6144595c.jpg", "/static/img/goodsImage/1006032/shortdescriptionImage/2778ad9202c8bc4e897d8c6ba9c7d9de.jpg"],
		"headImage": ["/static/img/goodsImage/1006032/headImage/329945d25afdf6cd372a1aadcbb4aadd.png", "/static/img/goodsImage/1006032/headImage/ef07fb5df81971c750d802b2dee93ca0.jpg", "/static/img/goodsImage/1006032/headImage/c67edd6c5cc196f417928afe6144595c.jpg", "/static/img/goodsImage/1006032/headImage/2778ad9202c8bc4e897d8c6ba9c7d9de.jpg", "/static/img/goodsImage/1006032/headImage/d750aceee8b3b964b8f25801226aac0b.jpg"],
		"type": ["抱枕"],
		"chara": "1色可选",
		"description": ["/static/img/goodsImage/1006032/description/d5321b014faf8ef0e65bab57d67d00d9.jpg", "/static/img/goodsImage/1006032/description/de5473cda07faed9316f3e0274b4bd4f.jpg", "/static/img/goodsImage/1006032/description/c8a32debdb9f8ded3d1d8b39e671f36b.jpg", "/static/img/goodsImage/1006032/description/cac5e69cc591f3707291895fb31f41eb.jpg", "/static/img/goodsImage/1006032/description/1beb3fb2ace933a98fe5fcb29815c557.jpg", "/static/img/goodsImage/1006032/description/75f4f4ff1b291493e6b4fdfeff409fd8.jpg", "/static/img/goodsImage/1006032/description/95adde008156a2995d5b614293870301.jpg", "/static/img/goodsImage/1006032/description/36e47eb8926ce81674365f27e4cd9af0.jpg"],
		"inventory": [683],
		"information": [{
			"attrName": "填充物成分",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "尺寸",
			"attrValue": "33*40*20cm"
		}, {
			"attrName": "重量",
			"attrValue": "约610g"
		}],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 941,
		"date": "1500800721272",
		"category": "志趣",
		"subCategory": "夏日甜心"
	})
	goodsEntity.save();

	var goodsEntity = new goodsModel({
		"ID": 1076016,
		"price": 100,
		"topName": "严选礼品卡 100元面值",
		"subName": "高档、精致、省心的礼赠佳品",
		"shortDescription": ["精准走线", "自由靠卧", "自由靠卧", "精准走线", "精准走线", "自由靠卧"],
		"shortDescriptionImage": ["/static/img/goodsImage/1076015/shortdescriptionImage/067ef946824ae052a52999a28c5690ad.jpg", "/static/img/goodsImage/1076015/shortdescriptionImage/5dcb0626754c50717f3bdc6d076d0e3f.jpg", "/static/img/goodsImage/1076015/shortdescriptionImage/1360a509fd868dd4127331e1baccb807.jpg"],
		"headImage": ["/static/img/goodsImage/1076015/headImage/e1d87f845a5773665bd7042d28cbf11a.png", "/static/img/goodsImage/1076015/headImage/067ef946824ae052a52999a28c5690ad.jpg", "/static/img/goodsImage/1076015/headImage/5dcb0626754c50717f3bdc6d076d0e3f.jpg", "/static/img/goodsImage/1076015/headImage/1360a509fd868dd4127331e1baccb807.jpg", "/static/img/goodsImage/1076015/headImage/1be7e27efd1047bd130a89672a1746b6.jpg"],
		"type": ["电子卡", "实体卡"],
		"chara": "2色可选",
		"description": ["/static/img/goodsImage/1076015/description/20b5e18a14eb0affdc395d29bd113d71.jpg", "/static/img/goodsImage/1076015/description/56256da6310030460e5be60cc7319b04.jpg", "/static/img/goodsImage/1076015/description/a870f1dd4804f234ee091d944797a2aa.jpg", "/static/img/goodsImage/1076015/description/6b850852210eb191576644f08364a772.jpg", "/static/img/goodsImage/1076015/description/8c80f14e947e6e935c30f756f20c9562.jpg", "/static/img/goodsImage/1076015/description/4dab7fa231b7729b1b61a08f0ff0364b.jpg", "/static/img/goodsImage/1076015/description/7a9fe1bd3469d4598007c970ea6e1222.jpg", "/static/img/goodsImage/1076015/description/33501101c55f248ec27d247b6cd66cd0.jpg", "/static/img/goodsImage/1076015/description/8e74349bb2d91d6dbbe31200261c345a.jpg", "/static/img/goodsImage/1076015/description/fcdb1d2aec8e2a67cedb2108006a9998.jpg", "/static/img/goodsImage/1076015/description/1a10d19ba8326466b4fff9ddddfdad37.jpg", "/static/img/goodsImage/1076015/description/1607f9867542c44cadb8b7d72bc1e097.jpg", "/static/img/goodsImage/1076015/description/e8979a9dc7f6ccee294f4c44b81e294e.jpg", "/static/img/goodsImage/1076015/description/b45e1b72ecf8e11c7716633c0c5d4311.jpg", "/static/img/goodsImage/1076015/description/b3ba804a3311efd690ad9e99bf961a27.jpg", "/static/img/goodsImage/1076015/description/cd54160a8b7eb47a7868d55d25395535.jpg", "/static/img/goodsImage/1076015/description/ca1c98049e3b902347116c6245eb3476.jpg", "/static/img/goodsImage/1076015/description/b8ec471cd4bfea845336c8f34b6d4088.jpg", "/static/img/goodsImage/1076015/description/9ad8ada8ed85c15e05acdcf44152c3e7.jpg", "/static/img/goodsImage/1076015/description/37e48594b4e6f5ebc04361238e3b031e.jpg", "/static/img/goodsImage/1076015/description/4ac026d0e5ce00a934b8507993297900.jpg", "/static/img/goodsImage/1076015/description/bd6e33aa44faf996c48aebbe682f6904.jpg", "/static/img/goodsImage/1076015/description/a7db5180ee3b7ab6c79c7404715a89f6.jpg", "/static/img/goodsImage/1076015/description/3e4d1a1d5e41968691eb6ab38e286549.jpg", "/static/img/goodsImage/1076015/description/a7e43bd3c0bbb5242ab61a78f315797b.jpg", "/static/img/goodsImage/1076015/description/6b5c97098498a5641e526358645446b6.jpg", "/static/img/goodsImage/1076015/description/5300957568f9a5d056fb85f2a0568771.jpg"],
		"inventory": [785, 513],
		"information": [],
		"label": [{
			"title": "",
			"type": ""
		}],
		"manufacture": "",
		"sale": 885,
		"date": "1500800758287",
		"category": "志趣",
		"subCategory": "礼品卡"
	})
	goodsEntity.save();

}