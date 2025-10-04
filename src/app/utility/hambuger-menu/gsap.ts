import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

export interface GsapScrollToSectionType {
    id?:string | null,
    offset?:string | null,
    fixPoint?:string | null
}

export function gsapScrollToSection(obj:GsapScrollToSectionType) {
    let section = null
    if(obj.id){
        section = document.getElementById(obj.id);
    }
    const toCalculateValue = obj.fixPoint ? obj.fixPoint : obj.offset
    const calculatedValue:number = convertStringToPixels(toCalculateValue!, section!)
    const takeValueForSection:string | Element | undefined | number = section? section : calculatedValue!;
    const takeValueForOffset = obj.fixPoint? 0 : calculatedValue;

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: takeValueForSection,
      offsetY: takeValueForOffset
    },
    ease: "power4.out",
  });
}

function convertStringToPixels(value:string='0', section:Element | null =null): number{
    if (value.includes("vh")) {
      return (parseFloat(value) / 100) * window.innerHeight;
    } else if (value.includes("vw")) {
      return (parseFloat(value) / 100) * window.innerWidth;
    } else if (value.includes("rem")) {
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      return parseFloat(value) * rootFontSize;
    } else if (value.includes("px")) {
      return parseFloat(value) ;
    } else if (value.includes("%") && section) {
      const rect = section.getBoundingClientRect();
      return (parseFloat(value) / 100) * rect.height;
    }
    return parseFloat(value);
}
