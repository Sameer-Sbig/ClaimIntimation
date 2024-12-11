import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MotorClaimIntimationComponent } from '../components/motor-claim-intimation/motor-claim-intimation.component';
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MotorClaimIntimationComponent, HeaderComponent],
  templateUrl: './app.component.html',
  // template:`
  // <main>
  // <header class="brand-name">
  // <img class="brand-logo" src="/logo.jpeg" alt="logo" aria-hidden="true"> 
  // </header>
  // </main>`,

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'claimIntimation';
}
