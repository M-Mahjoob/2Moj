import { Component } from '@angular/core';
import {ProjectService} from '../../project.service';
import {HttpResponse} from '@angular/common/http';
 // import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-plus-do',
  templateUrl: './plus-do.component.html',
  styleUrls: ['./plus-do.component.css']
})
export class PlusDoComponent {
  doSubject = [
    {name: 'smpl',
     doer: 'sample person'
    },
    {
      name: 'smpl-1',
      doer: 'unknown'
    }
  ];
  constructor(private projectService: ProjectService) {}
   onSave() {
    this.projectService.storeDo(this.doSubject)
      .subscribe(
        (Response) => console.log(Response),
        (error) => console.log(error)
      );
  }
  onGet() {
    this.projectService.getDo()
    // (Response) => console.log(Response),this just show json file and the output is string .
      .subscribe((response: HttpResponse <any>) => {
        const data = response;
        console.log(data);
      },
      (error) => console.log(error)
      );
  }
}
