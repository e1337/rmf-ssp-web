import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Control } from './control';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  private controlsUrl = 'http://127.0.0.1:8080/controls/id';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // getControls(): Observable<Control[]> {
  //   this.messageService.add('ControlService: Fetched Controls');
  //   return of(Controls);
  // }
  private config = {
    headers: {
      // 'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
      // 'Accept': 'application/json;odata=verbose',
      'trans-id': 'some-trans-id'
    }
  };

  getControls(): Observable<Control[]> {

    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     'trans-id': '123456789'
    //   }
    // }
    this.log("fetching controls");

    return this.http.get<Control[]>(this.controlsUrl, this.config)
      .pipe(
        catchError(this.handleError('getControls', []))
      );

  }

  getControl(id: number): Observable<Control> {
    // return of(this.getControls.find(control => control.id === id));

    const url = `http://127.0.0.1:8080/controls/id/${id}/details`;
    return this.http.get<Control>(url, this.config).pipe(
      tap(_ => this.log(`fetched control id=${id}`)),
      catchError(this.handleError<Control>(`getControl id=${id}`))
    );

  }

  private log(message: string) {
    this.messageService.add(`ControlService: ${message}`);
  }

  private handleError<T>(operation = 'Operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} Failed: ${error.message}`);
      return of(result as T);
    };
  }
}
