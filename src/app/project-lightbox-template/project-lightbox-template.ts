import { Component, Input } from '@angular/core';
import { LanguageSwitch } from '../../service/language-switch';
import { CommonModule } from '@angular/common';
import { iconsUrlCatalog } from '../utility/iconsUrlCatalog';
import { LightboxService } from '../utility/lightbox/lightbox-service';
import { Project } from '../../types/types';
import { Texts } from '../../types/types';
import { IconComponent } from '../utility/icon/icon';

type ProjectKey = keyof Pick<Texts, 'projectOne' | 'projectTwo' | 'projectThree'>;

@Component({
  selector: 'app-project-lightbox-template',
  imports: [CommonModule, IconComponent],
  templateUrl: './project-lightbox-template.html',
  styleUrl: './project-lightbox-template.scss'
})
export class ProjectLightboxTemplate {
  constructor( public languageService: LanguageSwitch, private lightboxService :LightboxService ){}

  @Input() projectData!: Project;
  @Input() projectID!: ProjectKey;
  private readonly projectOrder: ProjectKey[] = ['projectOne', 'projectTwo', 'projectThree'];

  icons = iconsUrlCatalog

pickNextProjectID() {
  const i = this.projectOrder.indexOf(this.projectID);
  return {
    nextId: this.projectOrder[(i + 1) % this.projectOrder.length],
    lastId: this.projectOrder[(i - 1 + this.projectOrder.length) % this.projectOrder.length]
  };
}

  closeLightbox(){
    this.lightboxService.close()
  }

  switchContent(isforewards:boolean){
    const newIds = this.pickNextProjectID()
    const nextId = isforewards? newIds.nextId : newIds.lastId;
    this.lightboxService.prepareSwitchContent(ProjectLightboxTemplate, {'projectID': nextId},isforewards );
  }


}
