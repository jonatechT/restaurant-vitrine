export interface Plat {
  id: number;
  nom: string;
  description: string;
  prix: number;
  image: string;
  categorie: string;
  disponible: boolean;
}

export interface Categorie {
  id: number;
  nom: string;
  icon: string;
}