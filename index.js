gsap.from("#p1mid #m1",{
    y:-500,
    stagger: 1,
    duration: 1,
    delay: 0.5
})

gsap.from("#page3",{
    opacity:0,
    delay:0.5,
    duration: 0.3,
    scrollTrigger:{
        trigger: "#page3",
        scroller:"body",
        // markers:true,
        scrub: true,
        start: "top 70%",
        end:"top 50%"

    }
})

