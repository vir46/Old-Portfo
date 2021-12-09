
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 100);
  }

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.animation = "fadeInAnimation ease 3s";
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
    class2[0].innerHTML = "Hi! My name is Virtus Tan. I live in Yogyakarta, Indonesia. I like everything about computers since I was in kindergarten. I'm currently pursuing my studies and careers in informatics engineering, especially for web development."
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