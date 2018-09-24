const Mock = require('mockjs');
const Random = Mock.Random;

export const search = [{
  path: '/goods/search',
  type: 'post',
  data(option) {
    let result = {
      result: 'success',
      data: []
    };

    for (let j = 0; j < 8; j++) {
      let good = {
        topName: Random.cname(),
        subName: Random.ctitle(),
        chara: `${Random.natural(2, 4)}色可选`,
        price: Random.natural(20, 2000),
        headImage: `static/img/catalog/catalog-good-${Random.natural(1, 14)}.png`,
        labels: [],
        ID: '',
        category: Random.natural(1, 7)
      };

      for (let m = 0; m < Random.natural(0, 2); m++) {
        let label = {
          title: Random.ctitle(2, 4),
          type: Random.natural(1, 2)
        };
        good.labels.push(label);
      }

      result.data.push(good);
    }

    return result;
  }
}]
