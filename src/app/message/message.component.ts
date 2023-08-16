import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { MessageModel } from './message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  message: MessageModel = new MessageModel();
  result!: string;

  ngOnInit(): void {
  }

  sendAnswer() {
    console.log(this.message);
    this.messageService.sendAnswer(this.message).subscribe(message => {
      this.result = message.message;
    },
    err => {
      this.result = `Erro ao enviar a resposta do usuário à API - ${err}`;
    })
  }

}
