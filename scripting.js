
var myVar,class3=0;


function myFunction() {
    myVar = setTimeout(showPage, 1000);
    // showPage(); 
  }

function showPage() {
    document.getElementById("loader").style.display = "none"; 
    document.getElementById("myDiv").style.animation = "fadeInAnimation ease 3s";
    document.getElementById("myDiv").style.opacity = 1;
    $('#undernav').load('home.html');
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

function gotoPage(elementidpass){
    let csschange;
    csschange = document.getElementsByClassName("nav-link");
    for(let i=0;i<csschange.length;i++){
      csschange[i].style.color = "grey"; 
      csschange[i].style.fontWeight = "normal"; 
    }
    document.getElementById(elementidpass).style.color = "#fddb3a";
    document.getElementById(elementidpass).style.fontWeight = "bold";
    if(elementidpass == 'skillbutton'){
      $('#undernav').load('skill.html');
    }else if(elementidpass == 'homebutton'){
      $('#undernav').load('home.html'); 
    }else if(elementidpass == 'skillbutton'){
      $('#undernav').load('gallery.html');
    }
}
