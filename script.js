
var atr = 1, vec = [-1, -1, -1,-1, -1, -1,-1, -1, -1], wX = 0, w0 = 0;

function randomReset() {
  //when cliced on Reset button
  var i;
  for (i = 0; i <= 8; i ++)  {
    vec[i] = -1;
  }
  atr = 1;
  wX = 0;
  w0 = 0;
    document.getElementById('cell1').innerHTML = '';
    document.getElementById('cell2').innerHTML = '';
    document.getElementById('cell3').innerHTML = '';
    document.getElementById('cell4').innerHTML = '';
    document.getElementById('cell5').innerHTML = '';
    document.getElementById('cell6').innerHTML = '';
    document.getElementById('cell7').innerHTML = '';
    document.getElementById('cell8').innerHTML = '';
    document.getElementById('cell9').innerHTML = '';
}

function check() {

  var sum = rowsCheck() + colsCheck() + diagPrincCheck() + diagSecCheck();
  var a = allCheck();

  if (sum == 0 && a == 1) {
    duplicateShow();
    //duplicateShow();
    showDraw();
    setTimeout(reset, 0);
  }
  if (sum == 1) {
    if (wX == 1) {
      duplicateShow();
      //duplicateShow();
      showX();
      setTimeout(reset, 0);
    }
    if (w0 == 1) {
      duplicateShow();
      //duplicateShow();
      show0();
      setTimeout(reset, 0);
    }
  }
}



function duplicateShow() {
  var x = document.getElementsByClassName('text2');
  for (var i = 0; i < x.length; i ++)
    x[i].style.display = 'block';
}
function duplicateHide() {
  var x = document.getElementsByClassName('text2');
  for (var i = 0; i < x.length; i ++)
    x[i].style.display = 'none';
}

function rowsCheck() {
  //return  1 if there is any vinner row
  var i, ok = 0;
  for (i = 0; i <= 6; i += 3) {
    var y = vec[i];
    if (y == vec[i + 1] && y == vec[i + 2] && y  != -1) {
      ok = 1;
      if (ok == 1) {
        if (y == 1) {
          wX = 1;
        }
        else {
          w0 = 1;
        }
      }
      }
    }
    //document.getElementById('demo1').innerHTML ="rows " + ok;
    return ok;
}

function colsCheck() {
  //return  1 if there is any vinner column
  var i, ok = 0;
  for (i = 0; i <= 2; i += 1) {
    y = vec[i];
    if (y == vec[i + 3] && y == vec[i + 6] && y  != -1) {
      ok = 1;
      if (ok == 1) {
        if (y == 1) {
          wX = 1;
        }
        else {
          w0 = 1;
        }
      }

    }
  }
   //document.getElementById('demo2').innerHTML = "columns " + ok;
    return ok;
}

function allCheck() {
  //returns 1 if every cell has been clicked
  var i, ok = 1;
  for (i = 0; i <= 8; i += 1) {
    if (vec[i] == -1)
      ok = 0;
    }
    //document.getElementById('demo3').innerHTML ="All " + ok;
    return ok;
}

function diagPrincCheck() {
  //returns 1 if principal diagonal is winner
  var ok = 0;
  if (vec[0] == vec[4] && vec[0] == vec[8] && vec[0] != -1)
    ok = 1;
  if (ok == 1) {
    if (vec[0] == 1) {
      wX = 1;
    }
    else {
      w0 = 1;
    }
  }
  //document.getElementById("demo4").innerHTML = "diagPrinc " + ok;
  return ok;
}

function diagSecCheck() {
  //returns 1 if principal diagonal is winner
  var ok = 0;
  if (vec[2] == vec[4] && vec[2] == vec[6] && vec[2] != -1)
    ok = 1;
  if (ok == 1) {
    if (vec[2] == 1) {
      wX = 1;
    }
    else {
      w0 = 1;
    }
  }
//document.getElementById("demo5").innerHTML = "diagSec " + ok;
  return ok;
}


function reset() {
setTimeout(duplicateHide, 3000);
  var i;

  for (i = 0; i <= 8; i ++)  {
    vec[i] = -1;
  }
  atr = 1;
  wX = 0;
  w0 = 0;
  setTimeout(function(){
    document.getElementById('cell1').innerHTML = '';
    document.getElementById('cell2').innerHTML = '';
    document.getElementById('cell3').innerHTML = '';
    document.getElementById('cell4').innerHTML = '';
    document.getElementById('cell5').innerHTML = '';
    document.getElementById('cell6').innerHTML = '';
    document.getElementById('cell7').innerHTML = '';
    document.getElementById('cell8').innerHTML = '';
    document.getElementById('cell9').innerHTML = '';
  }, 3000);
}

