const Mock = require('mockjs');
const Random = Mock.Random;

export const homeGood = [{
  path: '/goods/certainCategory', // 栏截获取商品分类展示部分
  methods: 'post',
  data(option) {
    let result = {
      result: 'success',
      data: []
    };

    for (let i = 0; i < 9; i++) {
      let catalog = {
        name: Random.ctitle(2),
        data: []
      };

      for (let j = 0; j < 1; j++) {
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
}]
