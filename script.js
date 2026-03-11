function part1() {
    var tl = gsap.timeline();
    tl.from("nav h1,nav h4, nav button", {
        opacity: 0,
        y: -40,
        duration: 0.5,
        delay: 1,
        stagger: 0.15
    })
    tl.from(".center1 h1", {
        x: -50,
        opacity: 0,
        duration: 0.6,
    })
    tl.from(".center1 p", {
        x: -50,
        opacity: 0,
        duration: 0.6,
    })
    tl.from(".center1 button", {
        opacity: 0,
        duration: 0.6,
    })
    tl.from(".center2 img", {
        opacity: 0,
        duration: 0.5
    }, "-=1")
    tl.from(".bottom img", {
        opacity: 0,
        duration: 0.6,
        y: 30,
        stagger: 0.15
    })
}

part1();

var t2 = gsap.timeline({
    scrollTrigger:{
        markers:true,
        trigger:".services",
        scroller:"body",
        start:"top 50%",
        end:"top 0%",
        scrub:1
    }
});

t2.from(".services h3", {
    opacity: 0,
    x: -30,
    duration: 0.5,
})
t2.from(".services p", {
    opacity: 0,
    y: 30,
    duration: 0.5
})

t2.from(".elem.white.left", {
    opacity: 0,
    x: -30,
    duration: 0.5
}, "first")
t2.from(".elem.black.right", {
    opacity: 0,
    x: 30,
    duration: 0.5
}, "first")

t2.from(".elem.black.left", {
    opacity: 0,
    x: -30,
    duration: 0.5
}, "second")
t2.from(".elem.white.right", {
    opacity: 0,
    x: 30,
    duration: 0.5
}, "second")