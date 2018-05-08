import { Component } from '@angular/core';
import {ProjectService} from '../../project.service';
// import {HttpResponse} from '@angular/common/http';
 // import {HttpResponse} from '@angular/common/http';
// import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';



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
      doer: 'Orod Ashayeri'
    }
  ];
  constructor(private projectService: ProjectService) {}
   onSave() {
    this.projectService.putDo(this.doSubject)
      .subscribe(
        (Response) => console.log(Response),
        (error) => console.log(error)
    );
    // change postDo to putDo
    // when you don't change any thing you don't
     // need to re post the previous
     // data
     // because instead of post request I use put request
  }
  onGet() {
    // this.projectService.getDo()
    // (Response) => console.log(Response),this just show json file and the output is string .
    //  below code run when operator click the button just get  new doSubject
    // the  recent data(Do Subject) but when we use observable ....
    //  we can get and access the other DoSubject that already defined.
    //   .subscribe((response: HttpResponse <any>) => {
    //     const data = response;
    //     console.log(data);
    //   },
    //   (error) => console.log(error)
    this.projectService.getDo()
      .subscribe((Subjects) => {
          console.log(Subjects);
        },
        (error) => console.log(error)
      );
  }
}
