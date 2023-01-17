import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../types/types_d';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  readonly endpoint = 'http://127.0.0.1:8000/todo/';

  public createTask(data: any){

    const response = this.httpClient.post(this.endpoint, {
      name: `${data}`
    })

    // console.log(response.subscribe(data => data));
    return response;
  }

  public getTask(){
    return this.httpClient.get<Todo[]>(this.endpoint)
  }

  public updateTask(id: number, check: any, name: string){
    const url = this.endpoint + `${id}/`;
    // console.log("Id: ", id)
    // console.log("url: ", url)
    const response = this.httpClient.put(url , {
      id: id,
      name: name,
      done: check
    });

    // console.log(response.subscribe(data => data));

    return response;
  }

  public deleteTask(id: number){
    const url = this.endpoint + `${id}/`;
    try {
      const result = this.httpClient.delete(url);
      // console.log("Result: ", result)
      // console.log("Id: ", id)
      // console.log("Url: ", url)
    }
    catch(error){
      return console.error(error);
    }
  }
}
