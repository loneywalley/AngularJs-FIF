import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataUser } from '../app/app.entity';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonLabel: string ='';
  @Input() dataFoChild!: DataUser;
  @Output() submitButton = new EventEmitter<string>();

  onClick(){
    this.submitButton.emit(this.dataFoChild.name);
  }
}
