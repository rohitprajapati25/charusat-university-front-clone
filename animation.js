function locoScroll(){
 
}
locoScroll()

function cursorEffect(){
    var page1Text=document.querySelector("#page1-con")
    var cursor=document.querySelector("#cursor")

    page1Text.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            duration:.9,
        })
    })
    page1Text.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    page1Text.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
    page1Text.addEventListener("click",function(){
       gsap.to("#video",{
        transform: "translate(0%)",
        delay:.5,
        duration:1,
        
       })
    })
    document.querySelector(".ri-close-circle-line").addEventListener("click",function(){

        gsap.to("#video",{
            transform: "translateX(-100%)",
            delay:.5,
            duration:1,
        })
    })
    
}
cursorEffect()
    
function navAnimation(){
   
    gsap.from("#nav-top",{
        y:"-100px",
        delay:1,
        opacity:0,
        duration:1
    })
    gsap.from("#nav",{
        y:"-100px",
        delay:1,
        opacity:0,
        duration:1,
        
    })
    gsap.from("#nav-top a",{
        y:"-100px",
        stagger:.05,
        delay:1.2,
        opacity:0,
        duration:1
    })
   
    gsap.from("#nav img",{
        y:"-100px",
        stagger:.2,
        delay:1.2,
        opacity:0,
        duration:1
    })
    gsap.from("#menu li",{
        y:"-100px",
        stagger:.2,
        delay:1.2,
        opacity:0,
        duration:1
    })
    gsap.from("#bottom_top",{
        y:"100px",
        delay:1,
        opacity:0,
        duration:1
    })
    gsap.from("#bottom",{
        y:"100px",
        delay:1,
        opacity:0,
        duration:1,
        
    })

}
navAnimation()

function page1Con(){
    gsap.from("#page1 #blur",{
        y:-100,
        opacity:0,
        duration:1.5,
        delay:1
    })
    gsap.from("#page1 video",{
    y:-100,
    opacity:0,
    duration:1.5,
    delay:1
})
gsap.from("#page1-con h1",{
    y:"100px",
        stagger:.2,
        delay:.9,
        duration:1.5,
        opacity:0,
})
gsap.from("#page1-con .r",{
    
        stagger:.2,
        delay:.9,
        duration:1.5,
        opacity:0,
})
}
page1Con()

function page2Animation(){
    gsap.registerPlugin(ScrollTrigger);
gsap.from("#page2 hr",{
    y:10,
    duration:.5,
    delay:.3,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"hr",
        scroller:"body",
        start:"top 120%",
        end:"top 20%",
        scrub:1,
    }
})
gsap.from("#page2 h4",{
    y:-10,
    duration:.5,
    delay:.3,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"h4",
        scroller:"body",
        start:"top 120%",
        end:"top 20%",
        scrub:1,
        
    }
})
gsap.from("#page2 h1",{
    y:-120,
    duration:.5,
    delay:.3,
    opacity:0,
    scrollTrigger:{
        trigger:"h4",
        scroller:"body",
        start:"top 120%",
        end:"top 20%",
        scrub:1,
    
    }
})
gsap.from("#page2 #l1",{
    x:-100,
    duration:1.5,
    delay:.8,
    opacity:0,
    scale:0.5,
    
    scrollTrigger:{
        trigger:"#l1",
        scroller:"body",
        start:"top 100%",
        end:"top 20%",
        scrub:1.5,
    }
})
gsap.from("#page2 #l2",{
    x:-100,
    duration:1.5,
    delay:.8,
    opacity:0,
    scale:0.5,
    
    scrollTrigger:{
        trigger:"#l2",
        scroller:"body",
        start:"top 100%",
        end:"top 20%",
        scrub:1.5,
    }
})
gsap.from("#page2 #r1",{
    x:100,
    duration:1.5,
    delay:.8,
    opacity:0,
    scale:0.5,
    
    scrollTrigger:{
        trigger:"#r1",
        scroller:"body",
        start:"top 100%",
        end:"top 20%",
        scrub:1.5,
    }
})
gsap.from("#page2 #r2",{
    x:100,
    duration:1.5,
    delay:.8,
    opacity:0,
    scale:0.5,
    
    scrollTrigger:{
        trigger:"#r2",
        scroller:"body",
        start:"top 100%",
        end:"top 20%",
        scrub:1.5,
    }
})
gsap.from("#page2 #page2-con img",{
    x:100,
    duration:2.3,
    delay:1,
    opacity:0,
    scale:0.5,
    rotate:"90deg",
    scrollTrigger:{
        trigger:"#l1",
        scroller:"body",
        start:"top 120%",
        end:"top 30%",
        scrub:1,
        
    }
})
gsap.from("#page2 #about_us",{
    y:-100,
    duration:2,
    delay:4,
    scale:0,
    scrollTrigger:{
        trigger:"#r2",
        scroller:"body",
        start:"top 120%",
        end:"top -10%",
        scrub:2.5,
   
    }
})

}
page2Animation()

