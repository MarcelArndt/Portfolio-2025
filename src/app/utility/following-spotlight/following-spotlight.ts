import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-following-spotlight',
  imports: [],
  templateUrl: './following-spotlight.html',
  styleUrl: './following-spotlight.scss'
})
export class FollowingSpotlight {
@Input({ required: true }) section!: HTMLElement;
currentX:number = 0;
currentY:number = 0;
targetX:number = 0;
targetY:number = 0;
animationFrameId!: number;
easeTimer:number = 0.1;


@HostListener('document:mousemove', ['$event'])
onMouseMove(event: MouseEvent) {
  const isInside = this.section.contains(event.target as Node);

    if (isInside) {
      const rect = this.section.getBoundingClientRect();
      this.targetX = event.clientX - rect.left;
      this.targetY = event.clientY - rect.top;
      this.section.style.setProperty('--opacity', `1`);
    } else {
      this.section.style.setProperty('--opacity', `0`);
    }
  }

 animate() {
    this.currentX += (this.targetX - this.currentX) * this.easeTimer;
    this.currentY += (this.targetY - this.currentY) * this.easeTimer;

    this.section.style.setProperty('--x', `${this.currentX}px`);
    this.section.style.setProperty('--y', `${this.currentY}px`);

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }


  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
  }

  ngAfterViewInit() {
    this.section.style.setProperty('--opacity', `0`);
    this.animate();
  }
}

