import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function SkillSectionAnimation(obj:Record<string, HTMLElement | HTMLElement[]>) {

    gsap.set(obj['skillboxSection'], { 
        y: "+=20vh"
    });


    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['skillboxSection'],
            start: '0% 70%',
            endTrigger: obj['skillboxSection'],
            end: '85% bottom',
            scrub: 1, 
        }
    });

    tlOne.from(obj['skillSectionsArray'], {
      opacity: 0,
      y: 75,
      stagger: 1.75,
      duration: 1.25,
      ease: "power2.out"
    }, "-=0.3");


    let tlTwo = gsap.timeline({
        scrollTrigger: {
            trigger: obj['skillboxSection'],
            start: '0% 70%',
            endTrigger: obj['skillboxSection'],
            end: '85% bottom',
            scrub:1,
        }
    });

    tlTwo.from(
      document.querySelectorAll('.skill-category-wrapper ul li'), 
      {
        opacity: 0,
        y: 30,
        stagger: 0.75,
        duration: 1.25,
        ease: "power2.out"
      }, "-=0.3");

    
    
    let tlThree = gsap.timeline({
        scrollTrigger: {
            trigger: obj['skillboxSection'],
            start: '0% center',
            endTrigger: obj['skillboxSection'],
            end: '35% bottom',
            scrub:1,
        }
    });

    tlThree.from(obj['picture'] ,  {
        opacity: 0,
        x:"+=300",
        ease: "circle.out",
      });


}