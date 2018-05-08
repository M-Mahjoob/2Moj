import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
// rxjs is package for observables
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
  constructor(private  http: HttpClient) {}
  // postDo (doSubject: any []) {
  //   return this.http.post('https://domoprj-1.firebaseio.com/data.json' , doSubject);
  // }
  putDo (doSubject: any []) {
    return this.http.put('https://domoprj-1.firebaseio.com/data.json' , doSubject);
  }
  getDo() {
    return this.http.get('https://domoprj-1.firebaseio.com/data.json')
    .map(
      (response: HttpResponse<any>) => {
        const data = response;
        return data;
      }
    );
  }
//  the ((map)) operator is used for observable get data (asynchronous)
}
