import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function HeroSectionAnimation(obj:Record<string, HTMLElement>) {

    gsap.set(obj['redTransition'],{
        y: "-=36px",
    });
    gsap.set((obj['arrowSymbol']),{
      y: "+=7px", 
    })

    gsap.to(obj['arrowSymbol'],{
    y: "-=125%", 
    yoyo: true, 
    repeat: -1,
    duration:1.25, 
    ease:"cicle.out",
    });

    let mediaQuery = gsap.matchMedia();

    mediaQuery.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
    }, (context) => {

    const { isDesktop, isMobile } = context.conditions as { isDesktop: boolean; isMobile: boolean; };

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
    })
    .to(obj['redTransition'], {
      y: "-=100vh",
      ease: "power4.out"
    }, "<").to((obj['mouseSymbol']),{
      opacity:0,
      duration:0.25,
      y:"+=10vh",
      ease: "power4.out"
    }, "<");
    
    if (isDesktop) {
    tlOne.to((obj['headlineTextBox']),{
      y: "+=150px",
      opacity:0,
      duration:0.1,
    }, "<")    
    .to((obj['portrait']),{
      y: "-=300px",
      opacity:0,
      duration:0.1,
      ease: "power1.out"
    }, "<").to((obj['mobilSocialNavi']),{
      opacity:0,
      y: "-=45vh",
      duration:0.25,
      ease: "power2.out"
    }, "<");
  } else {
     tlOne.to((obj['headlineTextBox']),{
      y: "-=75vh",
      opacity:0,
      duration:1,
      ease: "power2.out"
    }, "<")    
    .to((obj['portrait']),{
      y: "+=450px",
      duration:0.5,
      ease: "power1.out"
    }, "<").to((obj['mobilSocialNavi']),{
      y: "-=75vh",
      opacity:0,
      duration:1,
      ease: "power2.out"
    }, "<");
  }
    });
}