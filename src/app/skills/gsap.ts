import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function SkillSectionAnimation(obj:Record<string, HTMLElement | HTMLElement[]>) {

    gsap.set(obj['skillboxSection'], { 
        y: "+=20vh"
    });

    gsap.set(obj['pictureContainer'],{
        y:"-=150px"
    })


    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['skillboxSection'],
            start: '0% 70%',
            endTrigger: obj['portfolioSection'],
            end: 'center 80%',
            scrub: 1, 
        }
    });

    tlOne.from(obj['skillSectionsArray'], {
      opacity: 0,
      y: 75,
      stagger: 1.75,
      duration: 1,
      ease: "power2.out"
    }, "-=0.3")

    .to(obj['textbox'],{
        y:"-=100",
        duration: 5,
    })


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
            endTrigger: obj['portfolioSection'],
            end: 'center 80%',
            scrub:1,
        }
    });

    tlThree.from(obj['picture'] ,  {
        opacity: 0,
        x:"+=300",
        ease: "circle.out",
        duration:0.25,
      })

      .to(obj['pictureContainer'],{
        y:"+=220",
        duration:1,
      })




}