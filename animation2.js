gsap.registerPlugin(ScrollTrigger);
var tl=gsap.timeline({scrollTrigger:{
    trigger:"#main_ch",
    start:"2% 20%",
    end:"52% 90%",
    scrub:true,
    duration:5,
    delay:1,

    

}})
tl.to("#cd1",{
    marginTop:"-50px",
    marginLeft:"80px"
})
tl.to("#cd2",{
    marginTop:"-290px",
    marginLeft:"65px"


})
tl.to("#cd3",{
    marginTop:"-290px",
    marginLeft:"50px"

})
tl.to("#cd4",{
    marginTop:"-290px",
    marginLeft:"35px"


})
tl.to("#cd5",{
    marginTop:"-290px",
    marginLeft:"20px"


})
tl.to("#cd6",{
    marginTop:"-290px",
    marginLeft:"10px"


})


