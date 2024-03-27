import { Injectable, isDevMode } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentApiService {
  baseUrl = '';

  isProd: boolean = !isDevMode();

  constructor(private http: HttpClient) {
    this.baseUrl = this.isProd ? '/assets/' : 'http://localhost:1337/api/';
  }


  getContent(endpoint: string): Observable<any> {
    const url= this.isProd ? `${this.baseUrl}${endpoint}.exported.json` : `${this.baseUrl}${endpoint}?pagination[pageSize]=100`;
    return this.http.get(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }


}
