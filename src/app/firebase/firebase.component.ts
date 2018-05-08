import { Component } from '@angular/core';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent {
  doSubjects = [
    {
      name: 'smpl',
      doer: 'sample person'
    },
    {
      name: 'smpl-1',
      doer: 'second person'
    }
  ];

  constructor(private projectService: ProjectService) {
  }

  onAddServer(name: string , doer: string) {
    this.doSubjects.push({
      name : name,
      doer : doer
      // id: this.generateId()
    });
  }

  onSave() {
    this.projectService.putDo(this.doSubjects)
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

  // private generateId() {
  //   return Math.round(Math.random() * 10000);
  // }
}

