import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProjectService {
  constructor(private  http: HttpClient) {}
  storeDo (doSubject: any []) {
    return this.http.post('https://domoprj-1.firebaseio.com/data.json' , doSubject);
  }
  getDo() {
    return this.http.get('https://domoprj-1.firebaseio.com/data.json');
  }

}
