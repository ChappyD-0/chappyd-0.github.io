import { Component } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-servie/work-experience.service';
import { WorkExperience} from '../models/work-experience/work-experience.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.Component.html',
  styleUrl: './work-experience.component.css'
})

export class WorkExperienceComponent {
  workExperience: WorkExperience[] = [];

  constructor(public workExperienceService: WorkExperienceService)
  {
    console.log(this.workExperienceService);
    this.workExperienceService.getWorkExperience().snapshotChanges().pipe(
      map(change =>
         change.map( c=>
                    ({id: c.payload.doc.id, ...c.payload.doc.data()})
         )
      )
    ).subscribe(data =>{
      this.workExperience = data;
      console.log(this.workExperience);
    });
  }
}
