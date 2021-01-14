import { Component, OnInit } from '@angular/core';
import { Parent } from '../parent';
import {ParentService} from '../parent.service';
import { PageEvent } from '@angular/material/paginator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // holds a response of the rest api
  totalElements: number = 0;
  parents: Parent[];
  loading: boolean;

  constructor(private parentService: ParentService, private router: Router) { }

  ngOnInit(): void {
    this.getParents({ page: "0", size: "2"});
  }

  private getParents(request) {
    this.loading = true;
    this.parentService.getParents(request).subscribe(data => {
      this.parents = data['content'];
      this.totalElements = data['totalElements'];
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getParents(request);
  }

  onSelect(parent) {
    this.router.navigate(['/parent', parent.id]);
  }

}
