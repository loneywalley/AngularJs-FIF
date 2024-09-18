import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.model';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { GenerateRandomIdService } from '../generate-random-id.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReversePipe } from './reverse.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonComponent, FormsModule, ReactiveFormsModule, ReversePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'my-first-project';
  dataUser!: DataUser;
  randomId: string;
  labelButton1: string = 'karta';
  labelButton2: String = 'kevin';
  fontColor: string = 'yellow';
  name: string = '';
  updatedName: string = '';

  addUserForm!: FormGroup;

  isShown!: boolean;

  today: Date = new Date();

  constructor (
    private randomIdService: GenerateRandomIdService
  ) {
    this.randomId = this.randomIdService.generateId();
    this.addUserForm = new FormGroup ({
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(13)])
    });
  }

  get nameForm() {
    return this.addUserForm.get('name')
  }

  get phoneNumberForm() {
    return this.addUserForm.get('phoneNumber')
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontColor = 'aqua';
  }

  ngOnInit(): void {
    this.title = 'test fif angular';
    this.dataUser = {
      name : 'KARTA',
      age : 25,
      address: [
        
      {
        province: 'Banten',
        city: 'Tangerang',
        district: 'Cisauk',
        zone: 1
      },
      {
        province: 'DKI',
        city: 'Jakarta',
        district: 'Cisauk',
        zone: 2
      }    
    ]
    }
  }


  eventFromParent(event:any) {
    console.log(event);
    this.labelButton1 = event;
    this.labelButton2 = event;
  }

  updateName(event: string){
    this.name = event;
  }
  
  onSubmit(){
    console.log('Form Data', this.addUserForm.value);
  }
}