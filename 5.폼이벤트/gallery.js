var beforeBtn = document.getElementById('before_btn');
var nextBtn = document.getElementById('next_btn');
var photo = document.getElementById('photo');
var photoList = document.getElementById('photoList');
var list = document.querySelectorAll('#photoList li');
var num = 0;

for(var i=0; i<list.length; i++){
  list[i].onclick = function(){
    num = 0;
    photo.src = this.children[0].href;
    var loading = setInterval(function(){
      num += 0.005;
      photo.style.opacity = num;
      if(num > 1){
        clearInterval(loading);
      }
    })

    // return false;
    event.preventDefault(); // a가 안눌리도록 함
  }
}

photoList.style.marginLeft = "0px";
// 좌우 버튼 클릭시 100씩 이동하도록
beforeBtn.onclick = function(){
  if( photoList.style.marginLeft == "0px" ) return false;
  else photoList.style.marginLeft = (parseInt(photoList.style.marginLeft) + 100) + "px";
  event.preventDefault();
}

nextBtn.onclick = function(){
  if( photoList.style.marginLeft == "-500px" ){
      photoList.style.marginLeft == "0px";
      return false;
      // 위에 강제적으로 marginLeft 줘야함. console.log 로 찍으면 아무것도 안나옴
  }else {
      photoList.style.marginLeft = (parseInt(photoList.style.marginLeft) - 100) + "px";
  }
  event.preventDefault();
}
