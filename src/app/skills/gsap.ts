import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function SkillSectionAnimation(obj:Record<string, HTMLElement | HTMLElement[]>) {


    gsap.set((obj["textbox"]),{
        y:"+=150",
    });

    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['skillboxSection'],
            start: '20% 70%',
            endTrigger: obj['portfolioSection'],
            end: 'bottom bottom',
            scrub: 1, 
        }
    });


    (obj['skillSectionsArray'] as HTMLElement[]).forEach((section, i) => {
    tlOne.from(section, {
        opacity: 0,
        y: "+=70",
        ease: "power2.out"
    });

    const lis = section.querySelectorAll('.skill-category-wrapper ul li');
    if (lis.length > 0) {
        tlOne.from(lis, {
        opacity: 0,
        y: "+=70",
        stagger: 1,
        ease: "power2.out"
        }, ">");
    }
    })



    tlOne.from(obj['pictureContainer'],{
        x:"+=1000",
        duration:5
    }, "0.35")
    .to(obj['pictureContainer'],{
        y:"+=350",
        duration:25,
        ease: "power2.out"
    },"7.25")
    .to((obj["textbox"]),{
        duration:25,
        y:"-=350",
    },"10")



}