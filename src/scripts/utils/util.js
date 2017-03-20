var {
  md5,
  base64
} = require("../libs/encrypt_md5")

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [
    year,
    month,
    day
  ].map(formatNumber).join('/')
  // + ' ' + [
  //   hour,
  //   minute,
  //   second
  // ].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/*
 * 去除字符串两边空格
 */
function trim(str) {
  return `${str}`.replace(/(^\s*)|(\s*$)/g, "");
}

// 分转换为元
function fixMoney(fen, tofix) {
  let ret = fen / 100
  if (tofix) {
    ret = ret.toFixed(tofix)
  }
  return ret
}

module.exports = extend({
  md5,
  base64,
  formatTime,
  formatNumber,
  trim,
  fixMoney
})
