import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-pellet',
  templateUrl: './user-pellet.component.html',
  styleUrls: ['./user-pellet.component.css']
})
export class UserPelletComponent implements OnInit {

  private img;
  @Input() nickname: String;
  constructor() {
    
    System.import("./assets/user.png").then(img => this.img = img);
  }
  ngOnInit() {
  }

}
