import gsap from 'gsap';

export function closeLightboxAnimation(obj:Record<string, HTMLElement>){

        document.dispatchEvent(new CustomEvent('lightbox:animating', { detail: true }));

        return new Promise<void>((resolve)=>{
            const tlOne = gsap.timeline({
            onComplete: () => {
                obj['backgound'].style.display = "none";
                document.dispatchEvent(new CustomEvent('lightbox:animating', { detail: false }));
                resolve();
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

    document.dispatchEvent(new CustomEvent('lightbox:animating', { detail: true }));

    return new Promise<void>((resolve)=>{
        const newXValue = isforewards? -100 : 100;
        const tlOne = gsap.timeline({
            onComplete: () => {
                document.dispatchEvent(new CustomEvent('lightbox:animating', { detail: false }));
                resolve();
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

    document.dispatchEvent(new CustomEvent('lightbox:animating', { detail: true }));

    return new Promise<void>((resolve)=>{
        const newXValue = isforewards ? 100: -100;
        const tlOne = gsap.timeline({
            onComplete: () => {
                document.dispatchEvent(new CustomEvent('lightbox:animating', { detail: false }));
                resolve();
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

export function openLightboxAnimation(obj:Record<string, HTMLElement>){

    document.dispatchEvent(new CustomEvent('lightbox:animating', { detail: true }));

        const tlOne = gsap.timeline({
            onComplete: () => {
                document.dispatchEvent(new CustomEvent('lightbox:animating', { detail: false }));
            }
        });
    
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