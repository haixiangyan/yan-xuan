const Mock = require('mockjs');
const Random = Mock.Random;

export const chart = [{
        path: '/admin/sale', // 获取所有主分类下商品的销量
        type: 'get',
        data(option) {

            let result = {
                result: 'success',
                data: []
            };

            for (let i = 0; i < 9; i++) {
                let sale = {
                    "name": Random.ctitle(2),
                    "sale": Random.natural(300, 500)
                }

                result.data.push(sale);
            }

            return result;
        }
    },
    {
        path: '/admin/recentSale', //获取七天内每天商品销量
        type: 'get',
        data(option) {
            let result = {
                result: 'success',
                data: []
            };

            for (let i = 0; i < 7; i++) {
                let sale = {
                    "time": i+1,
                    "sale": Random.natural(300, 500)
                }

                result.data.push(sale);
            }

            return result;
        }
    }
]