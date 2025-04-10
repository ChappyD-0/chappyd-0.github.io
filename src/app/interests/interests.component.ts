import { Component } from '@angular/core';
import { InterestService } from '../services/interest-service/interest.service';
@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  constructor(public interestService: InterestService)
  {
    console.log(this.interestService);
  }

}
