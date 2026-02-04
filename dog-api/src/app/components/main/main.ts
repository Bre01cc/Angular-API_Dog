import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  termoBusca = signal('');
  private router = inject(Router);

  navegarParaRaca(raca: string) {
    const racaFormatada = raca.trim().toLowerCase()
    if (raca) {
      this.router.navigate(['/visualizar', racaFormatada])
    }
  }
}