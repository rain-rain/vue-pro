var win = window
var doc = win.document
var docEl = doc.documentElement
var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
var recalc = function () {
  var clientWidth = docEl.clientWidth
  if (!clientWidth) return
  docEl.style.fontSize = (clientWidth >= 750 ? 100 : clientWidth / 7.5) + 'px'
}
if (doc.addEventListener) {
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}

var ele = document.getElementsByTagName("*");
[].forEach.call(ele, function(item) {
	item.addEventListener && item.addEventListener("click", function() { })
})