import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() type:any;
  @Input() info:any;

  @Output() deleteEvent = new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }

  delete(btn : any){
    this.deleteEvent.emit(btn);
  }

}
