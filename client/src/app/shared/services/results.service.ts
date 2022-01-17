import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Message, Result } from 'src/app/interfaces/Result';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }

  // Get results
  get(): Observable<Result[]> {
    return this.http.get<Result[]>('/api/results/get-results')
      .pipe(tap(console.log))
  }

  // Get result by id
  getById(id: string): Observable<Result> {
    return this.http.get<Result>(`/api/results/get-result/${id}`)
      .pipe(tap(console.log))
  }

  // Post result
  post(result: Result) {
    return this.http.post('/api/results/post-result', result)
      .pipe(tap(console.log))
  }

  // Delete result
  delete(id: string): Observable<Message> {
    return this.http.delete(`/api/results/delete-result/${id}`)
      .pipe(tap(console.log))
  }

}
