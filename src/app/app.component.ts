import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.entity';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { GenerateRandomIdService } from '../button/generate-random-id.service';
import { FormGroup, FormsModule, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'belajar-angular';
  dataUser! : DataUser;
  randomId: string;
  labelButton1 = "sikat"
  labelButton2 = "gas"
  triggerForParentName: string =""
  backgroundColor: string = 'yellow'
  name: string = ""
  updatedName: string = ""
  addUserForm: FormGroup

  constructor(
    private randomIdService: GenerateRandomIdService
  ){
    this.randomId = this.randomIdService.generateId();
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(13)])
    })
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.backgroundColor = 'pink';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'black';
  }

  ngOnInit(): void {
    this.title = 'belajar';
    this.dataUser = {
      name: 'bram',
      age: 23,
      address: 
      [{
        zipcode: 1,
        provinces: 'Bali',
        city: 'Denpasar',
        district: 'Penatih'
      },
      {
        zipcode: 2,
        provinces: 'Jawa Timur',
        city: 'Surabaya',
        district: 'Rungkut'
      }]
    }
  }
  eventFromParent(event: any) {
    console.log(event);
    this.labelButton1 = event;
    this.labelButton2 = event;
  }
  updateName(event: any) {
    this.name = event
  }

  onSubmit(){
    console.log('For Data:', this.addUserForm.value)
  }
}
