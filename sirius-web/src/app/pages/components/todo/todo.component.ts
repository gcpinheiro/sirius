import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from '@src/src/app/core/services/todo.service';
import { Todo } from '@src/src/app/core/types/types_d';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit, OnChanges {

  @Input() listTodo: Todo[];

  @Input() result: any;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

  }

  async ngOnChanges(changes: SimpleChanges): Promise<any> {
     if(this.result){
      await this.todoService.getTask();
    }

  }

}
