import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Main } from './components/main/main';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router)


navegarParaRaca(raca: string) {
  if (raca) {
    this.router.navigate(['/visualizar', raca.trim().toLowerCase()]);
  }
}
}

