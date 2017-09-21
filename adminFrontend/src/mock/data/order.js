const Mock = require('mockjs');
const Random = Mock.Random;

export const order = [{
    path: '/admin/allOrder', // 获取全部的订单
    type: 'get',
    data(option) {

        let result = {
            result: 'success',
            data: []
        };

        for (let i = 0; i < 10; i++) {
            let order = {
                "orderID": i+1,
                "userID": Random.natural(1, 100),
                "expressNumber": Random.natural(1, 100),
                "expressCompany": Random.cname(),
                "orderState": Random.natural(0, 4),
                "payID": Random.guid(),
                "totalFee": Random.natural(20, 300),
                "orderDate": new Date().getTime(),
            }

            result.data.push(order);
        }

        return result;
    }
},
{
    path: '/admin/allOrder', // 获取全部的订单
    type: 'get',
    data(option) {

        let result = {
            result: 'success',
            data: []
        };

        for (let i = 0; i < 57; i++) {
            let order = {
                "orderID": i+1,
                "userID": Random.natural(1, 100),
                "expressNumber": Random.natural(1, 100),
                "expressCompany": Random.cname(),
                "orderState": Random.natural(0, 4),
                "payID": Random.guid(),
                "totalFee": Random.natural(20, 300),
                "orderDate": new Date().getTime(),
            }

            result.data.push(order);
        }

        return result;
    }
},
{
    path: '/shop/deliverGoods', // 写入快递信息
    type: 'post',
    data(option) {

        console.log('修改物流信息', JSON.parse(option.body));

        let result = {
            result: 'success'
        };

        return result;
    }
},
{
    path: '/shop/order/1', // 删除订单
    type: 'delete',
    data(option) {

        console.log('成功删除订单');

        let result = {
            result: 'success'
        };

        return result;
    }
},
]