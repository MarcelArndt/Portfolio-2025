import { Component, Input } from '@angular/core';
import { LanguageSwitch } from '../../service/language-switch';
import { CommonModule } from '@angular/common';
import { iconsUrlCatalog } from '../utility/iconsUrlCatalog';
import { LightboxService } from '../utility/lightbox/lightbox-service';
import { Project } from '../../types/types';
import { Texts } from '../../types/types';
import { IconComponent } from '../utility/icon/icon';

@Component({
  selector: 'app-project-lightbox-template',
  imports: [CommonModule, IconComponent],
  templateUrl: './project-lightbox-template.html',
  styleUrl: './project-lightbox-template.scss'
})
export class ProjectLightboxTemplate {
  constructor( public languageService: LanguageSwitch, private lightboxService :LightboxService ){}

  @Input() projectData!: Project;
  @Input() projectID!: keyof Pick<Texts, 'projectOne' | 'projectTwo' | 'projectThree'>;

  icons = iconsUrlCatalog

  ngOnInit(){
    console.log(this.projectID)
  }

  closeLightbox(){
    this.lightboxService.close()
  }

  switchContent(){
    this.lightboxService.prepareSwitchContent(ProjectLightboxTemplate, {'projectID': 'projectThree'});
  }

}
