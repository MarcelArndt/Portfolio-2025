import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function SkillSectionAnimation(obj:Record<string, HTMLElement | HTMLElement[]>) {


    gsap.set((obj["textbox"]),{
        y:"+=150",
        pointerEvents:'none',
    });

    let tlTextbox = gsap.timeline({
        scrollTrigger: {
            trigger: obj['aboutMeSection'],
            start: 'top 50%',
            endTrigger: obj['portfolioSection'],
            end: 'bottom bottom',
            scrub: 1, 
        }
    });

    tlTextbox.set((obj['textbox']),{
        y:"-=60vh",
        opacity:0,
        duration:4,
    })
    .to((obj['textbox']),{
        pointerEvents:'auto',
        duration:0.5,
    })
    .to((obj['textbox']),{
        opacity:1,
        duration:1,
    }).to((obj['textbox']),{
         y:"+=40vh",
        opacity:1,
        duration:10,
    });

    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['aboutMeSection'],
            start: '20% 50%',
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
    })

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
        y:"-=250",
        duration:25,
        ease: "power2.out"
    },"7.25")

}