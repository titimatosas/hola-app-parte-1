import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, CommonModule, IonButtons, FormsModule]
})
export class ContactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
