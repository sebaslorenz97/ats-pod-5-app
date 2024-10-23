import { Component, Input } from '@angular/core';
import { EditPresentationAlertModalComponent } from '../../../shared/alert-modal/edit-presentation-alert-modal/edit-presentation-alert-modal.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-presentation-card',
  standalone: true,
  imports: [EditPresentationAlertModalComponent, NgIf],
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.css'
})
export class PresentationCardComponent {

  alertMessage: string | null = null;

  @Input({required:true}) photoUrl!: string;
  @Input({required:true}) title!: string;
  @Input({required:true}) description!: string;
  @Input({required:true}) text!: string;

  editOrDeleteModal(){
    console.log("Editando o Eliminando presentacion");
    this.alertMessage = "PRUEBA DEL ALERT MODAL"

  }

}
