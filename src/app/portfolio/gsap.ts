import gsap from 'gsap';

export function portfolioAnimation(obj:Record<string, HTMLElement>){

    const sections = obj['projectContainer'].querySelectorAll('.project');

gsap.set(sections[0], { xPercent: 100, x:250});
gsap.set(sections[1], { xPercent: -100, x:-250});
gsap.set(sections[2], { y: 250, yPercent:100});

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: obj['projectContainer'],
      start: 'top top',
      end: () => `+=${(sections.length + 1) * 200}vh`,
      scrub: 1,
      pin: true,
    }
  });

     tl.to({}, {duration: 5,}) 
      .to(obj['skillSection'], {
      opacity:0,
      duration: 20,
      }) 
     .to(sections[0], { 
        xPercent:0,
        x: 0, 
        duration: 20,
        ease: 'power1.Out'
    })
    .to({}, { duration: 5 }) 
    .to(sections[1], { 
        xPercent:0,
        x: 0, 
        duration: 20,
        ease: 'power1.out'
    })
    .to({}, { duration: 10 })
    .to(sections[2], { 
        y: 0, 
        yPercent:0,
        duration: 20,
        ease: 'power1.out'
    }).to({}, { duration: 5 })
    .to(obj['whiteOverlay'], { 
      height:"+=150vh", 
      duration: 10 ,
      ease: "circ.in",
    }).to(obj['redOverlay'], { 
      height:"+=150vh", 
      duration: 10 ,
      ease: "power2.in",
    }, "<");


      gsap.set(obj['arrowSymbol'],{
     y: "+=50%",
    })

    gsap.from(obj['arrowSymbol'],{
    y: "-=150%", 
    yoyo: true, 
    repeat: -1,
    duration:1.25, 
    ease:"cicle.out",
    });


    let tlHeadline= gsap.timeline({
        scrollTrigger: {
            trigger: obj['skillSection'],
            start: '100% 50% ',
            endTrigger : obj['projectContainer'],
            end: '60% bottom', 
            scrub: 1,
        }
    });

    tlHeadline.to(obj['transistionTextBlock'],{
      height:"120vh",
    });



  }