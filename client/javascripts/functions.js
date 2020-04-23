// jshint esversion: 6

//Req. 3a
let revWords1 = (str) => {
  var revW1 = "";
  var rev1 = str.split("");
  for (var i = rev1.length - 1; i >= 0; i--){
    revW1 += rev1[i];
  }
  return revW1;
};

//Req. 3b
let revWords2 = (str) => {
  var rev2 = "";
var arr = str.split("");
arr.reverse().forEach(function(rev2) {
console.log(rev2);
});
};

//Req. 3c
let revWords3 = (str) => {
  var revW3 = "";
  var rev3 = str.split("");
  var rev33 = rev3.reverse();
  for (var x of rev33){
    revW3 = revW3 + x;
  }
  return revW3;
};

//XC
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
