import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function SkillSectionAnimation(obj:Record<string, HTMLElement>) {

    gsap.set(obj['textbox'], { 
        y: "300px"
    });

    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['aboutMeSection'],
            start: 'center center',
            endTrigger: obj['skillboxSection'],
            end: 'bottom bottom', 
            scrub: 0.7,

        }
    });

    tlOne.to(obj['textbox'], {
        y: "-10%",    
        ease: "power1.out"
    });


}