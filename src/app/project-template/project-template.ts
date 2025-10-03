import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-template',
  imports: [],
  templateUrl: './project-template.html',
  styleUrl: './project-template.scss'
})
export class ProjectTemplate {

@Input({required:true}) technology!:string[];

    iconsUrlCatalog:Record<string, string> = {
    'angular' : "./assets/technology/angular.svg",
    'javascript' : "./assets/technology/javascript.svg",
    'typescript' : "./assets/technology/typescript.svg",
    'gsap' : "./assets/technology/gsap.png",
    'sass' : "./assets/technology/sass.svg",
    'django' : "./assets/technology/django.svg",
    'python' : "./assets/technology/python.svg",
    'firebase' : "./assets/technology/firebase.svg",
    'figma' : "./assets/technology/figma.svg",
    'csharp' : "./assets/technology/c_scharp.svg",
    'git' : "./assets/technology/git.svg",
    'docker' : "./assets/technology/docker.svg",
    'unity' : "./assets/technology/unity.svg",
  }

}
