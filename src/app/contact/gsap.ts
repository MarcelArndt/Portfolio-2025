import gsap from 'gsap';
export function contactAnimation(obj:Record<string, HTMLElement>){


    obj['button'].addEventListener('mouseenter', () => {
        const timeline = gsap.timeline();
        timeline   
        .to(obj['button'], {
            scale: 0.8,
            duration: 0.2,
            ease: "power4.out",
        })
        .to(obj['button'], {
            scale: 1.1,
            duration: 0.05,
            ease: "power4.out",
        })
        .to(obj['button'], {
            scale: 1,
            duration: 0.3,
            ease: "elastic.out(1.2, 0.3)",
        });
    });

    let tlOne = gsap.timeline({
        scrollTrigger: {
            trigger: obj['portfolioSection'],
            start: '+160% 50%',
            endTrigger : obj['contactSection'],
            end: '200% bottom', 
            scrub: 1,
        }
    });

    tlOne.from((obj['textblock']),{
        y:"-=300",
        opacity:0,
        duration:15,
    })
    .from((obj['button']),{
        scale:0.05,
        opacity:0,
        duration:20,
        ease: "elastic.out(1.2,0.3)",
    }, "+=2")
    .from((obj['form']),{
        y:"+=300",
        opacity:0,
        duration:6,
        ease: "circ.out",
    },"<")
}

