import { Component } from '@angular/core';
import {MaterialModule} from '../../modules/material/material.module';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'lp-header-section',
  imports: [MaterialModule, CommonModule, NgOptimizedImage],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
