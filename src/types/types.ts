export interface Texts {
    "navigation":  string[],
    "heroSection": HeroSectionTexts,
    "skills": SkillsTexts,
    "contact": ContactSection,
    "about_me": AboutMeSection;
    "projectOne": Project;
    "projectTwo": Project;
    "projectThree": Project;
}

export interface HeroSectionTexts{
    "headline": string,
    "button": string,
    "text": string,
    "prefixText" : string,
}

export interface SkillsTexts{
    "headline": string,
    "button": string,
    "text": string,
    "prefixText" : string,
}

export interface ContactSection {
    headline: string;
    text: string;
    prefixText: string;
    button: string;
    formHeadline: string;
    formName: string;
    formEmail: string;
    formIdea: string;
    formText: string;
    formErrorName: string;
    formErrorMail: string;
    formErrorText: string;
    formErrorButton: string;
}

export interface AboutMeSection {
  prefixheadline: string;
  headline: string;
  textAboutMe: string;
  textInterests: string;
  textGoals: string;
  buttonAboutMe: string;
  buttonInterests: string;
  buttonGoals: string;
}

export interface Project {
  prefixheadline: string;
  headline: string;
  projectText: string;
  moreButton: string;
  picture: string;
  pictureSmall: string;
  colorHSL: HSLTuple
  technology: string[];
  demoLink: string;
  gitHubLink: string;
}

export type HSLTuple = [hue: number, saturation: number, lightness: number];