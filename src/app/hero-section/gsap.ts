import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function heroSectionAnimation(obj:Record<string, HTMLElement>) {

    gsap.set(obj['redOverlay'], { 
        y: "90vh"
    });

    gsap.set(obj['whiteOverlay'], { 
        y: "93vh" 
    });
    
    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['heroSection'],
            start: '0 70',
            endTrigger: obj['aboutMe'],
            end: 'bottom bottom', 
            scrub: 0.7,
        }
    });


    tlOne.to(obj['redOverlay'], {
        y: "-100vh",    
        ease: "power1.out"
    });


        let tlTwo = gsap.timeline({
        scrollTrigger: {
            trigger: obj['heroSection'],
            start: '0 70',
            endTrigger: obj['aboutMe'],
            end: 'bottom bottom',
            scrub: 0.7,     
  
        }
    });


    tlTwo.to(obj['whiteOverlay'], {
        y: "-100vh",
        ease: "none"
    });
}
