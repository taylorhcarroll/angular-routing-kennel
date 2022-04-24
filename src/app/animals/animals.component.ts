import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.sass']
})
export class AnimalsComponent implements OnInit {
  animals$: any;
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.animals$ = this.afs.collection('animals').valueChanges();
  }

}
