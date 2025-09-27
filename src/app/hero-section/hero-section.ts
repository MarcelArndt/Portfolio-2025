import { Component,ViewChild,ElementRef, ViewChildren, QueryList,} from '@angular/core';
import { FollowingSpotlight } from '../utility/following-spotlight/following-spotlight';

@Component({
  selector: 'app-hero-section',
  imports: [FollowingSpotlight ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  @ViewChild('spotlightSection') spotlightSection!: ElementRef;
  @ViewChildren('moveableObject') moveableObjects!: QueryList<ElementRef<HTMLElement>>;
  maxShift = 10;
  private animationFrameId: number | null = null;
  private mouseX = 0;
  private mouseY = 0;

ngAfterViewInit() {
    this.moveableObjects.forEach(obj => {
      obj.nativeElement.style.transform = `translate(0px, 0px)`;
    });
  }

  onMouseMove(event: MouseEvent) {
    const rect = this.spotlightSection.nativeElement.getBoundingClientRect();
    this.mouseX = (event.clientX - rect.left) / rect.width;
    this.mouseY = (event.clientY - rect.top) / rect.height;

    // nur ein rAF pro Frame
    if (!this.animationFrameId) {
      this.animationFrameId = requestAnimationFrame(() => this.updatePositions());
    }
  }

  private updatePositions() {
    this.moveableObjects.forEach(obj => {
      const speedAttr = obj.nativeElement.dataset[`speed`];
      const speed = speedAttr ? parseFloat(speedAttr) : 20;

      const moveX = -this.mouseX * 2 * speed;
      const moveY = -this.mouseY * 2 * speed;

      obj.nativeElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    this.animationFrameId = null;
  }
}
