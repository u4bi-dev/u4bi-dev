var flag, info = [];

window.onload = function(){
  flag = false;
  info = {
    content :document.getElementById('content'),
    dos :document.getElementById('dos'),
    dos_input : document.getElementById('dos-input')
  };
}

function scroll(num){
  info.content.scrollTop = num;
}

function terminel(){
  if(flag) info.dos.style.display = 'none';
  else{
    info.dos.style.display = 'block';
    info.dos_input.focus();
  }

  flag = !flag;
}

function dosFocus(){
  info.dos_input.focus();
}
