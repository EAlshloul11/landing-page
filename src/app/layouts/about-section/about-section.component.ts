import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lp-about-section',
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent implements AfterViewInit {
  isVisible = false;
  fullText =
    ` A leading regional software and cloud technologies company recognized for its innovative solutions and continued pursuit to provide exceptional services to its clients.
    Established in 1997 as a software development company, we rapidly evolved into developing stellar enterprise solutions and assisting organizations to transform their IT, line of business apps, platforms, and solutions to modern, cloud-powered solutions.

    we are dedicated to transforming businesses through innovative technology. With years of experience in software development, cloud solutions, and cybersecurity, we help companies achieve their digital goals with scalable, secure, and user-centric solutions.
  Our team of passionate experts works collaboratively to deliver cutting-edge products and services that drive efficiency, enhance security, and foster growth. From startups to enterprises, we empower organizations to stay ahead in the ever-evolving tech landscape.
`;
  displayedText = '';
  index = 0;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.checkVisibility();
  }

  private checkVisibility(): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      this.isVisible = true;
      this.typeText();
    }
  }

  private typeText(): void {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), 30);
    }
  }
}
