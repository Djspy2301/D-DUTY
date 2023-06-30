import { Component } from '@angular/core';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sign-up-p',
  templateUrl: './sign-up-p.component.html',
  styleUrls: ['./sign-up-p.component.css']
})
export class SignUpPComponent {
  email=faEnvelope;
  password=faLock;
}
