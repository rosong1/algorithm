function spinalCase(str) {
if (str.indexOf(" ") != -1) {
  str = str.toLowerCase().replace(/ /g, "-");
} else if (str.indexOf("_") != -1) {
  str = str.toLowerCase().replace(/_/g, "-");
} else {
  const reg = /[A-Z][a-z]*/g;
  const matchArr = str.match(reg);
  const firstWordIndex = str.indexOf(matchArr[0]);
  matchArr.unshift(str.substring(0, firstWordIndex));
  str = matchArr.join("-").toLowerCase();
}
return str;
}

// 更优解法
function spinalCase(str) {
    return str.replace(/\s|_/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

// 参考链接 http://singsing.io/blog/fcc/intermediate-spinal-tap-case/