import gsap from 'gsap';

export function closeLightboxAnimtion(obj:Record<string, HTMLElement>){
        return new Promise<void>((resolve)=>{
            const tlOne = gsap.timeline({
            onComplete: () => {
                obj['backgound'].style.display = "none";
                resolve()
            }
            });

            tlOne.to(obj['content'],{
                opacity:0,
                duration:0.25,
                ease: "circ.out",
            }).fromTo(
                obj['wrapperBox'],
                { y: "-50%", xPercent: -50 },
                { y: "150%", duration: 0.5, ease: "power1.out" })
            .to(obj['backgound'],{
                opacity:0,
                duration:0.25,
                ease: "circ.out",
            });
            
        });
}


export function fadeOutContent(obj:Record<string, HTMLElement>, isforewards:boolean){

    return new Promise<void>((resolve)=>{
        const newXValue = isforewards? -100 : 100;
        const tlOne = gsap.timeline({
            onComplete: () => {
                resolve()
            }
        });
        tlOne.set((obj['content']),{
            xPercent:0,
            opacity:1,
        })
        .to((obj['content']),{
            xPercent:newXValue,
            opacity:0,
        });
    });
}


export function fadeInContent(obj:Record<string, HTMLElement>, isforewards:boolean){
    return new Promise<void>((resolve)=>{
        const newXValue = isforewards ? 100: -100;
        const tlOne = gsap.timeline({
            onComplete: () => {
                resolve()
            }
        });

        tlOne.set((obj['content']),{
            xPercent:newXValue,
            opacity:0,
        })
        .to((obj['content']),{
            xPercent:0,
            opacity:1,
        });
    });
}

export function openLightboxAnimtion(obj:Record<string, HTMLElement>){

        const tlOne = gsap.timeline();
    
        tlOne
        .set(([obj['backgound'], obj['wrapperBox'], obj['content']]),{
            display: "block",
        })
        .to(obj['backgound'],{
            opacity:1,
            duration:0.25,
            ease: "circ.out",
        }).fromTo(obj['wrapperBox'], 
            { y: "150%", xPercent: -50}, 
            { y: "-50%", duration: 0.5, ease: "power1.out" }
        ).to(obj['content'],{
            opacity:1,
            duration:0.25,
            ease: "circ.out",
        });
}