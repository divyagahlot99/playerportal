import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

    constructor(private http: HttpClient) { }
    postPlayer(data: any){
      return this.http.post<any>("http://localhost:3000/players", data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    getPlayer(){
      return this.http.get<any>("http://localhost:3000/players")
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    getBoilerplate(url: any){
        return this.http.get<any>(url)
            .pipe(map((res:any)=>{
                return res;
            }))
    }
  
}
