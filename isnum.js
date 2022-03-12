'use strict';
function int(num) {
    if (typeof num == "number") {
      return num + num * -1 === 0
    } else if (typeof num == 'string' && num.replace(/^\s+|\s+$/gm, '').length > 0) {
      return Number.isFinite ? Number.isFinite(Math.abs(parseFloat(num))) : isNaN(parseFloat(num));
    } else {
      return false;
    }
}
function infinite(num) {
  if (!int(num)) return "Number is not valid."
  return parseFloat(num) > Number.MAX_VALUE
}
function finite(num) {
  if (!int(num)) return "Number is not valid."
  return parseFloat(num) < Number.MAX_VALUE && Number.MIN_VALUE < parseFloat(num)
}
function zero(num) {
  if (!int(num)) return "Number is not valid."
  return num < Number.MIN_VALUE; 
}
function negInf(num) {
  if (!int(num)) return "Number is not valid."
  return num === Number.NEGATIVE_INFINITY; 
}
function posInf(num) {
  if (!int(num)) return "Number is not valid."
  return num === Number.POSITIVE_INFINITY; 
}
function safeInt(num) {
  return Number.isInteger(num) && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
}
module.exports = {
  int,
  infinite,
  finite,
  zero,
  infinity:{
    negative:(num) => negInf(num),
    positive:(num) => posInf(num),
  },
  safeInt
}
