import { Component, OnInit } from '@angular/core';
import { ChildService } from '../child.service';
import {Child} from '../child';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  children: Child[];

  constructor(private childService: ChildService) { }

  ngOnInit(): void {
    this.childService.getAllChildren().subscribe((data: Child[]) => {
      this.children = data;
    })
  }

}
