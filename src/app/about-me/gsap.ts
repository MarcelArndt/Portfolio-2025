import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function whiteboxGrowAnimation(obj:Record<string, HTMLElement>){
    gsap.set(obj['whitebox'], { 
        height: "0px"
    });

    gsap.set(obj['skillSection'], { 
        y:"-300px",
    });

    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['heroSection'],
            start: 'top top',
            endTrigger : obj['aboutMe'],
            end: 'top center', 
            scrub: 0.7,
        }
    });

    tlOne.to(obj['whitebox'], {
        height: "100vh",
        ease: "power1.out"
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

}