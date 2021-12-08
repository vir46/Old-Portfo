
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 8000);
  }

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.opacity = 1;
}


function gantiBahasa(){
  let class1,class2,class3;
  class1 = document.getElementsByClassName("card-title");
  class2= document.getElementsByClassName("card-text");
  if(class1[0].innerHTML === "About Me"){
    class1[0].innerHTML = "Tentang Saya"
    class2[0].innerHTML = "Halo, nama saya Virtus Tan. Tinggal di Yogyakarta, Indonesia. Menyukai komputer sejak masih TK. Saat ini melanjutkan studi ke dalam ilmu komputer khususnya dalam bidang pengembangan web."
  }else{
    class1[0].innerHTML = "About Me"
    class2[0].innerHTML = "Hello ! I'm Virtus Tan. I lives in Yogyakarta, Indonesia. I like everything about computers since i was in kindergarten. I'm currently pursuing my studies and careers in informatics engineering especially on web development."
  }
}

function callSkill(){
  document.getElementById("home-page").style.display  = "none";
  document.getElementById("skill-page").style.display  = "content";
}