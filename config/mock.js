const fs = require("fs")
const mockDir = __dirname + "/../mock/"
const mockFiles = fs.readdirSync(mockDir)

var mock = {}

mockFiles.forEach((file) => {
  let path = "/" + file.replace("_", "/")
  let data = fs.readFileSync(mockDir + file, "utf-8")
  mock["GET " + path] = mock["POST " + path] = {
    ok: JSON.parse(data),
    fail: {
      code: 111,
      msg: 'fail'
    }
  }
})

module.exports = mock

/**
module.exports = {
  // mock开发配置
  'GET /sss': {
    ok: {
      code: 100,
      msg: 'ok',
      data: {
        a: 1,
        b: 2
      }
    },
    fail: {
      code: 200,
      msg: 'fail'
    }
  },
  'POST /signup?$user&$password': {
    ok: {
      code: 100,
      msg: 'ok',
      data: {
        a: 1,
        b: 2
      }
    },
    fail: {
      code: 200,
      msg: 'fail'
    }
  }
}
**/
