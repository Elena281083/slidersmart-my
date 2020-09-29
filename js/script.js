let slides = document.getElementsByClassName('slide');
let curent = 0;
let move = false;

slideLeft(slides, slides.length-1);

function slideLeft(sliders, mid){
  let left = mid>0 ? mid - 1 : sliders.length - 1;
  let right = mid<sliders.length-1 ? mid + 1 : 0;
  let nextRight = right<sliders.length-1 ? right + 1 : 0;
  sliders[left].classList.remove('slide_left');
  sliders[mid].classList.add('slide_left');
  sliders[mid].classList.remove('slide_mid')
  sliders[right].classList.add('slide_mid');
  sliders[right].classList.remove('slide_right');
  sliders[nextRight].classList.add('slide_right');
}
function slideRight(sliders, mid){
  let left = mid>0 ? mid - 1 : sliders.length - 1;
  let right = mid<sliders.length-1 ? mid + 1 : 0;
  let nextLeft = left>0 ? left - 1 : sliders.length - 1;
  sliders[left].classList.add('slide_mid');
  sliders[left].classList.remove('slide_left');
  sliders[mid].classList.add('slide_right');
  sliders[mid].classList.remove('slide_mid')
  sliders[right].classList.remove('slide_right');
  sliders[nextLeft].classList.add('slide_left');
}

//привязка к кнопке влево и вызов функции
let arrowLeft = document.getElementsByClassName('arrow-left')[0];
arrowLeft.onclick = function(){
  if(!move){
    slideLeft(slides, curent);
    curent = curent<slides.length-1 ? curent + 1 : 0;
    move = true;
    setTimeout(function(){move=false;}, 1000);
  }
};
//привязка к кнопке вправо и вызов функции
let arrowRight = document.getElementsByClassName('arrow-right')[0];
arrowRight.onclick = function(){
  if(!move){
    slideRight(slides, curent);
    curent = curent>0 ? curent - 1 : slides.length - 1;
    move = true;
    setTimeout(function(){move=false;}, 1000);
  }
};