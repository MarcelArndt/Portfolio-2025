import gsap from 'gsap';
export function whiteboxGrowAnimation(obj:Record<string, HTMLElement>){


    gsap.to((obj['textbox']),{
        y:"+=300px",
    });

     gsap.to((obj['blackTransition']),{
        y:"+=100vh",
    });

    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['heroSection'],
            start: '60% 50%',
            endTrigger : obj['skillSection'],
            end: '20% bottom', 
            scrub: 1,
        }
    });
    tlOne.to((obj['textbox']),{
        y:"-=500px",
         
    }).to(({}),{
    })
    .to((obj['blackTransition']),{
        y:"-=100vh",
        ease:"circ.out",

    }, "-=0.45")


    let tlMenu = gsap.timeline({
        scrollTrigger: {
            trigger: obj['heroSection'],
            start: '75% center',
            endTrigger : obj['aboutMe'],
            end: '-40% center',
            scrub: 1,
        }
    });
    tlMenu.from( document.querySelectorAll('.button-container button'),{
        opacity:0,
        y:"+=50px",
        stagger: 1,
    })


}