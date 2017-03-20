//身份证验证
function IdentityCodeValid(code) {
  /* 去掉中文城市名
  var city = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北 ",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏 ",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外 "
  };
  */
  var city = [
    11, 12, 13, 14, 15, 21, 22,
    23, 31, 32, 33, 34, 35, 36,
    37, 41, 42, 43, 44, 45, 46,
    50, 51, 52, 53, 54, 61, 62,
    63, 64, 65, 71, 81, 82, 91
  ];
  var tip = "";
  var pass = true;
  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
    pass = false;
  } else if (!~city.join(",").indexOf(code.substr(0, 2))) {
    pass = false;
  } else {
    if(code.length == 18){
      code = code.split('');
      var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
      var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if(parity[sum % 11] != code[17]){
        pass =false;
      }
    }
  }
  return pass;
}

function checkPhone(phoneNo) {
  return /^1[34578]\d{9}$/.test(phoneNo)
}

module.exports = {
  IdentityCodeValid,
  checkPhone
}