function page3Animation(){
    gsap.from("#page3 h3",{
        y:100,
        duration:1.5,
        delay:1,
        scale:0,
        opacity:0,
        scrollTrigger:{
            trigger:"#page3 h3",
            scroller:"body",
            start:"top 120%",
            end:"top -10%",
            scrub:2.5,
       
        }
    })
    gsap.from("#page3 video",{
        y:10,
        duration:1,
        delay:1,
        scale:0,
        opacity:0,
        scrollTrigger:{
            trigger:"#page3 video",
            scroller:"body",
            start:"top 280%",
            end:"top 10%",
            scrub:1.5,
       
        }
    })
    
    gsap.from("#page3 img",{
        x:80,
        duration:1.5,
        delay:2,
        scrollTrigger:{
            trigger:"#page3 img",
            scroller:"body",
            start:"top 350%",
            end:"top 10%",
            scrub:1.1,
       
        }
    })
    
    
}
page3Animation();
function page4Animation(){
    
gsap.registerPlugin(ScrollTrigger);
gsap.to("#page4 h1",{
    
    transform:"translateX(-190%)",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 0%",
        end:"top -200%",
        scrub:2,
        pin:true //it use for pin the page 
    }
})
}
page4Animation();

function page5Animation(){
    gsap.registerPlugin(ScrollTrigger);
gsap.from("#page5 #h2",{
    
    x:-1000,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5 h2",
        scroller:"body",
        start:"top 200%",
        end:"top 10%",
        scrub:1.1,
    }
})
gsap.from("#page5 #h1",{
    
    x:1000,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5 h2",
        scroller:"body",
        start:"top 200%",
        end:"top 10%",
        scrub:1.1,
        
    }
})

}
page5Animation();

function page6Animation(){
    gsap.registerPlugin(ScrollTrigger);
gsap.from("#page6 #h2",{
    
    x:-1000,
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 h2",
        scroller:"body",
        start:"top 200%",
        end:"top 10%",
        scrub:1.1,
    }
})
gsap.from("#page6 #h1",{
    
    x:1000,
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 h2",
        scroller:"body",
        start:"top 200%",
        end:"top 10%",
        scrub:1.1,
        
    }
})
gsap.from("#page6 .clowd",{
    
    x:80,
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 .clowd",
        scroller:"body",
        start:"top 140%",
        end:"top -20%",
        scrub:1.1,
        
    }
})
gsap.from("#page6 .clowd1",{
    
    x:-80,
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 .clowd1",
        scroller:"body",
        start:"top 140%",
        end:"top -20%",
        scrub:1.1,
        
    }
})
gsap.from("#page6 .vm",{
    y:10,
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 .vm",
        scroller:"body",
        start:"top 200%",
        end:"top 0%",
        scrub:1.1,
        
    }
})
gsap.from("#page6 #v",{
    y:-10,
    opacity:0,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:"#page6 #v",
        scroller:"body",
        start:"top 130%",
        end:"top 10%",
        scrub:1.1,
        
    }
})
gsap.from("#page6 #m",{
    y:-10,
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 #m",
        scroller:"body",
        start:"top 130%",
        end:"top 10%",
        scrub:1.1,
        
    }
})

}
page6Animation();
function page7Animation(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#page7 h1",{
        
        y:100,
        opacity:0,
        scale:0,
        scrollTrigger:{
            trigger:"#page7 h1",
            scroller:"body",
            start:"top 200%",
            end:"top 10%",
            scrub:1.1,
        }
    })
    gsap.from("#page7 .swiper-slide",{
        
        y:100,
        opacity:0,
        scale:1.5,
        scrollTrigger:{
            trigger:"#page7 .swiper-slide",
            scroller:"body",
            start:"top 100%",
            end:"top 50%",
            scrub:1.1,
        }
    })
    

        
}
page7Animation();
function page8Animation(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#page8 h1",{
        
        y:100,
        opacity:0,
        scale:0,
        scrollTrigger:{
            trigger:"#page8 h1",
            scroller:"body",
            start:"top 200%",
            end:"top 10%",
            scrub:1.1,
        }
    })
    gsap.from("#page8 .swiper-slide",{
        
        y:100,
        opacity:0,
        scale:1.5,
        scrollTrigger:{
            trigger:"#page8 .swiper-slide",
            scroller:"body",
            start:"top 100%",
            end:"top 50%",
            scrub:1.1,
        }
    })
    

        
}
page8Animation();
function count(){

function c(){
    let upto = 0;
    let counts = setInterval(updated, 2);
        function updated() {
            let count = document.getElementById("counter");
            count.innerHTML = ++upto+("+");
            if (upto === 600) {
                clearInterval(counts);
            }
        }
}
function c1(){
    let upto = 0;
let counts1 = setInterval(updated, 50);
    
    function updated() {
        let count = document.getElementById("counter1");
        count.innerHTML = ++upto+("+");
        if (upto === 30) {
            clearInterval(counts1);
        }
    }
}
function c2(){
    let upto = 0;
let counts1 = setInterval(updated, 50);
    
    function updated() {
        let count = document.getElementById("counter2");
        count.innerHTML = ++upto+("+");
        if (upto === 30) {
            clearInterval(counts1);
        }
    }
}
function c3(){
    let upto = 0;
let counts1 = setInterval(updated, 50);
    
    function updated() {
        let count = document.getElementById("counter3");
        count.innerHTML = ++upto+("+");
        if (upto === 23) {
            clearInterval(counts1);
        }
    }
}

c()  
c1()
c2()
c3()
}
count()




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  var elec=document.querySelector("#ele-con")
  var fix=document.querySelector("#fixed-div")
  elec.addEventListener("mouseenter",function(){
      fix.style.display="block"
  })
  elec.addEventListener("mouseleave",function(){
    fix.style.display="none"
})
var eles=document.querySelectorAll(".ele")
eles.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var imge=e.getAttribute("data-img")
        fix.style.backgroundImage=`url(${imge})`
    })
})

