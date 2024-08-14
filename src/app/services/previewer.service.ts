import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PreviewerService {
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getPreview(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
}
