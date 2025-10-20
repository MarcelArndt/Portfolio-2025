import { Component, Input } from '@angular/core';
import { LanguageSwitch } from '../../service/language-switch';
import { CommonModule } from '@angular/common';
import { iconsUrlCatalog } from '../utility/iconsUrlCatalog';
import { LightboxService } from '../utility/lightbox/lightbox-service';
import { IconComponent } from '../utility/icon/icon';
import { Project } from '../../types/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-lightbox-template',
  imports: [CommonModule, IconComponent ],
  templateUrl: './project-lightbox-template.html',
  styleUrl: './project-lightbox-template.scss'
})
export class ProjectLightboxTemplate {
  constructor( public languageService: LanguageSwitch, private lightboxService :LightboxService ){}
  @Input() projectData!: Project;
  icons = iconsUrlCatalog

  closeLightbox(){
    this.lightboxService.close()
  }

}
