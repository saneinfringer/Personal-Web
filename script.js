gsap.from(".line-1",{
    y:-1000,
    duration:1,
    delay:0.3,
    opacity:0,
})

gsap.from(".line-2",{
    y:-1000,
    duration:1,
    delay:0.5,
    opacity:0
})

gsap.from(".line-3",{
    y:-1000,
    duration:1,
    delay:0.7,
    opacity:0
})

gsap.from(".line-4",{
    y:-1000,
    duration:1,
    delay:0.9,
    opacity:0
})

gsap.from(".line-5",{
    y:-1000,
    duration:1,
    delay:1.1,
    opacity:0
})

gsap.from(".line-6",{
    y:-1000,
    duration:1,
    delay:1.3,
    opacity:0
})

gsap.from(".line-7",{
    y:-1000,
    duration:1,
    delay:1.5,
    opacity:0
})

gsap.to(".portfolio-text",{
    // rotate:360,
    duration:0.6,
    delay:1.8,
    opacity:"100%",
})

gsap.to(".profile-pic",{
    rotate:360,
    duration:1.4,
    delay:0.5,
})

gsap.to(".profile-pic",{
    scale:1.5,
    duration:2,
    delay:0.5,
    opacity:"100%"
})

// contact page lines
var tl = gsap.timeline()
tl.from(".contact-page #lines",{
    x:-1300,
    backgroundColor:"rgb(139, 66, 207)",
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".contact-page #lines",
        scroller:"body",
        start:"center 10%",
        end:"100% 10%",
        toggleActions:"restart none none none",
        scrub:2,
        stagger:0.6,
    }
})

// for contact page animation lines text
function animateElement(){
    tl.from(".contact-page #lines",{
        scrollTrigger:{
            trigger:".contact-page #lines",
            scroller:"home",
            start: "top 10%",
            markers:true,
            end: "bottom 20%",
            toggleActions:"restart none none none",
        }
    })
    }

const mm = gsap.matchMedia();

mm.add("(max-width: 800px)", () => {
  // Run the animation when the condition is met
  animateElement();
});

gsap.from(".text-container",{
    x:-2100,
    duration:4,
    opacity:-8,
    backgroundColor: "transparent",
    scrollTrigger:{
        trigger:".text-container",
        scroller:"body",
        start:"center 10%",
        end:"100% 10%",
        toggleActions:"restart none none none",
        scrub:3
    }
})

gsap.from(".nd-column .cont-img",{
    rotate:"180deg",
    duration:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:".nd-column .cont-img",
        scroller:"body",
        start:"top center",
        toggleActions:"restart none none none",
        end:"center center",
    }
})

gsap.from(".text-contact-container",{
    x:-100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".text-contact-container",
        scroller:"body",
        start:"-25% center",
        end:"-30 center",
    }
})

// project pages animations
gsap.from(".project-text-1-2",{
    y:40,
    duration:2,
    scrollTrigger:{
        trigger:".project-text-1-2",
        scroller:"body",
        start:"120% center",
        end:"220% center",
        toggleActions:"restart reverse none none",
        scrub:2,
    }
})

gsap.to(".project-text-2-2",{
    y:50,
    duration:2,
    scrollTrigger:{
        trigger:".project-text-2-2",
        scroller:"body",
        start:"center center",
        end:"bottom center",
        toggleActions:"restart reverse none none",
        scrub:2,
    }
})

gsap.to(".wrapper-projects",{
    transform:"translate(-100%)",
    duration:3,
    scrollTrigger:{
        trigger:".wrapper-projects",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})

// for last page image big and small
var hover=document.querySelector(".cont-img");
function imgBig(){
    hover.style.scale=1.9;
    hover.style.rotate="-14deg";
}
function imgSmall(){
    hover.style.scale=1;
    hover.style.rotate="0deg";
}

// for touch profile pic rotate
var pp=document.querySelector(".profile-pic");
var count=0;
pp.addEventListener("click",function(){
   if(count==0){
    pp.style.scale=1.1;
    pp.style.rotate="360deg";
    count=1;
   }
   else{
    pp.style.scale=1;
    pp.style.rotate="-360deg";
    count=0;
   }
})


// for ghost(emoji) animation
let ghost=document.querySelector("#ghost");
let counts=0;
ghost.addEventListener("click",function(){
    if(counts==0){
        ghost.style.rotate="720deg";
        ghost.style.transform = "translate(30px, 30px)";
        counts=1;
    }
    else{
        ghost.style.rotate="-720deg";
        ghost.style.transform = "translate(-30px, -30px)";
        counts=0;
    }
    ghost.addEventListener("mouseout", function(){
        ghost.style.transform = "translate(0px, 0px)";
        ghost.style.scale=1;
    });
    ghost.addEventListener("mouseenter", function(){
        ghost.style.scale=1.9;
    });
})


// for time in home page
let hrs=document.querySelector("#hrs");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");

setInterval(()=>{
    let currentTime=new Date();
    hrs.innerHTML=(currentTime.getHours() < 10 ? "0":"") + currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes() <10 ? "0":"") + currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds() <10 ? "0":"") + currentTime.getSeconds();
},1000)

// for last page string
var initialpath=`M 50 90 Q 500 90 990 90`
var finalpath=`M 50 90 Q 500 90 990 90`
var string=document.querySelector("#string")
string.addEventListener("mousemove",function(dets){
    initialpath=`M 50 90 Q ${dets.x} ${dets.y} 990 90`
    console.log(initialpath)
    gsap.to("svg path",{
        attr:{d:initialpath},
        duration:0.3,
        ease:"power3.out"
        })
})

string.addEventListener("mouseleave",function(){

    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.4,
        ease:"elastic.out(1,0.2"
        })
})

// custom cursor
let cursor=document.querySelector(".cursor")
let project=document.querySelector("html")
project.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.8,
        ease:"back.out"
    })
})

// for search button
let button=document.querySelector("#btn")
button.addEventListener("click",function(){
   alert("working soon :)")
})

