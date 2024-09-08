const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function (details) {
        var diff = details.clientY - elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: details.clientX,




        });
    });
});
function circleChapta() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {

        xprev = dets.clientX;
        yprev = dets.clientY;
        xscale = gsap.utils.clamp(.8, 1.2, xdiff, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, ydiff, dets.clientY - yprev);

    });
}
circleChapta();


function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        // console.log(dets.clientX,dets.clientY);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;

    })
}
circleMouseFollower();

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 2,

        ease: Expo.easeInOut
    })
        .from(".boundingelem", {
            y: 0,
            opacity: 0,
            duration: 2,
            stagger: .2,
            delay: -1,
            ease: Expo.easeInOut
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -.5,
            ease: Expo.easeInOut

        })
}
firstPageAnim();
