import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Airplane } from './airplane'; 
var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};
@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  url = 'https://localhost:44354/api/airplaneclasses';  
  constructor(private http: HttpClient) { }
  GetAllAirplane(): Observable<Airplane[]> {  
    return this.http.get<Airplane[]>(this.url);  
  }  
  FindAirplane(airplaneid: string): Observable<Airplane> {  
    const apiurl = `${this.url}/${airplaneid}`;
    return this.http.get<Airplane>(apiurl);  
  } 
  createAluno(airplane: Airplane): Observable<Airplane> {  
    return this.http.post<Airplane>(this.url, airplane, httpOptions);  
  }  
}