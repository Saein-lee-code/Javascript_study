const slider = document.getElementById('slider');
const sliderWrap = document.getElementById('sliderWrap');
const slideList = document.getElementById('slideList');
const list = slideList.getElementsByTagName('li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next')
// const btnWrap = document.getElementById('btnWrap');
// const btnNum = document.getElementById('btnNum');
const btnList = document.getElementById('btnNum').getElementsByTagName('span');
const active = document.querySelector('.active');

// 이동시 계산에 사용될 변수
const sliderLen = list.length;
  // 일반 요소들 clientWidth (img 나 window 를 제외한 넓이)
const sliderWidth = list[0].clientWidth;;
const sliderSpeed = 500;
const startNum = 0;

// 첫번째와 마지막 리스트 복제
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);
slideList.appendChild(clonedFirst);
//slideList.prepend(clonedLast);
slideList.insertBefore(clonedLast, firstChild);

// sliderWrap 넓이 적용
slideList.style.width = (sliderLen + 2) * sliderWidth + "px";
slideList.style.transform = "translate(-" + (sliderWidth * (startNum + 1)) + "px";
let curIndex = startNum;
let curSlider = list[curIndex];

// nextBtn.onclick = function() {
//   if(curIndex < 3){
//     curIndex++;
//     slideList.style.transform = "translate(-" + (sliderWidth * (curIndex + 1)) + "px";
//     slideList.style.transition = "0.5s";
//   }else{
//     slideList.style.transform = "translate(-" + (sliderWidth * (startNum + 1)) + "px";
//     curIndex = 0;
//   }
//   event.preventDefault();
// }

nextBtn.onclick = function() {
  clearInterval(timer);
  if(curIndex <= sliderLen - 1){
    slideList.style.transition = "0.5s";
    slideList.style.transform = "translate(-" + (sliderWidth * (curIndex + 2)) + "px";
  }
  if(curIndex == sliderLen - 1){
    setTimeout(function(){
      slideList.style.transition = "0";
      slideList.style.transform = "translate(-" + sliderWidth  + "px";
    }, sliderSpeed)
    curIndex = -1;
  }
  curSlider = list[++curIndex];
  for(let i=0; i<btnList.length; i++){
    btnList[i].setAttribute('class', '')
  }
  btnList[curIndex].setAttribute('class','active')
  event.preventDefault();
}

prevBtn.onclick = function(){
  clearInterval(timer);
  if(curIndex >= 0){
    slideList.style.transition = "0.5s";
    slideList.style.transform = "translate(-" + (sliderWidth * curIndex) + "px";
  }
  if(curIndex === 0){
    slideList.style.transition = "0";
    slideList.style.transform = "translate(-" + (sliderWidth * sliderLen) + "px";
    curIndex = sliderLen;
  }
  --curIndex;
  for(let i=0; i<btnList.length; i++){
    btnList[i].setAttribute('class', '')
  }
  btnList[curIndex].setAttribute('class','active')
  event.preventDefault();
}

for(let i=0; i<btnList.length; i++){
  btnList[i].onclick = function(){
    clearInterval(timer);
    for(let i=0; i<btnList.length; i++){
      btnList[i].setAttribute('class', '')
    }
    this.setAttribute('class', 'active')
    slideList.style.transition = "0.5s"
    slideList.style.transform = "translate(-" + (sliderWidth * (i+1)) + "px";
    curIndex = i;
  }
}

function autoSlider(){
  if(curIndex <= sliderLen - 1){
    slideList.style.transition = "0.5s";
    slideList.style.transform = "translate(-" + (sliderWidth * (curIndex + 2)) + "px";
  }
  if(curIndex == sliderLen - 1){
    setTimeout(function(){
      slideList.style.transition = "0";
      slideList.style.transform = "translate(-" + sliderWidth  + "px";
    }, sliderSpeed)
    curIndex = -1;
  }
  curSlider = list[++curIndex];
  console.log(curSlider)
  for(let i=0; i<btnList.length; i++){
    btnList[i].setAttribute('class', '')
  }
  btnList[curIndex].setAttribute('class','active')
}

let timer = setInterval(autoSlider, 3000)
