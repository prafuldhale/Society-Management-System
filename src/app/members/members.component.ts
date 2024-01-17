import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  presidentName = "President Name";
  memberName = "Member Name"
  position = 'President';
  position1 = "Member";
  longText = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was  originally bred for hunting.";
}
