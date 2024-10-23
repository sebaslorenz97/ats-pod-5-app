import { Injectable, model } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PresentationCardModel } from '../models/presentation-card-model';

@Injectable({
  providedIn: 'root'
})
export class PresentationServiceService {

  preBusiness!: PresentationCardModel;
  preTravel!: PresentationCardModel;
  preWork!: PresentationCardModel;
  preArt!: PresentationCardModel;
  preLandscape!: PresentationCardModel;
  preLifestyle!:PresentationCardModel;
  presentations!: PresentationCardModel[];

  constructor() { }

  searchPresentationsByType(type: string | null){
    this.preBusiness = {
      photoUrl: "../../../../assets/images/server-images/business.jpg",
      title: "The Future of Enterprise",
      description: "The future of enterprise will be shaped by digital innovation and sustainability, driving efficiency and ethical practices. Companies will harness AI and automation to streamline operations and enhance customer experiences. Collaborative ecosystems will flourish, enabling global partnerships and remote work. Ultimately, success will hinge on agility and a commitment to social responsibility, redefining what it means to thrive in business.",
      text: "Last updated 3 mins ago"
    }
    this.preTravel = {
      photoUrl: "../../../../assets/images/server-images/travel.jpg",
      title: "Journey to New Horizons",
      description: "Encapsulates the spirit of exploration and the thrill of discovering the unknown. Each step taken opens doors to new cultures, landscapes, and experiences that enrich our understanding of the world. Embracing the unfamiliar fosters personal growth and broadens perspectives, igniting a sense of adventure within. Ultimately, this journey is about more than just destinations; it's a celebration of the stories we gather along the way.",
      text: "Last updated 3 mins ago"
    }
    this.preWork = {
      photoUrl: "../../../../assets/images/server-images/work.jpg",
      title: "Crafting Success",
      description: "Reflects the art of turning vision into reality through dedication and collaboration. It emphasizes the importance of honing skills, embracing challenges, and learning from failures along the way. Each milestone achieved is a testament to perseverance and teamwork, highlighting that success is not just an endpoint but a continuous journey. By fostering a culture of innovation and support, we pave the way for meaningful accomplishments that inspire others.",
      text: "Last updated 3 mins ago"
    }
    this.preArt = {
      photoUrl: "../../../../assets/images/server-images/art.jpg",
      title: "Whispers of Creativity",
      description: "Captures the subtle inspirations that spark artistic expression, inviting viewers to explore the unseen connections between imagination and reality. Each brushstroke and detail resonates with the quiet stories waiting to be told, celebrating the power of creativity to transform the ordinary into the extraordinary.",
      text: "Last updated 3 mins ago"
    }
    this.preLandscape = {
      photoUrl: "../../../../assets/images/server-images/landscapes.jpg",
      title: "Echoes Among the Trees",
      description: "In Echoes Among the Trees, the forest breathes a symphony of whispers and rustling leaves, where every footstep uncovers stories woven into the bark and shadows, inviting wanderers to lose themselves in nature's timeless embrace.",
      text: "Last updated 3 mins ago"
    }
    this.preLifestyle = {
      photoUrl: "../../../../assets/images/server-images/lifestyle.jpg",
      title: "Embrace Wellness",
      description: "It is a celebration of holistic health, encouraging a balanced lifestyle that nurtures the body, mind, and spirit. By prioritizing self-care and mindful choices, we cultivate resilience and vitality, paving the way for a fulfilling life.",
      text: "Last updated 3 mins ago"
    }
    this.presentations = [this.preLifestyle, this.preArt, this.preBusiness, this.preWork, this.preLifestyle, this.preTravel, this.preLandscape, this.preBusiness, this.preArt, this.preWork]
    return this.presentations;
  }

}
