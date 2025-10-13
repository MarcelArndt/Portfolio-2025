import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function HeroSectionAnimation(obj:Record<string, HTMLElement>) {

    gsap.set(obj['redTransition'],{
        y: "-=36px",
    });

    let mediaQuery = gsap.matchMedia();

    mediaQuery.add({
      isDesktop: "(min-width: 1443px)",
      isMobile: "(max-width: 1442px)",
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
    }, "<");
    
    if (isDesktop) {
    tlOne.to((obj['headlineTextBox']),{
      y: "+=300px",
    }, "<")    
    .to((obj['portrait']),{
      y: "-=700px",
    }, "<");
  } else {
     tlOne.to((obj['headlineTextBox']),{
      y: "-=75vh",
      opacity:0,
      duration:2,
      ease: "power2.out"
    }, "<")    
    .to((obj['portrait']),{
      y: "+=300px",
    }, "<");
  }

    });

}