let el = document.documentElement;
let check = document.getElementById("changeMode").checked;

document.getElementById("changeMode").onclick = function() {
  if(check) {
    el.setAttribute('theme', 'dark');
  }else{
    el.setAttribute('theme', 'light');
  }
};