function slideDownX() {
  $(document).ready(function(){
    $("#winnX").slideDown("fast");
  });
}

function slideUpX() {
  $(document).ready(function(){
    $("#winnX").slideUp("fast");
  });
}

function showX() {
  slideDownX();
  setTimeout(slideUpX, 3000);
}

function slideDown0() {
  $(document).ready(function(){
    $("#winn0").slideDown("fast");
  });
}

function slideUp0() {
  $(document).ready(function(){
    $("#winn0").slideUp("fast");
  });
}

function show0() {
  slideDown0();
  setTimeout(slideUp0, 3000);
}

function slideDownDraw() {
  $(document).ready(function(){
    $("#winnDraw").slideDown("fast");
  });
}

function slideUpDraw() {
  $(document).ready(function(){
    $("#winnDraw").slideUp("fast");
  });
}

function showDraw() {
  slideDownDraw();
  setTimeout(slideUpDraw, 3000);
}


function assigncell1() {
  var x = document.getElementById('cell1');
  if (vec[0] == -1) {
    if (atr == 1) {
      x.innerHTML = 'X';
      vec[0] = 1;
       atr = !atr;
    }
    else {
      x.innerHTML = '0';
      vec[0] = 0;
      atr = !atr;
    }
   }
    check();
  }

window.assigncell1Enabled = false;

function assigncell2() {
  var x = document.getElementById('cell2');
  if (vec[1] == -1) {
    if (atr == 1) {
      x.innerHTML = 'X';
      vec[1] = 1;
       atr = !atr;
    }
    else {
      x.innerHTML = 'O';
      vec[1] = 0;
      atr = !atr;
    }
   }
   check();
  }


function assigncell3() {
  var x = document.getElementById('cell3');
  if (vec[2] == -1) {
    if (atr == 1) {
      x.innerHTML = 'X';
      vec[2] = 1;
       atr = !atr;
    }
    else {
      x.innerHTML = 'O';
      vec[2] = 0;
      atr = !atr;
    }
   }
   check();
  }


function assigncell4() {
  var x = document.getElementById('cell4');
  if (vec[3] == -1) {
    if (atr == 1) {
      x.innerHTML = 'X';
      vec[3] = 1;
       atr = !atr;
    }
    else {
      x.innerHTML = 'O';
      vec[3] = 0;
      atr = !atr;
    }
   }
   check();
  }


function assigncell5() {
  var x = document.getElementById('cell5');
  if (vec[4] == -1) {
    if (atr == 1) {
      x.innerHTML = 'X';
      vec[4] = 1;
       atr = !atr;
    }
    else {
      x.innerHTML = 'O';
      vec[4] = 0;
      atr = !atr;
    }
   }
   check();
  }


function assigncell6() {
  var x = document.getElementById('cell6');
  if (vec[5] == -1) {
    if (atr == 1) {
      x.innerHTML = 'X';
      vec[5] = 1;
       atr = !atr;
    }
    else {
      x.innerHTML = 'O';
      vec[5] = 0;
      atr = !atr;
    }
   }
   check();
  }


function assigncell7() {
  var x = document.getElementById('cell7');
  if (vec[6] == -1) {
    if (atr == 1) {
      x.innerHTML = 'X';
      vec[6] = 1;
       atr = !atr;
    }
    else {
      x.innerHTML = 'O';
      vec[6] = 0;
      atr = !atr;
    }
   }
   check();
  }


function assigncell8() {
  var x = document.getElementById('cell8');
  if (vec[7] == -1) {
    if (atr == 1) {
      x.innerHTML = 'X';
      vec[7] = 1;
       atr = !atr;
    }
    else {
      x.innerHTML = 'O';
      vec[7] = 0;
      atr = !atr;
    }
   }
   check();
  }


function assigncell9() {
  var x = document.getElementById('cell9');
  if (vec[8] == -1) {
    if (atr == 1) {
      x.innerHTML = 'X';
      vec[8] = 1;
       atr = !atr;
    }
    else {
      x.innerHTML = 'O';
      vec[8] = 0;
      atr = !atr;
    }
   }
   check();
  }
