import { Component ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarteVisite } from './model' ;

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrl: './carte-visite.component.css'
})
export class CarteVisiteComponent implements OnInit {
  
  carteVisite: CarteVisite = new CarteVisite();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Ici, vous pouvez implémenter la logique pour enregistrer les données
    // ou simplement afficher les données dans la console pour l'instant
    console.log(this.carteVisite);
  }
}