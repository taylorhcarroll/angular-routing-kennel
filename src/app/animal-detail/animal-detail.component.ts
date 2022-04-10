import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.sass']
})
export class AnimalDetailComponent implements OnInit {
  animals$;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animals$ = this.route.paramMap.pipe(
      switchMap(params => {
        const name = params.get('name');
        return this.afs.doc('animals/' + name).valueChanges();
      })
    );
  }

}
