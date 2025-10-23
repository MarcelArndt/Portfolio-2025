import gsap from 'gsap';

export function toastCloseAnimation(obj:Record<string, HTMLElement>){
   
    return new Promise<void>((resolve)=>{
        const tlOne = gsap.timeline({
            onComplete: () => {
                obj['toast'].style.display = "none";
                resolve()
            }
            });

        tlOne
        .set((obj['toast']),{
            yPercent:0,
        })
        .to((obj['toastContent']),{
            opacity:0, 
            duration:0.125,
        })
        .to((obj['toast']),{
            yPercent:100,
            opacity:0, 
            duration:0.35,
        })
    });
  
}

export function toastOpenAnimation(obj:Record<string, HTMLElement>){
   
    return new Promise<void>((resolve)=>{
        const tlOne = gsap.timeline({
            onComplete: () => {
                resolve()
            }
            });

        tlOne
        .set((obj['toast']),{
           pointerEvents: 'auto',
            display: "flex",
            yPercent:100,
        })
        .to((obj['toast']),{
            yPercent:0,
            opacity:1, 
            duration:0.35,
        })
        .to((obj['toastContent']),{
            opacity:1, 
            duration:0.125,
        })
    });
  
}

