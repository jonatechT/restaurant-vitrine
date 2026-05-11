import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plat, Categorie } from '../../models/plat.model';
import { BackButtonComponent } from '../../shared/back-button/back-button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, BackButtonComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: Categorie[] = [
    { id: 1, nom: 'Tous', icon: '🌟' },
    { id: 2, nom: 'Plat Africain', icon: '🍲' },
    { id: 3, nom: 'Viande', icon: '🍖' },
    { id: 4, nom: 'Plat Européen', icon: '🍕' },
    { id: 5, nom: 'Boisson', icon: '🥤' },
    { id: 6, nom: 'Glace', icon: '🍦' },
  ];

  plats: Plat[] = [
    {
      id: 1,
      nom: "Alloco",
      description: "Banane plantain frite accompagnée de sauce tomate",
      prix: 1500,
      image: "assets/images/plats/alloco.jfif",
      categorie: "Plat Africain",
      disponible: true
    },
    {
      id: 2,
      nom: "Atiéké",
      description: "Semoule de manioc accompagnée de sauce et viande",
      prix: 2500,
      image: "assets/images/plats/atiéké.jfif",
      categorie: "Plat Africain",
      disponible: true
    },
    {
      id: 3,
      nom: "Bissap",
      description: "Jus de fleur d'hibiscus frais et sucré",
      prix: 1000,
      image: "assets/images/plats/bissap.jfif",
      categorie: "Boisson",
      disponible: true
    },
    {
      id: 4,
      nom: "Brochette",
      description: "Brochettes de viande grillées aux épices",
      prix: 6000,
      image: "assets/images/plats/brochette.jfif",
      categorie: "Viande",
      disponible: true
    },
    {
      id: 5,
      nom: "Poulet Flambé",
      description: "Poulet grillé avec sauce spéciale",
      prix: 4500,
      image: "assets/images/plats/poulet-flambé.jfif",
      categorie: "Viande",
      disponible: true
    },
    {
      id: 6,
      nom: "Pizza",
      description: "Pizza garnie selon vos envies",
      prix: 5000,
      image: "assets/images/plats/pizza.jfif",
      categorie: "Plat Européen",
      disponible: true
    },
    {
      id: 7,
      nom: "Glace Chocolat",
      description: "Délicieuse glace au chocolat",
      prix: 2000,
      image: "assets/images/plats/glace-chocolat.jfif",
      categorie: "Glace",
      disponible: true
    },
    {
      id: 8,
      nom: "Foutou",
      description: "Foutou banane avec sauce lumière",
      prix: 1500,
      image: "assets/images/plats/foutou.jfif",
      categorie: "Plat Africain",
      disponible: true
    },
    {
      id: 9,
      nom: "Carpe",
      description: "Carpe braisée avec sauce épicée",
      prix: 3500,
      image: "assets/images/plats/carpe.jfif",
      categorie: "Plat Africain",
      disponible: true
    },
    {
      id: 10,
      nom: "Frites",
      description: "Frites croustillantes avec sauce tomate",
      prix: 2000,
      image: "assets/images/plats/fritte.jfif",
      categorie: "Plat Africain",
      disponible: true
    },
    {
      id: 11,
      nom: "Glace à la Vanille",
      description: "Glace onctueuse à la vanille naturelle",
      prix: 2000,
      image: "assets/images/plats/glace-vanille.jfif",
      categorie: "Glace",
      disponible: true
    },
    {
      id: 12,
      nom: "Glace à la Fraise",
      description: "Glace délicieuse à la fraise",
      prix: 2000,
      image: "assets/images/plats/glace-fraise.jfif",
      categorie: "Glace",
      disponible: true
    },
    {
      id: 13,
      nom: "Teedo",
      description: "Jus à base de pain de singe",
      prix: 1000,
      image: "assets/images/plats/teedo.jfif",
      categorie: "Boisson",
      disponible: true
    },
     {
      id: 14,
      nom: "Saussice",
      description: "Saussice à base de viande industrielle",
      prix: 3500,
      image: "assets/images/plats/saussice.jfif",
      categorie: "Viande",
      disponible: true
    },
     {
      id: 15,
      nom: "Riz gras au poulet",
      description: "Riz gras accompagné de poulet grillé",
      prix: 6000,
      image: "assets/images/plats/Riz-au-poulet.jfif",
      categorie: "Plat Africain",
      disponible: true
    },
     {
      id: 16,
      nom: "Poulet pané",
      description: "Poulet pané croustillant avec sauce spéciale",
      prix: 4500,
      image: "assets/images/plats/poulet-pané.jfif",
      categorie: "Viande",
      disponible: true
    },
     {
      id: 17,
      nom: "Salade",
      description: "Salade fraîche avec légumes de saison",
      prix: 3500,
      image: "assets/images/plats/salad.jfif",
      categorie: "Viande",
      disponible: true
    },
     {
      id: 18,
      nom: "Placali",
      description: "Placali accompagné de sauce graine",
      prix: 1500,
      image: "assets/images/plats/placali.jfif",
      categorie: "Plat Africain",
      disponible: true
    },
     {
      id: 19,
      nom: "Pain anglais",
      description: "Pain anglais bien garnie avec ou sans ketchup",
      prix: 2000,
      image: "assets/images/plats/pain-anglais.jfif",
      categorie: "Plat Européen",
      disponible: true
    },
     {
      id: 20,
      nom: "Coca-cola",
      description: "Boisson gazeuse",
      prix: 1000,
      image: "assets/images/plats/coca-cola.jfif",
      categorie: "Boisson",
      disponible: true
    },
     {
      id: 21,
      nom: "Fanta",
      description: "Boisson gazeuse",
      prix: 1000,
      image: "assets/images/plats/fanta.jfif",
      categorie: "Boisson",
      disponible: true
    },
     {
      id: 22,
      nom: "Schweppes",
      description: "Boisson gazeuse",
      prix: 1000,
      image: "assets/images/plats/Schweppes.jfif",
      categorie: "Boisson",
      disponible: true
    },
    {
      id: 23,
      nom: "Chawarma",
      description: "Boisson gazeuse",
      prix: 3000,
      image: "assets/images/plats/Chawarma.jfif",
      categorie: "Plat Européen",
      disponible: true
    },
  ];

  selectedCategorie = 'Tous';
  selectedPlat: Plat | null = null;

  get platsFiltres() {
    if (this.selectedCategorie === 'Tous') return this.plats;
    return this.plats.filter(p => p.categorie === this.selectedCategorie);
  }

  ngOnInit() {}

  filterByCategorie(categorie: string) {
    this.selectedCategorie = categorie;
  }

  openDetails(plat: Plat) {
    this.selectedPlat = plat;
  }

  closeModal() {
    this.selectedPlat = null;
  }
}