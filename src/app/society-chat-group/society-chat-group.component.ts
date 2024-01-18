import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-society-chat-group',
  templateUrl: './society-chat-group.component.html',
  styleUrls: ['./society-chat-group.component.css'],
})
export class SocietyChatGroupComponent {
  message = 'Namste';

  sendMessage() {
    console.log('Message sent:', this.message);
    this.message = '';
  }
}
