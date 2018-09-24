const Mock = require('mockjs');
const Random = Mock.Random;

export const home = [{
    path: '/goods/recentSale', // 栏截获取商品简介的路由
    type: 'get',
    data(body) {
      let result = {
        result: 'success',
        data: []
      }

      for (let j = 0; j < Random.natural(7, 9); j++) {
        let good = {
          topName: Random.cname(),
          subName: Random.ctitle(),
          price: Random.natural(0, 200),
          ID: 1,
          headImage: `static/img/goods/good-${Random.natural(1, 16)}.png`,
          chara: Random.ctitle(),
          labels: []
        };

        for (let m = 0; m < Random.natural(0, 1); m++) {
          let label = {
            title: Random.ctitle(),
            type: Random.natural(1, 2)
          }

          good.labels.push(label);
        }

        result.data.push(good)
      }

      return result;
    },
  },
  {
    path: '/goods/topSale', // 栏截获取商品简介的路由
    type: 'get',
    data(body) {
      let result = {
        result: 'success',
        data: []
      }

      for (let j = 0; j < Random.natural(7, 9); j++) {
        let good = {
          topName: Random.cname(),
          subName: Random.ctitle(),
          price: Random.natural(0, 200),
          ID: 1,
          headImage: `static/img/goods/good-${Random.natural(1, 16)}.png`,
          chara: Random.ctitle(),
          labels: []
        };

        for (let m = 0; m < Random.natural(0, 1); m++) {
          let label = {
            title: Random.ctitle(),
            type: Random.natural(1, 2)
          }

          good.labels.push(label);
        }

        result.data.push(good)
      }

      return result;
    },
  },
  {
    path: '/goods/displayGoods', // 栏截获取商品分类展示部分
    methods: 'get',
    data() {
      let result = {
        result: 'success',
        data: []
      };

      for (let i = 0; i < 9; i++) {
        let catalog = {
          name: Random.ctitle(2),
          data: []
        };

        for (let j = 0; j < 5; j++) {
          let good = {
            topName: Random.cname(),
            subName: Random.ctitle(),
            chara: `${Random.natural(2, 4)}色可选`,
            price: Random.natural(20, 2000),
            headImage: `static/img/catalog/catalog-good-${Random.natural(1, 14)}.png`,
            labels: [],
            ID: 1
          };

          for (let m = 0; m < Random.natural(0, 2); m++) {
            let label = {
              title: Random.ctitle(2, 4),
              type: Random.natural(1, 2)
            };
            good.labels.push(label);
          }
          catalog.data.push(good);
        }

        result.data.push(catalog);
      }

      return result;
    }
  }
]

export const homeStatic = [{
    path: '/home-counter', // 栏截获取商品倒计时的路由
    methods: 'get',
    data() {
      let result = {
        result: 'success',
        data: {
          url: '/',
          next: 123878273,
          img: 'static/img/counter/counter-img.png',
          currentPrice: 14.9,
          previousPrice: 59.9,
          deadline: 523878273
        }
      }

      return result;
    }
  },
  {
    path: '/home-topic-preface', // 栏截获取商品专题精选部分
    methods: 'get',
    data() {
      let result = {
        result: 'success',
        data: {
          name: '严选办公室人手必备神器大公开',
          desc: '久坐伏案人士请收好',
          price: 14,
          img: 'static/img/topic-preface/preface.jpg'
        }
      }
      return result;
    }
  },
]
