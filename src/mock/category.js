const Mock = require('mockjs');
const Random = Mock.Random;

export const category = [{
  path: '/goods/category',
  type: 'get',
  data(body) {
    let menuInfo = [
      '居家',
      '餐厨',
      '配件',
      '服装',
      '洗护',
      '婴童',
      '杂货',
      '饮食',
      '志趣',
    ]

    let result = {
      result: 'success',
      data: []
    }

    // 初始化商品的分类
    for (let i = 0; i < 8; i++) {
      let category = {
        name: menuInfo[i],
        picture: `static/img/category/category-${i+2}.png`,
        subCategory: []
      };

      // 初始化商品的子分类
      for (let j = 0; j < 11; j++) {
        let subCategory = {
          name: Random.ctitle(),
          photo: `static/img/category/subcategory/subcategory-${Random.natural(1, 20)}.png`
        };

        category.subCategory.push(subCategory);
      }

      result.data.push(category);
    }
    return result;
  }
},
{
  path: '/goods/subCategoryGoods', // 栏截获取商品分类展示部分
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

      for (let j = 0; j < 6; j++) {
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
