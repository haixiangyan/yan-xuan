const Mock = require('mockjs');
const Random = Mock.Random;

export const user = [{
    path: '/admin/user', // 获取全部的用户
    type: 'get',
    data(option) {
        let result = {
            result: 'success',
            data: []
        };

        for (let i = 0; i < 47; i++) {
            let user = {
                "telephone": i+1,
                "password": Random.natural(123456779, 2123456789),
                "photo": "/static/img/user.png",
                "name": Random.cname(),
                "gender": Random.boolean() ? 'man' : 'woman',
            }

            result.data.push(user);
        }

        return result;
    }
},
{
    path: '/admin/user/1',
    type: 'delete',
    data(option) {
        console.log('已经删除用户');

        let result = {
            result: 'success',
        }

        return result;
    }
}]