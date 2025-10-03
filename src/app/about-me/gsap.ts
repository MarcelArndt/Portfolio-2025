import gsap from 'gsap';
export function whiteboxGrowAnimation(obj:Record<string, HTMLElement>){



    gsap.set(obj['aboutMe'], { 
        height: "+=30vh"
    });

    gsap.set(obj['skillSection'], { 
        y:"-200px",
    });

    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['heroSection'],
            start: 'top top',
            endTrigger : obj['aboutMe'],
            end: 'bottom center', 
            scrub: 1,
        }
    });

    tlOne.to(obj['whiteTransition'], {
        y: "-70vh",
        ease: "circle.out"
    });



    let tlTow = gsap.timeline({
        scrollTrigger: {
            trigger: obj['heroSection'],
            start: 'top top',
            endTrigger : obj['aboutMe'],
            end: 'top center', 
            scrub: 1,
        }
    });

    tlTow.to(obj['textbox'], {
        y: "-70%",
        ease: "power1.out"
    });

    let tlThree = gsap.timeline({
        scrollTrigger: {
            trigger: obj['aboutMe'],
            start: '-10% center',
            endTrigger : obj['aboutMe'],
            end: 'bottom 60%', 
            scrub: 1,
        }
    });

    tlThree.to(obj['aboutMe'], {
        height:"-=40vh",
        ease: "power1.out"
    })




    let tlfour = gsap.timeline({
        scrollTrigger: {
            trigger: obj['heroSection'],
            start: 'top top',
            endTrigger : obj['aboutMe'],
            end: 'bottom center', 
            scrub: 1,
        }
    });

    tlfour.to(obj['redTransition'], {
        y: "-=70vh",
        ease: "power4.out"
    });


    let tlfive = gsap.timeline({
        scrollTrigger: {
            trigger: obj['aboutMe'],
            start: '0% 70%',
            endTrigger : obj['aboutMe'],
            end: '30% bottom', 
            scrub: 1,
        }
    });


    tlfive.from( document.querySelectorAll('.button-container button'),{
        opacity:0,
        y:"+=50px",
        stagger: 0.75,
    });

}