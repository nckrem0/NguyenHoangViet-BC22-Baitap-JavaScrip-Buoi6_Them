/**
 * Bài tập thêm :
 */

document.getElementById("btnNumber").onclick = function () {
  var number = document.getElementById("number").value;
  var count = "";

  for (var i = 0; i < number; i++) {
    if(ktSoNguyenTo(i) == 1){
        count += i + " ";
    }
  }
  function ktSoNguyenTo(number){
    if(number < 2){
        return 0;
    }
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
          return 0;
        }
    }
    return 1;
  }
  document.getElementById("footerNumber").innerHTML = count;
};
