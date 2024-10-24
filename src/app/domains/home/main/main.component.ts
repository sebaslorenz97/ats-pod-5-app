import { Component, inject, OnInit } from '@angular/core';
import { MainNavbarComponent } from '../../shared/components/main-navbar/main-navbar.component'
import { PresentationCardComponent } from '../../home/components/presentation-card/presentation-card.component'
import { PresentationServiceService } from '../../shared/services/presentation-service.service'
import { PresentationCardModel } from '../../shared/models/presentation-card-model'
import { NgFor } from '@angular/common';
import { FilterFormComponent } from '../../components/filter-form/filter-form.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainNavbarComponent, PresentationCardComponent, NgFor, FilterFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  presentations!: PresentationCardModel[];

  private presentationServiceService = inject(PresentationServiceService);

  ngOnInit(): void {
    this.presentations = this.presentationServiceService.searchPresentationsByType("Type");
    console.log(this.presentations[0].title)
  }

}
