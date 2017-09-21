const Mock = require('mockjs');
const Random = Mock.Random;

export const topic = [{
        path: '/goods/topic',
        type: 'get',
        data(body) {
            const data = {
                result: 'success',
                data: [{
                        _id: "",
                        topicID: 0,
                        writer: '餐厨组：锅锅',
                        writerImage: 'https://yanxuan.nosdn.127.net/14996971421670046.png?imageView&thumbnail=64y64',
                        headline: '告别脏累的懒人清洁新选择',
                        content: '夏天蚊虫细菌滋生，是最需要做好清洁的季节。然而天气这么热，随便一动就出汗，哪有心...',
                        watchNumber: '5.4k',
                        __v: 0,
                        picture: [
                            'https://yanxuan.nosdn.127.net/14996971492420047.jpg',
                            'https://yanxuan.nosdn.127.net/14996971525560048.jpg',
                            'https://yanxuan.nosdn.127.net/14996971545560049.jpg',
                        ],
                        price: 0
                    }, {
                        _id: "",
                        topicID: 1,
                        writerImage: 'http://yanxuan.nosdn.127.net/dc1b60a9c6d45c743838d55a50826424.png?imageView&thumbnail=64y64',
                        writer: '明星商品',
                        __v: 0,
                        watchNumber: '52.3k',
                        picture: [
                            'http://yanxuan.nosdn.127.net/3cc0495444b9e6755899c711dafa6f9e.jpg',
                        ],
                        headline: '买对床品，才能夜夜好梦',
                        price: 109,
                        content: '床品件套满299即送太鼓抱枕'
                    },
                    {
                        _id: "",
                        topicID: 2,
                        writerImage: 'https://yanxuan.nosdn.127.net/14994216007911847.png?imageView&thumbnail=64y64',
                        writer: '智造组：夏大',
                        picture: [
                            'https://yanxuan.nosdn.127.net/14994248674911878.jpg',
                            'https://yanxuan.nosdn.127.net/14994250230111880.jpg',
                            'https://yanxuan.nosdn.127.net/14994250204371879.jpg'
                        ],
                        watchNumber: '11.5k',
                        headline: '不插电的小风扇，让清凉随行',
                        price: 0,
                        content: '小暑过，一日热三分。能随时随地拥有凉风，是暑热天里我们最期待的事情。为此，我们在...'
                    },
                    {
                        _id: "",
                        topicID: 2,
                        writerImage: 'http://yanxuan.nosdn.127.net/cf79163a1bd144d507b8cac3e711fd70.png?imageView&thumbnail=64y64',
                        writer: '明星商品',
                        picture: [
                            'http://yanxuan.nosdn.127.net/8769bec52862bbfc6e5f72d6c17571dd.jpg',
                        ],
                        watchNumber: '4.0k',
                        headline: '严选，从家门口的龙井茶开始',
                        price: 85,
                        content: '特级龙井礼盒限时直减644元'
                    }, {
                        _id: "",
                        topicID: 0,
                        writer: '餐厨组：锅锅',
                        writerImage: 'https://yanxuan.nosdn.127.net/14996971421670046.png?imageView&thumbnail=64y64',
                        headline: '告别脏累的懒人清洁新选择',
                        content: '夏天蚊虫细菌滋生，是最需要做好清洁的季节。然而天气这么热，随便一动就出汗，哪有心...',
                        watchNumber: '5.4k',
                        __v: 0,
                        picture: [
                            'https://yanxuan.nosdn.127.net/14996971492420047.jpg',
                            'https://yanxuan.nosdn.127.net/14996971525560048.jpg',
                            'https://yanxuan.nosdn.127.net/14996971545560049.jpg',
                        ],
                        price: 0
                    }, {
                        _id: "",
                        topicID: 1,
                        writerImage: 'http://yanxuan.nosdn.127.net/dc1b60a9c6d45c743838d55a50826424.png?imageView&thumbnail=64y64',
                        writer: '明星商品',
                        __v: 0,
                        watchNumber: '52.3k',
                        picture: [
                            'http://yanxuan.nosdn.127.net/3cc0495444b9e6755899c711dafa6f9e.jpg',
                        ],
                        headline: '买对床品，才能夜夜好梦',
                        price: 109,
                        content: '床品件套满299即送太鼓抱枕'
                    },
                    {
                        _id: "",
                        topicID: 2,
                        writerImage: 'https://yanxuan.nosdn.127.net/14994216007911847.png?imageView&thumbnail=64y64',
                        writer: '丁磊',
                        picture: [
                            'https://yanxuan.nosdn.127.net/14994248674911878.jpg',
                            'https://yanxuan.nosdn.127.net/14994250230111880.jpg',
                            'https://yanxuan.nosdn.127.net/14994250204371879.jpg'
                        ],
                        watchNumber: '11.5k',
                        headline: '不插电的小风扇，让清凉随行',
                        price: 0,
                        content: '小暑过，一日热三分。能随时随地拥有凉风，是暑热天里我们最期待的事情。为此，我们在...'
                    },
                    {
                        _id: "",
                        topicID: 2,
                        writerImage: 'http://yanxuan.nosdn.127.net/cf79163a1bd144d507b8cac3e711fd70.png?imageView&thumbnail=64y64',
                        writer: '明星商品',
                        picture: [
                            'http://yanxuan.nosdn.127.net/8769bec52862bbfc6e5f72d6c17571dd.jpg',
                        ],
                        watchNumber: '4.0k',
                        headline: '严选，从家门口的龙井茶开始',
                        price: 85,
                        content: '特级龙井礼盒限时直减644元'
                    },
                    {
                        _id: "",
                        topicID: 2,
                        writerImage: 'http://yanxuan.nosdn.127.net/298b157c754e94fa8048738b17414fd0.png?imageView&thumbnail=64y64',
                        writer: '严选推荐',
                        picture: [
                            'http://yanxuan.nosdn.127.net/636f2fa8665073f4fec3acb6353a121b.jpg',
                        ],
                        watchNumber: '21.2k',
                        headline: '都市女郎的生活应该什么样？',
                        price: 59,
                        content: '像亦舒女郎一样拥有好品味'
                    }, {
                        _id: "",
                        topicID: 1,
                        writerImage: 'http://yanxuan.nosdn.127.net/dc1b60a9c6d45c743838d55a50826424.png?imageView&thumbnail=64y64',
                        writer: '明星商品',
                        __v: 0,
                        watchNumber: '52.3k',
                        picture: [
                            'http://yanxuan.nosdn.127.net/3cc0495444b9e6755899c711dafa6f9e.jpg',
                        ],
                        headline: '买对床品，才能夜夜好梦',
                        price: 109,
                        content: '床品件套满299即送太鼓抱枕'
                    },
                ]
            }
            return data;
        }
    },
    {
        path: '/goods/topic?number=4',
        type: 'get',
        data(body) {
            const data = {
                result: 'success',
                data: [{
                        _id: "",
                        topicID: 0,
                        writer: '餐厨组：锅锅',
                        writerImage: 'https://yanxuan.nosdn.127.net/14996971421670046.png?imageView&thumbnail=64y64',
                        headline: '告别脏累的懒人清洁新选择',
                        content: '夏天蚊虫细菌滋生，是最需要做好清洁的季节。然而天气这么热，随便一动就出汗，哪有心...',
                        watchNumber: '5.4k',
                        __v: 0,
                        picture: [
                            'https://yanxuan.nosdn.127.net/14996971492420047.jpg',
                            'https://yanxuan.nosdn.127.net/14996971525560048.jpg',
                            'https://yanxuan.nosdn.127.net/14996971545560049.jpg',
                        ],
                        price: 0
                    }, {
                        _id: "",
                        topicID: 1,
                        writerImage: 'http://yanxuan.nosdn.127.net/dc1b60a9c6d45c743838d55a50826424.png?imageView&thumbnail=64y64',
                        writer: '明星商品',
                        __v: 0,
                        watchNumber: '52.3k',
                        picture: [
                            'http://yanxuan.nosdn.127.net/3cc0495444b9e6755899c711dafa6f9e.jpg',
                            '',
                            ''
                        ],
                        headline: '买对床品，才能夜夜好梦',
                        price: 109,
                        content: '床品件套满299即送太鼓抱枕'
                    },
                    {
                        _id: "",
                        topicID: 2,
                        writerImage: 'https://yanxuan.nosdn.127.net/14994216007911847.png?imageView&thumbnail=64y64',
                        writer: '智造组：夏大',
                        picture: [
                            'https://yanxuan.nosdn.127.net/14994248674911878.jpg',
                            'https://yanxuan.nosdn.127.net/14994250230111880.jpg',
                            'https://yanxuan.nosdn.127.net/14994250204371879.jpg'
                        ],
                        watchNumber: '11.5k',
                        headline: '不插电的小风扇，让清凉随行',
                        price: 0,
                        content: '小暑过，一日热三分。能随时随地拥有凉风，是暑热天里我们最期待的事情。为此，我们在...'
                    },
                    {
                        _id: "",
                        topicID: 2,
                        writerImage: 'http://yanxuan.nosdn.127.net/cf79163a1bd144d507b8cac3e711fd70.png?imageView&thumbnail=64y64',
                        writer: '明星商品',
                        picture: [
                            'http://yanxuan.nosdn.127.net/8769bec52862bbfc6e5f72d6c17571dd.jpg',
                            '',
                            ''
                        ],
                        watchNumber: '4.0k',
                        headline: '严选，从家门口的龙井茶开始',
                        price: 85,
                        content: '特级龙井礼盒限时直减644元'
                    }
                ]
            }
            return data;
        }
    }
]