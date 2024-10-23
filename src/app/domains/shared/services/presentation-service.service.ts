import { Injectable, model } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PresentationCardModel } from '../models/presentation-card-modeL';

@Injectable({
  providedIn: 'root'
})
export class PresentationServiceService {

  presentation!: PresentationCardModel;
  presentations!: PresentationCardModel[];

  constructor() { }

  searchPresentationsByType(type: string | null){
    this.presentation = {
      photoUrl: "../../../../../assets/images/server-images/desert_landscape.jpg",
      title: "Card title",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      text: "Last updated 3 mins ago"
    }
    this.presentations = [this.presentation, this.presentation, this.presentation, this.presentation, this.presentation, this.presentation, this.presentation, this.presentation, this.presentation, this.presentation]
    return this.presentations;
  }

}
