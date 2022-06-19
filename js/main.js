// nav section icon display
document.querySelector(".landing nav .icon").addEventListener("click",function(){
    document.querySelector(".landing nav div.icon").classList.toggle("trickyicon");
    document.querySelector(".landing nav ul").classList.toggle("show");
})
window.addEventListener("load",function(){
    document.body.style.opacity = "1";
})
// starting background images change on landing bage
let images = ["home-bg-slideshow1.jpg","home-bg-slideshow2.jpg" ,"home3png.png"];
let turn = 1;
setInterval(() => {
  if (turn > 2)
   turn =0;
    document.querySelector(".landing").style.backgroundImage = `url("images/${images[turn]}")`;
    turn++;
}, 3000);
// starting links work
let navLinks = document.querySelectorAll(".landing nav ul li a");
navLinks.forEach(function(link){
    link.addEventListener("click",function(){
        navLinks.forEach(function(link){
            link.classList.remove("active");
        })
        this.classList.add("active");
    })
})

// scrolling function 

window.addEventListener("scroll" , function(){
    if (window.scrollY > 2)
    document.querySelector(".landing .headoff").style.cssText = "background-color:#4B4B4B;z-index:1000;"
    else if (window.screenY ==0 )
    document.querySelector(".landing .headoff").style.backgroundColor = "transparent";
})
window.addEventListener("scroll" , function(){

    let work = document.getElementById("work");
    let workHeight = work.offsetHeight;
    let workTOp = work.offsetTop;
    if (window.pageYOffset > (workHeight + workTOp - window.innerHeight-325)){
        let articles =document.querySelectorAll("section.work .container article");
        articles.forEach(function(e){
            e.style.opacity = "1";
            e.style.transform = "translate(0px , 0px)";

          
        })
        document.querySelector(".work article.special-heading").style.opacity = "1";
        document.querySelector(".work article.special-heading").style.transform = "translate(-50% , 0px)";
        navLinks.forEach(function(link){  
                    link.classList.remove("active");
            })
            navLinks[1].classList.add("active");
    }  
    else{
        navLinks.forEach(function(link){  
            link.classList.remove("active");
    })
    navLinks[0].classList.add("active");
    }

})
// starting about filter of about section
let aboutLis = document.querySelectorAll(".about .container >article ul li");
let aboutArticles = document.querySelectorAll(".about .container >article article");
aboutLis.forEach(function(e){
    e.addEventListener("click" , function(){
        aboutLis.forEach(function(e){
            e.classList.remove("active");
        })
        aboutArticles.forEach(function(e){
            e.style.display = "none";
        })
        document.querySelector(`.about .container >article article${this.dataset.cat}`).style.display = "block";
        this.classList.add("active");
        
    })
})
window.addEventListener("scroll" , function(){
    let aboutHeight = document.querySelector(".about").offsetHeight;
    let aboutTop = document.querySelector(".about").offsetTop;
    if (window.scrollY > (aboutHeight + aboutTop - window.innerHeight -325)){
        document.querySelector(".about .container figure").style.cssText = "opacity:1; transform:translateX(0px);";
        document.querySelector(".about .container >article").style.cssText = "opacity:1; transform:translateX(0px);";
        document.querySelector(".about .special-heading").style.cssText = "opacity:1;transform:translate(-50% , 0px);";
        navLinks.forEach(function(link){  
            link.classList.remove("active");
    })
     navLinks[2].classList.add("active");
    }
})
// starting team section
window.addEventListener("scroll", function(){
    let teamHeight =document.querySelector(".team").offsetHeight;
    let teamTop =document.querySelector(".team").offsetTop;
    if (window.scrollY  > (teamHeight + teamTop - window.innerHeight-325)){
        navLinks.forEach(function(link){  
            link.classList.remove("active");
    })
     navLinks[3].classList.add("active");
        document.querySelector(".team .special-heading").style.cssText = "opacity:1;transform:translate(-50% , 0px);";
        document.querySelectorAll(".team .container .content figure").forEach(function(e){
            e.style.cssText = "transform:rotateX(0deg);"
        })
    
    }
})
// starting portfolio section
window.addEventListener("scroll" , function(){
    let port = document.querySelector(".portfolio");
    let portHeight = port.offsetHeight;
    let portTop = port.offsetTop;
    if (window.scrollY > (portHeight + portTop - window.innerHeight-325)){
        document.querySelector(".portfolio .special-heading").style.cssText = "opacity:1; transform: translate(-50% , 0px);";
        document.querySelector(".portfolio .content").style.cssText = "opacity:1;";
        navLinks.forEach(function(link){  
            link.classList.remove("active");
    })
     navLinks[4].classList.add("active");
    
    }

})
let portlis = document.querySelectorAll(".portfolio ul li");
let portfigs = document.querySelectorAll(".portfolio .content .all");
portlis.forEach(function(li){
    li.addEventListener("click",function(){
        portlis.forEach(function(li){
            li.classList.remove("active");
        })
        this.classList.add("active");
        portfigs.forEach(function(figure){
            figure.style.transform = "scale(0)";
            window.setTimeout(function(){
             figure.style.display = "none";
            },300)
        })
        document.querySelectorAll(`.portfolio .content ${this.dataset.cat}`).forEach(function(e){
            
        window.setTimeout(function(){
            e.style.display = "block";
            
        },300)
        window.setTimeout(function(){
            e.style.transform = "scale(1)";
            
        },400)
            
        })
    })
     
})
// starting bumbing section
document.getElementById("closeicon").addEventListener("click",function(){
    document.querySelector(".bumb").style.transform = "scale(0)";
    window.setTimeout(function(){
        document.querySelector(".bumb").style.display = "none";
    },300)
})
// starting images click action
let portImages = document.querySelectorAll(".portfolio .content figure img");
let bumbSpans = document.querySelectorAll(".bumb .spans span");
let leftIcon = document.querySelector(".bumb .icon-left ");
let rightIcon = document.querySelector(".bumb .icon-right ");
let index = 0;
// function to find the index of the clicked img
function find (current , images){
    for (let i =0 ; i<6 ;i++){
        if (current === images[i].src){
            return i;
        }
    }
}
portImages.forEach(function(img){
    img.addEventListener("click",function(){
        document.querySelector(".bumb").style.display = "block";
        window.setTimeout(function(){
            document.querySelector(".bumb").style.transform = "scale(1)";
        },100)
        let src = this.src;
        document.querySelector(".bumb figure img").src = src;
        index = find(this.src,portImages);
         bumbSpans.forEach(function(span){
            span.classList.remove("active");
         })
         bumbSpans[index].classList.add("active");
    })
})
// left icon work
leftIcon.addEventListener("click",function(){
    index--;
    if (index<0){
        index = 5;
    }
    bumbSpans.forEach(function(span){
        span.classList.remove("active");
     })
     bumbSpans[index].classList.add("active");
     document.querySelector(".bumb figure img").src = portImages[index].src;
})
// right icon work
rightIcon.addEventListener("click",function(){
    index++;
    if (index>5){
        index = 0;
    }
    bumbSpans.forEach(function(span){
        span.classList.remove("active");
     })
     bumbSpans[index].classList.add("active");
     document.querySelector(".bumb figure img").src = portImages[index].src;
})
for (let i = 0 ;i<6 ;i++){
    bumbSpans[i].addEventListener("click",function(){
        bumbSpans.forEach(function(span){
            span.classList.remove("active");

        })
        bumbSpans[i].classList.add("active");
      document.querySelector(".bumb figure img").src = portImages[i].src;

    })
}
// starting price section
window.addEventListener("scroll" , function(){
    let priceHeight = document.querySelector(".price").offsetHeight;
    let priceTop = document.querySelector(".price").offsetTop;
    if (window.scrollY > (priceHeight + priceTop - window.innerHeight-325)){
        document.querySelectorAll(".price .container .content article").forEach(function(art){
            art.style.transform = "scale(1)";
            document.querySelector(".price .special-heading").style.cssText = "opacity:1; transform:translate(-50% , 0px);"
        })
        navLinks.forEach(function(link){  
            link.classList.remove("active");
    })
     navLinks[5].classList.add("active");
    }
})
let priceButtons = document.querySelectorAll(".price .container .content article button");
let checkedIcon = '<i class="fa-solid fa-check"></i>';
let divIcons = document.querySelectorAll(".price .container .content article div");
let buttonsText = ["GET IT NOW","TAKE THIS!","BUY NOW"];
for (let i = 0 ; i<3;i++){
    priceButtons[i].addEventListener("click", function(){
        priceButtons[i].innerHTML = checkedIcon;
        divIcons[i].style.display = "block";
        setTimeout(function(){
            divIcons[i].style.opacity = "1";
        },100)
    })
}
for (let i = 0 ;i<3 ;i++){
    divIcons[i].addEventListener("click",function(){
        priceButtons[i].innerHTML = buttonsText[i];
        this.style.opacity = "0";
        window.setTimeout(function(){
            divIcons[i].style.display = "none"
        },400)
    })
}
// starting contact sectino
window.addEventListener("scroll" , function(){
    let contactHeight = document.getElementById("contact").offsetHeight;
    let contactTop = document.getElementById("contact").offsetTop;
    if (window.scrollY > (contactHeight + contactTop - window.innerHeight)){
        navLinks.forEach(function(link){  
            link.classList.remove("active");
    })
     navLinks[6].classList.add("active");
     document.querySelectorAll("footer i").forEach(function(i){
      i.style.opacity = "1";
     })
    }
})






