import { Component, OnInit } from '@angular/core';
import { ChildService } from '../child.service';
import {Child} from '../child';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  children: Child[];
  public id;

  constructor(private childService: ChildService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.childService.getChildren(this.id).subscribe((data: Child[]) => {
      this.children = data;
    })
  }

}
