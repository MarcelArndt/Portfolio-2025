import gsap from 'gsap';
export function whiteboxGrowAnimation(obj:Record<string, HTMLElement | HTMLElement[]>){
 
    const tlOne = gsap.timeline({
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
    });

    const tlBlackOverlay = gsap.timeline({
        scrollTrigger: {
            trigger: obj['aboutMe'],
            start: '3% 55%',
            endTrigger : obj['skillSection'],
            end: '0% bottom', 
            scrub: 1,
        }
    });

    tlBlackOverlay.to(({}),{
        duration:5,
    }).to(({}),{
        duration:1,
    }).to((obj['blackTransition']),{
        y:"-=100vh",
        duration:10,
        ease: "circ.out",
    })

    const tlMenu = gsap.timeline({
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

let currentTimeline: gsap.core.Timeline | null = null;

export function aboutMeTextAnimation(obj:Record<string, HTMLElement | HTMLElement[]>, index:number){
    const elements = obj['textblockQuery'] as HTMLElement[];
    const activeEl = elements[index] ? elements[index] : elements[0] ;
    if (!activeEl) return;

    if (currentTimeline) {
        currentTimeline.kill(); 
    }

    gsap.set(elements, { autoAlpha: 0, height: 0 });

    const tl = gsap.timeline();
    currentTimeline = tl;

    tl.to(elements, { autoAlpha: 0, height: 0, duration: 0.2 })

    .fromTo(
      activeEl,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, height: 100, y: 0, duration: 0.2, ease: 'power3.out' }
    );
}