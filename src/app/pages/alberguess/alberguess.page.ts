import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  standalone: false,
  selector: 'app-alberguess',
  templateUrl: './alberguess.page.html',
  styleUrls: ['./alberguess.page.scss'],
})
export class AlberguessPage implements OnInit {

  albergues: any;
  constructor(
    public db: DatabaseService
  ) {
    this.fetchAlbergues();
   }

  ngOnInit() {
  }


  fetchAlbergues() {
    this.db.fetchFirestoreCollection('Albergues')
    .subscribe((res: any) => {
      console.log('Albergues Collection: ', res);
      this.albergues = res;
    })
  }
}
