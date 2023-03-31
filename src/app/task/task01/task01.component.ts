import { Component, OnInit } from '@angular/core';
import { Task01WComponent } from './task01-w/task01-w.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task01',
  templateUrl: './task01.component.html',
  styleUrls: ['./task01.component.css']
})
export class Task01Component implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  showDialog() {
    const dialogRef = this.dialog.open(Task01WComponent, {
      width: '1200px',
      height: '85%',
      maxWidth: '90vw',
      // disableClose: true,
      data: {
        
      }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        
      }
    });
  }

}
