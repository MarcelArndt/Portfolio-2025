import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function portfolioTransitionSectionAnimation(obj:Record<string, HTMLElement>) {

    gsap.set(obj['arrow'],{
     y: "+=50%",
    })

    gsap.set(obj['textbox'],{
     y: "+80%",
    })

    gsap.from(obj['arrow'],{
    y: "-=150%", 
    yoyo: true, 
    repeat: -1,
    duration:1.25, 
    ease:"cicle.out",
    });


    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['skillSection'],
            start: '90% center',
            endTrigger : obj['portfolioTransitionSection'],
            end: '30% center', 
            scrub: 1,
        }
    });

    tlOne.to(obj['textbox'],{
     y: "-=40%",
    });


}