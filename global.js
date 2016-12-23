/* google-degine.js*/

var flag = false;
function scroll(num){
  document.getElementById('content').scrollTop = num;
}

function terminel(){
  flag = !flag;
  if(flag) document.getElementById('dos').style.display = 'none';
  else{
    document.getElementById('dos').style.display = 'block';
    document.getElementById('dos-input').focus();
  }
}

function dosFocus(){
  document.getElementById('dos-input').focus();
}