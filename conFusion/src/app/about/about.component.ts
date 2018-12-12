import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(private leaderService: LeaderService,
      private route: ActivatedRoute,
      private location: Location) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.leaders = this.leaderService.getLeaders();
    this.leader = this.leaderService.getLeader(id);
  }
  goBack(): void {
      this.location.back();
  }

}
