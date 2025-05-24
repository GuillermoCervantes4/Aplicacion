import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  standalone: false,
  selector: 'app-albergue',
  templateUrl: './albergue.page.html',
  styleUrls: ['./albergue.page.scss'],
})
export class AlberguePage implements OnInit {

  id: any;
  data: any;
  constructor(
    public db: DatabaseService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(

  ) {
    console.log('albergueID', this.route.snapshot.paramMap.get('albergueId'));
    this.id = this.route.snapshot.paramMap.get('albergueId');
    this.db.getDocumentById('Albergues', this.id)
      .subscribe((res: any) => {
        console.log('Albergue recuperado', res);
        this.data = res;
      })
  }

}
