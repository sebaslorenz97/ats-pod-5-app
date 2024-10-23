import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { EditPresentationFormComponent } from '../../../home/components/edit-presentation-form/edit-presentation-form.component'

@Component({
  selector: 'app-edit-presentation-alert-modal',
  standalone: true,
  imports: [NgIf, EditPresentationFormComponent],
  templateUrl: './edit-presentation-alert-modal.component.html',
  styleUrl: './edit-presentation-alert-modal.component.css'
})
export class EditPresentationAlertModalComponent {

  @Input() error: string | null = null;
  @Output() close = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit();
  }

}
