import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderSectionComponent} from './layouts/header-section/header-section.component';
import {SliderSectionComponent} from './layouts/slider-section/slider-section.component';
import {AboutSectionComponent} from './layouts/about-section/about-section.component';
import {ServicesSectionComponent} from './layouts/services-section/services-section.component';
import {PortfolioSectionComponent} from './layouts/portfolio-section/portfolio-section.component';
import {OwnersSectionComponent} from './layouts/owners-section/owners-section.component';
import {ContactSectionComponent} from './layouts/contact-section/contact-section.component';
import {MaterialModule} from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderSectionComponent, SliderSectionComponent, AboutSectionComponent, ServicesSectionComponent, PortfolioSectionComponent, OwnersSectionComponent, ContactSectionComponent, MaterialModule, FlexLayoutModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page';
}
