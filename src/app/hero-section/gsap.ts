import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function HeroSectionAnimation(obj:Record<string, HTMLElement>) {

    gsap.set(obj['redTransition'],{
        y: "-=36px",
    });

    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['heroSection'],
            start: 'top top',
            endTrigger: obj['aboutMeSection'],
            end: 'bottom 80%',
            scrub: 1, 
        }
    });

    tlOne.to(obj['whiteTransition'], {
      y: "-=100vh",
      ease: "circle.out"
    }).to(obj['redTransition'], {
      y: "-=100vh",
      ease: "power4.out"
    }, "<");
    



}