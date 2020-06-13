import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = [];
  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
    this.taskservice.getTask().subscribe(
      res =>this.tasks = res
    )
  }

}
