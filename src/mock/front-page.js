const Mock = require('mockjs');
const Random = Mock.Random;

export const login = [{
  path: '/test',
  type: 'get',
  data(body) {
    const data = {
      result: 'success',
      goods: [{
          name: Random.cname(),
          img: 'https://localhost:8080',
          des: Random.csentence()
        },
        {
          name: Random.cname(),
          img: 'https://localhost:8080',
          des: Random.csentence()
        }
      ]
    }
    return data;
  }
}]
