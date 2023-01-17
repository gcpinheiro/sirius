import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoService } from '../../core/services/todo.service';
import { ModalDeleteComponent } from '../modals/modal-delete/modal-delete.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() taskName = 'Task Name';
  @Input() dayToDo = 'Today - Note';
  @Input() favorite = false;
  @Input() checked = false;
  @Input() id: number;

  constructor(private todoService: TodoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.todoService.deleteTask(this.id)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("Mudou")
  }

  public get icon(){
    return this.favorite? 'assets/images/icons/favorite-marked.svg': 'assets/images/icons/favorite.svg'
  }

  public handleIcon(){
    this.favorite = !this.favorite;
  }

  changeStateCheckbox(){
    this.checked = !this.checked
    // console.log("Oi: ", this.id, this.checked, this.taskName)
    this.todoService.updateTask(this.id, this.checked, this.taskName);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        // this.todoService.deleteTask(this.id)
      }
    });
  }
}
