import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.css']
})
export class HomecontentComponent implements OnInit {

  @Input() product:any;

  constructor() { }

  ngOnInit(): void {
  }

}
