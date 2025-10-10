export interface Texts {
    "navigation":  string[],
    "heroSection": HeroSectionTexts,
    "skills": SkillsTexts,
    "contact": ContactSection,
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