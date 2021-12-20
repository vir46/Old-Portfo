
var myVar,class3=0;


function myFunction() {
    myVar = setTimeout(showPage, 2000);
  }

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.animation = "fadeInAnimation ease 3s";
    document.getElementById("myDiv").style.opacity = 1;
}


function gantiBahasa(){
  let class1,class2;
  class1 = document.getElementsByClassName("card-title");
  class2= document.getElementsByClassName("card-text");
  if(class3 == 1){
    class1[0].innerHTML = "Tentang Saya"
    class2[0].innerHTML = "Halo, nama saya Virtus Tan. Tinggal di Yogyakarta, Indonesia. Menyukai komputer sejak masih TK. Saat ini melanjutkan studi ke dalam ilmu komputer khususnya dalam bidang pengembangan web."
    class3 = 0;
  }else{
    class1[0].innerHTML = "About Me"
    class2[0].innerHTML = "Hi! My name is Virtus Tan. I live in Yogyakarta, Indonesia. I like everything about computers since I was in kindergarten. I'm currently pursuing my studies and careers in informatics engineering, especially for web development."
    class3 = 1;
  }
}

function callSkill(){
  document.getElementById("home-page").style.display  = "none";
  document.getElementById("myskill").style.display = "contents";
  document.getElementById("homebutton").style.animation = "none";
  document.getElementById("skillbutton").style.animation = "glowUp ease 5s infinite";
}

function backHome(){
  document.getElementById("myskill").style.display = "none";
  document.getElementById("home-page").style.display  = "contents";
  document.getElementById("homebutton").style.animation = "glowUp ease 5s infinite";
  document.getElementById("skillbutton").style.animation = "none";
}